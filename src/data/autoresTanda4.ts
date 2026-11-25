import type { AutorProfile } from './autores';

export const AUTORES_TANDA_4: AutorProfile[] = [
  {
    id: 'brentano',
    nombre: 'Franz Brentano',
    apellidoCorto: 'Brentano',
    matchKeys: ['brentano'],
    materiaIdsExtra: ['historia-psico', 'psico-fenomenologica-existencial', 'problemas-filosoficos'],
    fechas: '1838 – 1917',
    origen: 'Marienberg, Alemania · Viena, Austria',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo y psicólogo alemán fundador de la "psicología del acto". Recuperó el concepto de intencionalidad de la conciencia y fue maestro directo de Sigmund Freud y Edmund Husserl en Viena.',
    biografia:
      'El mismo año en que Wilhelm Wundt publicó sus "Principios de psicología fisiológica" (1874), Franz Brentano publicó "La psicología desde el punto de vista empírico", inaugurando una vía alternativa a la psicología experimental de laboratorio: la psicología del acto.\n\nProfesor carismático en la Universidad de Viena, tuvo entre sus alumnos directos a un joven Sigmund Freud —quien cursó varios seminarios con él— y a Edmund Husserl. Su tesis de que todo fenómeno psíquico se define por su "intencionalidad" (estar siempre referido a un objeto) dio nacimiento a toda la tradición fenomenológica del siglo XX.',
    principalesAportes: [
      'Recuperación y formulación moderna de la "intencionalidad": la conciencia es siempre conciencia de algo (percibir algo, juzgar algo, amar u odiar algo).',
      'Propuesta de la "psicología del acto" frente a la psicología de los contenidos de Wundt: lo propio de lo psíquico es el acto mental, no átomos sensoriales aislados.',
      'Clasificación tripartita de los fenómenos psíquicos: representaciones, juicios y fenómenos de amor y odio (afectos y voluntad).',
      'Puente histórico decisivo entre la filosofía clásica, la fenomenología (Husserl) y el nacimiento del psicoanálisis (Freud).'
    ],
    conceptosClave: [
      {
        termino: 'Intencionalidad',
        explicacion:
          'Rasgo distintivo de todo fenómeno psíquico: apunta necesariamente hacia un objeto inmanente ("inexistencia intencional"), a diferencia de los fenómenos físicos.'
      },
      {
        termino: 'Psicología del acto vs. del contenido',
        explicacion:
          'Mientras Wundt analizaba sensaciones elementales en laboratorio, Brentano estudiaba los actos activos del psiquismo (escuchar, desear, juzgar).'
      },
      {
        termino: 'Percepción interna vs. Introspección',
        explicacion:
          'Brentano criticó la autoobservación directa (que altera lo observado) y propuso captar los actos psíquicos oblicuamente a través de la percepción interna y la memoria inmediata.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La psicología desde el punto de vista empírico',
        año: '1874',
        resumen: 'Obra fundacional de la psicología del acto y del concepto moderno de intencionalidad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Aristóteles y filosofía escolástica', nota: 'Noción original de intentio y psicología filosófica' }
    ],
    influencioA: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Maestro directo y punto de partida de la fenomenología' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Profesor de filosofía de Freud en la Universidad de Viena' },
      { nombre: 'Psicología de la Gestalt (Ehrenfels, Stumpf)', nota: 'Atención a los actos y totalidades perceptuales' }
    ]
  },
  {
    id: 'nietzsche',
    nombre: 'Friedrich Nietzsche',
    apellidoCorto: 'Nietzsche',
    matchKeys: ['nietzsche'],
    materiaIdsExtra: ['problemas-filosoficos', 'historia-psico', 'etica-deontologia-ddhh'],
    fechas: '1844 – 1900',
    origen: 'Röcken · Basilea · Sils-Maria / Weimar',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo alemán, uno de los grandes "maestros de la sospecha" junto a Marx y Freud. Criticó la ilusión del sujeto consciente soberano, introdujo el método genealógico y anticipó intuiciones clave sobre pulsiones y culpa.',
    biografia:
      'Filólogo clásico y filósofo de influencia incalculable en el pensamiento contemporáneo, Friedrich Nietzsche desmontó la confianza ilustrada en una conciencia transparente y racional, mostrando que tras la moral, los ideales y el "yo" operan fuerzas corporales, afectos, olvidos activos y relaciones de poder.\n\nPaul Ricoeur lo ubicó junto a Marx y Freud entre los tres "maestros de la sospecha". En Psicología UBA su método genealógico y su crítica al sujeto son indispensables para leer a Michel Foucault, a Sigmund Freud y los debates de Problemas Filosóficos y Ética.',
    principalesAportes: [
      'Creación del método genealógico: indagar el origen histórico, corporal y conflictivo de los valores morales y verdades que se presentan como eternas.',
      'Crítica radical a la primacía de la conciencia: el cuerpo y las fuerzas inconscientes ("gran razón") desbordan al yo consciente ("pequeña razón").',
      'Análisis psicológico profundo del resentimiento, la mala conciencia (interiorización de la crueldad) y el ideal ascético.',
      'Perspectivismo: no existen hechos puros sin interpretación, sino perspectivas atravesadas por afectos e intereses vitales.'
    ],
    conceptosClave: [
      {
        termino: 'Genealogía',
        explicacion:
          'Método crítico que rastrea cómo nacen históricamente conceptos como culpa, castigo, verdad o moral, desnaturalizando su supuesto origen puro.'
      },
      {
        termino: 'Voluntad de poder',
        explicacion:
          'No equivale a simple dominio político, sino a la fuerza vital y creativa de afirmación, autosuperación e interpretación.'
      },
      {
        termino: 'Mala conciencia y Resentimiento',
        explicacion:
          'Mecanismos afectivos en los que las pulsiones impedidas de descargarse hacia afuera se vuelven contra el propio sujeto (directo antecedente del Superyó freudiano).'
      },
      {
        termino: 'Perspectivismo',
        explicacion:
          'Todo conocimiento es situado: conocer mejor implica multiplicar perspectivas y reconocer los afectos que las sostienen.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La genealogía de la moral',
        año: '1887',
        resumen: 'Análisis demoledor sobre culpa, castigo, mala conciencia y origen histórico de los valores.'
      },
      {
        titulo: 'Más allá del bien y del mal',
        año: '1886',
        resumen: 'Crítica al dogmatismo filosófico y a la ilusión de un "yo" unitario.'
      },
      {
        titulo: 'Así habló Zaratustra',
        año: '1883–1885',
        resumen: 'Expone la crítica al nihilismo, el cuerpo como "gran razón" y la afirmación vital.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Arthur Schopenhauer', nota: 'Voluntad irracional y crítica del optimismo racionalista' }
    ],
    influencioA: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Método genealógico y crítica de la verdad y el poder' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Afinidad en la crítica de la conciencia, el ello y la culpa superyoica' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Crítica a la metafísica occidental y nihilismo' }
    ]
  },
  {
    id: 'husserl',
    nombre: 'Edmund Husserl',
    apellidoCorto: 'Husserl',
    matchKeys: ['husserl'],
    materiaIdsExtra: ['psico-fenomenologica-existencial', 'problemas-filosoficos', 'historia-psico'],
    fechas: '1859 – 1938',
    origen: 'Prossnitz (Moravia) · Gotinga / Friburgo, Alemania',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Matemático y filósofo alemán fundador de la fenomenología trascendental. Propuso "volver a las cosas mismas" mediante la epojé, la intencionalidad y el concepto de mundo de la vida (Lebenswelt).',
    biografia:
      'Discípulo directo de Franz Brentano en Viena, Edmund Husserl fundó a comienzos del siglo XX el movimiento fenomenológico, una de las corrientes filosóficas más influyentes sobre la psicología y la psicopatología contemporáneas.\n\nFrente al psicologismo y al positivismo cientificista que reducían la experiencia humana a datos físicos medibles, Husserl propuso describir rigurosamente cómo se aparecen los fenómenos a la conciencia vivida ("volver a las cosas mismas"), abriendo el camino para Jaspers, Heidegger, Sartre, Merleau-Ponty y Binswanger.',
    principalesAportes: [
      'Fundación de la Fenomenología como método descriptivo riguroso de las estructuras de la experiencia consciente.',
      'Desarrollo de la "epojé" (puesta entre paréntesis de los prejuicios de la actitud natural) y de la reducción fenomenológica.',
      'Reelaboración de la intencionalidad como correlación inseparable entre el acto de conciencia (noesis) y lo percibido en cuanto tal (noema).',
      'Formulación tardía del concepto de "Lebenswelt" (mundo de la vida), suelo precientífico de experiencia compartida sobre el cual se apoyan todas las ciencias.'
    ],
    conceptosClave: [
      {
        termino: 'Epojé (Suspensión del juicio)',
        explicacion:
          'Actitud metódica que "pone entre paréntesis" nuestras creencias dadas por sentadas y teorías previas para atender fielmente a cómo se presenta la experiencia.'
      },
      {
        termino: 'Intencionalidad (Noesis / Noema)',
        explicacion:
          'La conciencia no es una caja cerrada sino apertura hacia el mundo: todo acto consciente (noesis) se correlaciona con un sentido percibido (noema).'
      },
      {
        termino: 'Mundo de la vida (Lebenswelt)',
        explicacion:
          'Horizonte cotidiano, intersubjetivo y precientífico en el que vivimos antes de cualquier abstracción matemática o experimental.'
      },
      {
        termino: 'Crítica al naturalismo y psicologismo',
        explicacion:
          'Denuncia la confusión de reducir las leyes del sentido, la lógica y la experiencia subjetiva a meros hechos biológicos o estadísticos.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Investigaciones lógicas',
        año: '1900–1901',
        resumen: 'Obra inaugural de la fenomenología y crítica clásica al psicologismo.'
      },
      {
        titulo: 'Ideas relativas a una fenomenología pura',
        año: '1913',
        resumen: 'Presenta sistemáticamente la epojé, la reducción y la estructura noesis–noema.'
      },
      {
        titulo: 'La crisis de las ciencias europeas y la fenomenología trascendental',
        año: '1936',
        resumen: 'Desarrolla el concepto de Lebenswelt y critica el olvido cientificista de la subjetividad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Franz Brentano', autorId: 'brentano', nota: 'Concepto de intencionalidad y psicología descriptiva' },
      { nombre: 'René Descartes e Immanuel Kant', nota: 'Indagación trascendental sobre la subjetividad y el conocimiento' }
    ],
    influencioA: [
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Fenomenología hermenéutica del Dasein' },
      { nombre: 'Maurice Merleau-Ponty', autorId: 'merleau-ponty', nota: 'Fenomenología de la percepción y del cuerpo vivido' },
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Psicopatología fenomenológica descriptiva' },
      { nombre: 'Ludwig Binswanger', autorId: 'binswanger', nota: 'Análisis existencial (Daseinsanalyse) en psiquiatría' }
    ]
  },
  {
    id: 'jaspers',
    nombre: 'Karl Jaspers',
    apellidoCorto: 'Jaspers',
    matchKeys: ['jaspers'],
    materiaIdsExtra: [
      'psicopatologia',
      'psico-fenomenologica-existencial',
      'problemas-filosoficos',
      'historia-psico'
    ],
    fechas: '1883 – 1969',
    origen: 'Oldemburgo · Heidelberg, Alemania · Basilea, Suiza',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Psiquiatra y filósofo alemán autor de la monumental "Psicopatología General" (1913). Introdujo el método fenomenológico en psiquiatría, distinguió explicar de comprender y formuló las "situaciones límite".',
    biografia:
      'Formado en medicina y psiquiatría en la clínica de Heidelberg antes de volcarse plenamente a la filosofía existencial, Karl Jaspers escribió a los 30 años su "Psicopatología General" (1913), piedra angular de la psicopatología del siglo XX. Suspendido de su cátedra durante el nazismo, reflexionó también sobre la culpa política y la responsabilidad ética.\n\nSu distinción metodológica entre "explicar" (causas orgánicas/objetivas) y "comprender" (conexiones de sentido en la vivencia subjetiva), junto a su diferenciación entre "desarrollo" y "proceso" psíquico, es referencia obligada en Psicopatología, Fenomenológica y la tesis doctoral del propio Jacques Lacan.',
    principalesAportes: [
      'Introducción del método fenomenológico descriptivo en la psiquiatría: escuchar y describir con rigor las vivencias subjetivas del paciente antes de teorizar.',
      'Distinción epistemológica fundamental entre "Explicar" (erklären, causalidad científico-natural) y "Comprender" (verstehen, nexos de sentido vivenciables).',
      'Diferenciación psicopatológica clásica entre "desarrollo de la personalidad" (comprensible) y "proceso" (ruptura nueva e incomprensible, como en la esquizofrenia).',
      'Filosofía existencial de las "situaciones límite" (muerte, sufrimiento, lucha, culpa) frente a las cuales se despierta la existencia auténtica.'
    ],
    conceptosClave: [
      {
        termino: 'Explicar vs. Comprender',
        explicacion:
          'Explicamos fenómenos desde afuera buscando causas objetivas (como en la neurología); comprendemos desde adentro captando relaciones de sentido entre vivencias.'
      },
      {
        termino: 'Fenomenología psicopatológica',
        explicacion:
          'Presentificación fiel de los estados psíquicos que el paciente efectivamente experimenta (delirio primario, angustia, alucinación), evitando imponer prejuicios teóricos.'
      },
      {
        termino: 'Proceso vs. Desarrollo',
        explicacion:
          'El desarrollo evoluciona comprensiblemente desde la historia y personalidad previas; el proceso irrumpe marcando un quiebre incomprensible en la continuidad biográfica.'
      },
      {
        termino: 'Situaciones límite',
        explicacion:
          'Experiencias ineludibles (muerte, dolor, azar, culpa) que no podemos esquivar ni resolver técnicamente, revelando nuestra condición existencial.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicopatología General',
        año: '1913 (4ª ed. 1946)',
        resumen: 'Tratado clásico que fundó la psicopatología moderna y la metodología clínica fenomenológica.'
      },
      {
        titulo: 'Filosofía (3 volúmenes)',
        año: '1932',
        resumen: 'Desarrolla la clarificación de la existencia y el concepto de situaciones límite.'
      },
      {
        titulo: 'El problema de la culpa',
        año: '1946',
        resumen: 'Reflexión ética y política tras el nazismo sobre culpa criminal, política, moral y metafísica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Fenomenología descriptiva aplicada a las vivencias clínicas' },
      { nombre: 'Wilhelm Dilthey y Max Weber', nota: 'Distinción entre ciencias naturales (explicar) y del espíritu (comprender)' },
      { nombre: 'Søren Kierkegaard y Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Pensamiento existencial y situaciones límite' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Referente central en su tesis de 1932 y crítica de las "relaciones de comprensión"' },
      { nombre: 'Pablo Diego Muñoz', autorId: 'pablo-munoz', nota: 'Dilemas epistemológicos de la psicopatología y clínica fenomenológica' },
      { nombre: 'Psicopatología fenomenológica y existencial', nota: 'Rigor descriptivo frente al reduccionismo biomédico' }
    ]
  },
  {
    id: 'heidegger',
    nombre: 'Martin Heidegger',
    apellidoCorto: 'Heidegger',
    matchKeys: ['heidegger'],
    materiaIdsExtra: [
      'psico-fenomenologica-existencial',
      'problemas-filosoficos',
      'historia-psico',
      'psicoanalisis-francesa-1'
    ],
    fechas: '1889 – 1976',
    origen: 'Messkirch · Friburgo, Alemania',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo alemán autor de "Ser y Tiempo" (1927). Desplazó el foco de la conciencia aislada al Dasein ("ser-en-el-mundo"), la angustia, la temporalidad y el lenguaje como "casa del ser".',
    biografia:
      'Discípulo y sucesor de Edmund Husserl en la Universidad de Friburgo (marcado también por su controvertida adhesión inicial al nazismo en 1933), Martin Heidegger revolucionó la filosofía del siglo XX con "Ser y Tiempo" (1927), donde interrogó la pregunta olvidada por el sentido del ser a partir de la existencia humana: el Dasein.\n\nSu ruptura con el dualismo cartesiano sujeto/objeto —pensando al humano como "ser-en-el-mundo" atravesado por el tiempo, la finitud y el lenguaje— dio fundamento filosófico directo al Análisis Existencial de Binswanger, a la Logoterapia de Frankl, a Sartre, a Merleau-Ponty y a la enseñanza de Jacques Lacan (con quien mantuvo diálogo personal).',
    principalesAportes: [
      'Superación del dualismo sujeto/objeto mediante la analítica del Dasein ("ser-ahí") como "ser-en-el-mundo" siempre situado y abierto.',
      'Distinción entre miedo (ante un ente determinado) y angustia (disposición afectiva fundamental ante la nada y la propia libertad finita).',
      'Conceptualización de la existencia inauténtica (el "Uno" impersonal / das Man) frente a la existencia auténtica que asume su finitud ("ser-para-la-muerte").',
      'Giro tardío hacia el lenguaje ("el lenguaje es la casa del ser") y crítica profunda a la técnica moderna (Gestell) que reduce todo a mero recurso disponible.'
    ],
    conceptosClave: [
      {
        termino: 'Dasein (Ser-en-el-mundo)',
        explicacion:
          'Modo de ser propio del humano: no es una "cosa" fija ni una mente encapsulada, sino un ente abierto al mundo, a los otros (ser-con) y a sus posibilidades.'
      },
      {
        termino: 'Cura / Cuidado (Sorge)',
        explicacion:
          'Estructura unitaria del Dasein: estar arrojado en un mundo (facticidad), proyectándose hacia el futuro (existencialidad) entre las cosas cotidianas.'
      },
      {
        termino: 'Angustia vs. Miedo',
        explicacion:
          'El miedo tiene un objeto puntual amenazante; la angustia desarma la familiaridad cotidiana y enfrenta al Dasein con su libertad y finitud.'
      },
      {
        termino: 'El "Uno" (Das Man) y Autenticidad',
        explicacion:
          'En la cotidianidad vivimos diluidos en lo que "se dice" y "se hace"; asumir la propia finitud abre la posibilidad de una elección propia.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Ser y Tiempo',
        año: '1927',
        resumen: 'Obra cumbre de la filosofía contemporánea y base del análisis existencial.'
      },
      {
        titulo: 'Seminarios de Zollikon (con Medard Boss)',
        año: '1959–1969',
        resumen: 'Diálogos directos de Heidegger con psiquiatras y psicoterapeutas sobre cuerpo, tiempo y clínica.'
      },
      {
        titulo: 'Carta sobre el humanismo',
        año: '1947',
        resumen: 'Textos clave sobre el lenguaje como "casa del ser" y debate con Sartre.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Método fenomenológico que transforma en hermenéutica existencial' },
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Crítica a la metafísica occidental' },
      { nombre: 'Søren Kierkegaard', nota: 'Concepto existencial de angustia y singularidad' }
    ],
    influencioA: [
      { nombre: 'Ludwig Binswanger', autorId: 'binswanger', nota: 'Fundación del Daseinsanalyse en psicopatología' },
      { nombre: 'Jean-Paul Sartre', autorId: 'sartre', nota: 'Existencialismo francés y ontología de la libertad' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Palabra plena, verdad como aletheia y diálogo sobre el ser y el lenguaje' },
      { nombre: 'Viktor E. Frankl', autorId: 'frankl', nota: 'Antropología existencial en la logoterapia' }
    ]
  },
  {
    id: 'sartre',
    nombre: 'Jean-Paul Sartre',
    apellidoCorto: 'Sartre',
    matchKeys: ['sartre'],
    materiaIdsExtra: [
      'psico-fenomenologica-existencial',
      'problemas-filosoficos',
      'historia-psico',
      'etica-deontologia-ddhh'
    ],
    fechas: '1905 – 1980',
    origen: 'París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo, dramaturgo y escritor francés máximo exponente del existencialismo. Formuló la tesis "la existencia precede a la esencia", la mala fe, la mirada del otro y el psicoanálisis existencial.',
    biografia:
      'Figura intelectual emblemática del siglo XX francés junto a Simone de Beauvoir, Jean-Paul Sartre articuló la fenomenología alemana de Husserl y Heidegger con una filosofía radical de la libertad, la responsabilidad y el compromiso político.\n\nEn el campo psicológico escribió obras dedicadas a la imaginación, las emociones y el "psicoanálisis existencial" —criticando el determinismo mecanicista del inconsciente—, y su análisis de "la mirada del otro" y la "mala fe" dejó una marca profunda tanto en Jacques Lacan como en Oscar Masotta y en Psicología Fenomenológica y Existencial.',
    principalesAportes: [
      'Fórmula célebre del existencialismo: en el ser humano "la existencia precede a la esencia" —no nacemos con una naturaleza prefijada, nos construimos por nuestros actos.',
      'Análisis fenomenológico de la "mala fe" (autoengaño por el cual negamos nuestra libertad escudándonos en roles fijos o excusas deterministas).',
      'Estudio de "la mirada del otro" (el ser-para-otro): ser mirado me descubre como objeto ante otra conciencia y estructura la vergüenza y el conflicto intersubjetivo.',
      'Propuesta de un "psicoanálisis existencial" centrado en el proyecto fundamental y la elección originaria de cada sujeto.'
    ],
    conceptosClave: [
      {
        termino: 'La existencia precede a la esencia',
        explicacion:
          'Primero existimos arrojados en el mundo y luego nos definimos mediante nuestras decisiones: "estamos condenados a ser libres".'
      },
      {
        termino: 'En-sí vs. Para-sí',
        explicacion:
          'El ser-en-sí es lo macizo e idéntico a sí mismo (las cosas); el ser-para-sí es la conciencia humana, siempre abierta, incompleta y proyectada.'
      },
      {
        termino: 'Mala fe',
        explicacion:
          'Actitud de ocultarnos nuestra propia libertad fingiendo ser una "cosa" determinada por el pasado, el carácter o un papel social.'
      },
      {
        termino: 'La mirada del Otro',
        explicacion:
          'La irrupción del otro como sujeto que me mira transforma mi mundo y me devuelve una imagen exterior de mí que no controlo (clave en el Seminario 11 de Lacan).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El ser y la nada',
        año: '1943',
        resumen: 'Gran tratado ontológico sobre libertad, mala fe, mirada del otro y psicoanálisis existencial.'
      },
      {
        titulo: 'El existencialismo es un humanismo',
        año: '1946',
        resumen: 'Conferencia clásica y accesible sobre libertad, angustia y responsabilidad.'
      },
      {
        titulo: 'Bosquejo de una teoría de las emociones',
        año: '1939',
        resumen: 'Lectura fenomenológica de la emoción como transformación mágica del mundo vivido.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Intencionalidad y descripción fenomenológica' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Ontología existencial, nada y angustia' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Diálogo decisivo sobre la mirada del otro en el Seminario 11' },
      { nombre: 'Oscar Masotta', autorId: 'masotta', nota: 'Puerta filosófica de entrada al pensamiento contemporáneo en Argentina' },
      { nombre: 'Maurice Merleau-Ponty', autorId: 'merleau-ponty', nota: 'Interlocución filosófica y política en Les Temps Modernes' }
    ]
  },
  {
    id: 'merleau-ponty',
    nombre: 'Maurice Merleau-Ponty',
    apellidoCorto: 'Merleau-Ponty',
    matchKeys: ['merleau-ponty', 'merleau ponty', 'merleau'],
    materiaIdsExtra: [
      'historia-psico',
      'psico-fenomenologica-existencial',
      'problemas-filosoficos',
      'procesos-psico-basicos',
      'psico-desarrollo-niñez'
    ],
    fechas: '1908 – 1961',
    origen: 'Rochefort-sur-Mer · París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo francés referente de la fenomenología de la percepción y profesor de Psicología del Niño en la Sorbona. Puso al "cuerpo propio" (cuerpo vivido) en el centro de la percepción, criticando al conductismo y al dualismo.',
    biografia:
      'Profesor de Psicología del Niño y Pedagogía en la Sorbona —donde sucedió a Jean Piaget— y luego titular en el Collège de France, Maurice Merleau-Ponty fue el filósofo del siglo XX que dialogó más estrechamente con la psicología científica: la Gestalt, la neuropsicología (caso Schneider), Piaget, Wallon y el psicoanálisis.\n\nSu obra maestra "Fenomenología de la percepción" (1945) superó el viejo dilema entre empirismo/conductismo (cuerpo como máquina de reflejos) e intelectualismo (mente desencarnada), mostrando que percibimos y pensamos desde un cuerpo vivido situado en el mundo.',
    principalesAportes: [
      'Superación del dualismo mente–cuerpo: no "tenemos" un cuerpo-objeto como una máquina, sino que "somos" nuestro cuerpo propio (cuerpo vivido).',
      'Crítica rigurosa al conductismo mecanicista y al arco reflejo en "La estructura del comportamiento", apoyándose en la Psicología de la Gestalt.',
      'Reinterpretación filosófica de la percepción como experiencia corporal, ambigua y situada, anterior a la reflexión intelectual pura.',
      'Concepto tardío de "la carne" y del "quiasmo" (entrelazamiento entre vidente y visible), influencia directa en el Seminario 11 de Jacques Lacan.'
    ],
    conceptosClave: [
      {
        termino: 'Cuerpo propio (Cuerpo vivido)',
        explicacion:
          'El cuerpo no es un objeto físico más entre otros, sino el punto de vista encarnado e intencional a través del cual tenemos un mundo.'
      },
      {
        termino: 'Primacía de la percepción',
        explicacion:
          'Antes de juzgar o calcular intelectualmente, habitamos el mundo de modo perceptivo y motor; toda ciencia se apoya sobre ese suelo vivido.'
      },
      {
        termino: 'Crítica al empirismo e intelectualismo',
        explicacion:
          'Ambos reducen el mundo a objetos cerrados: el empirismo ignora el sentido vivido; el intelectualismo olvida el cuerpo y la ambigüedad perceptiva.'
      },
      {
        termino: 'Carne y Quiasmo (Lo visible y lo invisible)',
        explicacion:
          'Tejido común que entrelaza al cuerpo sintiente y al mundo sensible (como una mano que toca y a la vez es tocada); diálogo clave con Lacan.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Fenomenología de la percepción',
        año: '1945',
        resumen: 'Obra cumbre sobre cuerpo propio, percepción, esquema corporal, lenguaje y libertad.'
      },
      {
        titulo: 'La estructura del comportamiento',
        año: '1942',
        resumen: 'Crítica filosófica y psicológica al conductismo y diálogo con la Gestalt y Pavlov.'
      },
      {
        titulo: 'Lo visible y lo invisible',
        año: '1964 (póstumo)',
        resumen: 'Desarrolla la ontología de la carne y la reversibilidad de la mirada.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Fenomenología y concepto de Lebenswelt' },
      { nombre: 'Psicología de la Gestalt y Kurt Goldstein', nota: 'Percepción estructurada y neuropsicología del organismo' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Ser-en-el-mundo y crítica al dualismo cartesiano' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Amigo personal e influencia decisiva sobre la mirada en el Seminario 11' },
      { nombre: 'Ciencias cognitivas corporizadas (Varela / Enactivismo)', nota: 'Cognición encarnada (embodied cognition) contemporánea' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Asistió a sus clases en París y debatió con su fenomenología' }
    ]
  },
  {
    id: 'agamben',
    nombre: 'Giorgio Agamben',
    apellidoCorto: 'Agamben',
    matchKeys: ['agamben'],
    materiaIdsExtra: [
      'problemas-filosoficos',
      'etica-deontologia-ddhh',
      'psico-politica-2',
      'salud-publica-mental',
      'psico-juridica'
    ],
    fechas: '1942 – presente',
    origen: 'Roma · Venecia, Italia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo italiano contemporáneo continuador de la biopolítica de Foucault. Autor de la saga "Homo Sacer", analizó la nuda vida, el estado de excepción y los dispositivos de poder actuales.',
    biografia:
      'Formado en derecho y filosofía en Roma (asistió a los seminarios de Martin Heidegger en Le Thor y editó la obra de Walter Benjamin en italiano), Giorgio Agamben se convirtió en uno de los pensadores políticos y filosóficos más influyentes de las últimas décadas.\n\nRetomando y radicalizando la noción foucaultiana de biopolítica, investigó cómo el poder soberano decide qué vidas cuentan con derechos políticos (bíos) y cuáles quedan reducidas a mera existencia biológica vulnerable ("nuda vida"). Sus textos son lectura clave en Ética y DD.HH., Psicología Política, Salud Mental y Problemas Filosóficos.',
    principalesAportes: [
      'Diferenciación entre "zoé" (simple hecho biológico de vivir) y "bíos" (forma de vida políticamente cualificada) y concepto de "nuda vida".',
      'Análisis del "estado de excepción" convertido en paradigma permanente de gobierno en la política contemporánea.',
      'Relectura influyente de "¿Qué es un dispositivo?" (en diálogo con Foucault): redes que capturan, gobiernan y producen —o vacían— subjetividades.',
      'Reflexiones sobre el testimonio y el sujeto frente a las catástrofes históricas en "Lo que queda de Auschwitz".'
    ],
    conceptosClave: [
      {
        termino: 'Homo Sacer y Nuda vida',
        explicacion:
          'Figura del derecho romano que designa a quien queda despojado de protección jurídica y política, reducido a mera vida biológica expuesta a la violencia.'
      },
      {
        termino: 'Estado de excepción',
        explicacion:
          'Zona de umbral en la que el propio derecho suspende las garantías legales en nombre de la emergencia, tendiendo a normalizarse.'
      },
      {
        termino: 'Dispositivo y Profanación',
        explicacion:
          'Todo aparato (leyes, instituciones, teléfonos, diagnósticos) capaz de orientar gestos y deseos; "profanar" implica restituirlos al uso libre y común.'
      },
      {
        termino: 'Desubjetivación',
        explicacion:
          'Efecto de los dispositivos contemporáneos que, lejos de construir un sujeto autónomo, producen identidades vacías, dóciles o meramente consumistas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Homo Sacer: El poder soberano y la nuda vida',
        año: '1995',
        resumen: 'Obra emblemática sobre biopolítica, soberanía y vulnerabilidad jurídica.'
      },
      {
        titulo: 'Estado de excepción',
        año: '2003',
        resumen: 'Analiza la suspensión legal y sus efectos sobre la democracia y los derechos humanos.'
      },
      {
        titulo: '¿Qué es un dispositivo?',
        año: '2006',
        resumen: 'Ensayo breve y muy usado en la UBA sobre dispositivos y procesos de subjetivación.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Biopolítica y noción de dispositivo' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Participó en sus seminarios en Le Thor sobre lenguaje y ser' },
      { nombre: 'Walter Benjamin y Hannah Arendt', nota: 'Crítica de la violencia, testimonio y totalitarismo' }
    ],
    influencioA: [
      { nombre: 'Ética, Derechos Humanos y Psicología Política contemporánea', nota: 'Debates sobre biopolítica, encierro y vulnerabilidad subjetiva' }
    ]
  },
  {
    id: 'byung-chul-han',
    nombre: 'Byung-Chul Han',
    apellidoCorto: 'Byung-Chul Han',
    matchKeys: ['byung-chul han', 'byung chul han', 'han, b'],
    materiaIdsExtra: [
      'problemas-filosoficos',
      'psico-trabajo-prof',
      'salud-publica-mental',
      'psico-social',
      'psico-politica-2'
    ],
    fechas: '1959 – presente',
    origen: 'Seúl, Corea del Sur · Friburgo / Berlín, Alemania',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo surcoreano radicado en Alemania, autor de "La sociedad del cansancio". Analizó el paso de la sociedad disciplinaria de Foucault a la sociedad del rendimiento, la autoexplotación y la depresión contemporánea.',
    biografia:
      'Nacido en Seúl y formado en filosofía, literatura alemana y teología en Friburgo y Múnich (donde se doctoró con una tesis sobre Martin Heidegger), Byung-Chul Han se volvió uno de los ensayistas filosóficos más leídos del siglo XXI por su diagnóstico incisivo del malestar subjetivo neoliberal y digital.\n\nSu hipótesis central dialoga directamente con Michel Foucault: ya no habitamos principalmente una sociedad disciplinaria del "no debes", sino una sociedad del rendimiento del "¡sí, puedes!" donde el sujeto se explota voluntariamente a sí mismo hasta el burnout y la depresión.',
    principalesAportes: [
      'Diagnóstico del pasaje de la sociedad disciplinaria (Foucault) a la "sociedad del rendimiento", regida por la positividad excesiva y la hiperactividad.',
      'Concepto de "autoexplotación" y "psicopolítica": el poder neoliberal ya no reprime cuerpos desde afuera, sino que seduce y optimiza la psique desde adentro.',
      'Lectura filosófica de las patologías neuronales del siglo XXI (depresión, burnout, déficit de atención) como fracaso de un yo sobrecargado de exigencia.',
      'Crítica a la hipertransparencia digital, la pérdida de la alteridad ("agonía del Eros") y la desaparición de los rituales y del tiempo contemplativo.'
    ],
    conceptosClave: [
      {
        termino: 'Sociedad del rendimiento',
        explicacion:
          'Reemplaza al sujeto obediente por el "empresario de sí mismo": el imperativo de rendimiento ilimitado ("Yes, we can") vuelve la libertad en coacción interna.'
      },
      {
        termino: 'Autoexplotación y Burnout',
        explicacion:
          'El sujeto se convierte en verdugo y víctima a la vez; cuando no alcanza sus propias metas, la agresividad se vuelve contra sí mismo en forma de depresión y agotamiento.'
      },
      {
        termino: 'Psicopolítica',
        explicacion:
          'Técnica de poder digital y neoliberal (big data, redes, autooptimización) que interviene sobre deseos, emociones y atención más que sobre el encierro físico.'
      },
      {
        termino: 'Agonía del Eros y Desaparición de lo Otro',
        explicacion:
          'El narcisismo y los algoritmos nos rodean de "lo igual", debilitando el encuentro con la alteridad real que vuelve posible el deseo y el amor.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La sociedad del cansancio',
        año: '2010',
        resumen: 'Su ensayo más célebre sobre sociedad del rendimiento, autoexplotación, depresión y burnout.'
      },
      {
        titulo: 'Psicopolítica: neoliberalismo y nuevas técnicas de poder',
        año: '2014',
        resumen: 'Actualiza el análisis foucaultiano del poder en la era del big data y el capital emocional.'
      },
      {
        titulo: 'La agonía del Eros',
        año: '2012',
        resumen: 'Explora la crisis del deseo, el narcisismo y la expulsión de la alteridad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Punto de partida (sociedad disciplinaria y biopolítica) que actualiza hacia la psicopolítica' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Tesis doctoral sobre el tiempo, el tedio profundo y la técnica' },
      { nombre: 'Giorgio Agamben', autorId: 'agamben', nota: 'Debate sobre nuda vida, estado de excepción y profanación' }
    ],
    influencioA: [
      { nombre: 'Debates contemporáneos en Salud Mental y Psicología del Trabajo', nota: 'Lectura crítica del burnout, precariedad y subjetividad digital' }
    ]
  }
];
