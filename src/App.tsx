import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Users,
  GraduationCap,
  Search,
  ChevronRight,
  Info,
  ExternalLink,
  X,
  Check,
  Share2
} from 'lucide-react';
import { PLAN_ESTUDIOS, Materia } from './constants';
import { cn } from './lib/utils';
import { ProgressChart } from './components/ProgressChart';
import { CurriculumFlowchart } from './components/CurriculumFlowchart';

const STORAGE_KEY = 'psi_uba_aprobadas_v1';

const CYCLES = [
  'CBC',
  'Formación General',
  'Electivas General',
  'Formación Profesional',
  'Electivas Profesional',
  'Prácticas'
] as const;

const AUTHORS = [
  'Freud',
  'Lacan',
  'Piaget',
  'Vygotsky',
  'Winnicott',
  'Moscovici',
  'Foucault',
  'Assoun',
  'Miller',
  'Lombardi',
  'Rabinovich',
  'Stolkiner'
];

function normalizeText(value?: string): string {
  if (!value) return '';
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function loadApprovedIds(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [selectedCycle, setSelectedCycle] = useState<string>('CBC');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyApprovedFilter, setOnlyApprovedFilter] = useState<'all' | 'approved' | 'pending'>('all');
  const [selectedMateria, setSelectedMateria] = useState<Materia | null>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const materiaId = params.get('materia');
      if (!materiaId) return null;
      return PLAN_ESTUDIOS.find((m) => m.id === materiaId) ?? null;
    } catch {
      return null;
    }
  });
  const [approvedIds, setApprovedIds] = useState<string[]>(loadApprovedIds);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const approvedSet = useMemo(() => new Set(approvedIds), [approvedIds]);

  const materiaByNormalizedName = useMemo(() => {
    const map = new Map<string, Materia>();
    for (const m of PLAN_ESTUDIOS) {
      const key = normalizeText(m.nombre);
      if (!map.has(key)) {
        map.set(key, m);
      }
    }
    return map;
  }, []);

  const findCorrelativaMateria = useCallback(
    (corrName: string): Materia | undefined => {
      const normalized = normalizeText(corrName);
      const exact = materiaByNormalizedName.get(normalized);
      if (exact) return exact;
      return PLAN_ESTUDIOS.find((m) => normalizeText(m.nombre) === normalized);
    },
    [materiaByNormalizedName]
  );

  // Persist approved courses in localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(approvedIds));
    } catch {
      // Ignore storage quota or private mode errors
    }
  }, [approvedIds]);

  // Keep URL query parameter in sync with selected materia for easy sharing
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (selectedMateria) {
        url.searchParams.set('materia', selectedMateria.id);
      } else {
        url.searchParams.delete('materia');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignore history errors in restricted environments
    }
  }, [selectedMateria]);

  // Close modal with Escape and lock background scroll while open
  useEffect(() => {
    if (!selectedMateria) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMateria(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMateria]);

  const toggleApproved = useCallback((id: string) => {
    setApprovedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const handleShareMateria = useCallback(async (materia: Materia) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?materia=${encodeURIComponent(materia.id)}`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopiedId(materia.id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === materia.id ? null : current));
      }, 2200);
    } catch {
      // Ignore clipboard failures silently
    }
  }, []);

  const filteredMaterias = useMemo(() => {
    const query = normalizeText(searchQuery.trim());

    return PLAN_ESTUDIOS.filter((m) => {
      if (onlyApprovedFilter === 'approved' && !approvedSet.has(m.id)) return false;
      if (onlyApprovedFilter === 'pending' && approvedSet.has(m.id)) return false;

      if (query) {
        return (
          normalizeText(m.nombre).includes(query) ||
          normalizeText(m.descripcion).includes(query) ||
          normalizeText(m.ciclo).includes(query) ||
          normalizeText(m.area).includes(query) ||
          m.objetivos.some((obj) => normalizeText(obj).includes(query)) ||
          (m.correlativas?.some((corr) => normalizeText(corr).includes(query)) ?? false) ||
          m.catedras.some(
            (c) =>
              normalizeText(c.nombre).includes(query) ||
              normalizeText(c.titular).includes(query) ||
              c.bibliografia.some(
                (b) =>
                  normalizeText(b.autor).includes(query) ||
                  normalizeText(b.titulo).includes(query) ||
                  normalizeText(b.editorial).includes(query) ||
                  normalizeText(b.año).includes(query)
              )
          )
        );
      }

      const matchesCycle = m.ciclo === selectedCycle;
      const matchesArea = selectedArea === 'all' || m.area === selectedArea;
      return matchesCycle && matchesArea;
    });
  }, [selectedCycle, selectedArea, searchQuery, onlyApprovedFilter, approvedSet]);

  const areas = useMemo(() => {
    const allAreas = PLAN_ESTUDIOS.filter((m) => m.ciclo === selectedCycle)
      .map((m) => m.area)
      .filter((area): area is string => Boolean(area));
    return ['all', ...Array.from(new Set(allAreas))];
  }, [selectedCycle]);

  const cycleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const m of PLAN_ESTUDIOS) {
      counts[m.ciclo] = (counts[m.ciclo] ?? 0) + 1;
    }
    return counts;
  }, []);

  const openCorrelativa = (corrName: string) => {
    const target = findCorrelativaMateria(corrName);
    if (target) {
      setSelectedMateria(target);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-bordo/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-paper/85 backdrop-blur-xl border-b border-ink/5 px-4 sm:px-6 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-bordo rounded-full flex items-center justify-center text-white shadow-lg shadow-bordo/20 transition-transform group-hover:scale-105">
              <span className="text-xl sm:text-2xl font-serif font-bold leading-none select-none">Ψ</span>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-ink whitespace-nowrap">
              Psicología UBA
            </span>
          </a>

          <div className="flex items-center gap-4 sm:gap-8 text-xs font-semibold text-muted">
            <a href="#plan" className="hover:text-bordo transition-colors whitespace-nowrap">
              Plan de Estudios
            </a>
            <a href="#diagrama" className="hover:text-bordo transition-colors whitespace-nowrap">
              Diagrama
            </a>
            <a href="#enlaces" className="hover:text-bordo transition-colors whitespace-nowrap">
              Enlaces Útiles
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-paper">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-10">
              <div className="h-[1px] w-10 bg-bordo" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
                Universidad de Buenos Aires
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[8.5rem] font-serif font-bold leading-[0.9] tracking-tighter mb-8 sm:mb-12 text-ink text-balance">
              Facultad de <br />
              <span className="italic text-bordo">Psicología</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-base sm:text-xl text-muted leading-relaxed font-medium text-balance">
                Explora el plan de estudios completo, incluyendo el{' '}
                <span className="text-bordo font-bold border-b-2 border-bordo/20">CBC</span>, las
                cátedras, correlativas y la bibliografía oficial de la carrera.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#plan"
                  className="px-7 sm:px-9 py-4 bg-bordo text-white rounded-full font-bold hover:bg-bordo-light transition-all flex items-center gap-3 group shadow-xl shadow-bordo/20 whitespace-nowrap"
                >
                  Ver Plan de Estudios
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs font-medium text-muted tabular-nums">
                  6 CBC · 23 obligatorias · 5 electivas (34 materias)
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee of Authors */}
        <div className="mt-16 sm:mt-24 border-y border-ink/5 py-5 sm:py-7 overflow-hidden relative" aria-hidden="true">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...AUTHORS, ...AUTHORS].map((author, idx) => (
              <span
                key={idx}
                className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold italic text-ink/[0.06] mx-8 sm:mx-12 uppercase tracking-tighter select-none"
              >
                {author}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="plan" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative scroll-mt-16">
        <div className="mb-12 sm:mb-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 sm:gap-10 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">Explorar</span>
                <div className="h-[1px] w-8 bg-bordo/30" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink">Plan de Estudios</h2>
            </div>

            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-bordo/50 pointer-events-none"
                size={18}
              />
              <input
                type="search"
                aria-label="Buscar materia, titular, código o autor"
                placeholder="Buscar materia, titular, código o autor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-11 py-3.5 bg-white border border-ink/10 rounded-2xl text-sm font-medium focus:outline-none focus:border-bordo focus:ring-2 focus:ring-bordo/15 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-bordo hover:bg-bordo/5 transition-colors"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Student Progress Circular Chart & Cycle Breakdown */}
          <ProgressChart
            materias={PLAN_ESTUDIOS}
            cycles={CYCLES}
            approvedSet={approvedSet}
            selectedCycle={selectedCycle}
            onlyApprovedFilter={onlyApprovedFilter}
            onSelectCycle={(cycle) => {
              setSelectedCycle(cycle);
              setSelectedArea('all');
              setSearchQuery('');
            }}
            onChangeApprovedFilter={setOnlyApprovedFilter}
            onResetProgress={() => {
              setApprovedIds([]);
              setOnlyApprovedFilter('all');
            }}
          />

          {/* Cycle Filters or Search Banner */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {searchQuery.trim() ? (
              <div className="w-full px-5 py-3.5 bg-bordo/5 border border-bordo/15 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-bordo tabular-nums">
                  {filteredMaterias.length}{' '}
                  {filteredMaterias.length === 1 ? 'resultado' : 'resultados'} en todo el plan de
                  estudios para &ldquo;{searchQuery.trim()}&rdquo;
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-bordo hover:underline transition-colors whitespace-nowrap"
                >
                  Limpiar búsqueda
                </button>
              </div>
            ) : (
              CYCLES.map((cycle) => (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => {
                    setSelectedCycle(cycle);
                    setSelectedArea('all');
                  }}
                  className={cn(
                    'px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap tabular-nums',
                    selectedCycle === cycle
                      ? 'bg-ink border-ink text-white shadow-md shadow-ink/15'
                      : 'bg-white border-ink/10 text-muted hover:border-bordo hover:text-bordo'
                  )}
                >
                  {cycle}{' '}
                  <span
                    className={cn(
                      'ml-1 font-normal',
                      selectedCycle === cycle ? 'text-white/70' : 'text-muted/70'
                    )}
                  >
                    ({cycleCounts[cycle] ?? 0})
                  </span>
                </button>
              ))
            )}
          </div>

          {/* Area Filter */}
          {!searchQuery.trim() && areas.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-2 mb-6 p-4 sm:p-5 bg-white rounded-2xl border border-ink/8"
            >
              <span className="text-xs font-bold text-muted mr-2">Área:</span>
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border whitespace-nowrap',
                    selectedArea === area
                      ? 'bg-bordo border-bordo text-white'
                      : 'bg-paper border-ink/10 text-muted hover:border-bordo hover:text-bordo'
                  )}
                >
                  {area === 'all' ? 'Todas las áreas' : area}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Grid of Materias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMaterias.map((materia) => {
              const isApproved = approvedSet.has(materia.id);
              return (
                <motion.article
                  layout
                  key={materia.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedMateria(materia)}
                  className={cn(
                    'group cursor-pointer bg-white border p-6 sm:p-8 rounded-3xl hover:border-bordo transition-all hover:shadow-xl hover:shadow-bordo/5 relative flex flex-col h-full',
                    isApproved ? 'border-emerald-600/30 bg-emerald-50/20' : 'border-ink/8'
                  )}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className={cn(
                        'text-[11px] font-bold tracking-wide leading-snug',
                        materia.ciclo === 'CBC' ? 'text-violeta' : 'text-bordo'
                      )}
                    >
                      {materia.ciclo}
                      {materia.area ? ` · ${materia.area}` : ''}
                      {materia.año > 0 ? ` · ${materia.año}° Año` : ''} ·{' '}
                      {materia.cuatrimestre === 'Anual' ? 'Anual' : `${materia.cuatrimestre}° Cuat.`}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleApproved(materia.id);
                      }}
                      aria-label={
                        isApproved
                          ? `Quitar ${materia.nombre} de aprobadas`
                          : `Marcar ${materia.nombre} como aprobada`
                      }
                      aria-pressed={isApproved}
                      className={cn(
                        'shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors',
                        isApproved
                          ? 'bg-emerald-700 border-emerald-700 text-white'
                          : 'bg-paper border-ink/15 text-muted/60 hover:border-bordo hover:text-bordo'
                      )}
                      title={isApproved ? 'Materia aprobada' : 'Marcar como aprobada'}
                    >
                      <Check size={15} />
                    </button>
                  </div>

                  <h3 className="text-2xl font-serif font-bold leading-snug mb-3 group-hover:text-bordo transition-colors">
                    {materia.nombre}
                  </h3>

                  <p className="text-sm text-muted mb-6 leading-relaxed line-clamp-3">
                    {materia.descripcion}
                  </p>

                  <div className="mt-auto pt-5 border-t border-ink/6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-ink tabular-nums">
                      <Users size={15} className="text-bordo shrink-0" />
                      <span>
                        {materia.catedras.length}{' '}
                        {materia.catedras.length === 1 ? 'Cátedra' : 'Cátedras'}
                      </span>
                      {isApproved && (
                        <span className="text-emerald-700 font-bold">· Aprobada</span>
                      )}
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-bordo opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredMaterias.length === 0 && (
          <div className="text-center py-16 px-6 bg-white border border-ink/8 rounded-3xl">
            <p className="text-muted text-base mb-4">
              No se encontraron materias con los filtros actuales.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedArea('all');
                setOnlyApprovedFilter('all');
              }}
              className="px-5 py-2.5 rounded-full bg-bordo text-white text-xs font-bold hover:bg-bordo-light transition-colors"
            >
              Ver todas las materias
            </button>
          </div>
        )}
      </main>

      {/* Official Flowchart Diagram */}
      <CurriculumFlowchart />

      {/* Modal for Materia Details */}
      <AnimatePresence>
        {selectedMateria && (
          <div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-materia-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMateria(null)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-bordo/10"
            >
              {/* Sticky Modal Header */}
              <div className="px-5 sm:px-8 md:px-10 pt-5 sm:pt-7 pb-4 border-b border-ink/8 flex items-start justify-between gap-4 bg-white shrink-0">
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-wide text-violeta mb-1.5">
                    {selectedMateria.ciclo}
                    {selectedMateria.area ? ` · ${selectedMateria.area}` : ''}
                    {selectedMateria.año > 0 ? ` · ${selectedMateria.año}° Año` : ''} ·{' '}
                    {selectedMateria.cuatrimestre === 'Anual'
                      ? 'Anual'
                      : `${selectedMateria.cuatrimestre}° Cuat.`}
                  </p>
                  <h2
                    id="modal-materia-title"
                    className="text-2xl sm:text-4xl font-serif font-bold text-ink leading-tight text-balance"
                  >
                    {selectedMateria.nombre}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMateria(null)}
                  aria-label="Cerrar detalle de materia"
                  className="w-10 h-10 shrink-0 rounded-full border border-ink/15 flex items-center justify-center hover:bg-bordo hover:border-bordo hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-5 sm:p-8 md:p-10 overflow-y-auto flex-1">
                {/* Action Bar inside modal */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <button
                    type="button"
                    onClick={() => toggleApproved(selectedMateria.id)}
                    className={cn(
                      'inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap',
                      approvedSet.has(selectedMateria.id)
                        ? 'bg-emerald-700 border-emerald-700 text-white'
                        : 'bg-paper border-ink/15 text-ink hover:border-bordo hover:text-bordo'
                    )}
                  >
                    <Check size={15} />
                    {approvedSet.has(selectedMateria.id)
                      ? 'Marcada como aprobada'
                      : 'Marcar como aprobada'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShareMateria(selectedMateria)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-paper border border-ink/15 text-ink hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap"
                  >
                    <Share2 size={14} />
                    {copiedId === selectedMateria.id ? 'Enlace copiado' : 'Copiar enlace'}
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column */}
                  <div className="lg:col-span-7 space-y-8">
                    <section>
                      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo mb-3 flex items-center gap-2">
                        <Info size={15} />
                        Descripción
                      </h3>
                      <p className="text-muted leading-relaxed text-sm sm:text-base">
                        {selectedMateria.descripcion}
                      </p>
                    </section>

                    {selectedMateria.objetivos.length > 0 && (
                      <section>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo mb-3 flex items-center gap-2">
                          <GraduationCap size={15} />
                          Objetivos
                        </h3>
                        <ul className="space-y-2.5">
                          {selectedMateria.objetivos.map((obj, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-ink flex items-start gap-3 p-3.5 rounded-xl bg-paper border border-ink/6"
                            >
                              <span className="text-bordo font-bold leading-relaxed" aria-hidden="true">
                                •
                              </span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {selectedMateria.correlativas && selectedMateria.correlativas.length > 0 && (
                      <section>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violeta mb-3 flex items-center gap-2">
                          <BookOpen size={15} />
                          Correlativas Inmediatas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMateria.correlativas.map((corr, idx) => {
                            const linkedMateria = findCorrelativaMateria(corr);
                            const isCorrApproved = linkedMateria
                              ? approvedSet.has(linkedMateria.id)
                              : false;

                            if (linkedMateria) {
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => openCorrelativa(corr)}
                                  className={cn(
                                    'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors text-left',
                                    isCorrApproved
                                      ? 'bg-emerald-50 border-emerald-600/30 text-emerald-800 hover:bg-emerald-100'
                                      : 'bg-violeta/5 border-violeta/15 text-violeta hover:bg-violeta/10'
                                  )}
                                  title="Ver detalle de esta correlativa"
                                >
                                  {isCorrApproved && <Check size={13} className="shrink-0" />}
                                  <span>{corr}</span>
                                  <ChevronRight size={13} className="shrink-0 opacity-60" />
                                </button>
                              );
                            }

                            return (
                              <span
                                key={idx}
                                className="px-3.5 py-2 bg-paper border border-ink/10 rounded-xl text-xs font-semibold text-muted"
                              >
                                {corr}
                              </span>
                            );
                          })}
                        </div>
                      </section>
                    )}

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="p-4 sm:p-5 rounded-2xl bg-bordo/5 border border-bordo/10">
                        <p className="text-[11px] uppercase font-bold text-bordo/70 mb-1">
                          Año sugerido
                        </p>
                        <p className="text-base sm:text-lg font-bold text-bordo">
                          {selectedMateria.año === 0 ? 'CBC' : `${selectedMateria.año}° Año`}
                        </p>
                      </div>
                      <div className="p-4 sm:p-5 rounded-2xl bg-violeta/5 border border-violeta/10">
                        <p className="text-[11px] uppercase font-bold text-violeta/70 mb-1">
                          Régimen
                        </p>
                        <p className="text-base sm:text-lg font-bold text-violeta">
                          {selectedMateria.cuatrimestre === 'Anual'
                            ? 'Anual'
                            : `${selectedMateria.cuatrimestre}° Cuatrimestre`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Cátedras */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violeta mb-5 flex items-center gap-2">
                      <Users size={15} />
                      {selectedMateria.catedras.length === 1 ? 'Cátedra' : 'Cátedras'}
                    </h3>

                    <div className="space-y-6">
                      {selectedMateria.catedras.map((catedra, idx) => {
                        const obligatoria = catedra.bibliografia.filter(
                          (b) => b.tipo === 'Obligatoria'
                        );
                        const complementaria = catedra.bibliografia.filter(
                          (b) => b.tipo === 'Complementaria'
                        );

                        return (
                          <div
                            key={idx}
                            className="p-5 rounded-2xl bg-paper border border-ink/8 space-y-4"
                          >
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <h4 className="font-bold text-base sm:text-lg text-ink">
                                  {catedra.nombre}
                                </h4>
                                <p className="text-xs text-muted mt-0.5">
                                  {selectedMateria.ciclo === 'Prácticas' ? 'Coordinador/a' : 'Titular'}:{' '}
                                  <span className="text-ink font-semibold">{catedra.titular}</span>
                                </p>
                              </div>

                              {catedra.link && (
                                <a
                                  href={catedra.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bordo hover:text-white hover:bg-bordo transition-colors bg-bordo/8 px-3.5 py-1.5 rounded-full whitespace-nowrap"
                                >
                                  Programas UBA
                                  <ExternalLink size={12} />
                                </a>
                              )}
                            </div>

                            {obligatoria.length > 0 && (
                              <div className="pt-3 border-t border-ink/6">
                                <p className="text-[11px] uppercase font-bold text-bordo mb-2.5 tracking-wide">
                                  Bibliografía Obligatoria
                                </p>
                                <ul className="space-y-2">
                                  {obligatoria.map((bib, bIdx) => (
                                    <li key={bIdx} className="text-xs text-ink leading-relaxed">
                                      <span className="font-bold text-bordo">{bib.autor}</span>
                                      {bib.año ? ` (${bib.año})` : ''}.{' '}
                                      <span className="italic">{bib.titulo}</span>
                                      {bib.editorial ? `. Ed. ${bib.editorial}` : ''}.
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {complementaria.length > 0 && (
                              <div className="pt-3 border-t border-ink/6">
                                <p className="text-[11px] uppercase font-bold text-violeta mb-2.5 tracking-wide">
                                  Bibliografía Complementaria
                                </p>
                                <ul className="space-y-2">
                                  {complementaria.map((bib, bIdx) => (
                                    <li key={bIdx} className="text-xs text-muted leading-relaxed">
                                      <span className="font-semibold text-violeta">{bib.autor}</span>
                                      {bib.año ? ` (${bib.año})` : ''}.{' '}
                                      <span className="italic">{bib.titulo}</span>
                                      {bib.editorial ? `. Ed. ${bib.editorial}` : ''}.
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {obligatoria.length === 0 && complementaria.length === 0 && (
                              <p className="text-xs text-muted pt-3 border-t border-ink/6">
                                Consultá el programa vigente de la cátedra en el portal oficial de la
                                facultad.
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer bar inside modal */}
              <div className="px-5 sm:px-8 md:px-10 py-3.5 bg-paper border-t border-ink/8 flex items-center justify-between gap-4 shrink-0">
                <p className="text-xs text-muted font-medium">
                  Facultad de Psicología · UBA (Guía orientativa)
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedMateria(null)}
                  className="text-xs font-bold text-bordo hover:underline"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="enlaces" className="bg-white py-16 sm:py-24 px-4 sm:px-6 border-t border-ink/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 bg-ink rounded-full flex items-center justify-center text-white">
                  <span className="text-xl font-serif font-bold leading-none select-none">Ψ</span>
                </div>
                <span className="text-lg font-bold tracking-tight">Psicología UBA</span>
              </div>
              <p className="text-muted max-w-md text-sm sm:text-base leading-relaxed">
                Guía académica no oficial hecha para estudiantes de la Licenciatura en Psicología de
                la Universidad de Buenos Aires. Verificá siempre fechas, programas y correlatividades
                en el sistema oficial de la facultad.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-bordo mb-5">
                Enlaces Oficiales
              </h3>
              <ul className="space-y-3 text-sm font-medium text-muted">
                <li>
                  <a
                    href="http://academica.psi.uba.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-bordo transition-colors"
                  >
                    Sistema Académico
                    <ExternalLink size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.campusvirtual.psi.uba.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-bordo transition-colors"
                  >
                    Campus Virtual
                    <ExternalLink size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-bordo transition-colors"
                  >
                    Programas de Materias
                    <ExternalLink size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.psi.uba.ar/estudiantes.php?var=calendario2026/2026.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-bordo transition-colors"
                  >
                    Calendario Académico
                    <ExternalLink size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://edipsicouba.net.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-bordo transition-colors"
                  >
                    Centro de Estudiantes
                    <ExternalLink size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-ink/8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
            <p>© {new Date().getFullYear()} Guía Académica Psicología UBA.</p>
            <p>Portal informativo independiente · Sin afiliación institucional con la UBA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
