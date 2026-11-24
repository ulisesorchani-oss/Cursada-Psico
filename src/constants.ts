export interface Materia {
  id: string;
  nombre: string;
  año: number;
  ciclo: 'CBC' | 'Formación General' | 'Formación Profesional' | 'Electivas General' | 'Electivas Profesional' | 'Prácticas';
  cuatrimestre: 1 | 2 | 'Anual';
  descripcion: string;
  objetivos: string[];
  catedras: Catedra[];
  correlativas?: string[];
  area?: string;
}

export interface BibliografiaItem {
  autor: string;
  titulo: string;
  editorial?: string;
  año?: string;
  tipo: 'Obligatoria' | 'Complementaria';
}

export interface Catedra {
  nombre: string;
  titular: string;
  bibliografia: BibliografiaItem[];
  link?: string;
}

export const PLAN_ESTUDIOS: Materia[] = [
  // CBC
  {
    id: 'cbc-ipc',
    nombre: 'Introducción al Pensamiento Científico',
    año: 0,
    ciclo: 'CBC',
    cuatrimestre: 1,
    descripcion: 'Materia introductoria sobre la lógica, metodología de la ciencia y epistemología.',
    objetivos: [
      'Comprender las bases del razonamiento lógico.',
      'Analizar las diferentes corrientes epistemológicas.',
      'Diferenciar entre ciencia, pseudociencia y conocimiento común.'
    ],
    catedras: [
      {
        nombre: 'Cátedra Única',
        titular: 'Varios',
        bibliografia: [
          { autor: 'Gaeta, R.', titulo: 'Nociones de Epistemología', editorial: 'Eudeba', año: '2001', tipo: 'Obligatoria' },
          { autor: 'Kuhn, T.', titulo: 'La estructura de las revoluciones científicas', editorial: 'FCE', año: '1962', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'cbc-biologia',
    nombre: 'Biología',
    año: 0,
    ciclo: 'CBC',
    cuatrimestre: 2,
    descripcion: 'Bases biológicas de los seres vivos, genética y evolución.',
    objetivos: [
      'Estudiar la célula y sus funciones.',
      'Comprender las leyes de la herencia.'
    ],
    catedras: [
      {
        nombre: 'Cátedra Única',
        titular: 'Varios',
        bibliografia: [
          { autor: 'Curtis, H.', titulo: 'Biología', editorial: 'Panamericana', año: '2008', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'cbc-matematica',
    nombre: 'Matemática',
    año: 0,
    ciclo: 'CBC',
    cuatrimestre: 1,
    descripcion: 'Estudio de funciones, límites, derivadas e integrales básicas.',
    objetivos: [
      'Comprender el concepto de función y sus representaciones.',
      'Analizar el comportamiento de funciones mediante el cálculo diferencial.',
      'Resolver problemas de aplicación utilizando herramientas matemáticas.'
    ],
    catedras: [
      {
        nombre: 'Cátedra Única',
        titular: 'Varios',
        bibliografia: [
          { autor: 'Stewart, J.', titulo: 'Cálculo de una variable', editorial: 'Cengage Learning', año: '2008', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'cbc-icse',
    nombre: 'Introducción al Conocimiento de la Sociedad y el Estado',
    año: 0,
    ciclo: 'CBC',
    cuatrimestre: 1,
    descripcion: 'Análisis histórico y político de la conformación de la sociedad y el estado argentino.',
    objetivos: [
      'Estudiar la historia argentina contemporánea.',
      'Analizar los conceptos de Estado, Nación y Gobierno.',
      'Comprender los procesos democráticos y dictatoriales en Argentina.'
    ],
    catedras: [
      {
        nombre: 'Cátedra Única',
        titular: 'Varios',
        bibliografia: [
          { autor: 'Romero, J. L.', titulo: 'Breve historia de la Argentina', editorial: 'FCE', año: '1996', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'cbc-semiologia',
    nombre: 'Semiología',
    año: 0,
    ciclo: 'CBC',
    cuatrimestre: 1,
    descripcion: 'Estudio de los signos, el lenguaje y los procesos de comunicación.',
    objetivos: [
      'Introducir la teoría de Saussure y Peirce.',
      'Analizar los discursos sociales.'
    ],
    catedras: [
      {
        nombre: 'Cátedra Arnoux',
        titular: 'Arnoux',
        bibliografia: [
          { autor: 'Saussure, F.', titulo: 'Curso de lingüística general', editorial: 'Losada', año: '1916', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'cbc-psico',
    nombre: 'Psicología',
    año: 0,
    ciclo: 'CBC',
    cuatrimestre: 2,
    descripcion: 'Introducción a las principales corrientes y conceptos de la psicología.',
    objetivos: [
      'Presentar el objeto de estudio de la psicología.',
      'Introducir el conductismo, la Gestalt y el psicoanálisis.'
    ],
    catedras: [
      {
        nombre: 'Cátedra Quattrocchi',
        titular: 'Quattrocchi',
        bibliografia: [
          { autor: 'Coscio, R.', titulo: 'Psicología: Una introducción', editorial: 'Eudeba', año: '2005', tipo: 'Obligatoria' }
        ]
      }
    ]
  },

  // CICLO DE FORMACIÓN GENERAL
  {
    id: 'procesos-psico-basicos',
    nombre: 'Procesos Psicológicos Básicos',
    año: 1,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Estudio de los procesos psicológicos fundamentales como la percepción, memoria y atención.',
    objetivos: [
      'Comprender los mecanismos básicos del funcionamiento mental.',
      'Analizar los procesos de adquisición y procesamiento de información.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 544)',
        titular: 'Federico González',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Vygotsky, L.', titulo: 'El desarrollo de los procesos psicológicos superiores', editorial: 'Crítica', año: '1979', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 545)',
        titular: 'Félix Ricardo Bur',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Neisser, U.', titulo: 'Psicología Cognitiva', editorial: 'Trillas', año: '1976', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-aprendizaje',
    nombre: 'Psicología del Aprendizaje',
    año: 1,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    descripcion: 'Análisis de las teorías y procesos involucrados en el aprendizaje humano.',
    objetivos: [
      'Estudiar las principales corrientes teóricas sobre el aprendizaje.',
      'Analizar los factores que influyen en la adquisición de conocimientos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 546)',
        titular: 'Alicia Barreiro',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Piaget, J.', titulo: 'Psicología y Pedagogía', editorial: 'Ariel', año: '1969', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 547)',
        titular: 'Diana Concepción Fernández Zalazar',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Pozo, J. I.', titulo: 'Teorías cognitivas del aprendizaje', editorial: 'Morata', año: '1989', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'estadistica',
    nombre: 'Estadística',
    año: 1,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    descripcion: 'Herramientas estadísticas aplicadas a la investigación psicológica.',
    objetivos: [
      'Aprender métodos de análisis de datos cuantitativos.',
      'Interpretar resultados estadísticos en investigaciones.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 060)',
        titular: 'María Silvia Galibert',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Galibert, M. S.', titulo: 'Estadística para Psicología', editorial: 'Eudeba', año: '2015', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 167)',
        titular: 'Roberto Muiños',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Muiños, R.', titulo: 'Análisis de datos en Psicología', editorial: 'Eudeba', año: '2012', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-social',
    nombre: 'Psicología Social',
    año: 2,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Estudio de la interacción humana y los fenómenos grupales.',
    objetivos: [
      'Analizar la influencia social en el comportamiento individual.',
      'Comprender la dinámica de los grupos sociales.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 035)',
        titular: 'Gabriel Sergio Vodovotz',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Moscovici, S.', titulo: 'Psicología Social', editorial: 'Paidós', año: '1985', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 036)',
        titular: 'Elena Zubieta',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Zubieta, E.', titulo: 'Psicología Social y Cultura', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psicoanalisis-freud',
    nombre: 'Psicoanálisis: Freud',
    año: 2,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Estudio de la obra de Sigmund Freud y los conceptos fundamentales del psicoanálisis.',
    objetivos: [
      'Comprender la teoría del inconsciente.',
      'Analizar las formaciones del inconsciente.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 049)',
        titular: 'Silvia Patricia Pino',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Freud, S.', titulo: 'La interpretación de los sueños', editorial: 'Amorrortu', año: '1900', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 050)',
        titular: 'David Laznik',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Freud, S.', titulo: 'Más allá del principio de placer', editorial: 'Amorrortu', año: '1920', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'neuro-fisiologia',
    nombre: 'Neurofisiología',
    año: 1,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Bases biológicas y fisiológicas del comportamiento humano.',
    objetivos: [
      'Estudiar el funcionamiento del sistema nervioso.',
      'Relacionar la fisiología con los procesos mentales.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 048)',
        titular: 'Nancy China',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Kandel, E.', titulo: 'Principios de Neurociencia', editorial: 'McGraw-Hill', año: '2001', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 123)',
        titular: 'María del Pilar Kufa',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Purves, D.', titulo: 'Neurociencia', editorial: 'Panamericana', año: '2007', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'historia-psico',
    nombre: 'Historia de la Psicología',
    año: 1,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    descripcion: 'Recorrido histórico por el desarrollo de la psicología como disciplina.',
    objetivos: [
      'Analizar el surgimiento de las diferentes escuelas psicológicas.',
      'Comprender el contexto histórico de las teorías psicológicas.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 118)',
        titular: 'Marcela Borinsky',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Danziger, K.', titulo: 'Nombrar la mente', editorial: 'Ada Korn', año: '1997', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 034)',
        titular: 'Florencia Ibarra',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Rossi, L.', titulo: 'Historia de la Psicología en Argentina', editorial: 'Eudeba', año: '2001', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'metodologia-inv',
    nombre: 'Metodología de la Investigación',
    año: 3,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    descripcion: 'Métodos y técnicas de investigación científica en psicología.',
    objetivos: [
      'Diseñar proyectos de investigación.',
      'Aplicar técnicas de recolección de datos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 061)',
        titular: 'Susana Azzollini',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Azzollini, S.', titulo: 'Metodología de la Investigación', editorial: 'Eudeba', año: '2014', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 062)',
        titular: 'Roxana Ynoub',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Ynoub, R.', titulo: 'Cuestión de método', editorial: 'Cengage Learning', año: '2015', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'salud-publica-mental',
    nombre: 'Salud Pública y Salud Mental',
    año: 3,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Análisis de la salud mental desde una perspectiva de salud pública y comunitaria.',
    objetivos: [
      'Estudiar las políticas de salud mental.',
      'Comprender el rol del psicólogo en el sistema de salud pública.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 065)',
        titular: 'Martín De Lellis',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'De Lellis, M.', titulo: 'Salud Pública y Salud Mental', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 066)',
        titular: 'Débora Tajer',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Tajer, D.', titulo: 'Género y Salud Mental', editorial: 'Lugar Editorial', año: '2012', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'teoria-tecnica-grupos',
    nombre: 'Teoría y Técnica de Grupos',
    año: 3,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Estudio de las teorías y técnicas aplicadas al trabajo con grupos.',
    objetivos: [
      'Analizar los procesos grupales.',
      'Aprender técnicas de intervención grupal.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 063)',
        titular: 'A designar',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Pichon-Rivière, E.', titulo: 'El proceso grupal', editorial: 'Nueva Visión', año: '1975', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 064)',
        titular: 'Cintia Gisela Rolón',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Bauleo, A.', titulo: 'Ideología, grupo y familia', editorial: 'Kargieman', año: '1970', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-desarrollo-niñez',
    nombre: 'Psicología del Desarrollo: Niñez',
    año: 2,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Estudio del desarrollo psicológico durante la infancia.',
    objetivos: [
      'Analizar los procesos de maduración y desarrollo infantil.',
      'Estudiar las teorías del desarrollo cognitivo y emocional.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 553)',
        titular: 'A designar',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Piaget, J.', titulo: 'La psicología del niño', editorial: 'Morata', año: '1966', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 554)',
        titular: 'Eugenia Sorgen',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Winnicott, D.', titulo: 'El niño y el mundo externo', editorial: 'Paidós', año: '1957', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-desarrollo-adolescencia',
    nombre: 'Psicología del Desarrollo: Adolescencia',
    año: 2,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    descripcion: 'Análisis de los cambios psicológicos y sociales durante la adolescencia.',
    objetivos: [
      'Comprender la crisis de la adolescencia.',
      'Analizar la construcción de la identidad en el adolescente.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 555)',
        titular: 'A designar',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Aberastury, A.', titulo: 'La adolescencia normal', editorial: 'Paidós', año: '1971', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 556)',
        titular: 'A designar',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Dolto, F.', titulo: 'La causa de los adolescentes', editorial: 'Paidós', año: '1988', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psicopatologia',
    nombre: 'Psicopatología',
    año: 3,
    ciclo: 'Formación General',
    cuatrimestre: 'Anual',
    descripcion: 'Estudio de los trastornos mentales y las estructuras clínicas.',
    objetivos: [
      'Diferenciar las estructuras clínicas (neurosis, psicosis, perversión).',
      'Analizar la semiología psiquiátrica y psicoanalítica.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 037)',
        titular: 'Fabián Naparstek',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 3: Las psicosis', editorial: 'Paidós', año: '1984', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 038)',
        titular: 'Fabián Schejtman',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Schejtman, F.', titulo: 'Psicopatología: Clínica y Ética', editorial: 'Gramma', año: '2013', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'exploracion-diagnostico-1',
    nombre: 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I',
    año: 3,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    descripcion: 'Introducción a las técnicas de evaluación y diagnóstico psicológico.',
    objetivos: [
      'Conocer los fundamentos de la evaluación psicológica.',
      'Aprender la aplicación de tests psicométricos y proyectivos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 059)',
        titular: 'Isabel M. Mikulic',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Mikulic, I. M.', titulo: 'Evaluación Psicológica', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 058)',
        titular: 'Alejandro Castro Solano',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Castro Solano, A.', titulo: 'Técnicas de exploración psicológica', editorial: 'Paidós', año: '2004', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'exploracion-diagnostico-2',
    nombre: 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II',
    año: 3,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    descripcion: 'Profundización en las técnicas de diagnóstico y elaboración de informes psicológicos.',
    objetivos: [
      'Integrar los resultados de diferentes técnicas de evaluación.',
      'Desarrollar habilidades para la entrevista diagnóstica.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 113)',
        titular: 'Andrés Febbraio',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Febbraio, A.', titulo: 'El proceso de diagnóstico psicológico', editorial: 'Eudeba', año: '2012', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 042)',
        titular: 'Andrea Vinue',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Vinue, A.', titulo: 'Diagnóstico y Evaluación', editorial: 'Eudeba', año: '2015', tipo: 'Obligatoria' }
        ]
      }
    ]
  },

  // CICLO DE FORMACIÓN PROFESIONAL
  {
    id: 'etica-deontologia-ddhh',
    nombre: 'Ética, Deontología y Derechos Humanos',
    año: 5,
    ciclo: 'Formación Profesional',
    cuatrimestre: 2,
    descripcion: 'Reflexión sobre la dimensión ética, los códigos deontológicos y los derechos humanos en la práctica profesional.',
    objetivos: [
      'Analizar los códigos de ética profesional.',
      'Comprender la responsabilidad subjetiva y legal del psicólogo.',
      'Estudiar la normativa vigente en materia de derechos humanos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 577)',
        titular: 'Elizabeth Beatriz Ormart',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Ormart, E.', titulo: 'Ética y formación profesional', editorial: 'Eudeba', año: '2015', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 578)',
        titular: 'Julieta Bareiro',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Bareiro, J.', titulo: 'Ética y Psicoanálisis', editorial: 'Lugar Editorial', año: '2014', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-organizacional-institucional',
    nombre: 'Psicología Organizacional e Institucional',
    año: 4,
    ciclo: 'Formación Profesional',
    cuatrimestre: 1,
    descripcion: 'Estudio de los fenómenos psicológicos en el ámbito de las organizaciones e instituciones.',
    objetivos: [
      'Analizar la dinámica institucional y organizacional.',
      'Comprender el rol del psicólogo en la intervención institucional.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 644)',
        titular: 'Mariana Funes Molineri',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Schlemenson, A.', titulo: 'La perspectiva ética en el análisis organizacional', editorial: 'Paidós', año: '1990', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 539)',
        titular: 'Nora Vitale',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Vitale, N.', titulo: 'Psicología de las Instituciones', editorial: 'Eudeba', año: '2012', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-educativa-prof',
    nombre: 'Psicología Educacional',
    año: 4,
    ciclo: 'Formación Profesional',
    cuatrimestre: 1,
    descripcion: 'Análisis de los procesos de aprendizaje y subjetivación en el ámbito escolar y educativo.',
    objetivos: [
      'Estudiar las teorías del aprendizaje en contextos educativos.',
      'Analizar las intervenciones del psicólogo en la escuela.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 083)',
        titular: 'Débora Nakache',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Baquero, R.', titulo: 'Vygotsky y el aprendizaje escolar', editorial: 'Aique', año: '1996', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 041)',
        titular: 'A designar',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Erausquin, C.', titulo: 'Psicología Educativa', editorial: 'Eudeba', año: '2014', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-trabajo-prof',
    nombre: 'Psicología del Trabajo',
    año: 4,
    ciclo: 'Formación Profesional',
    cuatrimestre: 1,
    descripcion: 'Estudio de la relación del sujeto con el trabajo y las organizaciones laborales.',
    objetivos: [
      'Analizar los procesos de selección y desarrollo de personal.',
      'Comprender el impacto del trabajo en la subjetividad.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 040)',
        titular: 'Liliana Edith Ferrari',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Ferrari, L.', titulo: 'Psicología del Trabajo', editorial: 'Eudeba', año: '2015', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 724)',
        titular: 'Virginia Borrajo',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Filippi, G.', titulo: 'El aporte de la psicología del trabajo', editorial: 'Eudeba', año: '2013', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-clinica-psicoterapias-1',
    nombre: 'Psicología Clínica y Psicoterapias I',
    año: 4,
    ciclo: 'Formación Profesional',
    cuatrimestre: 2,
    descripcion: 'Introducción a los modelos de intervención clínica y psicoterapias.',
    objetivos: [
      'Conocer los diferentes marcos teóricos de la clínica.',
      'Analizar las técnicas de intervención iniciales.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 574)',
        titular: 'Vanina Muraro',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Lombardi, G.', titulo: 'La clínica del psicoanálisis', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 575)',
        titular: 'Silvia Vazquez',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Vazquez, S.', titulo: 'Modelos en Psicoterapia', editorial: 'Eudeba', año: '2012', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-juridica',
    nombre: 'Psicología Jurídica',
    año: 5,
    ciclo: 'Formación Profesional',
    cuatrimestre: 1,
    descripcion: 'Estudio de la psicología aplicada al ámbito del derecho y la justicia.',
    objetivos: [
      'Analizar el rol del psicólogo forense.',
      'Comprender la relación entre ley y subjetividad.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 768)',
        titular: 'Claudio Ghiso',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Ghiso, C.', titulo: 'Psicología Jurídica', editorial: 'Eudeba', año: '2014', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 769)',
        titular: 'Stella M. Puhl',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Puhl, S. M.', titulo: 'La psicología en el ámbito jurídico', editorial: 'Eudeba', año: '2015', tipo: 'Obligatoria' }
        ]
      }
    ]
  },
  {
    id: 'psico-clinica-psicoterapias-2',
    nombre: 'Psicología Clínica y Psicoterapias II',
    año: 5,
    ciclo: 'Formación Profesional',
    cuatrimestre: 2,
    descripcion: 'Profundización en la práctica clínica y los modelos psicoterapéuticos avanzados.',
    objetivos: [
      'Integrar conocimientos teóricos en la práctica clínica.',
      'Analizar casos clínicos complejos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 570)',
        titular: 'Martín Etchevers',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Etchevers, M.', titulo: 'Avances en Psicoterapia', editorial: 'Eudeba', año: '2016', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 571)',
        titular: 'Eduardo G. Keegan',
        link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        bibliografia: [
          { autor: 'Keegan, E.', titulo: 'Escritos sobre Psicoterapia Cognitiva', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      }
    ]
  },

  // MATERIAS ELECTIVAS
  {
    id: 'psicoanalisis-inglesa-1',
    nombre: 'Psicoanálisis: Escuela Inglesa Cát. I',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Estudio de los desarrollos posfreudianos en la escuela inglesa, centrándose en autores como Melanie Klein.',
    objetivos: ['Analizar la teoría de las posiciones esquizo-paranoide y depresiva.', 'Comprender el concepto de fantasía inconsciente.'],
    catedras: [{ nombre: 'Cátedra I (Cód. 051)', titular: 'Estela S. Eisenberg', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'psicoanalisis-inglesa-2',
    nombre: 'Psicoanálisis: Escuela Inglesa Cát. II',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 2,
    descripcion: 'Profundización en la clínica y teoría de la escuela inglesa de psicoanálisis.',
    objetivos: ['Estudiar los aportes de Bion y Winnicott.', 'Analizar la técnica del juego en el análisis de niños.'],
    catedras: [{ nombre: 'Cátedra II (Cód. 052)', titular: 'Fabiana Freidin', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'psicoanalisis-francesa-1',
    nombre: 'Psicoanálisis: Escuela Francesa Cát. I',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Introducción a los conceptos fundamentales de la escuela francesa de psicoanálisis.',
    objetivos: ['Analizar el retorno a Freud de Jacques Lacan.', 'Estudiar la función del lenguaje en el inconsciente.'],
    catedras: [{ nombre: 'Cátedra I (Cód. 057)', titular: 'Juan de Olaso', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'psicoanalisis-francesa-2',
    nombre: 'Psicoanálisis: Escuela Francesa Cát. II',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 2,
    descripcion: 'Desarrollos avanzados de la teoría lacaniana y sus aplicaciones clínicas.',
    objetivos: ['Estudiar los cuatro conceptos fundamentales del psicoanálisis.', 'Analizar la lógica del fantasma.'],
    catedras: [{ nombre: 'Cátedra II (Cód. 122)', titular: 'Pablo Diego Muñoz', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'psico-fenomenologica-existencial',
    nombre: 'Psicología Fenomenológica y Existencial',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Estudio de las bases filosóficas y psicológicas de la fenomenología y el existencialismo.',
    objetivos: ['Analizar los conceptos de Dasein y ser-en-el-mundo.', 'Comprender la relación entre filosofía y psicología clínica.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 078)', titular: 'Pablo Diego Muñoz', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud', 'Historia de la Psicología']
  },
  {
    id: 'psicoanalisis-psico-yo',
    nombre: 'Psicoanálisis: Psicología del Yo',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Análisis de la corriente de la Psicología del Yo y sus principales exponentes.',
    objetivos: ['Estudiar las funciones del yo y los mecanismos de defensa.', 'Analizar la adaptación y el desarrollo del yo.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 079)', titular: 'Mabel Rosenvald', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'psico-tercera-edad-vejez',
    nombre: 'Psicología de la Tercera Edad y Vejez',
    año: 4,
    ciclo: 'Electivas General',
    cuatrimestre: 2,
    descripcion: 'Estudio de los procesos psicológicos y sociales durante el envejecimiento.',
    objetivos: ['Comprender la subjetividad en la vejez.', 'Analizar los mitos y prejuicios sobre el envejecimiento.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 080)', titular: 'Ricardo Iacub', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología']
  },
  {
    id: 'psicodiagnostico-rorschach',
    nombre: 'Psicodiagnóstico: Rorschach',
    año: 4,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Teoría y técnica de la aplicación e interpretación del test de Rorschach.',
    objetivos: ['Aprender la administración del test.', 'Interpretar los resultados desde una perspectiva diagnóstica.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 082)', titular: 'Ariana García', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'problemas-sociologicos',
    nombre: 'Problemas Sociológicos en Psicología',
    año: 2,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Análisis de la relación entre los procesos sociales y la subjetividad.',
    objetivos: ['Estudiar las principales teorías sociológicas contemporáneas.', 'Analizar el impacto de lo social en la salud mental.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 087)', titular: 'Liliana Ferrari', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['CBC']
  },
  {
    id: 'problemas-antropologicos',
    nombre: 'Problemas Antropológicos en Psicología',
    año: 2,
    ciclo: 'Electivas General',
    cuatrimestre: 2,
    descripcion: 'Estudio de la dimensión cultural y antropológica del ser humano.',
    objetivos: ['Analizar el concepto de hombre en las diferentes culturas.', 'Estudiar la relación entre naturaleza y cultura.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 089)', titular: 'Fernando Gabriel Montañez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['CBC']
  },
  {
    id: 'biologia-comportamiento',
    nombre: 'Biología del Comportamiento',
    año: 2,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Bases biológicas y evolutivas del comportamiento animal y humano.',
    objetivos: ['Estudiar la etología y la psicología comparada.', 'Analizar las bases genéticas de la conducta.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 090)', titular: 'Rubén Muzio', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['CBC']
  },
  {
    id: 'problemas-filosoficos',
    nombre: 'Problemas Filosóficos en Psicología',
    año: 2,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Reflexión sobre los fundamentos filosóficos de las teorías psicológicas.',
    objetivos: ['Analizar la relación mente-cuerpo.', 'Estudiar la ética y la epistemología en psicología.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 096)', titular: 'Fabián Allegro', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['CBC']
  },
  {
    id: 'analisis-modificacion-conducta',
    nombre: 'Análisis y Modificación de la Conducta',
    año: 4,
    ciclo: 'Electivas General',
    cuatrimestre: 2,
    descripcion: 'Teoría y técnica de las terapias conductuales y cognitivo-conductuales.',
    objetivos: ['Aprender técnicas de modificación de conducta.', 'Analizar los principios del aprendizaje aplicados a la clínica.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 780)', titular: 'José Dahab', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'psicoanalisis-orientacion-lacaniana',
    nombre: 'Psicoanálisis: Orientación Lacaniana. Clínica y Escritura.',
    año: 4,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Estudio de la clínica lacaniana contemporánea y la importancia de la escritura en psicoanálisis.',
    objetivos: ['Analizar el concepto de letra y escritura en Lacan.', 'Estudiar casos clínicos desde la orientación lacaniana.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 806)', titular: 'María Inés Sotelo', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'construccion-conceptos-psicoanaliticos',
    nombre: 'Construcción de los Conceptos Psicoanalíticos',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Análisis histórico y epistemológico de la formación de los conceptos en psicoanálisis.',
    objetivos: ['Estudiar la evolución de los conceptos freudianos.', 'Analizar las rupturas y continuidades en la teoría.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 798)', titular: 'María de los Ángeles Córdoba', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'psico-politica-2',
    nombre: 'Psicología Política Cát. II',
    año: 4,
    ciclo: 'Electivas General',
    cuatrimestre: 2,
    descripcion: 'Estudio de los procesos psicológicos involucrados en la vida política y social.',
    objetivos: ['Analizar el comportamiento electoral y la opinión pública.', 'Estudiar el liderazgo político y la ideología.'],
    catedras: [{ nombre: 'Cátedra II (Cód. 810)', titular: 'Jorge Biglieri', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Social']
  },
  {
    id: 'psico-personalidad',
    nombre: 'Psicología de la Personalidad',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Estudio de las diferentes teorías sobre la estructura y dinámica de la personalidad.',
    objetivos: ['Comparar los modelos psicométricos y dinámicos de la personalidad.', 'Analizar el desarrollo de la personalidad.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 860)', titular: 'Cristian Garay', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Procesos Psicológicos Básicos', 'Psicología Social']
  },

  // ELECTIVAS FORMACIÓN PROFESIONAL
  // Área Educacional
  {
    id: 'psicopedagogia-clinica',
    nombre: 'Psicopedagogía Clínica',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Educacional',
    cuatrimestre: 1,
    descripcion: 'Estudio de las dificultades de aprendizaje desde una perspectiva clínica y psicopedagógica.',
    objetivos: ['Analizar los procesos de aprendizaje y sus obstáculos.', 'Intervenir en problemas de aprendizaje en niños y adolescentes.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 085)', titular: 'Patricia Álvarez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'orientacion-vocacional',
    nombre: 'Orientación Vocacional y Ocupacional',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Educacional',
    cuatrimestre: 2,
    descripcion: 'Teoría y técnica de los procesos de orientación para la elección de carrera y ocupación.',
    objetivos: ['Comprender la elección vocacional como proceso subjetivo.', 'Aprender técnicas de orientación individual y grupal.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 086)', titular: 'Gabriela Aisenson', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'psico-discapacidad',
    nombre: 'Psicología de la Discapacidad',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Educacional',
    cuatrimestre: 1,
    descripcion: 'Abordaje psicológico de la discapacidad en los ámbitos educativo y social.',
    objetivos: ['Analizar la subjetividad y la discapacidad.', 'Estudiar los procesos de integración e inclusión.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 136)', titular: 'Andrés Febbraio', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'informatica-educacion-sociedad',
    nombre: 'Informática, Educación y Sociedad',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Educacional',
    cuatrimestre: 2,
    descripcion: 'Impacto de las nuevas tecnologías en los procesos educativos y en la subjetividad contemporánea.',
    objetivos: ['Analizar la relación entre tecnología y aprendizaje.', 'Estudiar la brecha digital y la inclusión tecnológica.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 660)', titular: 'Diana Fernández Zalazar', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },

  // Área Clínica
  {
    id: 'clinica-ninos-adolescentes',
    nombre: 'Clínica de Niños y Adolescentes',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Práctica clínica orientada específicamente a la infancia y la adolescencia.',
    objetivos: ['Estudiar la técnica del juego y el dibujo.', 'Analizar las entrevistas con padres y el encuadre clínico.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 043)', titular: 'Paul Douglas Yorston', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'fisiopatologia-psicosomatica',
    nombre: 'Fisiopatología y Enfermedades Psicosomáticas',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Estudio de la relación entre los procesos psíquicos y las afecciones somáticas.',
    objetivos: ['Comprender la lógica del fenómeno psicosomático.', 'Analizar el abordaje clínico de pacientes con enfermedades orgánicas.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 081)', titular: 'Jorge Ulnik', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'neuropsicologia',
    nombre: 'Neuropsicología',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Estudio de las funciones cognitivas y sus alteraciones por daño cerebral.',
    objetivos: ['Aprender la evaluación neuropsicológica.', 'Estudiar los procesos de rehabilitación cognitiva.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 091)', titular: 'Daniel Politis', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Neurofisiología']
  },
  {
    id: 'clinica-sistemica',
    nombre: 'Teoría y Técnica de la Clínica Sistémica',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Introducción al modelo sistémico y su aplicación en terapia individual, de pareja y familia.',
    objetivos: ['Estudiar la comunicación y los sistemas humanos.', 'Aprender técnicas de intervención sistémica.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 158)', titular: 'Valeria Wittner', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'psicofarmacologia',
    nombre: 'Psicofarmacología',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Bases farmacológicas del tratamiento de los trastornos mentales.',
    objetivos: ['Comprender el mecanismo de acción de los psicofármacos.', 'Analizar la relación entre psicoterapias y farmacología.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 616)', titular: 'Silvia Leonor Herlyn', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-psicoanalitica-1',
    nombre: 'Clínica Psicoanalítica Cát. I',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Profundización en la técnica y práctica clínica desde la orientación psicoanalítica.',
    objetivos: ['Analizar la transferencia y la interpretación.', 'Estudiar las diferentes estructuras clínicas.'],
    catedras: [{ nombre: 'Cátedra I (Cód. 654)', titular: 'David Laznik', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-toxicomanias',
    nombre: 'Clínica de las Toxicomanías y el Alcoholismo',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Estudio de las adicciones desde una perspectiva clínica y social.',
    objetivos: ['Comprender la función del tóxico en la economía psíquica.', 'Analizar los dispositivos de tratamiento para adicciones.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 770)', titular: 'Fabián Naparstek', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-cognitivo-comportamental',
    nombre: 'Teoría y Técnica de la Clínica Cognitivo Comportamental',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Fundamentos y aplicaciones de la terapia cognitivo-conductual.',
    objetivos: ['Aprender protocolos de tratamiento basados en la evidencia.', 'Estudiar la reestructuración cognitiva y técnicas conductuales.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 771)', titular: 'Eduardo Keegan', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'usos-del-sintoma',
    nombre: 'Usos del Síntoma',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Análisis del concepto de síntoma en la clínica psicoanalítica contemporánea.',
    objetivos: ['Estudiar el síntoma como formación del inconsciente y como goce.', 'Analizar la dirección de la cura.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 807)', titular: 'Marcelo Mazzuca', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-discapacidad-infantil',
    nombre: 'Clínica de la Discapacidad y Problemas en el Desarrollo Infantil',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Abordaje clínico de los trastornos del desarrollo y la discapacidad en la infancia.',
    objetivos: ['Estudiar las patologías graves del desarrollo.', 'Analizar la intervención temprana y el trabajo con la familia.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 808)', titular: 'Norma Bruner', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-anorexias-bulimias',
    nombre: 'Clínica de las Anorexias, las Bulimias y la Obesidad. Abordaje Interdisciplinario.',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Estudio de los trastornos de la conducta alimentaria desde un enfoque clínico e interdisciplinario.',
    objetivos: ['Comprender la psicopatología de los trastornos alimentarios.', 'Analizar el trabajo en equipo interdisciplinario.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 815)', titular: 'Rodrigo Abínzano', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },

  // Área Trabajo
  {
    id: 'seleccion-personal',
    nombre: 'Selección e Incorporación de Personal',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Trabajo',
    cuatrimestre: 2,
    descripcion: 'Procesos de búsqueda, selección e inducción de personas en las organizaciones.',
    objetivos: ['Aprender a realizar perfiles de puesto.', 'Estudiar las técnicas de entrevista de selección y evaluación.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 662)', titular: 'María Santarsiero', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología del Trabajo']
  },

  // Área Justicia
  {
    id: 'intervenciones-forenses-familiares',
    nombre: 'Intervenciones Psicológico-Forenses en Disfunciones y Patologías Familiares',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Justicia',
    cuatrimestre: 1,
    descripcion: 'El rol del psicólogo forense en conflictos familiares y protección de derechos.',
    objetivos: ['Analizar las pericias en casos de familia.', 'Estudiar la violencia familiar y el abuso infantil desde lo jurídico.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 191)', titular: 'Matilde A. De La Iglesia', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'psico-delito-delincuente',
    nombre: 'Psicología del Delito y del Delincuente',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Justicia',
    cuatrimestre: 2,
    descripcion: 'Estudio de la conducta criminal y los perfiles delictivos.',
    objetivos: ['Analizar las teorías sobre la criminalidad.', 'Estudiar la psicología del testimonio y la investigación criminal.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 692)', titular: 'Verónica Llull Casado', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'victimologia',
    nombre: 'Victimología',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Justicia',
    cuatrimestre: 1,
    descripcion: 'Estudio de la víctima de delitos y los procesos de victimización.',
    objetivos: ['Analizar el impacto psíquico del delito en la víctima.', 'Estudiar los derechos de las víctimas y la asistencia victimológica.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 781)', titular: 'Flabia Rodríguez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'tecnicas-ambito-juridico',
    nombre: 'Técnicas Psicológicas en el Ámbito Jurídico',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Justicia',
    cuatrimestre: 2,
    descripcion: 'Aplicación de instrumentos diagnósticos y técnicas de evaluación en el contexto legal.',
    objetivos: ['Aprender la realización de informes periciales.', 'Estudiar las técnicas específicas para el ámbito forense.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 782)', titular: 'José Rodriguez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },

  // Área Social Comunitaria
  {
    id: 'psico-preventiva',
    nombre: 'Psicología Preventiva',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Teoría y práctica de la prevención en salud mental y promoción de la salud.',
    objetivos: ['Estudiar los niveles de prevención.', 'Diseñar programas de intervención preventiva.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 067)', titular: 'Ana Tisera', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos', 'Psicología Evolutiva: Adolescencia']
  },
  {
    id: 'estrategias-intervencion-comunitaria',
    nombre: 'Estrategias de Intervención Comunitaria',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Modelos y técnicas de trabajo psicológico en comunidades y organizaciones sociales.',
    objetivos: ['Aprender metodologías participativas.', 'Analizar el rol del psicólogo comunitario.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 084)', titular: 'Cora Pesiney', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos', 'Psicología Evolutiva: Adolescencia']
  },
  {
    id: 'estudios-genero',
    nombre: 'Introducción a los Estudios del Género',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Estudio de la perspectiva de género y su relevancia en la psicología y la salud.',
    objetivos: ['Analizar la construcción social del género.', 'Estudiar las desigualdades y violencias de género.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 105)', titular: 'Débora Tajer', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos', 'Psicología Evolutiva: Adolescencia']
  },
  {
    id: 'psico-deporte',
    nombre: 'Psicología Aplicada al Deporte',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Procesos psicológicos involucrados en el rendimiento deportivo y la actividad física.',
    objetivos: ['Estudiar la motivación y el estrés en el deporte.', 'Analizar el trabajo con atletas y equipos deportivos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 607)', titular: 'Raúl Barrios', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos', 'Psicología Evolutiva: Adolescencia']
  },
  {
    id: 'rol-psicologo-equipo-salud',
    nombre: 'El Rol del Psicólogo en el Equipo Interdisciplinario de Salud',
    año: 5,
    ciclo: 'Electivas Profesional',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Análisis de la inserción del psicólogo en instituciones de salud y el trabajo interdisciplinario.',
    objetivos: ['Comprender la dinámica de los equipos de salud.', 'Estudiar la ética y la práctica en el hospital público.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 816)', titular: 'Gabriela Perrotta', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Teoría y Técnica de Grupos', 'Salud Pública y Salud Mental']
  },

  // PRÁCTICAS PROFESIONALES
  // Área Clínica
  {
    id: 'clinica-urgencia',
    nombre: 'Clínica de la Urgencia',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Práctica profesional centrada en la intervención en situaciones de urgencia subjetiva.',
    objetivos: ['Analizar la demanda en la urgencia.', 'Estudiar los dispositivos de atención en crisis.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 109)', titular: 'María Inés Sotelo', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'orientacion-psicosomatica-durand',
    nombre: 'Orientación Psicosomática. Hospital Durand.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Práctica en el ámbito hospitalario sobre afecciones psicosomáticas.',
    objetivos: ['Intervenir en pacientes con afecciones orgánicas.', 'Estudiar la relación médico-paciente.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 125)', titular: 'Roberto Raúl Patrono', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-emergencia',
    nombre: 'La Clínica en la Emergencia',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Abordaje clínico en situaciones de emergencia y desastres.',
    objetivos: ['Estudiar los protocolos de intervención en emergencias.', 'Analizar el impacto subjetivo de eventos traumáticos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 126)', titular: 'Martín Trigo', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'variantes-consulta-ambulatoria',
    nombre: 'Variantes en la Consulta Ambulatoria',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre las diversas modalidades de consulta en dispositivos ambulatorios.',
    objetivos: ['Analizar el encuadre en la consulta ambulatoria.', 'Estudiar las entrevistas preliminares.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 128)', titular: 'Guido Revale', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-ninos-formaciones-sintoma',
    nombre: 'Clínica de Niños y Adolescentes: las Formaciones del Síntoma.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Práctica clínica enfocada en la infancia y adolescencia desde la perspectiva del síntoma.',
    objetivos: ['Analizar el síntoma en el niño.', 'Estudiar la transferencia en el análisis con niños.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 130)', titular: 'Mariana Martinez Liss', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'hospital-ninos-gutierrez',
    nombre: 'Hospital de Niños Dr. R. Gutiérrez',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Inserción en el equipo de salud mental de un hospital pediátrico de referencia.',
    objetivos: ['Participar en ateneos y supervisiones.', 'Realizar entrevistas clínicas en el hospital.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 135)', titular: 'Andrea Fränkel', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-adicciones-interdisciplinario',
    nombre: 'Clínica de las Adicciones: Abordaje Interdisciplinario.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Práctica en instituciones dedicadas al tratamiento de las adicciones.',
    objetivos: ['Estudiar el abordaje interdisciplinario de las toxicomanías.', 'Analizar los dispositivos de internación y ambulatorios.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 138)', titular: 'Gustavo Torres', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-puberes-adolescentes-hospital',
    nombre: 'Clínica con Púberes y Adolescentes en el Hospital',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Abordaje de la pubertad y adolescencia en el contexto de la salud pública.',
    objetivos: ['Analizar las crisis subjetivas en la adolescencia.', 'Estudiar el rol del psicólogo en el hospital.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 161)', titular: 'Marcela Reyes', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'abordaje-cuidados-paliativos',
    nombre: 'Abordaje Clínico en Cuidados Paliativos',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Acompañamiento psicológico a pacientes con enfermedades terminales y sus familias.',
    objetivos: ['Estudiar el proceso de duelo.', 'Analizar la ética en el final de la vida.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 579)', titular: 'Silvina Noemi Dulitzky', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'entrenamiento-tecnicas-cognitivas',
    nombre: 'Entrenamiento y Aplicación de Técnicas Cognitivo-Conductuales Contemporáneas',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Práctica intensiva en modelos cognitivo-conductuales de tercera generación.',
    objetivos: ['Aprender técnicas de exposición y reestructuración.', 'Estudiar la eficacia de los tratamientos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 580)', titular: 'Guido Korman', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-psicoanalitica-ninos-comunitaria',
    nombre: 'Práctica Clínica Psicoanalítica de Niños con Base Comunitaria',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Intervención clínica en contextos comunitarios y sociales.',
    objetivos: ['Articular psicoanálisis y comunidad.', 'Analizar el trabajo con poblaciones vulnerables.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 639)', titular: 'Fabiana Freidin', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'fundamentos-acompanamiento-terapeutico',
    nombre: 'Fundamentos Clínicos del Acompañamiento Terapéutico',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Teoría y técnica del acompañamiento terapéutico en diversos dispositivos.',
    objetivos: ['Definir el rol del acompañante terapéutico.', 'Analizar la inserción en el equipo interdisciplinario.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 687)', titular: 'Gustavo Rossi', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'atencion-psicologica-hospital',
    nombre: 'Atención Psicológica en un Hospital',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Práctica general de atención clínica en el sistema público de salud.',
    objetivos: ['Realizar admisiones y seguimientos.', 'Estudiar la dinámica institucional hospitalaria.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 689)', titular: 'Silvia Di Biasi', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'neuropsicologia-practica',
    nombre: 'Neuropsicología Práctica: Técnicas de Evaluación.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Aplicación de baterías neuropsicológicas y elaboración de informes.',
    objetivos: ['Dominar técnicas de evaluación cognitiva.', 'Analizar perfiles neuropsicológicos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 703)', titular: 'Sandra Vanotti', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'psicologia-perinatal',
    nombre: 'Psicología Perinatal',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Abordaje psicológico del embarazo, parto, puerperio y primer año de vida.',
    objetivos: ['Estudiar el vínculo temprano.', 'Analizar las patologías perinatales.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 721)', titular: 'Elena Teresa Galindez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'juego-limites-discapacidad',
    nombre: 'El Juego en los Límites: el Psicoanálisis y la Clínica en Problemas en el Desarrollo Infantil.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la discapacidad y trastornos graves del desarrollo en la infancia.',
    objetivos: ['Analizar la función del juego en la discapacidad.', 'Estudiar la posición del analista.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 722)', titular: 'Norma Bruner', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'problematica-clinica-ninez-adolescencia-familia',
    nombre: 'Problemática Clínica en Niñez , Adolescencia y Familia',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Abordaje integral de los conflictos familiares y su impacto en los hijos.',
    objetivos: ['Analizar la dinámica familiar.', 'Estudiar intervenciones en crisis familiares.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 726)', titular: 'María Eugenia Otero', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'practica-anorexias-bulimias',
    nombre: 'Práctica Clínica en Anorexias, Bulimias y Obesidad',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Inserción en dispositivos específicos de tratamiento de trastornos alimentarios.',
    objetivos: ['Analizar la posición subjetiva frente al alimento.', 'Estudiar el trabajo interdisciplinario.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 772)', titular: 'Osvaldo Rodríguez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'perspectiva-antropologica-clinica',
    nombre: 'Una Perspectiva Antropológica en la Clínica',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Articulación entre los conceptos de cultura, sociedad y práctica clínica.',
    objetivos: ['Analizar la diversidad cultural en la consulta.', 'Estudiar el impacto de las creencias en la salud.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 779)', titular: 'Norberto Aldo Conti', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-instituciones-publicas-complejidad',
    nombre: 'Clínica en las Instituciones Públicas. Dispositivos de Salud Mental en el Abordaje de la Complejidad',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la gestión y atención en salud mental en contextos institucionales complejos.',
    objetivos: ['Analizar las políticas de salud mental.', 'Estudiar los dispositivos de red comunitaria.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 812)', titular: 'Marcelo Ferraro', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'abordaje-patologias-acto',
    nombre: 'Abordaje de las Patologías del Acto: la Clínica en los Bordes.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Estudio de las actuaciones, pasajes al acto y conductas impulsivas.',
    objetivos: ['Diferenciar actuar-out y pasaje al acto.', 'Analizar la dirección de la cura en estos casos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 817)', titular: 'Sandra Szmuszkowiez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-trastornos-personalidad-psicosis',
    nombre: 'Clínica de los Trastornos de la Personalidad y las Psicosis',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Práctica clínica orientada a patologías graves y estructuras psicóticas.',
    objetivos: ['Estudiar el diagnóstico diferencial.', 'Analizar las intervenciones en la psicosis.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 820)', titular: 'Martín Etchevers', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'tratamiento-padecimiento-subjetivo-analitica',
    nombre: 'El Tratamiento el Padecimiento Subjetivo en la Experiencia Analítica',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Práctica sobre la dirección de la cura y los fundamentos del psicoanálisis aplicado.',
    objetivos: ['Analizar la demanda de análisis.', 'Estudiar el fin de análisis y la salida del tratamiento.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 822)', titular: 'María Luján Iuale', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'rol-psicologo-reproduccion-asistida',
    nombre: 'El Rol del Psicólogo en el Ámbito de las Tecnologías de Reproducción Humana Asistida',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Abordaje ético y psicológico de la infertilidad y las nuevas formas de parentalidad.',
    objetivos: ['Analizar el impacto de las TRHA en la subjetividad.', 'Estudiar el marco legal y ético.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 824)', titular: 'Elizabeth Ormart', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'psicologia-aeronautica-factores-humanos',
    nombre: 'Práctica Profesional en Psicología Aeronáutica y Factores Humanos',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Aplicación de la psicología en el ámbito de la aviación y la seguridad operacional.',
    objetivos: ['Estudiar el error humano.', 'Analizar el estrés y la fatiga en tripulaciones.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 851)', titular: 'Nicolás G. Machín', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'diagnostico-tratamiento-tea',
    nombre: 'Práctica Profesional en Diagnóstico y tratamiento en personas que presentan Trastorno del Espectro Autista – TEA',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Práctica especializada en la evaluación e intervención en autismo.',
    objetivos: ['Aprender instrumentos de detección temprana.', 'Estudiar modelos de intervención integral.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 857)', titular: 'Ana María D´Anna', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-sistemica-familia-pareja-entrenamiento',
    nombre: 'Clínica Sistémica: Familia y Pareja. Entrenamiento de Entrevistas de Familia y Pareja',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 1,
    descripcion: 'Entrenamiento práctico en técnicas de entrevista sistémica.',
    objetivos: ['Realizar genogramas.', 'Aprender técnicas de circularidad y reformulación.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 861)', titular: 'Valeria Wittner', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },
  {
    id: 'clinica-analitica-psicosis',
    nombre: 'Clínica Analítica de las Psicosis',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Clínica',
    cuatrimestre: 2,
    descripcion: 'Profundización en el tratamiento psicoanalítico de las psicosis.',
    objetivos: ['Analizar el desencadenamiento y la estabilización.', 'Estudiar el concepto de nudo borromeo.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 862)', titular: 'Martín Carlos Alomo', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicopatología', 'Salud Pública y Salud Mental', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo I', 'Teoría y Técnica de Exploración y Diagnóstico Psicológico. Módulo II']
  },

  // Área Educacional
  {
    id: 'orientacion-vocacional-practica',
    nombre: 'Orientación Vocacional y Ocupacional',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Educacional',
    cuatrimestre: 1,
    descripcion: 'Práctica profesional en procesos de orientación vocacional.',
    objetivos: ['Realizar procesos de orientación individual.', 'Participar en talleres grupales en escuelas.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 100)', titular: 'Gabriela Aisenson', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Salud Pública y Salud Mental']
  },
  {
    id: 'discapacidad-niñez-adolescencia-integracion',
    nombre: 'Discapacidad: Intervenciones en la Niñez y la Adolescencia. El Proceso de Integración.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Educacional',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la integración escolar de niños con discapacidad.',
    objetivos: ['Analizar el rol del psicólogo integrador.', 'Estudiar las configuraciones de apoyo.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 107)', titular: 'Andrés Febbraio', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Salud Pública y Salud Mental']
  },

  // Área Trabajo
  {
    id: 'orientacion-vocacional-trabajo',
    nombre: 'Orientación Vocacional y Ocupacional',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Trabajo',
    cuatrimestre: 1,
    descripcion: 'Práctica profesional en orientación para el mundo del trabajo.',
    objetivos: ['Analizar perfiles laborales.', 'Realizar asesoramiento ocupacional.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 100)', titular: 'Gabriela Aisenson', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Evolutiva: Adolescencia', 'Salud Pública y Salud Mental']
  },
  {
    id: 'proceso-reinsercion-laboral',
    nombre: 'Proceso de Reinserción Laboral',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Trabajo',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre el acompañamiento a personas en búsqueda de empleo.',
    objetivos: ['Diseñar talleres de búsqueda laboral.', 'Estudiar la empleabilidad.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 657)', titular: 'Arnaldo Martín Sandoval', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología del Trabajo']
  },

  // Área Justicia
  {
    id: 'instituciones-forenses',
    nombre: 'Instituciones Forenses',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Justicia',
    cuatrimestre: 1,
    descripcion: 'Inserción en juzgados, asesorías y otros organismos del poder judicial.',
    objetivos: ['Observar la práctica pericial.', 'Analizar el rol del psicólogo en la justicia.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 119)', titular: 'Gustavo M. Laursen', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Jurídica']
  },
  {
    id: 'trabajo-familias-ambito-juridico',
    nombre: 'El Trabajo con Familias en el Ámbito Jurídico',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Justicia',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre conflictos familiares judicializados.',
    objetivos: ['Analizar regímenes de comunicación.', 'Estudiar el impacto del divorcio en los hijos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 601)', titular: 'Melina Siderakis', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Jurídica']
  },
  {
    id: 'actividad-pericial-psicologia-juridica',
    nombre: 'La Actividad Pericial en Psicología Jurídica',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Justicia',
    cuatrimestre: 1,
    descripcion: 'Práctica intensiva en la realización de pericias psicológicas.',
    objetivos: ['Aprender la redacción de informes periciales.', 'Estudiar la ética del perito.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 718)', titular: 'Ma. de los Ángeles Izcurdia', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Jurídica']
  },
  {
    id: 'acogimiento-adopcion-infancias-deprivadas',
    nombre: 'Acogimiento y Adopción. Intervenciones con Infancias Deprivadas y Evaluación Parental.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Justicia',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre los procesos de adopción y protección de derechos del niño.',
    objetivos: ['Evaluar la aptitud parental.', 'Estudiar el proceso de vinculación.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 847)', titular: 'Fabiana Alejandra Isa', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental']
  },
  {
    id: 'rol-psicologo-ministerio-publico-fiscal',
    nombre: 'El Rol del Psicólogo en el Ministerio Público Fiscal',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Justicia',
    cuatrimestre: 1,
    descripcion: 'Inserción en fiscalías para la asistencia a víctimas y testigos.',
    objetivos: ['Realizar entrevistas en cámara Gesell.', 'Asesorar a fiscales en temas psicológicos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 858)', titular: 'Roxana Laura Marqués', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Psicología Jurídica']
  },

  // Área Social Comunitaria
  {
    id: 'salud-colectiva-gestion-politicas',
    nombre: 'Salud Colectiva: Gestión y Evaluación de Políticas Públicas',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Práctica sobre el diseño y evaluación de programas de salud pública.',
    objetivos: ['Analizar indicadores de salud.', 'Estudiar la planificación estratégica.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 581)', titular: 'Sara Elena Ardila Gómez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'derechos-subjetividad-intervenciones-etico-clinicas',
    nombre: 'Derechos y Subjetividad: Intervenciones Ético-Clínicas',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la ética y los derechos humanos en la clínica.',
    objetivos: ['Analizar dilemas éticos.', 'Estudiar la ley de salud mental.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 582)', titular: 'Gabriela Salomone', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'bioetica-educacion-sexual-integral',
    nombre: 'Problemas Bioéticos en Educación Sexual Integral',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Práctica sobre la implementación de la ESI desde una perspectiva ética.',
    objetivos: ['Analizar contenidos de ESI.', 'Intervenir en instituciones educativas.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 583)', titular: 'Elizabeth Beatriz Ormart', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'cine-subjetividad-intervenciones',
    nombre: 'Cine y Subjetividad. Intervenciones con Películas y Series en el Campo Clínico-Comunitario desde una Perspectiva Ética',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Uso del material audiovisual como herramienta de intervención comunitaria.',
    objetivos: ['Analizar narrativas cinematográficas.', 'Realizar talleres de cine-debate.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 584)', titular: 'Paula Belén Mastandrea', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'ambito-comunitario-familia-enfermedad-cronica',
    nombre: 'Ámbito Comunitario: Familia y Enfermedad Crónica.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Abordaje de familias con integrantes que padecen enfermedades crónicas.',
    objetivos: ['Estudiar el impacto de la cronicidad.', 'Fortalecer redes de apoyo.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 632)', titular: 'Analía Liliana Benvenuto', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'salud-mental-desinstitucionalizacion',
    nombre: 'Salud Mental y Desinstitucionalización',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre los procesos de externación y vida en comunidad.',
    objetivos: ['Analizar dispositivos intermedios.', 'Estudiar la inclusión social.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 638)', titular: 'Ana Tisera', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'rol-psicologo-interdisciplinario-comunidad',
    nombre: 'El Rol del Psicólogo en una Experiencia de Trabajo Interdisciplinario en la Comunidad',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Inserción en equipos barriales y centros de salud comunitaria.',
    objetivos: ['Realizar diagnósticos participativos.', 'Trabajar en red con otras instituciones.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 698)', titular: 'Aldo Pagliari', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'adicciones-abordaje-clinico-comunitario',
    nombre: 'Adicciones. Un abordaje Clínico - Comunitario.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la prevención y asistencia de adicciones en el territorio.',
    objetivos: ['Analizar el consumo problemático.', 'Estudiar la reducción de daños.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 707)', titular: 'Daniel Cóppola', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'psicologo-centros-atencion-primaria',
    nombre: 'El Psicólogo en Centros de Atención Primaria. Un Enfoque Preventivo y Comunitario del Trabajo en Salud.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Práctica en el primer nivel de atención de salud.',
    objetivos: ['Realizar tareas de promoción de salud.', 'Atender consultas de baja complejidad.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 786)', titular: 'Martín De Lellis', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'promocion-salud-adolescentes-instituciones-educativas',
    nombre: 'Promoción de la Salud en Adolescentes. Prácticas en Evaluación, Diagnóstico y Prevención en Instituciones Educativas.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la salud adolescente en el ámbito escolar.',
    objetivos: ['Realizar talleres de prevención.', 'Detectar situaciones de riesgo.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 788)', titular: 'Vanina Schmidt', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'violencia-modos-intervencion',
    nombre: 'Violencia. Modos de Intervención en los Dispositivos Clinicos y Socio Comunitarios.',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Abordaje de las diversas formas de violencia en la sociedad actual.',
    objetivos: ['Analizar la violencia de género y familiar.', 'Estudiar protocolos de asistencia.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 805)', titular: 'Marisa Morao', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'psicologia-deporte-actividad-fisica',
    nombre: 'Psicología del Deporte y Actividad Física',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la psicología aplicada al deporte en clubes y centros vecinales.',
    objetivos: ['Estudiar la cohesión grupal.', 'Analizar el liderazgo deportivo.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 811)', titular: 'Raul Barrios', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'rol-psicologo-promocion-salud-sexual',
    nombre: 'El Rol del Psicólogo/a en la Promoción de la Salud Sexual y la Salud Reproductiva',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Práctica sobre la salud sexual y reproductiva desde una perspectiva de derechos.',
    objetivos: ['Asesorar en métodos anticonceptivos.', 'Estudiar la interrupción voluntaria del embarazo.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 825)', titular: 'Gabriela Perrotta', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'intervenciones-psicoanaliticas-jovenes-vulnerabilidad',
    nombre: 'Intervenciones Psicoanalíticas con Jóvenes en Situación de Vulnerabilidad',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Práctica clínica con jóvenes en contextos de exclusión social.',
    objetivos: ['Analizar la subjetividad en la pobreza.', 'Estudiar el lazo social.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 826)', titular: 'Nazarena Suarez', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'abordaje-prevencion-violencias-genero',
    nombre: 'Abordaje y Prevención de Violencias basadas en el Género en Dispositivos Comunitarios y Asistenciales',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 1,
    descripcion: 'Práctica especializada en la prevención de la violencia de género.',
    objetivos: ['Diseñar campañas de sensibilización.', 'Asistir a mujeres en situación de violencia.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 842)', titular: 'Mariana C. Miracco', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'abordaje-comunitario-barrios-vulnerables',
    nombre: 'Abordaje Comunitario en Barrios Vulnerables',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Área Social Comunitaria',
    cuatrimestre: 2,
    descripcion: 'Práctica territorial en asentamientos y barrios populares.',
    objetivos: ['Fortalecer la organización comunitaria.', 'Realizar relevamientos de salud.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 852)', titular: 'Nicolás Alejandro Vizioli', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental', 'Teoría y Técnica de Grupos']
  },
  {
    id: 'neurociencias-comportamiento-metodos-psicofisiologicos',
    nombre: 'Neurociencias del Comportamiento: Aproximaciones a los Métodos Psicofisiológicos',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Investigación',
    cuatrimestre: 1,
    descripcion: 'Estudio de las bases biológicas del comportamiento mediante métodos psicofisiológicos.',
    objetivos: ['Conocer los métodos de registro psicofisiológico.', 'Analizar la relación entre procesos mentales y respuestas fisiológicas.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 585)', titular: 'R. Muzio', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental']
  },
  {
    id: 'evaluacion-psicologica-contexto',
    nombre: 'Evaluación Psicológica en Contexto',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Investigación',
    cuatrimestre: 2,
    descripcion: 'Práctica sobre la evaluación psicológica aplicada en diversos contextos sociales y clínicos.',
    objetivos: ['Aplicar técnicas de evaluación en contextos reales.', 'Analizar la validez y confiabilidad de los instrumentos.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 819)', titular: 'I. M. Mikulic', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental']
  },
  {
    id: 'investigacion-psicologia-envejecimiento',
    nombre: 'Práctica de Investigación en Psicología del Envejecimiento',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Investigación',
    cuatrimestre: 1,
    descripcion: 'Investigación sobre los procesos psicológicos y sociales en la vejez.',
    objetivos: ['Estudiar el envejecimiento desde una perspectiva integral.', 'Realizar investigaciones sobre la calidad de vida en adultos mayores.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 845)', titular: 'R. Iacub', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental']
  },
  {
    id: 'bioetica-instituciones-salud',
    nombre: 'Bioética en Instituciones de Salud',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Investigación',
    cuatrimestre: 2,
    descripcion: 'Análisis de los dilemas éticos en la práctica de la salud y la investigación.',
    objetivos: ['Comprender los principios de la bioética.', 'Analizar casos clínicos y de investigación desde una perspectiva ética.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 849)', titular: 'N. S. Lima', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental']
  },
  {
    id: 'investigacion-clinica-prevencion-primera-infancia',
    nombre: 'Investigación Clínica y Prevención en los Tiempos de la Primera Infancia',
    año: 6,
    ciclo: 'Prácticas',
    area: 'Investigación',
    cuatrimestre: 1,
    descripcion: 'Investigación sobre el desarrollo temprano y estrategias de prevención en la infancia.',
    objetivos: ['Estudiar los procesos de constitución subjetiva temprana.', 'Investigar sobre intervenciones preventivas en la primera infancia.'],
    catedras: [{ nombre: 'Cátedra Única (Cód. 856)', titular: 'C. A. Duhalde', link: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental']
  }
];
