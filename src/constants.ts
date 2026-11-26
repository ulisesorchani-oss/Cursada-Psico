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
  unidad?: string;
}

export interface Catedra {
  nombre: string;
  titular: string;
  bibliografia: BibliografiaItem[];
  link?: string;
  enfoque?: string;
  evaluacion?: string;
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
    descripcion:
      'Estudio científico de las funciones psicológicas fundamentales —conciencia, atención, percepción, memoria, pensamiento, lenguaje, emoción, motivación y aprendizaje— abordadas desde la Psicología Cognitiva contemporánea y la Teoría Histórico-Cultural según la cátedra elegida.',
    objetivos: [
      'Comprender los principales marcos teóricos y metodológicos en el estudio de los procesos psicológicos básicos y superiores.',
      'Analizar el funcionamiento e interrelación de la percepción, atención, memoria, lenguaje, pensamiento, emociones, motivación y aprendizaje.',
      'Conocer diseños empíricos, desarrollos actuales e implicancias prácticas de la investigación en procesos psicológicos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 544)',
        titular: 'Federico Faustino González',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=544&anio=2026&cuatrimestre=2',
        enfoque:
          'Psicología Cognitiva contemporánea, ciencia de la conciencia, psicología prospectiva, ciencia de datos/IA y dimensión fenomenológica de la experiencia en 10 unidades.',
        evaluacion:
          '4 hs teóricas + 2 hs prácticos (talleres de micro-investigación) + TP optativo de investigación. 2 parciales multiple choice + síntesis numérica de TP. Promoción sin final con ≥ 7 y 75% asistencia.',
        bibliografia: [
          // Unidad 1
          {
            unidad: 'Unidad 1 · La psicología como ciencia y los PPB',
            autor: 'González, F.',
            titulo: '¿Qué es y hacia dónde va la psicología?',
            editorial: 'Facultad de Psicología, UBA',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · La psicología como ciencia y los PPB',
            autor: 'González, F.',
            titulo: 'Los procesos psicológicos básicos: revisión crítica y ampliada',
            editorial: 'Facultad de Psicología, UBA',
            año: '2025',
            tipo: 'Obligatoria'
          },
          // Unidad 2
          {
            unidad: 'Unidad 2 · Mente y conciencia',
            autor: 'Blackmore, S.',
            titulo: 'Conversaciones sobre la conciencia (pp. 291–316)',
            editorial: 'Paidós',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Mente y conciencia',
            autor: 'Chalmers, D. J. y Álvarez, J. A.',
            titulo: 'La mente consciente: en busca de una teoría fundamental (Cap. 1)',
            editorial: 'Gedisa',
            año: '1996',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Mente y conciencia',
            autor: 'Edelman, G. M. y Tononi, G.',
            titulo: 'El universo de la conciencia: cómo la materia se convierte en imaginación (Caps. 1–3)',
            editorial: 'Planeta',
            año: '2002',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Mente y conciencia',
            autor: 'González, F.',
            titulo: 'La elusiva ciencia de la consciencia',
            editorial: 'Facultad de Psicología, UBA',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Mente y conciencia',
            autor: 'González, F.',
            titulo: 'Diez versiones sobre la mente',
            editorial: 'Facultad de Psicología, UBA',
            año: '2025',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Mente y conciencia',
            autor: 'Jaynes, J.',
            titulo: 'El origen de la consciencia está en la ruptura de la mente bicameral',
            editorial: 'Publicación de cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Mente y conciencia',
            autor: 'Searle, J. R.',
            titulo: 'El redescubrimiento de la mente (Caps. 6 y 7)',
            editorial: 'Crítica',
            año: '1996',
            tipo: 'Obligatoria'
          },
          // Unidad 3
          {
            unidad: 'Unidad 3 · Atención, sensación y percepción',
            autor: 'García Sevilla, F.',
            titulo: 'Psicología de la atención',
            editorial: 'Síntesis',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · Atención, sensación y percepción',
            autor: 'Gerrig, R. y Zimbardo, P. G.',
            titulo: 'Psicología y vida (Cap. 4: Sensación y percepción)',
            editorial: 'Pearson Educación',
            año: '2005',
            tipo: 'Obligatoria'
          },
          // Unidad 4
          {
            unidad: 'Unidad 4 · Memoria y aprendizaje',
            autor: 'Azzollini, S. y González, F.',
            titulo: 'Ensayos sobre el tiempo subjetivo',
            editorial: 'Editorial Académica Española',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Memoria y aprendizaje',
            autor: 'González, F.',
            titulo: 'Psicología de la memoria humana: una panorámica general',
            editorial: 'Facultad de Psicología, UBA',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Memoria y aprendizaje',
            autor: 'González, F.',
            titulo: 'El fenómeno de la memoria inmanente consciente (MIC)',
            editorial: 'Facultad de Psicología, UBA',
            año: '2013',
            tipo: 'Obligatoria'
          },
          // Unidad 5
          {
            unidad: 'Unidad 5 · Pensamiento y creatividad',
            autor: 'González, F.',
            titulo: 'El pensamiento en la vida mental y la ciencia del pensamiento',
            editorial: 'Facultad de Psicología, UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 5 · Pensamiento y creatividad',
            autor: 'González, G.',
            titulo: 'Temas de Psicología Cognitiva III: Pensamiento',
            editorial: 'Tekné',
            año: '1987',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 5 · Pensamiento y creatividad',
            autor: 'Romo, M.',
            titulo: 'Psicología de la creatividad: Perspectivas contemporáneas',
            editorial: 'Paidós',
            año: '2019',
            tipo: 'Obligatoria'
          },
          // Unidad 6
          {
            unidad: 'Unidad 6 · Emociones y sentimientos',
            autor: 'Elices, M.',
            titulo: 'Emoción y cognición (en Manual de introducción a la Psicología Cognitiva)',
            editorial: 'UCUR',
            año: '2016',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 6 · Emociones y sentimientos',
            autor: 'Feldman Barrett, L.',
            titulo: 'La vida secreta del cerebro: cómo se construyen las emociones (Caps. 1–3)',
            editorial: 'Paidós',
            año: '2017',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 6 · Emociones y sentimientos',
            autor: 'Goleman, D. y Cherniss, C.',
            titulo: 'Óptimo: Cómo alcanzar la excelencia personal y laboral todos los días',
            editorial: 'Kairós',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 6 · Emociones y sentimientos',
            autor: 'LeDoux, J.',
            titulo: 'El cerebro emocional (Caps. 3, 5 y 7)',
            editorial: 'Ariel-Planeta',
            año: '1999',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 6 · Emociones y sentimientos',
            autor: 'Marina, J. A.',
            titulo: 'El laberinto sentimental',
            editorial: 'Anagrama',
            año: '1996',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 6 · Emociones y sentimientos',
            autor: 'Rodríguez Moneo, M., Huertas, J. A. y López Frutos, J. M.',
            titulo: 'Investigación y práctica en motivación y emoción',
            editorial: 'Antonio Machado',
            año: '2005',
            tipo: 'Obligatoria'
          },
          // Unidad 7
          {
            unidad: 'Unidad 7 · Motivación y proyecto',
            autor: 'Huertas, J. A.',
            titulo: 'Motivación. Querer aprender (Cap. 2)',
            editorial: 'Aique',
            año: '1997',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 7 · Motivación y proyecto',
            autor: 'Marina, J. A.',
            titulo: 'Los secretos de la motivación',
            editorial: 'Ariel',
            año: '2011',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 7 · Motivación y proyecto',
            autor: 'Reeve, J.',
            titulo: 'Motivación y emoción (Caps. 2, 5, 7 y 8)',
            editorial: 'McGraw-Hill',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 7 · Motivación y proyecto',
            autor: 'Rodríguez Moneo, M., Huertas, J. A. y López Frutos, J. M.',
            titulo: 'Investigación y práctica en motivación y emoción',
            editorial: 'Antonio Machado',
            año: '2005',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 7 · Motivación y proyecto',
            autor: 'Ryan, R. M. y Deci, E. L.',
            titulo: 'La teoría de la autodeterminación y la facilitación de la motivación intrínseca, el desarrollo social y el bienestar',
            editorial: 'American Psychologist',
            año: '2000',
            tipo: 'Obligatoria'
          },
          // Unidad 8
          {
            unidad: 'Unidad 8 · Lenguaje',
            autor: 'León, J. A.',
            titulo: 'Conocimiento y discurso (Cap. 1)',
            editorial: 'Pirámide',
            año: '2003',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 8 · Lenguaje',
            autor: 'Molinari Marotto, C.',
            titulo: 'Introducción a los modelos cognitivos de la comprensión del lenguaje (Caps. I–V y VII)',
            editorial: 'Eudeba',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 8 · Lenguaje',
            autor: 'Molinari Marotto, C.',
            titulo: 'Noam Chomsky: Lingüística y psicología',
            editorial: 'Facultad de Psicología, UBA',
            año: '2006',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 8 · Lenguaje',
            autor: 'Morillo Montoya, R., Arteaga Díaz, I. y Berbesi, L.',
            titulo: 'Metaconceptos: Enfoque de la psicolingüística',
            editorial: 'Publicación académica',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 8 · Lenguaje',
            autor: 'Sigman, M.',
            titulo: 'El poder de las palabras',
            editorial: 'Debate',
            año: '2022',
            tipo: 'Obligatoria'
          },
          // Unidad 9
          {
            unidad: 'Unidad 9 · Teoría de la mente',
            autor: 'González, F.',
            titulo: 'El ABC de la teoría de la mente',
            editorial: 'Facultad de Psicología, UBA',
            año: '2025',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 9 · Teoría de la mente',
            autor: 'Ortiz, D., Botero, M. y Tobón, O.',
            titulo: 'Teoría de la mente: una revisión acerca del desarrollo del concepto',
            editorial: 'Revista Colombiana de Ciencias Sociales',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 9 · Teoría de la mente',
            autor: 'Rivière, A. y Núñez, M.',
            titulo: 'La mirada mental (Cap. 1)',
            editorial: 'Aique',
            año: '1996',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 9 · Teoría de la mente',
            autor: 'Wellman, H.',
            titulo: 'La construcción de la mente: cómo surge la teoría de la mente',
            editorial: 'Ediciones UC',
            año: '2017',
            tipo: 'Obligatoria'
          },
          // Unidad 10
          {
            unidad: 'Unidad 10 · Integración de la vida mental',
            autor: 'Azzollini, S. y González, F.',
            titulo: 'Ensayos sobre el tiempo subjetivo',
            editorial: 'Editorial Académica Española',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 10 · Integración de la vida mental',
            autor: 'González, F.',
            titulo: 'La elusiva ciencia de la consciencia (sección integración y agencia mental)',
            editorial: 'Facultad de Psicología, UBA',
            año: '2025',
            tipo: 'Obligatoria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 545)',
        titular: 'Félix Ricardo Bur',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=545&anio=2026&cuatrimestre=2',
        enfoque:
          'Integración de la Teoría Histórico-Cultural (Vygotski, Engeström, Bruner) y la Psicología Cognitiva (procesamiento de la información y cognición corporizada) en 7 módulos temáticos.',
        evaluacion:
          '4 hs teóricas + 2 hs prácticos colaborativos (TPI grupal con experiencia inmersiva 360° sobre Borges). 2 parciales escritos individuales a desarrollar. Promoción sin final con ≥ 7 en ambos parciales y TP + 75% asistencia.',
        bibliografia: [
          // Módulo I
          {
            unidad: 'Módulo I · Marcos conceptuales y metodológicos',
            autor: 'Blanck, G.',
            titulo: 'Vygotsky, el hombre y su causa',
            editorial: 'Aique',
            año: '1995',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo I · Marcos conceptuales y metodológicos',
            autor: 'Jacob, P.',
            titulo: 'Evaluando la cognición corporizada radical',
            editorial: 'Traducción de cátedra',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo I · Marcos conceptuales y metodológicos',
            autor: 'Larripa, M. y Mayol, J.',
            titulo: 'Una introducción al estudio de la actividad mental desde dos perspectivas: la Histórico Cultural y la Cognitiva',
            editorial: 'Documento de cátedra',
            año: '2022',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo I · Marcos conceptuales y metodológicos',
            autor: 'Vygotski, L.',
            titulo: 'Génesis de las funciones psíquicas superiores (pp. 146–152)',
            editorial: 'Visor',
            año: '1995',
            tipo: 'Obligatoria'
          },
          // Módulo II
          {
            unidad: 'Módulo II · Percepción',
            autor: 'García-Albea, J.',
            titulo: 'Algunas notas introductorias al estudio de la percepción',
            editorial: 'Alianza',
            año: '1999',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo II · Percepción',
            autor: 'Repetto, G.',
            titulo: 'Psicología Cognitiva del procesamiento de la información: aportes al estudio de la percepción',
            editorial: 'Documento de cátedra',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo II · Percepción',
            autor: 'Sacks, O.',
            titulo: 'Ver y no ver (en Un antropólogo en Marte)',
            editorial: 'Anagrama',
            año: '1995',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo II · Percepción',
            autor: 'Vygotski, L.',
            titulo: 'Psicología Infantil. La infancia temprana (Obras escogidas, T. IV, pp. 341–366)',
            editorial: 'Antonio Machado',
            año: '1996',
            tipo: 'Obligatoria'
          },
          // Módulo III
          {
            unidad: 'Módulo III · Memoria, recuerdo y olvido',
            autor: 'Baddeley, A.',
            titulo: 'Introducción y visión general (en Memoria de trabajo, pensamiento y acción)',
            editorial: 'Antonio Machado',
            año: '2007',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo III · Memoria, recuerdo y olvido',
            autor: 'Blanco, A.',
            titulo: 'Los afluentes del recuerdo: la memoria colectiva',
            editorial: 'Trotta',
            año: '1997',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo III · Memoria, recuerdo y olvido',
            autor: 'Ruiz Vargas, J. M.',
            titulo: 'Claves de la memoria autobiográfica (pp. 183–220)',
            editorial: 'Visor',
            año: '2004',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo III · Memoria, recuerdo y olvido',
            autor: 'Vygotski, L.',
            titulo: 'El desarrollo de las funciones mnemónicas y mnemotécnicas (Obras escogidas, T. III)',
            editorial: 'Visor',
            año: '1995',
            tipo: 'Obligatoria'
          },
          // Módulo IV
          {
            unidad: 'Módulo IV · Comunicación, habla y pensamiento',
            autor: 'Bruner, J.',
            titulo: 'Actos de Significado (Cap. 2)',
            editorial: 'Alianza',
            año: '1991',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo IV · Comunicación, habla y pensamiento',
            autor: 'Karmiloff, K. y Karmiloff-Smith, A.',
            titulo: 'La transformación en ser gramatical (Cap. 5) y Enfoques sociopragmáticos (en Hacia el lenguaje)',
            editorial: 'Morata',
            año: '2005',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo IV · Comunicación, habla y pensamiento',
            autor: 'Mayol, J.',
            titulo: 'Hablar y pensar: la dialéctica del lenguaje y del pensamiento en Vigotski',
            editorial: 'Documento de cátedra',
            año: '2025',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo IV · Comunicación, habla y pensamiento',
            autor: 'Vygotski, L.',
            titulo: 'Pensamiento y Palabra (en Pensamiento y Lenguaje)',
            editorial: 'Paidós',
            año: '1934/1995',
            tipo: 'Obligatoria'
          },
          // Módulo V
          {
            unidad: 'Módulo V · Pensamiento, conceptos y razonamiento',
            autor: 'Bur, R. y Larripa, M.',
            titulo: 'Pensamiento y conceptos: perspectivas cognitivas',
            editorial: 'Educando',
            año: '2022',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo V · Pensamiento, conceptos y razonamiento',
            autor: 'Bur, R. y Martínez Frontera, L.',
            titulo: 'Psicología del razonamiento',
            editorial: 'Documento de cátedra',
            año: '2022',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo V · Pensamiento, conceptos y razonamiento',
            autor: 'Pabago, G.',
            titulo: 'El desarrollo de los conceptos. Aportes de las investigaciones de Lev Vigotsky',
            editorial: 'Documento de cátedra',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo V · Pensamiento, conceptos y razonamiento',
            autor: 'Stasiejko, H.',
            titulo: 'El desarrollo de los conceptos científicos',
            editorial: 'Documento de cátedra',
            año: '2022',
            tipo: 'Obligatoria'
          },
          // Módulo VI
          {
            unidad: 'Módulo VI · Emociones, sentimientos y motivación',
            autor: 'Damasio, A.',
            titulo: 'En busca de Spinoza: neurobiología de la emoción y los sentimientos (Caps. 2 y 3)',
            editorial: 'Crítica',
            año: '2005',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo VI · Emociones, sentimientos y motivación',
            autor: 'Huertas, J.',
            titulo: '¿Qué es esa cosa llamada motivación? (Cap. 2)',
            editorial: 'Aique',
            año: '1997',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo VI · Emociones, sentimientos y motivación',
            autor: 'Vygotski, L. S.',
            titulo: 'El arte y la vida (en Psicología del Arte)',
            editorial: 'Paidós',
            año: '1925/2006',
            tipo: 'Obligatoria'
          },
          // Módulo VII
          {
            unidad: 'Módulo VII · Cambio y aprendizaje',
            autor: 'Engeström, Y. y Sannino, A.',
            titulo: '¿Qué ha sucedido con las teorías del aprendizaje del procesamiento?',
            editorial: 'Traducción de cátedra',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo VII · Cambio y aprendizaje',
            autor: 'Mayol, J.',
            titulo: 'La imitación como vía fundamental del desarrollo cultural en Vigotski',
            editorial: 'Educando',
            año: '2017',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Módulo VII · Cambio y aprendizaje',
            autor: 'Vygotski, L.',
            titulo: 'El problema de la edad (pp. 265–273)',
            editorial: 'Visor',
            año: '1996',
            tipo: 'Obligatoria'
          }
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
    descripcion:
      'Asignatura del primer año del Ciclo de Formación General (ex Psicología y Epistemología Genética) centrada en los procesos de aprendizaje humano y su relación con el desarrollo, la cultura, la cognición, la tecnología y las trayectorias diversas e inclusivas.',
    objetivos: [
      'Analizar críticamente las principales teorías del aprendizaje humano (constructivismo piagetiano, psicología sociohistórica, enfoques cognitivos y socio-contextualistas).',
      'Comprender la interacción entre sujeto, objeto de conocimiento, cultura y mediaciones tecnológicas en distintos dominios específicos.',
      'Identificar trayectorias diversas de desarrollo y diseñar criterios de intervención psicoeducativa e inclusión.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 546)',
        titular: 'Alicia Viviana Barreiro',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=546&anio=2026&cuatrimestre=2',
        enfoque:
          'Programa 2026 desde una perspectiva triádica y relacional (sujeto–objeto–otro/cultura) que integra la Psicología Genética (Piaget, Ferreiro, Castorina) y la Psicología Sociohistórica (Vygotsky, Baquero, Rivière) con foco en la especificidad de dominios y trayectorias diversas. Trabaja en profundidad el aprendizaje del sistema de escritura (debate constructivismo vs. conciencia fonológica), el desarrollo del juicio moral y emociones (Piaget, Turiel vs. intuicionismo social de Haidt), la intersubjetividad temprana y desarrollos diversos (ceguera, sordera, TEA, síndrome de Down) e intervención psicoeducativa inclusiva.',
        evaluacion:
          'Clases teóricas expositivo-dialogadas + Comisiones de Trabajos Prácticos (análisis de textos y protocolos de entrevistas clínicas). Evaluación: 1) Dos exámenes parciales presenciales, escritos e individuales; 2) Trabajo práctico domiciliario en parejas consistente en administrar, transcribir y analizar una entrevista guiada según el método clínico piagetiano (requisito obligatorio para regularizar). Promoción sin examen final con TP aprobado, 7 o más en cada parcial y 75% de asistencia (con 4 a 6 + TP aprobado se rinde final oral).',
        bibliografia: [
          {
            autor: 'Baquero, R.',
            titulo: 'Las controvertidas relaciones entre aprendizaje y desarrollo (en R. Baquero y M. Limón, Eds., Introducción a la psicología del aprendizaje escolar, pp. 55–84)',
            editorial: 'Universidad Nacional de Quilmes',
            año: '2001',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Las relaciones entre desarrollo, aprendizaje y educación'
          },
          {
            autor: 'Carretero, M., Castorina, J. A. y Barreiro, A.',
            titulo: 'Introducción (en Desarrollo cognitivo y Educación II, pp. 15–21)',
            editorial: 'Paidós',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Las relaciones entre desarrollo, aprendizaje y educación'
          },
          {
            autor: 'Castorina, J. A.',
            titulo: 'El impacto de la Filosofía de la escisión en la Psicología del Desarrollo (en Cultura y conocimientos sociales, pp. 22–43)',
            editorial: 'Aique',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Las relaciones entre desarrollo, aprendizaje y educación'
          },
          {
            autor: 'Lenzi, A., Borzi, S. y Tau, R.',
            titulo: 'El concepto de desarrollo en Psicología: entre la evolución y la emergencia',
            editorial: 'Fundamentos en Humanidades, 11(22), 139–163',
            año: '2010',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Las relaciones entre desarrollo, aprendizaje y educación'
          },
          {
            autor: 'Martí, E.',
            titulo: 'Desarrollo, cultura y educación (pp. 13–22 y 171–181)',
            editorial: 'Amorrortu',
            año: '2005',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Las relaciones entre desarrollo, aprendizaje y educación'
          },
          {
            autor: 'Pozo, J. I.',
            titulo: 'Psicología del Aprendizaje Humano. Adquisición de conocimiento y cambio personal (pp. 21–74)',
            editorial: 'Morata',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Las relaciones entre desarrollo, aprendizaje y educación'
          },
          {
            autor: 'Valsiner, J.',
            titulo: 'La dialéctica en el estudio del desarrollo (en J. A. Castorina y M. Carretero, Eds., Desarrollo Cognitivo y Educación I, pp. 137–164)',
            editorial: 'Paidós',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Las relaciones entre desarrollo, aprendizaje y educación'
          },
          {
            autor: 'Castorina, J. A. y Barreiro, A.',
            titulo: 'Contribuciones de la psicología constructivista a la comprensión del aprendizaje escolar (pp. 197–210)',
            editorial: 'UNE Enrique Guzmán y Valle',
            año: '2015',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Castorina, J. A., Fernández, S. y Lenzi, A.',
            titulo: 'La Psicología Genética y los procesos de aprendizaje (en Psicología Genética, pp. 15–42)',
            editorial: 'Miño y Dávila',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Ferreiro, E.',
            titulo: 'Vigencia de Jean Piaget (pp. 93–130)',
            editorial: 'Siglo XXI',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Coll, C.',
            titulo: 'La construcción de los esquemas de conocimiento en el proceso de enseñanza-aprendizaje (en Psicología Genética y aprendizajes escolares, pp. 183–202)',
            editorial: 'Siglo XXI',
            año: '1985',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Carretero, M.',
            titulo: 'El desarrollo del razonamiento y el pensamiento formal (en Psicología del pensamiento, pp. 37–56)',
            editorial: 'Alianza',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'García, R.',
            titulo: 'El conocimiento en construcción. De las formulaciones de Jean Piaget a la teoría de los sistemas complejos (Cap. 2)',
            editorial: 'Gedisa',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Biología y Conocimiento (Cap. 1)',
            editorial: 'Siglo XXI',
            año: '1967/1983',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'El nacimiento de la inteligencia en el niño (Introducción)',
            editorial: 'Grijalbo',
            año: '1936/1994',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Apprentissage et Connaissance (pp. 21–41, trad. de cátedra)',
            editorial: 'Presses Universitaires de France',
            año: '1959',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Psicología y Epistemología (Cap. 1)',
            editorial: 'Emecé',
            año: '1971',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Piaget, J. y García, R.',
            titulo: 'Psicogénesis e historia de la ciencia (Cap. IX)',
            editorial: 'Siglo XXI',
            año: '1982',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Terigi, F.',
            titulo: 'La demarcación de las relaciones entre Psicología Genética y Educación (en Celebrando a Tono Castorina II, pp. 139–154)',
            editorial: 'Tilde Editora',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Wolman, S.',
            titulo: 'Características de los esquemas de acción y su significado en la teoría psicogenética',
            editorial: 'Ficha de cátedra, Fac. de Psicología UBA',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Los procesos de aprendizaje desde la Psicología Genética'
          },
          {
            autor: 'Baquero, R.',
            titulo: 'Vigotsky y el aprendizaje escolar (Caps. 5 y 6)',
            editorial: 'Aique',
            año: '1996',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Baquero, R.',
            titulo: 'Analizando unidades de análisis. Los enfoques socio-culturales y el abordaje del desarrollo y el aprendizaje (pp. 67–80)',
            editorial: 'Novedades Educativas',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Baquero, R.',
            titulo: 'Vigotsky: sujeto y situación, claves del programa psicológico (en Desarrollo cognitivo y educación I, pp. 61–86)',
            editorial: 'Paidós',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Castorina, J. A. y Dubrovsky, S.',
            titulo: 'La enseñanza y la teoría psicológica socio-histórica. Algunos problemas conceptuales (pp. 81–104)',
            editorial: 'Novedades Educativas',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Hedegaard, M.',
            titulo: 'La zona de desarrollo próximo como base para la enseñanza (en L. Moll, Ed., Vigotsky y la Educación, pp. 403–426)',
            editorial: 'Aique',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Ramos de Vasconcellos, V. M. y da Costa Guimaraes Santana, C.',
            titulo: 'Lev Vygotsky. Su vida y su obra: un psicólogo en la educación (pp. 81–104)',
            editorial: 'Novedades Educativas',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Rodríguez Arocho, W.',
            titulo: 'El lugar del concepto de perezhivanie en desarrollos contemporáneos del enfoque histórico cultural (pp. 49–84)',
            editorial: 'Novedades Educativas',
            año: '2023',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Vigotsky, L. S. y Luria, A.',
            titulo: 'Análisis de las operaciones con signos en el niño (en El instrumento y el signo en el desarrollo del niño, pp. 55–70)',
            editorial: 'Fundación Infancia y Aprendizaje',
            año: '1930/2007',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Vigotsky, L. S.',
            titulo: 'El desarrollo de los procesos psicológicos superiores (Caps. 3 y 4, pp. 67–94)',
            editorial: 'Crítica',
            año: '1933/2000',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Wertsch, J.',
            titulo: 'Vigotsky y la formación social de la mente (Caps. 2 y 3)',
            editorial: 'Paidós',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Los procesos de aprendizaje desde la Psicología Sociohistórica'
          },
          {
            autor: 'Chimenti, A. y Abusamra, V.',
            titulo: 'De aprender a leer a leer para aprender (en La ciencia de la lectura, pp. 35–66)',
            editorial: 'Tilde',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Defior, S.',
            titulo: 'La conciencia fonológica y la adquisición de la lectoescritura',
            editorial: 'Infancia y Aprendizaje, 67, 91–113',
            año: '1994',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Ferreiro, E.',
            titulo: 'El proceso de alfabetización. La alfabetización en proceso (Cap. 1)',
            editorial: 'Centro Editor de América Latina',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Ferreiro, E.',
            titulo: 'El desarrollo de la alfabetización. Psicogénesis (en Y. Goodman, Comp., Los niños construyen su lecto-escritura, pp. 21–35)',
            editorial: 'Aique',
            año: '1990',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Ferreiro, E.',
            titulo: 'La construcción de la escritura en el niño',
            editorial: 'Lectura y Vida, 12(3), 5–14',
            año: '1991',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Ferreiro, E.',
            titulo: 'La adquisición de los objetos culturales: el caso particular de la lengua escrita',
            editorial: 'Perspectivas, 26(1), 139–148',
            año: '1996',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Ferreiro, E.',
            titulo: 'Acerca de la necesaria coordinación entre semejanzas y diferencias (en Piaget-Vigotsky: contribuciones para replantear el debate, pp. 119–139)',
            editorial: 'Paidós',
            año: '1996',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Kaufman, A. M.',
            titulo: 'La lecto-escritura y la escuela (Cap. 2)',
            editorial: 'Santillana',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Kaufman, A. M. y Gallo, A.',
            titulo: 'Lectura y escritura. 31 preguntas y respuestas',
            editorial: 'Ateneo Aula',
            año: '2023',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Placente, T.',
            titulo: 'Entre la oralidad y la escritura: alfabetización temprana y contexto alfabetizador (en La ciencia de la lectura, pp. 13–34)',
            editorial: 'Tilde',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Vernon, S. y Ferreiro, E.',
            titulo: 'Desarrollo de la escritura y conciencia fonológica: una variable ignorada en la investigación sobre conciencia fonológica (pp. 131–148)',
            editorial: 'Siglo XXI',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Wolman, S. y Casamajor, A.',
            titulo: 'Psicogénesis de la escritura: mecanismos explicativos',
            editorial: 'Ficha de cátedra, Fac. de Psicología UBA',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Aprendizaje de conocimientos específicos: El sistema de escritura'
          },
          {
            autor: 'Barreiro, A.',
            titulo: 'Introducción: la construcción del conocimiento social y moral (en Representaciones sociales, prejuicio y relaciones con los otros, pp. 11–30)',
            editorial: 'UNIPE',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Barreiro, A.',
            titulo: 'El desarrollo del juicio moral (en M. Carretero y J. A. Castorina, Eds., Desarrollo cognitivo y Educación II)',
            editorial: 'Paidós',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Barreiro, A. y Castorina, J. A.',
            titulo: 'Extendiendo la conversación sobre los juicios morales: intuicionismo social, constructivismo y psicología cultural',
            editorial: 'Revista de Humanidades de Valparaíso, 19, 181–202',
            año: '2022',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Castorina, J. A. y Barreiro, A.',
            titulo: 'La contribución de la teoría de las representaciones sociales al estudio del desarrollo moral (pp. 111–136)',
            editorial: 'Miño y Dávila',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Gopnik, A.',
            titulo: 'El filósofo entre pañales (Cap. 8)',
            editorial: 'Planeta',
            año: '2010',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Haidt, J.',
            titulo: 'La mente de los justos (Parte I)',
            editorial: 'Deusto',
            año: '2019',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'El criterio moral en el niño (Cap. 1)',
            editorial: 'Fontanella',
            año: '1932/1971',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Turiel, E.',
            titulo: 'El desarrollo del conocimiento social. Moralidad y convención (Caps. 1–4)',
            editorial: 'Debate',
            año: '1984',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'Wainryb, C.',
            titulo: 'Conversaciones entre madres e hijos, y su contribución a la socialización moral (en A. Barreiro, Ed.)',
            editorial: 'UNIPE',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Juicio moral, respeto por las normas y emociones'
          },
          {
            autor: 'García Madruga, J. A. y Delval, J.',
            titulo: 'El conocimiento inicial del mundo físico: la percepción y la inteligencia (en Psicología del desarrollo I, pp. 75–112)',
            editorial: 'UNED',
            año: '2010',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Marchesi, Á.',
            titulo: 'Desarrollo y educación de los niños sordos (en Desarrollo psicológico y educación, Vol. III)',
            editorial: 'Alianza',
            año: '2001',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Ochaíta, E. y Espinoza, Á.',
            titulo: 'Desarrollo e intervención educativa en los niños ciegos y deficientes visuales (en Desarrollo psicológico y educación, Vol. III)',
            editorial: 'Alianza',
            año: '2001',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Palomo, R.',
            titulo: 'Los alumnos con Trastorno del espectro del autismo (en Desarrollo psicológico y educación, Vol. III, pp. 445–487)',
            editorial: 'Alianza',
            año: '2017',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Rivière, Á.',
            titulo: 'Interacción precoz. Una perspectiva vygotskiana a partir de los esquemas de Piaget (Obras escogidas, Vol. II, pp. 109–142)',
            editorial: 'Panamericana',
            año: '1986/2003',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Rivière, Á. y Sotillo, M.',
            titulo: 'Comunicación, suspensión y semiosis humana: orígenes de la práctica y comprensión interpersonal (Obras escogidas, Vol. III, pp. 181–201)',
            editorial: 'Panamericana',
            año: '1999/2003',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Valdez, D.',
            titulo: 'Desarrollo comunicativo (en J. A. Castorina y M. Carretero, Eds., Desarrollo cognitivo y educación I, pp. 195–217)',
            editorial: 'Paidós',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Verdugo, G. V.',
            titulo: 'Discapacidad Intelectual (en L. Ezpeleta y J. Toro, Coords., Psicopatología del desarrollo)',
            editorial: 'Ediciones Pirámide',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Vínculo intersubjetivo temprano, comunicación, semiosis y desarrollos diversos'
          },
          {
            autor: 'Canal, R. et al.',
            titulo: 'El autismo. Una perspectiva neuroevolutiva del desarrollo temprano (pp. 95–120)',
            editorial: 'Pirámide',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Happé, F.',
            titulo: 'Introducción al autismo (Cap. 1)',
            editorial: 'Alianza Editorial',
            año: '1994',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Hulme, Ch. y Mackenzie, S.',
            titulo: 'Dificultades graves en el aprendizaje (Caps. 2–5)',
            editorial: 'Ariel',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Inhelder, B.',
            titulo: 'El diagnóstico del razonamiento en los débiles mentales (Cap. 5)',
            editorial: 'Nova Terra',
            año: '1948/1971',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Martínez, M.',
            titulo: 'Intervención Psicoeducativa para niños con trastornos del espectro autista. Descripción, alcances y límites (Caps. 1–4)',
            editorial: 'Miño y Dávila',
            año: '2017',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Martínez, M.',
            titulo: 'Elaboración de objetivos psicoeducativos para niños menores de 36 meses. Intervención temprana en TEA (pp. 79–125)',
            editorial: 'Paidós',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Rosa, A., Huertas, J. A. y Blanco, F.',
            titulo: 'Psicología de la ceguera y psicología general (pp. 319–381)',
            editorial: 'Alianza',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Toro, J. y Ezpeleta, L.',
            titulo: 'La psicopatología del desarrollo (pp. 33–52)',
            editorial: 'Pirámide',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Desarrollos diversos, procesos de aprendizaje y perspectivas de intervención'
          },
          {
            autor: 'Karmiloff-Smith, A.',
            titulo: 'Más allá de la modularidad. La ciencia cognitiva desde la perspectiva del desarrollo',
            editorial: 'Alianza',
            año: '1992',
            tipo: 'Complementaria'
          },
          {
            autor: 'Castorina, J. A. y Baquero, R.',
            titulo: 'Dialéctica y Psicología del Desarrollo. El pensamiento de Piaget y de Vygotsky',
            editorial: 'Amorrortu',
            año: '2005',
            tipo: 'Complementaria'
          },
          {
            autor: 'Dehaene, S.',
            titulo: 'Aprender a leer: de las ciencias cognitivas al aula',
            editorial: 'Siglo XXI',
            año: '2015',
            tipo: 'Complementaria'
          },
          {
            autor: 'Kohlberg, L.',
            titulo: 'Estadios morales y moralización. El enfoque cognitivo-evolutivo (pp. 71–100)',
            editorial: 'Alianza',
            año: '1976/1997',
            tipo: 'Complementaria'
          },
          {
            autor: 'Tomasello, M.',
            titulo: '¿Por qué cooperamos?',
            editorial: 'Katz',
            año: '2010',
            tipo: 'Complementaria'
          },
          {
            autor: 'Valdez, D.',
            titulo: 'Autismo. Cómo crear contextos amigables (Cap. 3)',
            editorial: 'Paidós',
            año: '2019',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 547)',
        titular: 'Diana Concepción Fernández Zalazar',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=547&anio=2026&cuatrimestre=2',
        enfoque:
          'Programa 2026 en 6 unidades desde las teorías de la complejidad (Morin, Pozo) integrando múltiples marcos: teorías cognitivas y carga cognitiva (Sweller, Novak), constructivismo (Piaget y Vygotsky), enfoques socio-contextualistas (Teoría de la Actividad de Engeström, configuraciones subjetivas de González Rey, comunidades de práctica de Rogoff), cognición distribuida, TIC, gamificación e Inteligencia Artificial aplicada al aprendizaje, y dificultades específicas del aprendizaje (DEA), neurodiversidad y Diseño Universal del Aprendizaje (DUA) desde una mirada no patologizante.',
        evaluacion:
          'Clases teóricas + Prácticos con aula expandida, foros tutorizados, gamificación, uso de IA y diseño DUA, con escritos grupales breves por bloque. 2 instancias de evaluación (notas numéricas 1–10 promediadas al final): 1) Portfolio grupal (grupos de 4–5 personas) sobre todas las unidades; 2) Escrito integrador individual presencial orientado al pensamiento crítico. Recuperatorio en la evaluación individual (si es por aplazo se pierde la promoción directa; por ausencia justificada/superposición se conserva). Promoción sin final con 7 o más en cada instancia y 75% de asistencia a teóricos y prácticos.',
        bibliografia: [
          {
            autor: 'Pozo, J. I.',
            titulo: 'Psicología del Aprendizaje Humano (Caps. 1 y 2) [Teóricos]',
            editorial: 'Morata',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Fundamentación del aprendizaje humano e implicancias profesionales'
          },
          {
            autor: 'Morin, E.',
            titulo: 'Introducción al pensamiento complejo (Cap. 3: El paradigma de complejidad) [Teóricos]',
            editorial: 'Gedisa',
            año: '1990',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Fundamentación del aprendizaje humano e implicancias profesionales'
          },
          {
            autor: 'Jofre, C. M.',
            titulo: 'Psicología del Aprendizaje: Implicancias de la formación para el ejercicio profesional [Prácticos]',
            editorial: 'Ficha de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Fundamentación del aprendizaje humano e implicancias profesionales'
          },
          {
            autor: 'Almada, I., Ceresato, F. y Acosta, T.',
            titulo: 'Sistemas Complejos y Aprendizaje [Prácticos]',
            editorial: 'Ficha de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Fundamentación del aprendizaje humano e implicancias profesionales'
          },
          {
            autor: 'Pozo, J. I.',
            titulo: 'Teorías cognitivas del aprendizaje (Cap. 2: Conductismo; Cap. 3: Procesamiento de la información) [Teóricos]',
            editorial: 'Morata',
            año: '1994',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Teorías cognitivas del aprendizaje'
          },
          {
            autor: 'Jofre, C. M.',
            titulo: 'Teorías cognitivas sobre el aprendizaje [Teóricos]',
            editorial: 'Ficha de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Teorías cognitivas del aprendizaje'
          },
          {
            autor: 'Cátedra II',
            titulo: 'Aprendizaje y su relación con la Teoría de la Carga Cognitiva de John Sweller [Prácticos]',
            editorial: 'Ficha de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Teorías cognitivas del aprendizaje'
          },
          {
            autor: 'Novak, J. D., Gowin, D. B. y Otero, J.',
            titulo: 'Aprendiendo a aprender (Cap. 1) [Prácticos]',
            editorial: 'Martínez Roca',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Teorías cognitivas del aprendizaje'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'El nacimiento de la inteligencia en el niño (Introducción: El problema biológico de la inteligencia, ap. 1) [Teóricos]',
            editorial: 'Aguilar',
            año: '1979',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Teorías constructivistas del aprendizaje'
          },
          {
            autor: 'Fernández Zalazar, D.',
            titulo: 'La epistemología genética en el desarrollo del conocimiento (La teoría de la equilibración, pp. 104–124) [Teóricos]',
            editorial: 'Ed. Cooperativas',
            año: '2002',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Teorías constructivistas del aprendizaje'
          },
          {
            autor: 'Vigotsky, L.',
            titulo: 'El desarrollo de los procesos psicológicos superiores (Cap. I: Instrumento y símbolo; Cap. VI: Aprendizaje y desarrollo) [Teóricos]',
            editorial: 'Crítica',
            año: '1979',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Teorías constructivistas del aprendizaje'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Estudios de Psicología Genética (Cap. 1: El tiempo y el desarrollo intelectual del niño) [Prácticos]',
            editorial: 'Emecé',
            año: '1972',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Teorías constructivistas del aprendizaje'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Introducción a la epistemología genética (Prefacio de Emilia Ferreiro y Rolando García) [Prácticos]',
            editorial: 'Paidós',
            año: '1975',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Teorías constructivistas del aprendizaje'
          },
          {
            autor: 'Rivière, Á.',
            titulo: 'La Psicología de Vygotski (pp. 49–54) [Prácticos]',
            editorial: 'Visor',
            año: '1985',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Teorías constructivistas del aprendizaje'
          },
          {
            autor: 'Engeström, Y. y Sannino, A.',
            titulo: 'Desde las acciones mediadas hacia coaliciones heterogéneas: cuatro generaciones de la Teoría de la Actividad [Teóricos]',
            editorial: 'Mind, Culture, and Activity, 28(1), 4–23 / Trad. cátedra',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Teorías del aprendizaje socio-contextualistas'
          },
          {
            autor: 'González Rey, F., Mitjáns Martínez, A., Rossato, M. y Magalhães Goulart, D.',
            titulo: 'La relevancia del concepto de configuración subjetiva en la discusión sobre el desarrollo humano [Teóricos]',
            editorial: 'Trad. de cátedra (pp. 217–243)',
            año: '2017',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Teorías del aprendizaje socio-contextualistas'
          },
          {
            autor: 'Acciardi, M.',
            titulo: 'Configuraciones del aprendizaje desde lo socio-histórico: Actividad, subjetividad, singularidad y contexto [Teóricos]',
            editorial: 'Ficha de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Teorías del aprendizaje socio-contextualistas'
          },
          {
            autor: 'González Rey, F. G., Martínez, A. M. y Santos, M. B.',
            titulo: 'Psicología en la educación: implicaciones de la subjetividad en una perspectiva cultural-histórica [Prácticos]',
            editorial: 'Revista Puertorriqueña de Psicología, 27(2), 260–274',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Teorías del aprendizaje socio-contextualistas'
          },
          {
            autor: 'Rogoff, B.',
            titulo: 'Los tres planos de la actividad sociocultural: apropiación participativa, participación guiada y aprendizaje [Prácticos]',
            editorial: 'La mente sociocultural (pp. 111–128)',
            año: '1997',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Teorías del aprendizaje socio-contextualistas'
          },
          {
            autor: 'Cole, M. y Engeström, Y.',
            titulo: 'Enfoque histórico cultural de la cognición distribuida (en G. Salomon, Comp., Cogniciones distribuidas) [Teóricos]',
            editorial: 'Amorrortu',
            año: '2001',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Nuevas contribuciones: cognición distribuida, TIC, gamificación e IA'
          },
          {
            autor: 'Mitra, S.',
            titulo: 'El futuro y la educación escolar. El aprendizaje y los niños al borde del caos [Teóricos]',
            editorial: 'Prospects, 44, 547–558',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Nuevas contribuciones: cognición distribuida, TIC, gamificación e IA'
          },
          {
            autor: 'Neri, C.',
            titulo: 'Aportes de la tecnología a la teoría del sujeto epistémico: un recorrido por la propuesta de Papert (pp. 147–158) [Teóricos]',
            editorial: 'Ed. Cooperativas',
            año: '2002',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Nuevas contribuciones: cognición distribuida, TIC, gamificación e IA'
          },
          {
            autor: 'Fernández Zalazar, D. et al.',
            titulo: 'Integración de inteligencias (Humana e IA) para el desarrollo de competencias en escritura académica [Teóricos]',
            editorial: 'Praxis Educativa',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Nuevas contribuciones: cognición distribuida, TIC, gamificación e IA'
          },
          {
            autor: 'Cornellà, P., Estebanell, M. y Brusi, D.',
            titulo: 'Gamificación y aprendizaje basado en juegos [Prácticos]',
            editorial: 'Enseñanza de las Ciencias de la Tierra, 28(1), 5–19',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Nuevas contribuciones: cognición distribuida, TIC, gamificación e IA'
          },
          {
            autor: 'Cassolino, N.',
            titulo: 'Procesos de aprendizaje potenciados por IA: Del prompt al diseño de una experiencia educativa [Prácticos]',
            editorial: 'Ficha de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Nuevas contribuciones: cognición distribuida, TIC, gamificación e IA'
          },
          {
            autor: 'López, I. y Förster, J.',
            titulo: 'Trastornos del neurodesarrollo: dónde estamos hoy y hacia dónde nos dirigimos [Teóricos]',
            editorial: 'Revista Médica Clínica Las Condes, 33(4), 367–378',
            año: '2022',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Dificultades en el aprendizaje (DEA), neurodiversidad y DUA'
          },
          {
            autor: 'Lozano, A., Nicoletti, V., Ressia, J., Carlucche, S. y Morán, G.',
            titulo: 'Guía de orientación para la intervención en dificultades específicas de aprendizaje (DEA) [Teóricos]',
            editorial: 'Ministerio de Educación de La Pampa',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Dificultades en el aprendizaje (DEA), neurodiversidad y DUA'
          },
          {
            autor: 'Jofre, C. M., Gruccos, I. L. V., Castro, M., Klajner, F. A., Frangullo, Y. B. y Torres, F.',
            titulo: 'Teorías del desarrollo y neurodiversidad: visibilización de trayectorias divergentes [Teóricos]',
            editorial: 'XV Congreso Internacional de Psicología UBA',
            año: '2023',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Dificultades en el aprendizaje (DEA), neurodiversidad y DUA'
          },
          {
            autor: 'Jofre, C. M.',
            titulo: 'Neurociencia, diversidad e inclusión educativa. El rol de las tecnologías frente a las neurodivergencias [Teóricos]',
            editorial: 'XVI Congreso Internacional de Psicología UBA',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Dificultades en el aprendizaje (DEA), neurodiversidad y DUA'
          },
          {
            autor: 'Armstrong, T.',
            titulo: 'El poder de la neurodiversidad (Cap. 1) [Prácticos]',
            editorial: 'Paidós',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Dificultades en el aprendizaje (DEA), neurodiversidad y DUA'
          },
          {
            autor: 'Fernández Zalazar, D. C.',
            titulo: 'Accesibilidad, neurodiversidad, singularidad cognoscitiva y diseño universal del aprendizaje en un circuito potenciador [Prácticos]',
            editorial: 'XIII Congreso Internacional de Psicología UBA',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Dificultades en el aprendizaje (DEA), neurodiversidad y DUA'
          },
          {
            autor: 'Pérez Rubio, K.',
            titulo: 'Diseño Universal de Aprendizaje: pedagogías emergentes para tiempos de confinamiento [Prácticos]',
            editorial: 'Educación 3.0',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Dificultades en el aprendizaje (DEA), neurodiversidad y DUA'
          },
          {
            autor: 'Battro, A. M., Fischer, K. W. y Léna, P. J.',
            titulo: 'Cerebro educado: Ensayos sobre la neuroeducación (Cap. 6: Epigénesis y plasticidad cerebral)',
            editorial: 'Gedisa',
            año: '2016',
            tipo: 'Complementaria'
          },
          {
            autor: 'Benarós, S., Lipina, S. J., Segretin, M. S., Hermida, M. J. y Colombo, J. A.',
            titulo: 'Neurociencia y educación: hacia la construcción de puentes interactivos',
            editorial: 'Revista de Neurología, 50(3), 179–186',
            año: '2010',
            tipo: 'Complementaria'
          },
          {
            autor: 'García, R.',
            titulo: 'El conocimiento en construcción. De las formulaciones de Jean Piaget a la teoría de los sistemas complejos (Caps. II y IV)',
            editorial: 'Siglo XXI',
            año: '2000',
            tipo: 'Complementaria'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'La equilibración de las estructuras cognoscitivas (Introducción y Cap. I)',
            editorial: 'Siglo XXI',
            año: '1978',
            tipo: 'Complementaria'
          },
          {
            autor: 'Salomon, G.',
            titulo: 'Cogniciones distribuidas. Consideraciones psicológicas y educativas (Introducción)',
            editorial: 'Amorrortu',
            año: '2001',
            tipo: 'Complementaria'
          },
          {
            autor: 'Sternberg, R. J.',
            titulo: 'Psicología cognitiva (Vol. 1, pp. 77–108)',
            editorial: 'Piccin',
            año: '2000',
            tipo: 'Complementaria'
          }
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
    descripcion:
      'Herramientas de estadística descriptiva, modelos de probabilidad e inferencia estadística aplicadas a la investigación, la psicometría y la lectura crítica de artículos científicos en Psicología.',
    objetivos: [
      'Organizar, resumir e interpretar datos psicológicos según el nivel de medición, escalas derivadas (Z, T, CI), baremos y coeficientes de relación entre variables.',
      'Comprender modelos de probabilidad (binomial y normal) y la lógica de las pruebas de hipótesis para tomar decisiones bajo incertidumbre.',
      'Interpretar resultados estadísticos (valor p, significación estadística y práctica) en investigaciones y pruebas psicométricas.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 060)',
        titular: 'María Silvia Galibert',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=60&anio=2026&cuatrimestre=2',
        enfoque:
          'Enfoque holístico e integrado en 5 unidades (descriptiva, puntajes y baremos, correlación y regresión, modelos probabilísticos, prueba de hipótesis y tamaño del efecto), articulado con Metodología, Evaluación Psicológica y lectura de artículos científicos usando apoyo computacional.',
        evaluacion:
          '2 hs teóricas virtuales (Teams) + 4 hs prácticos presenciales por semana (5 guías de ejercicios + 2 guías de repaso). 2 parciales teórico-prácticos obligatorios (1 recuperatorio). Promoción sin final con ≥ 7 en ambos parciales y 75% asistencia a prácticos.',
        bibliografia: [
          // Unidad 1
          {
            unidad: 'Unidad 1 · Los datos estadísticos y su distribución de frecuencias',
            autor: 'Bologna, E.',
            titulo: 'Métodos Estadísticos de Investigación (Caps. 1 y 2)',
            editorial: 'Editorial Brujas',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Los datos estadísticos y su distribución de frecuencias',
            autor: 'Galibert, M., García Díaz, A. y Selvatici, L.',
            titulo: 'Clases Teóricas 1 y 2 (Material didáctico en PPT y PDF)',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Los datos estadísticos y su distribución de frecuencias',
            autor: 'García Díaz, A.',
            titulo: 'Explicaciones complementarias para la Unidad 1',
            editorial: 'Ficha de la Cátedra I, UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          // Unidad 2
          {
            unidad: 'Unidad 2 · Resúmenes estadísticos, puntaje Z y baremos',
            autor: 'Bologna, E.',
            titulo: 'Métodos Estadísticos de Investigación (Cap. 3)',
            editorial: 'Editorial Brujas',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Resúmenes estadísticos, puntaje Z y baremos',
            autor: 'García Díaz, A., Galibert, M. y Selvatici, L.',
            titulo: 'Clases Teóricas 3 y 4 (Material didáctico en PPT y PDF)',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          // Unidad 3
          {
            unidad: 'Unidad 3 · Relación entre variables (correlación y regresión)',
            autor: 'Bologna, E.',
            titulo: 'Métodos Estadísticos de Investigación (Caps. 4 y 5)',
            editorial: 'Editorial Brujas',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · Relación entre variables (correlación y regresión)',
            autor: 'Selvatici, L., Galibert, M. y García Díaz, A.',
            titulo: 'Clases Teóricas 5 y 6 (Material didáctico en PPT y PDF)',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          // Unidad 4
          {
            unidad: 'Unidad 4 · Inferencia estadística y modelos de probabilidad',
            autor: 'Bologna, E.',
            titulo: 'Métodos Estadísticos de Investigación (Caps. 6, 8 y 9)',
            editorial: 'Editorial Brujas',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Inferencia estadística y modelos de probabilidad',
            autor: 'Galibert, M. y Pano, C.',
            titulo: 'Media y Varianza Muestrales como Variables Aleatorias',
            editorial: 'CEP, Facultad de Psicología UBA',
            año: '1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Inferencia estadística y modelos de probabilidad',
            autor: 'García Díaz, A., Selvatici, L. y Galibert, M.',
            titulo: 'Clases Teóricas 7 y 8 (Material didáctico en PPT y PDF)',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          // Unidad 5
          {
            unidad: 'Unidad 5 · Prueba de hipótesis y tamaño del efecto',
            autor: 'Bologna, E.',
            titulo: 'Métodos Estadísticos de Investigación (Caps. 11, 12, 13 y Apéndice)',
            editorial: 'Editorial Brujas',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 5 · Prueba de hipótesis y tamaño del efecto',
            autor: 'Galibert, M.',
            titulo: 'Tamaño del Efecto (Material didáctico en PDF y Hoja de fórmulas)',
            editorial: 'Ficha de la Cátedra I, UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 5 · Prueba de hipótesis y tamaño del efecto',
            autor: 'Galibert, M., García Díaz, A. y Selvatici, L.',
            titulo: 'Clases Teóricas 9, 10 y 11 (Material didáctico en PPT y PDF)',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          // Bibliografía de consulta
          {
            autor: 'Amón, J.',
            titulo: 'Estadística para Psicólogos (Vol. 1)',
            editorial: 'Pirámide',
            año: '1978',
            tipo: 'Complementaria'
          },
          {
            autor: 'Aron, A. y Aron, E.',
            titulo: 'Estadística para Psicología (2ª ed.)',
            editorial: 'Prentice Hall',
            año: '2001',
            tipo: 'Complementaria'
          },
          {
            autor: 'Botella, J., León, O. y San Martín, R.',
            titulo: 'Análisis de datos en psicología I',
            editorial: 'Pirámide',
            año: '1993',
            tipo: 'Complementaria'
          },
          {
            autor: 'Cortada de Kohan, N.',
            titulo: 'Diseño Estadístico',
            editorial: 'Eudeba',
            año: '1994',
            tipo: 'Complementaria'
          },
          {
            autor: 'Pardo, A. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología II',
            editorial: 'Ediciones Pirámide',
            año: '1994',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 167)',
        titular: 'Roberto Daniel Muiños',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=167&anio=2026&cuatrimestre=2',
        enfoque:
          'Enfoque práctico, intuitivo y aplicado al análisis de datos en Psicología (7 unidades: Estadística Descriptiva e Inferencial), articulado en torno a un Caso Problema de Psicología Clínica y una aplicación estadística propia de la cátedra (celular y PC) para enfocarse en la interpretación conceptual.',
        evaluacion:
          'Prácticos presenciales + teóricos en videos explicativos y clases virtuales en Campus Virtual. 2 evaluaciones teórico-prácticas (1 recuperatorio); es requisito obligatorio completar todas las autoevaluaciones del Aula Virtual para poder rendir. Promoción sin final con ≥ 7 en ambos parciales y 75% asistencia.',
        bibliografia: [
          // Caso Problema
          {
            unidad: 'General · Caso Problema de la cursada',
            autor: 'Cátedra de Estadística II',
            titulo: 'Caso Problema: Psicología Clínica',
            editorial: 'Campus Virtual, Facultad de Psicología UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          // Unidad I
          {
            unidad: 'Unidad I · Introducción (población, muestra y medición)',
            autor: 'Botella, J., León, O. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología I (Cap. 1)',
            editorial: 'Ediciones Pirámide',
            año: '1993',
            tipo: 'Obligatoria'
          },
          // Unidad II
          {
            unidad: 'Unidad II · Organización de datos y distribuciones de frecuencias',
            autor: 'Botella, J., León, O. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología I (Cap. 2)',
            editorial: 'Ediciones Pirámide',
            año: '1993',
            tipo: 'Obligatoria'
          },
          // Unidad III
          {
            unidad: 'Unidad III · Resúmenes estadísticos en los distintos niveles de medición',
            autor: 'Botella, J., León, O. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología I (Caps. 3, 4, 5 y 7)',
            editorial: 'Ediciones Pirámide',
            año: '1993',
            tipo: 'Obligatoria'
          },
          // Unidad IV
          {
            unidad: 'Unidad IV · Puntuaciones típicas y escalas derivadas (Z, T, S y CI)',
            autor: 'Botella, J., León, O. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología I (Cap. 6)',
            editorial: 'Ediciones Pirámide',
            año: '1993',
            tipo: 'Obligatoria'
          },
          // Unidad V
          {
            unidad: 'Unidad V · Relación entre variables (Pearson, Kendall y eta²)',
            autor: 'Botella, J., León, O. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología I (Cap. 8)',
            editorial: 'Ediciones Pirámide',
            año: '1993',
            tipo: 'Obligatoria'
          },
          // Unidad VI
          {
            unidad: 'Unidad VI · Los modelos Binomial y Normal',
            autor: 'Attorresi, H., Aguerri, M. y Galibert, M.',
            titulo: 'Modelos de Distribuciones de Probabilidades (Apunte de clases de apoyo)',
            editorial: 'CEP, Facultad de Psicología UBA',
            año: '2011',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad VI · Los modelos Binomial y Normal',
            autor: 'Botella, J., León, O. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología I (Cap. 13)',
            editorial: 'Ediciones Pirámide',
            año: '1993',
            tipo: 'Obligatoria'
          },
          // Unidad VII
          {
            unidad: 'Unidad VII · Contraste de hipótesis',
            autor: 'Attorresi, H.',
            titulo: 'Modelos y Pasos a Seguir en las Pruebas de Hipótesis',
            editorial: 'CEP, Facultad de Psicología UBA',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad VII · Contraste de hipótesis',
            autor: 'Pardo, A. y San Martín, R.',
            titulo: 'Análisis de Datos en Psicología II (Caps. 3, 4 y 11)',
            editorial: 'Ediciones Pirámide',
            año: '1994',
            tipo: 'Obligatoria'
          },
          // Bibliografía complementaria destacada
          {
            autor: 'Amón, J.',
            titulo: 'Estadística para Psicólogos (Vol. 1: Descriptiva y Vol. 2: Inferencial)',
            editorial: 'Ediciones Pirámide',
            año: '1978/1980',
            tipo: 'Complementaria'
          },
          {
            autor: 'Campbell, R. y Stephen, K.',
            titulo: 'Equívocos y Falacias en la Interpretación de Estadísticas',
            editorial: 'Editorial Limusa',
            año: '1981',
            tipo: 'Complementaria'
          },
          {
            autor: 'Cortada de Kohan, N.',
            titulo: 'Diseño Estadístico. Para investigadores de las Ciencias Sociales y de la Conducta',
            editorial: 'Eudeba',
            año: '1994',
            tipo: 'Complementaria'
          },
          {
            autor: 'Nunnally, J.',
            titulo: 'Introducción a la Medición Psicológica',
            editorial: 'Paidós',
            año: '1970',
            tipo: 'Complementaria'
          }
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
    descripcion: 'Estudio de la construcción social de la realidad, la interacción humana, las actitudes, las representaciones sociales, la influencia grupal y los procesos colectivos en contextos contemporáneos.',
    objetivos: [
      'Comprender la relación dialéctica entre individuo, subjetividad y sociedad desde distintas perspectivas psicosociales.',
      'Analizar fenómenos de comunicación, identidad social, prejuicio, estigma, influencia de mayorías y minorías, y memoria colectiva.',
      'Desarrollar herramientas teórico-metodológicas para observar e investigar problemáticas psicosociales situadas.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 035)',
        titular: 'Gabriel Sergio Vodovotz',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=35&anio=2026&cuatrimestre=2',
        enfoque:
          'Programa 2026 estructurado en 10 unidades desde el Construccionismo Social y perspectivas interaccionales y sistémicas (Berger y Luckmann, Gergen, Mead, Watzlawick, Wainstein, Goffman, Moscovici y Sluzki). Recorre construcción social de la realidad, identidad social, comunicación humana y familia, actitudes/prejuicio/estigma, representaciones e influencia social, agresión/conducta prosocial, procesos colectivos y redes sociales/TIC.',
        evaluacion:
          '2 hs de teóricos + 4 hs de prácticos semanales (en 2 módulos: uno teórico-conceptual y otro de elaboración grupal tutorizada de un Trabajo de Campo). 2 instancias de evaluación: 1) Parcial individual presencial escrito (semana 10); 2) Trabajo de campo grupal (entrega semana 12) + coloquio oral grupal (semanas 13–14). 1 instancia de recuperatorio. Promoción sin examen final con 7 o más en ambas instancias y 75% de asistencia.',
        bibliografia: [
          {
            autor: 'Gergen, K. J.',
            titulo: 'La psicología social como historia',
            editorial: 'Anthropos (Nº 177, pp. 39–49)',
            año: '1998',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Definición e historia de la Psicología Social'
          },
          {
            autor: 'Rigueiral, G. y Thomé, S.',
            titulo: 'Orientaciones para el trabajo de campo',
            editorial: 'Ficha de la cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Definición e historia de la Psicología Social'
          },
          {
            autor: 'Vidal, V. y Vodovotz, G.',
            titulo: 'Una aproximación posible a la historia de la psicología social',
            editorial: 'Ficha de la cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad 1 · Definición e historia de la Psicología Social'
          },
          {
            autor: 'Berger, P. y Luckmann, T.',
            titulo: 'La construcción social de la realidad',
            editorial: 'Amorrortu',
            año: '1972',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Construcción social de la realidad y socialización'
          },
          {
            autor: 'Mead, G. H.',
            titulo: 'La Persona (Parte III, en Espíritu, persona y sociedad)',
            editorial: 'Paidós',
            año: '1963',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Construcción social de la realidad y socialización'
          },
          {
            autor: 'Rosenhan, D.',
            titulo: 'Acerca de estar sano en un medio enfermo (en P. Watzlawick, Comp., La realidad inventada)',
            editorial: 'Gedisa',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Construcción social de la realidad y socialización'
          },
          {
            autor: 'Vodovotz, G.',
            titulo: 'Organización social',
            editorial: 'Ficha de la cátedra',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Construcción social de la realidad y socialización'
          },
          {
            autor: 'Wainstein, M.',
            titulo: 'La construcción social de la mente: una teoría de la intersubjetividad (en Escritos de Psicología Social, pp. 13–35)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Construcción social de la realidad y socialización'
          },
          {
            autor: 'Watzlawick, P.',
            titulo: 'Las dos realidades y Planolandia (en ¿Es real la realidad?)',
            editorial: 'Herder',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Construcción social de la realidad y socialización'
          },
          {
            autor: 'Watzlawick, P.',
            titulo: 'Profecías que se autocumplen (en La realidad inventada)',
            editorial: 'Gedisa',
            año: '1990',
            tipo: 'Obligatoria',
            unidad: 'Unidad 2 · Construcción social de la realidad y socialización'
          },
          {
            autor: 'Hogg, M. A.',
            titulo: 'Teoría de la Identidad Social (en Understanding Peace and Conflict Through Social Identity Theory)',
            editorial: 'Springer',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Identidad social'
          },
          {
            autor: 'Owens, T.',
            titulo: 'Sí mismo e identidad (en Handbook of Social Psychology)',
            editorial: 'Springer / Trad. de la cátedra',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Unidad 3 · Identidad social'
          },
          {
            autor: 'Lévi-Strauss, C.',
            titulo: 'La familia (en Polémica sobre el origen y la universalidad de la familia)',
            editorial: 'Anagrama',
            año: '1956',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Comunicación social y familia'
          },
          {
            autor: 'Sale, S.',
            titulo: 'Familia y Ciclo Vital Familiar (en M. Wainstein, Comp., Escritos de Psicología Social, pp. 101–125)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Comunicación social y familia'
          },
          {
            autor: 'Wainstein, M.',
            titulo: 'Familia, terapia y posmodernidad (en Escritos de Psicología Social, pp. 83–92)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Comunicación social y familia'
          },
          {
            autor: 'Wainstein, M. y Wittner, V.',
            titulo: '¿Qué es una familia? (en Escritos de Psicología Social, pp. 93–100)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Comunicación social y familia'
          },
          {
            autor: 'Wainstein, M., Wittner, V. y Traverso, G.',
            titulo: 'Pragmática de la comunicación en el siglo XXI (en Psicología y Complejidad)',
            editorial: 'Fundación IGB',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Comunicación social y familia'
          },
          {
            autor: 'Watzlawick, P., Beavin, J. y Jackson, P.',
            titulo: 'Teoría de la comunicación humana',
            editorial: 'Tiempo Contemporáneo',
            año: '1971',
            tipo: 'Obligatoria',
            unidad: 'Unidad 4 · Comunicación social y familia'
          },
          {
            autor: 'Billig, M.',
            titulo: 'Racismo, prejuicios y discriminación (en S. Moscovici, Comp., Psicología Social)',
            editorial: 'Paidós',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Actitudes, estereotipos, prejuicio y discriminación'
          },
          {
            autor: 'Briñol, P., Falces, C. y Becerra, A.',
            titulo: 'Actitudes (en J. F. Morales et al., Psicología Social, pp. 457–490)',
            editorial: 'McGraw-Hill',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Actitudes, estereotipos, prejuicio y discriminación'
          },
          {
            autor: 'Etchezahar, E. y Ungaretti, J.',
            titulo: 'Psicología Social del Prejuicio',
            editorial: 'Ficha de la cátedra',
            año: '2019',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Actitudes, estereotipos, prejuicio y discriminación'
          },
          {
            autor: 'Goffman, E.',
            titulo: 'Estigma e identidad social (en La identidad deteriorada)',
            editorial: 'Amorrortu',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Actitudes, estereotipos, prejuicio y discriminación'
          },
          {
            autor: 'Molero Alonso, F.',
            titulo: 'El estudio del prejuicio en la Psicología social: definición y causas (en J. F. Morales et al., Psicología Social, pp. 591–618)',
            editorial: 'McGraw-Hill',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Actitudes, estereotipos, prejuicio y discriminación'
          },
          {
            autor: 'Wainstein, M.',
            titulo: 'Actitudes, cogniciones, atribuciones y representaciones sociales (en Escritos de Psicología Social, pp. 35–53)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 5 · Actitudes, estereotipos, prejuicio y discriminación'
          },
          {
            autor: 'Di Iorio, J.',
            titulo: 'El concepto de representación social: consideraciones teóricas y metodológicas',
            editorial: 'Ficha de la cátedra',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Representaciones sociales'
          },
          {
            autor: 'Jodelet, D.',
            titulo: 'La representación social: fenómenos, concepto y teoría (en S. Moscovici, Comp., Psicología social)',
            editorial: 'Paidós',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Representaciones sociales'
          },
          {
            autor: 'Jodelet, D.',
            titulo: 'El movimiento de retorno al sujeto y el enfoque de las representaciones sociales',
            editorial: 'Cultura y Representaciones Sociales, 3(5), 34–60',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Representaciones sociales'
          },
          {
            autor: 'Moscovici, S. y Marková, I.',
            titulo: 'La presentación de las representaciones sociales: diálogo con Serge Moscovici (en J. A. Castorina, Comp., pp. 111–152)',
            editorial: 'Gedisa',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Representaciones sociales'
          },
          {
            autor: 'Schwarcz López Aranguren, V.',
            titulo: 'Crisis social o movimientos propios de la construcción de la realidad (en M. Wainstein, Comp., pp. 62–81)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 6 · Representaciones sociales'
          },
          {
            autor: 'Doms, M. y Moscovici, S.',
            titulo: 'Innovación e influencia de las minorías (en S. Moscovici, Comp., Psicología social)',
            editorial: 'Paidós',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Influencia social'
          },
          {
            autor: 'Hogg, M. y Vaughan, G.',
            titulo: 'Influencia social (en Psicología social, pp. 235–265)',
            editorial: 'Panamericana',
            año: '2010',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Influencia social'
          },
          {
            autor: 'Milgram, S.',
            titulo: 'Obediencia a la autoridad',
            editorial: 'Desclée de Brouwer',
            año: '1984',
            tipo: 'Obligatoria',
            unidad: 'Unidad 7 · Influencia social'
          },
          {
            autor: 'Baron, R. y Byrne, D.',
            titulo: 'Agresión: su naturaleza, causas y control (en Psicología social, pp. 445–485)',
            editorial: 'Pearson Educación',
            año: '2005',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Agresión y conducta prosocial'
          },
          {
            autor: 'Dovidio, J. y Penner, L.',
            titulo: 'Ayuda y altruismo (en Blackwell Handbook of Social Psychology, pp. 162–195)',
            editorial: 'Blackwell / Trad. de la cátedra',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Unidad 8 · Agresión y conducta prosocial'
          },
          {
            autor: 'Burr, V.',
            titulo: 'Una introducción al constructivismo social',
            editorial: 'Publicación de la cátedra',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Unidad 9 · Procesos colectivos y poder'
          },
          {
            autor: 'Graumann, C. F. y Kruse, L.',
            titulo: 'Masas, muchedumbres y densidad (en S. Moscovici, Comp., Psicología social)',
            editorial: 'Paidós',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Unidad 9 · Procesos colectivos y poder'
          },
          {
            autor: 'Middleton, D. y Edwards, D.',
            titulo: 'Memoria compartida: la naturaleza social del recuerdo y del olvido (en Psicología social)',
            editorial: 'Paidós',
            año: '1992',
            tipo: 'Obligatoria',
            unidad: 'Unidad 9 · Procesos colectivos y poder'
          },
          {
            autor: 'Páez, D., Techio, E., Marques, J. y Beristain, C.',
            titulo: 'Memoria colectiva y social (en J. F. Morales et al., Psicología social, pp. 693–716)',
            editorial: 'McGraw-Hill',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Unidad 9 · Procesos colectivos y poder'
          },
          {
            autor: 'Acrich de Gutmann, L.',
            titulo: 'Las redes sociales y el apoyo social (en M. Wainstein, Comp., pp. 127–146)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 10 · Psicología Social aplicada, redes sociales y TIC'
          },
          {
            autor: 'Bonelli, A., Gonzalez Cowes, V., Gueglio Saccone, C. y Ussher, M.',
            titulo: 'Redes sociales y comunicación: Las tecnologías en la construcción de la vida cotidiana (en M. Wainstein, Comp., pp. 147–174)',
            editorial: 'JCE Ediciones',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Unidad 10 · Psicología Social aplicada, redes sociales y TIC'
          },
          {
            autor: 'Sánchez Vidal, A.',
            titulo: 'Psicología social aplicada: teoría, método y práctica',
            editorial: 'Publicación académica',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Unidad 10 · Psicología Social aplicada, redes sociales y TIC'
          },
          {
            autor: 'Sluzki, C.',
            titulo: 'La red social: proposiciones generales (en La red social: frontera de la práctica sistémica, pp. 37–70)',
            editorial: 'Gedisa',
            año: '1996',
            tipo: 'Obligatoria',
            unidad: 'Unidad 10 · Psicología Social aplicada, redes sociales y TIC'
          },
          {
            autor: 'Wittner, V.',
            titulo: 'Seres sociales en red: La necesidad de los vínculos (en Psicología y Complejidad)',
            editorial: 'Fundación IGB',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Unidad 10 · Psicología Social aplicada, redes sociales y TIC'
          },
          {
            autor: 'Moscovici, S.',
            titulo: 'Psicología Social (Tomos I y II)',
            editorial: 'Paidós',
            año: '1985',
            tipo: 'Complementaria'
          },
          {
            autor: 'Goffman, E.',
            titulo: 'La presentación de la persona en la vida cotidiana',
            editorial: 'Amorrortu',
            año: '2006',
            tipo: 'Complementaria'
          },
          {
            autor: 'Minuchin, S.',
            titulo: 'Familias y terapia familiar',
            editorial: 'Gedisa',
            año: '1997',
            tipo: 'Complementaria'
          },
          {
            autor: 'Gergen, K. J.',
            titulo: 'El yo saturado',
            editorial: 'Paidós',
            año: '1992',
            tipo: 'Complementaria'
          },
          {
            autor: 'Von Foerster, H.',
            titulo: 'Construyendo una realidad (en P. Watzlawick, Comp., La realidad inventada)',
            editorial: 'Gedisa',
            año: '1988',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 036)',
        titular: 'Elena Zubieta',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=36&anio=2026&cuatrimestre=2',
        enfoque:
          'Programa 2026 en 5 unidades con una visión psicosocial plural que articula la Psicología Social Tripolar (Moscovici), el Interaccionismo Simbólico (Mead, Goffman), la Fenomenología Social, la Cognición Social (Festinger), el Construccionismo y la Psicología Social Crítica y Latinoamericana (Martín-Baró, Maritza Montero y Pichon-Rivière). Incluye memoria colectiva, movimientos sociales y análisis de estudios empíricos sobre la Era Digital (redes sociales e IA).',
        evaluacion:
          'Clases teóricas dialogadas + Trabajos Prácticos con lecturas teóricas, estudios empíricos y trabajo de campo grupal tutorizado (grupos de hasta 6 integrantes). 2 evaluaciones: 1) Primer parcial individual (formato multiple choice y ejercicios tipo acróstico/familias de palabras); 2) Segundo parcial: Trabajo grupal de acercamiento a la investigación + coloquio oral con preguntas teóricas individuales (nota individual). Promoción sin final con 7 o más en ambas evaluaciones y 75% de asistencia.',
        bibliografia: [
          {
            autor: 'Ferrari, L.',
            titulo: 'Construccionismo social: post hermenéutica y post estructuralismo [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Lentini, E.',
            titulo: 'Interaccionismo Simbólico [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Lentini, E.',
            titulo: 'Influencia Social [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Pérez, J.',
            titulo: 'Psicología Social: relación entre individuo y sociedad (en J. F. Morales et al., pp. 25–40) [Teóricos]',
            editorial: 'McGraw-Hill',
            año: '1994',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Siedl, A.',
            titulo: 'Institucionalización y socialización desde la Fenomenología Social y el Conocimiento de Sentido Común [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Zubieta, E.',
            titulo: 'La Psicología de la Cognición Social [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Moscovici, S.',
            titulo: 'Introducción: el campo de la psicología social (Tomo I, pp. 17–37) [Prácticos]',
            editorial: 'Paidós',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Goffman, E.',
            titulo: 'Introducción / Actuaciones (en La presentación de la persona en la vida cotidiana, pp. 13–87) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Mead, G. H.',
            titulo: 'La Persona (en Espíritu, persona y sociedad, pp. 167–248, apartados 18, 19, 20 y 22) [Prácticos]',
            editorial: 'Paidós',
            año: '1972',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Festinger, L.',
            titulo: 'La teoría de la disonancia cognoscitiva (extracto por A. Ovejero) [Prácticos]',
            editorial: 'Psicothema, 5(1), 201–206',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Gosende, E.',
            titulo: 'Psicología Social Crítica: Maritza Montero, Ian Parker e Ignacio Martín-Baró [Prácticos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Ibáñez, T.',
            titulo: 'Introducción: La tensión esencial de la psicología social (pp. 13–29) [Prácticos]',
            editorial: 'Anthropos',
            año: '1992',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Martín-Baró, I.',
            titulo: 'El latino indolente. Consideración ideológica del fatalismo latinoamericano (en M. Montero, Ed., pp. 135–162) [Prácticos]',
            editorial: 'Panapo',
            año: '1987',
            tipo: 'Obligatoria',
            unidad: 'Unidad I · Introducción general, perspectivas y Psicología Social Crítica'
          },
          {
            autor: 'Pérez, J.',
            titulo: 'Las representaciones Sociales (en D. Páez, E. Zubieta et al., pp. 443–454) [Teóricos]',
            editorial: 'Pearson Educación',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Unidad II · Actitudes, control psicológico, representaciones e imaginarios sociales'
          },
          {
            autor: 'Sosa, F. y Zubieta, E.',
            titulo: 'Control Psicológico: Reactancia, Indefensión y Locus de control [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad II · Actitudes, control psicológico, representaciones e imaginarios sociales'
          },
          {
            autor: 'Zubieta, E.',
            titulo: 'Actitudes [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad II · Actitudes, control psicológico, representaciones e imaginarios sociales'
          },
          {
            autor: 'Marí, E.',
            titulo: 'Racionalidad e Imaginario Social en el discurso del orden (en Papeles de Filosofía, pp. 219–247) [Prácticos]',
            editorial: 'Biblos',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Unidad II · Actitudes, control psicológico, representaciones e imaginarios sociales'
          },
          {
            autor: 'Moscovici, S.',
            titulo: 'Ideas que se transforman en objetos del sentido común (en El psicoanálisis, su imagen y su público, pp. 75–89) [Prácticos]',
            editorial: 'Huemul',
            año: '1979',
            tipo: 'Obligatoria',
            unidad: 'Unidad II · Actitudes, control psicológico, representaciones e imaginarios sociales'
          },
          {
            autor: 'Billig, M.',
            titulo: 'Racismo, Prejuicio y Discriminación (en S. Moscovici, Psicología social II, pp. 575–600) [Teóricos]',
            editorial: 'Paidós',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Unidad III · Relaciones interpersonales, intergrupales y minorías activas'
          },
          {
            autor: 'Gómez Berrocal, C.',
            titulo: 'Psicología Social de las Relaciones Intergrupales (pp. 535–578) [Teóricos]',
            editorial: 'Sanz y Torres',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Unidad III · Relaciones interpersonales, intergrupales y minorías activas'
          },
          {
            autor: 'Zubieta, E. y González, L.',
            titulo: 'Las Relaciones Interpersonales [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad III · Relaciones interpersonales, intergrupales y minorías activas'
          },
          {
            autor: 'Barriga, S.',
            titulo: 'Introducción (en S. Moscovici, Psicología de las minorías activas, pp. 16–19) [Prácticos]',
            editorial: 'Morata',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Unidad III · Relaciones interpersonales, intergrupales y minorías activas'
          },
          {
            autor: 'Moscovici, S.',
            titulo: 'Introducción (en Psicología de las minorías activas, pp. 21–30) [Prácticos]',
            editorial: 'Morata',
            año: '1996',
            tipo: 'Obligatoria',
            unidad: 'Unidad III · Relaciones interpersonales, intergrupales y minorías activas'
          },
          {
            autor: 'Mugny, G.',
            titulo: 'El poder de las minorías (Caps. 1 y 2) [Prácticos]',
            editorial: 'Rol',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Unidad III · Relaciones interpersonales, intergrupales y minorías activas'
          },
          {
            autor: 'Ibarra, P.',
            titulo: '¿Qué son los movimientos sociales? (en Anuario de Movimientos sociales) [Teóricos]',
            editorial: 'Icaria Editorial',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Unidad IV · Memoria colectiva y movimientos sociales'
          },
          {
            autor: 'Páez, D., Techio, E., Marques, J. y Beristain, C.',
            titulo: 'Memoria Colectiva y Social (en J. F. Morales et al., pp. 693–716) [Teóricos]',
            editorial: 'McGraw-Hill',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Unidad IV · Memoria colectiva y movimientos sociales'
          },
          {
            autor: 'Siedl, A.',
            titulo: 'Memoria individual, memoria colectiva, memoria nacional [Prácticos]',
            editorial: 'Material de cátedra',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Unidad IV · Memoria colectiva y movimientos sociales'
          },
          {
            autor: 'Morales Domínguez, J. F., Vázquez Botana, A. y Magallares Sanjuán',
            titulo: 'Psicología Social Aplicada (pp. 521–546) [Teóricos]',
            editorial: 'Sanz y Torres',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Unidad V · Psicología Social Latinoamericana, en Argentina y aplicada'
          },
          {
            autor: 'Ribas Somar, I. y Siedl, A.',
            titulo: 'Conceptos centrales de la obra de Pichon-Rivière [Teóricos]',
            editorial: 'Material de cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Unidad V · Psicología Social Latinoamericana, en Argentina y aplicada'
          },
          {
            autor: 'Robertazzi, M.',
            titulo: 'Una respuesta neoparadigmática en América Latina [Prácticos]',
            editorial: 'Material de cátedra',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Unidad V · Psicología Social Latinoamericana, en Argentina y aplicada'
          },
          {
            autor: 'Jodelet, D.',
            titulo: 'La representación social: fenómenos, concepto y teoría (en S. Moscovici, Psicología social II)',
            editorial: 'Paidós',
            año: '1986',
            tipo: 'Complementaria'
          },
          {
            autor: 'Tajfel, H.',
            titulo: 'Grupos humanos y categorías sociales',
            editorial: 'Herder',
            año: '1984',
            tipo: 'Complementaria'
          },
          {
            autor: 'Halbwachs, M.',
            titulo: 'La memoria colectiva',
            editorial: 'Miño y Dávila',
            año: '2011',
            tipo: 'Complementaria'
          },
          {
            autor: 'Pichon-Rivière, E.',
            titulo: 'El proceso grupal: del psicoanálisis a la psicología social',
            editorial: 'Nueva Visión',
            año: '1985',
            tipo: 'Complementaria'
          },
          {
            autor: 'Montero, M.',
            titulo: 'Introducción a la psicología comunitaria: desarrollo, conceptos y procesos',
            editorial: 'Paidós',
            año: '2004',
            tipo: 'Complementaria'
          }
        ]
      }
    ]
  },
  {
    id: 'psicoanalisis-freud',
    nombre: 'Psicoanálisis: Freud',
    año: 1,
    ciclo: 'Formación General',
    cuatrimestre: 'Anual',
    descripcion:
      'Asignatura anual troncal del primer año del Ciclo de Formación General dedicada al estudio sistemático de la obra de Sigmund Freud: descubrimiento del inconsciente, sueños, sexualidad infantil, pulsiones, transferencia, primera y segunda tópica, angustia y dirección de la cura.',
    objetivos: [
      'Aprehender la lógica de lectura de los textos freudianos y la construcción progresiva de los conceptos fundamentales del psicoanálisis.',
      'Comprender la articulación solidaria entre la praxis analítica, los paradigmas del síntoma y los desarrollos metapsicológicos.',
      'Sentar las bases conceptuales y clínicas indispensables para materias posteriores como Psicopatología y Clínica de Adultos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 049)',
        titular: 'Silvia Patricia Pino',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=49&anio=2026&cuatrimestre=2',
        enfoque:
          'Dictado anual (6 hs cátedra semanales) con lectura rigurosa "a la letra" de los textos freudianos ordenada en après-coup desde Análisis terminable e interminable e Inhibición, síntoma y angustia (trípode trauma, pulsión y yo), con marcada orientación lacaniana. Articula 3 espacios obligatorios en paralelo a lo largo de Apertura + Módulos A a H: Teóricos (doctrina), Seminarios (praxis en el nudo transferencia–resistencia) y Prácticos (paradigmas del síntoma). Suma Semana Clínica, Taller de escritura, Pasantías, Dispositivo asistencial en el Hospital de Clínicas y revista Traumatismo Freud.',
        evaluacion:
          'Dictado anual con 75% de asistencia obligatoria en Teóricos, Seminarios y Trabajos Prácticos (6 hs semanales). 3 exámenes parciales escritos; cada parcial consta de 1 pregunta de Teóricos, 1 de Prácticos, 1 de Seminarios y 1 de articulación de las tres instancias. Cuenta con instancia de recuperatorio por aplazo o ausencia justificada. Promoción sin examen final con 7 o más en cada uno de los tres parciales (con 4 a 6 queda regular con examen final).',
        bibliografia: [
          {
            autor: 'Freud, S.',
            titulo: 'Contribución a la historia del movimiento psicoanalítico (OC, T. XIV, pp. 20–21) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1914',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Lacan, J.',
            titulo: 'Reseña del Seminario de la ética (en Reseñas de enseñanza, pp. 14–15) [Teóricos]',
            editorial: 'Manantial',
            año: '1960',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Presentación autobiográfica (OC, T. XX, pp. 12–13 y 27) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1925 [1924]',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Cartas 66, 69 y 71 a W. Fliess (OC, T. I) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1897',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Freud, S.',
            titulo: '¿Pueden los legos ejercer el psicoanálisis? Diálogos con un juez imparcial (OC, T. XX, p. 181) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1926',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Pino, S.',
            titulo: 'El campo freudiano y su praxis [Seminarios]',
            editorial: 'Ficha de la cátedra',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Conferencias de introducción al psicoanálisis: 16ª conferencia. Psicoanálisis y psiquiatría (OC, T. XVI) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1917 [1916-17]',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Pino, S.',
            titulo: 'Los paradigmas del síntoma en Freud [Prácticos]',
            editorial: 'Revista Traumatismo Freud Nº 3',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Apertura · Acontecimiento Freud, praxis y paradigmas del síntoma'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Pulsiones y destinos de pulsión (p. 113), Introducción del narcisismo (p. 75) y Lo inconsciente (p. 163) (OC, T. XIV) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Módulo A · Génesis de los conceptos, terapéutica freudiana y Síntoma-Trauma I'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Algunas consideraciones con miras a un estudio comparativo de las parálisis motrices orgánicas e histéricas (OC, T. I, pp. 202–210) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1893 [1888-93]',
            tipo: 'Obligatoria',
            unidad: 'Módulo A · Génesis de los conceptos, terapéutica freudiana y Síntoma-Trauma I'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre el mecanismo psíquico de fenómenos histéricos (OC, T. III) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1893',
            tipo: 'Obligatoria',
            unidad: 'Módulo A · Génesis de los conceptos, terapéutica freudiana y Síntoma-Trauma I'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Tratamiento psíquico (tratamiento del alma) (OC, T. I) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1890',
            tipo: 'Obligatoria',
            unidad: 'Módulo A · Génesis de los conceptos, terapéutica freudiana y Síntoma-Trauma I'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Estudios sobre la histeria (Breuer y Freud), Cap. II, punto 5: Señorita Elisabeth von R. (OC, T. II) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1893-95',
            tipo: 'Obligatoria',
            unidad: 'Módulo A · Génesis de los conceptos, terapéutica freudiana y Síntoma-Trauma I'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La sexualidad en la etiología de las neurosis (OC, T. III) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1898',
            tipo: 'Obligatoria',
            unidad: 'Módulo A · Génesis de los conceptos, terapéutica freudiana y Síntoma-Trauma I'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Proyecto de psicología, Parte II, [4]: La proton pseudos histérica — Caso Emma (OC, T. I, pp. 400–404) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1950 [1895]',
            tipo: 'Obligatoria',
            unidad: 'Módulo A · Génesis de los conceptos, terapéutica freudiana y Síntoma-Trauma I'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Manuscrito K. Las neurosis de defensa (Un cuento de Navidad) (OC, T. I, pp. 260–269) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1896',
            tipo: 'Obligatoria',
            unidad: 'Módulo B · Teoría de la defensa, resistencia y Síntoma-Trauma II'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Cartas 46, 101 y 125 a W. Fliess (OC, T. I) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1896–1899',
            tipo: 'Obligatoria',
            unidad: 'Módulo B · Teoría de la defensa, resistencia y Síntoma-Trauma II'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre la justificación de separar de la neurastenia un determinado síndrome en calidad de «neurosis de angustia» (OC, T. III) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1894',
            tipo: 'Obligatoria',
            unidad: 'Módulo B · Teoría de la defensa, resistencia y Síntoma-Trauma II'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Estudios sobre la histeria, Cap. IV: Sobre la psicoterapia de la histeria, puntos 2 y 3 (OC, T. II) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1893-95',
            tipo: 'Obligatoria',
            unidad: 'Módulo B · Teoría de la defensa, resistencia y Síntoma-Trauma II'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Las neuropsicosis de defensa (OC, T. III) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1894',
            tipo: 'Obligatoria',
            unidad: 'Módulo B · Teoría de la defensa, resistencia y Síntoma-Trauma II'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Nuevas puntualizaciones sobre las neuropsicosis de defensa (OC, T. III) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1896',
            tipo: 'Obligatoria',
            unidad: 'Módulo B · Teoría de la defensa, resistencia y Síntoma-Trauma II'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Cartas 50, 52, 61, 69 y 101 y Manuscrito L (OC, T. I) [Teóricos, Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1896–1899',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Proyecto de psicología (OC, T. I, pp. 362–367) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1950 [1895]',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La interpretación de los sueños: Cap. II (sueño de Irma) y Cap. VII, puntos A, B, C y E (OC, T. IV y V) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1900 [1899]',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Tres ensayos de teoría sexual, Cap. II: La sexualidad infantil (OC, T. VII) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1905',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Mis tesis sobre el papel de la sexualidad en la etiología de las neurosis (OC, T. VII) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1906 [1905]',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Psicopatología de la vida cotidiana: Caps. I, II (aliquis) y IV (recuerdos encubridores) (OC, T. VI) [Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1901',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El chiste y su relación con lo inconsciente (selección Caps. II, IV y V) (OC, T. VIII) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1905',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Pino, S.',
            titulo: 'El chiste [Seminarios]',
            editorial: 'Revista Traumatismo Freud',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Conferencias de introducción al psicoanálisis: 7ª, 9ª y 11ª conferencias (OC, T. XV) [Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1916-17 [1915-17]',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre los recuerdos encubridores (OC, T. III) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1899',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Las fantasías histéricas y su relación con la bisexualidad (OC, T. IX) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1908',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Fragmento de análisis de un caso de histeria — Caso Dora (OC, T. VII, pp. 36–46 y 98–101) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1905 [1901]',
            tipo: 'Obligatoria',
            unidad: 'Módulo C · Doctrina de los sueños, interpretar el inconsciente y Síntoma-Fantasía'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Pulsiones y destinos de pulsión (OC, T. XIV) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La represión (OC, T. XIV) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Lo inconsciente: Caps. I, IV, V y VI (OC, T. XIV) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Nota sobre el concepto de lo inconsciente en psicoanálisis (OC, T. XII) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1912',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Introducción del narcisismo, puntos 1 y 2 (OC, T. XIV) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1914',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Fragmento de análisis de un caso de histeria: Palabras preliminares y Cap. IV Epílogo (OC, T. VII) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1905',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Trabajos sobre técnica: Dinámica de la transferencia, Consejos al médico, Iniciación del tratamiento, Recordar, repetir y reelaborar y Amor de transferencia (OC, T. XII) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1912–1915',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Conferencias de introducción al psicoanálisis: 17ª, 18ª, 20ª, 21ª, 23ª, 26ª, 27ª y 28ª (OC, T. XVI) [Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1917 [1916-17]',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La perturbación psicógena de la visión según el psicoanálisis (OC, T. XI) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1910',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El malestar en la cultura (OC, T. XXI, p. 103) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1930 [1929]',
            tipo: 'Obligatoria',
            unidad: 'Módulo D · Represión, resistencia, transferencia y Síntoma-Sexualidad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Más allá del principio de placer, puntos I al V (OC, T. XVIII) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1920',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El sepultamiento del complejo de Edipo (OC, T. XIX) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1924',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Algunas consecuencias psíquicas de la diferencia anatómica entre los sexos (OC, T. XIX) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1925',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: 'A propósito de un caso de neurosis obsesiva (Hombre de las Ratas), punto G (OC, T. X) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1909',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Tótem y tabú, Cap. IV, punto 5 (OC, T. XIII) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1913 [1912-13]',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: '«Pegan a un niño». Contribución al conocimiento de la génesis de las perversiones sexuales (OC, T. XVII) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1919',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Algunos tipos de carácter dilucidados por el trabajo psicoanalítico (OC, T. XIV) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1916',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La organización genital infantil (OC, T. XIX) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1923',
            tipo: 'Obligatoria',
            unidad: 'Módulo E · Último dualismo pulsional, Edipo, Hombre de las Ratas y Síntoma-Castración'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El yo y el ello, Caps. I a V (OC, T. XIX) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1923',
            tipo: 'Obligatoria',
            unidad: 'Módulo F · Segunda tópica, construcción analítica y Síntoma-Necesidad de castigo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Duelo y melancolía (OC, T. XIV, pp. 244–247) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1917 [1915]',
            tipo: 'Obligatoria',
            unidad: 'Módulo F · Segunda tópica, construcción analítica y Síntoma-Necesidad de castigo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Psicología de las masas y análisis del yo, Cap. VII: La identificación (OC, T. XVIII) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1921',
            tipo: 'Obligatoria',
            unidad: 'Módulo F · Segunda tópica, construcción analítica y Síntoma-Necesidad de castigo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Construcciones en el análisis (OC, T. XXIII) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1937',
            tipo: 'Obligatoria',
            unidad: 'Módulo F · Segunda tópica, construcción analítica y Síntoma-Necesidad de castigo'
          },
          {
            autor: 'Kardiner, A.',
            titulo: 'Mi análisis con Freud. Reminiscencias [Seminarios]',
            editorial: 'Joaquín Mortiz',
            año: '1979',
            tipo: 'Obligatoria',
            unidad: 'Módulo F · Segunda tópica, construcción analítica y Síntoma-Necesidad de castigo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El problema económico del masoquismo (OC, T. XIX) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1924',
            tipo: 'Obligatoria',
            unidad: 'Módulo F · Segunda tópica, construcción analítica y Síntoma-Necesidad de castigo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Moisés y la religión monoteísta, Cap. III, Parte I, apartado C: La analogía (OC, T. XXIII) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1939 [1934-38]',
            tipo: 'Obligatoria',
            unidad: 'Módulo F · Segunda tópica, construcción analítica y Síntoma-Necesidad de castigo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La negación (OC, T. XIX) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1925',
            tipo: 'Obligatoria',
            unidad: 'Módulo G · Nudo inconsciente-pulsión, final de análisis y Síntoma-Pulsión'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Pérdida de realidad en la neurosis y la psicosis (OC, T. XIX) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1924',
            tipo: 'Obligatoria',
            unidad: 'Módulo G · Nudo inconsciente-pulsión, final de análisis y Síntoma-Pulsión'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La escisión del yo en el proceso defensivo (OC, T. XXIII) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1940 [1938]',
            tipo: 'Obligatoria',
            unidad: 'Módulo G · Nudo inconsciente-pulsión, final de análisis y Síntoma-Pulsión'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Esquema de psicoanálisis (pp. 178–180 y Parte II, punto VI: La técnica psicoanalítica) (OC, T. XXIII) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1940 [1938]',
            tipo: 'Obligatoria',
            unidad: 'Módulo G · Nudo inconsciente-pulsión, final de análisis y Síntoma-Pulsión'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Análisis terminable e interminable (OC, T. XXIII) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1937',
            tipo: 'Obligatoria',
            unidad: 'Módulo G · Nudo inconsciente-pulsión, final de análisis y Síntoma-Pulsión'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Inhibición, síntoma y angustia: puntos I al VIII y XI «Addenda» (OC, T. XX) [Teóricos, Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1926 [1925]',
            tipo: 'Obligatoria',
            unidad: 'Módulo G · Nudo inconsciente-pulsión, final de análisis y Síntoma-Pulsión'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El humor (OC, T. XXI) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1927',
            tipo: 'Obligatoria',
            unidad: 'Módulo G · Nudo inconsciente-pulsión, final de análisis y Síntoma-Pulsión'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre el psicoanálisis silvestre (OC, T. XI) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1910',
            tipo: 'Obligatoria',
            unidad: 'Módulo H · Transmisión, formación de los analistas y Malestar en la cultura'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Presentación autobiográfica, punto V y Posfacio (OC, T. XX) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1925 [1924]',
            tipo: 'Obligatoria',
            unidad: 'Módulo H · Transmisión, formación de los analistas y Malestar en la cultura'
          },
          {
            autor: 'Freud, S.',
            titulo: '¿Pueden los legos ejercer el psicoanálisis? (OC, T. XX, pp. 193–194 y 213–214) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1926',
            tipo: 'Obligatoria',
            unidad: 'Módulo H · Transmisión, formación de los analistas y Malestar en la cultura'
          },
          {
            autor: 'Freud, S.',
            titulo: '¿Debe enseñarse el psicoanálisis en la universidad? (OC, T. XVII) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1919 [1918]',
            tipo: 'Obligatoria',
            unidad: 'Módulo H · Transmisión, formación de los analistas y Malestar en la cultura'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Nuevas conferencias de introducción al psicoanálisis, 34ª conferencia (OC, T. XXII, pp. 140–145) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1933 [1932]',
            tipo: 'Obligatoria',
            unidad: 'Módulo H · Transmisión, formación de los analistas y Malestar en la cultura'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El malestar en la cultura, puntos I a III (OC, T. XXI) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1930 [1929]',
            tipo: 'Obligatoria',
            unidad: 'Módulo H · Transmisión, formación de los analistas y Malestar en la cultura'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Psicología de las masas y análisis del yo (OC, T. XVIII, p. 134) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1921',
            tipo: 'Obligatoria',
            unidad: 'Módulo H · Transmisión, formación de los analistas y Malestar en la cultura'
          },
          {
            autor: 'Lacan, J.',
            titulo: 'Introducción al comentario de Jean Hyppolite sobre la Verneinung de Freud (Escritos 1)',
            editorial: 'Siglo XXI',
            año: '1954',
            tipo: 'Complementaria'
          },
          {
            autor: 'Lacan, J.',
            titulo: 'El mito individual del neurótico (en Intervenciones y textos 1)',
            editorial: 'Manantial',
            año: '1953',
            tipo: 'Complementaria'
          },
          {
            autor: 'Bercherie, P.',
            titulo: 'Génesis de los conceptos freudianos',
            editorial: 'Paidós',
            año: '1996',
            tipo: 'Complementaria'
          },
          {
            autor: 'Masotta, O.',
            titulo: 'El modelo pulsional (Capítulo 1)',
            editorial: 'Catálogos Editora',
            año: '1990',
            tipo: 'Complementaria'
          },
          {
            autor: 'Delgado, O.',
            titulo: 'La cuestión de la satisfacción en los orígenes del psicoanálisis (en Conjeturas psicoanalíticas)',
            editorial: 'JCE Ediciones',
            año: '2011',
            tipo: 'Complementaria'
          },
          {
            autor: 'Miller, J.-A.',
            titulo: 'Sobre Die Wege der Symptombildung',
            editorial: 'Revista Freudiana Nº 19',
            año: '1997',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 050)',
        titular: 'David Alberto Laznik',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=50&anio=2026&cuatrimestre=2',
        enfoque:
          'Dictado anual (6 hs cátedra semanales) organizado desde la premisa de que "el psicoanálisis es la teoría de una praxis", recorriendo la solidaridad entre los referentes clínicos freudianos (Anna O., Elizabeth von R., Emma, Cäcilie M., Signorelli, Dora, pequeño Hans, Hombre de las Ratas, Hombre de los Lobos, Fort-Da) y las reformulaciones teóricas de Freud (incluye traducciones críticas propias de la cátedra). Articula Teóricos (17 ejes), Seminarios (con desarrollo sistemático de las tres teorías de la angustia y la sexualidad femenina) y Trabajos Prácticos (27 clases en 8 bloques), más Ateneos clínicos y Seminarios electivos de intersecciones con arte y literatura.',
        evaluacion:
          'Dictado anual con 75% de asistencia obligatoria en Teóricos, Seminarios y Trabajos Prácticos (2 hs de Prácticos + 4 hs de Teóricos y Seminarios). 3 exámenes parciales escritos, siendo el 3° parcial acumulativo e integrador de todos los contenidos dictados durante el año. Promoción sin examen final con 7 o más en cada uno de los tres parciales (sin aplazos). Regularidad con 4 o más (sin superar dos aplazos con recuperatorio) para rendir examen final.',
        bibliografia: [
          {
            autor: 'Freud, S.',
            titulo: 'Sobre el mecanismo psíquico de fenómenos histéricos (OC, T. III, pp. 25–40) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1893',
            tipo: 'Obligatoria',
            unidad: 'Eje I · Conflicto psíquico, psicoterapia de la histeria y neuropsicosis de defensa'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Estudios sobre la histeria: Elizabeth von R., Cäcilie M. y Sobre la psicoterapia de la histeria (OC, T. II) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1893-95',
            tipo: 'Obligatoria',
            unidad: 'Eje I · Conflicto psíquico, psicoterapia de la histeria y neuropsicosis de defensa'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Cinco conferencias sobre psicoanálisis (II) (OC, T. XI, pp. 21–22) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1910',
            tipo: 'Obligatoria',
            unidad: 'Eje I · Conflicto psíquico, psicoterapia de la histeria y neuropsicosis de defensa'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Las neuropsicosis de defensa (OC, T. III, pp. 41–61) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1894',
            tipo: 'Obligatoria',
            unidad: 'Eje I · Conflicto psíquico, psicoterapia de la histeria y neuropsicosis de defensa'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Nuevas puntualizaciones sobre las neuropsicosis de defensa (OC, T. III, pp. 163–174) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1896',
            tipo: 'Obligatoria',
            unidad: 'Eje I · Conflicto psíquico, psicoterapia de la histeria y neuropsicosis de defensa'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Proyecto de psicología (La proton pseudos histérica: Emma) y Manuscrito K (OC, T. I) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1950 [1895-96]',
            tipo: 'Obligatoria',
            unidad: 'Eje I · Conflicto psíquico, psicoterapia de la histeria y neuropsicosis de defensa'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La etiología de la histeria (OC, T. III, pp. 191–218) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1896',
            tipo: 'Obligatoria',
            unidad: 'Eje I · Conflicto psíquico, psicoterapia de la histeria y neuropsicosis de defensa'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Psicopatología de la vida cotidiana: I. El olvido de nombres propios (Signorelli) y IV. Recuerdos encubridores (OC, T. VI) [Seminarios y Prácticos · trad. crítica]',
            editorial: 'Amorrortu',
            año: '1901',
            tipo: 'Obligatoria',
            unidad: 'Eje II · Formaciones del inconsciente: olvido de nombres, recuerdos y chiste'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El chiste y su relación con lo inconsciente: II. La técnica del chiste — Familionario (OC, T. VIII, pp. 18–21 y 46–54) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1905',
            tipo: 'Obligatoria',
            unidad: 'Eje II · Formaciones del inconsciente: olvido de nombres, recuerdos y chiste'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La interpretación de los sueños: Caps. IV, VI (El trabajo del sueño) y VII, puntos A, B, C y E (OC, T. IV y V) [Teóricos, Seminarios y Prácticos · trad. crítica]',
            editorial: 'Amorrortu',
            año: '1900',
            tipo: 'Obligatoria',
            unidad: 'Eje III · Sueños, aparato psíquico, vivencia de satisfacción y 1° ordenamiento'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre el sueño (OC, T. V, pp. 651–652 y 655) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1901',
            tipo: 'Obligatoria',
            unidad: 'Eje III · Sueños, aparato psíquico, vivencia de satisfacción y 1° ordenamiento'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Carta 52 (OC, T. I, pp. 274–277 y 280) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1950 [1896]',
            tipo: 'Obligatoria',
            unidad: 'Eje III · Sueños, aparato psíquico, vivencia de satisfacción y 1° ordenamiento'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Conferencias de introducción al psicoanálisis (Parte II. El sueño: 7ª, 9ª, 11ª, 14ª y 15ª) (OC, T. XV) [Teóricos, Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1916-17',
            tipo: 'Obligatoria',
            unidad: 'Eje III · Sueños, aparato psíquico, vivencia de satisfacción y 1° ordenamiento'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El interés del psicoanálisis, Cap. II, punto A (OC, T. XIII, pp. 179–181) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1913',
            tipo: 'Obligatoria',
            unidad: 'Eje III · Sueños, aparato psíquico, vivencia de satisfacción y 1° ordenamiento'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Tres ensayos de teoría sexual (Cap. I puntos 4–5, Cap. II y Cap. III punto 5) (OC, T. VII) [Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1905',
            tipo: 'Obligatoria',
            unidad: 'Eje IV · Sexualidad, fantasía, pulsión y primer dualismo pulsional'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Mis tesis sobre el papel de la sexualidad en la etiología de las neurosis (OC, T. VII, pp. 263–271) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1906',
            tipo: 'Obligatoria',
            unidad: 'Eje IV · Sexualidad, fantasía, pulsión y primer dualismo pulsional'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Fragmento de análisis de un caso de histeria — Caso Dora (OC, T. VII, pp. 21–22, 36–38, 42–43 y 46) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1905',
            tipo: 'Obligatoria',
            unidad: 'Eje IV · Sexualidad, fantasía, pulsión y primer dualismo pulsional'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El esclarecimiento sexual del niño, El creador literario y el fantaseo y Sobre las teorías sexuales infantiles (OC, T. IX) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1907–1908',
            tipo: 'Obligatoria',
            unidad: 'Eje IV · Sexualidad, fantasía, pulsión y primer dualismo pulsional'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Cinco conferencias sobre psicoanálisis (IV) (OC, T. XI, pp. 36–44) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1910',
            tipo: 'Obligatoria',
            unidad: 'Eje IV · Sexualidad, fantasía, pulsión y primer dualismo pulsional'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Experiencias y ejemplos extraídos de la práctica analítica: Pies (zapatos) abochornados (OC, T. XIII, pp. 199–200) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1913',
            tipo: 'Obligatoria',
            unidad: 'Eje IV · Sexualidad, fantasía, pulsión y primer dualismo pulsional'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Pulsiones y destinos de pulsión (OC, T. XIV, pp. 113–134) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Eje IV · Sexualidad, fantasía, pulsión y primer dualismo pulsional'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Nota sobre el concepto de lo inconsciente en psicoanálisis (OC, T. XII, pp. 271–277) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1912',
            tipo: 'Obligatoria',
            unidad: 'Eje V · Segundo ordenamiento metapsicológico, narcisismo y ganancia de enfermedad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La represión (OC, T. XIV, pp. 141–152) [Teóricos, Seminarios y Prácticos · trad. crítica]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Eje V · Segundo ordenamiento metapsicológico, narcisismo y ganancia de enfermedad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Lo inconsciente, Caps. II a VII (OC, T. XIV) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Eje V · Segundo ordenamiento metapsicológico, narcisismo y ganancia de enfermedad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Tótem y tabú, Cap. IV, puntos 5 y 6 (OC, T. XIII, pp. 142–152) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1913',
            tipo: 'Obligatoria',
            unidad: 'Eje V · Segundo ordenamiento metapsicológico, narcisismo y ganancia de enfermedad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La perturbación psicógena de la visión según el psicoanálisis (OC, T. XI, pp. 209–216) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1910',
            tipo: 'Obligatoria',
            unidad: 'Eje V · Segundo ordenamiento metapsicológico, narcisismo y ganancia de enfermedad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Introducción del narcisismo (OC, T. XIV, pp. 71–98) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1914',
            tipo: 'Obligatoria',
            unidad: 'Eje V · Segundo ordenamiento metapsicológico, narcisismo y ganancia de enfermedad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Conferencias de introducción al psicoanálisis: 17ª, 18ª, 19ª, 20ª, 21ª, 22ª, 23ª y 26ª (OC, T. XVI) [Teóricos, Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1917',
            tipo: 'Obligatoria',
            unidad: 'Eje V · Segundo ordenamiento metapsicológico, narcisismo y ganancia de enfermedad'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre la dinámica de la transferencia (OC, T. XII, pp. 97–105) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1912',
            tipo: 'Obligatoria',
            unidad: 'Eje VI · Las transferencias freudianas: motor y obstáculo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre la iniciación del tratamiento (OC, T. XII, pp. 138–140) [Prácticos]',
            editorial: 'Amorrortu',
            año: '1913',
            tipo: 'Obligatoria',
            unidad: 'Eje VI · Las transferencias freudianas: motor y obstáculo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Recordar, repetir, reelaborar (OC, T. XII, pp. 145–157) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1914',
            tipo: 'Obligatoria',
            unidad: 'Eje VI · Las transferencias freudianas: motor y obstáculo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Puntualizaciones sobre el amor de transferencia (OC, T. XII, pp. 170–171) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1915',
            tipo: 'Obligatoria',
            unidad: 'Eje VI · Las transferencias freudianas: motor y obstáculo'
          },
          {
            autor: 'Freud, S.',
            titulo: '27ª Conferencia: La transferencia (OC, T. XVI, pp. 398–406) [Teóricos]',
            editorial: 'Amorrortu',
            año: '1917',
            tipo: 'Obligatoria',
            unidad: 'Eje VI · Las transferencias freudianas: motor y obstáculo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Más allá del principio de placer, puntos I al VI (OC, T. XVIII) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1920',
            tipo: 'Obligatoria',
            unidad: 'Eje VII · Más allá del principio de placer y pulsión de muerte'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El problema económico del masoquismo (OC, T. XIX, pp. 166–172) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1924',
            tipo: 'Obligatoria',
            unidad: 'Eje VII · Más allá del principio de placer y pulsión de muerte'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El malestar en la cultura, Cap. VI (OC, T. XXI, pp. 113–115) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1930',
            tipo: 'Obligatoria',
            unidad: 'Eje VII · Más allá del principio de placer y pulsión de muerte'
          },
          {
            autor: 'Freud, S.',
            titulo: '29ª Conferencia (Revisión de la doctrina de los sueños) y 32ª Conferencia (Angustia y vida pulsional) (OC, T. XXII) [Teóricos, Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1933',
            tipo: 'Obligatoria',
            unidad: 'Eje VII · Más allá del principio de placer y pulsión de muerte'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Manuscrito E (OC, T. I, pp. 228–232 y 234) [Seminarios · 1ª teoría de la angustia]',
            editorial: 'Amorrortu',
            año: '1950 [1894]',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre la justificación de separar de la neurastenia un determinado síndrome en calidad de «neurosis de angustia» (OC, T. III, pp. 107–111) [Seminarios · 1ª teoría]',
            editorial: 'Amorrortu',
            año: '1895',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre el psicoanálisis silvestre (OC, T. XI, pp. 221–223) [Seminarios · 2ª teoría]',
            editorial: 'Amorrortu',
            año: '1910',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: '25ª Conferencia: La angustia (OC, T. XVI, pp. 365–368 y 372–374) [Seminarios · 2ª teoría]',
            editorial: 'Amorrortu',
            año: '1917',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: '«Pegan a un niño» (OC, T. XVII, pp. 177–200) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1919',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La organización genital infantil, El sepultamiento del complejo de Edipo y Algunas consecuencias psíquicas de la diferencia anatómica entre los sexos (OC, T. XIX) [Teóricos y Seminarios]',
            editorial: 'Amorrortu',
            año: '1923–1925',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: '33ª Conferencia: La feminidad (OC, T. XXII, pp. 104–125) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1933',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Inhibición, síntoma y angustia: Caps. IV, V, VII, VIII y XI Addenda (OC, T. XX) [Teóricos, Seminarios y Prácticos · 3ª teoría]',
            editorial: 'Amorrortu',
            año: '1926',
            tipo: 'Obligatoria',
            unidad: 'Eje VIII · Seminarios: Tres teorías de la angustia, Edipo, castración y sexualidad femenina'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Psicología de las masas y análisis del yo, Cap. VII: La identificación (OC, T. XVIII, pp. 99–104) [Seminarios]',
            editorial: 'Amorrortu',
            año: '1921',
            tipo: 'Obligatoria',
            unidad: 'Eje IX · Segunda tópica, escisión del yo y dirección de la práctica'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El yo y el ello, Caps. I, II, III y V (OC, T. XIX) [Teóricos, Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1923',
            tipo: 'Obligatoria',
            unidad: 'Eje IX · Segunda tópica, escisión del yo y dirección de la práctica'
          },
          {
            autor: 'Freud, S.',
            titulo: '28ª Conferencia: La terapia analítica (OC, T. XVI, pp. 411–416) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1917',
            tipo: 'Obligatoria',
            unidad: 'Eje IX · Segunda tópica, escisión del yo y dirección de la práctica'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Análisis terminable e interminable, Caps. II, III, V, VI y VIII (OC, T. XXIII) [Teóricos y Prácticos]',
            editorial: 'Amorrortu',
            año: '1937',
            tipo: 'Obligatoria',
            unidad: 'Eje IX · Segunda tópica, escisión del yo y dirección de la práctica'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La escisión del yo en el proceso defensivo y Esquema del psicoanálisis (OC, T. XXIII) [Teóricos, Seminarios y Prácticos]',
            editorial: 'Amorrortu',
            año: '1940',
            tipo: 'Obligatoria',
            unidad: 'Eje IX · Segunda tópica, escisión del yo y dirección de la práctica'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Obras completas (bibliografía electiva general)',
            editorial: 'Amorrortu',
            año: '1886–1940',
            tipo: 'Complementaria'
          },
          {
            autor: 'Breuer, J. y Freud, S.',
            titulo: 'Estudios sobre la histeria: Comunicación preliminar y Señorita Anna O. (OC, T. II)',
            editorial: 'Amorrortu',
            año: '1893–1895',
            tipo: 'Complementaria'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Análisis de la fobia de un niño de cinco años (el pequeño Hans) y A propósito de un caso de neurosis obsesiva (Hombre de las Ratas) (OC, T. X)',
            editorial: 'Amorrortu',
            año: '1909',
            tipo: 'Complementaria'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Caso Schreber (OC, T. XII) y De la historia de una neurosis infantil — Hombre de los Lobos (OC, T. XVII)',
            editorial: 'Amorrortu',
            año: '1911 / 1918',
            tipo: 'Complementaria'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre la sexualidad femenina (OC, T. XXI)',
            editorial: 'Amorrortu',
            año: '1931',
            tipo: 'Complementaria'
          },
          {
            autor: 'Sófocles',
            titulo: 'Edipo Rey (en Tragedias)',
            editorial: 'Editorial Edaf',
            año: '1985',
            tipo: 'Complementaria'
          }
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
    descripcion:
      'Estudio de las bases neurobiológicas, neuroanatómicas y psicofisiológicas del comportamiento humano —única materia obligatoria del área Biología/Psicobiología— articulando la organización celular y sistémica del sistema nervioso con los procesos sensoriales, motores, cognitivos, afectivos y motivacionales.',
    objetivos: [
      'Comprender la estructura macroscópica y microscópica del sistema nervioso y los mecanismos de comunicación neuronal y sináptica.',
      'Analizar la relación no reduccionista entre los niveles neural, cognitivo y conductual en procesos como atención, percepción, memoria, lenguaje, emociones y homeostasis.',
      'Incorporar el lenguaje neurocientífico y el análisis de alteraciones neurológicas y neuropsicológicas para el trabajo clínico, de investigación e interdisciplinario.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 048)',
        titular: 'Norma Nancy China',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=48&anio=2026&cuatrimestre=2',
        enfoque:
          'Enfoque contemporáneo de Neurociencias y Neuropsicología cognitiva no reduccionista (tradición Ferreres/China) que articula niveles conductual, cognitivo y neural, cuestionando neuromitos. Organizada en 4 partes y 13 temas con materiales propios de cátedra: introducción y niveles de análisis; anatomía y organización neuronal, sináptica, somatomotora/somatosensitiva y cortical; plasticidad en Aplysia y neurodesarrollo; y sistemas funcionales (alerta y atención, visión y agnosias, memoria y amnesias, lenguaje y afasias, control homeostático, emociones/miedo y cerebro social: empatía y mentalización). Incluye videos obligatorios, casos clínicos de pacientes lesionados en prácticos, autoevaluaciones en Aula Virtual y clases de consulta pre-parcial.',
        evaluacion:
          'Clases teóricas + Comisiones de Trabajos Prácticos (contenidos coordinados no superpuestos). 2 parciales individuales presenciales escritos multiple-choice de 30 preguntas en horario de prácticos (sin resta por error; 4 con 15–16 correctas, 7 con 22–23, 10 con 29–30). Se puede recuperar 1 parcial por ausencia y 1 por aplazo. Promoción sin examen final con ≥ 7 en ambos parciales (sin recuperatorio por aplazo) + 75% asistencia en teóricos y 75% en prácticos. Examen final: 50 preguntas multiple-choice (4 con 25–27 correctas; con 24 se puede pedir repechaje oral el mismo día).',
        bibliografia: [
          // Parte I
          {
            unidad: 'Parte I · Introducción: Psicología, Neurociencias y niveles de análisis (Temas 1 y 2)',
            autor: 'Ferreres, A.',
            titulo: 'Introducción: Psicología y Neurociencias [Teórico 1 + video obligatorio]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte I · Introducción: Psicología, Neurociencias y niveles de análisis (Temas 1 y 2)',
            autor: 'Ferreres, A.',
            titulo: 'Niveles de análisis de la conducta. Niveles de organización del sistema nervioso [Teórico 2]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          // Parte II
          {
            unidad: 'Parte II · Estructura y principios de organización del sistema nervioso (Temas 3, 4 y 5)',
            autor: 'Ferreres, A.',
            titulo: 'Anatomía del sistema nervioso humano. Modelo funcional del sistema nervioso [Práctico 1]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte II · Estructura y principios de organización del sistema nervioso (Temas 3, 4 y 5)',
            autor: 'Ferreres, A.',
            titulo: 'Niveles de organización de menor escala espacial. Nivel neuronal [Práctico 2]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte II · Estructura y principios de organización del sistema nervioso (Temas 3, 4 y 5)',
            autor: 'Ferreres, A.',
            titulo: 'Niveles de organización de menor escala espacial. Niveles sináptico y molecular [Práctico 3]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte II · Estructura y principios de organización del sistema nervioso (Temas 3, 4 y 5)',
            autor: 'Ferreres, A. y Margulis, L.',
            titulo: 'Niveles de organización de mayor escala espacial. El nivel de los sistemas: sistema somatomotor y somatosensitivo [Teórico 3 + video obligatorio]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte II · Estructura y principios de organización del sistema nervioso (Temas 3, 4 y 5)',
            autor: 'Ferreres, A.',
            titulo: 'Niveles de organización de mayor escala espacial. El nivel de las regiones corticales: mapas topográficos, láminas y columnas [Teórico 4]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          // Parte III
          {
            unidad: 'Parte III · Interacción genética-ambiente, plasticidad y neurodesarrollo (Temas 6 y 7)',
            autor: 'Ferreres, A.',
            titulo: 'Habituación y sensibilización en Aplysia [Práctico 4]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte III · Interacción genética-ambiente, plasticidad y neurodesarrollo (Temas 6 y 7)',
            autor: 'Ferreres, A.',
            titulo: 'Neurodesarrollo [Teórico 5]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          // Parte IV
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'Ferreres, A.',
            titulo: 'Sistemas de alerta y atención [Práctico 5]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'China, N.',
            titulo: 'El sistema visual [Teórico 6]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'Ferreres, A., Margulis, L., Rodríguez, M. y Squillace, M.',
            titulo: 'Alteraciones de la percepción y el reconocimiento visual. Agnosia visual [Práctico 6]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'Ferreres, A.',
            titulo: 'Memoria y cerebro. Alteraciones de la memoria en humanos [Teórico 7 y Práctico 7]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'Jacubovich, S. y China, N.',
            titulo: 'Cerebro y lenguaje. Afasia, modelo clásico [Teórico 8 y Práctico 8]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'Ferreres, A., Sampedro, B. y Abusamra, V.',
            titulo: 'Cerebro y lenguaje. Crisis del modelo clásico y lesiones del hemisferio derecho [Teórico 8]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'China, N.',
            titulo: 'Sistemas de control homeostático [Teórico 9]',
            editorial: 'Material de la cátedra',
            año: '2026',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'Rodríguez, M. y Ferreres, A.',
            titulo: 'Emoción y cerebro. Condicionamiento del miedo. Neuropsicología de las emociones [Teórico 10 y Práctico 9]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Parte IV · Sistemas funcionales: atención, visión, memoria, lenguaje, emoción y cerebro social (Temas 8 a 13)',
            autor: 'Ferreres, A.',
            titulo: 'El cerebro social: empatía y mentalización [Teórico 11]',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Obligatoria'
          },
          // Complementaria destacada Cátedra I
          {
            autor: 'Kandel, E. R., Schwartz, J. H. y Jessell, T. M. (Eds.)',
            titulo: 'Principios de Neurociencia (4ª ed.)',
            editorial: 'McGraw-Hill',
            año: '2001',
            tipo: 'Complementaria'
          },
          {
            autor: 'Pinel, J.',
            titulo: 'Biopsicología (4ª ed.)',
            editorial: 'Prentice Hall',
            año: '2001',
            tipo: 'Complementaria'
          },
          {
            autor: 'Kandel, E. R., Schwartz, J. H. y Jessell, T. M. (Eds.)',
            titulo: 'Neurociencia y conducta (4ª ed.)',
            editorial: 'Prentice Hall',
            año: '1997',
            tipo: 'Complementaria'
          },
          {
            autor: 'Dronkers, N., Pinker, S. y Damasio, A.',
            titulo: 'Lenguaje y afasias (en Principios de Neurociencia, pp. 1169–1185)',
            editorial: 'McGraw-Hill',
            año: '2001',
            tipo: 'Complementaria'
          },
          {
            autor: 'Ferreres, A.',
            titulo: 'Elementos de genética y epigenética (con video optativo)',
            editorial: 'Material de la cátedra',
            año: '2021',
            tipo: 'Complementaria'
          },
          {
            autor: 'Kennedy, D. P. y Adolphs, R.',
            titulo: 'The social brain in psychiatric and neurological disorders',
            editorial: 'Trends in Cognitive Sciences, 16(11), 559–572',
            año: '2012',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 123)',
        titular: 'María del Pilar Kufa',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=123&anio=2026&cuatrimestre=2',
        enfoque:
          'Enfoque psicobiológico y fisiológico no reduccionista apoyado en manuales internacionales de referencia (Carlson, Bear/Connors/Paradiso, Purves, Guyton, Rosenzweig & Leiman, Carpenter, Curtis, Kandel y LeDoux) combinado con relatos clínicos de Oliver Sacks en prácticos ("El hombre que confundió a su mujer con un sombrero"). Enmarca el sistema nervioso desde el método científico, la evolución (filogenia y ontogenia), la teoría de sistemas y el control/información, con amplio desarrollo de neuroanatomía macroscópica, fisiología neuronal y sináptica, sistemas sensitivos y motores, homeostasis, ritmos biológicos y sueño, conducta motivacional (alimentación, sed, conducta sexual y maternal), emociones, estrés/enfermedades psicosomáticas y psicofarmacología de trastornos psicopatológicos (esquizofrenia, depresión, adicciones). Incluye seminarios especiales optativos interdisciplinarios.',
        evaluacion:
          'Dictado 1° y 2° cuatrimestre. 75% de asistencia obligatoria en clases teóricas y en trabajos prácticos. 2 exámenes parciales escritos individuales en horario de prácticos (TP 8 y TP 14), con posibilidad de recuperar solo uno (si se recupera, se pierde la promoción directa). Promoción sin examen final con ≥ 7 en ambos parciales (sin recuperatorio) + 75% asistencia. Regularidad con final con ≥ 4 en ambos parciales + examen final escrito u oral (≥ 4). Admite examen libre (escrito y oral).',
        bibliografia: [
          // Bloque 1
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'Carlson, N. R.',
            titulo: 'Métodos y estrategias de investigación (en Fundamentos de Psicología Fisiológica, pp. 110–139) [Teórico 1]',
            editorial: 'Prentice Hall',
            año: '1996',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'House, E. L. y Pansky, B.',
            titulo: 'Evolución del sistema nervioso (en Neuroanatomía. Un enfoque funcional, pp. 1–8) [Teórico 2]',
            editorial: 'López Libreros Editores',
            año: '1962',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'Rosenzweig, M. R. y Leiman, A. I.',
            titulo: 'Perspectivas comparadas y evolutiva / Desarrollo del SNC a lo largo del ciclo vital (en Psicología Fisiológica, pp. 79–156) [Teóricos 2 y 3]',
            editorial: 'McGraw-Hill',
            año: '1992',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'Guyton, A. C.',
            titulo: 'Anatomía macroscópica del SN I y II; Flujo sanguíneo cerebral, LCR y metabolismo encefálico (pp. 15–47 y 335–343) [Teórico 4 y TP 2–3]',
            editorial: 'Editorial Médica Panamericana',
            año: '1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'Carpenter, M. B.',
            titulo: 'Meninges, líquido cefalorraquídeo e irrigación sanguínea del SNC (en Neuroanatomía. Fundamentos, pp. 15–33 y 409–432) [Teórico 4]',
            editorial: 'Editorial Médica Panamericana',
            año: '1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'Bear, M. F., Connors, B. W. y Paradiso, M. A.',
            titulo: 'Neuronas y glía (en Neurociencia. Explorando el cerebro, pp. 22–45) [TP 1]',
            editorial: 'Masson',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'Curtis, H.',
            titulo: 'Integración y control I: El sistema nervioso (en Biología animal, pp. 836–846) [TP 1]',
            editorial: 'Panamericana',
            año: '1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Introducción, filogenia, ontogenia y bases metabólicas del SNC (Teóricos 1–4 y TP 1–3)',
            autor: 'Purves, D., Augustine, G., Fitzpatrick, D., Katz, L., LaMantia, A.-S. y McNamara, J.',
            titulo: 'Organización del sistema nervioso (en Invitación a la Neurociencia, pp. 1–27) [TP 2–3]',
            editorial: 'Editorial Médica Panamericana',
            año: '2001',
            tipo: 'Obligatoria'
          },
          // Bloque 2
          {
            unidad: 'Bloque 2 · Fisiología neuronal y transmisión sináptica (TP 4–6)',
            autor: 'Bear, M. F., Connors, B. W. y Paradiso, M. A.',
            titulo: 'Membrana neuronal en reposo y Potencial de acción (en Neurociencia. Explorando el cerebro, pp. 48–90) [TP 4]',
            editorial: 'Masson',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 2 · Fisiología neuronal y transmisión sináptica (TP 4–6)',
            autor: 'Purves, D., Augustine, G., Fitzpatrick, D., Katz, L., LaMantia, A.-S. y McNamara, J.',
            titulo: 'Permeabilidad de membrana voltaje-dependiente y Canales y bombas (en Invitación a la Neurociencia, pp. 55–91) [TP 4]',
            editorial: 'Editorial Médica Panamericana',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 2 · Fisiología neuronal y transmisión sináptica (TP 4–6)',
            autor: 'Bear, M. F., Connors, B. W. y Paradiso, M. A.',
            titulo: 'Transmisión sináptica y Sistemas de neurotransmisores (en Neurociencia. Explorando el cerebro, pp. 91–149) [TP 5–6]',
            editorial: 'Masson',
            año: '1998',
            tipo: 'Obligatoria'
          },
          // Bloque 3
          {
            unidad: 'Bloque 3 · Sistemas sensitivos, percepción visual y control del movimiento (Teóricos 6–7 y TP 7)',
            autor: 'Bear, M. F., Connors, B. W. y Paradiso, M. A.',
            titulo: 'Sistema sensorial somático (en Neurociencia. Explorando el cerebro, pp. 309–343) [TP 7]',
            editorial: 'Masson',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Sistemas sensitivos, percepción visual y control del movimiento (Teóricos 6–7 y TP 7)',
            autor: 'Cátedra II',
            titulo: 'Generalidades de los Sistemas Sensoriales [TP 7]',
            editorial: 'Ficha de la cátedra',
            año: '2026',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Sistemas sensitivos, percepción visual y control del movimiento (Teóricos 6–7 y TP 7)',
            autor: 'Purves, D., Augustine, G., Fitzpatrick, D., Katz, L., LaMantia, A.-S. y McNamara, J.',
            titulo: 'Dolor (en Invitación a la Neurociencia, pp. 181–194) [TP 7]',
            editorial: 'Editorial Médica Panamericana',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Sistemas sensitivos, percepción visual y control del movimiento (Teóricos 6–7 y TP 7)',
            autor: 'Sacks, O.',
            titulo: 'La dama desencarnada (en El hombre que confundió a su mujer con un sombrero, pp. 68–81) [TP 7]',
            editorial: 'Anagrama',
            año: '2002',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Sistemas sensitivos, percepción visual y control del movimiento (Teóricos 6–7 y TP 7)',
            autor: 'Carlson, N. R.',
            titulo: 'Visión (pp. 140–174) y Control del movimiento (pp. 209–229) (en Fundamentos de Psicología Fisiológica) [Teóricos 6 y 7]',
            editorial: 'Prentice Hall',
            año: '1996',
            tipo: 'Obligatoria'
          },
          // Bloque 4
          {
            unidad: 'Bloque 4 · Conciencia, atención, procesos cognitivos, lenguaje y memoria (Teóricos 8–10 y TP 9–11)',
            autor: 'Bear, M. F., Connors, B. W. y Paradiso, M. A.',
            titulo: 'Lenguaje y atención (pp. 601–614) y Mecanismos sinápticos de la memoria (pp. 546–575) [Teórico 8 y TP 10–11]',
            editorial: 'Masson',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Conciencia, atención, procesos cognitivos, lenguaje y memoria (Teóricos 8–10 y TP 9–11)',
            autor: 'Purves, D., Augustine, G., Fitzpatrick, D., Katz, L., LaMantia, A.-S. y McNamara, J.',
            titulo: 'Sueño y vigilia (en Invitación a la Neurociencia, pp. 544–545 y 555) [Teórico 8]',
            editorial: 'Editorial Médica Panamericana',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Conciencia, atención, procesos cognitivos, lenguaje y memoria (Teóricos 8–10 y TP 9–11)',
            autor: 'Carlson, N. R.',
            titulo: 'Comunicación humana (pp. 417–447) y Aprendizaje y memoria (pp. 375–416) (en Fundamentos de Psicología Fisiológica) [Teóricos 9 y 10]',
            editorial: 'Prentice Hall',
            año: '1996',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Conciencia, atención, procesos cognitivos, lenguaje y memoria (Teóricos 8–10 y TP 9–11)',
            autor: 'Kandel, E. R., Jessell, T. M. y Schwartz, J. H.',
            titulo: 'Cognición y ciencia (en Neurociencia y Conducta, pp. 373–390) [Teórico 9]',
            editorial: 'Prentice Hall',
            año: '1997',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Conciencia, atención, procesos cognitivos, lenguaje y memoria (Teóricos 8–10 y TP 9–11)',
            autor: 'Sacks, O.',
            titulo: 'El hombre que confundió a su mujer con un sombrero (pp. 27–43) y El marinero perdido (pp. 44–67) [TP 9 y TP 10–11]',
            editorial: 'Anagrama',
            año: '2002',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Conciencia, atención, procesos cognitivos, lenguaje y memoria (Teóricos 8–10 y TP 9–11)',
            autor: 'Cátedra II',
            titulo: 'Trabajo Práctico de la Cátedra sobre lenguaje [TP 9]',
            editorial: 'Material de la cátedra',
            año: '2026',
            tipo: 'Obligatoria'
          },
          // Bloque 5
          {
            unidad: 'Bloque 5 · Homeostasis, ritmos biológicos, sueño y conducta motivacional (Teóricos 5, 11 y 12)',
            autor: 'Guyton, A. C.',
            titulo: 'Sistema nervioso autónomo (pp. 321–334), Control hipotalámico e hipofisario (pp. 431–441) y Estados de actividad encefálica: sueño y ondas cerebrales (pp. 311–320) [Teóricos 5 y 11]',
            editorial: 'Editorial Médica Panamericana',
            año: '1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 5 · Homeostasis, ritmos biológicos, sueño y conducta motivacional (Teóricos 5, 11 y 12)',
            autor: 'Bear, M. F., Connors, B. W. y Paradiso, M. A.',
            titulo: 'Control químico del cerebro y conducta (en Neurociencia. Explorando el cerebro, pp. 402–430) [Teórico 5]',
            editorial: 'Masson',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 5 · Homeostasis, ritmos biológicos, sueño y conducta motivacional (Teóricos 5, 11 y 12)',
            autor: 'Carlson, N. R.',
            titulo: 'Sueño (pp. 233–267), Conducta reproductiva (pp. 268–303) y Conducta ingestiva (pp. 340–374) (en Fundamentos de Psicología Fisiológica) [Teóricos 11 y 12]',
            editorial: 'Prentice Hall',
            año: '1996',
            tipo: 'Obligatoria'
          },
          // Bloque 6
          {
            unidad: 'Bloque 6 · Emociones, estrés, enfermedades psicosomáticas y psicofarmacología (Teórico 13 y TP 12–13)',
            autor: 'Bear, M. F., Connors, B. W. y Paradiso, M. A.',
            titulo: 'Mecanismos cerebrales de las emociones (en Neurociencia. Explorando el cerebro, pp. 432–455) [Teórico 13]',
            editorial: 'Masson',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 6 · Emociones, estrés, enfermedades psicosomáticas y psicofarmacología (Teórico 13 y TP 12–13)',
            autor: 'LeDoux, J. E.',
            titulo: 'Emoción, Memoria y Cerebro [Teórico 13]',
            editorial: 'Investigación y Ciencia, 215, 38–45',
            año: '1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 6 · Emociones, estrés, enfermedades psicosomáticas y psicofarmacología (Teórico 13 y TP 12–13)',
            autor: 'Purves, D., Augustine, G., Fitzpatrick, D., Katz, L., LaMantia, A.-S. y McNamara, J.',
            titulo: 'Emociones (en Invitación a la Neurociencia, pp. 559 y 574) [Teórico 13]',
            editorial: 'Editorial Médica Panamericana',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 6 · Emociones, estrés, enfermedades psicosomáticas y psicofarmacología (Teórico 13 y TP 12–13)',
            autor: 'Carlson, N. R.',
            titulo: 'Emociones y estrés (pp. 305–339), Drogas y conducta (pp. 60–83) y Desórdenes mentales (pp. 470–504) (en Fundamentos de Psicología Fisiológica) [TP 12 y TP 13]',
            editorial: 'Prentice Hall',
            año: '1996',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 6 · Emociones, estrés, enfermedades psicosomáticas y psicofarmacología (Teórico 13 y TP 12–13)',
            autor: 'Curtis, H.',
            titulo: 'Integración y control II: El sistema endócrino (en Biología animal, pp. 851–870) [TP 12]',
            editorial: 'Panamericana',
            año: '1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 6 · Emociones, estrés, enfermedades psicosomáticas y psicofarmacología (Teórico 13 y TP 12–13)',
            autor: 'Cátedra II',
            titulo: 'Ficha de la Cátedra sobre Estrés [TP 12]',
            editorial: 'Material de la cátedra',
            año: '2026',
            tipo: 'Obligatoria'
          }
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
    correlativas: ['Procesos Psicológicos Básicos'],
    descripcion:
      'Estudio histórico y crítico de la constitución de la psicología como disciplina y profesión —desde las pasiones y la subjetividad moderna hasta el campo psi contemporáneo y su desarrollo en la Argentina— articulando historia intelectual y trabajo con fuentes primarias.',
    objetivos: [
      'Comprender los problemas históricos de la constitución de la psicología como disciplina científica y como profesión moderna y contemporánea.',
      'Incorporar herramientas historiográficas críticas para leer, contextualizar e interrogar fuentes primarias y relatos establecidos.',
      'Analizar la singularidad histórica del surgimiento, institucionalización y debates del campo psi en la Argentina.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 118)',
        titular: 'Marcela Patricia Borinsky',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=118&anio=2026&cuatrimestre=2',
        enfoque:
          'Historia intelectual e historia crítica (Foucault, Danziger, Rose): cruces entre discursos, instituciones, subjetividades, género/sexualidad, pasaje de la higiene a la salud mental e historia de la psicología argentina (1900–1983). Incluye 6 seminarios temáticos optativos (Freud/Jung, trauma, psicología argentina, Foucault/Hadot, familia y analítica del poder).',
        evaluacion:
          '2 hs teóricas + 2 hs seminario de profundización (informe escrito de 5–10 págs.) + 2 hs prácticos. 2 parciales escritos individuales + informe de seminario (el 1er parcial se promedia con el informe). Promoción sin final con ≥ 7 y 75% asistencia. Sitio de cátedra: www.elseminario.com.ar.',
        bibliografia: [
          // Unidad 1
          {
            unidad: 'Unidad 1 · Orígenes, historia crítica y el advenimiento del yo',
            autor: 'Danziger, K.',
            titulo: 'Nombrando la mente (Cap. 1, pp. 1–20)',
            editorial: 'SAGE / Trad. UNLP',
            año: '1997',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Orígenes, historia crítica y el advenimiento del yo',
            autor: 'Danziger, K.',
            titulo: 'La estructura social de la experimentación en Psicología (en Constructing the Subject, pp. 49–67)',
            editorial: 'Cambridge University Press / Cát. I UBA',
            año: '2007',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Orígenes, historia crítica y el advenimiento del yo',
            autor: 'Gusdorf, G.',
            titulo: 'El advenimiento del yo (Ed. P. Pavesi)',
            editorial: 'Miño y Dávila',
            año: '2022',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Orígenes, historia crítica y el advenimiento del yo',
            autor: 'Pavesi, P.',
            titulo: 'Precisiones en torno a la noción de historia crítica',
            editorial: 'Ficha docente, Cát. I UBA',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Orígenes, historia crítica y el advenimiento del yo',
            autor: 'Pavesi, P.',
            titulo: 'Dos momentos en la historia del yo. Montaigne y Rousseau',
            editorial: 'Ficha docente, Cát. I UBA',
            año: '2022',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Orígenes, historia crítica y el advenimiento del yo',
            autor: 'Rousseau, J.-J.',
            titulo: 'Confesiones (Libros I, IV, VII y VIII, selecc.)',
            editorial: 'Espasa-Calpe',
            año: '1782/1979',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Orígenes, historia crítica y el advenimiento del yo',
            autor: 'Vezzetti, H. y Talak, A. M.',
            titulo: 'Tres tradiciones en las psicologías del siglo XIX (en Problemas y perspectivas de una historia de la psicología, pp. 16–20)',
            editorial: 'Facultad de Psicología, UBA',
            año: '2005',
            tipo: 'Obligatoria'
          },
          // Unidad 2
          {
            unidad: 'Unidad 2 · Genealogía de las subjetividades: sexualidad, confesión y género',
            autor: 'Fausto-Sterling, A.',
            titulo: 'Cuerpos sexuados. La política de género y la construcción de la sexualidad (Caps. 1 y 2, pp. 15–63)',
            editorial: 'Melusina',
            año: '2006',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Genealogía de las subjetividades: sexualidad, confesión y género',
            autor: 'Foucault, M.',
            titulo: 'Historia de la sexualidad I. La voluntad de saber',
            editorial: 'Siglo XXI',
            año: '1977/2002',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Genealogía de las subjetividades: sexualidad, confesión y género',
            autor: 'Foucault, M.',
            titulo: 'Los anormales. Curso en el Collège de France (1974–1975). Clase del 22 de enero de 1975 (pp. 61–82)',
            editorial: 'FCE',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Genealogía de las subjetividades: sexualidad, confesión y género',
            autor: 'Foucault, M.',
            titulo: 'Los anormales. Curso en el Collège de France (1974–1975). Clases del 19 y 26 de febrero de 1975 (pp. 187–213)',
            editorial: 'FCE',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Genealogía de las subjetividades: sexualidad, confesión y género',
            autor: 'Molinari, V., Benítez, S. y Abeijón, M.',
            titulo: 'El sexo y el género como objetos de indagación histórica (Módulo Unidad 2)',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2023',
            tipo: 'Obligatoria'
          },
          // Unidad 3
          {
            unidad: 'Unidad 3 · De la higiene mental a la salud mental',
            autor: 'Chisholm, G. B.',
            titulo: 'Responsabilidad y psiquiatría',
            editorial: 'Revista de Psiquiatría y Criminología',
            año: '1946',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · De la higiene mental a la salud mental',
            autor: 'Dagfal, A. y Vezzetti, H.',
            titulo: 'Psicología, psiquiatría y salud mental (Módulo Unidad 4)',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2008',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · De la higiene mental a la salud mental',
            autor: 'Lacan, J.',
            titulo: 'La psiquiatría inglesa y la guerra (Autres écrits / Uno por uno, 40)',
            editorial: 'Seuil / Trad. Cát. I UBA',
            año: '1947/2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · De la higiene mental a la salud mental',
            autor: 'Menninger, W.',
            titulo: 'El papel de la psiquiatría en la actualidad (The American Journal of Psychiatry, 151)',
            editorial: 'Trad. Cát. I UBA',
            año: '1947',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · De la higiene mental a la salud mental',
            autor: 'Rose, N.',
            titulo: 'Introducción y Cap. 4: Los grupos en la guerra (en Governing the soul)',
            editorial: 'Routledge / Trad. Cát. I UBA',
            año: '1990/2004',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · De la higiene mental a la salud mental',
            autor: 'Vezzetti, H.',
            titulo: 'Interludio. Londres 1948 (en Psiquiatría, psicoanálisis y cultura comunista, Cap. 2, pp. 79–136)',
            editorial: 'Siglo XXI',
            año: '2016',
            tipo: 'Obligatoria'
          },
          // Unidad 4
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Bleger, J.',
            titulo: 'Introducción. Perspectivas del psicoanálisis y psicohigiene (en Psicohigiene y psicología institucional, pp. 21–23 y 168–202)',
            editorial: 'Paidós',
            año: '1966',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Borinsky, M.',
            titulo: 'Cuatro polémicas en la constitución de la psicología como profesión',
            editorial: 'Ficha docente, Cát. I UBA',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Carpintero, E. y Vainer, A.',
            titulo: 'Psicología: entre la represión y la resistencia (en Las huellas de la memoria, T. II: 1970–1983, pp. 342–355)',
            editorial: 'Topía',
            año: '2005',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Dagfal, A.',
            titulo: 'Breve historia de la psicología en la Argentina',
            editorial: 'Cát. I, Facultad de Psicología UBA',
            año: '2013',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Danis, J.',
            titulo: 'El psicólogo y el psicoanálisis',
            editorial: 'Revista Argentina de Psicología, 1(1), 75–82',
            año: '1969',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Goldenberg, M.',
            titulo: 'Proyecto de psicoterapia de grupo en un hospital general',
            editorial: 'Americalee',
            año: '1958',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Harari, R.',
            titulo: 'El psicoanálisis y la profesionalización del psicólogo',
            editorial: 'Revista Argentina de Psicología, 1(3), 147–159',
            año: '1970',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Vezzetti, H.',
            titulo: '1971. El psicoanálisis fracturado. Barquitos pintados. Experiencia Rosario',
            editorial: 'Revista de Especialización UNR, 5(5), 35–53',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · La psicología en la Argentina (1900–1983)',
            autor: 'Visacovsky, S.',
            titulo: 'Memoria y política en la construcción de una tradición psiquiátrica y psicoanalítica argentina (Cap. 2, pp. 82–119)',
            editorial: 'Alianza Estudio',
            año: '2002',
            tipo: 'Obligatoria'
          },
          // Bibliografía destacada de Seminarios y complementaria
          {
            autor: 'Hadot, P.',
            titulo: 'Diálogo interrumpido con Michel Foucault y Reflexiones sobre el concepto «cultivo del yo» (en Ejercicios espirituales y filosofía antigua, Sem. D)',
            editorial: 'Siruela',
            año: '2006',
            tipo: 'Complementaria'
          },
          {
            autor: 'Canguilhem, G.',
            titulo: '¿Qué es la psicología?',
            editorial: 'Facultad de Psicología, UBA',
            año: '1956/1994',
            tipo: 'Complementaria'
          },
          {
            autor: 'Butler, J.',
            titulo: 'El género en disputa. El feminismo y la subversión de la identidad',
            editorial: 'Paidós',
            año: '2007',
            tipo: 'Complementaria'
          },
          {
            autor: 'Deleuze, G.',
            titulo: 'Post-scriptum sobre las sociedades de control (Sem. F)',
            editorial: 'Pre-Textos',
            año: '1999',
            tipo: 'Complementaria'
          },
          {
            autor: 'Han, B.-Ch.',
            titulo: 'Psicopolítica (Sem. F)',
            editorial: 'Herder',
            año: '2015',
            tipo: 'Complementaria'
          },
          {
            autor: 'Masotta, O.',
            titulo: 'Jacques Lacan o el inconsciente en los fundamentos de la filosofía (Sem. C)',
            editorial: 'Anagrama',
            año: '1965/1976',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 034)',
        titular: 'María Florencia Ibarra',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=34&anio=2026&cuatrimestre=2',
        enfoque:
          'Eje temático en las Emociones y Pasiones con lectura directa de fuentes primarias originales (Descartes, Hume, Darwin, Wundt, James, Ribot, Skinner, Lewin, Wallon, Sartre y Freud), contextualizadas con historiografía crítica y seminarios de investigación sobre Historia de la Psicología en Argentina.',
        evaluacion:
          '2 hs teóricas + 2 hs prácticos + 2 hs seminario/taller (Trabajo de Investigación domiciliario tipo paper sobre fuente primaria). 1ª nota = promedio de Pregunta de elaboración presencial + Trabajo de Investigación; 2ª nota = Pregunta integradora presencial a libro cerrado. Promoción sin final con ≥ 7 y 75% asistencia.',
        bibliografia: [
          // Unidad 1
          {
            unidad: 'Unidad 1 · Ciencia, Historia y Psicología',
            autor: 'Cassani, J. L. y Pérez Amuchástegui, A. J.',
            titulo: 'Conocimiento sistemático de la historia [Prácticos]',
            editorial: 'Revista de Historia Americana y Argentina, III(5–6), 217–228',
            año: '1960–1961',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Ciencia, Historia y Psicología',
            autor: 'Foucault, M.',
            titulo: '¿Qué es un autor? (pp. 5–57) [Teóricos]',
            editorial: 'El cuenco de Plata',
            año: '1969/2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Ciencia, Historia y Psicología',
            autor: 'García de Onrubia, L. F.',
            titulo: 'Cuestiones previas al estudio de la Historia de la Psicología [Prácticos]',
            editorial: 'Thèsis, 1, 1–4',
            año: '1995',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Ciencia, Historia y Psicología',
            autor: 'Strasser, S.',
            titulo: 'Miseria y grandeza del hecho (en Tercer Coloquio filosófico de Royaumont, pp. 153–174) [Teóricos]',
            editorial: 'Paidós',
            año: '1968',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Ciencia, Historia y Psicología',
            autor: 'Tortosa, F., Mayor, L. y Carpintero, H.',
            titulo: 'La Historiografía de la Psicología: Orientaciones y Problemas (pp. 25–42) [Teóricos]',
            editorial: 'PPU',
            año: '1990',
            tipo: 'Obligatoria'
          },
          // Unidad 2
          {
            unidad: 'Unidad 2 · Las pasiones y emociones en los siglos XVII y XVIII',
            autor: 'Descartes, R.',
            titulo: 'El discurso del Método — Segunda parte [Teóricos]',
            editorial: 'Espasa Calpe',
            año: '1637/2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Las pasiones y emociones en los siglos XVII y XVIII',
            autor: 'Descartes, R.',
            titulo: 'Tratado de las Pasiones del alma [Prácticos]',
            editorial: 'Planeta',
            año: '1649/1994',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Las pasiones y emociones en los siglos XVII y XVIII',
            autor: 'Hume, D.',
            titulo: 'Tratado de la Naturaleza humana (Seccs. I, II, IV y Libro II, Parte 1ª) [Teóricos]',
            editorial: 'Editora Nacional',
            año: '1739/1981',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Las pasiones y emociones en los siglos XVII y XVIII',
            autor: 'Hume, D.',
            titulo: 'Disertación sobre las pasiones y otros ensayos morales [Prácticos]',
            editorial: 'Editorial del Hombre / MEC',
            año: '1757/1990',
            tipo: 'Obligatoria'
          },
          // Unidad 3
          {
            unidad: 'Unidad 3 · Emociones en los inicios de la Psicología disciplinar',
            autor: 'Civera, C., Pérez Delgado, E. y Tortosa, F.',
            titulo: 'El planteamiento de «lo psicológico» en la segunda mitad del siglo XIX (pp. 61–77) [Teóricos]',
            editorial: 'McGraw-Hill',
            año: '2006',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · Emociones en los inicios de la Psicología disciplinar',
            autor: 'Darwin, C.',
            titulo: 'La expresión de las emociones en los hombres y en los animales (Cap. 14: Consideraciones finales y resumen) [Teóricos]',
            editorial: 'Sarpe',
            año: '1872/1987',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · Emociones en los inicios de la Psicología disciplinar',
            autor: 'James, W.',
            titulo: '¿Qué es una emoción? [Teóricos]',
            editorial: 'Estudios de Psicología, 6(21), 57–73',
            año: '1884/1985',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · Emociones en los inicios de la Psicología disciplinar',
            autor: 'Ribot, T.',
            titulo: 'Ensayo sobre las pasiones [Prácticos]',
            editorial: 'Jorro Editores',
            año: '1907',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 3 · Emociones en los inicios de la Psicología disciplinar',
            autor: 'Wundt, W.',
            titulo: 'Compendio de Psicología (Objeto de la Psicología; Formaciones psíquicas; Emociones; Procesos volitivos) [Prácticos]',
            editorial: 'La España Moderna',
            año: '1896/1902',
            tipo: 'Obligatoria'
          },
          // Unidad 4
          {
            unidad: 'Unidad 4 · Las emociones en la consolidación disciplinar (siglo XX)',
            autor: 'Foucault, M.',
            titulo: 'La Psicología de 1850 a 1950 [Teóricos]',
            editorial: 'Archipiélago, 34–35, 163–173',
            año: '1998',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Las emociones en la consolidación disciplinar (siglo XX)',
            autor: 'Freud, S.',
            titulo: 'Lo inconsciente (Partes I–IV, Obras Completas Vol. 14, pp. 163–182) [Prácticos]',
            editorial: 'Amorrortu Editores',
            año: '1915/1984',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Las emociones en la consolidación disciplinar (siglo XX)',
            autor: 'Freud, S.',
            titulo: 'Pulsiones y sus destinos (Obras Completas Vol. 14) [Prácticos]',
            editorial: 'Amorrortu Editores',
            año: '1915/1984',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Las emociones en la consolidación disciplinar (siglo XX)',
            autor: 'Lewin, K.',
            titulo: 'Teoría del campo en la ciencia social (Cap. IV: La teoría del campo y del aprendizaje, pp. 68–90) [Prácticos]',
            editorial: 'Paidós',
            año: '1988',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Las emociones en la consolidación disciplinar (siglo XX)',
            autor: 'Sartre, J.-P.',
            titulo: 'Bosquejo de una Teoría de las Emociones [Prácticos]',
            editorial: 'Alianza Editorial',
            año: '1939/2005',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Las emociones en la consolidación disciplinar (siglo XX)',
            autor: 'Skinner, B. F.',
            titulo: 'Ciencia y Conducta Humana (Cap. X: Emoción, pp. 156–165) [Prácticos]',
            editorial: 'Fontanella',
            año: '1953/1971',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Las emociones en la consolidación disciplinar (siglo XX)',
            autor: 'Wallon, H.',
            titulo: 'Los orígenes del carácter en el niño (Caps. 4 y 5: Las emociones y sus fines sociales, pp. 81–101) [Prácticos]',
            editorial: 'Nueva Visión',
            año: '1934/1975',
            tipo: 'Obligatoria'
          },
          // Seminario Historia en Argentina
          {
            unidad: 'Seminario · Historia de la Psicología en Argentina',
            autor: 'Falcone, R.',
            titulo: 'Historia de una ley (en L. Rossi y colab., La Psicología antes de la profesión, pp. 65–78)',
            editorial: 'Eudeba',
            año: '1997',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Seminario · Historia de la Psicología en Argentina',
            autor: 'Miceli, C.',
            titulo: 'La Carrera de Psicología en la UBA',
            editorial: 'Acta Psiquiátrica y Psicológica de América Latina, 53(4), 272–278',
            año: '2007',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Seminario · Historia de la Psicología en Argentina',
            autor: 'Rodríguez Sturla, P. y Ferro, C.',
            titulo: 'El Laboratorio de Psicología de la Facultad de Filosofía y Letras, UBA (1902–1918)',
            editorial: 'Memorias XXV Jornadas de Investigación, UBA',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Seminario · Historia de la Psicología en Argentina',
            autor: 'Rossi, L.',
            titulo: 'Genealogía de tradiciones conceptuales en Psicología (en Psicología: su inscripción universitaria como profesión, pp. 29–44)',
            editorial: 'Eudeba',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Seminario · Historia de la Psicología en Argentina',
            autor: 'Rossi, L.',
            titulo: 'Itinerarios en paisajes conceptuales (en Psicología: su inscripción universitaria como profesión, pp. 47–58)',
            editorial: 'Eudeba',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Seminario · Historia de la Psicología en Argentina',
            autor: 'Rossi, L., Ibarra, M. F. y Ferro, C.',
            titulo: 'Historia de la Psicología en la Argentina',
            editorial: 'Revista Psicología para América Latina, 17',
            año: '2009',
            tipo: 'Obligatoria'
          },
          // Referencias complementarias clave del programa
          {
            autor: 'Canguilhem, G.',
            titulo: '¿Qué es la Psicología? (en Estudios de Historia y Filosofía de las ciencias, pp. 389–406)',
            editorial: 'Amorrortu Editores',
            año: '2009',
            tipo: 'Complementaria'
          },
          {
            autor: 'Dilthey, W.',
            titulo: 'La comprensión de otras personas y sus manifestaciones de vida (en Mundo Histórico)',
            editorial: 'FCE',
            año: '1944',
            tipo: 'Complementaria'
          },
          {
            autor: 'Jaspers, K.',
            titulo: 'Las relaciones comprensibles de la vida psíquica (en Psicopatología General, pp. 351–365)',
            editorial: 'FCE',
            año: '1913/1996',
            tipo: 'Complementaria'
          },
          {
            autor: 'Merleau-Ponty, M.',
            titulo: 'El mundo percibido y El sentir (en Fenomenología de la Percepción) / El cine y la nueva psicología',
            editorial: 'FCE / Península',
            año: '1945/1977',
            tipo: 'Complementaria'
          }
        ]
      }
    ]
  },
  {
    id: 'metodologia-inv',
    nombre: 'Metodología de la Investigación',
    año: 2,
    ciclo: 'Formación General',
    cuatrimestre: 1,
    correlativas: ['Procesos Psicológicos Básicos', 'Estadística'],
    descripcion:
      'Única materia obligatoria del plan de estudios orientada específicamente al método científico y al diseño de investigaciones en Psicología: aborda paradigmas cuantitativos, cualitativos y mixtos, operacionalización de variables, lectura crítica de artículos científicos, ética de la investigación y formulación del proyecto base para la Tesis de Licenciatura.',
    objetivos: [
      'Formular problemas de investigación psicológica, hipótesis y objetivos articulados con marcos conceptuales y antecedentes científicos actualizados.',
      'Distinguir y aplicar diseños cuantitativos (experimentales, cuasi-experimentales, correlacionales, descriptivos y de sujeto único), cualitativos (teoría fundamentada, hermenéuticos, IAP) y mixtos.',
      'Adquirir herramientas de búsqueda documental, operacionalización de datos, escritura científica (normas APA) y resguardos éticos aplicables al proyecto de Tesis de Licenciatura.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 061)',
        titular: 'Susana Celeste Azzollini',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=61&anio=2026&cuatrimestre=2',
        enfoque:
          'Adopta el modelo del «científico-practicante» (Modelo Boulder) articulando rigurosidad metodológica con ejercicio profesional y base concreta para la tesina de grado. Recorre abordajes cuantitativos (diseños experimentales, cuasi-experimentales, factoriales, de sujeto único, correlacionales y descriptivos con apoyo de software de análisis de datos), cualitativos (entrevistas en profundidad, teoría fundada y análisis del discurso descriptivo, axial y selectivo) y diseños mixtos, junto con lectura de papers, búsqueda en bases de datos científicas, sistema de Ciencia y Técnica argentino, ética y asesoramiento para el Congreso de Psicología de la Facultad.',
        evaluacion:
          'Dictado 1° y 2° cuatrimestre. 3 evaluaciones obligatorias: 2 exámenes parciales escritos individuales presenciales (TP VIII —hasta mitad de Unidad 3— y TP XII —integrador—) + evaluación pormenorizada del proyecto de investigación desarrollado en Comisión de Trabajos Prácticos (búsqueda en bases de datos, hipótesis, operacionalización, normas APA y exposición en TP XIII, 3ª nota). Promoción sin examen final (PSE): ≥ 7 en las 3 notas + ≥ 75% asistencia en prácticos (ir a recuperatorio por aplazo o ausencia sin justificación impide promocionar). Con alguna nota entre 4 y 6 se rinde examen final.',
        bibliografia: [
          // Unidad 1
          {
            unidad: 'Unidad 1 · Introducción: métodos de investigación en psicología',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 1: Definiciones de los enfoques cuantitativo y cualitativo, sus similitudes y diferencias',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Introducción: métodos de investigación en psicología',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 2 (online): Ética en la investigación',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Introducción: métodos de investigación en psicología',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 3: Planteamiento cuantitativo del problema',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Introducción: métodos de investigación en psicología',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 5: Definición del alcance (exploratorio, descriptivo, correlacional o explicativo)',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Introducción: métodos de investigación en psicología',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 6: Formulación de hipótesis',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Introducción: métodos de investigación en psicología',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 9 (online): Elaboración de propuestas cuantitativas, cualitativas y mixtas',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 1 · Introducción: métodos de investigación en psicología',
            autor: 'Puddington, M.',
            titulo: 'La teoría como punto de partida en la elaboración de un proyecto de investigación',
            editorial: 'Ficha de cátedra',
            año: '2024',
            tipo: 'Obligatoria'
          },
          // Unidad 2
          {
            unidad: 'Unidad 2 · Abordajes cuantitativos: estudio explicativo, diseño experimental y cuasi-experimental',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 7: Concepción o elección del diseño; Cap. 10 (pp. 304–316) y Cap. 5 online: Diseños experimentales, 2ª parte (pp. 26–33)',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Abordajes cuantitativos: estudio explicativo, diseño experimental y cuasi-experimental',
            autor: 'Pereda Marín, S.',
            titulo: 'Psicología Experimental — Cap. 7: Las variables en la investigación psicológica y Cap. 8: El control experimental',
            editorial: 'Ediciones Pirámide',
            año: '1987',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 2 · Abordajes cuantitativos: estudio explicativo, diseño experimental y cuasi-experimental',
            autor: 'León, O. G. y Montero, I.',
            titulo: 'Diseño de Investigaciones (2ª ed.) — Cap. 5: Diseños experimentales con grupos de sujetos distintos y Cap. 6: Con los mismos sujetos',
            editorial: 'McGraw-Hill',
            año: '2003',
            tipo: 'Obligatoria'
          },
          // Unidad 3
          {
            unidad: 'Unidad 3 · Abordajes cuantitativos: estudio correlacional y descriptivo',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 5 (pp. 92–95), Cap. 8: Selección de muestra, Cap. 9: Recolección de datos cuantitativos y Cap. 10 (pp. 282–290 y 304–310)',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          // Unidad 4
          {
            unidad: 'Unidad 4 · Abordajes cualitativos y mixtos',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 15: Diseños del proceso de investigación cualitativa y Cap. 17: Los métodos mixtos',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad 4 · Abordajes cualitativos y mixtos',
            autor: 'Rada Cadenas, D. M.',
            titulo: 'El rigor en la investigación cualitativa: Técnicas de análisis, credibilidad, transferibilidad y confirmabilidad',
            editorial: 'Sinopsis Educativa, Revista Venezolana de Investigación, 7(1), 17–26',
            año: '2007',
            tipo: 'Obligatoria'
          },
          // Unidad 5
          {
            unidad: 'Unidad 5 · Producción del informe, difusión y cuestiones éticas',
            autor: 'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P.',
            titulo: 'Metodología de la investigación (6ª ed.) — Cap. 11: El reporte de resultados del proceso cuantitativo y Cap. 16: El reporte de resultados del proceso cualitativo',
            editorial: 'McGraw-Hill Education',
            año: '2014',
            tipo: 'Obligatoria'
          },
          // Complementaria destacada Cátedra I
          {
            autor: 'Wainerman, C. y Sautu, R.',
            titulo: 'La trastienda de la investigación',
            editorial: 'Ediciones Lumiere',
            año: '2001',
            tipo: 'Complementaria'
          },
          {
            autor: 'Argibay, J. C.',
            titulo: 'Clasificación de los métodos de investigación cuantitativos (3 archivos de campus)',
            editorial: 'UBA Psicología',
            año: '2020',
            tipo: 'Complementaria'
          },
          {
            autor: 'Argibay, J. C.',
            titulo: 'Técnicas psicométricas. Cuestiones de validez y confiabilidad',
            editorial: 'Subjetividad y Procesos Cognitivos, 8, 15–33',
            año: '2006',
            tipo: 'Complementaria'
          },
          {
            autor: 'Vasilachis de Gialdino, I.',
            titulo: 'Estrategias de investigación cualitativa (Caps. 3 y 4)',
            editorial: 'Gedisa',
            año: '2011',
            tipo: 'Complementaria'
          },
          {
            autor: 'Eco, U.',
            titulo: 'Cómo se hace una tesis',
            editorial: 'Gedisa',
            año: '2003',
            tipo: 'Complementaria'
          },
          {
            autor: 'Juni, J. y Urbano, C.',
            titulo: 'Técnicas para investigar: recursos metodológicos para la preparación de proyectos de investigación (Tomo I)',
            editorial: 'Brujas',
            año: '2014',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 062)',
        titular: 'Roxana Cecilia Ynoub',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=62&anio=2026&cuatrimestre=2',
        enfoque:
          'Perspectiva epistemológico-crítica, dialéctica, historicista y no prescriptivista (tradición de Juan Samaja y Roxana Ynoub). Concibe la ciencia como praxis social y supera el binarismo apriorismo/empirismo con el Modelo Ternario de la Ciencia (Teoría / Praxis / Observación; Peirce, Kant, Hegel, Vico, Popper, Kuhn y Lakatos). Estructura la investigación como un ciclo de tres fases (sincrética/ideatoria → analítica y sistema de matrices de datos → sintética/tratamiento e interpretación), abarcando diseños cuantitativos, cualitativos, interpretativo-hermenéuticos (en diálogo con el psicoanálisis) e investigación-acción-participativa (Fals Borda, Montero, Martín-Baró). Incorpora revisión documental, entrenamiento crítico en Inteligencia Artificial para la investigación, ética/bioética, acceso abierto y ciencia desde el Sur (Varsavsky, Ley 26.657).',
        evaluacion:
          'Dictado 1° y 2° cuatrimestre. Clases teóricas (donde se dictan los contenidos epistemológicos) + Clases prácticas en formato taller con diseño participativo y pilotaje de campo grupal. 3 instancias de evaluación: 1) Examen parcial individual (TP 8); 2) Trabajo práctico grupal (evaluación procesual del diseño y pilotaje de campo); 3) Coloquio final integrador (TP 15, instancia grupal con calificación individual). La nota final es el promedio de las tres. Promoción sin examen final con ≥ 7 en cada instancia + asistencia sincrónica/participación diferida. Opción a 1 recuperatorio por desaprobación. Con nota entre 4 y 6 en alguna instancia se rinde examen final oral.',
        bibliografia: [
          // Bloque 1
          {
            unidad: 'Bloque 1 · Epistemología, ciencia como praxis y modelo ternario (Unidades 1, 2 y 8)',
            autor: 'Ynoub, R.',
            titulo: 'Cuestión de método. Aportes para una metodología crítica (Tomo I) — Cap. I: La ciencia como práctica social (pp. 2–21), Cap. II: Modelos, conjeturas y predicciones (pp. 22–61) y Cap. III: La lógica de la investigación (pp. 63–91)',
            editorial: 'Cengage Learning',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Epistemología, ciencia como praxis y modelo ternario (Unidades 1, 2 y 8)',
            autor: 'Samaja, J.',
            titulo: 'El lado oscuro de la razón — Cap. I: Tres versiones del Principio de la Experiencia (pp. 15–42), Cap. 2: Del Sujeto Teórico al Sujeto Práctico (pp. 43–122) y Cap. 3: El «lado oscuro» del Contrato Social (pp. 123–200)',
            editorial: 'JVE Ediciones',
            año: '2002',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Epistemología, ciencia como praxis y modelo ternario (Unidades 1, 2 y 8)',
            autor: 'Samaja, J.',
            titulo: 'Posdata (en Epistemología y Metodología)',
            editorial: 'Eudeba',
            año: '1993',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Epistemología, ciencia como praxis y modelo ternario (Unidades 1, 2 y 8)',
            autor: 'Samaja, J.',
            titulo: 'Los caminos del conocimiento (en Semiótica de la ciencia)',
            editorial: 'Material inédito de la cátedra',
            año: '2003',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Epistemología, ciencia como praxis y modelo ternario (Unidades 1, 2 y 8)',
            autor: 'Bateson, G.',
            titulo: 'Experimentos en el pensar sobre material etnológico observado (en Pasos hacia una ecología de la mente, pp. 99–113)',
            editorial: 'Lohlé-Lúmen',
            año: '1972/1991',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 1 · Epistemología, ciencia como praxis y modelo ternario (Unidades 1, 2 y 8)',
            autor: 'Ros, C.',
            titulo: 'La perspectiva de la complejidad y los niveles de integración del objeto de estudio: crónica de una experiencia de investigación',
            editorial: 'Revista Diagnosis (Fundación PROSAM), N° 5, 11–23',
            año: '2008',
            tipo: 'Obligatoria'
          },
          // Bloque 2
          {
            unidad: 'Bloque 2 · El proceso de investigación en tres fases: problemas, hipótesis y matrices de datos (Unidades 3, 4 y 5)',
            autor: 'Ynoub, R.',
            titulo: 'Cuestión de método. Aportes para una metodología crítica (Tomo I) — Cap. IV: El proceso de investigación científica y sus escalas de desarrollo (pp. 92–115)',
            editorial: 'Cengage Learning',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 2 · El proceso de investigación en tres fases: problemas, hipótesis y matrices de datos (Unidades 3, 4 y 5)',
            autor: 'Ynoub, R.',
            titulo: 'Cuestión de método. Aportes para una metodología crítica (Tomo I) — Cap. V: Problemas e hipótesis (pp. 118–151), Cap. VI: Funciones de la hipótesis (pp. 152–195) y Cap. VII: Teoría y objetivos (pp. 196–221)',
            editorial: 'Cengage Learning',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 2 · El proceso de investigación en tres fases: problemas, hipótesis y matrices de datos (Unidades 3, 4 y 5)',
            autor: 'Ynoub, R.',
            titulo: 'Cuestión de método. Aportes para una metodología crítica (Tomo I) — Cap. VIII: Fase 2, de los conceptos a los observables y estructura del dato (pp. 222–293) y Cap. IX: Instrumentalización (pp. 305–384)',
            editorial: 'Cengage Learning',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 2 · El proceso de investigación en tres fases: problemas, hipótesis y matrices de datos (Unidades 3, 4 y 5)',
            autor: 'Martinovich, V.',
            titulo: 'Búsqueda bibliográfica: cómo repensar las formas de buscar, recopilar y analizar la producción científica escrita',
            editorial: 'EDUNLa (Universidad Nacional de Lanús)',
            año: '2022',
            tipo: 'Obligatoria'
          },
          // Bloque 3
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Ynoub, R.',
            titulo: 'Cuestión de método. Aportes para una metodología crítica (Tomo II) — Cap. II: El «Diseño de investigación» y Segunda Parte: Guía para la elaboración de proyectos de investigación y planes de tesis',
            editorial: 'Lugar Editorial',
            año: '2023',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Ynoub, R.',
            titulo: 'De la disección a la revitalización: el tratamiento y la interpretación de datos (en Cuestión de método, Tomo III)',
            editorial: 'Material inédito de la cátedra',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Ynoub, R.',
            titulo: 'Revisión de algunos fundamentos lógico-metodológicos de la investigación cualitativa',
            editorial: 'Revista Perspectivas Metodológicas (Ed. UNLa)',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Ynoub, R.',
            titulo: 'Metodología y hermenéutica (en E. Díaz, Ed., Investigación científica y biopoder)',
            editorial: 'UNLa-Biblos',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Vasilachis de Gialdino, I. (Coord.)',
            titulo: 'Estrategias de Investigación cualitativa (Vol. II)',
            editorial: 'Gedisa',
            año: '2019',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Piovani, J. I.',
            titulo: 'Reflexividad en el proceso de investigación social: entre el diseño y la práctica (en Piovani y Muñiz Terra, ¿Condenados a la reflexividad?, pp. 74–92)',
            editorial: 'CLACSO-Biblos',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Montero, M.',
            titulo: 'Hacer para transformar: el método en la psicología comunitaria',
            editorial: 'Paidós',
            año: '2006',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 3 · Diseños, investigación cualitativa/hermenéutica/IAP, tratamiento e interpretación de datos (Unidades 6 y 7)',
            autor: 'Ynoub, R.',
            titulo: 'Revisitando el legado de Fals Borda y la investigación militante: consideraciones desde su marco histórico, ideológico y metodológico',
            editorial: 'Perspectivas Metodológicas, Vol. 23 (UNLa)',
            año: '2023',
            tipo: 'Obligatoria'
          },
          // Bloque 4
          {
            unidad: 'Bloque 4 · Ética, conductas responsables, ciencia política, escritura y perspectiva latinoamericana (Unidad 9)',
            autor: 'Varsavsky, O.',
            titulo: 'Ciencia, política y cientificismo',
            editorial: 'Centro Editor de América Latina',
            año: '1975',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Ética, conductas responsables, ciencia política, escritura y perspectiva latinoamericana (Unidad 9)',
            autor: 'Martín-Baró, I.',
            titulo: 'Fundamentos teóricos y metodológicos de la investigación latinoamericana',
            editorial: 'Revista Salvadoreña de Psicología, 1(2), 99–101',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Ética, conductas responsables, ciencia política, escritura y perspectiva latinoamericana (Unidad 9)',
            autor: 'Ynoub, R.',
            titulo: 'El proyecto y la metodología de la investigación — Anexo: Cuestiones éticas en investigación y Cap. X: Escribo luego existo',
            editorial: 'Cengage Learning',
            año: '2007',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Ética, conductas responsables, ciencia política, escritura y perspectiva latinoamericana (Unidad 9)',
            autor: 'American Psychological Association',
            titulo: 'Principios éticos de los psicólogos y código de conducta (Enmiendas 2010, trad. y coment. G. Z. Salomone y J. J. Michel Fariña)',
            editorial: 'Facultad de Psicología, UBA',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Ética, conductas responsables, ciencia política, escritura y perspectiva latinoamericana (Unidad 9)',
            autor: 'Roussos, A. y otros',
            titulo: 'Conductas responsables para la investigación en Psicología / Ética y conductas responsables (clases filmadas de cátedra)',
            editorial: 'FUNICS / Facultad de Psicología, UBA',
            año: '2012/2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Bloque 4 · Ética, conductas responsables, ciencia política, escritura y perspectiva latinoamericana (Unidad 9)',
            autor: 'AA.VV.',
            titulo: 'Stanley Milgram. 50 años después',
            editorial: 'Aesthethika, Revista Internacional, Vol. 9(1), UBA',
            año: '2013',
            tipo: 'Obligatoria'
          },
          // Complementaria destacada Cátedra II
          {
            autor: 'Azaretto, C. y Ros, C. (Comp.)',
            titulo: 'Investigar en psicoanálisis',
            editorial: 'JVE Ediciones',
            año: '2014',
            tipo: 'Complementaria'
          },
          {
            autor: 'Bourdieu, P., Chamboredon, J. C. y Passeron, J. C.',
            titulo: 'El oficio de sociólogo',
            editorial: 'Siglo XXI',
            año: '1976',
            tipo: 'Complementaria'
          },
          {
            autor: 'Kuhn, T. S.',
            titulo: 'La estructura de las revoluciones científicas',
            editorial: 'Fondo de Cultura Económica',
            año: '1970',
            tipo: 'Complementaria'
          },
          {
            autor: 'Gadamer, H. G.',
            titulo: 'Verdad y Método',
            editorial: 'Ed. Sígueme',
            año: '1991',
            tipo: 'Complementaria'
          },
          {
            autor: 'Glaser, B. y Strauss, A.',
            titulo: 'The Discovery of Grounded Theory: Strategies for Qualitative Research',
            editorial: 'Aldine',
            año: '1964',
            tipo: 'Complementaria'
          },
          {
            autor: 'Samaja, J.',
            titulo: 'Epistemología y metodología',
            editorial: 'Eudeba',
            año: '1993',
            tipo: 'Complementaria'
          }
        ]
      }
    ]
  },
  {
    id: 'salud-publica-mental',
    nombre: 'Salud Pública y Salud Mental',
    año: 2,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    correlativas: ['Psicología Social', 'Metodología de la Investigación'],
    descripcion:
      'Única materia obligatoria del área de Salud en el plan de estudios: aborda el proceso salud-enfermedad-atención/cuidado, los determinantes sociales, la epidemiología, la Atención Primaria de la Salud (APS), la planificación sanitaria, el sistema de salud argentino, la Ley Nacional de Salud Mental N° 26.657 y el trabajo interdisciplinario en terreno.',
    objetivos: [
      'Comprender la salud y la salud mental desde una perspectiva integral, interdisciplinaria y de derechos humanos, superando el modelo biomédico individual y asilar.',
      'Incorporar herramientas de epidemiología, diagnóstico situacional, Atención Primaria de la Salud (APS) y planificación estratégica para analizar y gestionar políticas y programas sanitarios.',
      'Realizar una práctica supervisada en terreno en instituciones o servicios de salud/comunitarios para reflexionar críticamente sobre el rol del psicólogo en el sistema de salud.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 065)',
        titular: 'Martín De Lellis',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=65&anio=2026&cuatrimestre=2',
        enfoque:
          'Enfoque sanitarista integral y de Psicología de la Salud / Salud Comunitaria (tradición Saforcada, de Lellis, Mozobancyk y Morales Calatayud), articulado con el pensamiento de la complejidad y el pasaje del paradigma individual restrictivo/asilar al paradigma social expansivo/comunitario. Trabaja determinantes sociales, epidemiología y vigilancia de problemáticas prevalentes en Argentina (suicidio, consumo de sustancias, tabaquismo, desarrollo infantil, mortalidad materna e IVE/ILE), Atención Primaria de la Salud (Alma-Ata, Carta de Ottawa, Escuelas Promotoras de Salud), planificación normativa y estratégica, Sistema Total de Salud y Ley Nacional de Salud Mental 26.657. Incluye Trabajo de Campo obligatorio con salida a terreno en instituciones educativas, sociales o sanitarias del AMBA.',
        evaluacion:
          'Dictado 1° y 2° cuatrimestre. 3 instancias obligatorias: 1) Primer parcial presencial a libro abierto (preguntas abiertas y análisis de caso, con nota); 2) Informe Grupal de la Salida a terreno (técnica de taller, observación, entrevistas y recomendaciones institucionales; aprobado/desaprobado sin nota); 3) Trabajo Integrador Final individual no presencial (con nota, articulando teoría y campo). Promoción sin examen final: ≥ 7 en el parcial y ≥ 7 en el Trabajo Integrador + aprobación del Informe Grupal + 75% asistencia en teóricos y prácticos. Regularidad con final: 4 a 6 en el parcial + ≥ 4 en el Trabajo Integrador + Informe Grupal aprobado + 75% asistencia.',
        bibliografia: [
          // Unidad I
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'de Lellis, M., Interlandi, C. y Martino, S.',
            titulo: 'La Salud Pública como área del conocimiento y de la acción (en Perspectivas en salud pública y salud mental, pp. 11–42)',
            editorial: 'Editorial Nuevos Tiempos',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'de Lellis, M. y Mozobancyk, S.',
            titulo: 'El proceso de salud-enfermedad desde la perspectiva de la complejidad. Una nueva mirada en Salud Pública',
            editorial: 'Eudeba',
            año: '2013',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'Morales Calatayud, F.',
            titulo: 'Una mirada al campo de la salud y la enfermedad (en Introducción a la Psicología de la Salud, pp. 21–64)',
            editorial: 'Paidós',
            año: '1999',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'de Lellis, M.',
            titulo: 'Concepciones y prácticas en salud: perspectiva clínica y sanitaria (pp. 17–47) y Sobre el concepto de Salud y Enfermedad Mental (pp. 49–70) (en Salud pública, salud mental)',
            editorial: 'Editorial Nuevos Tiempos',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'de Lellis, M.',
            titulo: 'La respuesta institucional: paradigmas en Salud Mental (en Salud pública, salud mental: del paradigma asilar al comunitario, pp. 71–78)',
            editorial: 'Editorial Nuevos Tiempos',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'Mozobancyk, S.',
            titulo: 'Determinantes sociales y desarrollo humano integral (en M. de Lellis, comp., Perspectivas en salud pública y salud mental)',
            editorial: 'Editorial Nuevos Tiempos',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'Saforcada, E., de Lellis, M. y Mozobancyk, S.',
            titulo: 'Salud pública: perspectiva holística, psicología y paradigmas (en Psicología y Salud Pública: nuevos aportes desde la perspectiva del factor humano)',
            editorial: 'Paidós',
            año: '2022',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Marco referencial: la salud, sus determinantes y paradigmas en salud',
            autor: 'Saforcada, E., de Lellis, M. y Mozobancyk, S.',
            titulo: 'El concepto de salud comunitaria: una nueva perspectiva de la Salud Pública (en Psicología y Salud Pública)',
            editorial: 'Paidós',
            año: '2022',
            tipo: 'Obligatoria'
          },
          // Unidad II
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Beaglehole, R., Bonita, R. y Kjellström, T.',
            titulo: '¿Qué es la epidemiología? (en Epidemiología básica, Cap. 1, pp. 1–10)',
            editorial: 'OPS',
            año: '2003',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Hamui, S. A., Irigoyen, C. A., Fernández, O. M. A. y Castañón, G. J. A.',
            titulo: 'Epidemiología social: nuevas perspectivas en relación con el fenómeno salud-enfermedad',
            editorial: 'Medicina Interna de México, 21(3), 163–167',
            año: '2005',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Cátedra I Salud Pública y Salud Mental',
            titulo: 'Indicadores epidemiológicos',
            editorial: 'Ficha docente, Facultad de Psicología, UBA',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Organización Panamericana de la Salud',
            titulo: 'Indicadores epidemiológicos: aspectos conceptuales y operativos',
            editorial: 'OPS / OMS',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'OPS / Ministerio de Salud de la Nación',
            titulo: 'Análisis de situación de salud (ASIS) República Argentina',
            editorial: 'Ministerio de Salud / OPS',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Ministerio de Salud de la Nación',
            titulo: 'Indicadores básicos Argentina 2020',
            editorial: 'Ministerio de Salud de la Nación',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Dirección de Salud Mental y Adicciones',
            titulo: 'Perfil epidemiológico del suicidio en Argentina. Algunas aproximaciones (Publicación N° 3)',
            editorial: 'Ministerio de Salud de la Nación',
            año: '2011',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Berra, A. y de Lellis, M.',
            titulo: 'La mortalidad materna y los servicios de salud y justicia: un abordaje interdisciplinario e intersectorial desde el aporte de la psicología',
            editorial: 'Anuario de Investigaciones, Facultad de Psicología, UBA',
            año: '2017',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Ministerio de Salud de la Nación',
            titulo: 'Protocolo para la atención integral de las personas con derecho a la interrupción voluntaria del embarazo',
            editorial: 'Dirección Nacional de Salud Sexual y Reproductiva',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'UNICEF y Sociedad Argentina de Pediatría',
            titulo: 'Salud materno infanto juvenil en cifras',
            editorial: 'UNICEF / SAP',
            año: '2019',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Situación de salud en Argentina: epidemiología, problemáticas y diagnóstico local',
            autor: 'Ramos Calero, E.',
            titulo: 'Diagnóstico de salud de la comunidad: métodos y técnicas (en Enfermería comunitaria: métodos y técnicas, Cap. 10)',
            editorial: 'DAE',
            año: '2000',
            tipo: 'Obligatoria'
          },
          // Unidad III
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'OMS / UNICEF',
            titulo: 'Declaración de Alma-Ata (Conferencia Internacional sobre Atención Primaria de Salud)',
            editorial: 'OMS',
            año: '1978',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'OPS / OMS',
            titulo: 'Carta de Ottawa para la Promoción de la Salud (en Promoción de la salud: una antología, pp. 367–372)',
            editorial: 'OPS',
            año: '1996',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'OPS',
            titulo: 'Declaración de Caracas (en González Uzcátegui y Levav, Reestructuración de la atención psiquiátrica)',
            editorial: 'OPS',
            año: '1990',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'de Lellis, M., Berra, A. y Morand, M.',
            titulo: 'El legado de la Atención Primaria de la Salud (en Perspectivas en salud pública y salud mental)',
            editorial: 'Editorial Nuevos Tiempos',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'de Lellis, M., Interlandi, C. y Martino, J.',
            titulo: 'Herramientas de planificación en salud comunitaria (en Perspectivas en salud pública y salud mental)',
            editorial: 'Editorial Nuevos Tiempos',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'de Lellis, M.',
            titulo: 'Políticas públicas y salud comunitaria (en Saforcada, Mañas y Alvarondo, Neurociencias, salud y bienestar comunitario)',
            editorial: 'Universidad Nacional de San Luis',
            año: '2006',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'de Lellis, M.',
            titulo: 'Psicología y políticas públicas saludables',
            editorial: 'PSIENCIA, Revista Latinoamericana de Ciencia Psicológica, 2(2), 102–106',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'de Lellis, M., Rebottaro, K. y Possetto, H.',
            titulo: 'Centros de día y Residencias en la comunidad: una alternativa al modelo asilar',
            editorial: 'Compilación Premio Facultad de Psicología, UBA, 29–56',
            año: '2008',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'Gómez Arias, R., Rodríguez Ospina, F., Martínez Ruiz, O., Agudelo Vanegas, N., Zea, L. y González, E.',
            titulo: 'Gestión de políticas públicas y salud',
            editorial: 'Universidad de Caldas',
            año: '2004',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'Saforcada, E., de Lellis, M. y Mozobancyk, S.',
            titulo: 'El sistema de servicios de salud: la perspectiva de los usuarios / La psicología en la promoción de la salud: alimentación infantil (en Psicología y Salud Pública)',
            editorial: 'Paidós',
            año: '2022',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad III · Políticas públicas de salud: APS, planificación y promoción',
            autor: 'Montero, M.',
            titulo: 'La comunidad como objetivo y sujeto de acción social (en Psicología comunitaria. Fundamentos y aplicaciones)',
            editorial: 'Editorial Síntesis',
            año: '1998',
            tipo: 'Obligatoria'
          },
          // Unidad IV
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'Saforcada, E.',
            titulo: 'El sistema total de salud (en Psicología Sanitaria. Análisis crítico de los sistemas de atención de la salud, pp. 43–57)',
            editorial: 'Paidós',
            año: '2000',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'de Lellis, M.',
            titulo: 'El contexto de las Políticas Públicas y el Sistema Total de Salud',
            editorial: 'Ficha de cátedra',
            año: '2023',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'Rossetto, J.',
            titulo: 'Del Manicomio a la Comunidad: el proceso de reforma de la Colonia Nacional «Dr. Manuel A. Montes de Oca»',
            editorial: 'Vertex, Revista Argentina de Psiquiatría, 20(88), 463–473',
            año: '2009',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'de Lellis, M.',
            titulo: 'Movimiento de Salud Mental: rupturas y caminos de reforma / Antecedentes normativos / Ley Nacional de Salud Mental (en Salud pública, salud mental, pp. 241–338)',
            editorial: 'Editorial Nuevos Tiempos',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'de Lellis, M.',
            titulo: 'Ética y políticas públicas: problemas y desafíos en la aplicación de la Ley Nacional de Salud Mental',
            editorial: 'Revista IT, 7(7), Programa Apex, Universidad de la República',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'República Argentina',
            titulo: 'Ley Nacional de Salud Mental N° 26.657, Decreto Reglamentario 603/2013 y Plan Nacional de Salud Mental (2023)',
            editorial: 'Ministerio de Salud de la Nación',
            año: '2010/2023',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'de Lellis, M. y Saforcada, E.',
            titulo: 'Políticas de recursos humanos en el ámbito de la salud: el caso de la formación de graduados en psicología (en Psicología, sociedad y políticas públicas de salud, pp. 123–145)',
            editorial: 'Paidós',
            año: '2006',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'de Lellis, M., Pomares, L. y Da Silva, N.',
            titulo: 'La Ley Nacional de Salud Mental en la formación universitaria (en A. Trímboli, comp., El fin del manicomio)',
            editorial: 'Noveduc',
            año: '2019',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad IV · Sistemas de salud, reforma en Salud Mental y perspectiva de derechos',
            autor: 'Cátedra I Salud Pública y Salud Mental',
            titulo: 'Compilado de declaraciones y normativas sobre derechos humanos',
            editorial: 'Facultad de Psicología, UBA',
            año: '2026',
            tipo: 'Obligatoria'
          },
          // Complementaria / Electiva destacada Cátedra I
          {
            autor: 'Almeida Filho, N.',
            titulo: 'Epidemiología sin números',
            editorial: 'OPS / OMS Serie PALTEX',
            año: '1992',
            tipo: 'Complementaria'
          },
          {
            autor: 'Dever, D. A.',
            titulo: 'Epidemiología y administración de servicios de salud',
            editorial: 'OPS Serie PALTEX',
            año: '1991',
            tipo: 'Complementaria'
          },
          {
            autor: 'Capra, F.',
            titulo: 'La trama de la vida. Una nueva perspectiva de los sistemas vivos',
            editorial: 'Anagrama',
            año: '1998',
            tipo: 'Complementaria'
          },
          {
            autor: 'Sluzki, C.',
            titulo: 'De cómo la red social afecta a la salud del individuo y la salud del individuo afecta a la red social (en E. Dabas, Redes: el lenguaje de los vínculos)',
            editorial: 'Paidós',
            año: '1995',
            tipo: 'Complementaria'
          },
          {
            autor: 'OPS / OMS',
            titulo: 'Las funciones esenciales de la salud pública en las Américas / Una nueva agenda para la salud mental en las Américas',
            editorial: 'OPS',
            año: '2020/2023',
            tipo: 'Complementaria'
          },
          {
            autor: 'SEDRONAR / INDEC',
            titulo: 'Encuesta nacional sobre consumos y prácticas de cuidado 2022 (ENCoPraC)',
            editorial: 'SEDRONAR / INDEC',
            año: '2023',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 066)',
        titular: 'Débora Tajer',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=66&anio=2026&cuatrimestre=2',
        enfoque:
          'Adhiere al pensamiento sanitario crítico latinoamericano y a la corriente de la Salud Colectiva (continuidad de Alicia Stolkiner junto a Débora Tajer, Emiliano Galende, Mario Rovere, Eduardo Menéndez, Sara Ardila-Gómez, Claudia Bang y Leonardo Luciani Conde). Propone pasar del modelo salud/enfermedad/atención al proceso salud/enfermedad/cuidado, criticando la biomedicalización, el biopoder, la mercantilización y las lógicas manicomiales. Incorpora de forma transversal la perspectiva de género (cuidados generizados, agendas de género en salud, vulnerabilidad coronaria generizada), estudios decoloniales, clínica ampliada e interdisciplina, enfoque de derechos (Ley 26.657), memorias y luchas en salud mental en Argentina (incluido el aporte psicoanalítico), pandemia de COVID-19 y consumos problemáticos. Cuenta con comisiones temáticas (niñez y adolescencia, adultxs mayores, consumos problemáticos, género) y un Trabajo en terreno en dos fases.',
        evaluacion:
          'Dictado 1° y 2° cuatrimestre (1 clase teórica semanal de 2 hs + 1 clase práctica de 4 hs). 2 instancias formales de evaluación: 1) Parcial individual presencial sobre Unidad I (TP 7; recuperatorio en TP 10); 2) Monografía grupal integradora (Unidades I y II) basada en el trabajo en terreno supervisado en una institución o programa de salud/salud mental, con entregas periódicas de avance y presentación grupal final (TP 15). Promoción sin examen final: ≥ 7 en ambas instancias + 75% asistencia en teóricos y prácticos. Regularidad con final: ≥ 4 en ambas instancias + 75% asistencia. Admite examen libre (requiere presentar trabajo en terreno acordado con JTP).',
        bibliografia: [
          // Subunidad I-1
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Stolkiner, A.',
            titulo: 'Teórico 4: «El Concepto de Salud de la OMS»',
            editorial: 'Ficha de cátedra, Cátedra II, UBA',
            año: '2003',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Stolkiner, A. y Ardila Gómez, S.',
            titulo: 'Conceptualizando la Salud Mental en las prácticas: consideraciones desde el pensamiento de la medicina social / Salud Colectiva latinoamericanas',
            editorial: 'Vertex, Revista Argentina de Psiquiatría, XXIII(101), 57–67',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Tajer, D.',
            titulo: 'La Medicina Social Latinoamericana en los ’90. Hechos y Desafíos (en Rojas Ochoa y Márquez, ALAMES en la Memoria, pp. 21–37)',
            editorial: 'Editorial Caminos',
            año: '2009',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Augsburger, C.',
            titulo: 'De la epidemiología psiquiátrica a la epidemiología en salud mental: el sufrimiento psíquico como categoría clave',
            editorial: 'Cuadernos Médico Sociales, 81, 61–75',
            año: '2002',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Caponi, S.',
            titulo: 'Georges Canguilhem: del cuerpo subjetivo a la localización cerebral',
            editorial: 'Salud Colectiva, 6(2), 149–161',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Vasco Uribe, A.',
            titulo: 'Estructura y Proceso en la conceptualización de la enfermedad',
            editorial: 'Taller Latinoamericano de Medicina Social, Medellín',
            año: '1987',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Menéndez, E.',
            titulo: 'Modelos de atención de los padecimientos: de exclusiones teóricas y articulaciones prácticas',
            editorial: 'Ciência & Saúde Colectiva, 8(1), 185–207',
            año: '2003',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Michalewicz, A., Pierri, C. y Ardila Gómez, S.',
            titulo: 'Del Proceso Salud/enfermedad/atención al proceso salud/enfermedad/cuidado: Elementos para su conceptualización',
            editorial: 'Anuario de Investigaciones, Facultad de Psicología, UBA, XXI(1), 217–224',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Ceminari, Y. y Stolkiner, A.',
            titulo: 'El cuidado social y la organización social del cuidado como categorías claves para el análisis de políticas públicas',
            editorial: 'X Congreso Internacional de Investigación y Práctica Profesional en Psicología, UBA',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'Tajer, D.',
            titulo: 'Cuidados generizados en salud',
            editorial: 'Revista Symploké Estudios de Género, 2(2)',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-1: Proceso Salud/Enfermedad/Cuidado y Salud Colectiva',
            autor: 'República Argentina',
            titulo: 'Ley Nacional de Salud Mental N° 26.657 y Decreto Reglamentario 603/2013 (Caps. I–V)',
            editorial: 'Ministerio de Salud de la Nación',
            año: '2010/2013',
            tipo: 'Obligatoria'
          },
          // Subunidades I-2 y I-3
          {
            unidad: 'Unidad I · Subunidades I-2 y I-3: Enfoque de derechos, decolonialidad, biopoder y medicalización',
            autor: 'Luciani Conde, L.',
            titulo: 'Por una matriz formativa alternativa en Salud Mental: Aportes de los estudios decoloniales al campo de la Salud Mental Colectiva/Medicina Social Latinoamericana',
            editorial: 'Salud Mental y Comunidad, 8(10), 16–33',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidades I-2 y I-3: Enfoque de derechos, decolonialidad, biopoder y medicalización',
            autor: 'Stolkiner, A.',
            titulo: 'Derechos Humanos y Salud desde el Pensamiento Médico Social / Salud Colectiva Latinoamericano (en Llambías y Wolff, La enfermedad de los sistemas de salud)',
            editorial: 'Wolff Eds.',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidades I-2 y I-3: Enfoque de derechos, decolonialidad, biopoder y medicalización',
            autor: 'Stolkiner, A.',
            titulo: 'Medicalización de la vida, sufrimiento subjetivo y prácticas en salud mental (en H. Lerner, comp., Los sufrimientos, pp. 211–239)',
            editorial: 'Ed. Psicolibro',
            año: '2013',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidades I-2 y I-3: Enfoque de derechos, decolonialidad, biopoder y medicalización',
            autor: 'Stolkiner, A.',
            titulo: 'Las formas de transitar la adolescencia hoy y la salud/salud mental: actores y escenarios',
            editorial: 'Novedades Educativas, 25(269), 40–45',
            año: '2010',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidades I-2 y I-3: Enfoque de derechos, decolonialidad, biopoder y medicalización',
            autor: 'Stolkiner, A.',
            titulo: 'Subjetividades de época y prácticas de Salud Mental',
            editorial: 'Revista Actualidad Psicológica, XXVI(293), 26–29',
            año: '2001',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidades I-2 y I-3: Enfoque de derechos, decolonialidad, biopoder y medicalización',
            autor: 'Stolkiner, A.',
            titulo: 'Tiempos «Posmodernos»: Procesos de Ajuste y Salud Mental (en Saidon y Troianovsky, Políticas en Salud Mental, pp. 25–55)',
            editorial: 'Lugar Editorial',
            año: '1994',
            tipo: 'Obligatoria'
          },
          // Subunidad I-4
          {
            unidad: 'Unidad I · Subunidad I-4: Clínica ampliada, interdisciplina y transdisciplina',
            autor: 'Elichiry, N.',
            titulo: 'La importancia de la articulación interdisciplinaria para el desarrollo de metodologías transdisciplinarias (en El niño y la Escuela, pp. 333–341)',
            editorial: 'Nueva Visión',
            año: '1987',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-4: Clínica ampliada, interdisciplina y transdisciplina',
            autor: 'García, R.',
            titulo: 'Dialéctica de la integración en la investigación interdisciplinaria',
            editorial: 'IV Jornadas de APS y I de Medicina Social, Buenos Aires',
            año: '1989',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-4: Clínica ampliada, interdisciplina y transdisciplina',
            autor: 'Stolkiner, A.',
            titulo: 'De interdisciplinas e indisciplinas (en N. Elichiry, comp., El niño y la Escuela, pp. 313–317)',
            editorial: 'Nueva Visión',
            año: '1987',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-4: Clínica ampliada, interdisciplina y transdisciplina',
            autor: 'Stolkiner, A.',
            titulo: 'El enfoque interdisciplinario en el campo de la Salud (en Fernández Castrillo, Salud Mental, Comunidad y Derechos Humanos, pp. 189–211)',
            editorial: 'Psicolibros Universitarios',
            año: '2017',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad I · Subunidad I-4: Clínica ampliada, interdisciplina y transdisciplina',
            autor: 'Wagner de Sousa Campos, G.',
            titulo: 'Desafío epistemológico y práctico: Cómo reformular, ampliando e integrando, la clínica y la salud colectiva (en Método Paideia, pp. 184–206)',
            editorial: 'Lugar Editorial',
            año: '2009',
            tipo: 'Obligatoria'
          },
          // Subunidad II-1
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Tajer, D., Luciani Conde, L., Vázquez, A., Quercetti, F., Prado, J., Quinteros, L. y Trejo, L.',
            titulo: 'Estado, políticas sociales, salud colectiva y salud mental',
            editorial: 'Ficha de trabajo elaborada para cátedra',
            año: '2025',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Ferreyra, J., Stolkiner, A., Luciani Conde, L. y Vázquez, A.',
            titulo: 'Instancias estatales creadas por la Ley Nacional de Salud Mental: aportes para la descripción de un proceso de implementación',
            editorial: 'Ficha de cátedra, Cátedra II, UBA',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Galende, E.',
            titulo: 'Los fundamentos de la salud mental (en Psicofármacos y Salud Mental: La ilusión de no ser, pp. 137–158)',
            editorial: 'Lugar Editorial',
            año: '2008',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Stolkiner, A.',
            titulo: 'Un largo camino hasta la Ley Nacional de Salud Mental',
            editorial: 'Revista Soberanía Sanitaria, Dossier Salud Mental',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Stolkiner, A.',
            titulo: 'Salud Mental: Avances y contradicciones de su integración a la salud comunitaria (en Gollan et al., ¿Qué hacer en salud?, pp. 57–70)',
            editorial: 'Ed. Colihue',
            año: '2015',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Stolkiner, A.',
            titulo: 'El sector salud en la Argentina: ¿Qué pasó luego de la reforma neoliberal de los 90 y la crisis del 2001?',
            editorial: 'XV Conferencia IAHP, Toledo',
            año: '2009',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Rovere, M.',
            titulo: 'El Sistema de Salud de la Argentina como campo: tensiones, estratagemas y opacidades',
            editorial: 'Revista Debate Público, 6(12), 23–41',
            año: '2016',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Vainer, A.',
            titulo: 'La Salud Mental en la Argentina: memorias y luchas (en A. Trímboli, Ed., El Fin del Manicomio, pp. 33–42)',
            editorial: 'Ed. Noveduc',
            año: '2019',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-1: Estado, políticas y sector salud/salud mental en Argentina',
            autor: 'Vázquez, A.',
            titulo: 'Disputas actuales en el campo de la salud mental: los consumos problemáticos en la mira',
            editorial: 'Ficha de trabajo elaborada para cátedra',
            año: '2025',
            tipo: 'Obligatoria'
          },
          // Subunidad II-2
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Ardila, S. y Parenti, M.',
            titulo: 'Gestionando en Salud/Salud Mental',
            editorial: 'Ficha de cátedra, Cátedra II, UBA',
            año: '2014',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'OMS / UNICEF',
            titulo: 'Declaración de Alma-Ata (Conferencia Internacional sobre Atención Primaria de Salud)',
            editorial: 'OMS',
            año: '1978',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Pedernera, S.',
            titulo: 'Pandemia y rol del equipo de Salud Mental en Atención Primaria de la Salud: experiencia en COVID-19',
            editorial: 'Diagnosis (Fundación PROSAM), 2(17)',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Rovere, M.',
            titulo: 'La atención primaria en la encrucijada: desplegar su potencial transformador o quedar instrumentados en una nueva ofensiva privatizadora',
            editorial: 'Saúde em Debate, 42(1), 315–327',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Rovere, M.',
            titulo: 'Una teoría muy práctica (en Planificación Estratégica de Recursos Humanos en Salud, pp. 13–32)',
            editorial: 'OPS',
            año: '1993',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Stagnaro, J. C., Cía, A., Vázquez, N., Vommaro, H., Nemirovsky, M., Serfaty, E. y Kessler, R.',
            titulo: 'Estudio epidemiológico de salud mental en población general de la República Argentina',
            editorial: 'Vertex, Revista Argentina de Psiquiatría, XXIX, 275–299',
            año: '2018',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Stolkiner, A., Comes, Y. y Garbus, P.',
            titulo: 'Alcances y Potencialidades de la Atención Primaria de la Salud en la Argentina',
            editorial: 'Ciência & Saúde Colectiva, 16(6), 2807–2816',
            año: '2011',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Stolkiner, A. y Solitario, R.',
            titulo: 'Atención Primaria de la Salud y Salud Mental: la articulación entre dos utopías (en D. Maceira, Atención Primaria en Salud, pp. 121–146)',
            editorial: 'Paidós',
            año: '2007',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Stolkiner, A.',
            titulo: 'La Vida Social de los Virus. El Caso de la Gripe A-H1N1 (PPT)',
            editorial: 'Instituto Gino Germani, UBA',
            año: '2009',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Tajer, D., Luciani Conde, L., Barbieri, A., Pierri, C., Rodríguez, M., Pastorini, G. y Josid, S.',
            titulo: 'Epidemiología. Elementos para su uso en la Salud Colectiva y en la Salud Mental',
            editorial: 'Ficha de cátedra',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Tajer, D.',
            titulo: 'Heridos corazones. Factores subjetivos y sociales en la construcción generizada de la vulnerabilidad coronaria',
            editorial: 'Ficha de trabajo elaborada para cátedra',
            año: '2025',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-2: Gestión, APS, epidemiología crítica y agenda de género',
            autor: 'Tajer, D.',
            titulo: 'Construyendo una agenda de género en las políticas públicas en salud (en Género y Salud. Las políticas en acción)',
            editorial: 'Lugar Editorial',
            año: '2012',
            tipo: 'Obligatoria'
          },
          // Subunidad II-3
          {
            unidad: 'Unidad II · Subunidad II-3: Prácticas comunitarias, desinstitucionalización y rol profesional',
            autor: 'Ardila, S. y Galende, E.',
            titulo: 'El concepto de Comunidad en la Salud Mental Comunitaria',
            editorial: 'Salud Mental y Comunidad, 1(1), 39–50',
            año: '2011',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-3: Prácticas comunitarias, desinstitucionalización y rol profesional',
            autor: 'Ardila-Gómez, S.',
            titulo: 'En nombre propio: Relatos de vida de mujeres que tuvieron internaciones psiquiátricas prolongadas y ahora viven en la comunidad',
            editorial: 'Edición de autora',
            año: '2019',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-3: Prácticas comunitarias, desinstitucionalización y rol profesional',
            autor: 'Bang, C., Cafferata, L. I., Castaño Gómez, V. e Infantino, A. I.',
            titulo: 'Entre «lo clínico» y «lo comunitario»: tensiones de las prácticas profesionales de psicólogos/as en salud',
            editorial: 'Revista de Psicología UNLP, 1–21',
            año: '2020',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-3: Prácticas comunitarias, desinstitucionalización y rol profesional',
            autor: 'Bang, C.',
            titulo: 'Abordajes comunitarios en salud mental en el primer nivel de atención: conceptos y prácticas desde una perspectiva integral',
            editorial: 'Revista Colombiana de Ciencias Sociales, 12(2), 778–804',
            año: '2021',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-3: Prácticas comunitarias, desinstitucionalización y rol profesional',
            autor: 'Luciani Conde, L.',
            titulo: 'Sentidos estratégicos del trabajo comunitario: inercias, interpelaciones y potencias de las prácticas en salud mental',
            editorial: 'Kera Yvoty, 9(2)',
            año: '2024',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-3: Prácticas comunitarias, desinstitucionalización y rol profesional',
            autor: 'Stolkiner, A.',
            titulo: 'Nuevos Actores en el Campo de la Salud Mental',
            editorial: 'Revista Intersecciones Psi, 2(4), 27–31',
            año: '2012',
            tipo: 'Obligatoria'
          },
          {
            unidad: 'Unidad II · Subunidad II-3: Prácticas comunitarias, desinstitucionalización y rol profesional',
            autor: 'Stolkiner, A.',
            titulo: 'Prevención en salud mental: normativización o desanudamiento de situaciones problema',
            editorial: '4° Congreso Metropolitano de Psicología, Buenos Aires',
            año: '1988',
            tipo: 'Obligatoria'
          },
          // Complementaria / Optativa destacada Cátedra II
          {
            autor: 'CELS / Mental Disability Rights International',
            titulo: 'Vidas Arrasadas: La segregación de las personas en los asilos psiquiátricos argentinos (Resumen Ejecutivo y Cap. I)',
            editorial: 'Siglo Veintiuno Editores',
            año: '2007',
            tipo: 'Complementaria'
          },
          {
            autor: 'Tajer, D.',
            titulo: 'El aborto como problema de Salud Colectiva (en Salud Feminista, pp. 75–88)',
            editorial: 'Fundación Soberanía Sanitaria y Tinta Limón',
            año: '2019',
            tipo: 'Complementaria'
          },
          {
            autor: 'Trímboli, A. (Ed.)',
            titulo: 'El Fin del Manicomio: Construcción Colectiva de políticas y experiencias en salud mental y derechos',
            editorial: 'Ed. Noveduc',
            año: '2019',
            tipo: 'Complementaria'
          },
          {
            autor: 'Cáceres, C., Druetta, I., Hartfiel, M. y Riva, M. R.',
            titulo: 'El P.R.E.A., una experiencia alternativa a las lógicas manicomiales',
            editorial: 'Vertex, Revista Argentina de Psiquiatría, XX(86), 299–307',
            año: '2009',
            tipo: 'Complementaria'
          },
          {
            autor: 'República Argentina',
            titulo: 'Ley 26.378: Convención sobre los Derechos de las Personas con Discapacidad y Protocolo Facultativo',
            editorial: 'Boletín Oficial',
            año: '2008',
            tipo: 'Complementaria'
          },
          {
            autor: 'República Argentina',
            titulo: 'Ley 26.934: Plan Integral para el Abordaje de los Consumos Problemáticos (Plan IACOP) / Ley CABA N° 448 de Salud Mental',
            editorial: 'Legislación vigente',
            año: '2014',
            tipo: 'Complementaria'
          }
        ]
      }
    ]
  },
  {
    id: 'teoria-tecnica-grupos',
    nombre: 'Teoría y Técnica de Grupos',
    año: 2,
    ciclo: 'Formación General',
    cuatrimestre: 2,
    correlativas: ['Psicología Social', 'Psicoanálisis: Freud'],
    descripcion: 'Estudio de las teorías, dispositivos técnicos y procesos sociohistóricos que atraviesan lo grupal, lo institucional y las prácticas colectivas contemporáneas en los campos clínico, educativo, laboral y comunitario.',
    objetivos: [
      'Articular los discursos teóricos sobre lo grupal con sus dispositivos técnicos y las demandas sociohistóricas que los producen.',
      'Problematizar las relaciones entre lo grupal, lo institucional y los procesos de producción de subjetividad.',
      'Incorporar herramientas conceptuales, lúdicas, psicodramáticas y de coordinación para intervenir en grupos en ámbitos clínicos, educativos, laborales y comunitarios.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 063)',
        titular: 'A designar (ex Ana María Fernández)',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=63&anio=2026&cuatrimestre=2',
        enfoque:
          'Perspectiva transdisciplinaria y multirreferencial sustentada en la elucidación crítica y la problematización recursiva (tradición de Ana María Fernández y la Escuela Grupalista Argentina). Articula Ciencias Sociales, Psicoanálisis, Filosofía (Foucault, Deleuze y Guattari, Castoriadis, Byung-Chul Han), Psicología Social (Pichon-Rivière), Movimiento Institucionalista (Ulloa, Baremblitt, Saidón), Psicodrama Psicoanalítico (Pavlovsky, Kesselman, Albizuri de García) y Estudios de Género y Queer. Recorre los tres momentos epistémicos de lo grupal, los imaginarios sociales, la relación grupo-institución y las experiencias de lo público no estatal (asambleas, fábricas recuperadas, extensión universitaria y diversidades sexuales), en diálogo con una experiencia vivencial grupal-colectiva y elaboración de crónicas.',
        evaluacion:
          'Dos instancias evaluativas: 1) Primer parcial individual, escrito y presencial en Clase 9 (3 preguntas a desarrollar: 1 de teóricos a elegir entre 2 opciones + 2 obligatorias de prácticos; recuperatorio a los 15 días); 2) Segunda evaluación integrada por un informe grupal escrito domiciliario de 3 capítulos sobre la Jornada de Producciones Grupales (nota grupal) promediado con un coloquio grupal de preguntas individuales en Clase 15 (nota individual). Promoción sin examen final: mínimo de 7 en cada una de las dos evaluaciones, 75% de asistencia en teóricos (11/15) y prácticos (11/15), y asistencia obligatoria a la Jornada de Producciones Grupales (sábado de 13:30 a 20:30 hs). Régimen con examen final (regular): mínimo de 4 en cada evaluación y mismos requisitos de asistencia.',
        bibliografia: [
          // Módulo I
          {
            autor: 'Fernández, A. M.',
            titulo: 'Introducción (en El Campo Grupal. Notas para una genealogía)',
            editorial: 'Nueva Visión',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo I · La problemática grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Lo singular y lo colectivo (en El Campo Grupal. Notas para una genealogía, p. 37)',
            editorial: 'Nueva Visión',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo I · La problemática grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Notas para la constitución de un campo de problemas de la subjetividad (en Instituciones Estalladas, pp. 265–279)',
            editorial: 'Eudeba',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Módulo I · La problemática grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Haciendo Met-odhos (en Las lógicas colectivas: Imaginarios, cuerpos y multiplicidades)',
            editorial: 'Biblos',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Módulo I · La problemática grupal'
          },
          {
            autor: 'Foucault, M.',
            titulo: 'El orden del Discurso',
            editorial: 'Tusquets',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Módulo I · La problemática grupal'
          },
          // Módulo II
          {
            autor: 'Albizuri de García, O.',
            titulo: 'Contribuciones del psicodrama a la psicoterapia de grupos (en Lo Grupal 3)',
            editorial: 'Búsqueda',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Anido, M.',
            titulo: 'Los grupos homogéneos y sus desafíos: Reflexiones a partir de un grupo para personas con fibromialgia (en Travesías por la clínica vincular)',
            editorial: 'AAPPG',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Anzieu, D. y Martin, J. Y.',
            titulo: 'La dinámica de los grupos pequeños (pp. 51–57 y 58–64)',
            editorial: 'Kapelusz',
            año: '1971',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Anzieu, D.',
            titulo: 'El método psicoanalítico y sus reglas en situaciones de grupo (en El grupo y el inconsciente)',
            editorial: 'Biblioteca Nueva',
            año: '1978',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Bion, W. R.',
            titulo: 'Tensiones intragrupo en la Terapia (en Experiencias en grupos)',
            editorial: 'Paidós',
            año: '1979',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'La demanda por los grupos (en El Campo Grupal. Notas para una genealogía, p. 61)',
            editorial: 'Nueva Visión',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Hacia una clínica grupal (en El Campo Grupal. Notas para una genealogía, p. 83)',
            editorial: 'Nueva Visión',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'El segundo momento epistémico (en El Campo Grupal. Notas para una genealogía, p. 101)',
            editorial: 'Nueva Visión',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Los organizadores fantasmáticos (en El Campo Grupal. Notas para una genealogía, p. 113)',
            editorial: 'Nueva Visión',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Jasiner, G.',
            titulo: 'Las intervenciones del coordinador (en Una lógica para pequeños grupos)',
            editorial: 'Lugar Editorial',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Pavlovsky, E.',
            titulo: 'Por una ética de la enunciación (en Lo Grupal 4, pp. 13–17)',
            editorial: 'Búsqueda',
            año: '1987',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Pichon-Rivière, E.',
            titulo: 'Técnica de los grupos operativos (en El proceso grupal)',
            editorial: 'Nueva Visión',
            año: '1975',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Pichon-Rivière, E.',
            titulo: 'Estructura de una escuela destinada a la formación de psicólogos sociales (en El proceso grupal, p. 149)',
            editorial: 'Nueva Visión',
            año: '1975',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Pichon-Rivière, E.',
            titulo: 'Aportaciones a la didáctica de la psicología social (en El proceso grupal, p. 205)',
            editorial: 'Nueva Visión',
            año: '1975',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Ulloa, F.',
            titulo: 'La ternura como fundamento de los Derechos Humanos (en Novela clínica psicoanalítica, pp. 236–256)',
            editorial: 'Paidós',
            año: '1995',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Woronowski, M.',
            titulo: '¿Tiene vigencia el grupo operativo? (en G. Jasiner y M. Woronowski, Para pensar a Pichón)',
            editorial: 'Lugar Editorial',
            año: '1992',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          {
            autor: 'Zito Lema, V.',
            titulo: 'Conversaciones con Enrique Pichon-Rivière (Cap. 6)',
            editorial: 'Ediciones Cinco',
            año: '1976',
            tipo: 'Obligatoria',
            unidad: 'Módulo II · Genealogía de lo grupal'
          },
          // Módulo III
          {
            autor: 'Byung-Chul Han',
            titulo: 'Psicopolítica',
            editorial: 'Herder',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Castel, R.',
            titulo: 'La dinámica de los procesos de marginalización: de la vulnerabilidad a la exclusión (en El Espacio Institucional)',
            editorial: 'Lugar Editorial',
            año: '1991',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Castoriadis, C.',
            titulo: 'Lo imaginario: la creación en el dominio socio-histórico (en Los dominios del hombre. Encrucijadas del laberinto, Cap. 3)',
            editorial: 'Gedisa',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Deleuze, G.',
            titulo: 'Post-scriptum sobre las sociedades de control (en Conversaciones)',
            editorial: 'Pre-Textos',
            año: '1995',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Madres en más, mujeres en menos: los mitos sociales de la maternidad (en La mujer de la ilusión, Cap. 7)',
            editorial: 'Paidós',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Lógicas colectivas y producción de subjetividad (en Las lógicas colectivas: Imaginarios, cuerpos y multiplicidades, p. 271)',
            editorial: 'Biblos',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Las diferencias desigualadas. Estrategias biopolíticas de dominio (en Las lógicas sexuales: amor, política y violencias)',
            editorial: 'Nueva Visión',
            año: '2009',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Los júbilos en visibilidad y los cuerpos en escena (en Jóvenes de vidas grises: Psicoanálisis y Biopolíticas)',
            editorial: 'Nueva Visión',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Foucault, M.',
            titulo: 'Las disciplinas (en Vigilar y castigar, Cap. 3)',
            editorial: 'Siglo XXI',
            año: '1987',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Foucault, M.',
            titulo: 'El sujeto y el poder (en O. Terán, comp., Discurso, Poder, Subjetividad)',
            editorial: 'El Cielo por Asalto',
            año: '1995',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          {
            autor: 'Varela, J.',
            titulo: 'Categorías espacio temporales y socialización escolar: del individualismo al narcisismo (en Escuela, Poder y Subjetivación)',
            editorial: 'La Piqueta',
            año: '1997',
            tipo: 'Obligatoria',
            unidad: 'Módulo III · Producción histórica de subjetividad'
          },
          // Módulo IV
          {
            autor: 'Deleuze, G. y Guattari, F.',
            titulo: 'Rizoma (en Mil Mesetas, Cap. 1)',
            editorial: 'Pre-Textos',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Módulo IV · Especificidad de lo grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'El nudo grupal (en El Campo Grupal. Notas para una genealogía, p. 135)',
            editorial: 'Nueva Visión',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo IV · Especificidad de lo grupal'
          },
          {
            autor: 'Fernández, A. M., Borakievich, S., Ojam, E. e Imaz, X.',
            titulo: 'Diversidades y campo grupal (Revista Ensayos y Experiencias N° 51 — TP Clase 6)',
            editorial: 'Novedades Educativas',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Módulo IV · Especificidad de lo grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Lógicas colectivas de la multiplicidad: cuerpos, pasiones y políticas (en Política y Subjetividad: asambleas barriales y fábricas recuperadas, p. 243)',
            editorial: 'Tinta Limón',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Módulo IV · Especificidad de lo grupal'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'La chica de la silueta: problemas a elucidar a partir de una situación (en Las lógicas colectivas, pp. 171–176 y 191–192)',
            editorial: 'Biblos',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Módulo IV · Especificidad de lo grupal'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Psicología de las masas y análisis del yo (Caps. 7 y 8, en Obras Completas)',
            editorial: 'Amorrortu',
            año: '1976',
            tipo: 'Obligatoria',
            unidad: 'Módulo IV · Especificidad de lo grupal'
          },
          {
            autor: 'Pavlovsky, E. y Kesselman, H.',
            titulo: 'La Multiplicación Dramática',
            editorial: 'Galerna',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Módulo IV · Especificidad de lo grupal'
          },
          // Módulo V
          {
            autor: 'Baremblitt, G.',
            titulo: 'La concepción institucional de la transferencia (en M. J. Acevedo y J. C. Volnovich, eds., El Espacio Institucional)',
            editorial: 'Lugar Editorial',
            año: '1991',
            tipo: 'Obligatoria',
            unidad: 'Módulo V · La relación grupo-institución'
          },
          {
            autor: 'Kononovich, B. y Saidón, O.',
            titulo: 'Sufrimiento y goce en las instituciones (en La Escena Institucional)',
            editorial: 'Lugar Editorial',
            año: '1991',
            tipo: 'Obligatoria',
            unidad: 'Módulo V · La relación grupo-institución'
          },
          {
            autor: 'Saidón, O.',
            titulo: 'Propuestas para un análisis institucional de los grupos (en Lo Grupal, pp. 87–96 y 110–111)',
            editorial: 'Búsqueda',
            año: '1983',
            tipo: 'Obligatoria',
            unidad: 'Módulo V · La relación grupo-institución'
          },
          {
            autor: 'Ulloa, F.',
            titulo: 'Cultura de la mortificación y proceso de manicomialización: una reactualización de las neurosis actuales (en Novela clínica psicoanalítica, pp. 236–256)',
            editorial: 'Paidós',
            año: '1995',
            tipo: 'Obligatoria',
            unidad: 'Módulo V · La relación grupo-institución'
          },
          // Módulo VI
          {
            autor: 'Bitrán, R. y Farruggio, L.',
            titulo: 'Abordaje interdisciplinario comunitario de las problemáticas en Salud Mental (Congreso Mundial de Salud Mental)',
            editorial: 'WFMH',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Borakievich, S., Corino, C., Ragonese, S. y Barroso, J.',
            titulo: 'Alojar las diversidades, elucidar las implicaciones. Reflexiones acerca de un dispositivo grupal en la sala de espera de un hospital público',
            editorial: 'UNLP',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Borakievich, S., Corino, C. y Frydman, M.',
            titulo: 'Hacia la construcción colectiva de herramientas para la implementación de la Ley de Identidad de Género en instituciones de Salud y Educación',
            editorial: 'IV Jornadas de Psicología Institucional · UBA',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Calloway, C.',
            titulo: 'Autorregulación de los colectivos autogestivos de trabajadores/as (Revista Idelcoop N° 218, pp. 11–30)',
            editorial: 'Idelcoop',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Calloway, C., Cabrera, C., Fernández, A. M. y Sánchez, M.',
            titulo: 'Las marchas del orgullo LGBTTIQ: Políticas, corporalidades y existenciarios (Crítica y Resistencias N° 3, pp. 12–25)',
            editorial: 'Crítica y Resistencias',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Calloway, C., Cabrera, C., Córdoba, A., Farruggio, L., Giménez, F. y Herrera, P.',
            titulo: 'Entre mujeres: producción de subjetividad y autonomía en un barrio de CABA (Revista de Psicología RevPsi)',
            editorial: 'UNLP',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Calloway, C., Farruggio, L. y Giménez, F.',
            titulo: 'El rol de la extensión universitaria en la implementación de dispositivos grupales',
            editorial: 'Material de Cátedra',
            año: 's/f',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Farruggio, L. R.',
            titulo: 'Salud mental, una cuestión de derechos (en A. Del Do y C. Calloway, eds., Consumos problemáticos y derechos humanos: perspectivas comunitarias)',
            editorial: 'Teseo',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Fernández, A. M., Imaz, X. y Calloway, C.',
            titulo: 'La invención de las fábricas sin patrón (en Política y subjetividad. Asambleas barriales y fábricas recuperadas, Cap. 10)',
            editorial: 'Tinta Limón',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Fernández, A. M.',
            titulo: 'Las máquinas colectivas en acción (en Las lógicas colectivas, Cap. 3 Tercera Parte)',
            editorial: 'Biblos',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Siqueira Peres, W.',
            titulo: 'La psicología, lo queer y la vida (en A. M. Fernández y W. Siqueira Peres, eds., La diferencia desquiciada. Géneros y diversidades sexuales)',
            editorial: 'Biblos',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          {
            autor: 'Ulloa, F.',
            titulo: 'Barriletes en bandada (en Salud ele-Mental)',
            editorial: 'Libros del Zorzal',
            año: '2011',
            tipo: 'Obligatoria',
            unidad: 'Módulo VI · Los grupos y el espacio público'
          },
          // Complementaria (selección de bibliografía electiva oficial)
          {
            autor: 'Grinberg, L., Langer, M. y Rodrigué, E.',
            titulo: 'Psicoterapia de grupo (Caps. 3 y 4)',
            editorial: 'Paidós',
            año: '1971',
            tipo: 'Complementaria'
          },
          {
            autor: 'Moreno, J. L.',
            titulo: 'Psicodrama',
            editorial: 'Hormé',
            año: '1972',
            tipo: 'Complementaria'
          },
          {
            autor: 'Lapassade, G.',
            titulo: 'Grupos, organizaciones e instituciones',
            editorial: 'Gedisa',
            año: '1977',
            tipo: 'Complementaria'
          },
          {
            autor: 'Castoriadis, C.',
            titulo: 'La institución imaginaria de la sociedad (Tomo I, Cap. 3)',
            editorial: 'Tusquets',
            año: '1983',
            tipo: 'Complementaria'
          },
          {
            autor: 'Kaës, R.',
            titulo: 'El grupo y el sujeto del grupo',
            editorial: 'Amorrortu',
            año: '1993',
            tipo: 'Complementaria'
          },
          {
            autor: 'Guattari, F.',
            titulo: 'Caosmosis',
            editorial: 'Manantial',
            año: '1996',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 064)',
        titular: 'Cintia Gisella Rolón',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=64&anio=2026&cuatrimestre=2',
        enfoque:
          'Pensamiento complejo y enfoque plural que enlaza las teorías clásicas de grupos (Anzieu y Martin, Romero, Bauleo, Pichon-Rivière, Pavlovsky, Ulloa, Winnicott, Lemoine), el psicoanálisis de grupos y el movimiento institucionalista con el pensamiento contemporáneo, el campo del arte y las teorías del juego. Se apoya en tres ejes transversales: (1) perspectiva interseccional y problemática de género; (2) epistemologías feministas, estudios queer, giro afectivo y ética del cuidado (Butler, Sara Ahmed, Lauren Berlant, Remedios Zafra, Elena de la Aldea); y (3) dimensión de época y precariedad (Agamben, Deleuze, Mark Fisher, Lewkowicz, Cantarelli, Bleichmar, Illouz y Cabanas en su crítica a la «happycracia» y el coaching ontológico). Aborda equipos laborales y liderazgos, grupos de aprendizaje, clínica grupal e intervenciones en catástrofes sociales y crisis ecológica (Moffatt, Waisbrot y Berenstein, Morizot), con intenso trabajo áulico en crónicas, dispositivos lúdicos, psicodramáticos y artísticos.',
        evaluacion:
          'Dos exámenes parciales individuales, escritos y presenciales (TP 7 y TP 13, rendidos en la banda horaria del teórico correspondiente; se puede recuperar por aplazo solo uno de los parciales adicionando bibliografía del módulo siguiente) más la confección de una crónica grupal presentada en coloquio en comisiones de trabajos prácticos (TP 14). La nota final promedia el 1° parcial con el promedio entre el 2° parcial y la crónica grupal. Promoción sin examen final: mínimo de 7 en cada instancia (ambos parciales y crónica/coloquio) y 75% de asistencia en teóricos, prácticos y Jornada grupal (sábado de 14 a 18 hs). Promoción con examen final: mínimo de 4 en cada instancia y 75% de asistencia. Admite examen en condición de libre (escrito eliminatorio + oral sobre todo el programa vigente).',
        bibliografia: [
          // Temas 1 y 2
          {
            autor: 'Bercovich, K.',
            titulo: 'Antecedentes significativos del estudio de los grupos (en Cuaderno Grupalidades: algunas problemáticas)',
            editorial: 'Material de Cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Bernard, M., Edelman, L., Kordon, D., L\'Hoste, M., Segoviano, M. y Cao, M.',
            titulo: 'Desarrollos sobre grupalidad. Una perspectiva psicoanalítica (Selección)',
            editorial: 'Lugar Editorial',
            año: '1995',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Vainer, A. y Carpintero, E.',
            titulo: 'Psicoanálisis encierro en los consultorios y fracturas en las instituciones (en Las Huellas de la Memoria II: 1970–1983, 2ª ed. ampliada)',
            editorial: 'Topía',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'Disquisiciones sobre la técnica. Prefacio. Convites del pensar (en Cuadernos Grupalidades y Conversaciones teóricas)',
            editorial: 'Material de Cátedra',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Romero, R.',
            titulo: 'Grupo. Objeto y Teoría I (Cap. 1, selección)',
            editorial: 'Lugar Editorial',
            año: '1987',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Anzieu, D. y Martin, J.',
            titulo: 'La dinámica de los grupos pequeños (Cap. 1)',
            editorial: 'Kapelusz',
            año: '1969',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Bauleo, A.',
            titulo: 'Notas para una conceptualización de grupos (en Contrainstitución y grupos)',
            editorial: 'Atuel',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'En nombre de la amistad (en Conversaciones teóricas, manuscritos de aula)',
            editorial: 'Material de Cátedra',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          {
            autor: 'Romero, R.',
            titulo: 'Grupo. Objeto y Teoría II (Caps. 1, 2, 3 y 4, selección)',
            editorial: 'Lugar Editorial',
            año: '1992',
            tipo: 'Obligatoria',
            unidad: 'Temas 1 y 2 · Introducción, antecedentes, tipos de grupos y cohesión grupal'
          },
          // Temas 3 y 4
          {
            autor: 'Laval, C. y Dardot, P.',
            titulo: 'Introducción. Lo común: un principio político (en Común)',
            editorial: 'Gedisa',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Pavlovsky, E.',
            titulo: 'Prólogo (en Lo Grupal 1)',
            editorial: 'Búsqueda',
            año: '1983',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'Conversaciones teóricas y Grupalidades: algunas problemáticas (Cuadernos de cátedra, selección)',
            editorial: 'Material de Cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Ulloa, F.',
            titulo: 'Que la muerte te agarre vivo (en Cuaderno Grupalidades: algunas problemáticas)',
            editorial: 'Material de Cátedra',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Agamben, G.',
            titulo: '¿Qué es lo contemporáneo? (en Desnudez)',
            editorial: 'Adriana Hidalgo',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Andrada, L.',
            titulo: 'Interseccionalidad, grupalidad y conocimiento situado',
            editorial: 'Material de Cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Butler, J.',
            titulo: 'Política de género y el derecho a aparecer (Selección, en Cuaderno Escenarios contemporáneos: precariedades)',
            editorial: 'Material de Cátedra',
            año: '2017',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'De la Aldea, E.',
            titulo: 'Los cuidados en tiempos de descuidos (Selección, en Cuaderno Escenarios contemporáneos: precariedades)',
            editorial: 'Material de Cátedra',
            año: '2019',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Deleuze, G.',
            titulo: 'El abecedario: letra «M» de enfermedad (maladie)',
            editorial: 'Material de Cátedra',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'Prefacio de Escenarios contemporáneos: precariedades (en Conversaciones teóricas, manuscritos de clases)',
            editorial: 'Material de Cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Temas 3 y 4 · Procesos grupales, precariedad, interseccionalidad y ética del cuidado'
          },
          // Temas 5 y 6
          {
            autor: 'Ahmed, S.',
            titulo: 'Sonreí (en Cuaderno Escenarios contemporáneos: precariedades)',
            editorial: 'Material de Cátedra',
            año: '2019',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          {
            autor: 'Andrada, L.',
            titulo: 'Sublevaciones y gestiones del odio (en Cuaderno Escenarios contemporáneos: precariedades)',
            editorial: 'Material de Cátedra',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          {
            autor: 'Berlant, L.',
            titulo: 'El optimismo cruel (Prólogo)',
            editorial: 'Caja Negra',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'Por ciertas palabras / Confianzas / Figuras de la intemperie (en Conversaciones teóricas, manuscritos de aula)',
            editorial: 'Material de Cátedra',
            año: '2023',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          {
            autor: 'Zafra, R.',
            titulo: 'El Entusiasmo. Precariedad y trabajo creativo en la era digital (Cap. 1)',
            editorial: 'Anagrama',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          {
            autor: 'Deleuze, G.',
            titulo: 'Posdata sobre las sociedades de control',
            editorial: 'Ed. Norman',
            año: '1991',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          {
            autor: 'Fisher, M.',
            titulo: 'Realismo capitalista: ¿no hay alternativa? (Cap. 3)',
            editorial: 'Caja Negra',
            año: '2009',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'Escenarios contemporáneos: precariedades (Cuaderno de cátedra, compilación)',
            editorial: 'Material de Cátedra',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Temas 5 y 6 · Atmósferas afectivas, precariedad y salud mental comunitaria'
          },
          // Temas 7 y 8
          {
            autor: 'Álvaro, D.',
            titulo: 'Vidas diseñadas. Crítica del coaching ontológico',
            editorial: 'Material de Cátedra',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'Hubert, P.',
            titulo: 'El bienestar en la cultura y otras composiciones precarias (Introducción y Cap. 1)',
            editorial: 'Red Editorial',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'Illouz, E. y Cabanas, E.',
            titulo: 'Happycracia (Cap. 4: «Se vende ego feliz»)',
            editorial: 'Planeta',
            año: '2023',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'López Petit, S.',
            titulo: 'Emergencias (en Cuaderno Escenarios contemporáneos: precariedades)',
            editorial: 'Material de Cátedra',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'Bleichmar, S.',
            titulo: 'La difícil tarea de ser joven (Revista Topía)',
            editorial: 'Topía',
            año: '2001',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'Cantarelli, M. y Lewkowicz, I.',
            titulo: 'Del fragmento a la situación',
            editorial: 'Red Editorial',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'Cantarelli, M.',
            titulo: 'Habitar el Estado. Pensamiento estatal en tiempos a-estatales (Caps. 3 y 6)',
            editorial: 'Hydra',
            año: '2010',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'Freeman, J.',
            titulo: 'La tiranía de las faltas de estructuras (en Fórum de Políticas Feministas)',
            editorial: 'Fórum de Políticas Feministas',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          {
            autor: 'Ulloa, F.',
            titulo: 'Novela clínica psicoanalítica (Caps. «Cultura de la mortificación y proceso de manicomialización» y «La tragedia en las instituciones»)',
            editorial: 'Paidós',
            año: '1995',
            tipo: 'Obligatoria',
            unidad: 'Temas 7 y 8 · Poderes terapéuticos contemporáneos y lógicas institucionales'
          },
          // Temas 9 y 10
          {
            autor: 'Lewkowicz, I.',
            titulo: 'La subjetividad heroica. Un obstáculo en las prácticas comunitarias de la salud',
            editorial: 'Hospital Durand',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Moffatt, A.',
            titulo: 'Entrevista a cargo de Eduardo Cossi',
            editorial: 'Material de Cátedra',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Pavlovsky, E. y Frydlewsky, L.',
            titulo: 'Sobre dos modos de comprender del coordinador grupal (en Lo Grupal 1)',
            editorial: 'Búsqueda',
            año: '1983',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'Figuras para pensar posiciones clínicas',
            editorial: 'Material de Cátedra',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Ulloa, F.',
            titulo: 'Comunidad clínica (Ficha de Cátedra de Psicoterapia II)',
            editorial: 'UNLP',
            año: '2005',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Lemoine, G. y P.',
            titulo: 'Teoría del Psicodrama (Caps. «La identificación» y «¿Qué es la identificación?»)',
            editorial: 'Gedisa',
            año: '1979',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Pavlovsky, E.',
            titulo: 'La poesía en psicoterapia (en Lo Grupal 2)',
            editorial: 'Búsqueda',
            año: '1985',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Pichon-Rivière, E.',
            titulo: 'Estructura de una escuela destinada a la formación de psicólogos sociales (en Cuaderno Grupalidades: algunas problemáticas)',
            editorial: 'Material de Cátedra',
            año: '1972',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          {
            autor: 'Winnicott, D. W.',
            titulo: 'Realidad y Juego (Cap. 3: «El juego: exposición teórica» y Cap. 4: «El juego: actividad creadora y búsqueda de la persona»)',
            editorial: 'Gedisa',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Temas 9 y 10 · Clínica grupal, coordinación, técnicas, juego y psicodrama'
          },
          // Temas 11 y 12
          {
            autor: 'Ahmed, S.',
            titulo: 'Un oído feminista para el malestar en las instituciones (Artículo Página/12)',
            editorial: 'Página/12',
            año: '2022',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Corea, C. y Lewkowicz, I.',
            titulo: 'Subjetividad pedagógica y subjetividad mediática (en Pedagogía del aburrido — TP 11)',
            editorial: 'Paidós',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Martínez Palacios, J.',
            titulo: 'No te pongas nerviosa. Sobre cómo hacer hablar a los nervios acerca de la dominación (Cap. 1, selección)',
            editorial: 'Upaingoa',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Molloy, S.',
            titulo: 'Sentido de ausencias (Revista Iberoamericana)',
            editorial: 'Revista Iberoamericana',
            año: '1985',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Rolón, C.',
            titulo: 'Seminario de cátedra: Resistencias estudiantiles universitarias',
            editorial: 'Material de Cátedra',
            año: '2019',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Gorodischer, J.',
            titulo: '«Hay que pasar de la ira al llanto». Entrevista a Alfredo Moffatt (Tragedia de Cromañón)',
            editorial: 'Material de Cátedra',
            año: '2005',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Morizot, B.',
            titulo: 'La crisis ecológica como crisis de la sensibilidad (en Maneras de estar vivo)',
            editorial: 'Errata Naturae',
            año: '2021',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Pichon-Rivière, E.',
            titulo: 'Situaciones catastróficas (en Psicología de la vida cotidiana)',
            editorial: 'Nueva Visión',
            año: '1967',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          {
            autor: 'Waisbrot, D. y Berenstein, I.',
            titulo: 'Clínica psicoanalítica ante las catástrofes sociales. Una experiencia argentina: Malvinas (Selección)',
            editorial: 'Paidós',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Temas 11 y 12 · Intervenciones situadas (universidad/género) y situaciones de crisis'
          },
          // Complementaria (selección de bibliografía ampliatoria oficial)
          {
            autor: 'Lourau, R.',
            titulo: 'El análisis institucional (Cap. 5)',
            editorial: 'Amorrortu',
            año: '1975',
            tipo: 'Complementaria'
          },
          {
            autor: 'Huizinga, J.',
            titulo: 'Homo Ludens',
            editorial: 'Alianza Editorial',
            año: '1998',
            tipo: 'Complementaria'
          },
          {
            autor: 'Barthes, R.',
            titulo: 'Cómo vivir juntos. Notas de cursos y seminarios en el Collège de France (1976–1977)',
            editorial: 'Siglo XXI',
            año: '2005',
            tipo: 'Complementaria'
          },
          {
            autor: 'Rose, N.',
            titulo: 'Políticas de la vida. Biomedicina, poder y subjetividad en el siglo XXI (Introducción)',
            editorial: 'UNIPE',
            año: '2012',
            tipo: 'Complementaria'
          },
          {
            autor: 'Ahmed, S.',
            titulo: 'La política cultural de las emociones (Caps. 1, 2 y 3)',
            editorial: 'UNAM',
            año: '2015',
            tipo: 'Complementaria'
          },
          {
            autor: 'Berardi, F.',
            titulo: 'Fenomenología del fin. Sensibilidad y mutación conectiva (Selección)',
            editorial: 'Caja Negra',
            año: '2017',
            tipo: 'Complementaria'
          }
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
    correlativas: ['Psicoanálisis: Freud', 'Psicología del Aprendizaje'],
    descripcion: 'Estudio de los procesos de constitución psíquica, desarrollo cognitivo, emocional, comunicacional y social desde el nacimiento hasta la pubertad, abordando la infancia como categoría sociohistórica y perspectiva de derechos.',
    objetivos: [
      'Apropiarse de los marcos teóricos clásicos y contemporáneos del desarrollo infantil (psicoanálisis, constructivismo genético, apego, enfoques relacionales, sociohistóricos y neurodesarrollo).',
      'Entrenar instrumentos fundamentales de indagación psicológica mediante Trabajo de Campo: observación de un niño/a, entrevista a madres/padres, historia vital evolutiva e informe integrador.',
      'Reflexionar críticamente sobre las infancias actuales, las nuevas configuraciones familiares, los medios digitales y el paradigma de Promoción y Protección Integral de Derechos.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 553)',
        titular: 'A designar (ex María Elena Pizzo)',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=553&anio=2026&cuatrimestre=2',
        enfoque:
          'Abordaje bio-psico-social e histórico-crítico organizado en cuatro partes que articulan modelos clásicos y contemporáneos sin eclecticismo: (I) historia de la infancia, neurodesarrollo abierto al contexto (Fóster y López), pantallas y medios digitales (Haidt), familias actuales (Débora Tajer) y constitución subjetiva (Silvia Bleichmar, Winnicott); (II) profundización teórica en Psicoanálisis (Freud, Dio Bleichmar, Urribarri, Clerici y Tajer sobre género) y Constructivismo Genético junto a Teoría de la Mente (los 6 estadios sensoriomotores de Piaget, función semiótica, operaciones concretas y Ángel Rivière); (III) diacronía y sincronía por franjas etarias (Brazelton y Cramer, Bowlby, Stern, Palacios/Marchesi/Coll), dibujo infantil según Lowenfeld y evaluación psicológica del desarrollo (Escala Argentina EAIS y crítica al DSM-V de Vasen); y (IV) Derechos del Niño (Ley 26.061), maltrato y abuso sexual (Toporosi), pobreza y neurociencias (Sebastián Lipina), Derecho a la Identidad y restitución (Abuelas de Plaza de Mayo) y cine.',
        evaluacion:
          'Dos instancias evaluativas: 1) Trabajo de Campo (TC) en grupos de 2 estudiantes con 3 entregas progresivas a lo largo de los TP: observación no participante de un niño/a (TP 4), entrevista a madres/padres con genograma y esquema diacrónico (TP 9), e historia vital evolutiva e informe integrador escrito (TP 14), calificado con una nota cuantitativa global; 2) Un examen parcial escrito, individual y presencial dividido en 2 módulos cuyas notas se promedian en una única calificación, que luego se promedia con el TC. Promoción sin examen final: 75% de asistencia (2 teóricos y 1 práctico semanales; jornadas académicas optativas) y mínimo de 7 tanto en el TC como en el promedio de ambos módulos del parcial. Con examen final (regular): 75% de asistencia y mínimo de 4 en el TC y en el promedio de ambos módulos.',
        bibliografia: [
          // Parte I
          {
            autor: 'García, M. J.',
            titulo: '¿Por qué Psicología Evolutiva?',
            editorial: 'Dpto. de Publicaciones · UBA',
            año: '1987',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'García, M. J.',
            titulo: '¿Qué se entiende por desarrollo?',
            editorial: 'Dpto. de Publicaciones · UBA',
            año: '1997',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Pizzo, M. E.',
            titulo: 'El niño como objeto de estudio de los distintos modelos teóricos',
            editorial: 'Dpto. de Publicaciones · UBA',
            año: '2011',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Carli, S.',
            titulo: 'La infancia como construcción social (en De la familia a la escuela. Infancia, socialización y subjetividad, pp. 11–38)',
            editorial: 'Santillana',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Moreno, J.',
            titulo: 'Lo Infantil II. Historia de la Infancia y del juguete (en Ser Humano. La inconsistencia, los vínculos, la crianza, pp. 149–166)',
            editorial: 'Letra Viva',
            año: '2010',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Fóster, J. y López, I.',
            titulo: 'Neurodesarrollo humano: un proceso de cambio continuo de un sistema abierto y sensible al contexto (Rev. Méd. Clín. Las Condes 33(4), pp. 338–346)',
            editorial: 'Clínica Las Condes',
            año: '2022',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Haidt, J.',
            titulo: 'Introducción: Crecer en Marte (en La generación ansiosa, pp. 11–28)',
            editorial: 'Paidós',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Tajer, D.',
            titulo: 'El modelo familiar moderno, sus alternativas actuales y los nuevos desafíos (en Psicoanálisis para todxs, pp. 49–64)',
            editorial: 'Topía',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Vasen, J.',
            titulo: 'Escuelas del presente (en Las certezas perdidas. Padres y maestros ante los desafíos del presente, pp. 75–92)',
            editorial: 'Paidós',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Aranda, N.',
            titulo: 'La familia y desarrollo infantil',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Bleichmar, S.',
            titulo: 'Producción de subjetividad y constitución del psiquismo (en El desmantelamiento de la subjetividad. Estallido del yo, pp. 33–49)',
            editorial: 'Topía',
            año: '2009',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          {
            autor: 'Winnicott, D. W.',
            titulo: 'La familia y la madurez emocional [1960] (en La familia y el desarrollo del individuo, pp. 117–124)',
            editorial: 'Hormé',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Parte I · Introducción a la Psicología del desarrollo'
          },
          // Parte II-1: Psicoanálisis
          {
            autor: 'Freud, S.',
            titulo: 'Esquema del psicoanálisis (Parte I, Cap. III, Obras Completas Vol. XXIII, pp. 150–154)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La interpretación de los sueños (Cap. VII, Pto. C: «Acerca del cumplimiento de deseo», Vol. V, pp. 543–564)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Clerici, G. y Tajer, D.',
            titulo: 'Infancias, Psicoanálisis y Género. Conversaciones entre Débora Tajer y el equipo docente de Niñez Cátedra I',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2024',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Dio Bleichmar, E.',
            titulo: 'Introducción (en La sexualidad femenina, pp. 21–31)',
            editorial: 'Paidós',
            año: '1997',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Tres ensayos de teoría sexual (Ensayo II: La sexualidad infantil, Vol. VII, pp. 157–188)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El carácter y el erotismo anal (Vol. IX, pp. 149–158)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre las teorías sexuales infantiles (Vol. IX, pp. 183–201)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Conferencias de introducción al psicoanálisis (Conferencia XXI: Desarrollo libidinal y organizaciones sexuales, Vol. XVI, pp. 292–308)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La organización genital infantil (Vol. XIX, pp. 141–149)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El sepultamiento del complejo de Edipo (Vol. XIX, pp. 177–187)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El yo y el ello (Pto. III: El yo y el superyó / ideal del yo, Vol. XIX, pp. 30–40)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Algunas consecuencias psíquicas de la diferencia anatómica entre los sexos (Vol. XIX, pp. 259–276)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Laplanche, J. y Pontalis, J.-B.',
            titulo: 'Diccionario de Psicoanálisis',
            editorial: 'Labor',
            año: '1971',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Urribarri, R.',
            titulo: 'Consideraciones sobre el período de latencia',
            editorial: 'Ficha de Cátedra · UBA',
            año: '1990',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Urribarri, R.',
            titulo: 'Planteando la Latencia (en Estructuración psíquica y subjetivación del niño de escolaridad primaria, pp. 95–108)',
            editorial: 'Noveduc',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El creador literario y el fantaseo (Vol. IX, pp. 123–135)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Más allá del principio del placer (Cap. II, Vol. XVIII, pp. 12–17)',
            editorial: 'Amorrortu',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          {
            autor: 'Winnicott, D. W.',
            titulo: 'Objetos y fenómenos transicionales (en Realidad y juego, pp. 17–45)',
            editorial: 'Gedisa',
            año: '1985',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Psicoanálisis y constitución subjetiva'
          },
          // Parte II-2: Constructivismo Genético y desarrollo cognitivo
          {
            autor: 'Piaget, J.',
            titulo: 'Estadios 1 y 2: ejercicio de los reflejos, primeras adaptaciones adquiridas y reacción circular primaria (en El nacimiento de la inteligencia en el niño, pp. 12–149)',
            editorial: 'Grijalbo',
            año: '1994',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Estadios 3 y 4: reacciones circulares secundarias y coordinación de esquemas secundarios (en El nacimiento de la inteligencia en el niño, pp. 150–251)',
            editorial: 'Grijalbo',
            año: '1936',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Estadios 5 y 6: reacción circular terciaria e invención de nuevos medios por combinación mental (en El nacimiento de la inteligencia en el niño, pp. 252–340)',
            editorial: 'Grijalbo',
            año: '1936',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Vila, I.',
            titulo: 'Los inicios de la comunicación, la representación y el lenguaje (en Palacios, Marchesi y Coll, Desarrollo Psicológico y Educación, Tomo 1, pp. 133–150)',
            editorial: 'Alianza',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'La función semiótica o simbólica (en Psicología del niño, pp. 59–95)',
            editorial: 'Morata',
            año: '1971',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Rivière, A.',
            titulo: 'Investigaciones empíricas sobre las destrezas mentalistas (en A. Rivière y M. Núñez, La mirada mental, pp. 17–40)',
            editorial: 'Aique',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'El paso de los esquemas sensorio-motores a los conceptuales y De las categorías prácticas a las representativas (en La formación del símbolo en el niño, pp. 297–370)',
            editorial: 'Fondo de Cultura Económica',
            año: '1961',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'La elaboración del pensamiento. Intuición y operaciones (en Psicología de la inteligencia, pp. 130–165)',
            editorial: 'Psique',
            año: '1966',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Las operaciones concretas del pensamiento y las relaciones interindividuales (en Psicología del niño, pp. 96–130)',
            editorial: 'Morata',
            año: '1971',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'La clasificación de los juegos y La explicación del juego (en La formación del símbolo en el niño, pp. 146–231)',
            editorial: 'Fondo de Cultura Económica',
            año: '1961',
            tipo: 'Obligatoria',
            unidad: 'Parte II · Modelos teóricos: Constructivismo Genético y desarrollo cognitivo'
          },
          // Parte III
          {
            autor: 'Brazelton, T. B. y Cramer, B. G.',
            titulo: 'La prehistoria del vínculo y Los albores del vínculo (en La relación más temprana: padres, bebés y el drama del apego inicial, pp. 25–62)',
            editorial: 'Paidós',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Biotti, M. F. y Panighetti, M. L.',
            titulo: 'Algunas problemáticas básicas de la Psicología del desarrollo. Características del período neonatal',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Bowlby, J.',
            titulo: 'El cuidado de los niños y El papel del apego en el desarrollo de la personalidad (en Una base segura, pp. 13–32 y 140–158)',
            editorial: 'Paidós',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'De Mathía, M.',
            titulo: 'Características específicas del desarrollo infantil en la primera infancia',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Stern, D.',
            titulo: 'El repertorio materno (en La primera relación madre-hijo, pp. 23–58)',
            editorial: 'Morata',
            año: '1998',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Aranda, N.',
            titulo: 'Segundo y tercer año de vida: etapa del deambulador',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Moreno, M.',
            titulo: 'Desarrollo y conducta social de los 2 a los 6 años (en Palacios, Marchesi y Coll, Desarrollo Psicológico y Educación, Tomo 1, pp. 305–326)',
            editorial: 'Alianza',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Palacios, J., Cubero, R., Luque, A. y Mora, J.',
            titulo: 'Desarrollo físico y psicomotor después de los 2 años (en Desarrollo Psicológico y Educación, Tomo 1, pp. 179–200)',
            editorial: 'Alianza',
            año: '1999',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Gómez, L., Bruno, K. y Bollasina, V.',
            titulo: 'Una aproximación al desarrollo entre los 3 y los 5 años',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2023',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Cáceres, M.',
            titulo: 'Los años escolares y «Los venenos» de Julio Cortázar',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'UNICEF / Gobierno de la Prov. de Buenos Aires',
            titulo: 'Guía de sensibilización sobre convivencia digital',
            editorial: 'UNICEF',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Pizzo, M. E.',
            titulo: 'El desarrollo de los niños en edad escolar',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Lowenfeld, V.',
            titulo: 'Etapas del dibujo infantil: garabateo (2–4), pre-esquemática (4–7), esquemática (7–9) y comienzo del realismo (en El desarrollo de la capacidad creadora, pp. 119–241)',
            editorial: 'Kapelusz',
            año: '1973',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Krauth, K.',
            titulo: 'El juego en la evaluación del desarrollo',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Oiberman, A., Paolini, C. y Mansilla, M.',
            titulo: 'Escala Argentina de Inteligencia Sensorio-motriz (EAIS): Percentiles Nacionales (Interdisciplinaria 29(2), pp. 305–323)',
            editorial: 'Interdisciplinaria',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Oiberman, A., Paolini, C. y Mansilla, M.',
            titulo: 'Manual técnico de Administración de la EAIS de 6 meses a 2 años (en Cómo piensan los bebés en el siglo XXI, pp. 65–106)',
            editorial: 'Lugar Editorial',
            año: '2020',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Vasen, J.',
            titulo: 'La biblia y el calefón (en Una nueva epidemia de nombres impropios. El DSM-V invade la infancia en la clínica y en las aulas, pp. 19–26)',
            editorial: 'Noveduc',
            año: '2011',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Aberastury, A.',
            titulo: 'La entrevista inicial con los padres (en Teoría y técnica del psicoanálisis de niños, pp. 75–91)',
            editorial: 'Paidós',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'García, M. J.',
            titulo: 'La historia vital evolutiva (notas introductorias)',
            editorial: 'Ficha de Cátedra · UBA',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'García, M. J., Pizzo, M. E. y Aranda, N.',
            titulo: 'Orientaciones para la realización de la observación en niños',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Herrero, C. y Rivas, M. S.',
            titulo: 'Lineamientos para la realización de la entrevista a padres',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Landeira, S.',
            titulo: 'La utilización del genograma y el esquema diacrónico en la organización de los datos recogidos en la entrevista a padres',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2006',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          {
            autor: 'Rinaldi, G., De Mathía, M., Panzera, G., Gómez, L. y Bruno, K.',
            titulo: 'Algunas consideraciones para la elaboración del Informe',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2025',
            tipo: 'Obligatoria',
            unidad: 'Parte III · Diacronía y sincronía, dibujo, evaluación y Trabajo de Campo'
          },
          // Parte IV
          {
            autor: 'Clerici, G.',
            titulo: 'Niños, niñas y adolescentes como sujetos de derechos. Intervenciones en el marco del sistema de protección integral. Las medidas de abrigo',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Congreso de la Nación Argentina',
            titulo: 'Ley Nacional N° 26.061 de Protección Integral de los Derechos de Niñas, Niños y Adolescentes',
            editorial: 'Legislación Nacional',
            año: '2005',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'ONU · Asamblea General',
            titulo: 'Convención sobre los Derechos del Niño',
            editorial: 'Naciones Unidas',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Aranda, N.',
            titulo: 'Maltrato infantil: introducción a la problemática del maltrato hacia los niños',
            editorial: 'Ficha de Cátedra · UBA',
            año: '2010',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Toporosi, S.',
            titulo: '¿Qué es el abuso sexual? (en En carne viva. Abuso sexual infantojuvenil, pp. 23–53)',
            editorial: 'Topía',
            año: '2018',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Duschatzky, S. y Corea, C.',
            titulo: 'Chicos en banda. Los caminos de la subjetividad en el declive de las instituciones',
            editorial: 'Paidós',
            año: '2001',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Rajnerman, G. y Santos, G.',
            titulo: 'Adolescencias intervenidas: una perspectiva en situaciones de vulnerabilidad social (Intersecciones PSI N° 44)',
            editorial: 'Facultad de Psicología · UBA',
            año: '2022',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Lipina, S.',
            titulo: 'Pobreza: conceptos y medición y Aportes de la neurociencia al estudio de los efectos de la pobreza sobre el desarrollo infantil (en Vulnerabilidad social y desarrollo cognitivo)',
            editorial: 'Jorge Baudino / UNSAM',
            año: '2008',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Vinocur, P. y Ruiz, V.',
            titulo: 'Inclusión social y desarrollo infantil. La centralidad de la familia (en H. Lejarraga, ed., Desarrollo del niño en contexto, pp. 611–644)',
            editorial: 'Paidós',
            año: '2004',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Bleichmar, S.',
            titulo: 'El traumatismo en la Apropiación-Restitución (en Abuelas de Plaza de Mayo, Restitución de niños, pp. 313–319)',
            editorial: 'Eudeba',
            año: '1997',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Conte, L.',
            titulo: 'El derecho a la identidad (en Abuelas de Plaza de Mayo, Restitución de niños, pp. 229–234)',
            editorial: 'Eudeba',
            año: '1997',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          {
            autor: 'Rosenberg, M.',
            titulo: 'Apuntes sobre identidad, filiación y restitución (en Abuelas de Plaza de Mayo, Restitución de niños, pp. 289–295)',
            editorial: 'Eudeba',
            año: '1997',
            tipo: 'Obligatoria',
            unidad: 'Parte IV · Perspectiva de derechos y problemáticas complejas de la niñez'
          },
          // Complementaria (selección de bibliografía ampliatoria oficial)
          {
            autor: 'Erikson, E. H.',
            titulo: 'Ocho edades del hombre (en Infancia y sociedad, pp. 222–247)',
            editorial: 'Hormé',
            año: '1974',
            tipo: 'Complementaria'
          },
          {
            autor: 'Mahler, M., Pine, F. y Bergman, A.',
            titulo: 'Sobre la simbiosis humana y las subfases del proceso de separación-individuación (en El nacimiento psicológico del infante humano)',
            editorial: 'Marymar',
            año: '1977',
            tipo: 'Complementaria'
          },
          {
            autor: 'Bronfenbrenner, U.',
            titulo: 'Conceptos básicos (en La ecología del desarrollo humano, pp. 35–61)',
            editorial: 'Paidós',
            año: '1987',
            tipo: 'Complementaria'
          },
          {
            autor: 'Vygotsky, L. S.',
            titulo: 'El desarrollo de los procesos psicológicos superiores',
            editorial: 'Crítica Grijalbo',
            año: '1988',
            tipo: 'Complementaria'
          },
          {
            autor: 'Byung-Chul Han',
            titulo: 'De la cosa a la no-cosa y Smartphone (en No-cosas. Quiebres del mundo de hoy)',
            editorial: 'Taurus',
            año: '2022',
            tipo: 'Complementaria'
          },
          {
            autor: 'Gago Galvagno, L., Azzollini, S. y Elgier, A. M.',
            titulo: 'Asociaciones entre la exposición a medios electrónicos y comunicación durante la infancia temprana (Pensando Psicología 18(1))',
            editorial: 'Pensando Psicología',
            año: '2022',
            tipo: 'Complementaria'
          }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 554)',
        titular: 'A designar (ex Paolicchi / Sorgen)',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=554&anio=2026&cuatrimestre=2',
        enfoque:
          'Perspectiva compleja, crítica y bio-psico-social organizada diacrónicamente en cinco módulos por franjas etarias (aproximación histórico-crítica, 0 a 2 años, 2 a 6 años, 6 a 12 años e infancias en la actualidad), otorgando predominancia teórica al Psicoanálisis (Freud, Donald Winnicott, René Spitz, Emilce Dio Bleichmar, Silvia Bleichmar, Julio Moreno, María Cristina Rojas, Yago Franco) en articulación con la teoría del apego (John Bowlby), la interacción temprana (Brazelton y Cramer, Daniel Stern), la Psicología Genética (Jean Piaget), el enfoque sociohistórico (Vygotsky), el dibujo infantil según Osterrieth y las investigaciones de la cátedra sobre parentalidad, intersubjetividad, juego y vulnerabilidad social (Paolicchi, Bozzalla, Sorgen, Naiman). Revisa críticamente el criterio evolutivo lineal e integra la diversidad familiar, de género y la perspectiva de derechos.',
        evaluacion:
          'Dos instancias evaluativas parciales: 1) Trabajo de Campo en grupos de 3 estudiantes (observación de un niño/a, entrevista a madres/padres, historia vital evolutiva e informe integrador con inferencias teóricas), con una primera evaluación en el TP 7, entrega final escrita y exposición grupal de 10 minutos + autoevaluación en el TP 14; 2) Un examen parcial escrito, presencial e individual dividido en 2 módulos (1° módulo en TP 7). Promoción sin examen final: 75% de asistencia (teóricos, prácticos y Actividades Especiales obligatorias dentro del horario de teóricos), mínimo de 7 en el Parcial y en el Trabajo de Campo (sin posibilidad de recuperar ninguno de los módulos del parcial para mantener la promoción), y presentación de un comentario escrito sobre al menos una Actividad Especial. Con examen final (regular): 75% de asistencia y mínimo de 4 en cada evaluación (examen final oral individual).',
        bibliografia: [
          // Módulo 1
          {
            autor: 'Bleichmar, S.',
            titulo: 'Límites y excesos del concepto de subjetividad en psicoanálisis (en La subjetividad en riesgo, Cap. XI)',
            editorial: 'Topía',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Módulo 1 · Aproximación histórico-crítica a la Psicología del desarrollo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El malestar en la cultura (Cap. 1, Obras Completas Vol. XXI)',
            editorial: 'Amorrortu',
            año: '1930',
            tipo: 'Obligatoria',
            unidad: 'Módulo 1 · Aproximación histórico-crítica a la Psicología del desarrollo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Esquema del psicoanálisis (Parte I, Cap. III: «El desarrollo de la función sexual», Vol. XXIII)',
            editorial: 'Amorrortu',
            año: '1940',
            tipo: 'Obligatoria',
            unidad: 'Módulo 1 · Aproximación histórico-crítica a la Psicología del desarrollo'
          },
          {
            autor: 'Moreno, J.',
            titulo: 'La impronta mediática en el discurso infantil (en La infancia y sus bordes. Un desafío para el psicoanálisis, Cap. 8)',
            editorial: 'Paidós',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Módulo 1 · Aproximación histórico-crítica a la Psicología del desarrollo'
          },
          {
            autor: 'Palacios, J.',
            titulo: 'Psicología evolutiva: concepto, enfoques, controversias y métodos (en Palacios, Marchesi y Coll, Desarrollo Psicológico y Educación, Tomo I, Cap. 1)',
            editorial: 'Alianza',
            año: '1998',
            tipo: 'Obligatoria',
            unidad: 'Módulo 1 · Aproximación histórico-crítica a la Psicología del desarrollo'
          },
          {
            autor: 'Piaget, J. e Inhelder, B.',
            titulo: 'Psicología del niño (Introducción y Conclusiones)',
            editorial: 'Morata',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Módulo 1 · Aproximación histórico-crítica a la Psicología del desarrollo'
          },
          // Módulo 2
          {
            autor: 'Aberastury, A.',
            titulo: 'La entrevista inicial con los padres (en Teoría y técnica del psicoanálisis de niños, Cap. V — TP Mód. 2)',
            editorial: 'Paidós',
            año: '1988',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Bleichmar, S.',
            titulo: 'Primeras inscripciones, primeras ligazones (en La fundación de lo inconsciente, Cap. 1, pp. 31–38)',
            editorial: 'Amorrortu',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Bowlby, J.',
            titulo: 'La conducta de apego, comienzos y pautas de apego (en El apego, Caps. 13, 14 y 16)',
            editorial: 'Paidós',
            año: '1989',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Bozzalla, L. y Naiman, F.',
            titulo: 'Acerca del recién nacido: desarrollo y subjetividad',
            editorial: 'Dpto. de Publicaciones · UBA',
            año: '2003',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Brazelton, T. B. y Cramer, B. G.',
            titulo: 'Interacción en contexto y Observación de la interacción temprana (en La relación más temprana, Caps. 11, 13 y 14)',
            editorial: 'Paidós',
            año: '1993',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Dio Bleichmar, E.',
            titulo: 'Prefacio e Introducción (en Manual de psicoterapia de la relación padres e hijos, pp. 15–27)',
            editorial: 'Paidós',
            año: '2007',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Tres ensayos de teoría sexual (2° ensayo: La sexualidad infantil, Vol. VII)',
            editorial: 'Amorrortu',
            año: '1905',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Moreno, J.',
            titulo: 'Cambios actuales en la familia y su impacto en la infancia y el psicoanálisis (en La infancia y sus bordes, Cap. 4)',
            editorial: 'Paidós',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Palacios, J. y Mora, J. / Vila, I.',
            titulo: 'Crecimiento físico y desarrollo psicomotor hasta los 2 años y Los inicios de la comunicación, la representación y el lenguaje (en Desarrollo Psicológico y Educación, Tomo I, Caps. 2 y 4)',
            editorial: 'Alianza',
            año: '1998',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Paolicchi, G., Bozzalla, L., Sorgen, E., Bosoer, E., Núñez, A., Maffezzoli, M. y Botana, H.',
            titulo: 'Parentalidad y constitución subjetiva (Revista Investigaciones en Psicología, pp. 57–65)',
            editorial: 'Facultad de Psicología · UBA',
            año: '2017',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Piaget, J. e Inhelder, B.',
            titulo: 'Psicología del niño (Cap. 1: El nivel sensomotor)',
            editorial: 'Morata',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Psicología de la inteligencia (Cap. IV)',
            editorial: 'Psique',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Rojas, M. C.',
            titulo: 'Modelizaciones en psicoanálisis familiar: aproximación teórico-clínica a la familia de hoy (Rev. AAPPG Tomo XXIII, N° 2)',
            editorial: 'AAPPG / Publicar',
            año: '2000',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Spitz, R.',
            titulo: 'El primer año de vida (Caps. 3, 4, 6: angustia de los ocho meses, 8 y 9: comunicación semántica)',
            editorial: 'Aguilar',
            año: '1972',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Winnicott, D. W.',
            titulo: 'La relación inicial de una madre con su bebé (en La familia y el desarrollo del individuo, Cap. 2)',
            editorial: 'Hormé',
            año: '1980',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          {
            autor: 'Winnicott, D. W.',
            titulo: 'Realidad y juego (Cap. 1)',
            editorial: 'Gedisa',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Módulo 2 · Los dos primeros años de vida'
          },
          // Módulo 3
          {
            autor: 'Franco, Y.',
            titulo: 'Sexualidad, sexuación, Edipo: alteraciones en la teoría y en la clínica',
            editorial: 'Colegio de Psicoanalistas',
            año: '2014',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El creador literario y el fantaseo (Vol. IX)',
            editorial: 'Amorrortu',
            año: '1907',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Sobre las transposiciones de la pulsión, en particular del erotismo anal (Vol. XVII)',
            editorial: 'Amorrortu',
            año: '1917',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Más allá del principio del placer (Cap. 2, Vol. XVIII)',
            editorial: 'Amorrortu',
            año: '1920',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'La organización genital infantil (Vol. XIX)',
            editorial: 'Amorrortu',
            año: '1923',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El yo y el ello (Parte III: El yo y el superyó, Vol. XIX)',
            editorial: 'Amorrortu',
            año: '1923',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'El sepultamiento del complejo de Edipo (Vol. XIX)',
            editorial: 'Amorrortu',
            año: '1924',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Freud, S.',
            titulo: 'Nuevas conferencias de introducción al psicoanálisis (32ª conferencia: Angustia y vida pulsional, Vol. XXII, pp. 81–87)',
            editorial: 'Amorrortu',
            año: '1933',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Osterrieth, P. A.',
            titulo: 'El dibujo en el niño (en H. Gratiot-Alphandéry y R. Zazzo, Tratado de psicología del niño, Tomo VI, Cap. 1)',
            editorial: 'Morata',
            año: '1974',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Palacios, J., Cubero, R., Luque, A., Mora, J., Pérez Pereira, M. y Moreno, M. C.',
            titulo: 'Desarrollo físico/motor, lenguaje y conducta social de los 2 a los 6 años (en Desarrollo Psicológico y Educación, Tomo I, Caps. 6, 8 y 11)',
            editorial: 'Alianza',
            año: '2011',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Paolicchi, G., Bozzalla, L., Colombres, R., Garau, A., Botana, H., Cohan Cortada, A. y Maffezzoli, M.',
            titulo: 'La intersubjetividad como antecedente de la constitución de la simbolización y el juego. Intervenciones en contextos de vulnerabilidad (Rev. Investigaciones en Psicología, pp. 59–72)',
            editorial: 'Facultad de Psicología · UBA',
            año: '2011',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Paolicchi, G., Kohan Cortada, A., Núñez, A. M., Sorgen, E., Colombres, R., Maffezzoli, M. y Abreu, L.',
            titulo: 'Constitución subjetiva en un ambiente confiable: juego y apego (Anuario de Investigaciones Vol. XXII, Tomo II, pp. 313–321)',
            editorial: 'Facultad de Psicología · UBA',
            año: '2015',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Paolicchi, G.',
            titulo: 'La función del juego. Desde sus orígenes hasta la aparición de la representación (en J. J. Calzetta, comp., Subjetividad y Aparato Psíquico)',
            editorial: 'Eudeba',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Piaget, J. e Inhelder, B.',
            titulo: 'Psicología del niño (Cap. 3: La función semiótica o simbólica)',
            editorial: 'Morata',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Psicología de la inteligencia (Cap. V)',
            editorial: 'Psique',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'La formación del símbolo en el niño (Cap. 8)',
            editorial: 'Fondo de Cultura Económica',
            año: '1990',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Winnicott, D. W.',
            titulo: 'El niño y el mundo externo (Parte 3, Cap. 4)',
            editorial: 'Hormé',
            año: '1980',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          {
            autor: 'Winnicott, D. W.',
            titulo: 'Realidad y juego (Caps. 3 y 4)',
            editorial: 'Gedisa',
            año: '1986',
            tipo: 'Obligatoria',
            unidad: 'Módulo 3 · De los 2 a los 6 años: estructuración psíquica, lenguaje, juego y dibujo'
          },
          // Módulo 4
          {
            autor: 'Bozzalla, L. y Naiman, F.',
            titulo: 'El período de latencia: metapsicología, transformaciones y marcas epocales (en J. J. Calzetta, comp., Subjetividad y Aparato Psíquico, Cap. 4)',
            editorial: 'Eudeba',
            año: '2016',
            tipo: 'Obligatoria',
            unidad: 'Módulo 4 · De los 6 a los 12 años: escolaridad, latencia y operaciones concretas'
          },
          {
            autor: 'Laplanche, J. y Pontalis, J.-B.',
            titulo: 'Diccionario de Psicoanálisis (Notas sobre Período de Latencia y Sublimación)',
            editorial: 'Labor',
            año: '1971',
            tipo: 'Obligatoria',
            unidad: 'Módulo 4 · De los 6 a los 12 años: escolaridad, latencia y operaciones concretas'
          },
          {
            autor: 'Palacios, J., González, M. y Padilla, M. L.',
            titulo: 'Conocimiento social y desarrollo de normas y valores entre los 6 años y la adolescencia (en Desarrollo Psicológico y Educación, Tomo I, Cap. 14)',
            editorial: 'Alianza',
            año: '2011',
            tipo: 'Obligatoria',
            unidad: 'Módulo 4 · De los 6 a los 12 años: escolaridad, latencia y operaciones concretas'
          },
          {
            autor: 'Piaget, J. e Inhelder, B.',
            titulo: 'Psicología del niño (Cap. 4: Las operaciones concretas)',
            editorial: 'Morata',
            año: '1981',
            tipo: 'Obligatoria',
            unidad: 'Módulo 4 · De los 6 a los 12 años: escolaridad, latencia y operaciones concretas'
          },
          {
            autor: 'Piaget, J.',
            titulo: 'Psicología de la inteligencia (Cap. V)',
            editorial: 'Psique',
            año: '1977',
            tipo: 'Obligatoria',
            unidad: 'Módulo 4 · De los 6 a los 12 años: escolaridad, latencia y operaciones concretas'
          },
          // Módulo 5
          {
            autor: 'Bleichmar, S.',
            titulo: 'Nuevas tecnologías, ¿nuevos modos de la subjetividad? (en La subjetividad en riesgo, Cap. X)',
            editorial: 'Topía',
            año: '2005',
            tipo: 'Obligatoria',
            unidad: 'Módulo 5 · Infancia/s en la actualidad'
          },
          {
            autor: 'Duschatzky, S. y Corea, C.',
            titulo: 'Las instituciones en la pendiente (en Chicos en banda, Cap. 4)',
            editorial: 'Paidós',
            año: '2009',
            tipo: 'Obligatoria',
            unidad: 'Módulo 5 · Infancia/s en la actualidad'
          },
          {
            autor: 'Leoz, G.',
            titulo: 'La función subjetivante del jugar: pantallas que muestran lo que se quiere ocultar (V Congreso Internacional de Investigación · UBA, pp. 52–56)',
            editorial: 'Facultad de Psicología · UBA',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Módulo 5 · Infancia/s en la actualidad'
          },
          {
            autor: 'Paolicchi, G., Bozzalla, L., Maffezzoli, M. L., Colombres, R., Abreu, L., Botana, H. y Sorgen, E.',
            titulo: 'Concepto de vulnerabilidad: entre la fragilidad social y el desamparo psíquico (Rev. Investigaciones en Psicología, pp. 103–110)',
            editorial: 'Facultad de Psicología · UBA',
            año: '2013',
            tipo: 'Obligatoria',
            unidad: 'Módulo 5 · Infancia/s en la actualidad'
          },
          {
            autor: 'Vidal, I., Delucca, N., Martínez, A., González Oddera, M., Bravetti, G. y Canal, M.',
            titulo: 'Investigación y conceptualizaciones sobre las complejidades vinculares actuales (en Diagnóstico o estigma. Encrucijadas éticas, pp. 506–508)',
            editorial: 'AASM',
            año: '2012',
            tipo: 'Obligatoria',
            unidad: 'Módulo 5 · Infancia/s en la actualidad'
          },
          // Complementaria (selección de bibliografía adicional oficial)
          {
            autor: 'DeMause, Ll.',
            titulo: 'Historia de la infancia (Cap. 1)',
            editorial: 'Alianza',
            año: '1974',
            tipo: 'Complementaria'
          },
          {
            autor: 'Ariès, P.',
            titulo: 'El descubrimiento de la infancia (en El niño y la vida familiar en el antiguo régimen, Cap. 2)',
            editorial: 'Taurus',
            año: '1987',
            tipo: 'Complementaria'
          },
          {
            autor: 'Larrosa, J.',
            titulo: 'El enigma de la infancia (en Pedagogía Profana. Estudios sobre lenguaje, subjetividad, formación, Cap. 8)',
            editorial: 'Novedades Educativas',
            año: '2000',
            tipo: 'Complementaria'
          },
          {
            autor: 'Stern, D.',
            titulo: 'Explorando la experiencia subjetiva del infante (en El mundo interpersonal del infante, Cap. 1)',
            editorial: 'Paidós',
            año: '2000',
            tipo: 'Complementaria'
          },
          {
            autor: 'Giberti, E.',
            titulo: 'Vulnerabilidad y desvalimiento (en Vulnerabilidad, desvalimiento y maltrato infantil en las organizaciones familiares, Cap. 1)',
            editorial: 'Noveduc',
            año: '2005',
            tipo: 'Complementaria'
          },
          {
            autor: 'Roudinesco, E.',
            titulo: 'La familia venidera (en La familia en desorden, Cap. 8)',
            editorial: 'Fondo de Cultura Económica',
            año: '2010',
            tipo: 'Complementaria'
          }
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
    correlativas: ['Psicología del Desarrollo: Niñez', 'Psicoanálisis: Freud'],
    descripcion: 'Estudio de las transformaciones puberales y los trabajos psíquicos de las adolescencias y juventudes —cuerpo, narcisismo, sexuación, duelos, historización, grupalidades y problemáticas epocales— en articulación con la familia, la escuela, la cultura y los derechos.',
    objetivos: [
      'Interrogar los conceptos de pubertad, adolescencias y juventud desde una perspectiva biopsicosocial, histórica y psicoanalítica.',
      'Analizar los trabajos psíquicos específicos de la adolescencia: integración psicosomática, reorganización narcisista, sexuación, duelos e historización.',
      'Articular los procesos adolescentes con las funciones parentales, la transmisión entre generaciones, los grupos de pares y las instituciones.',
      'Diferenciar salud y psicopatología en problemáticas contemporáneas (TICs, redes sociales, apuestas online, consumos, violencias y derechos).'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 555)',
        titular: 'A designar (ex Diego Moreira)',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=555&anio=2026&cuatrimestre=2',
        enfoque: 'Perspectiva biopsicosocial con eje central en el psicoanálisis freudiano y lacaniano (articulado con los desarrollos de Diego Moreira, Glenda Cryan y equipo) junto a aportes de las neurociencias y el discurso epocal. Parte de la irrupción biológica neuroendocrina de la pubertad hacia el trabajo psíquico de simbolización: temporalidad lógica (après-coup, protón pseudos histérica —caso Emma—, tiempo lógico de Lacan), paradigma indiciario y abducción de Peirce, metamorfosis de la pubertad, narcisismo y estadio del espejo, Edipo/falo/castración, duelo y escisión del yo, sinthome y novelas adolescentes, familia/discurso capitalista, identidad de género (Vega, Gimenez), impacto de TICs y redes sociales (Belcaguy, Cryan y Pena) y toxicomanías (Pousa). Trabaja en TP con análisis de películas y series (Yo, adolescente, Coda, Lady Bird, Atrapados, Atypical, Black Mirror) y noticias actuales.',
        evaluacion: '2 parciales obligatorios: 1° Parcial individual, escrito y presencial en horario de TP (TP 7; evalúa teóricos y prácticos); 2° Parcial domiciliario e integrador (entrega TP 12) basado en el análisis de una película o serie asignada (introducción, desarrollo grupal y conclusiones individuales) con defensa en coloquio grupal (TP 13 y 14). Promoción sin final: 75% asistencia en teóricos y prácticos + 7 o más en ambos parciales (el aplazo en cualquiera de los dos hace perder la promoción). Regular con final: 75% asistencia + 4 a 6 en uno o ambos parciales. Recuperatorio: solo se puede recuperar UNO de los dos parciales (TP 15; por ausencia justificada en el 1°, en el TP siguiente). Jornada de asistencia optativa un sábado a la mañana (2° cuatrimestre).',
        bibliografia: [
          // Unidad I: Paradigma y Lenguaje
          { autor: 'Cryan, G., Gimenez, A. C., Sánchez, M. y Roitman, D.', titulo: 'Nuevas lógicas en los trabajos psíquicos de las adolescencias', editorial: 'Memorias XVI Congreso UBA (3, pp. 9–12)', año: '2024', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Freud, S.', titulo: 'Proyecto de una psicología para neurólogos (Vol. I, pp. 400–403)', editorial: 'Amorrortu', año: '1895', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Freud, S.', titulo: 'Cartas a Wilhelm Fließ (1887–1904) — Carta 112 (pp. 218–221)', editorial: 'Amorrortu', año: '1994', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Freud, S.', titulo: 'El Moisés de Miguel Ángel (Vol. XIII, pp. 205–222)', editorial: 'Amorrortu', año: '1914', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 7: La ética del psicoanálisis (1959–1960)', editorial: 'Paidós', año: '1960', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Lacan, J.', titulo: 'El tiempo lógico y el aserto de certidumbre anticipada (en Escritos 1)', editorial: 'Siglo XXI', año: '1966', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Moreira, D.', titulo: 'La niñez, la adolescencia y el discurso capitalista: El paradigma indiciario y la abducción de Peirce', editorial: 'Letra Viva', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Moreira, D.', titulo: 'La niñez, la adolescencia y el discurso capitalista: El argentino de la lengua', editorial: 'Letra Viva', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Moreira, D.', titulo: 'La niñez, la adolescencia y el discurso capitalista: Adolescencia: Un entrañable y tardío despertar', editorial: 'Letra Viva', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Moreira, D.', titulo: 'La adolescencia o la portación de lo nuevo', editorial: 'Ficha de Cátedra · UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Moreira, D.', titulo: 'Sujeto, inconsciente y adolescencia', editorial: 'Ficha de Cátedra · UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Moreira, D.', titulo: 'La protón pseudos histérica: Emma', editorial: 'Ficha de Cátedra · UBA', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },
          { autor: 'Cryan, G.', titulo: 'Guía de presentación del trabajo final', editorial: 'Ficha de Cátedra · UBA', año: '2022', tipo: 'Obligatoria', unidad: 'Unidad I · Paradigma y Lenguaje' },

          // Unidad II: Construcción e historia
          { autor: 'Freud, S.', titulo: 'Proyecto de una psicología para neurólogos (Parte II, Sección V, p. 404)', editorial: 'Amorrortu', año: '1895', tipo: 'Obligatoria', unidad: 'Unidad II · Construcción e historia' },
          { autor: 'Moreira, D.', titulo: 'Crónicas de un origen: El psicoanálisis con niños y adolescentes en Argentina (en La niñez, la adolescencia y el discurso capitalista)', editorial: 'Letra Viva', año: '2016', tipo: 'Obligatoria', unidad: 'Unidad II · Construcción e historia' },
          { autor: 'Moreira, D.', titulo: 'La adolescencia: Fases. Aspectos descriptivos', editorial: 'Ficha de Cátedra · UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad II · Construcción e historia' },
          { autor: 'Moreira, D.', titulo: 'Despertar de primavera e inmortalidad', editorial: 'Ficha de Cátedra · UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad II · Construcción e historia' },

          // Unidad III: Conceptos fundamentales del psicoanálisis y adolescencia
          { autor: 'Cryan, G., Gimenez, A., Sánchez, M. y Roitman, D.', titulo: 'De los cambios biológicos a la inscripción subjetiva del cuerpo: un enfoque biopsicosocial', editorial: 'Memorias XVII Congreso UBA', año: '2025', tipo: 'Obligatoria', unidad: 'Unidad III · Conceptos fundamentales y adolescencia' },
          { autor: 'Freud, S.', titulo: 'Tres ensayos de teoría sexual — Tercer ensayo: Las metamorfosis de la pubertad (Vol. VII, pp. 189–192)', editorial: 'Amorrortu', año: '1905', tipo: 'Obligatoria', unidad: 'Unidad III · Conceptos fundamentales y adolescencia' },
          { autor: 'Freud, S.', titulo: 'Tres ensayos de teoría sexual — Tercer ensayo: Peligros del placer previo (Vol. VII, p. 193)', editorial: 'Amorrortu', año: '1905', tipo: 'Obligatoria', unidad: 'Unidad III · Conceptos fundamentales y adolescencia' },
          { autor: 'Freud, S.', titulo: 'Introducción del narcisismo (Sección I, Cap. 3 — TP 4)', editorial: 'Amorrortu', año: '1914', tipo: 'Obligatoria', unidad: 'Unidad III · Conceptos fundamentales y adolescencia' },
          { autor: 'Moreira, D.', titulo: 'Guía defensas: desmentida y desestimación', editorial: 'Ficha de Cátedra · UBA', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad III · Conceptos fundamentales y adolescencia' },
          { autor: 'Moreira, D.', titulo: 'La pubertad y sus tramitaciones (Cap. 4: El desarrollo sexual: segundo tiempo)', editorial: 'Fau Ediciones', año: '1998', tipo: 'Obligatoria', unidad: 'Unidad III · Conceptos fundamentales y adolescencia' },
          { autor: 'Moreira, D.', titulo: 'Ética y quehacer del analista con niños y adolescentes: La escobilla del estadio del espejo: Marx un precursor', editorial: 'Letra Viva', año: '2016', tipo: 'Obligatoria', unidad: 'Unidad III · Conceptos fundamentales y adolescencia' },

          // Unidad IV: El segundo despertar: lenguaje, metamorfosis y enamoramiento
          { autor: 'Freud, S.', titulo: 'La organización genital infantil: Una interpolación en la teoría de la sexualidad (Vol. XIX)', editorial: 'Amorrortu', año: '1923', tipo: 'Obligatoria', unidad: 'Unidad IV · El segundo despertar: metamorfosis y enamoramiento' },
          { autor: 'Freud, S.', titulo: 'El sepultamiento del complejo de Edipo (Vol. XIX)', editorial: 'Amorrortu', año: '1924', tipo: 'Obligatoria', unidad: 'Unidad IV · El segundo despertar: metamorfosis y enamoramiento' },
          { autor: 'Moreira, D.', titulo: 'Freud y el complejo de Edipo', editorial: 'Ficha de Cátedra · UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad IV · El segundo despertar: metamorfosis y enamoramiento' },
          { autor: 'Moreira, D.', titulo: 'Ética y quehacer del analista con niños y adolescentes: El Edipo y sus tiempos', editorial: 'Letra Viva', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad IV · El segundo despertar: metamorfosis y enamoramiento' },

          // Unidad V: Lenguaje, deseo y adolescencia
          { autor: 'Freud, S.', titulo: 'Duelo y melancolía (Caps. 2 y 3 · Vol. XIV)', editorial: 'Amorrortu', año: '1917', tipo: 'Obligatoria', unidad: 'Unidad V · Lenguaje, deseo y adolescencia' },
          { autor: 'Freud, S.', titulo: 'La escisión del yo en el proceso defensivo (Vol. XXIII)', editorial: 'Amorrortu', año: '1938', tipo: 'Obligatoria', unidad: 'Unidad V · Lenguaje, deseo y adolescencia' },
          { autor: 'Moreira, D.', titulo: 'La pubertad y sus transmudaciones (Capítulo 7)', editorial: 'Facultad de Psicología · UBA', año: '1997', tipo: 'Obligatoria', unidad: 'Unidad V · Lenguaje, deseo y adolescencia' },

          // Unidad VI: El sinthome, las novelas y el gozo
          { autor: 'Freud, S.', titulo: 'El carácter y el erotismo anal (Vol. IX)', editorial: 'Amorrortu', año: '1908', tipo: 'Obligatoria', unidad: 'Unidad VI · El sinthome, las novelas y el gozo' },
          { autor: 'Freud, S.', titulo: 'Sobre un tipo particular de elección de objeto en el hombre (Contribución a la psicología del amor · Vol. XI)', editorial: 'Amorrortu', año: '1910', tipo: 'Obligatoria', unidad: 'Unidad VI · El sinthome, las novelas y el gozo' },
          { autor: 'Moreira, D.', titulo: 'Las versiones del padre: Adolescencia, juventud y sus posiciones', editorial: 'Ficha de Cátedra · UBA', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad VI · El sinthome, las novelas y el gozo' },

          // Unidad VII: Grupo, familia, escuela, cultura y discurso capitalista
          { autor: 'Gimenez, A. C.', titulo: 'La consolidación de la identidad de género como uno de los trabajos psíquicos de la adolescencia', editorial: 'Memorias XV Congreso UBA (2, pp. 48–51)', año: '2023', tipo: 'Obligatoria', unidad: 'Unidad VII · Grupo, familia, cultura y discurso capitalista' },
          { autor: 'Freud, S.', titulo: 'Psicología de las masas y análisis del yo (Vol. XVIII)', editorial: 'Amorrortu', año: '1921', tipo: 'Obligatoria', unidad: 'Unidad VII · Grupo, familia, cultura y discurso capitalista' },
          { autor: 'Cátedra Adolescencia I', titulo: 'Guía La familia: matrilineal y patrilineal: función y lugares', editorial: 'Ficha de Cátedra · UBA', año: 's/f', tipo: 'Obligatoria', unidad: 'Unidad VII · Grupo, familia, cultura y discurso capitalista' },
          { autor: 'Vega, V., Maza, J., Roitman, D. y Sánchez, M.', titulo: 'Identidad de Género, construcción subjetiva de la adolescencia', editorial: 'Ficha de Cátedra · UBA', año: '2015', tipo: 'Obligatoria', unidad: 'Unidad VII · Grupo, familia, cultura y discurso capitalista' },

          // Unidad VIII: Psicopatología y problemáticas socioculturales actuales
          { autor: 'Belcaguy, M., Cimas, M., Cryan, G. y Loureiro, H.', titulo: 'Adolescencia y tecnologías de la información y de la comunicación', editorial: 'Ficha de Cátedra · UBA', año: '2015', tipo: 'Obligatoria', unidad: 'Unidad VIII · Psicopatología y problemáticas actuales' },
          { autor: 'Cryan, G. y Pena, S.', titulo: 'Impacto de las TICs en la subjetividad del adolescente y en los vínculos intersubjetivos familiares', editorial: 'Subjetividad y procesos cognitivos 25(1)', año: '2021', tipo: 'Obligatoria', unidad: 'Unidad VIII · Psicopatología y problemáticas actuales' },
          { autor: 'Pousa, R.', titulo: 'Lo nuevo (en Pensando las adicciones)', editorial: 'Comunicarte', año: '1999', tipo: 'Obligatoria', unidad: 'Unidad VIII · Psicopatología y problemáticas actuales' },
          { autor: 'Pousa, R.', titulo: 'Toxicomanías y lazo social', editorial: 'UBA Publicaciones', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad VIII · Psicopatología y problemáticas actuales' },

          // Complementaria destacada (de la Bibliografía de ampliación oficial)
          { autor: 'Aberastury, A. y Knobel, M.', titulo: 'La adolescencia normal', editorial: 'Paidós', año: '1971', tipo: 'Complementaria' },
          { autor: 'Piaget, J.', titulo: 'De la lógica del niño a la lógica del adolescente', editorial: 'Paidós', año: '1973', tipo: 'Complementaria' },
          { autor: 'Aulagnier, P.', titulo: 'La violencia de la interpretación (El yo y la conjugación del futuro)', editorial: 'Amorrortu', año: '1977', tipo: 'Complementaria' },
          { autor: 'Foucault, M.', titulo: 'La historia de la sexualidad', editorial: 'Siglo XXI', año: '1978', tipo: 'Complementaria' },
          { autor: 'Erikson, E. H.', titulo: 'Identidad, juventud y crisis', editorial: 'Taurus', año: '1989', tipo: 'Complementaria' },
          { autor: 'Wedekind, F.', titulo: 'Despertar de primavera', editorial: 'Quetzal', año: '1991', tipo: 'Complementaria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 556)',
        titular: 'A designar (ex Adrián Grassi)',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=556&anio=2026&cuatrimestre=2',
        enfoque: 'Epistemología psicoanalítica plural, vincular e interdisciplinaria articulada en torno a la pregunta «¿Qué es crecer desde el punto de vista psicológico?» y tres ejes: (1) Desarrollo e integración psicosomática («lo originario puberal», entretiempo puberal-adolescente-juventud, imagen inconsciente del cuerpo: Winnicott, Aulagnier, Dolto, Grassi, Córdova, Freud, Nasio, Silvia Bleichmar, Ana María Fernández, Débora Tajer); (2) Relaciones parentales, duelo, historización y transmisión psíquica entre generaciones (Aulagnier, Janine Puget, Serge Tisseron, René Kaës, Yolanda Gampel, Sonia Gomel, Juan Eduardo Tesone sobre restitución de identidad); y (3) Grupalidades adolescentes, pasaje al lazo social y problemáticas epocales (Rassial, Marcelo Viñar, Ricardo Rodulfo, Mario Waserman, Susana Toporosi, Beatriz Janin, María Cristina Rojas, adolescencias trans, virtualidad y apuestas online, consumos, conflicto con la ley penal y derechos). Organiza la lectura en textos de Prácticos, Seminarios Teóricos y «Textos Puente», y recomienda series (Merlí, Sex Education, Poco ortodoxa, Heartstopper, I Am Not Okay With This).',
        evaluacion: '2 parciales individuales obligatorios (2 hs cátedra semanales de teóricos + 2 hs cátedra semanales de prácticos; talleres optativos de preparación en semanas 6 y 11): 1° Parcial individual, escrito y presencial en comisiones de TP (semanas 6–7; recuperatorio semana 9); 2° Parcial individual, domiciliario e integrador en formato de ensayo académico de 3 a 5 hojas escrito en computadora (consigna semana 12, entrega semana 13, devolución semana 14, recuperatorio semana 15). Promoción sin examen final: 75% asistencia en teóricos y prácticos + mínimo 7 en cada parcial. Regular con examen final: 75% asistencia + notas entre 4 y 6 en los parciales.',
        bibliografia: [
          // Unidad 1: Contextos: epistemológico, histórico y social
          { autor: 'Dolto, F.', titulo: 'Cap. I: El concepto de adolescencia. Puntos de referencia, puntos de ruptura (en La causa de los adolescentes)', editorial: 'Paidós', año: '2005', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Nasio, J. D.', titulo: '¿Cómo actuar con un adolescente difícil?', editorial: 'Paidós', año: '2011', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Grassi, A.', titulo: 'Entrevista a J. D. Nasio: El estadio del espejo en el niño y el adolescente', editorial: 'Actualidad Psicológica (411)', año: '2012', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Córdova, N.', titulo: 'La primavera del significante (en Entre niños, adolescentes y funciones parentales)', editorial: 'Entreideas', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Córdova, N.', titulo: 'Extravío sexual de la pubertad y neurosis del desarrollo (en Territorios Adolescentes y entretiempo de la sexuación)', editorial: 'Entreideas', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Grassi, A.', titulo: 'Niñez y Adolescencia. Nuevos paradigmas, sus nombres y escritura (en Entre niños, adolescentes y funciones parentales)', editorial: 'Entreideas', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Grassi, A.', titulo: 'Desvíos-bordes y desbordes. Sobre los modelos para el estudio de las adolescencias', editorial: 'Entreideas', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Najmanovich, D.', titulo: 'El desafío de la complejidad: redes y cartografías dinámicas (en Mirar con nuevos ojos)', editorial: 'Biblos', año: '2008', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Resnizky, S.', titulo: 'Cap. 2: Laberintos de la vincularidad (en Clínica Psicoanalítica Vincular)', editorial: 'Letra Viva', año: '2024', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Aduriz, F. M.', titulo: 'Del adolescente derecho a detenerse (en Adolescencias por venir)', editorial: 'Gredos', año: '2012', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Blanco, C. y Brea, N.', titulo: 'Culturas adolescentes', editorial: 'Inédito · Cátedra II', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'De Lucca, N.', titulo: 'Transitando diferentes paradigmas (en Territorios adolescentes y entretiempo de la sexuación)', editorial: 'Entreideas', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Franco, A.', titulo: 'Los espejos. Función de los pares en los trabajos subjetivos', editorial: 'Entreideas', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Najmanovich, D.', titulo: 'Del cuerpo máquina al cuerpo entramado', editorial: 'Campo Grupal (30)', año: '2001', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },
          { autor: 'Otero, M. E.', titulo: 'Territorios adolescentes. Cartografías de un devenir', editorial: 'Entreideas', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 1 · Contextos: epistemológico, histórico y social' },

          // Unidad 2: Cuerpo, narcisismo y subjetividad
          { autor: 'Bleichmar, S.', titulo: 'Producción de subjetividad y constitución de psiquismo (en El desmantelamiento de la subjetividad. Estallido del Yo)', editorial: 'Topía', año: '2009', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Córdova, N.', titulo: 'La creación del cuerpo adolescente (en Entre niños, adolescentes y funciones parentales)', editorial: 'Entreideas', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Freud, S.', titulo: 'Metamorfosis de la pubertad (en Tres ensayos para una teoría sexual · Vol. VII)', editorial: 'Amorrortu', año: '1905', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Grassi, A.', titulo: 'Adolescencia: reorganización y nuevos modelos de subjetividad', editorial: 'Entreideas', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Fernández, A. M.', titulo: 'Cap. 15: Más allá de la diferencia… Las multiplicidades sexo-genéricas (en Psicoanálisis. De los lapsus fundacionales a los feminismos del siglo XXI)', editorial: 'Paidós', año: '2021', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Córdova, N.', titulo: 'Del pictograma al pentagrama (en Entre niños, adolescentes y funciones parentales)', editorial: 'Entreideas', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Córdova, N.', titulo: 'Confluencia del bifasismo sexual en el entretiempo de la sexuación', editorial: 'Ficha de Cátedra · UBA', año: '2013', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Córdova, N.', titulo: 'Del yo ideal al ideal del yo. La construcción de un horizonte en tiempos de distopías', editorial: 'Ficha de Cátedra · UBA', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Córdova, N.', titulo: 'Grafo del Entretiempo', editorial: 'Ficha de Cátedra · UBA', año: '2020', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Córdova, N.', titulo: 'Instantes decisivos. Tiempos y procesos adolescentes', editorial: 'Ficha de Cátedra · UBA', año: '2021', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Grassi, A.', titulo: 'Lo originario. Un aporte a la conceptualización de la integración psicosomática y subjetividad', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Freud, S.', titulo: 'El sepultamiento del complejo de Edipo (Vol. XIX)', editorial: 'Amorrortu', año: '1924', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Freud, S.', titulo: 'La descomposición de la personalidad psíquica (Conferencia 31 · Vol. XXII)', editorial: 'Amorrortu', año: '1933', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Nasio, J. D.', titulo: 'Mi cuerpo y sus imágenes', editorial: 'Paidós', año: '2008', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Otero, M. E.', titulo: 'Las escrituras (in)visibles de la violencia (en Entreveros y afinidades 2. Clínica Vincular)', editorial: 'Altobelli y Grandal', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Bleichmar, S.', titulo: 'La difícil tarea de ser joven (en Dolor País, pp. 58–64)', editorial: 'Libros del Zorzal', año: '2000', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Grassi, A.', titulo: 'Sexo, sexuación e identidades de género. Derechos de niños/as adolescentes', editorial: 'Revista Generaciones N° 4 · Eudeba', año: '2015', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },
          { autor: 'Tajer, D.', titulo: 'Género, Salud mental y Psicoanálisis en la Argentina (en Psicoanálisis para todxs)', editorial: 'Topía', año: '2021', tipo: 'Obligatoria', unidad: 'Unidad 2 · Cuerpo, narcisismo y subjetividad' },

          // Unidad 3: La construcción de la identidad sexual y hallazgo de objeto
          { autor: 'Córdova, N.', titulo: 'Del trauma puberal al acontecimiento adolescente (Partes I y II)', editorial: 'Ficha de Cátedra · UBA', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Rassial, J. J.', titulo: 'Cap. 7: Los padres del adolescente (en El pasaje adolescente. De la familia al vínculo social)', editorial: 'Del Serbal', año: '1999', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Waserman, M.', titulo: 'Cap. 1: Condenado a explorar y Cap. 3: Hallazgo de objeto (en Condenados a explorar)', editorial: 'Noveduc', año: '2011', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Winnicott, D. W.', titulo: 'Cap. 11: Conceptos contemporáneos sobre el desarrollo adolescente (en Realidad y juego, pp. 179–193)', editorial: 'Gedisa', año: '1979', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Bleichmar, S.', titulo: 'La identidad sexual: entre la sexualidad, el sexo y el género (en Paradojas de la sexualidad masculina, pp. 91–108)', editorial: 'Paidós', año: '2006', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Dolto, F.', titulo: 'Introducción. Lo que piensa Freud del asunto (en La sexualidad femenina, pp. 74–87)', editorial: 'Paidós', año: '1987', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Freud, S.', titulo: 'La feminidad (Conferencia 33 · Vol. XXII)', editorial: 'Amorrortu', año: '1933', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Freud, S.', titulo: 'Sobre la sexualidad femenina (Vol. XXI)', editorial: 'Amorrortu', año: '1931', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Grassi, A.', titulo: 'Metamorfosis de la pubertad: el hallazgo (?) de objeto', editorial: 'Entreideas', año: '2013', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Grassi, A.', titulo: 'Notas sobre trauma y acontecimiento (Partes I y II)', editorial: 'Ficha de Cátedra · UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Grassi, A.', titulo: 'Sobre los intereses libidinales de los jóvenes y la subjetividad en devenir (Homenaje a S. Bleichmar)', editorial: 'Revista Generaciones N° 1 · Eudeba', año: '2012', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Franco, A.', titulo: 'La niña púber. De la maduración del aparato genital hacia la genitalización psíquica de la sexualidad', editorial: 'Maipue', año: '2021', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Fernández, A. M.', titulo: 'Com-posiciones actuales de las identidades sexuales', editorial: 'Revista Generaciones (4)', año: '2015', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Glocer-Fiorini, L.', titulo: 'Identidad y diferencia. Paradojas en la construcción de subjetividad', editorial: 'Revista Generaciones (4)', año: '2015', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Lepka, M.', titulo: 'La llegada de la pareja en la adolescencia (en Intervenciones. Entre la teoría y la clínica)', editorial: 'Letra Viva', año: '2013', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Otero, M. E.', titulo: 'Habitar la luna. Un viaje adolescente', editorial: 'Actualidad Psicológica (508)', año: '2021', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Sigal, A. M.', titulo: 'Todavía el psicoanálisis en el campo de la sexuación', editorial: 'Revista Generaciones (4)', año: '2015', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },
          { autor: 'Soler, M.', titulo: 'El otro por venir', editorial: 'Ficha de Cátedra · UBA', año: '2012', tipo: 'Obligatoria', unidad: 'Unidad 3 · Identidad sexual y hallazgo de objeto' },

          // Unidad 4: Intersubjetividad, familia, duelo e historización
          { autor: 'Aulagnier, P.', titulo: 'Construirse un pasado (y Los dos principios del funcionamiento identificatorio: permanencia y cambio)', editorial: 'Revista de Psicoanálisis APdeBA XIII(3)', año: '1991', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Grassi, A.', titulo: 'La investigación histórica familiar (en Entre niños, adolescentes y funciones parentales)', editorial: 'Entreideas', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Córdova, N.', titulo: 'Duelos e historización. Construir(se) un pasado — Elaborar un duelo', editorial: 'Ficha de Cátedra · UBA', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Altobelli, H., Guaragna, A. y Otero, M. E.', titulo: 'Violencia, funciones parentales y sus efectos de poder (en Entramados vinculares y subjetividad)', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Blanco, C.', titulo: 'Un punto de encuentro entre Piera Aulagnier y su historia', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Britos, M. y Grassi, A.', titulo: 'En-tramando lo traumático. Haciéndo-se sujeto de su historia', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Córdova, N.', titulo: 'Medea: una dimensión trágica de los divorcios controvertidos', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Gutiérrez, M. I.', titulo: 'De la historización al proyecto identificatorio. Aportes de Piera Aulagnier a la Orientación Vocacional', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Lastra, S.', titulo: 'La historización como construcción subjetivante', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Liñares, F.', titulo: 'Lo puberal adolescente en trámite', editorial: 'Entreideas', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Nasio, J. D.', titulo: '¡El inconsciente es repetición!', editorial: 'Revista Generaciones (2)', año: '2013', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Otero, M. E.', titulo: 'Visitando a Piera Aulagnier', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Soler, M.', titulo: 'Situaciones familiares difíciles: ¿donde lo difícil desata violencias o potencialidad vincular?', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },
          { autor: 'Tesone, J. E.', titulo: 'El robo de la identidad de los niños: Restitución de su identidad y el valor de la recuperación de sus nombres', editorial: 'Aesthethika 10(3)', año: '2014', tipo: 'Obligatoria', unidad: 'Unidad 4 · Intersubjetividad, familia, duelo e historización' },

          // Unidad 5: Pasaje adolescente y transmisión psíquica entre generaciones
          { autor: 'Gampel, Y.', titulo: 'Introducción y Cap. 4: Se lo contarás a tus hijos (en Esos padres que viven a través de mí)', editorial: 'Paidós', año: '2006', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },
          { autor: 'Puget, J.', titulo: 'Historización en la adolescencia (en Cuadernos de APdeBA N° 1 de Niñez y Adolescencia)', editorial: 'APdeBA', año: '1999', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },
          { autor: 'Tisseron, S.', titulo: 'Introducción: El psicoanálisis ante la prueba de las generaciones (pp. 11–31)', editorial: 'Amorrortu', año: '2000', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },
          { autor: 'Kaës, R.', titulo: 'Transmisión de la vida psíquica entre generaciones (Introducción, pp. 13–29)', editorial: 'Amorrortu', año: '2000', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },
          { autor: 'Grassi, A. y otros', titulo: 'Guía para la lectura de textos de Piera Aulagnier', editorial: 'Ficha de Cátedra · UBA', año: '2008', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },
          { autor: 'Gomel, S.', titulo: 'Cap. 6: Transmisión generacional (en Familias, parejas, analistas. La escena clínica)', editorial: 'Lugar Editorial', año: '2020', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },
          { autor: 'Lastra, S. y Saladino, G.', titulo: 'De la genealogía al proyecto identificatorio. Algunas puntualizaciones acerca de adolescencia y transmisión', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },
          { autor: 'Lastra, S. y Otero, M. E.', titulo: 'Construcciones acerca de la clínica y la transmisión docente', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 5 · Transmisión psíquica entre generaciones' },

          // Unidad 6: Grupalidades adolescentes y proyecto identificatorio
          { autor: 'Altobelli, H. y Guaragna, A.', titulo: 'Adolescencias trans. Un acto de traición (en Territorios adolescentes y entretiempo de la sexuación)', editorial: 'Entreideas', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Córdova, N.', titulo: 'Figuras de la grupalidad adolescente', editorial: 'Ficha de Cátedra · UBA', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Meiss, M.', titulo: 'Reflexiones sobre adolescentes en conflicto con la ley penal. Distinciones clínicas y nuevos dispositivos', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Viñar, M.', titulo: 'Del mundo interno y las relaciones objetales a la prioridad del otro (en Psicoanálisis y adolescencia)', editorial: 'Psicolibro', año: '2010', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Grassi, A.', titulo: 'Vínculos intersubjetivos y adolescencia (Clases I y II)', editorial: 'Ficha de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Lepka, M.', titulo: 'Lo grupal (en Pensando la sexualidad en la escuela)', editorial: 'Qué diría Víctor Hugo', año: '2016', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Rodulfo, R.', titulo: 'Un nuevo acto psíquico: la inscripción o la escritura del nosotros en la adolescencia (en El psicoanálisis de nuevo)', editorial: 'Eudeba', año: '2004', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Toporosi, S.', titulo: '¿Juegos sexuales o conductas sexuales abusivas? (en En carne viva. Abuso sexual infanto juvenil)', editorial: 'Topía', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Winnicott, D. W.', titulo: 'Deprivación y delincuencia — Segunda parte: La tendencia antisocial (1956, pp. 125–132)', editorial: 'Paidós', año: '1990', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Belmes, D. y Farina, S.', titulo: 'Cap. 9: La escuela y el juego de las alianzas (en Alianzas entre Pares)', editorial: 'Ediciones Conjunto', año: '2020', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Lepka, M.', titulo: 'Rol del profesional en salud mental en condiciones de vulnerabilidad', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Liñares, F.', titulo: 'Posibles usos y des-usos de las drogas en tiempos adolescentes', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Pelento, M.', titulo: 'Los códigos del coraje', editorial: 'Revista Generaciones (3) · Eudeba', año: '2014', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Toporosi, S.', titulo: 'Grupos de confrontación generacional en un Servicio Hospitalario de Adolescencia', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },
          { autor: 'Soler, M.', titulo: 'El nos-otros por venir: Amigos adolescentes que intentan salvar el mundo', editorial: 'Inédito · Cátedra II', año: '2025', tipo: 'Obligatoria', unidad: 'Unidad 6 · Grupalidades adolescentes y proyecto identificatorio' },

          // Unidad 7: Sufrimiento, creatividad y problemáticas adolescentes epocales
          { autor: 'Bergara, G.', titulo: 'Para alcanzar el paraíso de un solo golpe', editorial: 'Revista Generaciones N° 5 · Eudeba', año: '2016', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Blanco, C. y Brea, N.', titulo: 'Hipersexualización en y de las infancias: efectos en las adolescencias', editorial: 'Congreso AASM', año: '2022', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Blanco, C. y Brea, N.', titulo: 'Los efectos de la virtualidad en la subjetividad adolescente (en Nuevas Adolescencias)', editorial: 'Vergara', año: '2025', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Blanco, C. y Brea, N.', titulo: 'Cuando jugar no es un juego: consumos problemáticos digitales (en Apuestas online y Adolescencia)', editorial: 'Actualidad Psicológica', año: '2025', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Córdova, N. y Vega, N.', titulo: 'Adolescencia: nuevos síntomas y nuevas subjetividades. Problemáticas emergentes del contexto epocal', editorial: 'Letra Viva', año: '2012', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Del Giorgio, A.', titulo: 'Consumos problemáticos en adolescencia (en Clínica de las adicciones)', editorial: 'Noveduc', año: '2020', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Janin, B.', titulo: 'Los adolescentes en épocas de desamparo social (en Clínica con Adolescentes)', editorial: 'Entreideas', año: '2020', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Meiss, M. y Clemeno, L.', titulo: 'Crecer en tiempos virtuales: una clínica con adolescencias (en Nuevas Adolescencias)', editorial: 'Vergara', año: '2025', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Rojas, M. C.', titulo: 'Los adolescentes y los otros: apuntalamiento y vulnerabilidad', editorial: 'Desvalimiento Psicosocial 3(1) · UCES', año: '2016', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Ruibal, A.', titulo: 'En busca del tiempo perdido. Por el camino de Eros', editorial: 'Actualidad Psicológica N° 516', año: '2022', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Soler, M. y Lepka, M.', titulo: 'Lo epocal en los trabajos del entretiempo', editorial: 'Entreideas', año: '2018', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Altobelli, H. y Giorla, G.', titulo: 'La resiliencia. Dicotomías entre sujeto y objeto', editorial: 'Actualidad Psicológica', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Córdova, N.', titulo: 'Adolescencias difíciles, sufrimiento y creatividad', editorial: 'Revista Generaciones (2)', año: '2013', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Otero, M. E.', titulo: 'Pinceladas y notas acerca de la adolescencia', editorial: 'Revista Generaciones (2)', año: '2013', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Soler, M.', titulo: 'Creatividad y adolescencia', editorial: 'Ficha de Cátedra · UBA', año: '2007', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Angeli, E., Altobelli, H. y Otero, M. E.', titulo: 'Postmodernidad y adolescencias. Recuperando y creando la dimensión del tiempo y el espacio', editorial: 'Ficha de Cátedra · UBA', año: '2009', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Blanco, C.', titulo: 'El ejercicio profesional desde una perspectiva de derechos', editorial: 'Entreideas', año: '2019', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Bleichmar, S.', titulo: 'Subjetividad en riesgo: herramientas para su rescate (en Violencia social-violencia escolar)', editorial: 'Noveduc', año: '2008', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Naddeo, M.', titulo: 'Niños, niñas y adolescentes como sujetos de derechos. Tensiones entre la legislación y la realidad social', editorial: 'Revista Generaciones (6)', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Otero, M. E. y otros', titulo: 'Dispositivos actuales. La universidad abierta a la comunidad', editorial: 'Revista Generaciones (4)', año: '2015', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },
          { autor: 'Sotolano, O.', titulo: 'Baja de la edad de imputabilidad. ¿Responsabilidad juvenil o irresponsable desamparo?', editorial: 'Revista Generaciones (6)', año: '2017', tipo: 'Obligatoria', unidad: 'Unidad 7 · Sufrimiento, creatividad y problemáticas epocales' },

          // Complementaria destacada (de la Bibliografía de referencia oficial)
          { autor: 'Aberastury, A. y Knobel, M.', titulo: 'La adolescencia normal', editorial: 'Paidós', año: '1971', tipo: 'Complementaria' },
          { autor: 'Aulagnier, P.', titulo: 'La violencia de la interpretación', editorial: 'Amorrortu', año: '1982', tipo: 'Complementaria' },
          { autor: 'Gutton, P.', titulo: 'Lo Puberal', editorial: 'Paidós', año: '1993', tipo: 'Complementaria' },
          { autor: 'McDougall, J.', titulo: 'Las mil y una caras de Eros', editorial: 'Paidós', año: '1998', tipo: 'Complementaria' },
          { autor: 'Benjamin, J.', titulo: 'Los lazos del amor', editorial: 'Paidós', año: '1999', tipo: 'Complementaria' },
          { autor: 'Butler, J.', titulo: 'El género en disputa', editorial: 'Paidós', año: '2007', tipo: 'Complementaria' }
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
    correlativas: ['Neurofisiología', 'Psicología del Desarrollo: Adolescencia'],
    descripcion: 'Materia anual bisagra hacia el Ciclo de Formación Profesional dedicada al estudio de los paradigmas psiquiátricos clásicos y contemporáneos, la clínica estructural psicoanalítica (neurosis, psicosis y perversión), el diagnóstico diferencial con cuadros orgánicos y fenómenos psicosomáticos, y las presentaciones sintomáticas de la época.',
    objetivos: [
      'Contextualizar el surgimiento de la psicopatología y contrastar la semiología de la psiquiatría clásica, los manuales actuales (DSM/CIE) y la ética del diagnóstico psicoanalítico.',
      'Diferenciar en profundidad las estructuras clínicas (psicosis, neurosis y perversión) y sus tipos clínicos a partir de la obra de Freud, Lacan y casos fundamentales.',
      'Articular el diagnóstico diferencial con los cuadros orgánicos, las epilepsias, las demencias, los fenómenos psicosomáticos, la psicofarmacología y la psicopatología infantojuvenil.',
      'Analizar los padecimientos contemporáneos —psicosis ordinarias e inclasificables, toxicomanías, anorexias/bulimias, pánico, cortes en el cuerpo, depresiones y debates sobre sexuación y género— con rigor clínico.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I (Cód. 037)',
        titular: 'Fabián Abraham Naparstek',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=37&anio=2026&cuatrimestre=2',
        enfoque: 'Orientación psicoanalítica lacaniana con referencia explícita a la lectura de Jacques-Alain Miller (orientación lacaniana actualizada a la «subjetividad de la época», pensada como un «antivirus» que se renueva permanentemente). Parte de la exigencia científica de Karl Jaspers (Psicopatología General) y de los grandes clínicos de la psiquiatría clásica (Pinel, Esquirol, Kraepelin, Bleuler, Sérieux y Capgras, De Clérambault, Ballet, Ey, Lanteri-Laura) para reelaborarlos desde el diagnóstico estructural con Freud, Lacan (clínica de la pregunta, clínica de la respuesta y clínica del síntoma/parlêtre) y Miller. Pone foco distintivo en la ética hipermoderna (Lipovetsky, Bauman, Harari), las psicosis ordinarias e inclasificables, los nuevos síntomas —toxicomanías y alcoholismo (línea central de Naparstek), anorexias/bulimias, ataques de pánico, depresiones y violencias—, la psicofarmacología, los cuadros orgánicos, los manuales DSM/CIE y la psicopatología infantojuvenil. Cursa 6 hs semanales obligatorias: Teóricos generales (2 hs), Elucidación de Textos (2 hs) y Comisiones de Lectura de Casos (2 hs: 1° cuatrimestre psiquiatría clásica, Schreber y psicosis ordinarias; 2° cuatrimestre Dora, Hombre de las Ratas, Juanito y casos actuales), más 20 cursos optativos, conversaciones clínicas y comisiones hospitalarias (7 semanas).',
        evaluacion: 'Materia anual con examen final obligatorio (sin promoción directa). Para regularizar: 75% de asistencia en los tres espacios obligatorios (teóricos, elucidación de textos y lectura de casos) + 1 trabajo monográfico domiciliario individual de concepto en el 1° cuatrimestre (entrega Semana 8) + 2 exámenes parciales escritos (1° cuatrimestre Semana 15 y 2° cuatrimestre Semana 10), aprobados con mínimo 4 en cada uno. Recuperatorio por inasistencia a la semana siguiente de cada parcial; al final de la cursada se puede recuperar un solo parcial por aplazo. Examen final distinguido: promedio de 8 o más en los parciales + asistencia a 7 clases de teóricos especiales (o práctica hospitalaria + 3 clases especiales), consistente en redactar y defender una monografía final ante un adjunto o JTP.',
        bibliografia: [
          // Trayecto I: Psicopatología y ética: de Jaspers a la ética hipermoderna
          { autor: 'Jaspers, K.', titulo: 'Psicopatología General (Intro. puntos 1 y 3; Sexta parte punto 4: Salud y enfermedad)', editorial: 'Beta', año: '1913', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Canguilhem, G.', titulo: 'Lo normal y lo patológico (Parte I cap. 1; Parte II caps. 1–3 y conclusión)', editorial: 'Siglo XXI', año: '1943', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Freud, S.', titulo: '16ª Conferencia: Psicoanálisis y psiquiatría (Vol. XVI)', editorial: 'Amorrortu', año: '1916', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Lacan, J.', titulo: 'Psicoanálisis y medicina (en Intervenciones y textos 1)', editorial: 'Manantial', año: '1966', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Lipovetsky, G.', titulo: 'La era del vacío', editorial: 'Anagrama', año: '1998', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Lipovetsky, G.', titulo: 'Los tiempos hipermodernos', editorial: 'Anagrama', año: '2008', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Miller, J.-A.', titulo: 'Patología de la ética (en Lógicas de la vida amorosa)', editorial: 'Manantial', año: '1989', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Miller, J.-A.', titulo: 'El ruiseñor de Lacan (en Del Edipo a la sexuación)', editorial: 'Paidós', año: '2005', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Miller, J.-A.', titulo: 'El porvenir de Mycoplasma laboratorium (El Caldero de la Escuela N° 6)', editorial: 'Grama', año: '2008', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Naparstek, F.', titulo: 'La era de la fiesta permanente (en Introducción a la clínica con toxicomanías y alcoholismo II)', editorial: 'Grama', año: '2009', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Naparstek, F.', titulo: 'La toxicomanía banalizada o los síntomas de hoy y los de antes', editorial: 'Grama', año: '2010', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Naparstek, F.', titulo: 'Ética y psicopatología (en Teóricos 2014)', editorial: 'Ed. Cátedra', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Berger, A.', titulo: 'El surgimiento de la psicopatología (en Teóricos 2014)', editorial: 'Ed. Cátedra', año: '2013', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Berger, A.', titulo: 'Psicoanálisis, hijo ilegítimo de la ciencia', editorial: 'Revista Lacaniana 24 · Grama', año: '2018', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },
          { autor: 'Mazzoni, Y.', titulo: 'El diagnóstico en singular', editorial: 'Ficha de Cátedra · UBA', año: 's/f', tipo: 'Obligatoria', unidad: 'Trayecto I · Psicopatología y ética: de Jaspers a la ética hipermoderna' },

          // Trayecto II: Psicopatología y Psiquiatría: clásica y contemporánea
          { autor: 'Ackernecht, E. H.', titulo: 'Breve historia de la psiquiatría (Caps. 1, 2, 3 y 5)', editorial: 'Eudeba', año: '1979', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Foucault, M.', titulo: 'Historia de la locura en la época clásica (Cap. 1)', editorial: 'FCE', año: '1961', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Bercherie, P.', titulo: 'Los fundamentos de la clínica (Intro., Caps. 1 y 12)', editorial: 'Manantial', año: '1980', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Bercherie, P.', titulo: 'Presentación e Introducción (en Automatismo Mental-Paranoia)', editorial: 'Polemos', año: '1995', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Kraepelin, E.', titulo: 'Introducción a la clínica psiquiátrica (Lección 3: Demencia precoz; Lección 15: Paranoia; Lección 16: Formas paranoides)', editorial: 'Nieva', año: '1901', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Kraepelin, E.', titulo: 'Las parafrenias (Cap. 13 en La demencia precoz, 2ª parte)', editorial: 'Polemos', año: '1913', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Bleuler, E.', titulo: 'La Demencia Precoz o el grupo de las esquizofrenias', editorial: 'Polemos', año: '1911', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Sérieux, P. y Capgras, J.', titulo: 'Las locuras razonantes (en Alucinar y delirar, Tomo II)', editorial: 'Polemos', año: '1909', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Ballet, G.', titulo: 'Psicosis Alucinatorias Crónicas (en Alucinar y delirar, Tomo II)', editorial: 'Polemos', año: '1911', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'De Clérambault, G.', titulo: 'Automatismo mental y escisión del yo / Los delirios pasionales (en Automatismo Mental, Paranoia)', editorial: 'Polemos', año: '1920', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Seglás, J.', titulo: 'Demencias paranoides (en Alucinar y delirar, Tomo II)', editorial: 'Polemos', año: '1900', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Lanteri-Laura, G.', titulo: 'Cap. 4: Los problemas del paradigma actual (en Ensayo sobre los paradigmas de la psiquiatría moderna)', editorial: 'Tricastela', año: '2000', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Stagnaro, J. C.', titulo: 'Perspectiva crítica de las nosografías psiquiátricas contemporáneas (en Psiquiatría y Psicoanálisis)', editorial: 'Grama', año: '2007', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Organización Mundial de la Salud', titulo: 'CIE-10: Clasificación estadística internacional de enfermedades', editorial: 'OMS', año: '1992', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Wainstein, R.', titulo: 'Manuales de diagnóstico DSM y CIE / Epilepsias', editorial: 'Fichas de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Mussa, A.', titulo: 'Psicofarmacología', editorial: 'Ficha de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'De Julis, P.', titulo: 'Enfermedades del sistema endocrino y síntomas psiquiátricos / Tóxicos desde una perspectiva psiquiátrica', editorial: 'Fichas de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Gabe, R.', titulo: 'Semiología psiquiátrica: H. Ey', editorial: 'Ficha de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Esteban, F. y Soto, S.', titulo: 'Clínica de las psicosis en la obra de Emil Kraepelin', editorial: 'Ficha de Cátedra · UBA', año: '2020', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Harari, Y. N.', titulo: 'De animales a Dioses (Caps. 1 y 2)', editorial: 'Penguin Random House', año: '2019', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },
          { autor: 'Skiadaresis, R.', titulo: 'Aspectos médicos en toxicomanías y alcoholismo', editorial: 'Grama', año: '2005', tipo: 'Obligatoria', unidad: 'Trayecto II · Psicopatología y Psiquiatría: clásica y contemporánea' },

          // Trayecto III: Psicopatología y psicoanálisis: de Freud a las estructuras subjetivas lacanianas
          { autor: 'Freud, S.', titulo: 'Algunas consideraciones con miras a un estudio comparativo de las parálisis motrices e histéricas (Vol. I)', editorial: 'Amorrortu', año: '1893', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Las neuropsicosis de defensa (Caps. 1 y 2 · Vol. III)', editorial: 'Amorrortu', año: '1894', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Manuscrito H: Paranoia (Vol. I) / Obsesiones y fobias / Neurosis de angustia (Vol. III)', editorial: 'Amorrortu', año: '1895', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Nuevas puntualizaciones sobre las neuropsicosis de defensa (Vol. III)', editorial: 'Amorrortu', año: '1896', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Fragmento de análisis de un caso de histeria [Dora] y Tres ensayos de teoría sexual, Cap. 1 (Vol. VII)', editorial: 'Amorrortu', año: '1905', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Acciones obsesivas y prácticas religiosas (Vol. IX)', editorial: 'Amorrortu', año: '1907', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Las fantasías histéricas y su relación con la bisexualidad (Vol. IX)', editorial: 'Amorrortu', año: '1908', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'A propósito de un caso de neurosis obsesiva [Hombre de las Ratas] y Análisis de la fobia de un niño de cinco años [Juanito] (Vol. X)', editorial: 'Amorrortu', año: '1909', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Schreber, D. P.', titulo: 'Memorias de un neurópata (Carta abierta, Intro., Caps. 1, 4, 5, 10, 13, 16, 21 y Peritajes)', editorial: 'Centro Editor Argentino', año: '1903', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Puntualizaciones psicoanalíticas sobre un caso de paranoia [Schreber] (Vol. XII)', editorial: 'Amorrortu', año: '1911', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Tótem y tabú (Cap. 4 · Vol. XIII)', editorial: 'Amorrortu', año: '1913', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Introducción del narcisismo (Cap. 1 · Vol. XIV)', editorial: 'Amorrortu', año: '1914', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Lo inconsciente (Cap. 4 · Vol. XIV)', editorial: 'Amorrortu', año: '1915', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Duelo y melancolía (Vol. XIV) y Conferencias 17ª, 20ª, 23ª, 25ª y 26ª (Vol. XVI)', editorial: 'Amorrortu', año: '1917', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Pegan a un niño (Vol. XVII)', editorial: 'Amorrortu', año: '1919', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Psicología de las masas y análisis del yo (Caps. 7 y 8 · Vol. XVIII)', editorial: 'Amorrortu', año: '1921', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Neurosis y psicosis / La pérdida de la realidad en la neurosis y la psicosis (Vol. XIX)', editorial: 'Amorrortu', año: '1924', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'La negación (Vol. XIX)', editorial: 'Amorrortu', año: '1925', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Inhibición, síntoma y angustia (Caps. 3–9 · Vol. XX)', editorial: 'Amorrortu', año: '1926', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Freud, S.', titulo: 'Fetichismo (Vol. XXI)', editorial: 'Amorrortu', año: '1927', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Abraham, K.', titulo: 'Un breve estudio de la evolución de la libido considerada a la luz de los trastornos mentales', editorial: 'Hormé', año: '1924', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'Intervención sobre la transferencia / Función y campo / La instancia de la letra / La dirección de la cura / De una cuestión preliminar (en Escritos 1 y 2)', editorial: 'Siglo XXI', año: '1951–1958', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 1 (Caps. 7, 10, 11) y Libro 2 (Caps. 14 y 15)', editorial: 'Paidós', año: '1953–1955', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 3: Las psicosis (selección de capítulos)', editorial: 'Paidós', año: '1955–1956', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 4: La relación de objeto (Caps. 9, 13, 14, 15, 21 y 23)', editorial: 'Paidós', año: '1956–1957', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 5: Las formaciones del inconsciente (Caps. 8, 10, 20, 22, 23 y 26)', editorial: 'Paidós', año: '1957–1958', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 10: La angustia (Caps. 1, 8, 11, 12, 21, 22 y 23)', editorial: 'Paidós', año: '1962–1963', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 16: De un Otro al otro (Cap. 16: Clínica de la perversión)', editorial: 'Paidós', año: '1968–1969', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'Dos notas sobre el niño (en Intervenciones y textos 2)', editorial: 'Manantial', año: '1969', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lacan, J.', titulo: 'Joyce el síntoma (en El Seminario, Libro 23: El sinthome)', editorial: 'Paidós', año: '1975', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Miller, J.-A.', titulo: 'Leer un síntoma (Revista Lacaniana 12) / Variaciones sobre Diana y Acteón / La soledad del goce', editorial: 'Grama / Paidós', año: '2012', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Naparstek, F.', titulo: 'Teóricos 2014 (Los tres tiempos de Freud, Función paterna, Tres registros, Edipo y neurosis, Freud y psicosis, Síntoma y fantasía, Identificaciones, Pregunta neurótica, Angustia, Fobias, Perversiones)', editorial: 'Ed. Cátedra', año: '2014', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Berger, A.', titulo: 'La angustia entre la Mantis Religiosa y el vientre oscuro de la araña (Caps. 1–4)', editorial: 'Grama', año: '2022', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Mazzoni, Y.', titulo: 'Función paterna en Lacan / Forclusión del Nombre del Padre y fenómenos elementales', editorial: 'Ed. Cátedra', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },
          { autor: 'Lejbowicz, J. y Vargas, R.', titulo: 'Psicopatología infantil: Psicosis e infancia / Neurosis en la infancia', editorial: 'Fichas de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto III · Psicopatología y psicoanálisis: de Freud a las estructuras lacanianas' },

          // Trayecto IV: Sufrimientos hipermodernos: inclasificables, nuevos síntomas y psicosomáticas
          { autor: 'Bauman, Z.', titulo: 'Modernidad líquida', editorial: 'FCE', año: '1999', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Miller, J.-A.', titulo: 'Enganches, desenganches, reenganches (Intro. en La Psicosis Ordinaria)', editorial: 'Paidós', año: '2004', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Miller, J.-A.', titulo: 'Algunas reflexiones sobre el fenómeno psicosomático (en Matemas II)', editorial: 'Manantial', año: '1987', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Aromí, A. y Esqué, J.', titulo: 'Las psicosis ordinarias y las otras bajo transferencia (XI Congreso AMP)', editorial: 'AMP', año: '2018', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Laurent, E.', titulo: 'Los nuevos síntomas y los otros', editorial: 'El Caldero de la Escuela 57', año: '1997', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Tarrab, M.', titulo: 'Producir nuevos síntomas (en Nuevos síntomas, nuevas angustias)', editorial: 'Grama', año: '2005', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Naparstek, F. y colab.', titulo: 'Introducción a la clínica con toxicomanías y alcoholismo', editorial: 'Grama', año: '2005', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Naparstek, F.', titulo: 'Los inclasificables en las toxicomanías y la psicosis', editorial: 'Grama', año: '2009', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Naparstek, F.', titulo: 'La época actual y la psicopatología (en Teóricos 2014)', editorial: 'Ed. Cátedra', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Berger, A.', titulo: 'Del ataque de pánico a la angustia como brújula', editorial: 'Redes y Paradigmas 4', año: '2010', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Berger, A., Karpel, P., Lejbowicz, J. y Racki, G.', titulo: 'Efectos del pánico en la época actual / El banquete de las anoréxicas / Banquetes y ayunos', editorial: 'Anuario UBA / Cythere', año: '2022', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Bousoño, N., Mazzoni, Y. y Naparstek, F.', titulo: 'Actualidad del concepto de manía', editorial: 'Intersecciones PSI · UBA', año: 's/f', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Esqué, X.', titulo: 'La depresión vista desde la perspectiva psicoanalítica', editorial: 'NEL', año: '2012', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Lejbowicz, J. y Vargas, R.', titulo: 'Psicosomáticas', editorial: 'Ficha de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Moizeszowicz, J.', titulo: 'Psicofarmacología psicodinámica', editorial: 'Paidós', año: '1982', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Karpel, P. y Lejbowicz, J.', titulo: 'Bulimia y anorexia / Feminidad: segregación y lazos', editorial: 'Fichas de Cátedra · UBA', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Racki, G.', titulo: 'Tipos clínicos: lo clásico y lo actual / Palpitaciones ordinarias', editorial: 'Ficha de Cátedra / AMP', año: '2011', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },
          { autor: 'Morao, M.', titulo: 'Violencia, cuerpo y lazo entre los seres humanos', editorial: 'Ficha de Cátedra · UBA', año: '2013', tipo: 'Obligatoria', unidad: 'Trayecto IV · Sufrimientos hipermodernos: inclasificables y nuevos síntomas' },

          // Complementaria destacada
          { autor: 'Kuhn, T. S.', titulo: 'La estructura de las revoluciones científicas', editorial: 'FCE', año: '1962', tipo: 'Complementaria' },
          { autor: 'Maleval, J.-C.', titulo: 'La forclusión del Nombre del Padre', editorial: 'Paidós', año: '2002', tipo: 'Complementaria' },
          { autor: 'Laurent, E.', titulo: 'Estabilizaciones en las psicosis', editorial: 'Manantial', año: '1989', tipo: 'Complementaria' },
          { autor: 'Miller, J.-A. y otros', titulo: 'Los inclasificables de la clínica psicoanalítica', editorial: 'Paidós', año: '1999', tipo: 'Complementaria' },
          { autor: 'Recalcati, M.', titulo: 'La clínica contemporánea como clínica del vacío', editorial: 'Grama', año: '2003', tipo: 'Complementaria' },
          { autor: 'Cotard, J.', titulo: 'Del delirio de las negaciones (en Alucinar y delirar)', editorial: 'Polemos', año: '1882', tipo: 'Complementaria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 038)',
        titular: 'Fabián Darío Schejtman',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=38&anio=2026&cuatrimestre=2',
        enfoque: 'Psicoanálisis de orientación lacaniana (tradición desde 1984 con fuerte articulación entre enseñanza, investigación UBACyT, revista Ancla y extensión en el Servicio de Psicopatología de Sede San Isidro). Transmite un «Lacan no amputado» que integra desde el grado tanto la primera enseñanza como la clínica nodal del último Lacan (nudos borromeos, trenzas, sinthome, encadenamientos y desencadenamientos junto a Mazzuca, Schejtman, Godoy, Leibson y Soria). Sostiene una psico-pato-logía generalizada («no hay normalidad, sino el pathos que el logos inyecta en la psyché») y construye el diagnóstico estructural por entrecruzamiento de múltiples ejes sin reducir cada estructura a un único mecanismo. Incorpora un eje específico y riguroso sobre Sexuación y Género (fórmulas de la sexuación, debates Lacan–Foucault y Butler–Copjec, desvinculando explícitamente identidad o elección sexual de diagnóstico) y un 4° conjunto temático sobre síntomas actuales (cortes en el cuerpo, anorexias/bulimias, discurso capitalista y declinación del padre). Cursa 6 hs semanales obligatorias —Teóricos (2 hs), Seminarios de lectura de textos (2 hs) y Comisiones de casos clínicos y escritura diagnóstica (2 hs)— más un amplio menú optativo (conferencias, ~10 ateneos clínicos, comisiones de hospitales presenciales, grupos de lectura y Psicopato Voz).',
        evaluacion: 'Materia anual con examen final obligatorio (sin promoción directa), organizada en 4 Conjuntos Temáticos (32 semanas). Para regularizar: 75% de asistencia en los tres espacios obligatorios (teóricos, seminarios y comisiones) + 3 exámenes parciales escritos (al cierre de cada uno de los primeros tres conjuntos temáticos), aprobados con mínimo 4 en cada uno. Cada parcial tiene recuperatorio por inasistencia a la semana siguiente y al final del año se puede recuperar un parcial por aplazo. Régimen de Examen Final Especial (REFE): 75% de asistencia obligatoria + asistencia a 10 clases de actividades optativas (conferencias, ateneos, grupos de lectura y/o comisiones hospitalarias) + promedio de 8 o más en los 3 parciales sin ningún aplazo; consiste en elaborar, aprobar y defender un trabajo escrito en las mesas de final.',
        bibliografia: [
          // Módulo 1: Introducción: Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas
          { autor: 'Schejtman, F. (comp.) et al.', titulo: 'Psicopatología: clínica y ética. De la psiquiatría al psicoanálisis', editorial: 'Grama', año: '2013', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },
          { autor: 'Schejtman, F.', titulo: 'Sexo, Pathos, Logos (Ancla · Revista de la Cátedra II, N° 7)', editorial: 'UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },
          { autor: 'AA.VV.', titulo: 'Una po-ética del pathos (Ancla · Revista de la Cátedra II, N° 7)', editorial: 'UBA', año: '2017', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },
          { autor: 'Freud, S.', titulo: 'Tótem y tabú (Cap. IV · Vol. XIII)', editorial: 'Amorrortu', año: '1913', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },
          { autor: 'Freud, S.', titulo: 'Introducción del narcisismo (Cap. I · Vol. XIV)', editorial: 'Amorrortu', año: '1914', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 1: Los escritos técnicos de Freud (Caps. VII, X y XI)', editorial: 'Paidós', año: '1953–1954', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 3: Las psicosis (Caps. IV, V, VII y XXIII)', editorial: 'Paidós', año: '1955–1956', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 5: Las formaciones del inconsciente (Caps. VIII, IX y X)', editorial: 'Paidós', año: '1957–1958', tipo: 'Obligatoria', unidad: 'Módulo 1 · Ética, Clínica, Psiquiatría–Psicoanálisis y Nociones Básicas' },

          // Módulo 2: La Clínica Psiquiátrica
          { autor: 'Bercherie, P.', titulo: 'Los fundamentos de la clínica (Intro., Caps. 1 y 12)', editorial: 'Manantial', año: '1980', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Kraepelin, E.', titulo: 'La locura sistemática (paranoia) / La psychose irréversible (Demencia precoz, 6ª ed.)', editorial: 'Fichas de Cátedra · UBA', año: '1899', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Kraepelin, E.', titulo: 'Introducción a la clínica psiquiátrica (Lecciones 3, 8, 15 y 16)', editorial: 'Sánchez Calleja', año: '1905', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Kraepelin, E.', titulo: 'La locura maníaco-depresiva (en La locura maníaco-depresiva, la catatonía, la hebefrenia)', editorial: 'Polemos', año: '1913', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Bleuler, E.', titulo: 'Dementia praecox o el grupo de las esquizofrenias (Prefacio, Intro. y Cap. I: Asociación)', editorial: 'Lumen', año: '1911', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Sérieux, P. y Capgras, J.', titulo: 'Délire d\'interprétation, délire de revendication (Analytica 30)', editorial: 'Ficha de Cátedra · UBA', año: '1909', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'De Clérambault, G.', titulo: 'Las psicosis pasionales (en Metáfora y delirio)', editorial: 'Eolia Dor', año: '1921', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'De Clérambault, G.', titulo: 'Psicosis basadas en el automatismo (Oeuvre Psychiatrique)', editorial: 'Ficha de Cátedra · UBA', año: '1925', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Albaya, P.', titulo: 'Psicosis maníaco-depresiva', editorial: 'Ficha de Cátedra · UBA', año: '2008', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Sosso, O.', titulo: 'Trastornos del estado de ánimo', editorial: 'Ficha de Cátedra · UBA', año: '2001', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },
          { autor: 'Zlotnik, M.', titulo: 'La psicosis en el DSM-IV (Esquizofrenia, Trastorno delirante y Estado de ánimo)', editorial: 'Fichas de Cátedra · UBA', año: '1997', tipo: 'Obligatoria', unidad: 'Módulo 2 · La Clínica Psiquiátrica' },

          // Módulo 3: La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión
          { autor: 'Schreber, D. P.', titulo: 'Memorias de un enfermo nervioso (Intro., Carta abierta, Caps. 1, 4, 5, 10, 13, 16, 21 y Dictámenes)', editorial: 'Lohlé', año: '1903', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Las neuropsicosis de defensa / Nuevas puntualizaciones / Manuscrito H / Obsesiones y fobias / Neurosis de angustia', editorial: 'Amorrortu', año: '1894–1896', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Estudios sobre la histeria (Cap. 4 · Vol. II)', editorial: 'Amorrortu', año: '1895', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Fragmento de análisis de un caso de histeria [Dora] y Tres ensayos de teoría sexual, Cap. 1 (Vol. VII)', editorial: 'Amorrortu', año: '1905', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Acciones obsesivas y prácticas religiosas / Las fantasías histéricas y su relación con la bisexualidad (Vol. IX)', editorial: 'Amorrortu', año: '1907–1908', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'El Hombre de las Ratas y Análisis de la fobia de un niño de cinco años [Juanito] (Vol. X)', editorial: 'Amorrortu', año: '1909', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Un recuerdo infantil de Leonardo da Vinci (Caps. 2 y 3 · Vol. XI)', editorial: 'Amorrortu', año: '1910', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Puntualizaciones psicoanalíticas sobre un caso de paranoia [Schreber] (Vol. XII)', editorial: 'Amorrortu', año: '1911', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'La represión / Lo inconsciente (Cap. 4 · Vol. XIV)', editorial: 'Amorrortu', año: '1915', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: '17ª Conferencia: El sentido de los síntomas (Vol. XVI)', editorial: 'Amorrortu', año: '1917', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Pegan a un niño (Vol. XVII)', editorial: 'Amorrortu', año: '1919', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Psicología de las masas y análisis del yo (Caps. 7 y 8 · Vol. XVIII)', editorial: 'Amorrortu', año: '1921', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Neurosis y psicosis / La pérdida de la realidad / El problema económico del masoquismo (Vol. XIX)', editorial: 'Amorrortu', año: '1924', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'La negación (Vol. XIX) e Inhibición, síntoma y angustia (Caps. 3–7 · Vol. XX)', editorial: 'Amorrortu', año: '1925–1926', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Freud, S.', titulo: 'Fetichismo (Vol. XXI)', editorial: 'Amorrortu', año: '1927', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Lacan, J.', titulo: 'Intervención sobre la transferencia / El mito individual del neurótico / Función y campo / Variantes de la cura-tipo / De una cuestión preliminar / Juventud de Gide', editorial: 'Siglo XXI / Paidós', año: '1951–1958', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 3: Las psicosis (selección de capítulos)', editorial: 'Paidós', año: '1955–1956', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 4: Las relaciones de objeto (selección sobre Juanito y fetichismo)', editorial: 'Paidós', año: '1956–1957', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 5: Las formaciones del inconsciente (selección)', editorial: 'Paidós', año: '1957–1958', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 8 (Cap. XIV) y Libro 10: La angustia (Caps. XI–XIII, XXI–XXIV)', editorial: 'Paidós', año: '1960–1963', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 16 (Cap. XVI), Libro 17 (Cap. V) y Libro 19: ...o peor (Cap. V)', editorial: 'Paidós', año: '1968–1972', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 20: Aun (Caps. I, VI, VII) y Libro 23: El sinthome (Caps. V, VI, X) / Una psicosis lacaniana', editorial: 'Paidós / El analiticón', año: '1972–1976', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Schejtman, F. (comp.) et al.', titulo: 'Elaboraciones lacanianas sobre la psicosis', editorial: 'Grama', año: '2013', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Schejtman, F. (comp.) et al.', titulo: 'Elaboraciones lacanianas sobre la neurosis', editorial: 'Grama', año: '2013', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Schejtman, F.', titulo: 'La liquidación de las perversiones / Sobre las fantasías perversas de los neuróticos', editorial: 'Grama', año: '2007', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Godoy, C.', titulo: 'Auxiliares de Dios (Ancla · Revista de la Cátedra II, N° 4/5)', editorial: 'UBA', año: '2012', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },
          { autor: 'Deutsch, H.', titulo: 'Un caso de fobia a las gallinas (en Elaboraciones lacanianas sobre la psicosis)', editorial: 'Grama', año: '1930', tipo: 'Obligatoria', unidad: 'Módulo 3 · La Clínica Psicoanalítica: Psicosis, Neurosis y Perversión' },

          // Módulo 4: Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos
          { autor: 'Rosenstein, M.', titulo: 'Demencias / Trastornos mentales orgánicos (tumores y endocrinología)', editorial: 'Fichas de Cátedra · UBA', año: '1997–2002', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Rosenstein, M., Sosso, O. y Thomson, A.', titulo: 'Alcoholismo / Epilepsias', editorial: 'Fichas de Cátedra · UBA', año: '2001', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Sosso, O.', titulo: 'Otras adicciones', editorial: 'Ficha de Cátedra · UBA', año: '2001', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Mazzuca, M.', titulo: 'Toxicomanías y psicoanálisis', editorial: 'Ficha de Cátedra · UBA', año: '2008', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Leibson, L.', titulo: 'Fenómeno psicosomático', editorial: 'Ficha de Cátedra · UBA', año: '2004', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Miller, J.-A.', titulo: 'Algunas reflexiones sobre el fenómeno psicosomático (en Matemas II)', editorial: 'Manantial', año: '1988', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Schejtman, F.', titulo: 'Síntoma y sinthome / Introducción de la trenza / Encadenamientos y desencadenamientos neuróticos', editorial: 'Grama', año: '2008–2010', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Schejtman, F.', titulo: 'Locuras del último Lacan (Ancla · Revista de la Cátedra II, N° 6)', editorial: 'UBA', año: '2016', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Godoy, C.', titulo: 'Editorial: Folisofía (Ancla · Revista de la Cátedra II, N° 6)', editorial: 'UBA', año: '2016', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Godoy, C., Mazzuca, R. y Schejtman, F.', titulo: 'El amor al padre y la estabilidad histérica en la primera enseñanza de Lacan', editorial: 'Grama', año: '2005', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },
          { autor: 'Leibson, L.', titulo: 'Desencadenamientos y locuras en la neurosis', editorial: 'Grama', año: '2013', tipo: 'Obligatoria', unidad: 'Módulo 4 · Diagnóstico Diferencial, Cuadros Orgánicos, Psicosomática y Nudos' },

          // Módulo 5: Temas Especiales: Infancia, Psicofarmacología, Angustia, Melancolía, Síntomas Actuales y Sexuación
          { autor: 'Bugacoff, A.', titulo: 'Psicopatología infantil', editorial: 'Ficha de Cátedra · UBA', año: '2008', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Tendlarz, S.', titulo: 'Lacan y la psicosis en la infancia (Cap. I en ¿De qué sufren los niños?)', editorial: 'Lugar Editorial', año: '1996', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Sosso, O.', titulo: 'Psicofarmacología', editorial: 'Ficha de Cátedra · UBA', año: '1997', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Freud, S.', titulo: 'Duelo y melancolía (Vol. XIV)', editorial: 'Amorrortu', año: '1917', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Freud, S.', titulo: 'El malestar en la cultura (Caps. I y II · Vol. XXI)', editorial: 'Amorrortu', año: '1930', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Freud, S.', titulo: 'Contribuciones a la psicología del amor / Algunas consecuencias psíquicas de la diferencia anatómica / 33ª Conferencia: La feminidad', editorial: 'Amorrortu', año: '1910–1932', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Lacan, J.', titulo: 'Nota sobre el padre / Nota sobre el niño / El Seminario 17 (Caps. I, II, VI–XII) / El Seminario 18 (Cap. X) / Conferencia en Milán / Televisión', editorial: 'Paidós / EOL / Manantial', año: '1968–1973', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Godoy, C.', titulo: 'Psicosis y sexuación (en Elaboraciones lacanianas sobre la psicosis)', editorial: 'Grama', año: '2013', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Godoy, C., Schejtman, F. y Soria, N.', titulo: 'Un banquete hipermoderno (en Porciones de nada)', editorial: 'Serie del Bucle', año: '2009', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Schejtman, F.', titulo: 'Identificación de la epidemia / Capitalismo y anorexia: discursos y fórmulas', editorial: 'Grama', año: '2013', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Schejtman, F.', titulo: 'Notas sobre diagnóstico y sexuación (Memorias VII Congreso UBA)', editorial: 'UBA', año: '2015', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Soria, N.', titulo: 'Síntomas de discurso capitalista (Memorias XI Congreso UBA)', editorial: 'UBA', año: '2018', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Dartiguelongue, J.', titulo: 'Cortes en el cuerpo (en El sujeto y los cortes en el cuerpo)', editorial: 'Letra Viva', año: '2012', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Mazzuca, M. y Zaffore, C.', titulo: 'Del estrago al síntoma (Ancla · Revista de la Cátedra II, N° 1)', editorial: 'UBA', año: '2007', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Folgar, S.', titulo: '¿Cuánto puede pegar una mujer? (Ancla · Revista de la Cátedra II, N° 4/5)', editorial: 'UBA', año: '2012', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },
          { autor: 'Schejtman, F.', titulo: 'El sexo (y el silencio) de las sirenas', editorial: 'Ficha de Cátedra · UBA', año: '2021', tipo: 'Obligatoria', unidad: 'Módulo 5 · Temas Especiales: Infancia, Síntomas Actuales y Sexuación' },

          // Complementaria destacada
          { autor: 'Mazzuca, R., Schejtman, F. y Zlotnik, M.', titulo: 'Las dos clínicas de Lacan. Introducción a la clínica de los nudos', editorial: 'Tres Haches', año: '2000', tipo: 'Complementaria' },
          { autor: 'Schejtman, F.', titulo: 'Sinthome: ensayos de clínica psicoanalítica nodal', editorial: 'Grama', año: '2013', tipo: 'Complementaria' },
          { autor: 'Soler, C.', titulo: 'Estudios sobre las psicosis', editorial: 'Manantial', año: '1992', tipo: 'Complementaria' },
          { autor: 'Butler, J.', titulo: 'El género en disputa', editorial: 'Paidós', año: '2007', tipo: 'Complementaria' },
          { autor: 'Copjec, J.', titulo: 'El sexo y la eutanasia de la razón', editorial: 'Paidós', año: '2006', tipo: 'Complementaria' },
          { autor: 'Foucault, M.', titulo: 'El nacimiento de la clínica', editorial: 'Siglo XXI', año: '1961', tipo: 'Complementaria' }
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=59&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Mikulic, I. M.', titulo: 'Evaluación Psicológica', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 058)',
        titular: 'Alejandro Castro Solano',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=58&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=113&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Febbraio, A.', titulo: 'El proceso de diagnóstico psicológico', editorial: 'Eudeba', año: '2012', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 042)',
        titular: 'Andrea Vinue',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=42&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=577&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Ormart, E.', titulo: 'Ética y formación profesional', editorial: 'Eudeba', año: '2015', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 578)',
        titular: 'Julieta Bareiro',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=578&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=644&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Schlemenson, A.', titulo: 'La perspectiva ética en el análisis organizacional', editorial: 'Paidós', año: '1990', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 539)',
        titular: 'Nora Vitale',
        link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=539&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=83&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Baquero, R.', titulo: 'Vygotsky y el aprendizaje escolar', editorial: 'Aique', año: '1996', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 041)',
        titular: 'A designar',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=41&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=40&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Ferrari, L.', titulo: 'Psicología del Trabajo', editorial: 'Eudeba', año: '2015', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 724)',
        titular: 'Virginia Borrajo',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=724&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=574&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Lombardi, G.', titulo: 'La clínica del psicoanálisis', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 575)',
        titular: 'Silvia Vazquez',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=575&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=768&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Ghiso, C.', titulo: 'Psicología Jurídica', editorial: 'Eudeba', año: '2014', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 769)',
        titular: 'Stella M. Puhl',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=769&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=570&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Etchevers, M.', titulo: 'Avances en Psicoterapia', editorial: 'Eudeba', año: '2016', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 571)',
        titular: 'Eduardo G. Keegan',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=571&anio=2026&cuatrimestre=2',
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
    catedras: [{ nombre: 'Cátedra I (Cód. 051)', titular: 'Estela S. Eisenberg', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=51&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra II (Cód. 052)', titular: 'Fabiana Freidin', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=52&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra I (Cód. 057)', titular: 'Juan de Olaso', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=57&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra II (Cód. 122)', titular: 'Pablo Diego Muñoz', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=122&anio=2026&cuatrimestre=2', bibliografia: [] }],
    correlativas: ['Psicoanálisis: Freud']
  },
  {
    id: 'psico-fenomenologica-existencial',
    nombre: 'Psicología Fenomenológica y Existencial',
    año: 3,
    ciclo: 'Electivas General',
    cuatrimestre: 1,
    descripcion: 'Estudio del método fenomenológico (Husserl, Heidegger, Sartre, Merleau-Ponty, Jaspers) y la tradición existencial en diálogo crítico con el psicoanálisis (Freud y Lacan) alrededor de la conciencia intencional, el Dasein, la comprensión, la locura, el cuerpo, el prójimo y la libertad.',
    objetivos: [
      'Apropiarse de los conceptos fundamentales del método fenomenológico y la tradición existencial.',
      'Conocer los fundamentos históricos y conceptuales de la relación entre fenomenología, existencialismo y psicoanálisis.',
      'Analizar núcleos temáticos comunes: intencionalidad, Dasein, comprensión, locura, cuerpo, el prójimo y la libertad.'
    ],
    catedras: [
      {
        nombre: 'Cátedra I · Única (Cód. 078)',
        titular: 'Pablo Diego Muñoz',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=78&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Pablo Diego Muñoz', titulo: '(Des)encuentros entre fenomenología y psicoanálisis (Vol. I y II)', editorial: 'Eudeba', año: '2014–2015', tipo: 'Obligatoria' },
          { autor: 'Jean-Paul Sartre', titulo: 'El ser y la nada (Las relaciones concretas con el prójimo; El psicoanálisis existencial) y El existencialismo es un humanismo', editorial: 'Losada / Sur', año: '1943 / 1948', tipo: 'Obligatoria' },
          { autor: 'Martin Heidegger', titulo: 'Ser y tiempo (§ 9, § 12, § 14–16 y § 39–41: Dasein, estar-en-el-mundo, angustia y cuidado)', editorial: 'Trotta', año: '1927', tipo: 'Obligatoria' },
          { autor: 'Karl Jaspers', titulo: 'Psicopatología general (Fenomenología y Psicología comprensiva) y Escritos psicopatológicos (Desarrollo o proceso)', editorial: 'FCE / Gredos', año: '1910 / 1946', tipo: 'Obligatoria' },
          { autor: 'Jacques Lacan', titulo: 'De la psicosis paranoica en sus relaciones con la personalidad, Acerca de la causalidad psíquica, Seminario 10 y Seminario 11', editorial: 'Siglo XXI / Paidós', año: '1932–1964', tipo: 'Obligatoria' },
          { autor: 'Maurice Merleau-Ponty', titulo: 'Fenomenología de la percepción (Parte I: El cuerpo) y El mundo de la percepción', editorial: 'Península', año: '1945 / 1948', tipo: 'Obligatoria' },
          { autor: 'Georges Lanteri-Laura', titulo: 'Proceso y psicogénesis en la obra de J. Lacan', editorial: 'Litoral', año: '1984', tipo: 'Obligatoria' },
          { autor: 'Agustín Kripper y Luciano Lutereau', titulo: 'Introducción a la fenomenología (Heidegger, Jaspers, Sartre y Merleau-Ponty)', editorial: 'Cátedra UBA', año: '2015', tipo: 'Obligatoria' }
        ]
      }
    ],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 080)', titular: 'Ricardo Iacub', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=80&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 082)', titular: 'Ariana García', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=82&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 087)', titular: 'Liliana Ferrari', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=87&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 089)', titular: 'Fernando Gabriel Montañez', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=89&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 090)', titular: 'Rubén Muzio', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=90&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 096)', titular: 'Fabián Allegro', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=96&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 780)', titular: 'José Dahab', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=780&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 806)', titular: 'María Inés Sotelo', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=806&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 798)', titular: 'María de los Ángeles Córdoba', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=798&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra II (Cód. 810)', titular: 'Jorge Biglieri', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=810&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 860)', titular: 'Cristian Garay', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=860&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 085)', titular: 'Patricia Álvarez', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=85&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 086)', titular: 'Gabriela Aisenson', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=86&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 136)', titular: 'Andrés Febbraio', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=136&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 660)', titular: 'Diana Fernández Zalazar', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=660&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 043)', titular: 'Paul Douglas Yorston', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=43&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 081)', titular: 'Jorge Ulnik', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=81&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 091)', titular: 'Daniel Politis', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=91&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 158)', titular: 'Valeria Wittner', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=158&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 616)', titular: 'Silvia Leonor Herlyn', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=616&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra I (Cód. 654)', titular: 'David Laznik', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=654&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 770)', titular: 'Fabián Naparstek', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=770&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 771)', titular: 'Eduardo Keegan', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=771&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 807)', titular: 'Marcelo Mazzuca', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=807&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 808)', titular: 'Norma Bruner', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=808&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 815)', titular: 'Rodrigo Abínzano', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=815&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 662)', titular: 'María Santarsiero', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=662&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 191)', titular: 'Matilde A. De La Iglesia', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=191&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 692)', titular: 'Verónica Llull Casado', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=692&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 781)', titular: 'Flabia Rodríguez', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=781&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 782)', titular: 'José Rodriguez', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=782&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 067)', titular: 'Ana Tisera', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=67&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 084)', titular: 'Cora Pesiney', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=84&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 105)', titular: 'Débora Tajer', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=105&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 607)', titular: 'Raúl Barrios', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=607&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 816)', titular: 'Gabriela Perrotta', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=816&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 109)', titular: 'María Inés Sotelo', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=109&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 125)', titular: 'Roberto Raúl Patrono', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=125&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 126)', titular: 'Martín Trigo', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=126&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 128)', titular: 'Guido Revale', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=128&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 130)', titular: 'Mariana Martinez Liss', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=130&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 135)', titular: 'Andrea Fränkel', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=135&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 138)', titular: 'Gustavo Torres', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=138&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 161)', titular: 'Marcela Reyes', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=161&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 579)', titular: 'Silvina Noemi Dulitzky', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=579&anio=2026&cuatrimestre=1', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 580)', titular: 'Guido Korman', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=580&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 639)', titular: 'Fabiana Freidin', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=639&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 687)', titular: 'Gustavo Rossi', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=687&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 689)', titular: 'Silvia Di Biasi', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=689&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 703)', titular: 'Sandra Vanotti', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=703&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 721)', titular: 'Elena Teresa Galindez', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=721&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 722)', titular: 'Norma Bruner', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=722&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 726)', titular: 'María Eugenia Otero', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=726&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 772)', titular: 'Osvaldo Rodríguez', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=772&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 779)', titular: 'Norberto Aldo Conti', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=779&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 812)', titular: 'Marcelo Ferraro', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=812&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 817)', titular: 'Sandra Szmuszkowiez', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=817&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 820)', titular: 'Martín Etchevers', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=820&anio=2026&cuatrimestre=1', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 822)', titular: 'María Luján Iuale', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=822&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 824)', titular: 'Elizabeth Ormart', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=824&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 851)', titular: 'Nicolás G. Machín', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=851&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 857)', titular: 'Ana María D´Anna', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=857&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 861)', titular: 'Valeria Wittner', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=861&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 862)', titular: 'Martín Carlos Alomo', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=862&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 100)', titular: 'Gabriela Aisenson', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=100&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 107)', titular: 'Andrés Febbraio', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=107&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 100)', titular: 'Gabriela Aisenson', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=100&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 657)', titular: 'Arnaldo Martín Sandoval', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=657&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 119)', titular: 'Gustavo M. Laursen', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=119&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 601)', titular: 'Melina Siderakis', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=601&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 718)', titular: 'Ma. de los Ángeles Izcurdia', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=718&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 858)', titular: 'Roxana Laura Marqués', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=858&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 581)', titular: 'Sara Elena Ardila Gómez', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=581&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 582)', titular: 'Gabriela Salomone', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=582&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 583)', titular: 'Elizabeth Beatriz Ormart', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=583&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 584)', titular: 'Paula Belén Mastandrea', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=584&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 632)', titular: 'Analía Liliana Benvenuto', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=632&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 638)', titular: 'Ana Tisera', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=638&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 707)', titular: 'Daniel Cóppola', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=707&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 786)', titular: 'Martín De Lellis', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=786&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 788)', titular: 'Vanina Schmidt', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=788&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 805)', titular: 'Marisa Morao', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=805&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 811)', titular: 'Raul Barrios', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=811&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 825)', titular: 'Gabriela Perrotta', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=825&anio=2026&cuatrimestre=1', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 826)', titular: 'Nazarena Suarez', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=826&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 842)', titular: 'Mariana C. Miracco', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=842&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 852)', titular: 'Nicolás Alejandro Vizioli', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=852&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 585)', titular: 'R. Muzio', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=585&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 819)', titular: 'I. M. Mikulic', link: 'http://academica.psi.uba.ar/Psi/Ver521_.php?catedra=819&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 845)', titular: 'R. Iacub', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=845&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 849)', titular: 'N. S. Lima', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=849&anio=2026&cuatrimestre=2', bibliografia: [] }],
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
    catedras: [{ nombre: 'Cátedra Única (Cód. 856)', titular: 'C. A. Duhalde', link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=856&anio=2026&cuatrimestre=1', bibliografia: [] }],
    correlativas: ['Salud Pública y Salud Mental']
  }
];
