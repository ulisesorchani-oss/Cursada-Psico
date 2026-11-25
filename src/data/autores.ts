import { Materia } from '../constants';
import { EDI_PORTAL_URL, EDI_RECURSOS_AUTORES } from './ediBibliografias';
import { AUTORES_TANDA_2 } from './autoresTanda2';
import { AUTORES_TANDA_3 } from './autoresTanda3';
import { AUTORES_TANDA_4 } from './autoresTanda4';
import { AUTORES_TANDA_5 } from './autoresTanda5';

export type CorrienteAutor =
  | 'Psicoanálisis'
  | 'TCC y Neurociencias'
  | 'Sistémica y Humanista'
  | 'Desarrollo y Cognición'
  | 'Social e Institucional'
  | 'Epistemología y Lenguaje'
  | 'Filosofía y Fenomenología'
  | 'Referentes UBA / Argentina';

export const CORRIENTES_AUTORES: readonly CorrienteAutor[] = [
  'Psicoanálisis',
  'TCC y Neurociencias',
  'Sistémica y Humanista',
  'Desarrollo y Cognición',
  'Social e Institucional',
  'Epistemología y Lenguaje',
  'Filosofía y Fenomenología',
  'Referentes UBA / Argentina'
] as const;

export const EDI_APUNTES_URL = EDI_PORTAL_URL;

export interface EdiRecurso {
  label: string;
  detalle?: string;
  url: string;
}

export interface AutorInfluencia {
  nombre: string;
  autorId?: string;
  nota?: string;
}

export interface ConceptoClave {
  termino: string;
  explicacion: string;
}

export interface ObraClave {
  titulo: string;
  año: string;
  resumen: string;
}

export interface AutorProfile {
  id: string;
  nombre: string;
  apellidoCorto: string;
  matchKeys: string[];
  materiaIdsExtra?: string[];
  fechas: string;
  origen: string;
  corriente: CorrienteAutor;
  resumenCorto: string;
  biografia: string;
  principalesAportes: string[];
  conceptosClave: ConceptoClave[];
  obrasEsenciales: ObraClave[];
  influenciadoPor: AutorInfluencia[];
  influencioA: AutorInfluencia[];
  ediRecursos?: EdiRecurso[];
}

export const AUTORES: AutorProfile[] = [
  // ======================== PSICOANÁLISIS ========================
  {
    id: 'freud',
    nombre: 'Sigmund Freud',
    apellidoCorto: 'Freud',
    matchKeys: ['freud'],
    materiaIdsExtra: [
      'psicoanalisis-freud',
      'psicopatologia',
      'psico-desarrollo-niñez',
      'psico-desarrollo-adolescencia',
      'psico-clinica-psicoterapias-1',
      'teoria-tecnica-grupos',
      'historia-psico'
    ],
    fechas: '1856 – 1939',
    origen: 'Freiberg (Moravia) · Viena, Austria',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Médico neurólogo y creador del psicoanálisis. Formuló la teoría del inconsciente, la sexualidad infantil, la represión y el método de asociación libre.',
    biografia:
      'Formado como médico e investigador en neuroanatomía en Viena, Freud se acercó al estudio de la histeria junto a Jean-Martin Charcot en París y a Josef Breuer en Viena. Al abandonar la hipnosis y la sugestión por el método de la asociación libre, inauguró el psicoanálisis como teoría del aparato psíquico, método de investigación y práctica clínica.\n\nSu obra suele organizarse en dos grandes tópicas del aparato psíquico —primero Inconsciente, Preconsciente y Consciente; luego Ello, Yo y Superyó— y atravesó un giro decisivo a partir de 1920 con la introducción de la pulsión de muerte y la compulsión a la repetición. En Psicología UBA es eje transversal desde el primer año hasta la clínica.',
    principalesAportes: [
      'Descubrimiento del inconsciente dinámico y de sus formaciones: sueños, lapsus, actos fallidos, chistes y síntomas neuróticos.',
      'Teoría de la sexualidad infantil y del complejo de Edipo como organizador psíquico y cultural.',
      'Formalización del dispositivo analítico: asociación libre, atención parejamente flotante, transferencia y resistencia.',
      'Elaboración de dos tópicas del aparato psíquico y de la dualidad pulsional (pulsiones de vida y pulsión de muerte).'
    ],
    conceptosClave: [
      {
        termino: 'Inconsciente y Represión',
        explicacion:
          'Sistema regido por el proceso primario (condensación y desplazamiento), atemporal y sin contradicción. La represión separa representaciones intolerables de la conciencia, que retornan desfiguradas.'
      },
      {
        termino: 'Pulsión (Trieb)',
        explicacion:
          'Concepto límite entre lo somático y lo psíquico; fuerza constante con esfuerzo, meta, objeto y fuente, diferenciada del instinto biológico.'
      },
      {
        termino: 'Transferencia',
        explicacion:
          'Actualización de mociones y vínculos inconscientes en la persona del analista; motor y a la vez resistencia principal de la cura.'
      },
      {
        termino: 'Segunda Tópica (Ello, Yo, Superyó)',
        explicacion:
          'Reorganización estructural de 1923: el Ello como polo pulsional, el Yo como instancia mediadora y defensiva, y el Superyó como heredero del Edipo e instancia crítica.'
      },
      {
        termino: 'Más allá del principio de placer',
        explicacion:
          'Giro de 1920 que explica la compulsión a la repetición, los sueños traumáticos y el masoquismo mediante la pulsión de muerte.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La interpretación de los sueños (Tomo IV–V)',
        año: '1900',
        resumen: 'Obra fundacional del psicoanálisis: el sueño como cumplimiento de deseo y vía regia al inconsciente.'
      },
      {
        titulo: 'Tres ensayos de teoría sexual (Tomo VII)',
        año: '1905',
        resumen: 'Introduce la sexualidad infantil, las zonas erógenas y la noción de pulsión parcial.'
      },
      {
        titulo: 'Trabajos sobre metapsicología (Tomo XIV)',
        año: '1915',
        resumen: 'Sistematiza pulsiones, represión, inconsciente y duelo y melancolía.'
      },
      {
        titulo: 'Más allá del principio de placer / El yo y el ello (Tomos XVIII y XIX)',
        año: '1920–1923',
        resumen: 'Reformulaciones del giro de los años 20: pulsión de muerte y segunda tópica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jean-Martin Charcot', nota: 'Estudios clínicos sobre histeria e hipnosis' },
      { nombre: 'Josef Breuer', nota: 'Método catártico y Estudios sobre la histeria' },
      { nombre: 'Franz Brentano', autorId: 'brentano', nota: 'Profesor de filosofía de Freud en Viena y teoría del acto psíquico' },
      { nombre: 'Ernst Brücke', nota: 'Fisiología y modelo energético inicial' },
      { nombre: 'Charles Darwin', nota: 'Perspectiva evolutiva y continuidad natural' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Retorno a Freud desde el lenguaje' },
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Psicoanálisis de niños y relaciones objetales' },
      { nombre: 'Anna Freud', autorId: 'anna-freud', nota: 'Psicología del Yo y mecanismos de defensa' },
      { nombre: 'Carl G. Jung', autorId: 'jung', nota: 'Colaboración inicial y posterior creación de la Psicología Analítica' },
      { nombre: 'Sándor Ferenczi', autorId: 'ferenczi', nota: 'Clínica del trauma temprano y elasticidad de la técnica' },
      { nombre: 'Donald Winnicott', autorId: 'winnicott', nota: 'Clínica temprana y objeto transicional' },
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Psicología social y grupos operativos' }
    ],
    ediRecursos: [
      {
        label: 'Obras Completas (Tomos 1 al 23) · Drive EDI',
        detalle: 'Carpeta digital gratuita autorizada por el Centro de Estudiantes (EDI – CEP).',
        url: EDI_RECURSOS_AUTORES.freudObrasCompletas
      }
    ]
  },
  {
    id: 'lacan',
    nombre: 'Jacques Lacan',
    apellidoCorto: 'Lacan',
    matchKeys: ['lacan'],
    materiaIdsExtra: [
      'psicopatologia',
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'psico-clinica-psicoterapias-1',
      'clinica-psicoanalitica-1',
      'etica-deontologia-ddhh'
    ],
    fechas: '1901 – 1981',
    origen: 'París, Francia',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psiquiatra y psicoanalista francés impulsor del "retorno a Freud". Articuló el inconsciente con la lingüística estructural y formuló los tres registros: Real, Simbólico e Imaginario.',
    biografia:
      'Formado en psiquiatría en París (su tesis doctoral de 1932 analizó la paranoia a partir del caso Aimée), Lacan emprendió desde 1953 su célebre Seminario anual proponiendo un "retorno a Freud" frente a la psicología del yo norteamericana. Para ello se apoyó en la lingüística de Ferdinand de Saussure, la antropología estructural de Claude Lévi-Strauss y, más tarde, la lógica formal y la topología.\n\nSu enseñanza marcó profundamente la clínica psicoanalítica y la cultura académica en Argentina, especialmente en la Facultad de Psicología de la UBA, donde estructura gran parte de Psicopatología, Clínica de Adultos y las materias de Escuela Francesa.',
    principalesAportes: [
      'Formulación de los tres registros de la experiencia subjetiva: Imaginario, Simbólico y Real (RSI), anudados posteriormente en el nudo borromeo.',
      'Relectura lingüística del inconsciente: "el inconsciente está estructurado como un lenguaje" (metáfora y metonimia).',
      'Distinción estructural entre neurosis, psicosis (forclusión del Nombre-del-Padre) y perversión.',
      'Invención del concepto de objeto a como causa del deseo y resto real de la operación significante.'
    ],
    conceptosClave: [
      {
        termino: 'Estadio del espejo',
        explicacion:
          'Momento constituyente del Yo (registro Imaginario) por identificación con la imagen unificada del semejante en el espejo.'
      },
      {
        termino: 'Significante y Sujeto ($)',
        explicacion:
          'Un significante representa a un sujeto para otro significante. El sujeto lacaniano está dividido por el lenguaje, distinto del yo.'
      },
      {
        termino: 'Gran Otro (A)',
        explicacion:
          'Tesoro de los significantes y lugar de la palabra y la ley simbólica desde donde el sujeto recibe su mensaje en forma invertida.'
      },
      {
        termino: 'Objeto a',
        explicacion:
          'Objeto perdido y causa del deseo; plus-de-gozar que no puede simbolizarse completamente.'
      },
      {
        termino: 'Real, Simbólico e Imaginario (RSI)',
        explicacion:
          'Los tres registros irreductibles: lo Imaginario (imagen/yo), lo Simbólico (lenguaje/ley) y lo Real (lo imposible de simbolizar).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Escritos (Tomos 1 y 2)',
        año: '1966',
        resumen: 'Compilación de artículos fundamentales como "El estadio del espejo" y "Función y campo de la palabra".'
      },
      {
        titulo: 'Seminario 3: Las psicosis',
        año: '1955–1956',
        resumen: 'Desarrolla la forclusión del Nombre-del-Padre y la estructura diferencial de las psicosis.'
      },
      {
        titulo: 'Seminario 11: Los cuatro conceptos fundamentales del psicoanálisis',
        año: '1964',
        resumen: 'Reformula inconsciente, repetición, transferencia y pulsión.'
      },
      {
        titulo: 'Seminario 20: Aun',
        año: '1972–1973',
        resumen: 'Profundiza la teoría del goce, las fórmulas de la sexuación y la última enseñanza.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Eje central del "retorno a Freud"' },
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Subversión del signo lingüístico (S/s)' },
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Psicopatología fenomenológica en su tesis doctoral sobre la paranoia' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Ser, palabra plena y verdad como desocultamiento' },
      { nombre: 'Maurice Merleau-Ponty', autorId: 'merleau-ponty', nota: 'Diálogo sobre la mirada y lo visible en el Seminario 11' }
    ],
    influencioA: [
      { nombre: 'Jacques-Alain Miller', autorId: 'miller', nota: 'Establecimiento de Seminarios y orientación lacaniana' },
      { nombre: 'Oscar Masotta', autorId: 'masotta', nota: 'Introducción de Lacan en Argentina y habla hispana' },
      { nombre: 'Juan-David Nasio', autorId: 'nasio', nota: 'Transmisión clínica de Lacan y traducción de los Escritos' },
      { nombre: 'Gabriel Lombardi', autorId: 'lombardi', nota: 'Clínica de las neurosis y psicosis en la UBA' },
      { nombre: 'Françoise Dolto', autorId: 'dolto', nota: 'Diálogo clínico en la escuela francesa' }
    ],
    ediRecursos: [
      {
        label: 'Seminarios (-1 al 27) y Escritos · Drive EDI',
        detalle: 'Carpeta digital gratuita del Centro de Estudiantes (EDI – CEP).',
        url: EDI_RECURSOS_AUTORES.lacanSeminariosEscritos
      },
      {
        label: 'Diccionario de Topología Lacaniana · PDF EDI',
        detalle: 'Recurso digital gratuito del EDI – CEP.',
        url: EDI_RECURSOS_AUTORES.lacanTopologia
      }
    ]
  },
  {
    id: 'winnicott',
    nombre: 'Donald W. Winnicott',
    apellidoCorto: 'Winnicott',
    matchKeys: ['winnicott'],
    materiaIdsExtra: [
      'psico-desarrollo-niñez',
      'psicoanalisis-inglesa-1',
      'psicoanalisis-inglesa-2',
      'clinica-ninos-adolescentes'
    ],
    fechas: '1896 – 1971',
    origen: 'Plymouth · Londres, Reino Unido',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Pediatra y psicoanalista británico clave del Grupo Independiente. Introdujo el objeto transicional, el ambiente facilitador, el holding y la teoría del jugar.',
    biografia:
      'Con más de cuarenta años de práctica simultánea como pediatra y psicoanalista en Londres, Donald Woods Winnicott ocupó un lugar singular dentro de la Sociedad Británica de Psicoanálisis, diferenciándose tanto del kleinismo estricto como del annafreudismo. Su célebre frase "eso que llaman un bebé no existe" resume su convicción de que al comienzo solo existe la unidad bebé-ambiente.\n\nSu obra desplaza el foco desde el conflicto exclusivamente intrapsíquico hacia la cualidad del vínculo temprano, el sostén ambiental y la capacidad de jugar como fundamento de la creatividad y de la experiencia cultural.',
    principalesAportes: [
      'Conceptualización de los fenómenos y objetos transicionales como tercera zona de experiencia entre realidad interna y externa.',
      'Importancia decisiva del ambiente facilitador y de la "madre suficientemente buena" en el desarrollo emocional temprano.',
      'Diferenciación entre verdadero self (espontaneidad creativa) y falso self (defensa adaptativa frente a fallas ambientales).',
      'El jugar como actividad terapéutica en sí misma y base de la vida cultural.'
    ],
    conceptosClave: [
      {
        termino: 'Objeto transicional',
        explicacion:
          'Primera posesión "no-yo" (un osito, una mantita) que habita un espacio intermedio entre lo subjetivo y lo objetivamente percibido.'
      },
      {
        termino: 'Holding (Sostén) y Handling',
        explicacion:
          'Cuidados físicos y emocionales que sostienen al bebé y posibilitan la integración psíquica y la personalización en el cuerpo.'
      },
      {
        termino: 'Madre suficientemente buena',
        explicacion:
          'No es perfecta: primero se adapta casi por completo a las necesidades del bebé y luego introduce fallas graduales tolerables.'
      },
      {
        termino: 'Verdadero y Falso Self',
        explicacion:
          'Cuando el ambiente intruye en exceso, el niño desarrolla un falso self sumiso para proteger el núcleo espontáneo del verdadero self.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Realidad y juego',
        año: '1971',
        resumen: 'Reúne sus textos centrales sobre objetos transicionales, el jugar y la ubicación de la experiencia cultural.'
      },
      {
        titulo: 'Los procesos de maduración y el ambiente facilitador',
        año: '1965',
        resumen: 'Desarrolla la dependencia absoluta, relativa y el papel del holding.'
      },
      {
        titulo: 'Escritos de pediatría y psicoanálisis',
        año: '1958',
        resumen: 'Articula su clínica pediátrica con la preocupación maternal primaria.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Base metapsicológica psicoanalítica' },
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Supervisora y referente clave de la clínica infantil' }
    ],
    influencioA: [
      { nombre: 'André Green', nota: 'Clínica de los estados límite y lo negativo' },
      { nombre: 'Masud Khan', nota: 'Clínica de pacientes fronterizos' },
      { nombre: 'Clínica contemporánea de niños y adolescentes', nota: 'Intervenciones centradas en el juego y el entorno' }
    ]
  },
  {
    id: 'klein',
    nombre: 'Melanie Klein',
    apellidoCorto: 'Klein',
    matchKeys: ['klein'],
    materiaIdsExtra: [
      'psicoanalisis-inglesa-1',
      'psicoanalisis-inglesa-2',
      'psico-desarrollo-niñez',
      'clinica-ninos-adolescentes'
    ],
    fechas: '1882 – 1960',
    origen: 'Viena, Austria · Londres, Reino Unido',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Pionera del psicoanálisis de niños y fundadora de la teoría de las relaciones objetales. Formuló la técnica del juego y las posiciones esquizo-paranoide y depresiva.',
    biografia:
      'Analizada primero por Sándor Ferenczi en Budapest y luego por Karl Abraham en Berlín, Melanie Klein se radicó en Londres en 1926, donde lideró la Escuela Inglesa de Psicoanálisis. Fue una de las primeras en aplicar el método psicoanalítico a niños pequeños, considerando que el juego espontáneo cumple la misma función simbólica que la asociación libre en adultos.\n\nA partir de su clínica temprana, postuló la existencia de un mundo interno poblado de objetos parciales y totales desde el inicio de la vida, situando el complejo de Edipo y el superyó en etapas mucho más tempranas que las descriptas por Freud.',
    principalesAportes: [
      'Creación de la técnica psicoanalítica del juego para interpretar fantasías inconscientes infantiles.',
      'Teoría de las posiciones (esquizo-paranoide y depresiva) como modos de estructuración psíquica que persisten toda la vida.',
      'Descripción detallada de defensas primitivas: escisión, idealización, negación omnipotente e identificación proyectiva.',
      'Estudio clínico de la envidia primaria y de los procesos de culpa y reparación.'
    ],
    conceptosClave: [
      {
        termino: 'Posición esquizo-paranoide',
        explicacion:
          'Primeros meses de vida: relación con objetos parciales escindidos (pecho bueno / pecho malo) y predominio de la ansiedad persecutoria.'
      },
      {
        termino: 'Posición depresiva',
        explicacion:
          'Integración del objeto como total (bueno y malo a la vez); surgen la ambivalencia, la culpa y el deseo de reparación.'
      },
      {
        termino: 'Identificación proyectiva',
        explicacion:
          'Fantasía inconsciente de escindir partes del yo e introducirlas en el objeto para controlarlo o evacuar angustia.'
      },
      {
        termino: 'Fantasía inconsciente',
        explicacion:
          'Expresión mental permanente de las pulsiones de vida y muerte desde el nacimiento.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El psicoanálisis de niños',
        año: '1932',
        resumen: 'Fundamentos clínicos y técnicos del análisis infantil mediante el juego.'
      },
      {
        titulo: 'Notas sobre algunos mecanismos esquizoides',
        año: '1946',
        resumen: 'Introduce la posición esquizo-paranoide y la identificación proyectiva.'
      },
      {
        titulo: 'Envidia y gratitud',
        año: '1957',
        resumen: 'Distingue la envidia primaria de los celos y la voracidad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Dualidad pulsional y pulsión de muerte' },
      { nombre: 'Sándor Ferenczi', autorId: 'ferenczi', nota: 'Primer analista e impulso al análisis de niños' },
      { nombre: 'Karl Abraham', nota: 'Fases libidinales y melancolía' }
    ],
    influencioA: [
      { nombre: 'Donald W. Winnicott', autorId: 'winnicott', nota: 'Debate sobre mundo interno y ambiente' },
      { nombre: 'Wilfred R. Bion', autorId: 'bion', nota: 'Teoría del pensamiento y dinámica grupal' },
      { nombre: 'Arminda Aberastury', autorId: 'aberastury', nota: 'Introducción del psicoanálisis de niños en Argentina' },
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Ansiedades básicas en la teoría de grupos' }
    ]
  },
  {
    id: 'dolto',
    nombre: 'Françoise Dolto',
    apellidoCorto: 'Dolto',
    matchKeys: ['dolto'],
    materiaIdsExtra: ['psico-desarrollo-adolescencia', 'psico-desarrollo-niñez', 'clinica-ninos-adolescentes'],
    fechas: '1908 – 1988',
    origen: 'París, Francia',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Pediatra y psicoanalista francesa dedicada a la infancia y adolescencia. Creó el concepto de imagen inconsciente del cuerpo y el dispositivo preventivo de la Casa Verde.',
    biografia:
      'Médica pediatra y psicoanalista, Françoise Dolto revolucionó la escucha clínica de niños, bebés y adolescentes en Francia. Sostenía que el niño es un sujeto pleno de lenguaje desde el nacimiento y que las palabras verdaderas sobre su historia tienen efecto estructurante y curativo.\n\nEn 1979 fundó la "Maison Verte" (Casa Verde), un espacio abierto de socialización temprana para niños menores de tres años junto a sus padres, modelo que inspiró dispositivos comunitarios en todo el mundo. En Psicología UBA es muy leída en Psicología del Desarrollo (especialmente Adolescencia) y clínica infantil.',
    principalesAportes: [
      'Distinción entre esquema corporal (realidad neurobiológica) e imagen inconsciente del cuerpo (síntesis viva de las experiencias emocionales).',
      'Concepto de "castraciones simbolígenas" como límites necesarios que permiten crecer y acceder al lenguaje.',
      'Comprensión de la adolescencia como un "segundo nacimiento" (complejo de la langosta: mudar el caparazón quedando momentáneamente vulnerable).',
      'Difusión masiva y preventiva del psicoanálisis hacia familias y educadores.'
    ],
    conceptosClave: [
      {
        termino: 'Imagen inconsciente del cuerpo',
        explicacion:
          'Memoria inconsciente del vínculo con los otros primordiales; se diferencia del esquema corporal anatómico.'
      },
      {
        termino: 'Complejo de la langosta',
        explicacion:
          'Metáfora de la adolescencia: para crecer el joven pierde su caparazón infantil y queda expuesto antes de fabricar uno nuevo.'
      },
      {
        termino: 'Castración simbolígena',
        explicacion:
          'Prohibición acompañada de palabra que humaniza el deseo y habilita nuevas autonomías (destete, marcha, Edipo).'
      },
      {
        termino: 'La Casa Verde',
        explicacion:
          'Dispositivo preventivo de recepción temprana para acompañar la separación gradual niño-padres.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La imagen inconsciente del cuerpo',
        año: '1984',
        resumen: 'Síntesis teórica de su clínica infantil y la articulación entre cuerpo y palabra.'
      },
      {
        titulo: 'La causa de los adolescentes',
        año: '1988',
        resumen: 'Análisis lúcido de las crisis, duelos y transformaciones de la adolescencia.'
      },
      {
        titulo: 'La causa de los niños',
        año: '1985',
        resumen: 'Defensa del niño como sujeto de palabra y derechos.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Teoría pulsional y complejo de Edipo' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Centralidad del lenguaje y lo simbólico' },
      { nombre: 'Sophie Morgenstern', nota: 'Clínica infantil con el dibujo' }
    ],
    influencioA: [
      { nombre: 'Clínica psicoanalítica con niños y adolescentes', nota: 'Escucha directa al niño como sujeto' },
      { nombre: 'Dispositivos comunitarios de primera infancia', nota: 'Réplicas de Casas Verdes en Argentina y Europa' }
    ]
  },
  {
    id: 'miller',
    nombre: 'Jacques-Alain Miller',
    apellidoCorto: 'Miller',
    matchKeys: ['miller'],
    materiaIdsExtra: ['psicoanalisis-francesa-1', 'psicoanalisis-francesa-2', 'psicopatologia', 'clinica-psicoanalitica-1'],
    fechas: '1944 – presente',
    origen: 'Châteauroux · París, Francia',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psicoanalista francés, discípulo y editor de los Seminarios de Jacques Lacan. Sistematizó la orientación lacaniana y desarrolló nociones como la psicosis ordinaria.',
    biografia:
      'Formado en filosofía en la École Normale Supérieure junto a Louis Althusser, Jacques-Alain Miller se incorporó al seminario de Jacques Lacan en 1964 y fue designado por él para establecer el texto escrito de sus Seminarios. Posteriormente fundó la Asociación Mundial de Psicoanálisis (AMP) y dictó durante décadas su curso "La orientación lacaniana" en París.\n\nSu lectura ordena la obra de Lacan en grandes períodos (desde la primacía de lo simbólico hasta la última enseñanza centrada en lo real y el sinthome) y es bibliografía frecuente en cátedras de orientación francesa de la UBA.',
    principalesAportes: [
      'Edición y establecimiento textual de los Seminarios de Jacques Lacan.',
      'Periodización de la enseñanza de Lacan en paradigmas del goce y pasaje hacia la "ultimísima enseñanza".',
      'Introducción clínica de la noción de "psicosis ordinaria" para pensar formas discretas sin desencadenamiento clásico.',
      'Concepto de "extimidad" para nombrar lo más íntimo que se presenta a la vez como exterior.'
    ],
    conceptosClave: [
      {
        termino: 'Extimidad',
        explicacion:
          'Neologismo retomado de Lacan para designar aquello que, siendo lo más íntimo del sujeto, resulta ajeno o exterior (el goce, el objeto a).'
      },
      {
        termino: 'Psicosis ordinaria',
        explicacion:
          'Categoría clínica para psicosis estabilizadas o compensadas sin delirio manifiesto, detectables por signos discretos.'
      },
      {
        termino: 'Seis paradigmas del goce',
        explicacion:
          'Mapa conceptual que recorre cómo evoluciona la noción de goce a lo largo de la obra de Lacan.'
      },
      {
        termino: 'Clínica borromea',
        explicacion:
          'Lectura de la práctica analítica a partir de los modos singulares de anudamiento entre Real, Simbólico e Imaginario.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Los signos del goce',
        año: '1998',
        resumen: 'Curso clave sobre síntomas, goce y dirección de la cura.'
      },
      {
        titulo: 'La experiencia de lo real en la cura psicoanalítica',
        año: '2003',
        resumen: 'Reconstruye los seis paradigmas del goce en Lacan.'
      },
      {
        titulo: 'Extimidad',
        año: '2010',
        resumen: 'Desarrolla la articulación entre el Otro, el objeto a y la alteridad íntima.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Maestro directo y eje de toda su producción' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Fundamento metapsicológico' },
      { nombre: 'Louis Althusser', nota: 'Lectura epistemológica y estructural' }
    ],
    influencioA: [
      { nombre: 'Orientación Lacaniana Contemporánea (EOL / AMP)', nota: 'Formación clínica en Argentina y Latinoamérica' },
      { nombre: 'Fabián Schejtman', autorId: 'schejtman', nota: 'Clínica de los nudos y psicopatología UBA' }
    ]
  },
  {
    id: 'laplanche',
    nombre: 'Jean Laplanche & J.-B. Pontalis',
    apellidoCorto: 'Laplanche',
    matchKeys: ['laplanche', 'pontalis'],
    materiaIdsExtra: ['psicoanalisis-freud', 'psicopatologia', 'psicoanalisis-francesa-1'],
    fechas: '1924 – 2012 / 1924 – 2013',
    origen: 'París, Francia',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psicoanalistas y filósofos franceses autores del célebre Diccionario de Psicoanálisis, obra de consulta obligada en toda la carrera para precisar conceptos freudianos.',
    biografia:
      'Formados en filosofía y psicoanálisis en Francia, Jean Laplanche y Jean-Bertrand Pontalis trabajaron durante ocho años bajo la dirección inicial de Daniel Lagache para publicar en 1967 el "Vocabulaire de la psychanalyse" (conocido en español como Diccionario de Psicoanálisis). La obra rastrea con rigor filológico y conceptual el origen, evolución y matices de cada término en Freud.\n\nAdemás de esa obra conjunta, Laplanche desarrolló la teoría de la seducción generalizada y Pontalis realizó aportes clave sobre el sueño, el espacio analítico y la literatura.',
    principalesAportes: [
      'Sistematización rigurosa de todo el aparato conceptual freudiano con citas, equivalencias en alemán y evolución cronológica.',
      'Clarificación de distinciones esenciales para exámenes: pulsión vs. instinto, represión primaria vs. secundaria, proyección, fantasía y trauma.',
      'Revalorización de la teoría de la seducción y del concepto de apres-coup (posterioridad / Nachträglichkeit).'
    ],
    conceptosClave: [
      {
        termino: 'Apres-coup (Posterioridad)',
        explicacion:
          'Resignificación retrospectiva de huellas mnémicas y experiencias tempranas a partir de nuevos acontecimientos.'
      },
      {
        termino: 'Apuntalamiento (Anaclisis)',
        explicacion:
          'Modo en que las pulsiones sexuales se apoyan inicialmente en funciones vitales de autoconservación (como la alimentación).'
      },
      {
        termino: 'Fantasía originaria',
        explicacion:
          'Escenarios universales (escena primaria, castración, seducción) que organizan la vida fantasmática.'
      },
      {
        termino: 'Rigurosidad metapsicológica',
        explicacion:
          'Articulación de los puntos de vista tópico, dinámico y económico en cada definición freudiana.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Diccionario de Psicoanálisis',
        año: '1967',
        resumen: 'Herramienta de cabecera para estudiar definiciones precisas de toda la obra de Freud.'
      },
      {
        titulo: 'Fantasía originaria, fantasías de los orígenes, orígenes de la fantasía',
        año: '1964',
        resumen: 'Texto clásico sobre el estatuto del fantasma en Freud.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Objeto central de su lexicografía y relectura' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Formación inicial y diálogo crítico' }
    ],
    influencioA: [
      { nombre: 'Estudiantes y clínicos psicoanalíticos', nota: 'Referencia terminológica estándar en Psicología UBA' },
      { nombre: 'Silvia Bleichmar', autorId: 'bleichmar', nota: 'Metapsicología y fundación del inconsciente en Argentina' }
    ],
    ediRecursos: [
      {
        label: 'Diccionario de Psicoanálisis · PDF EDI',
        detalle: 'Acceso directo desde la biblioteca digital gratuita del EDI – CEP.',
        url: EDI_RECURSOS_AUTORES.laplancheDiccionario
      }
    ]
  },

  // ======================== DESARROLLO Y COGNICIÓN ========================
  {
    id: 'piaget',
    nombre: 'Jean Piaget',
    apellidoCorto: 'Piaget',
    matchKeys: ['piaget'],
    materiaIdsExtra: [
      'psico-aprendizaje',
      'psico-desarrollo-niñez',
      'psico-desarrollo-adolescencia',
      'psico-educativa-prof',
      'psicopedagogia-clinica'
    ],
    fechas: '1896 – 1980',
    origen: 'Neuchâtel · Ginebra, Suiza',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Biólogo, psicólogo y epistemólogo suizo fundador de la Epistemología Genética. Explicó cómo el sujeto construye el conocimiento mediante la acción y la equilibración.',
    biografia:
      'Nacido en Suiza y doctorado en biología, Jean Piaget se propuso responder una pregunta epistemológica con método empírico: ¿cómo se pasa de un estado de menor conocimiento a uno de mayor conocimiento? Para investigarlo fundó la Psicología Genética y el Centro Internacional de Epistemología Genética en Ginebra.\n\nSu enfoque constructivista e interaccionista rechazó tanto el empirismo (mente como tabula rasa) como el innatismo puro: el conocimiento no se copia ni viene preformado, sino que se construye activamente en la interacción entre el sujeto y el objeto.',
    principalesAportes: [
      'Fundación de la Epistemología y Psicología Genética y del método clínico-crítico de indagación infantil.',
      'Teoría de los estadios del desarrollo cognitivo: sensoriomotor, preoperatorio, operaciones concretas y operaciones formales.',
      'Explicación del desarrollo mediante invariantes funcionales (organización y adaptación: asimilación y acomodación) y el mecanismo de equilibración.',
      'Influencia decisiva en la psicología educacional, la psicopedagogía y las didácticas constructivistas.'
    ],
    conceptosClave: [
      {
        termino: 'Asimilación y Acomodación',
        explicacion:
          'La asimilación incorpora información nueva a esquemas previos; la acomodación modifica esos esquemas frente a las resistencias del objeto.'
      },
      {
        termino: 'Equilibración',
        explicacion:
          'Motor interno del desarrollo cognitivo: frente a un conflicto o perturbación, el sujeto reorganiza sus estructuras hacia un equilibrio superior.'
      },
      {
        termino: 'Esquemas de acción',
        explicacion:
          'Acciones organizadas y transferibles (succionar, clasificar, seriar) que constituyen las unidades básicas del conocimiento.'
      },
      {
        termino: 'Estadios del desarrollo',
        explicacion:
          'Secuencia cualitativa e integrativa: Sensoriomotor (0–2), Preoperatorio (2–7), Operaciones Concretas (7–11) y Operaciones Formales (12+).'
      },
      {
        termino: 'Método clínico-crítico',
        explicacion:
          'Entrevista flexible con contraejemplos y manipulación de objetos para indagar la lógica subyacente del pensamiento infantil.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El nacimiento de la inteligencia en el niño',
        año: '1936',
        resumen: 'Estudio minucioso de la inteligencia práctica sensoriomotora antes del lenguaje.'
      },
      {
        titulo: 'Psicología del niño (con Bärbel Inhelder)',
        año: '1966',
        resumen: 'Síntesis accesible y completa de toda la teoría de los estadios.'
      },
      {
        titulo: 'La equilibración de las estructuras cognitivas',
        año: '1975',
        resumen: 'Exposición madura del problema central del desarrollo del conocimiento.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Immanuel Kant', nota: 'Categorías del conocimiento y rol activo del sujeto' },
      { nombre: 'Charles Darwin', nota: 'Adaptación biológica y continuidad funcional' },
      { nombre: 'James Mark Baldwin', nota: 'Reacciones circulares y desarrollo genético' }
    ],
    influencioA: [
      { nombre: 'Emilia Ferreiro', autorId: 'ferreiro', nota: 'Psicogénesis de la lengua escrita en Argentina y México' },
      { nombre: 'Lawrence Kohlberg', autorId: 'kohlberg', nota: 'Estadios del desarrollo moral' },
      { nombre: 'Juan Ignacio Pozo', autorId: 'pozo', nota: 'Teorías cognitivas del aprendizaje' },
      { nombre: 'Juan Samaja', autorId: 'samaja', nota: 'Epistemología genética y metodología dialéctica en la UBA' }
    ]
  },
  {
    id: 'vygotsky',
    nombre: 'Lev S. Vygotsky',
    apellidoCorto: 'Vygotsky',
    matchKeys: ['vygotsky', 'vigotsky'],
    materiaIdsExtra: [
      'procesos-psico-basicos',
      'psico-aprendizaje',
      'psico-educativa-prof',
      'psico-desarrollo-niñez'
    ],
    fechas: '1896 – 1934',
    origen: 'Orsha · Moscú, Rusia / URSS',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo ruso fundador de la teoría sociohistórica. Mostró cómo los procesos psicológicos superiores nacen de la interacción social mediada por el lenguaje y la cultura.',
    biografia:
      'Aunque falleció a los 37 años por tuberculosis, Lev Semiónovich Vygotsky dejó una obra monumental que transformó la psicología del desarrollo, del lenguaje y de la educación. Formado en derecho, filosofía, literatura y psicología en la Rusia posrevolucionaria, buscó superar la crisis de la psicología proponiendo una teoría sociohistórica de la conciencia.\n\nA diferencia de los enfoques individualistas, Vygotsky demostró que el desarrollo humano no puede separarse de la cultura: toda función psicológica superior aparece primero en el plano social (interpsicológico) y luego se internaliza en el plano individual (intrapsicológico).',
    principalesAportes: [
      'Ley de doble formación de los procesos psicológicos superiores (de lo interpsicológico a lo intrapsicológico).',
      'Distinción entre procesos psicológicos elementales (biológicos) y superiores (rudimentarios y avanzados, mediados culturalmente).',
      'Concepto de Zona de Desarrollo Próximo (ZDP), revolucionando la relación entre aprendizaje y desarrollo escolar.',
      'Estudio de la relación entre pensamiento y lenguaje, y del papel de los instrumentos semióticos como mediadores.'
    ],
    conceptosClave: [
      {
        termino: 'Zona de Desarrollo Próximo (ZDP)',
        explicacion:
          'Distancia entre lo que un sujeto puede resolver solo (desarrollo real) y lo que puede lograr con ayuda de un adulto o par más capaz (desarrollo potencial).'
      },
      {
        termino: 'Mediación semiótica',
        explicacion:
          'Los signos (especialmente el lenguaje) actúan como herramientas psicológicas que transforman y regulan la propia mente.'
      },
      {
        termino: 'Procesos Psicológicos Superiores',
        explicacion:
          'Funciones específicamente humanas (atención voluntaria, memoria lógica, pensamiento conceptual) originadas en la vida social.'
      },
      {
        termino: 'Internalización',
        explicacion:
          'Reconstrucción interna de una operación externa y social; no es una copia pasiva sino una transformación activa.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El desarrollo de los procesos psicológicos superiores',
        año: '1978 (póstumo)',
        resumen: 'Compilación esencial con la ZDP, el juego, la internalización y la escritura.'
      },
      {
        titulo: 'Pensamiento y lenguaje',
        año: '1934',
        resumen: 'Analiza las raíces independientes del pensamiento y el habla, y su convergencia en el habla interior.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Karl Marx y Friedrich Engels', nota: 'Materialismo histórico y papel de las herramientas' },
      { nombre: 'Baruch Spinoza', nota: 'Monismo y articulación afecto-intelecto' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Diálogo crítico sobre el lenguaje egocéntrico' }
    ],
    influencioA: [
      { nombre: 'Alexander R. Luria', autorId: 'luria', nota: 'Neuropsicología y sistemas funcionales complejos' },
      { nombre: 'Jerome S. Bruner', autorId: 'bruner', nota: 'Andamiaje y psicología cultural' },
      { nombre: 'Ricardo Baquero', autorId: 'baquero', nota: 'Psicología educacional y aprendizaje escolar en Argentina' },
      { nombre: 'Juan Ignacio Pozo', autorId: 'pozo', nota: 'Psicología cognitiva del aprendizaje' }
    ]
  },
  {
    id: 'neisser',
    nombre: 'Ulric Neisser',
    apellidoCorto: 'Neisser',
    matchKeys: ['neisser'],
    materiaIdsExtra: ['procesos-psico-basicos', 'historia-psico'],
    fechas: '1928 – 2012',
    origen: 'Kiel, Alemania · Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Considerado el "padre de la psicología cognitiva". Sistematizó el estudio de la percepción, la atención y la memoria, y promovió la validez ecológica.',
    biografia:
      'Nacido en Alemania y emigrado de niño a Estados Unidos, Ulric Neisser publicó en 1967 "Cognitive Psychology", libro que dio nombre y cohesión a la revolución cognitiva frente al conductismo dominante. En él estudió cómo el ser humano transforma, reduce, elabora, almacena y recupera la información sensorial.\n\nAños después, en "Cognición y realidad" (1976), el propio Neisser criticó el exceso de experimentos artificiales de laboratorio y la metáfora rígida de la computadora, impulsando una psicología cognitiva con validez ecológica centrada en la memoria autobiográfica y la percepción en contextos reales.',
    principalesAportes: [
      'Consolidación de la Psicología Cognitiva como paradigma científico autónomo en 1967.',
      'Crítica de la metáfora computacional pura y defensa de la validez ecológica en la investigación psicológica.',
      'Estudios pioneros sobre memoria autobiográfica, recuerdos destello (flashbulb memories) y el ciclo perceptivo.'
    ],
    conceptosClave: [
      {
        termino: 'Procesamiento de la información',
        explicacion:
          'Estudio de los procesos mentales internos (percepción, atención, memoria, pensamiento) que median entre estímulo y acción.'
      },
      {
        termino: 'Validez ecológica',
        explicacion:
          'Exigencia de estudiar la cognición en situaciones cotidianas significativas y no solo en tareas artificiales de laboratorio.'
      },
      {
        termino: 'Ciclo perceptivo',
        explicacion:
          'Interacción continua entre esquemas anticipatorios, exploración activa y datos del entorno.'
      },
      {
        termino: 'Memoria reconstructiva',
        explicacion:
          'Recordar no es reproducir una grabación exacta, sino reconstruir activamente el pasado desde esquemas presentes.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicología Cognitiva',
        año: '1967',
        resumen: 'Texto fundacional que delimitó el campo y los métodos de la psicología cognitiva.'
      },
      {
        titulo: 'Cognición y realidad',
        año: '1976',
        resumen: 'Giro ecológico hacia la percepción y memoria en contextos naturales.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jerome S. Bruner', autorId: 'bruner', nota: 'Revolución cognitiva de Harvard (junto a George Miller)' },
      { nombre: 'Frederic Bartlett', nota: 'Teoría de los esquemas y memoria reconstructiva' },
      { nombre: 'James J. Gibson', nota: 'Psicología ecológica de la percepción' }
    ],
    influencioA: [
      { nombre: 'Psicología cognitiva contemporánea', nota: 'Estudio de atención, percepción y memoria' },
      { nombre: 'Elizabeth Loftus', nota: 'Investigación sobre memoria de testigos y falsos recuerdos' }
    ]
  },
  {
    id: 'pozo',
    nombre: 'Juan Ignacio Pozo',
    apellidoCorto: 'Pozo',
    matchKeys: ['pozo'],
    materiaIdsExtra: ['psico-aprendizaje', 'psico-educativa-prof'],
    fechas: '1958 – presente',
    origen: 'Madrid, España',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo cognitivo español referente en psicología del aprendizaje. Integró las tradiciones asociacionista y constructivista para explicar cómo cambian nuestras representaciones.',
    biografia:
      'Catedrático de Psicología Básica en la Universidad Autónoma de Madrid, Juan Ignacio Pozo es uno de los autores más leídos en Psicología del Aprendizaje en Argentina y toda Iberoamérica. Su obra compara de manera clara y sistemática las grandes teorías del aprendizaje —desde el conductismo hasta el procesamiento de la información, Piaget, Vygotsky y Ausubel.\n\nSu aporte más influyente consiste en analizar el cambio conceptual y la relación entre representaciones implícitas (intuitivas, automáticas) y explícitas (conscientes, deliberadas) en el aprendizaje escolar y cotidiano.',
    principalesAportes: [
      'Síntesis comparativa entre las teorías asociacionistas (conductismo, procesamiento de información) y las constructivistas (Piaget, Vygotsky, Ausubel).',
      'Diferenciación entre aprendizaje implícito (asociativo, encarnado) y aprendizaje explícito (constructivo y reflexivo).',
      'Modelo del cambio conceptual y de la redescripción representacional aplicado a la enseñanza de ciencias y cultura.'
    ],
    conceptosClave: [
      {
        termino: 'Aprendizaje asociativo vs. constructivo',
        explicacion:
          'El asociativo copia o encadena regularidades por práctica repetitiva; el constructivo reorganiza significados previos.'
      },
      {
        termino: 'Teorías implícitas',
        explicacion:
          'Creencias intuitivas y no conscientes sobre el mundo o el propio aprendizaje que resisten el cambio si no se explicitan.'
      },
      {
        termino: 'Cambio conceptual',
        explicacion:
          'Proceso por el cual un aprendiz integra y supera concepciones intuitivas mediante modelos científicos más potentes.'
      },
      {
        termino: 'Nueva cultura del aprendizaje',
        explicacion:
          'Desafío de aprender a gestionar información abundante, compleja e incierta en la sociedad contemporánea.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Teorías cognitivas del aprendizaje',
        año: '1989',
        resumen: 'Clásico de estudio para comparar conductismo, cognitivismo, Piaget y Vygotsky.'
      },
      {
        titulo: 'Aprendices y maestros',
        año: '1996',
        resumen: 'Analiza la psicología cognitiva del aprendizaje en contextos educativos.'
      },
      {
        titulo: 'Psicología del aprendizaje humano',
        año: '2014',
        resumen: 'Actualización centrada en el aprendizaje implícito, encarnado y explícito.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Constructivismo y equilibración' },
      { nombre: 'Lev S. Vygotsky', autorId: 'vygotsky', nota: 'Mediación cultural del aprendizaje' },
      { nombre: 'David Ausubel', nota: 'Aprendizaje significativo' },
      { nombre: 'Annette Karmiloff-Smith', nota: 'Redescripción representacional' }
    ],
    influencioA: [
      { nombre: 'Didáctica y Psicología Educacional iberoamericana', nota: 'Formación docente y cambio conceptual' }
    ]
  },

  // ======================== SOCIAL E INSTITUCIONAL ========================
  {
    id: 'moscovici',
    nombre: 'Serge Moscovici',
    apellidoCorto: 'Moscovici',
    matchKeys: ['moscovici'],
    materiaIdsExtra: ['psico-social', 'teoria-tecnica-grupos'],
    fechas: '1925 – 2014',
    origen: 'Brăila, Rumania · París, Francia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Psicólogo social rumano-francés creador de la teoría de las representaciones sociales y de los estudios sobre la influencia de las minorías activas.',
    biografia:
      'Nacido en Rumania y sobreviviente de la persecución antisemita durante la Segunda Guerra Mundial, Serge Moscovici emigró a Francia en 1948, donde se convirtió en una de las figuras centrales de la psicología social europea. En su tesis doctoral de 1961 estudió cómo la sociedad francesa se apropiaba del psicoanálisis, dando origen a la teoría de las representaciones sociales.\n\nPropuso superar la lectura dualista (Sujeto–Objeto) mediante una mirada ternaria (Ego–Alter–Objeto), situando a la comunicación y la cultura en el corazón de la psicología social.',
    principalesAportes: [
      'Teoría de las Representaciones Sociales: cómo el conocimiento científico se transforma en saber del sentido común.',
      'Descripción de los dos procesos formadores de una representación social: objetivación y anclaje.',
      'Teoría de la influencia de las minorías activas: el cambio social surge del estilo de comportamiento consistente de grupos minoritarios.',
      'Mirada psicosocial ternaria (Sujeto individual – Sujeto social – Objeto).'
    ],
    conceptosClave: [
      {
        termino: 'Representaciones sociales',
        explicacion:
          'Sistemas de valores, ideas y prácticas compartidas que permiten orientarse en el mundo social y comunicarse.'
      },
      {
        termino: 'Objetivación',
        explicacion:
          'Proceso que vuelve concreto y tangible un concepto abstracto (por ejemplo, transformar "complejo" en una imagen cotidiana).'
      },
      {
        termino: 'Anclaje',
        explicacion:
          'Enraizamiento de lo nuevo y extraño dentro de categorías, valores y redes de significado preexistentes.'
      },
      {
        termino: 'Minorías activas',
        explicacion:
          'Grupos sin poder mayoritario capaces de generar innovación social si sostienen una postura consistente y flexible.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El psicoanálisis, su imagen y su público',
        año: '1961',
        resumen: 'Obra inaugural de la teoría de las representaciones sociales.'
      },
      {
        titulo: 'Psicología de las minorías activas',
        año: '1976',
        resumen: 'Revoluciona el estudio de la influencia social más allá del conformismo.'
      },
      {
        titulo: 'Psicología Social (Tomos I y II)',
        año: '1984',
        resumen: 'Manual de referencia utilizado en Psicología Social de la UBA.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Émile Durkheim', nota: 'Representaciones colectivas como punto de partida' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Estudio de las representaciones del mundo' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Objeto de su investigación de 1961 y psicología de las masas' }
    ],
    influencioA: [
      { nombre: 'Denise Jodelet', nota: 'Desarrollo y aplicación de las representaciones sociales' },
      { nombre: 'Elena Zubieta', nota: 'Psicología social y cultura política en la UBA' },
      { nombre: 'Willem Doise', nota: 'Niveles de análisis en psicología social' }
    ]
  },
  {
    id: 'foucault',
    nombre: 'Michel Foucault',
    apellidoCorto: 'Foucault',
    matchKeys: ['foucault'],
    materiaIdsExtra: [
      'historia-psico',
      'salud-publica-mental',
      'psico-social',
      'psico-juridica',
      'etica-deontologia-ddhh',
      'psico-organizacional-institucional'
    ],
    fechas: '1926 – 1984',
    origen: 'Poitiers · París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo e historiador de las ideas francés. Analizó las relaciones entre saber, poder y subjetividad en la psiquiatría, la cárcel, la clínica y la sexualidad.',
    biografia:
      'Licenciado en filosofía y también en psicología, Michel Foucault fue profesor en el Collège de France y uno de los pensadores más influyentes del siglo XX. Sus investigaciones recorrieron tres grandes ejes: la arqueología del saber (cómo surgen discursos científicos), la genealogía del poder (disciplinas, vigilancia y biopolítica) y las tecnologías del yo (ética y cuidado de sí).\n\nEn Psicología UBA es un autor clave para pensar críticamente la historia de la locura, las instituciones manicomiales, el poder disciplinario, los dispositivos jurídico-penales y la producción histórica de la subjetividad.',
    principalesAportes: [
      'Historia crítica de la locura y del nacimiento de la psiquiatría y el asilo moderno.',
      'Análisis del poder disciplinario (panoptismo, normalización, examen) en escuelas, hospitales, fábricas y prisiones.',
      'Conceptualización de la biopolítica y la gubernamentalidad como gestión de las poblaciones.',
      'Noción de dispositivo y crítica a la idea de un poder puramente represivo: el poder también produce saberes y sujetos.'
    ],
    conceptosClave: [
      {
        termino: 'Saber / Poder',
        explicacion:
          'No hay relación de poder sin constitución de un campo de saber, ni saber que no suponga y constituya relaciones de poder.'
      },
      {
        termino: 'Sociedad disciplinaria y Panoptismo',
        explicacion:
          'Tecnología de poder basada en la vigilancia continua, la distribución espacial y la normalización de cuerpos dóciles.'
      },
      {
        termino: 'Biopolítica',
        explicacion:
          'Poder centrado en regular la vida de las poblaciones (salud, natalidad, higiene, normalidad).'
      },
      {
        termino: 'Dispositivo',
        explicacion:
          'Red heterogénea de discursos, instituciones, leyes y prácticas que responde a una urgencia histórica y produce subjetividad.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Historia de la locura en la época clásica',
        año: '1961',
        resumen: 'Rastrea cómo la locura pasó a ser definida como enfermedad mental y objeto de encierro.'
      },
      {
        titulo: 'Vigilar y castigar',
        año: '1975',
        resumen: 'Estudio clásico del poder disciplinario, el panóptico y las ciencias humanas.'
      },
      {
        titulo: 'Historia de la sexualidad I: La voluntad de saber',
        año: '1976',
        resumen: 'Critica la hipótesis represiva e introduce la noción de biopoder.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Método genealógico y crítica de la verdad' },
      { nombre: 'Georges Canguilhem', autorId: 'canguilhem', nota: 'Historia de las ciencias y lo normal y lo patológico' },
      { nombre: 'Maurice Merleau-Ponty', autorId: 'merleau-ponty', nota: 'Formación filosófica inicial en París' }
    ],
    influencioA: [
      { nombre: 'Giorgio Agamben', autorId: 'agamben', nota: 'Biopolítica contemporánea, Homo Sacer y dispositivos' },
      { nombre: 'Roberto Esposito', autorId: 'esposito', nota: 'Paradigma inmunitario y biopolítica afirmativa' },
      { nombre: 'Byung-Chul Han', autorId: 'byung-chul-han', nota: 'Pasaje de la sociedad disciplinaria a la sociedad del rendimiento' },
      { nombre: 'Gilles Deleuze', autorId: 'deleuze', nota: 'Sociedades de control y dispositivos contemporáneos' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Genealogía de la sexualidad y teoría de género' },
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Crítica al modelo médico hegemónico y salud mental' }
    ]
  },
  {
    id: 'danziger',
    nombre: 'Kurt Danziger',
    apellidoCorto: 'Danziger',
    matchKeys: ['danziger'],
    materiaIdsExtra: ['historia-psico'],
    fechas: '1926 – presente',
    origen: 'Breslavia, Alemania · Sudáfrica / Canadá',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Historiador crítico de la psicología. Mostró que los métodos y categorías psicológicas (como inteligencia o personalidad) son construcciones históricas y sociales.',
    biografia:
      'Nacido en Alemania, formado en Sudáfrica y Oxford y profesor emérito de la Universidad de York en Canadá, Kurt Danziger es una de las figuras centrales de la nueva historia crítica de la psicología. Su trabajo rompió con las historias tradicionales "celebratorias" que presentaban a la psicología como un progreso lineal y acumulativo.\n\nEn Historia de la Psicología de la UBA es bibliografía obligatoria para comprender cómo los laboratorios de Wundt, Galton y el experimento clínico francés configuraron diferentes prácticas investigativas y definieron qué significa "investigar al sujeto".',
    principalesAportes: [
      'Análisis de los tres modelos históricos de investigación psicológica: el experimento de Leipzig (Wundt), el experimento clínico (Francia) y el modelo de Galton (grupos estadísticos).',
      'Crítica a la naturalización de las categorías psicológicas (motivación, inteligencia, actitud, personalidad).',
      'Estudio de cómo las demandas institucionales y profesionales moldearon los métodos de la psicología moderna.'
    ],
    conceptosClave: [
      {
        termino: 'Modelo de Leipzig vs. Modelo de Galton',
        explicacion:
          'En Wundt el experimentador y sujeto intercambiaban roles; en Galton se impone el análisis estadístico de grupos anónimos.'
      },
      {
        termino: 'Categorías psicológicas como construcciones históricas',
        explicacion:
          'Conceptos como "inteligencia" o "personalidad" no son objetos naturales fijos, sino productos de prácticas sociales específicas.'
      },
      {
        termino: 'Historia crítica de la psicología',
        explicacion:
          'Abordaje que evita el anacronismo y estudia la psicología en su contexto institucional, cultural y político.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Constructing the Subject: Historical Origins of Psychological Research',
        año: '1990',
        resumen: 'Obra maestra sobre el nacimiento de los métodos de investigación en psicología.'
      },
      {
        titulo: 'Naming the Mind',
        año: '1997',
        resumen: 'Historia social de cómo la psicología construyó su vocabulario técnico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Thomas S. Kuhn', autorId: 'kuhn', nota: 'Sociología histórica de la ciencia' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Relación entre prácticas institucionales y saberes' }
    ],
    influencioA: [
      { nombre: 'Historia crítica de la psicología en Argentina (Talak, Vezzetti, Rossi)', nota: 'Historiografía contemporánea en la UBA' }
    ]
  },

  // ======================== EPISTEMOLOGÍA Y LENGUAJE ========================
  {
    id: 'saussure',
    nombre: 'Ferdinand de Saussure',
    apellidoCorto: 'Saussure',
    matchKeys: ['saussure'],
    materiaIdsExtra: ['cbc-semiologia', 'psicoanalisis-freud', 'psicopatologia'],
    fechas: '1857 – 1913',
    origen: 'Ginebra, Suiza',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Lingüista suizo fundador de la lingüística estructural y la semiología. Sus nociones de signo, significante, significado y valor fueron decisivas para Semiología y para Lacan.',
    biografia:
      'Profesor en París y en la Universidad de Ginebra, Ferdinand de Saussure transformó el estudio del lenguaje al dejar de analizarlo solo en su evolución histórica para pensarlo como un sistema de relaciones. Su obra más famosa, el "Curso de lingüística general", fue reconstruida póstumamente en 1916 por sus alumnos Charles Bally y Albert Sechehaye a partir de los apuntes de sus clases.\n\nEn Psicología UBA es puerta de entrada obligatoria en Semiología del CBC y fundamento indispensable para comprender el estructuralismo y la teoría del significante en Jacques Lacan.',
    principalesAportes: [
      'Definición del signo lingüístico como entidad psíquica de dos caras: significante (imagen acústica) y significado (concepto).',
      'Distinción metodológica entre Lengua (sistema social, objeto de la lingüística) y Habla (uso individual).',
      'Noción de valor lingüístico: en la lengua solo hay diferencias sin términos positivos.',
      'Diferenciación entre relaciones sintagmáticas (en presencia) y paradigmáticas/asociativas (en ausencia).'
    ],
    conceptosClave: [
      {
        termino: 'Signo lingüístico (Significante / Significado)',
        explicacion:
          'Unidad indisoluble entre imagen acústica (significante) y concepto mental (significado), no entre una cosa y un nombre.'
      },
      {
        termino: 'Arbitrariedad y linealidad del signo',
        explicacion:
          'El lazo entre significante y significado es convencional (inmotivado) y se despliega linealmente en el tiempo.'
      },
      {
        termino: 'Lengua vs. Habla',
        explicacion:
          'La lengua es el código social compartido; el habla es la ejecución singular y concreta de cada hablante.'
      },
      {
        termino: 'Sincronía y Diacronía',
        explicacion:
          'Estudio del sistema en un corte temporal simultáneo (sincronía) frente a su evolución histórica (diacronía).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Curso de lingüística general',
        año: '1916 (póstumo)',
        resumen: 'Base del estructuralismo y texto troncal de Semiología del CBC.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Neogramáticos alemanes', nota: 'Estudios de lingüística comparada e indoeuropea' },
      { nombre: 'Émile Durkheim', nota: 'Concepción de la lengua como hecho social' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Subversión del signo y primacía del significante' },
      { nombre: 'Claude Lévi-Strauss', nota: 'Antropología estructural' },
      { nombre: 'Roland Barthes', nota: 'Semiología de la cultura y el discurso' }
    ]
  },
  {
    id: 'kuhn',
    nombre: 'Thomas S. Kuhn',
    apellidoCorto: 'Kuhn',
    matchKeys: ['kuhn'],
    materiaIdsExtra: ['cbc-ipc', 'metodologia-inv', 'historia-psico'],
    fechas: '1922 – 1996',
    origen: 'Cincinnati · Cambridge, Estados Unidos',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Físico e historiador de la ciencia estadounidense. Introdujo los conceptos de paradigma, ciencia normal, anomalías y revoluciones científicas.',
    biografia:
      'Doctorado en física teórica en Harvard, Thomas Kuhn giró hacia la historia y filosofía de la ciencia al estudiar la astronomía antigua y la revolución copernicana. En 1962 publicó "La estructura de las revoluciones científicas", obra que cuestionó la visión clásica (positivista y popperiana) de la ciencia como acumulación lineal de verdades.\n\nEn Psicología UBA es un autor central desde IPC del CBC y reaparece en Historia de la Psicología y Metodología al debatir si la psicología es una ciencia "preparadigmática" o multiparadigmática.',
    principalesAportes: [
      'Introducción del concepto de Paradigma como matriz disciplinar compartida por una comunidad científica.',
      'Descripción del desarrollo científico en fases: preciencia, ciencia normal, crisis, revolución científica y nuevo paradigma.',
      'Tesis de la inconmensurabilidad entre paradigmas rivales (cambian problemas, criterios y formas de ver el mundo).'
    ],
    conceptosClave: [
      {
        termino: 'Paradigma',
        explicacion:
          'Logros científicos universalmente reconocidos que durante un tiempo proporcionan modelos de problemas y soluciones a una comunidad.'
      },
      {
        termino: 'Ciencia normal',
        explicacion:
          'Actividad cotidiana de resolución de enigmas dentro de las reglas del paradigma vigente sin cuestionar sus fundamentos.'
      },
      {
        termino: 'Anomalía y Crisis',
        explicacion:
          'Fenómenos persistentes que el paradigma no logra explicar; su acumulación abre un período de crisis científica.'
      },
      {
        termino: 'Inconmensurabilidad',
        explicacion:
          'Los paradigmas sucesivos no pueden medirse con una regla neutral única porque redefinen términos y observaciones.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La estructura de las revoluciones científicas',
        año: '1962',
        resumen: 'Uno de los libros más influyentes de la filosofía de la ciencia del siglo XX.'
      },
      {
        titulo: 'La tensión esencial',
        año: '1977',
        resumen: 'Profundiza la relación entre tradición e innovación en la ciencia.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Alexandre Koyré', nota: 'Historia conceptual de la ciencia' },
      { nombre: 'Ludwik Fleck', nota: 'Colectivos y estilos de pensamiento' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Cambios de Gestalt y epistemología evolutiva' }
    ],
    influencioA: [
      { nombre: 'Kurt Danziger', autorId: 'danziger', nota: 'Historia crítica de la psicología' },
      { nombre: 'Imre Lakatos y Paul Feyerabend', nota: 'Debate post-popperiano en filosofía de la ciencia' }
    ]
  },

  // ======================== NEUROCIENCIAS Y CLÍNICA ========================
  {
    id: 'kandel',
    nombre: 'Eric R. Kandel',
    apellidoCorto: 'Kandel',
    matchKeys: ['kandel'],
    materiaIdsExtra: ['neuro-fisiologia', 'neuropsicologia'],
    fechas: '1929 – presente',
    origen: 'Viena, Austria · Nueva York, Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Neurocientífico austríaco-estadounidense, Premio Nobel de Medicina (2000). Demostró las bases celulares y sinápticas de la memoria y la plasticidad neuronal.',
    biografia:
      'Nacido en Viena y emigrado a Estados Unidos en 1939 huyendo del nazismo, Eric Kandel estudió medicina con interés inicial en el psicoanálisis antes de dedicarse a la neurobiología de la memoria. Mediante el estudio del caracol marino Aplysia descubrió cómo el aprendizaje modifica la eficacia de las conexiones sinápticas.\n\nSu tratado "Principios de Neurociencia" es el manual de referencia mundial de Neurofisiología en la UBA, y en sus ensayos propuso además un diálogo integrador entre las neurociencias contemporáneas y el psicoanálisis.',
    principalesAportes: [
      'Descubrimiento de los mecanismos celulares y moleculares del aprendizaje y la memoria a corto y largo plazo (Premio Nobel 2000).',
      'Demostración de que la experiencia y la psicoterapia producen cambios reales en la plasticidad sináptica y la expresión génica.',
      'Sistematización enciclopédica de la neurociencia moderna en "Principios de Neurociencia".'
    ],
    conceptosClave: [
      {
        termino: 'Plasticidad sináptica',
        explicacion:
          'Capacidad del sistema nervioso de modificar la fuerza y estructura de sus sinapsis a partir de la experiencia y el aprendizaje.'
      },
      {
        termino: 'Memoria implícita vs. explícita',
        explicacion:
          'La explícita (declarativa) depende del hipocampo y lóbulo temporal medial; la implícita (hábitos, condicionamiento) involucra amígdala, cerebelo y ganglios basales.'
      },
      {
        termino: 'Consolidación sináptica',
        explicacion:
          'Pasaje de la memoria a corto plazo (cambios funcionales transitorios) a largo plazo (síntesis de proteínas y nuevas conexiones).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Principios de Neurociencia (con Schwartz y Jessell)',
        año: '1981 (múltiples eds.)',
        resumen: 'Manual troncal de Neurofisiología y Neuropsicología.'
      },
      {
        titulo: 'En busca de la memoria',
        año: '2006',
        resumen: 'Autobiografía intelectual que une historia personal, psicoanálisis y neurociencia.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Santiago Ramón y Cajal', nota: 'Doctrina de la neurona y plasticidad' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Interés inicial por la mente y la memoria' },
      { nombre: 'Donald Hebb', nota: 'Hipótesis sináptica del aprendizaje' }
    ],
    influencioA: [
      { nombre: 'Neurociencia cognitiva y Neuropsicología moderna', nota: 'Modelos biológicos de memoria y aprendizaje' }
    ]
  },
  {
    id: 'barlow',
    nombre: 'David H. Barlow',
    apellidoCorto: 'Barlow',
    matchKeys: ['barlow'],
    materiaIdsExtra: [
      'psico-clinica-psicoterapias-2',
      'clinica-cognitivo-comportamental',
      'entrenamiento-tecnicas-cognitivas'
    ],
    fechas: '1942 – presente',
    origen: 'Needham, Massachusetts, Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psicólogo clínico referente en trastornos de ansiedad y psicoterapia basada en evidencia. Creador del Protocolo Unificado transdiagnóstico y editor del Clinical Handbook.',
    biografia:
      'Profesor emérito de Psicología y Psiquiatría en la Universidad de Boston y fundador del Center for Anxiety and Related Disorders (CARD), David Barlow es una de las máximas autoridades internacionales en terapia cognitivo-conductual y psicopatología basada en la evidencia.\n\nSu trabajo impulsó el pasaje desde protocolos rígidos para cada diagnóstico aislado hacia un enfoque transdiagnóstico —el Protocolo Unificado— centrado en procesos comunes de regulación emocional en los trastornos de ansiedad y del estado de ánimo. Es bibliografía central en Clínica y Psicoterapias II y materias cognitivo-conductuales de la UBA.',
    principalesAportes: [
      'Desarrollo del Protocolo Unificado (PU) para el tratamiento transdiagnóstico de los trastornos emocionales.',
      'Edición del "Clinical Handbook of Psychological Disorders", referencia clínica paso a paso para tratamientos con apoyo empírico.',
      'Modelo de triple vulnerabilidad (biológica generalizada, psicológica generalizada y psicológica específica) para explicar la ansiedad y depresión.'
    ],
    conceptosClave: [
      {
        termino: 'Enfoque transdiagnóstico',
        explicacion:
          'Interviene sobre mecanismos compartidos (neuroticismo, evitación emocional) presentes en múltiples trastornos emocionales.'
      },
      {
        termino: 'Protocolo Unificado (PU)',
        explicacion:
          'Tratamiento cognitivo-conductual modular centrado en conciencia emocional, flexibilidad cognitiva y exposición emocional.'
      },
      {
        termino: 'Exposición interoceptiva y situacional',
        explicacion:
          'Confrontación gradual con sensaciones físicas y situaciones temidas para extinguir la evitación y aprender tolerancia.'
      },
      {
        termino: 'Psicoterapia basada en la evidencia',
        explicacion:
          'Integración de la mejor investigación clínica disponible con la pericia del terapeuta y las preferencias del paciente.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Clinical Handbook of Psychological Disorders',
        año: '1985–2021',
        resumen: 'Manual clínico paso a paso de tratamientos psicológicos validados empíricamente.'
      },
      {
        titulo: 'Protocolo Unificado para el tratamiento transdiagnóstico de los trastornos emocionales',
        año: '2011–2018',
        resumen: 'Guía terapéutica modular de gran impacto en la clínica cognitiva actual.'
      },
      {
        titulo: 'Anxiety and Its Disorders',
        año: '1988–2002',
        resumen: 'Obra integral sobre la naturaleza y el tratamiento de la ansiedad y el pánico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Aaron T. Beck', autorId: 'beck', nota: 'Reestructuración cognitiva y clínica de la ansiedad' },
      { nombre: 'B. F. Skinner', autorId: 'skinner', nota: 'Principios del aprendizaje y terapia de exposición (junto a Wolpe)' }
    ],
    influencioA: [
      { nombre: 'Eduardo Keegan', autorId: 'keegan', nota: 'Difusión de la clínica cognitivo-conductual en Psicología UBA' },
      { nombre: 'Clínica transdiagnóstica contemporánea', nota: 'Protocolos integrados basados en evidencia' }
    ],
    ediRecursos: [
      {
        label: 'Clinical Handbook · PDF EDI',
        detalle: 'Manual clínico disponible en la biblioteca digital del EDI – CEP.',
        url: EDI_RECURSOS_AUTORES.barlowClinicalHandbook
      },
      {
        label: 'Protocolo Unificado · PDF EDI',
        detalle: 'Guía terapéutica transdiagnóstica disponible en EDI – CEP.',
        url: EDI_RECURSOS_AUTORES.barlowProtocoloUnificado
      }
    ]
  },
  {
    id: 'beck',
    nombre: 'Aaron T. Beck',
    apellidoCorto: 'Beck',
    matchKeys: ['beck'],
    materiaIdsExtra: [
      'psico-clinica-psicoterapias-2',
      'clinica-cognitivo-comportamental',
      'entrenamiento-tecnicas-cognitivas'
    ],
    fechas: '1921 – 2021',
    origen: 'Providence · Filadelfia, Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psiquiatra estadounidense fundador de la Terapia Cognitiva. Demostró el papel de los pensamientos automáticos, los esquemas y las distorsiones cognitivas en la depresión y la ansiedad.',
    biografia:
      'Formado inicialmente como psiquiatra y psicoanalista en la Universidad de Pensilvania, Aaron Temkin Beck realizó en los años 60 investigaciones empíricas sobre la depresión que lo llevaron a observar un patrón sistemático de pensamientos negativos espontáneos en sus pacientes. A partir de allí creó la Terapia Cognitiva.\n\nSu modelo revolucionó la psicoterapia contemporánea al proponer tratamientos estructurados, colaborativos y empíricamente evaluables, además de instrumentos clínicos ampliamente usados como el Inventario de Depresión de Beck (BDI).',
    principalesAportes: [
      'Creación de la Terapia Cognitiva para la depresión, luego extendida a ansiedad, trastornos de personalidad y psicosis.',
      'Modelo cognitivo en tres niveles: pensamientos automáticos, creencias intermedias y creencias nucleares (esquemas).',
      'Formulación de la tríada cognitiva de la depresión y del empirismo colaborativo en la relación terapéutica.'
    ],
    conceptosClave: [
      {
        termino: 'Tríada cognitiva',
        explicacion:
          'Visión negativa sostenida sobre uno mismo, el mundo y el futuro característica de los cuadros depresivos.'
      },
      {
        termino: 'Pensamientos automáticos y Distorsiones',
        explicacion:
          'Cogniciones rápidas e involuntarias atravesadas por sesgos (pensamiento dicotómico, catastrofización, sobregeneralización).'
      },
      {
        termino: 'Esquemas / Creencias nucleares',
        explicacion:
          'Estructuras profundas formadas tempranamente que filtran e interpretan la experiencia cotidiana.'
      },
      {
        termino: 'Empirismo colaborativo',
        explicacion:
          'Alianza en la que paciente y terapeuta investigan juntos la validez y utilidad de las creencias como si fueran hipótesis.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Terapia cognitiva de la depresión (con Rush, Shaw y Emery)',
        año: '1979',
        resumen: 'Manual fundacional de la terapia cognitiva clínica.'
      },
      {
        titulo: 'Trastornos de ansiedad y fobias: una perspectiva cognitiva',
        año: '1985',
        resumen: 'Aplica el modelo de esquemas de amenaza a los trastornos de ansiedad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Albert Ellis', autorId: 'ellis', nota: 'Terapia racional emotiva y mediación cognitiva' },
      { nombre: 'George Kelly', nota: 'Psicología de los constructos personales' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Formación psicoanalítica inicial de la cual se diferencia' }
    ],
    influencioA: [
      { nombre: 'David H. Barlow', autorId: 'barlow', nota: 'Psicoterapia cognitivo-conductual basada en evidencia' },
      { nombre: 'Steven C. Hayes', autorId: 'hayes', nota: 'Evolución hacia la tercera ola contextual (ACT)' },
      { nombre: 'Eduardo Keegan', autorId: 'keegan', nota: 'Enseñanza e investigación en terapia cognitiva en la UBA' },
      { nombre: 'Judith Beck', nota: 'Sistematización y enseñanza de la terapia cognitiva' }
    ]
  },

  // ======================== REFERENTES UBA / ARGENTINA ========================
  {
    id: 'pichon-riviere',
    nombre: 'Enrique Pichon-Rivière',
    apellidoCorto: 'Pichon-Rivière',
    matchKeys: ['pichon', 'pichon-riviere'],
    materiaIdsExtra: [
      'teoria-tecnica-grupos',
      'psico-social',
      'psico-organizacional-institucional',
      'salud-publica-mental'
    ],
    fechas: '1907 – 1977',
    origen: 'Ginebra, Suiza · Goya / Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psiquiatra, cofundador de la APA y creador de la Psicología Social argentina. Formuló el ECRO, la teoría del vínculo y la técnica de grupos operativos.',
    biografia:
      'Nacido en Suiza de padres franceses y criado desde niño en el Chaco y Corrientes, Enrique Pichon-Rivière fue una figura fundacional de la psiquiatría dinámica, el psicoanálisis (cofundador de la Asociación Psicoanalítica Argentina en 1942) y la psicología social en Argentina.\n\nSu experiencia en el Hospicio de las Mercedes (hoy Hospital Borda) y en intervenciones comunitarias como la "Experiencia Rosario" lo llevó a articular psicoanálisis y materialismo dialéctico, creando la teoría del vínculo y el dispositivo de los grupos operativos, pilares de Teoría y Técnica de Grupos y Psicología Social en la UBA.',
    principalesAportes: [
      'Creación de la técnica de Grupos Operativos centrados en una tarea explícita y una tarea implícita.',
      'Elaboración del ECRO (Esquema Conceptual, Referencial y Operativo) y del cono invertido para evaluar la dinámica grupal.',
      'Teoría del vínculo y comprensión del enfermo mental como "portavoz" emergente de un grupo familiar o social.',
      'Reconceptualización de la salud mental como adaptación activa a la realidad (aprendizaje y transformación mutua).'
    ],
    conceptosClave: [
      {
        termino: 'ECRO',
        explicacion:
          'Esquema Conceptual, Referencial y Operativo: conjunto organizado de nociones que orienta la lectura e intervención en un campo.'
      },
      {
        termino: 'Grupo Operativo y Tarea',
        explicacion:
          'Conjunto de personas ligadas por tiempo y espacio articuladas por mutua representación interna que se proponen una tarea común.'
      },
      {
        termino: 'Portavoz y Chivo emisario',
        explicacion:
          'Roles dinámicos del grupo: el portavoz denuncia el acontecer latente; el chivo emisario concentra los aspectos negativos.'
      },
      {
        termino: 'Miedos básicos (Pérdida y Ataque)',
        explicacion:
          'Ansiedades depresiva y paranoide frente al cambio que generan resistencia y deben elaborarse para aprender.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El proceso grupal (Del psicoanálisis a la psicología social I)',
        año: '1971',
        resumen: 'Reúne sus textos fundamentales sobre grupos operativos, ECRO y tarea.'
      },
      {
        titulo: 'Teoría del vínculo',
        año: '1979 (póstumo)',
        resumen: 'Desarrolla la estructura bicorporal y tripersonal del vínculo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Teoría psicoanalítica y psicología de las masas' },
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Ansiedades básicas y relaciones objetales' },
      { nombre: 'Kurt Lewin', autorId: 'lewin', nota: 'Teoría del campo y dinámica de grupos' },
      { nombre: 'George Herbert Mead', nota: 'Interaccionismo simbólico y roles sociales' }
    ],
    influencioA: [
      { nombre: 'José Bleger', autorId: 'bleger', nota: 'Psicohigiene, psicología de la conducta e instituciones' },
      { nombre: 'Arminda Aberastury', autorId: 'aberastury', nota: 'Pionera del psicoanálisis de niños y familia' },
      { nombre: 'Fernando Ulloa', autorId: 'ulloa', nota: 'Psicología institucional y clínica grupal argentina' }
    ]
  },
  {
    id: 'bleger',
    nombre: 'José Bleger',
    apellidoCorto: 'Bleger',
    matchKeys: ['bleger'],
    materiaIdsExtra: [
      'psico-organizacional-institucional',
      'exploracion-diagnostico-2',
      'teoria-tecnica-grupos',
      'salud-publica-mental',
      'historia-psico'
    ],
    fechas: '1922 – 1972',
    origen: 'Ceres (Santa Fe) · Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psiquiatra y psicoanalista argentino, docente histórico de la UBA. Revolucionó la enseñanza de la entrevista psicológica, la conducta, el encuadre y la psicología institucional.',
    biografia:
      'Discípulo directo de Enrique Pichon-Rivière y profesor titular en la carrera de Psicología de la UBA desde sus primeros años, José Bleger fue uno de los grandes constructores de la identidad profesional del psicólogo en Argentina. Buscó integrar la clínica psicoanalítica con el compromiso social, el ámbito institucional y la prevención comunitaria.\n\nSus textos sobre la entrevista psicológica, las áreas de la conducta y la psicohigiene siguen siendo lecturas insoslayables en Exploración y Diagnóstico, Psicología Institucional, Grupos y Salud Pública.',
    principalesAportes: [
      'Formulación de la "Psicohigiene": pasar de la asistencia individual a la prevención e intervención en instituciones y comunidad.',
      'Teoría de la entrevista psicológica abierta como campo dinámico en el que el entrevistador es observador participante.',
      'Distinción entre encuadre (constantes del proceso) y proceso psicoanalítico, y estudio de la simbiosis y ambigüedad.',
      'Sistematización de la conducta en tres áreas coexistentes: mente (1), cuerpo (2) y mundo externo (3).'
    ],
    conceptosClave: [
      {
        termino: 'Psicohigiene',
        explicacion:
          'Promoción de la salud y prevención en ámbitos cotidianos (escuelas, hospitales, fábricas) más allá del consultorio privado.'
      },
      {
        termino: 'Entrevista psicológica como campo',
        explicacion:
          'Relación humana donde las variables son configuradas mayormente por la personalidad del entrevistado; requiere disociación instrumental.'
      },
      {
        termino: 'Psicología institucional',
        explicacion:
          'Intervención sobre las dinámicas, conflictos y objetivos de una organización manteniendo independencia profesional.'
      },
      {
        termino: 'Encuadre',
        explicacion:
          'Conjunto de constantes (tiempo, espacio, honorarios, roles) que funcionan como fondo mudo donde se despliega el proceso.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicología de la conducta',
        año: '1963',
        resumen: 'Texto clásico sobre las áreas de la conducta y el enfoque dramático-dialéctico.'
      },
      {
        titulo: 'Psicohigiene y psicología institucional',
        año: '1966',
        resumen: 'Funda el campo de la intervención institucional del psicólogo en Argentina.'
      },
      {
        titulo: 'Temas de psicología (Entrevista y grupos)',
        año: '1971',
        resumen: 'Contiene el célebre ensayo "La entrevista psicológica", leído en toda la carrera.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Maestro, analista y referente teórico' },
      { nombre: 'Georges Politzer', nota: 'Psicología concreta y crítica a la psicología abstracta' },
      { nombre: 'Sigmund Freud y Melanie Klein', autorId: 'freud', nota: 'Metapsicología y clínica psicoanalítica' }
    ],
    influencioA: [
      { nombre: 'Fernando Ulloa', autorId: 'ulloa', nota: 'Psicología institucional y clínica en organizaciones públicas' },
      { nombre: 'Aldo Schlemenson', autorId: 'aldo-schlemenson', nota: 'Análisis organizacional y perspectiva ética en el trabajo' },
      { nombre: 'Generaciones de psicólogos de la UBA', nota: 'Rol profesional más allá de la clínica individual' }
    ]
  },
  {
    id: 'aberastury',
    nombre: 'Arminda Aberastury',
    apellidoCorto: 'Aberastury',
    matchKeys: ['aberastury'],
    materiaIdsExtra: ['psico-desarrollo-adolescencia', 'psico-desarrollo-niñez', 'clinica-ninos-adolescentes'],
    fechas: '1910 – 1972',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Pionera del psicoanálisis de niños y adolescentes en Argentina y Latinoamérica. Sistematizó los tres duelos fundamentales de la adolescencia (junto a Mauricio Knobel).',
    biografia:
      'Profesora de pedagogía y una de las primeras psicoanalistas de la Asociación Psicoanalítica Argentina (APA), Arminda Aberastury introdujo, tradujo y adaptó creativamente el psicoanálisis de niños en Latinoamérica. Fue creadora de la técnica de la "hora de juego diagnóstica" y pionera en incluir entrevistas con los padres dentro del dispositivo clínico infantil.\n\nJunto a Mauricio Knobel escribió "La adolescencia normal" (1971), texto clásico en Psicología del Desarrollo: Adolescencia de la UBA, donde conceptualizó los duelos estructurales de esa etapa y el "síndrome de la adolescencia normal".',
    principalesAportes: [
      'Formulación de los tres duelos básicos de la adolescencia: por el cuerpo infantil, por el rol e identidad infantiles y por los padres de la infancia.',
      'Desarrollo de la "hora de juego diagnóstica" y del trabajo clínico con padres y grupos de orientación.',
      'Articulación del "síndrome de la adolescencia normal" junto a Mauricio Knobel, despatologizando las crisis propias de la etapa.'
    ],
    conceptosClave: [
      {
        termino: 'Los tres duelos de la adolescencia',
        explicacion:
          'Elaboración necesaria de la pérdida del cuerpo infantil, de la identidad/dependencia infantil y de la imagen idealizada de los padres.'
      },
      {
        termino: 'Síndrome de la adolescencia normal',
        explicacion:
          'Conjunto de fluctuaciones esperables (búsqueda de identidad, tendencia grupal, crisis de valores) que no equivalen a patología.'
      },
      {
        termino: 'Hora de juego diagnóstica',
        explicacion:
          'Dispositivo técnico con caja de juguetes que permite evaluar fantasías, defensas y vínculo en la infancia.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La adolescencia normal (con Mauricio Knobel)',
        año: '1971',
        resumen: 'Obra emblemática sobre los duelos y la identidad adolescente.'
      },
      {
        titulo: 'Teoría y técnica del psicoanálisis de niños',
        año: '1962',
        resumen: 'Sistematiza el encuadre infantil y el trabajo con los padres.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Técnica del juego y psicoanálisis temprano' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Teoría del duelo y metamorfosis de la pubertad' },
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Vínculo familiar y contexto clínico argentino' }
    ],
    influencioA: [
      { nombre: 'Psicoanálisis con niños y adolescentes en Argentina', nota: 'Formación clínica y diagnóstica' },
      { nombre: 'Susana Quiroga', nota: 'Estudio de la adolescencia en Psicología UBA' }
    ]
  },
  {
    id: 'stolkiner',
    nombre: 'Alicia Stolkiner',
    apellidoCorto: 'Stolkiner',
    matchKeys: ['stolkiner'],
    materiaIdsExtra: ['salud-publica-mental', 'salud-colectiva-gestion-politicas', 'salud-mental-desinstitucionalizacion'],
    fechas: '1948 – presente',
    origen: 'Córdoba · Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicóloga argentina referente en Salud Pública, Salud Mental e interdisciplina. Profesora histórica de la UBA y figura clave en el paradigma de derechos y la Ley Nacional de Salud Mental.',
    biografia:
      'Licenciada en Psicología por la Universidad Nacional de Córdoba y diplomada en Salud Pública en la UBA, Alicia Stolkiner fue durante décadas profesora titular de Salud Pública y Salud Mental en la Facultad de Psicología de la UBA e investigadora en salud colectiva.\n\nSu obra articula la salud mental con las políticas públicas, los derechos humanos y la crítica a la medicalización de la vida cotidiana, y es bibliografía imprescindible para comprender la interdisciplina y la Ley Nacional de Salud Mental 26.657.',
    principalesAportes: [
      'Formulación teórico-práctica de la interdisciplina en salud: diferencia entre multidisciplina, interdisciplina y transdisciplina.',
      'Aportes al campo de la Salud Colectiva latinoamericana y al enfoque de derechos en Salud Mental (Ley 26.657).',
      'Crítica a la medicalización/patologización de la infancia y del sufrimiento psíquico cotidiano.',
      'Revisión histórica de las reformas psiquiátricas y procesos de desinstitucionalización.'
    ],
    conceptosClave: [
      {
        termino: 'Interdisciplina',
        explicacion:
          'Construcción colectiva de problemas complejos desde distintos saberes sin borrar especificidades ni yuxtaponer disciplinas aisladas.'
      },
      {
        termino: 'Salud como proceso salud-enfermedad-atención-cuidado',
        explicacion:
          'Supera la definición biomédica estática incorporando determinantes sociales, históricos y subjetivos.'
      },
      {
        termino: 'Medicalización de la vida',
        explicacion:
          'Proceso por el cual malestares sociales, escolares o vitales se reducen a diagnósticos médicos y respuestas farmacológicas.'
      },
      {
        termino: 'Enfoque de derechos en Salud Mental',
        explicacion:
          'Concepción del usuario como sujeto de derechos con atención comunitaria, interdisciplinaria y rechazo al manicomio.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La interdisciplina: entre la epistemología y las prácticas',
        año: '1999',
        resumen: 'Artículo clave de Salud Pública y Salud Mental sobre equipos interdisciplinarios.'
      },
      {
        titulo: 'Medicalización de la vida, sufrimiento subjetivo y prácticas en salud mental',
        año: '2013',
        resumen: 'Analiza el avance del modelo biomédico frente al sufrimiento contemporáneo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Biopolítica y crítica a las instituciones asilares' },
      { nombre: 'Franco Basaglia', autorId: 'basaglia', nota: 'Desmanicomialización y salud mental comunitaria' },
      { nombre: 'Eduardo Menéndez', nota: 'Crítica al Modelo Médico Hegemónico' }
    ],
    influencioA: [
      { nombre: 'Martín De Lellis', autorId: 'de-lellis', nota: 'Políticas públicas de salud mental y APS en la UBA' },
      { nombre: 'Políticas de Salud Mental en Argentina', nota: 'Debate e implementación de la Ley 26.657' }
    ]
  },
  {
    id: 'lombardi',
    nombre: 'Gabriel Lombardi',
    apellidoCorto: 'Lombardi',
    matchKeys: ['lombardi'],
    materiaIdsExtra: ['psico-clinica-psicoterapias-1', 'clinica-psicoanalitica-1', 'psicopatologia'],
    fechas: '1956 – presente',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicoanalista argentino, profesor titular de Clínica de Adultos en Psicología UBA. Investiga la clínica de las neurosis, la libertad en psicoanálisis, la ética de la elección y las psicosis.',
    biografia:
      'Doctor en Psicología, psicoanalista y profesor titular regular de Clínica Psicológica y Psicoterapias: Clínica de Adultos (Cátedra I) en la Facultad de Psicología de la UBA, Gabriel Lombardi es uno de los referentes contemporáneos más leídos en el tramo clínico de la carrera.\n\nSus investigaciones y seminarios profundizan la lógica del síntoma, las entrevistas preliminares, el acto analítico y el lugar de la libertad y la responsabilidad subjetiva frente a los determinismos inconscientes.',
    principalesAportes: [
      'Desarrollo riguroso de la clínica psicoanalítica de adultos (diagnóstico diferencial, entrevistas preliminares y dirección de la cura).',
      'Articulación entre psicoanálisis, lógica formal y el problema de la libertad y la elección forzada.',
      'Estudios sobre clínica de las psicosis y el papel del síntoma como solución singular.'
    ],
    conceptosClave: [
      {
        termino: 'Entrevistas preliminares',
        explicacion:
          'Tiempo lógico inicial de la cura para localizar la posición subjetiva, implicar al sujeto en su queja y orientar el diagnóstico.'
      },
      {
        termino: 'Libertad en psicoanálisis',
        explicacion:
          'No es libre albedrío yoico, sino el margen de elección y acto que se abre cuando el sujeto atraviesa sus determinaciones sintomáticas.'
      },
      {
        termino: 'Diagnóstico estructural',
        explicacion:
          'Evaluación clínica bajo transferencia que atiende a la posición del sujeto respecto al lenguaje y al Otro, más allá de listas de síntomas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La clínica del psicoanálisis (Tomos 1, 2 y 3)',
        año: '1993–2005',
        resumen: 'Recorrido clínico sobre ética, lógica del síntoma y dirección de la cura.'
      },
      {
        titulo: 'La libertad en psicoanálisis',
        año: '2015',
        resumen: 'Indaga cómo la experiencia analítica habilita nuevas decisiones subjetivas.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Técnica analítica y clínica de las neurosis' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Lógica del significante, acto y clínica estructural' }
    ],
    influencioA: [
      { nombre: 'Clínica de Adultos en Psicología UBA', nota: 'Formación de generaciones de practicantes e investigadores' }
    ]
  },
  ...AUTORES_TANDA_2,
  ...AUTORES_TANDA_3,
  ...AUTORES_TANDA_4,
  ...AUTORES_TANDA_5
];

function normalizeKey(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function findAutorById(id: string): AutorProfile | undefined {
  return AUTORES.find((a) => a.id === id);
}

export function findAutorByBibName(bibAuthor: string): AutorProfile | undefined {
  const norm = normalizeKey(bibAuthor);
  if (!norm) return undefined;

  let bestMatch: { autor: AutorProfile; keyLen: number } | undefined;
  for (const autor of AUTORES) {
    for (const key of autor.matchKeys) {
      const normKey = normalizeKey(key);
      if (norm.includes(normKey) && (!bestMatch || normKey.length > bestMatch.keyLen)) {
        bestMatch = { autor, keyLen: normKey.length };
      }
    }
  }
  return bestMatch?.autor;
}

export function getMateriasForAutor(autor: AutorProfile, materias: Materia[]): Materia[] {
  const extraSet = new Set(autor.materiaIdsExtra ?? []);
  const matched: Materia[] = [];
  const seen = new Set<string>();

  for (const m of materias) {
    const inBib = m.catedras.some((c) =>
      c.bibliografia.some((b) => {
        const normBib = normalizeKey(b.autor);
        return autor.matchKeys.some((key) => normBib.includes(normalizeKey(key)));
      })
    );

    if (inBib || extraSet.has(m.id)) {
      if (!seen.has(m.id)) {
        seen.add(m.id);
        matched.push(m);
      }
    }
  }

  return matched;
}
