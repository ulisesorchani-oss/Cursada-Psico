import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BookMarked, Check, ChevronDown, RotateCcw } from 'lucide-react';
import { Materia } from '../constants';
import { cn } from '../lib/utils';

const TIPS_STORAGE_KEY = 'psi_uba_tips_leidos_v1';

type StudyProfileId =
  | 'psicoanalisis'
  | 'clinica'
  | 'bio-cuanti'
  | 'metodologia-diagnostico'
  | 'social-institucional'
  | 'general-inicial';

interface StudyTip {
  id: string;
  titulo: string;
  enfoque: string;
  duracion: string;
  momento: string;
  resumen: string;
  pasos: string[];
}

interface StudyProfile {
  id: StudyProfileId;
  etiqueta: string;
  tips: StudyTip[];
}

const STUDY_PROFILES: Record<StudyProfileId, StudyProfile> = {
  psicoanalisis: {
    id: 'psicoanalisis',
    etiqueta: 'Psicoanálisis y Teoría del Sujeto',
    tips: [
      {
        id: 'lectura-activa',
        titulo: 'Lectura activa de textos fuente',
        enfoque: 'Comprensión conceptual',
        duracion: '30 min',
        momento: 'Cursada y final',
        resumen:
          'En psicoanálisis los conceptos cambian de estatuto según el momento de la obra; leer haciendo preguntas al margen evita confundir etapas teóricas.',
        pasos: [
          'Anotá al inicio del texto el año y el problema clínico o metapsicológico que intenta responder el autor.',
          'Subrayá solo los giros conceptuales clave (ej. primera vs. segunda tópica, registros RSI) y definilos en una frase propia.',
          'Cerrá cada apartado escribiendo una pregunta posible de parcial que articule dos términos del texto.'
        ]
      },
      {
        id: 'mapas-conceptuales',
        titulo: 'Mapas conceptuales de articulación',
        enfoque: 'Síntesis relacional',
        duracion: '25 min',
        momento: 'Cierre de unidad',
        resumen:
          'Conectar nociones mediante flechas de causalidad o tensión te prepara mejor que memorizar definiciones aisladas.',
        pasos: [
          'Ubicá el eje central de la unidad (ej. síntoma, transferencia, deseo o pulsión) en el centro de la hoja.',
          'Ramificá hacia los conceptos que lo producen o sostienen indicando siempre el verbo de enlace en cada flecha.',
          'Agregá en cada nodo la referencia al texto obligatorio donde el autor lo desarrolla.'
        ]
      },
      {
        id: 'pomodoro',
        titulo: 'Bloques Pomodoro para lectura densa (25/5)',
        enfoque: 'Gestión de foco',
        duracion: '25 min',
        momento: 'Lectura semanal',
        resumen:
          'Textos densos de Freud o seminarios de Lacan rinden mucho más en ciclos acotados con evocación breve que en maratones continuas.',
        pasos: [
          'Elegí un tramo acotado (6 a 10 páginas) y leelo durante 25 minutos sin interrupciones ni celular a la vista.',
          'Usá los últimos 3 minutos del bloque para anotar 3 ideas clave a texto cerrado.',
          'Descansá 5 minutos lejos de la pantalla antes de pasar al siguiente bloque o texto.'
        ]
      },
      {
        id: 'recorrido-obra',
        titulo: 'Cuadro de cortes de obra y debates',
        enfoque: 'Preparación de final',
        duracion: '20 min',
        momento: 'Pre-parcial y final',
        resumen:
          'Los finales suelen pedir ubicar continuidades y rupturas entre momentos teóricos o entre distintos autores del programa.',
        pasos: [
          'Armá una línea de tiempo simple por unidad marcando qué reformula cada texto respecto del anterior.',
          'Anotá en una columna qué retoma o discute con otro referente de la cátedra (Freud, Lacan, Klein, Winnicott).',
          'Repasá ese cuadro en voz alta en 5 minutos el día previo a rendir.'
        ]
      }
    ]
  },
  clinica: {
    id: 'clinica',
    etiqueta: 'Clínica y Psicopatología',
    tips: [
      {
        id: 'lectura-activa',
        titulo: 'Lectura activa con viñetas y casos',
        enfoque: 'Articulación teórico-clínica',
        duracion: '25 min',
        momento: 'Cursada y final',
        resumen:
          'Anclar cada categoría teórica en un recorte clínico concreto vuelve recordables los criterios diagnósticos y las intervenciones.',
        pasos: [
          'Mientras leés un historial o viñeta, marcá con tres símbolos distintos: motivo de consulta, hipótesis diagnóstica e intervención.',
          'Conectá cada recorte con al menos un concepto obligatorio de la unidad correspondiente.',
          'Escribí en 3 líneas qué dato clínico te permite diferenciar ese cuadro de otro parecido.'
        ]
      },
      {
        id: 'mapas-conceptuales',
        titulo: 'Mapas conceptuales diferenciales',
        enfoque: 'Síntesis comparativa',
        duracion: '25 min',
        momento: 'Cierre de unidad',
        resumen:
          'Comparar estructuras clínicas o dispositivos terapéuticos en un mismo plano visual evita superponer criterios en el examen.',
        pasos: [
          'Armá una matriz con columnas para cada cuadro o enfoque clínico (criterios, mecanismo/modelo, encuadre y dirección del tratamiento).',
          'Señalá en color distinto las fronteras diagnósticas o los puntos de divergencia entre cátedras o autores.',
          'Intentá reconstruir las columnas principales en una hoja aparte sin mirar tu cuadro original.'
        ]
      },
      {
        id: 'pomodoro',
        titulo: 'Bloques Pomodoro en dos fases (25/5)',
        enfoque: 'Ritmo de estudio',
        duracion: '25 min',
        momento: 'Semana de parciales',
        resumen:
          'Alternar un bloque de lectura conceptual con un bloque de producción escrita entrena exactamente lo que evalúan las consignas clínicas.',
        pasos: [
          'Dedicá el primer Pomodoro (25 min) a leer la bibliografía de una problemática específica.',
          'Tras 5 minutos de pausa, usá el segundo Pomodoro para redactar un breve análisis clínico integrando esa teoría.',
          'Revisá al final si incluiste correctamente la terminología técnica de la cátedra.'
        ]
      },
      {
        id: 'evocacion-final',
        titulo: 'Simulacro oral de ejes de final',
        enfoque: 'Evocación activa',
        duracion: '15 min',
        momento: 'Preparación de final',
        resumen:
          'Exponer en voz alta obliga a ordenar el discurso clínico y detecta rápido dónde falta precisión conceptual.',
        pasos: [
          'Elegí un eje transversal del programa (ej. diagnóstico diferencial, urgencia o alianza terapéutica).',
          'Explicá el tema en voz alta durante 5 minutos enlazando tres autores obligatorios sin leer tus resúmenes.',
          'Anotá en qué punto dudaste y repasá solo ese fragmento del texto.'
        ]
      }
    ]
  },
  'bio-cuanti': {
    id: 'bio-cuanti',
    etiqueta: 'Bases Biológicas, Neuro y Estadística',
    tips: [
      {
        id: 'mapas-conceptuales',
        titulo: 'Mapas conceptuales de vías y procesos',
        enfoque: 'Síntesis visual',
        duracion: '25 min',
        momento: 'Cursada y final',
        resumen:
          'En neurofisiología, biología o estadística, dibujar el circuito o árbol de decisión desde cero fija mucho más que releer definiciones.',
        pasos: [
          'Esquematizá el proceso paso a paso (sinapsis, vía sensorial, función ejecutiva o elección de prueba estadística).',
          'Tapá los nombres de estructuras o variables y volvé a completarlos de memoria en una hoja en blanco.',
          'Corregí inmediatamente los errores consultando el apunte para fijar el trazo correcto.'
        ]
      },
      {
        id: 'lectura-activa',
        titulo: 'Lectura activa orientada a mecanismos',
        enfoque: 'Comprensión causal',
        duracion: '20 min',
        momento: 'Lectura semanal',
        resumen:
          'Convertir cada subtítulo en una pregunta de causa-efecto transforma listas largas de nombres en procesos comprensibles.',
        pasos: [
          'Antes de leer un apartado, formulá una pregunta concreta: ¿qué hace este mecanismo y qué ocurre si se altera?',
          'Respondé con tus palabras al margen sin copiar párrafos enteros del manual.',
          'Verificá si podés explicar el gráfico o tabla de la página sin leer el pie de figura.'
        ]
      },
      {
        id: 'pomodoro',
        titulo: 'Bloques Pomodoro con autoevaluación (25/5)',
        enfoque: 'Foco intensivo',
        duracion: '25 min',
        momento: 'Pre-parcial',
        resumen:
          'La alta carga de terminología técnica fatiga rápido; sesiones cortas con micro-chequeos sostienen mejor la retención.',
        pasos: [
          'Estudiá un único tema o tipo de ejercicio durante 25 minutos con las notificaciones silenciadas.',
          'En los últimos 5 minutos del bloque, resolvé 2 preguntas rápidas o definí 3 términos clave sin mirar.',
          'Pausá 5 minutos y retomá empezando por corregir lo que quedó flojo.'
        ]
      },
      {
        id: 'practica-espaciada',
        titulo: 'Práctica espaciada de ejercicios y casos',
        enfoque: 'Repaso distribuido',
        duracion: '20 min',
        momento: 'Toda la cursada',
        resumen:
          'Practicar pocos ejercicios o interpretaciones clínicas varias veces por semana evita el bloqueo del día anterior al parcial.',
        pasos: [
          'Repartí la guía de prácticos en 3 bloques cortos semanales en lugar de resolverla toda junta.',
          'Mezclá ejercicios de unidades anteriores para entrenar cómo identificar qué concepto o fórmula aplicar.',
          'Llevá un registro breve de los errores recurrentes para repasarlos 48 horas antes del examen.'
        ]
      }
    ]
  },
  'metodologia-diagnostico': {
    id: 'metodologia-diagnostico',
    etiqueta: 'Metodología y Exploración Diagnóstica',
    tips: [
      {
        id: 'mapas-conceptuales',
        titulo: 'Mapas conceptuales del proceso técnico',
        enfoque: 'Secuencia operativa',
        duracion: '25 min',
        momento: 'Cierre de unidad',
        resumen:
          'Visualizar la secuencia completa (del planteo a la inferencia o de la administración al informe) ordena cada concepto en su lugar.',
        pasos: [
          'Dibujá el flujo completo: problema → hipótesis → variables → instrumento → validez/confiabilidad (o batería → recurrencias → informe).',
          'Ubicá debajo de cada etapa los requisitos metodológicos y posibles sesgos a controlar.',
          'Usá ese mapa como hoja de ruta cada vez que analices un trabajo práctico.'
        ]
      },
      {
        id: 'lectura-activa',
        titulo: 'Lectura activa de protocolos y diseños',
        enfoque: 'Análisis aplicado',
        duracion: '25 min',
        momento: 'Cursada y prácticos',
        resumen:
          'Leer cada técnica o diseño metodológico preguntándote cómo se aplica y cuáles son sus límites evita estudiar criterios en abstracto.',
        pasos: [
          'Al estudiar una técnica o diseño, anotá en cuatro renglones: qué mide/explora, consigna o procedimiento, criterios de interpretación y límites.',
          'Contrastá un ejemplo real de protocolo o artículo científico contra la teoría del texto.',
          'Resaltá los aspectos éticos de administración y devolución vinculados a la práctica profesional.'
        ]
      },
      {
        id: 'pomodoro',
        titulo: 'Bloques Pomodoro teórico-prácticos (25/5)',
        enfoque: 'Gestión de tiempo',
        duracion: '25 min',
        momento: 'Pre-parcial',
        resumen:
          'Dividir el estudio en bloques alternados de lectura y ejercitación ayuda a pasar de la norma técnica al criterio propio.',
        pasos: [
          'Usá 25 minutos para revisar definiciones metodológicas o manuales de puntuación.',
          'Tras 5 minutos de descanso, aplicá lo leído analizando una consigna, un ítem o un extracto de entrevista.',
          'Anotá las dudas puntuales para llevarlas a la comisión de trabajos prácticos.'
        ]
      },
      {
        id: 'lista-cotejo',
        titulo: 'Lista de cotejo de criterios de evaluación',
        enfoque: 'Chequeo ágil',
        duracion: '15 min',
        momento: 'Preparación de final',
        resumen:
          'Una guía compacta de verificación te permite revisar rápidamente puntos ciegos antes de entregar un informe o rendir.',
        pasos: [
          'Listá los 6 a 8 criterios centrales de la cátedra (ej. coherencia interna, validez ecológica, convergencias diagnósticas).',
          'Probá tu lista aplicándola sobre un TP ya realizado durante la cursada.',
          'Usala como repaso final para recordar la terminología exacta de la materia.'
        ]
      }
    ]
  },
  'social-institucional': {
    id: 'social-institucional',
    etiqueta: 'Social, Institucional, Trabajo, Jurídica y Ética',
    tips: [
      {
        id: 'lectura-activa',
        titulo: 'Lectura activa situada en contexto',
        enfoque: 'Articulación normativa y social',
        duracion: '25 min',
        momento: 'Cursada y final',
        resumen:
          'Estas materias ganan claridad cuando anclás cada categoría teórica en leyes, instituciones y problemáticas concretas del campo argentino.',
        pasos: [
          'Identificá al margen a qué institución, normativa o proceso histórico remite el texto (ej. Ley de Salud Mental, Código de Ética, ámbito escolar o laboral).',
          'Destacá qué noción crítica introduce el autor frente al sentido común o al modelo hegemónico.',
          'Escribí un ejemplo actual donde esa categoría te permita leer una situación real.'
        ]
      },
      {
        id: 'mapas-conceptuales',
        titulo: 'Mapas conceptuales de actores y tensiones',
        enfoque: 'Síntesis relacional',
        duracion: '25 min',
        momento: 'Cierre de unidad',
        resumen:
          'Graficar cómo interactúan sujetos, instituciones y dispositivos clarifica el rol profesional del psicólogo/a en cada ámbito.',
        pasos: [
          'Dibujá los actores involucrados (sujeto/comunidad, institución, equipo interdisciplinario, Estado).',
          'Conectalos con las categorías del programa (ej. instituido/instituyente, representaciones sociales, responsabilidad subjetiva y legal).',
          'Sumá una nota breve indicando qué intervención ética corresponde desde nuestro rol.'
        ]
      },
      {
        id: 'pomodoro',
        titulo: 'Bloques Pomodoro por eje temático (25/5)',
        enfoque: 'Organización de lecturas',
        duracion: '25 min',
        momento: 'Lectura semanal',
        resumen:
          'Cuando una unidad reúne artículos breves de varios autores, trabajarlos en bloques focalizados evita perder el hilo común.',
        pasos: [
          'Agrupá dos textos cortos de la misma unidad dentro de un ciclo de 25 minutos.',
          'Al sonar la pausa, escribí un párrafo puente de 3 líneas explicando qué tienen en común o en qué difieren.',
          'Descansá 5 minutos y repetí con el siguiente eje del programa.'
        ]
      },
      {
        id: 'matriz-intervencion',
        titulo: 'Cuadro problema → marco → intervención',
        enfoque: 'Resolución de casos',
        duracion: '20 min',
        momento: 'Pre-parcial y final',
        resumen:
          'Muchos parciales domiciliarios y finales proponen una situación institucional o dilema ético para analizar con bibliografía.',
        pasos: [
          'Creá una tabla de tres columnas: situación/dilema, conceptos y normativa aplicable, y estrategia de intervención.',
          'Completala con los casos trabajados en prácticos y las situaciones dilemáticas de la bibliografía.',
          'Revisá que cada intervención propuesta esté fundamentada en al menos un autor obligatorio.'
        ]
      }
    ]
  },
  'general-inicial': {
    id: 'general-inicial',
    etiqueta: 'Formación General y Tramo Inicial',
    tips: [
      {
        id: 'lectura-activa',
        titulo: 'Lectura activa en tres pasadas',
        enfoque: 'Comprensión profunda',
        duracion: '25 min',
        momento: 'Lectura semanal',
        resumen:
          'Evita subrayar todo el texto en la primera lectura: una exploración breve previa te muestra la tesis central antes de profundizar.',
        pasos: [
          'Hacé un paneo de 3 minutos por títulos, subtítulos y conclusiones para ubicar el argumento general.',
          'Leé de corrido subrayando solo definiciones clave y marcando dudas con un signo al margen.',
          'Al terminar, escribí un resumen propio de 5 líneas sin mirar el texto original.'
        ]
      },
      {
        id: 'mapas-conceptuales',
        titulo: 'Mapas conceptuales por corrientes y autores',
        enfoque: 'Síntesis visual',
        duracion: '25 min',
        momento: 'Cierre de unidad',
        resumen:
          'Organizar escuelas, objeto de estudio y método en una sola hoja te da una vista panorámica ideal para repasar.',
        pasos: [
          'Armá una rama por corriente o autor principal indicando contexto histórico, objeto de estudio y método.',
          'Uní con líneas punteadas las influencias o críticas directas entre escuelas.',
          'Usá ese esquema para repasar toda la unidad en menos de 10 minutos.'
        ]
      },
      {
        id: 'pomodoro',
        titulo: 'Bloques Pomodoro sostenibles (25/5)',
        enfoque: 'Hábito de cursada',
        duracion: '25 min',
        momento: 'Rutina semanal',
        resumen:
          'Sostener bloques cortos durante la semana evita que se acumule toda la bibliografía en los días previos al parcial.',
        pasos: [
          'Definí un objetivo concreto antes de empezar el temporizador (ej. terminar un capítulo y sus notas).',
          'Mantené 25 minutos de lectura continua seguidos de 5 minutos de pausa real fuera de la pantalla.',
          'Cada 4 bloques, hacé un corte más largo de 15 a 20 minutos para consolidar lo estudiado.'
        ]
      },
      {
        id: 'evocacion-activa',
        titulo: 'Autoevaluación por preguntas guía',
        enfoque: 'Memoria a largo plazo',
        duracion: '15 min',
        momento: 'Pre-parcial y final',
        resumen:
          'Forzar el recuerdo a libro cerrado consolida el aprendizaje mucho más eficazmente que releer apuntes subrayados.',
        pasos: [
          'Al cerrar cada texto, redactá 3 preguntas de desarrollo como si fueras docente de la cátedra.',
          'Al día siguiente, respondé esas preguntas brevemente sin consultar tus resúmenes.',
          'Volvé al material únicamente para completar los puntos que quedaron imprecisos.'
        ]
      }
    ]
  }
};

function normalizeForMatch(value?: string): string {
  if (!value) return '';
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function resolveStudyProfile(materia: Materia): StudyProfile {
  const id = normalizeForMatch(materia.id);
  const name = normalizeForMatch(materia.nombre);
  const area = normalizeForMatch(materia.area);
  const text = `${id} ${name}`;

  if (
    id === 'psicoanalisis-freud' ||
    /psicoanal|freud|lacan|klein|winnicott|escuela francesa|escuela inglesa|padecimiento subjetivo|formaciones del sintoma/.test(
      text
    )
  ) {
    return STUDY_PROFILES.psicoanalisis;
  }

  if (
    id === 'neuro-fisiologia' ||
    id === 'estadistica' ||
    id === 'cbc-biologia' ||
    id === 'cbc-matematica' ||
    id === 'procesos-psico-basicos' ||
    /neuro|biologia|psicofisiolog|psicofarmacolog|genetica|estadistica|matematica/.test(text)
  ) {
    return STUDY_PROFILES['bio-cuanti'];
  }

  if (
    id === 'metodologia-inv' ||
    id === 'exploracion-diagnostico-1' ||
    id === 'exploracion-diagnostico-2' ||
    id === 'cbc-ipc' ||
    area.includes('investigacion') ||
    /metodolog|investigacion|exploracion|evaluacion psicologica|tecnicas psicologicas|psicometr/.test(
      text
    )
  ) {
    return STUDY_PROFILES['metodologia-diagnostico'];
  }

  if (
    id === 'psicopatologia' ||
    id === 'psico-clinica-psicoterapias-1' ||
    id === 'psico-clinica-psicoterapias-2' ||
    area.includes('clinica') ||
    /clinica|psicoterapia|urgencia|emergencia|hospital|paliativos|anorexias|adicciones|trastornos|acompanamiento|perinatal|discapacidad|autista|psicosomatica|actos|bordes|psicosis/.test(
      text
    )
  ) {
    return STUDY_PROFILES.clinica;
  }

  if (
    id === 'psico-social' ||
    id === 'salud-publica-mental' ||
    id === 'teoria-tecnica-grupos' ||
    id === 'etica-deontologia-ddhh' ||
    id === 'psico-organizacional-institucional' ||
    id === 'psico-educativa-prof' ||
    id === 'psico-trabajo-prof' ||
    id === 'psico-juridica' ||
    id === 'cbc-icse' ||
    area.includes('educacional') ||
    area.includes('trabajo') ||
    area.includes('justicia') ||
    area.includes('social') ||
    /social|grupo|instituc|comunitar|etica|bioetica|juridic|forense|trabajo|laboral|vocacional|educa|genero|salud publica|salud colectiva|derechos|violencia|preventiva|deporte/.test(
      text
    )
  ) {
    return STUDY_PROFILES['social-institucional'];
  }

  return STUDY_PROFILES['general-inicial'];
}

function loadReadMap(): Record<string, string[]> {
  try {
    const raw = window.localStorage.getItem(TIPS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    const safe: Record<string, string[]> = {};
    for (const [key, val] of Object.entries(parsed)) {
      if (Array.isArray(val)) {
        safe[key] = val.filter((item): item is string => typeof item === 'string');
      }
    }
    return safe;
  } catch {
    return {};
  }
}

function saveReadMap(map: Record<string, string[]>) {
  try {
    window.localStorage.setItem(TIPS_STORAGE_KEY, JSON.stringify(map));
  } catch {
    // Ignore storage quota or private mode errors
  }
}

interface TipsDeEstudioProps {
  materia: Materia;
}

export function TipsDeEstudio({ materia }: TipsDeEstudioProps) {
  const profile = useMemo(() => resolveStudyProfile(materia), [materia]);
  const [readByMateria, setReadByMateria] = useState<Record<string, string[]>>(loadReadMap);
  const [expandedTipId, setExpandedTipId] = useState<string | null>(null);

  // Reset expanded row when switching to another materia inside the modal
  useEffect(() => {
    setExpandedTipId(null);
  }, [materia.id]);

  const readIds = useMemo(
    () => new Set(readByMateria[materia.id] ?? []),
    [readByMateria, materia.id]
  );

  const readCount = useMemo(
    () => profile.tips.filter((tip) => readIds.has(tip.id)).length,
    [profile.tips, readIds]
  );

  const totalCount = profile.tips.length;
  const progressPercent = totalCount > 0 ? Math.round((readCount / totalCount) * 100) : 0;

  const toggleReadTip = useCallback(
    (tipId: string) => {
      setReadByMateria((prev) => {
        const current = prev[materia.id] ?? [];
        const nextList = current.includes(tipId)
          ? current.filter((id) => id !== tipId)
          : [...current, tipId];
        const nextMap = { ...prev, [materia.id]: nextList };
        saveReadMap(nextMap);
        return nextMap;
      });
    },
    [materia.id]
  );

  const resetMateriaTips = useCallback(() => {
    setReadByMateria((prev) => {
      const nextMap = { ...prev };
      delete nextMap[materia.id];
      saveReadMap(nextMap);
      return nextMap;
    });
  }, [materia.id]);

  return (
    <section aria-label={`Tips de estudio para ${materia.nombre}`}>
      {/* Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo flex items-center gap-2">
          <BookMarked size={15} className="shrink-0" />
          Tips de Estudio
        </h3>

        <div className="flex items-center gap-3 text-xs tabular-nums">
          <span
            className={cn(
              'font-semibold',
              readCount === totalCount ? 'text-emerald-700' : 'text-muted'
            )}
          >
            {readCount}/{totalCount} {readCount === 1 ? 'leída' : 'leídas'}
            {readCount === totalCount ? ' · Todo revisado' : ''}
          </span>

          {readCount > 0 && (
            <button
              type="button"
              onClick={resetMateriaTips}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted hover:text-bordo transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordo rounded"
              title="Desmarcar todas las técnicas leídas de esta materia"
            >
              <RotateCcw size={11} />
              Reiniciar
            </button>
          )}
        </div>
      </div>

      {/* Quiet contextual subtitle + subtle hairline progress bar */}
      <p className="text-xs text-muted mb-3">
        Sugeridas para <span className="font-semibold text-ink">{profile.etiqueta}</span>
        <span aria-hidden="true" className="mx-1.5">
          ·
        </span>
        Tocá una técnica para ver cómo aplicarla
      </p>

      <div
        className="w-full h-1 rounded-full bg-ink/8 overflow-hidden mb-3.5"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso de técnicas de estudio leídas"
      >
        <div
          className="h-full rounded-full bg-emerald-700 transition-all duration-200"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Unified list with hairline dividers (no nested cards) */}
      <div className="rounded-2xl border border-ink/8 bg-paper/75 divide-y divide-ink/8 overflow-hidden">
        {profile.tips.map((tip) => {
          const isRead = readIds.has(tip.id);
          const isExpanded = expandedTipId === tip.id;

          return (
            <div
              key={tip.id}
              className={cn(
                'transition-colors duration-150',
                isRead ? 'bg-emerald-50/45' : 'bg-transparent'
              )}
            >
              <div className="px-4 py-3.5 flex items-start sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setExpandedTipId((prev) => (prev === tip.id ? null : tip.id))}
                  aria-expanded={isExpanded}
                  className="flex-1 min-w-0 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordo rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <ChevronDown
                      size={15}
                      className={cn(
                        'text-bordo/70 shrink-0 transition-transform duration-150',
                        isExpanded && 'rotate-180 text-bordo'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm font-bold leading-snug group-hover:text-bordo transition-colors',
                        isRead ? 'text-emerald-950' : 'text-ink'
                      )}
                    >
                      {tip.titulo}
                    </span>
                  </div>

                  <p className="text-[11px] text-muted tabular-nums mt-1 pl-[23px]">
                    {tip.enfoque}
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    {tip.duracion}
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    {tip.momento}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => toggleReadTip(tip.id)}
                  aria-pressed={isRead}
                  aria-label={
                    isRead
                      ? `Desmarcar técnica ${tip.titulo} como leída`
                      : `Marcar técnica ${tip.titulo} como leída`
                  }
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordo',
                    isRead
                      ? 'bg-emerald-700 border-emerald-700 text-white hover:bg-emerald-800'
                      : 'bg-white border-ink/15 text-ink hover:border-bordo hover:text-bordo'
                  )}
                >
                  <Check size={12} strokeWidth={2.5} className={isRead ? 'opacity-100' : 'opacity-50'} />
                  <span>{isRead ? 'Leída' : 'Marcar leída'}</span>
                </button>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 pt-0.5 pl-[39px] space-y-2.5">
                  <p className="text-xs text-muted leading-relaxed">{tip.resumen}</p>
                  <ol className="space-y-1.5 text-xs text-ink leading-relaxed">
                    {tip.pasos.map((paso, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="font-bold text-bordo tabular-nums shrink-0">
                          {index + 1}.
                        </span>
                        <span>{paso}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
