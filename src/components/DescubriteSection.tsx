import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Compass,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Check,
  Share2,
  Info,
  BookOpen
} from 'lucide-react';
import { Materia } from '../constants';
import { AutorProfile, findAutorById } from '../data/autores';
import {
  BLOQUES_DESCUBRITE,
  DESCUBRITE_ITEMS,
  ESCALA_LIKERT,
  computeDescubriteResult
} from '../data/descubrite';
import { cn } from '../lib/utils';

const DESCUBRITE_STORAGE_KEY = 'psi_uba_descubrite_v1';

interface SavedDescubriteState {
  answers: Record<string, number>;
  completed: boolean;
}

function loadSavedDescubrite(): SavedDescubriteState {
  try {
    const raw = window.localStorage.getItem(DESCUBRITE_STORAGE_KEY);
    if (!raw) return { answers: {}, completed: false };
    const parsed = JSON.parse(raw) as Partial<SavedDescubriteState>;
    const answers: Record<string, number> = {};
    if (parsed.answers && typeof parsed.answers === 'object') {
      for (const item of DESCUBRITE_ITEMS) {
        const v = parsed.answers[item.id];
        if (typeof v === 'number' && v >= 1 && v <= 5) {
          answers[item.id] = v;
        }
      }
    }
    const allAnswered = Object.keys(answers).length === DESCUBRITE_ITEMS.length;
    return {
      answers,
      completed: Boolean(parsed.completed) && allAnswered
    };
  } catch {
    return { answers: {}, completed: false };
  }
}

interface DescubriteSectionProps {
  materias: Materia[];
  approvedSet: Set<string>;
  onSelectMateria: (materia: Materia) => void;
  onSelectAutor: (autor: AutorProfile) => void;
}

type ResultTab = 'electivas-general' | 'electivas-profesional' | 'practicas' | 'catedras';

export const DescubriteSection: React.FC<DescubriteSectionProps> = ({
  materias,
  approvedSet,
  onSelectMateria,
  onSelectAutor
}) => {
  const initialState = useMemo(loadSavedDescubrite, []);
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'results'>(() =>
    initialState.completed ? 'results' : 'intro'
  );
  const [answers, setAnswers] = useState<Record<string, number>>(initialState.answers);
  const [activeBlock, setActiveBlock] = useState<1 | 2 | 3>(1);
  const [missingWarning, setMissingWarning] = useState<string | null>(null);
  const [activeResultTab, setActiveResultTab] = useState<ResultTab>('electivas-general');
  const [hideApproved, setHideApproved] = useState<boolean>(true);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  const totalItems = DESCUBRITE_ITEMS.length;
  const answeredCount = useMemo(
    () => DESCUBRITE_ITEMS.filter((item) => typeof answers[item.id] === 'number').length,
    [answers]
  );

  useEffect(() => {
    try {
      const payload: SavedDescubriteState = {
        answers,
        completed: phase === 'results' && answeredCount === totalItems
      };
      window.localStorage.setItem(DESCUBRITE_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota or private mode errors
    }
  }, [answers, phase, answeredCount, totalItems]);

  const blockItems = useMemo(
    () => DESCUBRITE_ITEMS.filter((item) => item.bloque === activeBlock),
    [activeBlock]
  );

  const currentBlockMeta = BLOQUES_DESCUBRITE[activeBlock - 1];

  const blockCompletion = useMemo(() => {
    return BLOQUES_DESCUBRITE.map((bloque) => {
      const items = DESCUBRITE_ITEMS.filter((i) => i.bloque === bloque.numero);
      const done = items.filter((i) => typeof answers[i.id] === 'number').length;
      return { numero: bloque.numero, done, total: items.length };
    });
  }, [answers]);

  const result = useMemo(() => {
    if (phase !== 'results') return null;
    return computeDescubriteResult(answers, materias);
  }, [phase, answers, materias]);

  const matchedAutores = useMemo(() => {
    if (!result) return [];
    return result.autoresIds
      .map((id) => findAutorById(id))
      .filter((a): a is AutorProfile => Boolean(a));
  }, [result]);

  const handleSelectAnswer = useCallback((itemId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [itemId]: value }));
    setMissingWarning(null);
  }, []);

  const handleFinish = useCallback(() => {
    const firstMissing = DESCUBRITE_ITEMS.find((item) => typeof answers[item.id] !== 'number');
    if (firstMissing) {
      setActiveBlock(firstMissing.bloque);
      setMissingWarning(
        `Te falta responder ${totalItems - answeredCount} ${
          totalItems - answeredCount === 1 ? 'afirmación' : 'afirmaciones'
        } para calcular tu perfil completo.`
      );
      return;
    }
    setMissingWarning(null);
    setPhase('results');
    document.getElementById('descubrite')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [answers, answeredCount, totalItems]);

  const handleRestart = useCallback(() => {
    setAnswers({});
    setActiveBlock(1);
    setMissingWarning(null);
    setPhase('quiz');
    document.getElementById('descubrite')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleEditAnswers = useCallback(() => {
    setActiveBlock(1);
    setMissingWarning(null);
    setPhase('quiz');
    document.getElementById('descubrite')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleCopySummary = useCallback(async () => {
    if (!result) return;
    const topText = result.topEjes
      .map((s, idx) => `${idx + 1}. ${s.eje.nombre} (${s.porcentaje}%)`)
      .join('\n');
    const electivasGen = result.electivasGeneral
      .slice(0, 3)
      .map((e) => `- ${e.materia.nombre}`)
      .join('\n');
    const electivasProf = result.electivasProfesional
      .slice(0, 3)
      .map((e) => `- ${e.materia.nombre}`)
      .join('\n');

    const text = [
      'Mi perfil orientativo · Descubrite (Psicología UBA)',
      '',
      'Ejes de mayor afinidad:',
      topText,
      '',
      `Estilo predominante: ${result.estiloResumen.titulo}`,
      '',
      'Electivas General sugeridas:',
      electivasGen,
      '',
      'Electivas Profesional sugeridas:',
      electivasProf
    ].join('\n');

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedSummary(true);
      window.setTimeout(() => setCopiedSummary(false), 2400);
    } catch {
      // Ignore clipboard failures
    }
  }, [result]);

  const visibleElectivasGeneral = useMemo(() => {
    if (!result) return [];
    const list = hideApproved
      ? result.electivasGeneral.filter((item) => !approvedSet.has(item.materia.id))
      : result.electivasGeneral;
    return list.slice(0, 6);
  }, [result, hideApproved, approvedSet]);

  const visibleElectivasProfesional = useMemo(() => {
    if (!result) return [];
    const list = hideApproved
      ? result.electivasProfesional.filter((item) => !approvedSet.has(item.materia.id))
      : result.electivasProfesional;
    return list.slice(0, 6);
  }, [result, hideApproved, approvedSet]);

  const visiblePracticas = useMemo(() => {
    if (!result) return [];
    const list = hideApproved
      ? result.practicas.filter((item) => !approvedSet.has(item.materia.id))
      : result.practicas;
    return list.slice(0, 6);
  }, [result, hideApproved, approvedSet]);

  const hasAnyApprovedRecommendation = useMemo(() => {
    if (!result) return false;
    return (
      result.electivasGeneral.some((i) => approvedSet.has(i.materia.id)) ||
      result.electivasProfesional.some((i) => approvedSet.has(i.materia.id)) ||
      result.practicas.some((i) => approvedSet.has(i.materia.id))
    );
  }, [result, approvedSet]);

  return (
    <section
      id="descubrite"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-paper border-t border-ink/8 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
                Brújula de exploración académica
              </span>
              <div className="h-[1px] w-8 bg-bordo/30" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink text-balance">
              Descubrite
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mt-3">
              Un recorrido breve de 24 afirmaciones (3 a 4 minutos) para mapear tus afinidades
              teóricas, profesionales y de cursada, y sugerirte electivas, prácticas, cátedras y
              autores del Plan 1985.
            </p>
          </div>

          {phase === 'results' && (
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-ink/12 text-xs font-semibold text-ink hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap cursor-pointer"
              >
                {copiedSummary ? <Check size={14} className="text-emerald-700" /> : <Share2 size={14} />}
                {copiedSummary ? 'Resumen copiado' : 'Copiar resumen'}
              </button>
              <button
                type="button"
                onClick={handleEditAnswers}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-ink/12 text-xs font-semibold text-ink hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap cursor-pointer"
              >
                Editar respuestas
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-bordo text-white text-xs font-semibold hover:bg-bordo-light transition-colors whitespace-nowrap cursor-pointer"
              >
                <RotateCcw size={13} />
                Volver a empezar
              </button>
            </div>
          )}
        </div>

        {/* ================= PHASE 1: INTRO ================= */}
        {phase === 'intro' && (
          <div className="bg-white border border-ink/10 rounded-3xl p-6 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <p className="text-xs font-semibold text-muted mb-2 tabular-nums">
                    24 afirmaciones · 3 bloques · 3–4 minutos · Guardado en este dispositivo
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink leading-snug text-balance">
                    ¿Qué electivas, prácticas y cátedras dialogan mejor con tu recorrido?
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed mt-3">
                    Al llegar al ciclo general y profesional de Psicología UBA aparecen 42 materias
                    electivas y 58 prácticas posibles. Esta brújula cruza tus intereses en 8 ejes
                    para ayudarte a armar un trayecto coherente y priorizar lo que todavía no
                    cursaste.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-ink/8">
                  <div>
                    <p className="text-xs font-bold text-bordo tabular-nums mb-1">01. Marco teórico</p>
                    <p className="text-xs text-muted leading-relaxed">
                      Qué preguntas, tradiciones y fundamentos epistemológicos te convocan más.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bordo tabular-nums mb-1">02. Ámbitos reales</p>
                    <p className="text-xs text-muted leading-relaxed">
                      En qué escenarios de ejercicio profesional te imaginás interviniendo.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bordo tabular-nums mb-1">03. Estilo personal</p>
                    <p className="text-xs text-muted leading-relaxed">
                      Cómo preferís escuchar, estudiar, evaluar y trabajar en la práctica.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPhase('quiz');
                      setActiveBlock(1);
                    }}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-bordo text-white text-sm font-bold hover:bg-bordo-light transition-colors shadow-lg shadow-bordo/15 whitespace-nowrap cursor-pointer"
                  >
                    <Compass size={17} />
                    {answeredCount > 0 && answeredCount < totalItems
                      ? `Continuar exploración (${answeredCount}/${totalItems})`
                      : 'Comenzar exploración'}
                    <ChevronRight size={16} />
                  </button>
                  {answeredCount > 0 && answeredCount < totalItems && (
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="text-xs font-semibold text-muted hover:text-bordo transition-colors cursor-pointer"
                    >
                      Reiniciar respuestas
                    </button>
                  )}
                </div>
              </div>

              {/* Methodological & Ethical Notice */}
              <aside className="lg:col-span-5 bg-paper border border-ink/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-bordo">
                  <Info size={16} className="shrink-0" />
                  <h4 className="text-xs font-bold tracking-[0.14em] uppercase">
                    Marco conceptual y alcance
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-ink/90 leading-relaxed">
                  <strong>Descubrite es una brújula de exploración académica</strong>, no un test
                  psicométrico estandarizado ni un reemplazo de un proceso de orientación
                  vocacional profesional.
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Sus dimensiones están inspiradas en tres referencias consolidadas en psicología:
                </p>
                <ul className="space-y-2 text-xs text-muted leading-relaxed">
                  <li>
                    <span className="font-semibold text-ink">Holland (RIASEC) y CIP-R</span>{' '}
                    (Fogliatto y Pérez, UNC, validado en Argentina) — adaptados a ámbitos de
                    inserción del psicólogo.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">TOPS-R</span> (Worthington y Dillon) —
                    ejes de afinidad teórico-epistemológica.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">
                      Estilo Personal del Terapeuta (EPT)
                    </span>{' '}
                    (Héctor Fernández-Álvarez, Argentina) — modos atencionales, operativos y de
                    trabajo.
                  </li>
                </ul>
                <p className="text-[11px] text-muted pt-3 border-t border-ink/8 leading-relaxed">
                  Las sugerencias de cátedras obligatorias cubren únicamente materias con contrastes
                  de enfoque conocidos y son siempre orientativas: revisá los programas vigentes
                  antes de inscribirte.
                </p>
              </aside>
            </div>
          </div>
        )}

        {/* ================= PHASE 2: QUIZ ================= */}
        {phase === 'quiz' && (
          <div className="bg-white border border-ink/10 rounded-3xl p-5 sm:p-8 md:p-10 space-y-8">
            {/* Top Progress & Block Stepper */}
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {BLOQUES_DESCUBRITE.map((bloque) => {
                    const comp = blockCompletion[bloque.numero - 1];
                    const isActive = activeBlock === bloque.numero;
                    const isDone = comp.done === comp.total;
                    return (
                      <button
                        key={bloque.numero}
                        type="button"
                        onClick={() => setActiveBlock(bloque.numero)}
                        className={cn(
                          'inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer border',
                          isActive
                            ? 'bg-ink text-white border-ink'
                            : 'bg-paper text-muted border-ink/10 hover:text-ink hover:border-ink/25'
                        )}
                      >
                        <span className="tabular-nums">
                          {bloque.numero}. {bloque.titulo.split(' ')[0]}
                        </span>
                        <span
                          className={cn(
                            'text-[11px] tabular-nums',
                            isActive ? 'text-white/80' : isDone ? 'text-emerald-700 font-bold' : 'text-muted'
                          )}
                        >
                          {comp.done}/{comp.total}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-muted tabular-nums whitespace-nowrap">
                    {answeredCount} de {totalItems} respondidas
                  </span>
                  <button
                    type="button"
                    onClick={() => setPhase('intro')}
                    className="text-xs font-semibold text-muted hover:text-bordo transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Ver marco
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-paper rounded-full overflow-hidden">
                <div
                  className="h-full bg-bordo transition-all duration-300 ease-out"
                  style={{ width: `${Math.round((answeredCount / totalItems) * 100)}%` }}
                />
              </div>

              {/* Block Intro */}
              <div className="pt-1">
                <p className="text-xs font-medium text-violeta mb-1">
                  Bloque {currentBlockMeta.numero} de 3 · {currentBlockMeta.subtitulo}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink">
                  {currentBlockMeta.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">{currentBlockMeta.descripcion}</p>
              </div>
            </div>

            {missingWarning && (
              <div
                role="alert"
                className="px-4 py-3 rounded-xl bg-bordo/[0.06] border border-bordo/20 text-xs sm:text-sm font-medium text-bordo"
              >
                {missingWarning}
              </div>
            )}

            {/* Desktop Scale Header */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3 border-b border-ink/10 text-[11px] font-semibold text-muted">
              <div className="col-span-7">Afirmación</div>
              <div className="col-span-5 grid grid-cols-5 text-center">
                {ESCALA_LIKERT.map((step) => (
                  <span key={step.valor}>{step.corto}</span>
                ))}
              </div>
            </div>

            {/* Statements List */}
            <div className="divide-y divide-ink/8">
              {blockItems.map((item, idx) => {
                const globalIndex = (activeBlock - 1) * 8 + idx + 1;
                const selectedVal = answers[item.id];
                const isMissingHighlight = Boolean(missingWarning && typeof selectedVal !== 'number');

                return (
                  <fieldset
                    key={item.id}
                    className={cn(
                      'py-5 first:pt-2 last:pb-2 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-colors',
                      isMissingHighlight && 'bg-bordo/[0.03] -mx-3 px-3 rounded-xl'
                    )}
                  >
                    <legend className="sr-only">{item.enunciado}</legend>
                    <div className="md:col-span-7 pr-2">
                      <p className="text-sm sm:text-[15px] text-ink leading-relaxed font-medium">
                        <span className="text-xs font-bold text-bordo/70 mr-2 tabular-nums">
                          {String(globalIndex).padStart(2, '0')}.
                        </span>
                        {item.enunciado}
                      </p>
                    </div>

                    <div className="md:col-span-5 grid grid-cols-5 gap-1.5 sm:gap-2">
                      {ESCALA_LIKERT.map((step) => {
                        const checked = selectedVal === step.valor;
                        return (
                          <button
                            key={step.valor}
                            type="button"
                            role="radio"
                            aria-checked={checked}
                            aria-label={`${step.etiqueta} (${step.valor} de 5)`}
                            onClick={() => handleSelectAnswer(item.id, step.valor)}
                            className={cn(
                              'min-h-[44px] rounded-xl border text-xs font-semibold transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bordo/40',
                              checked
                                ? 'bg-bordo border-bordo text-white shadow-sm'
                                : 'bg-paper/70 border-ink/10 text-ink hover:border-bordo/40 hover:bg-white'
                            )}
                          >
                            <span className="tabular-nums font-bold">{step.valor}</span>
                            <span
                              className={cn(
                                'text-[10px] leading-none md:hidden',
                                checked ? 'text-white/85' : 'text-muted'
                              )}
                            >
                              {step.corto}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              })}
            </div>

            {/* Footer Controls */}
            <div className="pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                disabled={activeBlock === 1}
                onClick={() => {
                  setActiveBlock((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : 1));
                  document.getElementById('descubrite')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={cn(
                  'inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold border transition-colors whitespace-nowrap',
                  activeBlock === 1
                    ? 'border-ink/8 text-muted/40 cursor-not-allowed'
                    : 'border-ink/15 text-ink hover:border-bordo hover:text-bordo cursor-pointer'
                )}
              >
                <ChevronLeft size={15} />
                Bloque anterior
              </button>

              {activeBlock < 3 ? (
                <button
                  type="button"
                  onClick={() => {
                    setActiveBlock((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : 3));
                    document.getElementById('descubrite')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-xs font-bold hover:bg-bordo transition-colors whitespace-nowrap cursor-pointer"
                >
                  Siguiente bloque ({activeBlock + 1} de 3)
                  <ChevronRight size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinish}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-bordo text-white text-xs font-bold hover:bg-bordo-light transition-colors shadow-lg shadow-bordo/15 whitespace-nowrap cursor-pointer"
                >
                  <Compass size={15} />
                  Ver mi perfil académico
                  <ChevronRight size={15} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ================= PHASE 3: RESULTS ================= */}
        {phase === 'results' && result && (
          <div className="space-y-10">
            {/* Top Profile Summary + 8-Axis Affinity Chart */}
            <div className="bg-white border border-ink/10 rounded-3xl p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left: Dominant Profile Synthesis */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-bordo mb-2">
                      Tus ejes de mayor afinidad
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink leading-tight text-balance">
                      {result.topEjes[0].eje.nombre}
                      {result.topEjes[1] && result.topEjes[1].porcentaje >= 50
                        ? ` y ${result.topEjes[1].eje.nombre}`
                        : ''}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mt-3">
                      {result.topEjes[0].eje.resumen}
                    </p>
                  </div>

                  {/* Top 3 axes key descriptors */}
                  <div className="space-y-3 pt-4 border-t border-ink/8">
                    {result.topEjes.map((item, idx) => (
                      <div key={item.eje.id} className="space-y-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-xs font-bold text-ink">
                            0{idx + 1}. {item.eje.nombre}
                          </span>
                          <span className="text-xs font-bold text-bordo tabular-nums">
                            {item.porcentaje}%
                          </span>
                        </div>
                        <p className="text-xs text-muted leading-relaxed">
                          {item.eje.ambitosTipicos}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* EPT Style Note */}
                  <div className="pt-4 border-t border-ink/8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-violeta mb-1.5">
                      Estilo de cursada y práctica (EPT)
                    </p>
                    <p className="text-sm font-semibold text-ink">{result.estiloResumen.titulo}</p>
                    <p className="text-xs text-muted leading-relaxed mt-1">
                      {result.estiloResumen.descripcion}
                    </p>
                  </div>
                </div>

                {/* Right: Complete 8-Axis Affinity Breakdown */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-baseline justify-between gap-4 pb-2 border-b border-ink/8">
                    <h4 className="text-sm font-bold text-ink">Mapa completo de afinidades</h4>
                    <span className="text-xs text-muted tabular-nums">8 ejes · 0% a 100%</span>
                  </div>

                  <div className="space-y-3.5">
                    {result.scores.map((item, idx) => {
                      const isTop = idx < 2;
                      return (
                        <div key={item.eje.id} className="space-y-1.5">
                          <div className="flex items-baseline justify-between gap-3 text-xs sm:text-sm">
                            <span
                              className={cn(
                                'truncate',
                                isTop ? 'font-bold text-ink' : 'font-medium text-muted'
                              )}
                            >
                              {item.eje.nombre}
                            </span>
                            <span
                              className={cn(
                                'tabular-nums shrink-0',
                                isTop ? 'font-bold text-bordo' : 'font-semibold text-muted'
                              )}
                            >
                              {item.porcentaje}%
                            </span>
                          </div>
                          <div className="h-2 w-full bg-paper rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: `${Math.max(4, item.porcentaje)}%`,
                                backgroundColor: isTop ? item.eje.color : '#a8a29e'
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-[11px] text-muted pt-3 leading-relaxed">
                    Resultado orientativo inspirado en dimensiones de Holland/CIP-R, TOPS-R y EPT
                    (Fernández-Álvarez). No equivale a un test psicométrico estandarizado ni
                    reemplaza una orientación vocacional profesional.
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendations Explorer (Segmented Tabs) */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
                    Recorrido sugerido para tu perfil
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    Tocá cualquier materia para abrir su ficha completa, correlativas y programa.
                  </p>
                </div>

                {hasAnyApprovedRecommendation && activeResultTab !== 'catedras' && (
                  <button
                    type="button"
                    onClick={() => setHideApproved((prev) => !prev)}
                    className={cn(
                      'inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer',
                      hideApproved
                        ? 'bg-ink text-white border-ink'
                        : 'bg-white text-muted border-ink/15 hover:text-ink'
                    )}
                  >
                    <Check size={14} className={hideApproved ? 'opacity-100' : 'opacity-35'} />
                    Ocultar las que ya aprobé
                  </button>
                )}
              </div>

              {/* Functional Segmented Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-ink/10 rounded-2xl w-fit max-w-full">
                {(
                  [
                    { id: 'electivas-general', label: 'Electivas General' },
                    { id: 'electivas-profesional', label: 'Electivas Profesional' },
                    { id: 'practicas', label: 'Prácticas' },
                    { id: 'catedras', label: 'Cátedras obligatorias' }
                  ] as const
                ).map((tab) => {
                  const active = activeResultTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveResultTab(tab.id)}
                      className={cn(
                        'px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer',
                        active
                          ? 'bg-bordo text-white shadow-sm'
                          : 'text-muted hover:text-ink hover:bg-paper'
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content: Electivas General / Profesional / Prácticas */}
              {activeResultTab !== 'catedras' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {(activeResultTab === 'electivas-general'
                    ? visibleElectivasGeneral
                    : activeResultTab === 'electivas-profesional'
                    ? visibleElectivasProfesional
                    : visiblePracticas
                  ).map(({ materia, afinidad }) => {
                    const isApproved = approvedSet.has(materia.id);
                    const titular = materia.catedras[0]?.titular;
                    return (
                      <button
                        key={materia.id}
                        type="button"
                        onClick={() => onSelectMateria(materia)}
                        className="text-left bg-white border border-ink/10 rounded-2xl p-5 hover:border-bordo/40 transition-colors flex flex-col justify-between gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bordo/40"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2 text-xs text-muted">
                            <span className="truncate">
                              {materia.area ?? materia.ciclo}
                              {isApproved ? ' · Aprobada' : ''}
                            </span>
                            <span className="font-bold text-bordo tabular-nums shrink-0">
                              {afinidad}% afín
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-ink group-hover:text-bordo transition-colors leading-snug">
                            {materia.nombre}
                          </h4>
                          <p className="text-xs text-muted leading-relaxed line-clamp-3">
                            {materia.descripcion}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-ink/8 flex items-center justify-between gap-2 text-xs">
                          <span className="text-muted truncate">
                            {titular ? `Titular / Coord.: ${titular}` : materia.ciclo}
                          </span>
                          <span className="font-bold text-bordo inline-flex items-center gap-1 shrink-0">
                            Ver ficha
                            <ChevronRight
                              size={13}
                              className="group-hover:translate-x-0.5 transition-transform"
                            />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Tab Content: Cátedras obligatorias */}
              {activeResultTab === 'catedras' && (
                <div className="space-y-4">
                  <p className="text-xs text-muted leading-relaxed max-w-3xl">
                    Estas sugerencias abarcan únicamente materias obligatorias donde existen
                    diferencias conocidas de enfoque entre Cátedra I y Cátedra II. Si ya aprobaste
                    alguna, igual te sirve como referencia del perfil que más dialoga con tus
                    intereses.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {result.catedrasSugeridas.map(({ rule, materia, afinidad }) => {
                      const isApproved = materia ? approvedSet.has(materia.id) : false;
                      return (
                        <button
                          key={rule.id}
                          type="button"
                          onClick={() => materia && onSelectMateria(materia)}
                          disabled={!materia}
                          className="text-left bg-white border border-ink/10 rounded-2xl p-5 hover:border-bordo/40 transition-colors flex flex-col justify-between gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bordo/40"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between gap-2 text-xs text-muted">
                              <span>
                                {rule.catedraNombre} · {rule.titular}
                                {isApproved ? ' · Ya aprobada' : ''}
                              </span>
                              <span className="font-bold text-bordo tabular-nums shrink-0">
                                {afinidad}% afín
                              </span>
                            </div>
                            <h4 className="text-base font-bold text-ink group-hover:text-bordo transition-colors">
                              {rule.materiaNombre}
                            </h4>
                            <p className="text-xs text-muted leading-relaxed">{rule.motivo}</p>
                          </div>

                          <div className="pt-3 border-t border-ink/8 flex items-center justify-end text-xs font-bold text-bordo">
                            <span className="inline-flex items-center gap-1">
                              Abrir materia y programas
                              <ChevronRight
                                size={13}
                                className="group-hover:translate-x-0.5 transition-transform"
                              />
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Matched Authors from Library */}
            {matchedAutores.length > 0 && (
              <div className="pt-6 border-t border-ink/10 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink flex items-center gap-2.5">
                      <BookOpen size={19} className="text-bordo shrink-0" />
                      Autores clave para empezar a leer
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mt-1">
                      Referentes de nuestra biblioteca alineados con tus ejes dominantes.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matchedAutores.map((autor) => (
                    <button
                      key={autor.id}
                      type="button"
                      onClick={() => onSelectAutor(autor)}
                      className="text-left bg-white border border-ink/10 rounded-2xl p-4 hover:border-bordo/40 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bordo/40"
                    >
                      <p className="text-[11px] font-medium text-muted mb-1">
                        {autor.corriente} · {autor.fechas}
                      </p>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-ink group-hover:text-bordo transition-colors">
                          {autor.nombre}
                        </h4>
                        <ChevronRight
                          size={14}
                          className="text-muted group-hover:text-bordo group-hover:translate-x-0.5 transition-all shrink-0"
                        />
                      </div>
                      <p className="text-xs text-muted leading-relaxed mt-1.5 line-clamp-2">
                        {autor.resumenCorto}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
