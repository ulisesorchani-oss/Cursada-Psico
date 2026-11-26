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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=61&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Azzollini, S.', titulo: 'Metodología de la Investigación', editorial: 'Eudeba', año: '2014', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 062)',
        titular: 'Roxana Ynoub',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=62&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=65&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'De Lellis, M.', titulo: 'Salud Pública y Salud Mental', editorial: 'Eudeba', año: '2010', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 066)',
        titular: 'Débora Tajer',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=66&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=63&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Pichon-Rivière, E.', titulo: 'El proceso grupal', editorial: 'Nueva Visión', año: '1975', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 064)',
        titular: 'Cintia Gisela Rolón',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=64&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=553&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Piaget, J.', titulo: 'La psicología del niño', editorial: 'Morata', año: '1966', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 554)',
        titular: 'Eugenia Sorgen',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=554&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=555&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Aberastury, A.', titulo: 'La adolescencia normal', editorial: 'Paidós', año: '1971', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 556)',
        titular: 'A designar',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=556&anio=2026&cuatrimestre=2',
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
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=37&anio=2026&cuatrimestre=2',
        bibliografia: [
          { autor: 'Lacan, J.', titulo: 'El Seminario, Libro 3: Las psicosis', editorial: 'Paidós', año: '1984', tipo: 'Obligatoria' }
        ]
      },
      {
        nombre: 'Cátedra II (Cód. 038)',
        titular: 'Fabián Schejtman',
        link: 'http://academica.psi.uba.ar/Psi/Ver521.php?catedra=38&anio=2026&cuatrimestre=2',
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
