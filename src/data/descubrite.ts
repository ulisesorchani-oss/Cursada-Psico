import { Materia } from '../constants';

export type PerfilEjeId =
  | 'psicoanalisis'
  | 'tcc-evidencia'
  | 'neuro-psicometria'
  | 'salud-comunitaria'
  | 'educacion-desarrollo'
  | 'juridica-etica'
  | 'trabajo-organizaciones'
  | 'filosofia-fenomenologia';

export type AxisWeights = Partial<Record<PerfilEjeId, number>>;

export interface PerfilEje {
  id: PerfilEjeId;
  nombre: string;
  nombreCorto: string;
  color: string;
  resumen: string;
  enfoqueTeorico: string;
  ambitosTipicos: string;
  autoresSugeridos: string[];
}

export interface DescubriteItem {
  id: string;
  bloque: 1 | 2 | 3;
  enunciado: string;
  dimensionBase: string;
  pesos: AxisWeights;
  estiloTag?: 'reflexivo' | 'estructurado' | 'territorial' | 'investigativo';
}

export interface CatedraSugeridaRule {
  id: string;
  materiaId: string;
  materiaNombre: string;
  catedraNombre: string;
  titular: string;
  motivo: string;
  pesos: AxisWeights;
}

export const EJES_PERFIL: readonly PerfilEje[] = [
  {
    id: 'psicoanalisis',
    nombre: 'Clínica Psicoanalítica',
    nombreCorto: 'Psicoanálisis',
    color: '#6b0f2b',
    resumen:
      'Afinidad por la escucha del caso por caso, los procesos inconscientes, el lenguaje y la clínica de la singularidad subjetiva.',
    enfoqueTeorico: 'Tradición freudiana, lacaniana, escuela inglesa y clínica psicoanalítica contemporánea.',
    ambitosTipicos: 'Consultorio, dispositivos hospitalarios de salud mental, urgencias subjetivas y clínica con niños/adultos.',
    autoresSugeridos: ['freud', 'lacan', 'winnicott', 'klein', 'aulagnier', 'nasio', 'soler', 'schejtman']
  },
  {
    id: 'tcc-evidencia',
    nombre: 'TCC y Terapias Basadas en Evidencia',
    nombreCorto: 'TCC y Evidencia',
    color: '#0f766e',
    resumen:
      'Interés por psicoterapias estructuradas, formulación de casos, regulación emocional, vínculos sistémicos y validación empírica de resultados.',
    enfoqueTeorico: 'Terapia cognitivo-conductual, terapias contextuales de tercera ola (ACT, DBT) y clínica sistémica.',
    ambitosTipicos: 'Clínica ambulatoria, equipos interdisciplinarios, tratamientos focalizados y trabajo con familias y parejas.',
    autoresSugeridos: ['beck', 'keegan', 'linehan', 'hayes', 'ellis', 'barlow', 'watzlawick', 'minuchin']
  },
  {
    id: 'neuro-psicometria',
    nombre: 'Neurociencias, Evaluación e Investigación',
    nombreCorto: 'Neuro y Evaluación',
    color: '#1d4ed8',
    resumen:
      'Curiosidad por las bases neurobiológicas de la conducta, la evaluación neuropsicológica y psicométrica, y la metodología científica rigurosa.',
    enfoqueTeorico: 'Neuropsicología clínica, psicología cognitiva experimental, psicometría y psicofarmacología.',
    ambitosTipicos: 'Laboratorios de investigación, centros de rehabilitación cognitiva, hospitales y diseño de instrumentos.',
    autoresSugeridos: ['kandel', 'damasio', 'luria', 'kahneman', 'wechsler', 'neisser', 'rorschach', 'popper']
  },
  {
    id: 'salud-comunitaria',
    nombre: 'Salud Pública, Social e Institucional',
    nombreCorto: 'Salud y Comunitaria',
    color: '#9a3412',
    resumen:
      'Vocación por el trabajo interdisciplinario, la salud mental colectiva, el análisis de grupos e instituciones, el territorio y la perspectiva de género.',
    enfoqueTeorico: 'Salud colectiva, psicología social crítica, análisis institucional, dispositivos grupales y políticas públicas.',
    ambitosTipicos: 'Centros de atención primaria (CeSAC), hospitales públicos, programas territoriales y gestión de políticas de salud.',
    autoresSugeridos: ['stolkiner', 'de-lellis', 'pichon-riviere', 'bleger', 'ana-maria-fernandez', 'galende', 'moscovici', 'martin-baro']
  },
  {
    id: 'educacion-desarrollo',
    nombre: 'Educación, Desarrollo y Orientación',
    nombreCorto: 'Educación y Desarrollo',
    color: '#7c2d12',
    resumen:
      'Interés por los procesos de aprendizaje, las infancias y adolescencias, el acompañamiento en discapacidad, la orientación vocacional y el curso vital.',
    enfoqueTeorico: 'Psicología educacional, desarrollo genético y sociocultural, psicopedagogía clínica y orientación vocacional.',
    ambitosTipicos: 'Escuelas y equipos de orientación escolar, clínica psicopedagógica, inclusión, tercera edad y orientación ocupacional.',
    autoresSugeridos: ['piaget', 'vygotsky', 'bruner', 'ferreiro', 'baquero', 'bleichmar', 'erikson', 'aberastury']
  },
  {
    id: 'juridica-etica',
    nombre: 'Jurídica, Forense y Derechos Humanos',
    nombreCorto: 'Jurídica y DD.HH.',
    color: '#4c1d95',
    resumen:
      'Interés por la intersección entre subjetividad, ley, ética profesional, pericias psicológicas, violencias y defensa de derechos.',
    enfoqueTeorico: 'Psicología jurídica y forense, victimología, criminología crítica, bioética y derechos humanos.',
    ambitosTipicos: 'Poder Judicial, Ministerio Público, pericias de familia o fuero penal, organismos de derechos y bioética.',
    autoresSugeridos: ['foucault', 'michel-farina', 'gilligan', 'basaglia', 'butler', 'esposito', 'goffman', 'kohlberg']
  },
  {
    id: 'trabajo-organizaciones',
    nombre: 'Trabajo, Organizaciones y Deporte',
    nombreCorto: 'Trabajo y Org.',
    color: '#0369a1',
    resumen:
      'Atracción por las dinámicas laborales, la gestión de equipos, la selección y evaluación de personas, el bienestar ocupacional y el rendimiento.',
    enfoqueTeorico: 'Psicología del trabajo, análisis organizacional, factores humanos, inserción laboral y psicología del deporte.',
    ambitosTipicos: 'Consultoría organizacional, áreas de personas/selección, salud ocupacional, reinserción laboral y clubes/deporte.',
    autoresSugeridos: ['aldo-schlemenson', 'lewin', 'maslow', 'bandura', 'rogers', 'wechsler', 'kahneman', 'ulloa']
  },
  {
    id: 'filosofia-fenomenologia',
    nombre: 'Fenomenología, Filosofía y Crítica Cultural',
    nombreCorto: 'Filosofía y Fenomenol.',
    color: '#701a75',
    resumen:
      'Gusto por la interrogación conceptual y epistemológica: fenomenología, existencialismo, historia crítica de la psicología y lecturas de la cultura.',
    enfoqueTeorico: 'Fenomenología, hermenéutica, filosofía contemporánea, antropología, sociología y crítica cultural.',
    ambitosTipicos: 'Docencia universitaria, investigación teórica y epistemológica, escritura académica y crítica clínica-cultural.',
    autoresSugeridos: ['husserl', 'heidegger', 'sartre', 'merleau-ponty', 'hadot', 'jaspers', 'pablo-munoz', 'ricoeur', 'dilthey']
  }
] as const;

export const EJES_BY_ID: Record<PerfilEjeId, PerfilEje> = Object.fromEntries(
  EJES_PERFIL.map((eje) => [eje.id, eje])
) as Record<PerfilEjeId, PerfilEje>;

export const BLOQUES_DESCUBRITE = [
  {
    numero: 1 as const,
    titulo: 'Preguntas y marco teórico',
    subtitulo: 'Inspirado en perfiles de orientación teórico-epistemológica (TOPS-R)',
    descripcion: 'Indicá cuánto te atraen estas preguntas y formas de pensar los fenómenos psicológicos.'
  },
  {
    numero: 2 as const,
    titulo: 'Ámbitos y prácticas profesionales',
    subtitulo: 'Inspirado en intereses ocupacionales aplicados (Holland / CIP-R)',
    descripcion: 'Pensá en qué escenarios concretos de ejercicio profesional te entusiasmaría participar.'
  },
  {
    numero: 3 as const,
    titulo: 'Estilo de trabajo y cursada',
    subtitulo: 'Inspirado en el Estilo Personal del Terapeuta (EPT · Fernández-Álvarez)',
    descripcion: 'Elegí cuánto se parece cada modo de estudiar, evaluar o intervenir a tu forma natural de trabajar.'
  }
];

export const ESCALA_LIKERT = [
  { valor: 1, corto: 'Nada', etiqueta: 'Nada afín' },
  { valor: 2, corto: 'Poco', etiqueta: 'Poco afín' },
  { valor: 3, corto: 'Neutral', etiqueta: 'A veces / Neutral' },
  { valor: 4, corto: 'Bastante', etiqueta: 'Bastante afín' },
  { valor: 5, corto: 'Mucho', etiqueta: 'Muy afín' }
] as const;

/**
 * 24 ítems balanceados (3 por cada uno de los 8 ejes, 1 por bloque).
 * Permite completar la brújula en ~3 a 4 minutos sin fatiga.
 */
export const DESCUBRITE_ITEMS: readonly DescubriteItem[] = [
  // ================= BLOQUE 1: PREGUNTAS Y MARCO TEÓRICO (8 ítems) =================
  {
    id: 'b1-psi',
    bloque: 1,
    enunciado:
      'Me atrapa descifrar el sentido inconsciente detrás de los síntomas, los sueños, los lapsus y la historia singular de cada persona.',
    dimensionBase: 'Orientación psicodinámica',
    pesos: { psicoanalisis: 3, 'filosofia-fenomenologia': 0.5 }
  },
  {
    id: 'b1-tcc',
    bloque: 1,
    enunciado:
      'Valoro especialmente los modelos terapéuticos que formulan hipótesis claras, objetivos medibles e intervenciones respaldadas por estudios clínicos.',
    dimensionBase: 'Orientación cognitivo-conductual / evidencia',
    pesos: { 'tcc-evidencia': 3, 'neuro-psicometria': 0.5 }
  },
  {
    id: 'b1-neuro',
    bloque: 1,
    enunciado:
      'Me interesa entender cómo los circuitos cerebrales, la memoria, el lenguaje y las bases biológicas explican la conducta y sus alteraciones.',
    dimensionBase: 'Orientación neurocognitiva y empírica',
    pesos: { 'neuro-psicometria': 3, 'tcc-evidencia': 0.5 }
  },
  {
    id: 'b1-salud',
    bloque: 1,
    enunciado:
      'Pienso que el sufrimiento psíquico no puede separarse de las condiciones sociales, las desigualdades, el género y las instituciones que habitamos.',
    dimensionBase: 'Perspectiva socio-comunitaria y salud colectiva',
    pesos: { 'salud-comunitaria': 3, 'juridica-etica': 0.5 }
  },
  {
    id: 'b1-edu',
    bloque: 1,
    enunciado:
      'Me apasiona estudiar cómo se construye el pensamiento, el juego, el aprendizaje y la identidad desde la infancia hasta la adolescencia y la vejez.',
    dimensionBase: 'Desarrollo y procesos de aprendizaje',
    pesos: { 'educacion-desarrollo': 3, 'salud-comunitaria': 0.5 }
  },
  {
    id: 'b1-jur',
    bloque: 1,
    enunciado:
      'Me interesan los cruces entre psicología, derecho y ética: la responsabilidad subjetiva, las violencias, la victimología y el marco legal.',
    dimensionBase: 'Interfaz psicología, ley y ética',
    pesos: { 'juridica-etica': 3, 'salud-comunitaria': 0.5 }
  },
  {
    id: 'b1-trab',
    bloque: 1,
    enunciado:
      'Me resulta fascinante analizar el vínculo de las personas con el trabajo, las organizaciones, el liderazgo, el clima laboral y el rendimiento.',
    dimensionBase: 'Psicología del trabajo y organizaciones',
    pesos: { 'trabajo-organizaciones': 3, 'tcc-evidencia': 0.5 }
  },
  {
    id: 'b1-filo',
    bloque: 1,
    enunciado:
      'Disfruto profundizar en los fundamentos filosóficos, fenomenológicos e históricos de la psicología: el ser, el cuerpo, el lenguaje y la cultura.',
    dimensionBase: 'Epistemología, fenomenología y crítica cultural',
    pesos: { 'filosofia-fenomenologia': 3, psicoanalisis: 0.5 }
  },

  // ================= BLOQUE 2: ÁMBITOS Y PRÁCTICAS PROFESIONALES (8 ítems) =================
  {
    id: 'b2-psi',
    bloque: 2,
    enunciado:
      'Me imagino sosteniendo un espacio clínico de escucha analítica en consultorio o en guardia/hospital frente a crisis y padecimientos subjetivos.',
    dimensionBase: 'Práctica clínica analítica',
    pesos: { psicoanalisis: 3 }
  },
  {
    id: 'b2-tcc',
    bloque: 2,
    enunciado:
      'Me gustaría entrenar herramientas concretas de psicoterapia cognitivo-conductual, regulación emocional o entrevistas vinculares con familias y parejas.',
    dimensionBase: 'Práctica psicoterapéutica focalizada',
    pesos: { 'tcc-evidencia': 3 }
  },
  {
    id: 'b2-neuro',
    bloque: 2,
    enunciado:
      'Me atraería administrar evaluaciones neuropsicológicas o psicométricas, trabajar en rehabilitación cognitiva o investigar en un laboratorio.',
    dimensionBase: 'Evaluación técnica e investigación',
    pesos: { 'neuro-psicometria': 3 }
  },
  {
    id: 'b2-salud',
    bloque: 2,
    enunciado:
      'Me entusiasma participar en equipos interdisciplinarios en centros de salud barriales, hospitales públicos o proyectos comunitarios de prevención.',
    dimensionBase: 'Intervención territorial y salud pública',
    pesos: { 'salud-comunitaria': 3 }
  },
  {
    id: 'b2-edu',
    bloque: 2,
    enunciado:
      'Me gustaría trabajar en escuelas, equipos de orientación vocacional, psicopedagogía clínica o dispositivos de inclusión en discapacidad.',
    dimensionBase: 'Práctica educativa y de orientación',
    pesos: { 'educacion-desarrollo': 3 }
  },
  {
    id: 'b2-jur',
    bloque: 2,
    enunciado:
      'Me imagino realizando pericias psicológicas, interviniendo en conflictos familiares judiciales o trabajando en fiscalías e instituciones forenses.',
    dimensionBase: 'Práctica pericial y forense',
    pesos: { 'juridica-etica': 3 }
  },
  {
    id: 'b2-trab',
    bloque: 2,
    enunciado:
      'Me veo trabajando en selección de personal, desarrollo organizacional, reinserción laboral, factores humanos o acompañamiento psicológico deportivo.',
    dimensionBase: 'Práctica laboral, organizacional y deportiva',
    pesos: { 'trabajo-organizaciones': 3 }
  },
  {
    id: 'b2-filo',
    bloque: 2,
    enunciado:
      'Me gustaría dedicar parte de mi recorrido a la docencia universitaria, la investigación conceptual, la bioética o el cruce entre clínica, arte y cine.',
    dimensionBase: 'Docencia, investigación teórica y cultura',
    pesos: { 'filosofia-fenomenologia': 3, 'juridica-etica': 0.5 }
  },

  // ================= BLOQUE 3: ESTILO DE TRABAJO Y CURSADA (EPT · 8 ítems) =================
  {
    id: 'b3-psi',
    bloque: 3,
    enunciado:
      'Prefiero una escucha abierta y no directiva, donde cada intervención se construye sin protocolos cerrados a partir de lo que dice el sujeto.',
    dimensionBase: 'EPT · Atención flotante / baja directividad',
    pesos: { psicoanalisis: 2.5, 'filosofia-fenomenologia': 0.75 },
    estiloTag: 'reflexivo'
  },
  {
    id: 'b3-tcc',
    bloque: 3,
    enunciado:
      'Me siento más cómodo/a trabajando de forma activa y estructurada: acordar metas claras, planificar pasos y evaluar avances de sesión a sesión.',
    dimensionBase: 'EPT · Estilo directivo y operativo estructurado',
    pesos: { 'tcc-evidencia': 2.5, 'trabajo-organizaciones': 0.75 },
    estiloTag: 'estructurado'
  },
  {
    id: 'b3-neuro',
    bloque: 3,
    enunciado:
      'Disfruto el trabajo metódico con datos, pruebas estandarizadas, baremos, estadística o diseño riguroso de hipótesis verificables.',
    dimensionBase: 'EPT · Rigor técnico y cuantitativo',
    pesos: { 'neuro-psicometria': 2.5, 'tcc-evidencia': 0.5 },
    estiloTag: 'investigativo'
  },
  {
    id: 'b3-salud',
    bloque: 3,
    enunciado:
      'Trabajo mejor en red y en grupo: coordinando talleres, debatiendo con otras disciplinas y pensando estrategias colectivas en territorio.',
    dimensionBase: 'EPT · Dispositivo grupal e interdisciplinario',
    pesos: { 'salud-comunitaria': 2.5, 'educacion-desarrollo': 0.75 },
    estiloTag: 'territorial'
  },
  {
    id: 'b3-edu',
    bloque: 3,
    enunciado:
      'Me motiva acompañar procesos de cambio y aprendizaje a mediano plazo, adaptando recursos pedagógicos o lúdicos según la etapa vital.',
    dimensionBase: 'EPT · Acompañamiento evolutivo y pedagógico',
    pesos: { 'educacion-desarrollo': 2.5, 'tcc-evidencia': 0.5 },
    estiloTag: 'territorial'
  },
  {
    id: 'b3-jur',
    bloque: 3,
    enunciado:
      'Me siento firme elaborando informes técnicos fundados, sosteniendo criterios éticos claros y tomando posición frente a dilemas complejos.',
    dimensionBase: 'EPT · Criterio normativo-ético e informes',
    pesos: { 'juridica-etica': 2.5, 'neuro-psicometria': 0.5 },
    estiloTag: 'estructurado'
  },
  {
    id: 'b3-trab',
    bloque: 3,
    enunciado:
      'Me resulta natural diagnosticar problemas prácticos en equipos o instituciones y proponer soluciones concretas orientadas a objetivos.',
    dimensionBase: 'EPT · Intervención estratégica y organizacional',
    pesos: { 'trabajo-organizaciones': 2.5, 'salud-comunitaria': 0.5 },
    estiloTag: 'estructurado'
  },
  {
    id: 'b3-filo',
    bloque: 3,
    enunciado:
      'En la cursada disfruto especialmente la lectura detenida de textos fuente, la discusión conceptual profunda y la escritura de ensayos críticos.',
    dimensionBase: 'EPT · Lectura hermenéutica y conceptual',
    pesos: { 'filosofia-fenomenologia': 2.5, psicoanalisis: 0.75 },
    estiloTag: 'reflexivo'
  }
] as const;

/**
 * Mapeo de pesos por materia para Electivas General (17), Electivas Profesional (25) y Prácticas (58).
 * Todos los IDs corresponden exactamente a los de PLAN_ESTUDIOS en src/constants.ts.
 */
export const MATERIA_PERFIL_WEIGHTS: Record<string, AxisWeights> = {
  // -------- Electivas General (17) --------
  'psicoanalisis-inglesa-1': { psicoanalisis: 3, 'educacion-desarrollo': 0.6 },
  'psicoanalisis-inglesa-2': { psicoanalisis: 3, 'educacion-desarrollo': 0.6 },
  'psicoanalisis-francesa-1': { psicoanalisis: 3, 'filosofia-fenomenologia': 0.8 },
  'psicoanalisis-francesa-2': { psicoanalisis: 3, 'filosofia-fenomenologia': 1 },
  'psico-fenomenologica-existencial': { 'filosofia-fenomenologia': 3, psicoanalisis: 1.5 },
  'psicoanalisis-psico-yo': { psicoanalisis: 2.5, 'educacion-desarrollo': 0.5 },
  'psico-tercera-edad-vejez': { 'educacion-desarrollo': 2.5, 'salud-comunitaria': 1.5 },
  'psicodiagnostico-rorschach': { 'neuro-psicometria': 2.2, psicoanalisis: 1.5, 'juridica-etica': 0.8 },
  'problemas-sociologicos': { 'salud-comunitaria': 2.2, 'filosofia-fenomenologia': 2.2 },
  'problemas-antropologicos': { 'filosofia-fenomenologia': 2.5, 'salud-comunitaria': 1.8 },
  'biologia-comportamiento': { 'neuro-psicometria': 3, 'tcc-evidencia': 0.7 },
  'problemas-filosoficos': { 'filosofia-fenomenologia': 3, psicoanalisis: 0.6 },
  'analisis-modificacion-conducta': { 'tcc-evidencia': 3, 'neuro-psicometria': 1 },
  'psicoanalisis-orientacion-lacaniana': { psicoanalisis: 3, 'filosofia-fenomenologia': 0.8 },
  'construccion-conceptos-psicoanaliticos': { psicoanalisis: 2.8, 'filosofia-fenomenologia': 1.2 },
  'psico-politica-2': { 'salud-comunitaria': 2.5, 'filosofia-fenomenologia': 1.8, 'juridica-etica': 1 },
  'psico-personalidad': { 'tcc-evidencia': 1.8, 'neuro-psicometria': 1.8, 'trabajo-organizaciones': 0.8 },

  // -------- Electivas Profesional (25) --------
  'psicopedagogia-clinica': { 'educacion-desarrollo': 3, psicoanalisis: 0.8 },
  'orientacion-vocacional': { 'educacion-desarrollo': 2.8, 'trabajo-organizaciones': 1.8 },
  'psico-discapacidad': { 'educacion-desarrollo': 2.8, 'salud-comunitaria': 1.2 },
  'informatica-educacion-sociedad': { 'educacion-desarrollo': 2.4, 'trabajo-organizaciones': 1.2, 'salud-comunitaria': 0.8 },
  'clinica-ninos-adolescentes': { psicoanalisis: 2.2, 'educacion-desarrollo': 2 },
  'fisiopatologia-psicosomatica': { 'neuro-psicometria': 2.2, psicoanalisis: 1.4, 'salud-comunitaria': 0.8 },
  neuropsicologia: { 'neuro-psicometria': 3, 'tcc-evidencia': 0.8 },
  'clinica-sistemica': { 'tcc-evidencia': 2.6, 'salud-comunitaria': 0.8, 'educacion-desarrollo': 0.6 },
  psicofarmacologia: { 'neuro-psicometria': 3, 'tcc-evidencia': 1.2 },
  'clinica-psicoanalitica-1': { psicoanalisis: 3 },
  'clinica-toxicomanias': { psicoanalisis: 2.2, 'salud-comunitaria': 1.6 },
  'clinica-cognitivo-comportamental': { 'tcc-evidencia': 3, 'neuro-psicometria': 0.8 },
  'usos-del-sintoma': { psicoanalisis: 3, 'filosofia-fenomenologia': 0.6 },
  'clinica-discapacidad-infantil': { 'educacion-desarrollo': 2.8, psicoanalisis: 1.2 },
  'clinica-anorexias-bulimias': { psicoanalisis: 1.8, 'tcc-evidencia': 1.5, 'salud-comunitaria': 1.2 },
  'seleccion-personal': { 'trabajo-organizaciones': 3, 'neuro-psicometria': 0.8 },
  'intervenciones-forenses-familiares': { 'juridica-etica': 3, 'educacion-desarrollo': 0.6 },
  'psico-delito-delincuente': { 'juridica-etica': 3, 'salud-comunitaria': 0.6 },
  victimologia: { 'juridica-etica': 3, 'salud-comunitaria': 1 },
  'tecnicas-ambito-juridico': { 'juridica-etica': 2.8, 'neuro-psicometria': 1.2 },
  'psico-preventiva': { 'salud-comunitaria': 3, 'educacion-desarrollo': 0.8 },
  'estrategias-intervencion-comunitaria': { 'salud-comunitaria': 3 },
  'estudios-genero': { 'salud-comunitaria': 2.4, 'juridica-etica': 1.5, 'filosofia-fenomenologia': 1.2 },
  'psico-deporte': { 'trabajo-organizaciones': 2.6, 'tcc-evidencia': 1.6 },
  'rol-psicologo-equipo-salud': { 'salud-comunitaria': 2.8, 'tcc-evidencia': 0.8, psicoanalisis: 0.6 },

  // -------- Prácticas (58) --------
  'clinica-urgencia': { psicoanalisis: 2.8, 'salud-comunitaria': 1.2 },
  'orientacion-psicosomatica-durand': { psicoanalisis: 2.2, 'salud-comunitaria': 1.2, 'neuro-psicometria': 0.8 },
  'clinica-emergencia': { 'salud-comunitaria': 1.8, 'tcc-evidencia': 1.6, psicoanalisis: 1.2 },
  'variantes-consulta-ambulatoria': { psicoanalisis: 2.6, 'salud-comunitaria': 0.8 },
  'clinica-ninos-formaciones-sintoma': { psicoanalisis: 2.6, 'educacion-desarrollo': 1.6 },
  'hospital-ninos-gutierrez': { 'educacion-desarrollo': 2, psicoanalisis: 1.8, 'salud-comunitaria': 1.2 },
  'clinica-adicciones-interdisciplinario': { 'salud-comunitaria': 2, psicoanalisis: 1.8, 'tcc-evidencia': 0.8 },
  'clinica-puberes-adolescentes-hospital': { psicoanalisis: 2.2, 'educacion-desarrollo': 1.8, 'salud-comunitaria': 1 },
  'abordaje-cuidados-paliativos': { 'salud-comunitaria': 2, 'filosofia-fenomenologia': 1.5, 'tcc-evidencia': 1.2 },
  'entrenamiento-tecnicas-cognitivas': { 'tcc-evidencia': 3, 'neuro-psicometria': 0.8 },
  'clinica-psicoanalitica-ninos-comunitaria': { psicoanalisis: 2.4, 'salud-comunitaria': 1.6, 'educacion-desarrollo': 1.4 },
  'fundamentos-acompanamiento-terapeutico': { 'salud-comunitaria': 2, psicoanalisis: 1.6, 'tcc-evidencia': 1 },
  'atencion-psicologica-hospital': { 'salud-comunitaria': 2, psicoanalisis: 1.8, 'tcc-evidencia': 0.8 },
  'neuropsicologia-practica': { 'neuro-psicometria': 3, 'tcc-evidencia': 0.6 },
  'psicologia-perinatal': { 'educacion-desarrollo': 2.2, 'salud-comunitaria': 1.6, psicoanalisis: 1 },
  'juego-limites-discapacidad': { psicoanalisis: 2.2, 'educacion-desarrollo': 2.4 },
  'problematica-clinica-ninez-adolescencia-familia': { 'educacion-desarrollo': 2, 'tcc-evidencia': 1.2, psicoanalisis: 1.6 },
  'practica-anorexias-bulimias': { psicoanalisis: 1.8, 'tcc-evidencia': 1.6, 'salud-comunitaria': 1 },
  'perspectiva-antropologica-clinica': { 'filosofia-fenomenologia': 2.8, 'salud-comunitaria': 1.6, psicoanalisis: 1 },
  'clinica-instituciones-publicas-complejidad': { 'salud-comunitaria': 2.6, psicoanalisis: 1.8 },
  'abordaje-patologias-acto': { psicoanalisis: 2.8, 'juridica-etica': 0.8 },
  'clinica-trastornos-personalidad-psicosis': { psicoanalisis: 2.2, 'tcc-evidencia': 1.6, 'neuro-psicometria': 0.6 },
  'tratamiento-padecimiento-subjetivo-analitica': { psicoanalisis: 3 },
  'rol-psicologo-reproduccion-asistida': { 'salud-comunitaria': 1.8, 'juridica-etica': 1.4, psicoanalisis: 1.2 },
  'psicologia-aeronautica-factores-humanos': { 'trabajo-organizaciones': 3, 'neuro-psicometria': 1.2 },
  'diagnostico-tratamiento-tea': { 'educacion-desarrollo': 2.4, 'tcc-evidencia': 2.2, 'neuro-psicometria': 1.4 },
  'clinica-sistemica-familia-pareja-entrenamiento': { 'tcc-evidencia': 2.8, 'educacion-desarrollo': 0.6 },
  'clinica-analitica-psicosis': { psicoanalisis: 3, 'filosofia-fenomenologia': 0.6 },
  'orientacion-vocacional-practica': { 'educacion-desarrollo': 2.8, 'trabajo-organizaciones': 1.8 },
  'discapacidad-niñez-adolescencia-integracion': { 'educacion-desarrollo': 3, 'salud-comunitaria': 1 },
  'orientacion-vocacional-trabajo': { 'trabajo-organizaciones': 2.6, 'educacion-desarrollo': 2 },
  'proceso-reinsercion-laboral': { 'trabajo-organizaciones': 2.8, 'salud-comunitaria': 1.4 },
  'instituciones-forenses': { 'juridica-etica': 3 },
  'trabajo-familias-ambito-juridico': { 'juridica-etica': 2.8, 'educacion-desarrollo': 1 },
  'actividad-pericial-psicologia-juridica': { 'juridica-etica': 3, 'neuro-psicometria': 1 },
  'acogimiento-adopcion-infancias-deprivadas': { 'juridica-etica': 2.4, 'educacion-desarrollo': 2.2 },
  'rol-psicologo-ministerio-publico-fiscal': { 'juridica-etica': 3, 'salud-comunitaria': 0.8 },
  'salud-colectiva-gestion-politicas': { 'salud-comunitaria': 3, 'trabajo-organizaciones': 0.8 },
  'derechos-subjetividad-intervenciones-etico-clinicas': { 'juridica-etica': 2.6, 'filosofia-fenomenologia': 1.8, psicoanalisis: 1 },
  'bioetica-educacion-sexual-integral': { 'juridica-etica': 2.2, 'educacion-desarrollo': 2, 'salud-comunitaria': 1.4 },
  'cine-subjetividad-intervenciones': { 'filosofia-fenomenologia': 2.8, 'juridica-etica': 1.8, psicoanalisis: 1 },
  'ambito-comunitario-familia-enfermedad-cronica': { 'salud-comunitaria': 2.6, 'tcc-evidencia': 0.8 },
  'salud-mental-desinstitucionalizacion': { 'salud-comunitaria': 3, 'juridica-etica': 1.2 },
  'rol-psicologo-interdisciplinario-comunidad': { 'salud-comunitaria': 3 },
  'adicciones-abordaje-clinico-comunitario': { 'salud-comunitaria': 2.4, psicoanalisis: 1.4, 'tcc-evidencia': 0.8 },
  'psicologo-centros-atencion-primaria': { 'salud-comunitaria': 3 },
  'promocion-salud-adolescentes-instituciones-educativas': { 'educacion-desarrollo': 2.6, 'salud-comunitaria': 2 },
  'violencia-modos-intervencion': { 'salud-comunitaria': 2.4, 'juridica-etica': 2 },
  'psicologia-deporte-actividad-fisica': { 'trabajo-organizaciones': 2.6, 'tcc-evidencia': 1.6 },
  'rol-psicologo-promocion-salud-sexual': { 'salud-comunitaria': 2.6, 'educacion-desarrollo': 1.4 },
  'intervenciones-psicoanaliticas-jovenes-vulnerabilidad': { psicoanalisis: 2.4, 'salud-comunitaria': 2.2 },
  'abordaje-prevencion-violencias-genero': { 'salud-comunitaria': 2.4, 'juridica-etica': 2.4 },
  'abordaje-comunitario-barrios-vulnerables': { 'salud-comunitaria': 3 },
  'neurociencias-comportamiento-metodos-psicofisiologicos': { 'neuro-psicometria': 3 },
  'evaluacion-psicologica-contexto': { 'neuro-psicometria': 2.8, 'trabajo-organizaciones': 1, 'juridica-etica': 0.8 },
  'investigacion-psicologia-envejecimiento': { 'educacion-desarrollo': 2.2, 'neuro-psicometria': 2, 'salud-comunitaria': 1.2 },
  'bioetica-instituciones-salud': { 'juridica-etica': 2.4, 'filosofia-fenomenologia': 2, 'salud-comunitaria': 1.6 },
  'investigacion-clinica-prevencion-primera-infancia': { 'educacion-desarrollo': 2.6, 'neuro-psicometria': 1.8, 'salud-comunitaria': 1.2 }
};

/**
 * Sugerencias de cátedras únicamente en materias obligatorias donde existe un contraste
 * claro y conocido de enfoque entre Cátedra I y Cátedra II.
 * Esta tabla se puede refinar fácilmente a medida que se carguen los programas oficiales.
 */
export const CATEDRAS_SUGERIDAS_RULES: readonly CatedraSugeridaRule[] = [
  {
    id: 'cat-procesos-1',
    materiaId: 'procesos-psico-basicos',
    materiaNombre: 'Procesos Psicológicos Básicos',
    catedraNombre: 'Cátedra I (Cód. 544)',
    titular: 'Federico Faustino González',
    motivo:
      'Enfoque en Psicología Cognitiva contemporánea, ciencia de la conciencia, IA y micro-investigación empírica, con evaluación mediante parciales multiple choice.',
    pesos: { 'neuro-psicometria': 2.6, 'tcc-evidencia': 1.8, 'trabajo-organizaciones': 0.5 }
  },
  {
    id: 'cat-procesos-2',
    materiaId: 'procesos-psico-basicos',
    materiaNombre: 'Procesos Psicológicos Básicos',
    catedraNombre: 'Cátedra II (Cód. 545)',
    titular: 'Félix Ricardo Bur',
    motivo:
      'Integración de la Teoría Histórico-Cultural (Vygotski, Bruner, Engeström) y cognición corporizada, con parciales escritos y prácticos colaborativos.',
    pesos: { 'educacion-desarrollo': 2.6, 'filosofia-fenomenologia': 1.6, 'salud-comunitaria': 0.8 }
  },
  {
    id: 'cat-historia-1',
    materiaId: 'historia-psico',
    materiaNombre: 'Historia de la Psicología',
    catedraNombre: 'Cátedra I (Cód. 118)',
    titular: 'Marcela Patricia Borinsky',
    motivo:
      'Historia intelectual y crítica (Foucault, Danziger, Rose), debates de género y salud mental, historia argentina del campo psi y 6 seminarios de profundización (incluyendo Foucault/Hadot, trauma y familia).',
    pesos: { 'filosofia-fenomenologia': 2.4, 'salud-comunitaria': 1.8, psicoanalisis: 1.2, 'juridica-etica': 0.8 }
  },
  {
    id: 'cat-historia-2',
    materiaId: 'historia-psico',
    materiaNombre: 'Historia de la Psicología',
    catedraNombre: 'Cátedra II (Cód. 034)',
    titular: 'María Florencia Ibarra',
    motivo:
      'Recorrido estructurado sobre las Emociones y Pasiones con lectura directa de fuentes primarias (Descartes, Hume, Darwin, Wundt, James, Ribot, Sartre, Freud) y taller de investigación tipo paper.',
    pesos: { 'filosofia-fenomenologia': 2.2, 'neuro-psicometria': 1.4, 'educacion-desarrollo': 1.2, 'tcc-evidencia': 0.8 }
  },
  {
    id: 'cat-estadistica-1',
    materiaId: 'estadistica',
    materiaNombre: 'Estadística',
    catedraNombre: 'Cátedra I (Cód. 060)',
    titular: 'María Silvia Galibert',
    motivo:
      'Enfoque conceptual integrado (manual de Bologna, tamaño del efecto y lectura de papers), con teóricos virtuales por Teams y guías de ejercicios presenciales.',
    pesos: { 'neuro-psicometria': 2.6, 'trabajo-organizaciones': 1.2, 'salud-comunitaria': 0.8 }
  },
  {
    id: 'cat-estadistica-2',
    materiaId: 'estadistica',
    materiaNombre: 'Estadística',
    catedraNombre: 'Cátedra II (Cód. 167)',
    titular: 'Roberto Daniel Muiños',
    motivo:
      'Enfoque intuitivo y aplicado sobre un Caso Problema clínico, con app estadística propia (celular/PC) para reducir cálculo manual y seguimiento con autoevaluaciones en Campus.',
    pesos: { 'tcc-evidencia': 2.2, 'neuro-psicometria': 2, 'educacion-desarrollo': 0.8 }
  },
  {
    id: 'cat-psicoterapias-1',
    materiaId: 'psico-clinica-psicoterapias-1',
    materiaNombre: 'Psicología Clínica y Psicoterapias',
    catedraNombre: 'Cátedra I (Psicoterapias I)',
    titular: 'Martín Etchevers',
    motivo: 'Recorrido clínico con fuerte anclaje psicodinámico, psicopatología e investigación en psicoterapia.',
    pesos: { psicoanalisis: 2.5, 'salud-comunitaria': 0.8, 'filosofia-fenomenologia': 0.6 }
  },
  {
    id: 'cat-psicoterapias-2',
    materiaId: 'psico-clinica-psicoterapias-2',
    materiaNombre: 'Psicología Clínica y Psicoterapias',
    catedraNombre: 'Cátedra II (Psicoterapias II)',
    titular: 'Eduardo G. Keegan',
    motivo: 'Referente UBA en Terapia Cognitivo-Conductual, formulación de casos y tratamientos basados en evidencia.',
    pesos: { 'tcc-evidencia': 3, 'neuro-psicometria': 1 }
  },
  {
    id: 'cat-salud-1',
    materiaId: 'salud-publica-mental',
    materiaNombre: 'Salud Pública y Salud Mental',
    catedraNombre: 'Cátedra I',
    titular: 'Martín De Lellis',
    motivo: 'Foco en políticas públicas, atención primaria, promoción de la salud y gestión en salud mental comunitaria.',
    pesos: { 'salud-comunitaria': 2.8, 'trabajo-organizaciones': 0.6, 'educacion-desarrollo': 0.5 }
  },
  {
    id: 'cat-salud-2',
    materiaId: 'salud-publica-mental',
    materiaNombre: 'Salud Pública y Salud Mental',
    catedraNombre: 'Cátedra II',
    titular: 'Débora Tajer',
    motivo: 'Perspectiva de salud colectiva con fuerte impronta de estudios de género, derechos y epidemiología crítica.',
    pesos: { 'salud-comunitaria': 2.4, 'juridica-etica': 1.6, 'filosofia-fenomenologia': 0.8 }
  },
  {
    id: 'cat-metodologia-1',
    materiaId: 'metodologia-inv',
    materiaNombre: 'Metodología de la Investigación',
    catedraNombre: 'Cátedra I',
    titular: 'Susana Azzollini',
    motivo: 'Enfoque en diseños empíricos, operativización de variables y rigor metodológico cuantitativo-experimental.',
    pesos: { 'neuro-psicometria': 2.6, 'tcc-evidencia': 1.4, 'trabajo-organizaciones': 0.6 }
  },
  {
    id: 'cat-metodologia-2',
    materiaId: 'metodologia-inv',
    materiaNombre: 'Metodología de la Investigación',
    catedraNombre: 'Cátedra II',
    titular: 'Roxana Ynoub',
    motivo: 'Articulación entre epistemología, semiótica, enfoques cualitativos y construcción conceptual del objeto.',
    pesos: { 'filosofia-fenomenologia': 2.6, psicoanalisis: 1.2, 'salud-comunitaria': 1 }
  },
  {
    id: 'cat-exploracion-1-cat1',
    materiaId: 'exploracion-diagnostico-1',
    materiaNombre: 'Exploración y Diagnóstico · Módulo I',
    catedraNombre: 'Cátedra I',
    titular: 'Isabel M. Mikulic',
    motivo: 'Evaluación psicológica en contexto, validez ecológica y adaptación local de técnicas psicométricas.',
    pesos: { 'neuro-psicometria': 2.2, 'salud-comunitaria': 1.2, 'educacion-desarrollo': 0.8 }
  },
  {
    id: 'cat-exploracion-1-cat2',
    materiaId: 'exploracion-diagnostico-1',
    materiaNombre: 'Exploración y Diagnóstico · Módulo I',
    catedraNombre: 'Cátedra II',
    titular: 'Alejandro Castro Solano',
    motivo: 'Evaluación de la personalidad, psicometría aplicada, liderazgo y psicología positiva/organizacional.',
    pesos: { 'trabajo-organizaciones': 2.4, 'neuro-psicometria': 2, 'tcc-evidencia': 1 }
  },
  {
    id: 'cat-juridica-1',
    materiaId: 'psico-juridica',
    materiaNombre: 'Psicología Jurídica',
    catedraNombre: 'Cátedra I',
    titular: 'Claudio Ghiso',
    motivo: 'Mirada institucional y de derechos sobre vulnerabilidad, discurso jurídico y subjetividad.',
    pesos: { 'juridica-etica': 2.4, 'salud-comunitaria': 1.4, psicoanalisis: 0.8 }
  },
  {
    id: 'cat-juridica-2',
    materiaId: 'psico-juridica',
    materiaNombre: 'Psicología Jurídica',
    catedraNombre: 'Cátedra II',
    titular: 'Stella M. Puhl',
    motivo: 'Perfil técnico-forense centrado en actividad pericial, evaluación psicológica en tribunales y criminología.',
    pesos: { 'juridica-etica': 2.8, 'neuro-psicometria': 1, 'tcc-evidencia': 0.5 }
  },
  {
    id: 'cat-psicopatologia-1',
    materiaId: 'psicopatologia',
    materiaNombre: 'Psicopatología',
    catedraNombre: 'Cátedra I',
    titular: 'Fabián Naparstek',
    motivo: 'Lectura psicoanalítica lacaniana articulada con clínica contemporánea, angustia y consumos problemáticos.',
    pesos: { psicoanalisis: 2.8, 'salud-comunitaria': 0.6 }
  },
  {
    id: 'cat-psicopatologia-2',
    materiaId: 'psicopatologia',
    materiaNombre: 'Psicopatología',
    catedraNombre: 'Cátedra II',
    titular: 'Fabián Schejtman',
    motivo: 'Diálogo entre psiquiatría clásica, estructuras freudolacanianas y clínica nodal del sinthome.',
    pesos: { psicoanalisis: 2.6, 'filosofia-fenomenologia': 1.4 }
  },
  {
    id: 'cat-social-1',
    materiaId: 'psico-social',
    materiaNombre: 'Psicología Social',
    catedraNombre: 'Cátedra I (Cód. 035)',
    titular: 'Gabriel Sergio Vodovotz',
    motivo:
      'Enfoque desde el Construccionismo Social, la comunicación sistémica, familia, estigma y redes/TIC (Watzlawick, Berger y Luckmann, Gergen, Goffman), con parcial escrito y trabajo de campo grupal.',
    pesos: { 'salud-comunitaria': 2.2, 'trabajo-organizaciones': 1.4, 'educacion-desarrollo': 1, 'tcc-evidencia': 0.6 }
  },
  {
    id: 'cat-social-2',
    materiaId: 'psico-social',
    materiaNombre: 'Psicología Social',
    catedraNombre: 'Cátedra II (Cód. 036)',
    titular: 'Elena Zubieta',
    motivo:
      'Psicología Social Tripolar, Crítica y Latinoamericana (Moscovici, Martín-Baró, Montero, Pichon-Rivière), memoria colectiva, movimientos sociales y estudios empíricos de la era digital, con parcial multiple choice e investigación grupal.',
    pesos: { 'salud-comunitaria': 2.2, 'filosofia-fenomenologia': 1.4, 'neuro-psicometria': 1, 'juridica-etica': 0.8 }
  },
  {
    id: 'cat-freud-1',
    materiaId: 'psicoanalisis-freud',
    materiaNombre: 'Psicoanálisis: Freud',
    catedraNombre: 'Cátedra I (Cód. 049)',
    titular: 'Silvia Patricia Pino',
    motivo:
      'Dictado anual con lectura lógica "a la letra" de orientación lacaniana (Módulos A–H en Teóricos, Seminarios y Prácticos sobre paradigmas del síntoma), Semana Clínica, taller de escritura y 3 parciales escritos con articulación.',
    pesos: { psicoanalisis: 2.8, 'filosofia-fenomenologia': 1.2, 'salud-comunitaria': 0.6 }
  },
  {
    id: 'cat-freud-2',
    materiaId: 'psicoanalisis-freud',
    materiaNombre: 'Psicoanálisis: Freud',
    catedraNombre: 'Cátedra II (Cód. 050)',
    titular: 'David Alberto Laznik',
    motivo:
      'Dictado anual centrado en el psicoanálisis como teoría de una praxis, con traducciones críticas propias, seguimiento sistemático de historiales clínicos y de las tres teorías de la angustia, y 3 parciales escritos (el 3° integrador).',
    pesos: { psicoanalisis: 2.8, 'educacion-desarrollo': 0.8, 'filosofia-fenomenologia': 0.8 }
  },
  {
    id: 'cat-aprendizaje-1',
    materiaId: 'psico-aprendizaje',
    materiaNombre: 'Psicología del Aprendizaje',
    catedraNombre: 'Cátedra I (Cód. 546)',
    titular: 'Alicia Viviana Barreiro',
    motivo:
      'Perspectiva constructivista y sociohistórica relacional (Piaget, Vygotsky, Ferreiro, Castorina), alfabetización, juicio moral, intersubjetividad y desarrollos diversos (TEA, ceguera, sordera), con 2 parciales y entrevista clínica piagetiana en pareja.',
    pesos: { 'educacion-desarrollo': 2.8, 'salud-comunitaria': 1.2, 'filosofia-fenomenologia': 0.8 }
  },
  {
    id: 'cat-aprendizaje-2',
    materiaId: 'psico-aprendizaje',
    materiaNombre: 'Psicología del Aprendizaje',
    catedraNombre: 'Cátedra II (Cód. 547)',
    titular: 'Diana Concepción Fernández Zalazar',
    motivo:
      'Enfoque desde la complejidad que integra cognitivismo, constructivismo, Teoría de la Actividad, cognición distribuida, TIC, gamificación, IA y Diseño Universal del Aprendizaje (DUA), con portfolio grupal y escrito integrador individual.',
    pesos: { 'educacion-desarrollo': 2.4, 'neuro-psicometria': 1.4, 'tcc-evidencia': 1, 'trabajo-organizaciones': 0.8 }
  },
  {
    id: 'cat-neuro-1',
    materiaId: 'neuro-fisiologia',
    materiaNombre: 'Neurofisiología',
    catedraNombre: 'Cátedra I (Cód. 048)',
    titular: 'Norma Nancy China',
    motivo:
      'Enfoque contemporáneo de Neurociencias y Neuropsicología cognitiva (tradición Ferreres/China) con apuntes propios, videos grabados, casos clínicos de lesiones, cerebro social (empatía/mentalización) y exámenes multiple-choice.',
    pesos: { 'neuro-psicometria': 2.8, 'tcc-evidencia': 1.6, 'educacion-desarrollo': 0.6 }
  },
  {
    id: 'cat-neuro-2',
    materiaId: 'neuro-fisiologia',
    materiaNombre: 'Neurofisiología',
    catedraNombre: 'Cátedra II (Cód. 123)',
    titular: 'María del Pilar Kufa',
    motivo:
      'Psicobiología y fisiología clásica desde manuales internacionales (Carlson, Bear, Purves, Guyton) y relatos clínicos de Oliver Sacks, con eje en sueño, conducta motivacional, estrés/psicosomática y psicofarmacología, evaluada con parciales escritos.',
    pesos: { 'neuro-psicometria': 2.6, 'salud-comunitaria': 1.2, 'tcc-evidencia': 1, psicoanalisis: 0.6 }
  },
  {
    id: 'cat-etica-1',
    materiaId: 'etica-deontologia-ddhh',
    materiaNombre: 'Ética, Deontología y Derechos Humanos',
    catedraNombre: 'Cátedra I',
    titular: 'Elizabeth Beatriz Ormart',
    motivo: 'Ética profesional, cine, bioética y reflexión dilemática aplicada a la práctica clínica y comunitaria.',
    pesos: { 'juridica-etica': 2.2, 'filosofia-fenomenologia': 1.8, 'educacion-desarrollo': 0.6 }
  }
];

export interface AxisScoreResult {
  eje: PerfilEje;
  porcentaje: number;
  rawScore: number;
}

export interface DescubriteResult {
  scores: AxisScoreResult[];
  topEjes: AxisScoreResult[];
  estiloResumen: {
    titulo: string;
    descripcion: string;
  };
  electivasGeneral: Array<{ materia: Materia; afinidad: number }>;
  electivasProfesional: Array<{ materia: Materia; afinidad: number }>;
  practicas: Array<{ materia: Materia; afinidad: number }>;
  catedrasSugeridas: Array<{ rule: CatedraSugeridaRule; materia?: Materia; afinidad: number }>;
  autoresIds: string[];
}

export function computeDescubriteResult(
  answers: Record<string, number>,
  materias: Materia[]
): DescubriteResult {
  const rawByAxis: Record<PerfilEjeId, number> = {
    psicoanalisis: 0,
    'tcc-evidencia': 0,
    'neuro-psicometria': 0,
    'salud-comunitaria': 0,
    'educacion-desarrollo': 0,
    'juridica-etica': 0,
    'trabajo-organizaciones': 0,
    'filosofia-fenomenologia': 0
  };

  const maxByAxis: Record<PerfilEjeId, number> = { ...rawByAxis };
  const minByAxis: Record<PerfilEjeId, number> = { ...rawByAxis };

  const styleTotals: Record<'reflexivo' | 'estructurado' | 'territorial' | 'investigativo', { sum: number; count: number }> = {
    reflexivo: { sum: 0, count: 0 },
    estructurado: { sum: 0, count: 0 },
    territorial: { sum: 0, count: 0 },
    investigativo: { sum: 0, count: 0 }
  };

  for (const item of DESCUBRITE_ITEMS) {
    const val = answers[item.id] ?? 3;
    for (const [axisKey, weight] of Object.entries(item.pesos) as Array<[PerfilEjeId, number]>) {
      rawByAxis[axisKey] += val * weight;
      maxByAxis[axisKey] += 5 * weight;
      minByAxis[axisKey] += 1 * weight;
    }
    if (item.estiloTag) {
      styleTotals[item.estiloTag].sum += val;
      styleTotals[item.estiloTag].count += 1;
    }
  }

  const normalizedByAxis: Record<PerfilEjeId, number> = { ...rawByAxis };
  const scores: AxisScoreResult[] = EJES_PERFIL.map((eje) => {
    const min = minByAxis[eje.id];
    const max = maxByAxis[eje.id];
    const pct = max > min ? Math.round(((rawByAxis[eje.id] - min) / (max - min)) * 100) : 0;
    normalizedByAxis[eje.id] = pct / 100;
    return {
      eje,
      porcentaje: pct,
      rawScore: rawByAxis[eje.id]
    };
  }).sort((a, b) => b.porcentaje - a.porcentaje);

  const topEjes = scores.slice(0, 3);

  // Determine dominant EPT-inspired working style from Block 3
  const styleEntries = (Object.entries(styleTotals) as Array<
    ['reflexivo' | 'estructurado' | 'territorial' | 'investigativo', { sum: number; count: number }]
  >)
    .map(([key, data]) => ({
      key,
      avg: data.count > 0 ? data.sum / data.count : 0
    }))
    .sort((a, b) => b.avg - a.avg);

  const topStyle = styleEntries[0]?.key ?? 'reflexivo';
  const estiloMap: Record<typeof topStyle, { titulo: string; descripcion: string }> = {
    reflexivo: {
      titulo: 'Estilo reflexivo, hermenéutico y de escucha abierta',
      descripcion:
        'Tendés a priorizar la lectura detenida de textos fuente, la singularidad del caso y dispositivos abiertos frente a protocolos rígidos.'
    },
    estructurado: {
      titulo: 'Estilo focalizado, operativo y orientado a objetivos',
      descripcion:
        'Te sentís más cómodo/a con encuadres claros, herramientas concretas de evaluación o intervención y seguimiento metódico de resultados.'
    },
    territorial: {
      titulo: 'Estilo relacional, grupal e interdisciplinario',
      descripcion:
        'Disfrutás el trabajo en equipo, la articulación con otras disciplinas y los dispositivos situados en escuelas, hospitales o comunidad.'
    },
    investigativo: {
      titulo: 'Estilo analítico, técnico y basado en datos',
      descripcion:
        'Te motiva la precisión metodológica, el manejo de instrumentos estandarizados y el contraste empírico de hipótesis.'
    }
  };

  const scoreWeights = (weights: AxisWeights): number => {
    let weightedSum = 0;
    let totalWeight = 0;
    for (const [axisKey, weight] of Object.entries(weights) as Array<[PerfilEjeId, number]>) {
      weightedSum += normalizedByAxis[axisKey] * weight;
      totalWeight += weight;
    }
    if (totalWeight === 0) return 0;
    return Math.round((weightedSum / totalWeight) * 100);
  };

  const rankByCycle = (ciclo: Materia['ciclo']) => {
    return materias
      .filter((m) => m.ciclo === ciclo && MATERIA_PERFIL_WEIGHTS[m.id])
      .map((materia) => ({
        materia,
        afinidad: scoreWeights(MATERIA_PERFIL_WEIGHTS[materia.id])
      }))
      .sort((a, b) => b.afinidad - a.afinidad);
  };

  const electivasGeneral = rankByCycle('Electivas General');
  const electivasProfesional = rankByCycle('Electivas Profesional');
  const practicas = rankByCycle('Prácticas');

  // For mandatory cátedras: group by materiaId and pick the highest-matching cátedra per materia
  // only when it reaches a meaningful affinity (>= 55%), then take the top 4-5 overall.
  const materiaById = new Map(materias.map((m) => [m.id, m]));
  const bestByMateria = new Map<string, { rule: CatedraSugeridaRule; materia?: Materia; afinidad: number }>();

  for (const rule of CATEDRAS_SUGERIDAS_RULES) {
    // Group Psicoterapias I and II together as a single choice slot
    const groupKey =
      rule.materiaId === 'psico-clinica-psicoterapias-1' ||
      rule.materiaId === 'psico-clinica-psicoterapias-2'
        ? 'grupo-psicoterapias'
        : rule.materiaId;

    const afinidad = scoreWeights(rule.pesos);
    const existing = bestByMateria.get(groupKey);
    if (!existing || afinidad > existing.afinidad) {
      bestByMateria.set(groupKey, {
        rule,
        materia: materiaById.get(rule.materiaId),
        afinidad
      });
    }
  }

  const catedrasSugeridas = Array.from(bestByMateria.values())
    .sort((a, b) => b.afinidad - a.afinidad)
    .slice(0, 5);

  // Merge top authors from the top 2-3 axes without duplicates
  const autoresSeen = new Set<string>();
  const autoresIds: string[] = [];
  for (const [idx, axisRes] of topEjes.entries()) {
    const quota = idx === 0 ? 4 : idx === 1 ? 3 : 2;
    let added = 0;
    for (const autorId of axisRes.eje.autoresSugeridos) {
      if (!autoresSeen.has(autorId)) {
        autoresSeen.add(autorId);
        autoresIds.push(autorId);
        added += 1;
        if (added >= quota) break;
      }
    }
  }

  return {
    scores,
    topEjes,
    estiloResumen: estiloMap[topStyle],
    electivasGeneral,
    electivasProfesional,
    practicas,
    catedrasSugeridas,
    autoresIds
  };
}
