import type { AutorProfile } from './autores';

export const AUTORES_TANDA_3: AutorProfile[] = [
  // ======================== SISTÉMICA Y HUMANISTA ========================
  {
    id: 'bateson',
    nombre: 'Gregory Bateson',
    apellidoCorto: 'Bateson',
    matchKeys: ['bateson'],
    materiaIdsExtra: [
      'clinica-sistemica',
      'clinica-sistemica-familia-pareja-entrenamiento',
      'psico-clinica-psicoterapias-2',
      'problemas-antropologicos',
      'psico-social'
    ],
    fechas: '1904 – 1980',
    origen: 'Grantchester, Reino Unido · Palo Alto / California, Estados Unidos',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Antropólogo, biólogo y epistemólogo británico, padre intelectual del enfoque sistémico y del grupo de Palo Alto. Formuló la teoría del doble vínculo, la cismogénesis y la ecología de la mente.',
    biografia:
      'Formado en biología y antropología en Cambridge (realizó trabajo de campo en Nueva Guinea y Bali junto a Margaret Mead), Gregory Bateson trasladó los conceptos de la cibernética y la teoría general de los sistemas al estudio de la comunicación humana, la familia y la salud mental.\n\nEn la década de 1950 lideró en Palo Alto el proyecto de investigación sobre comunicación y esquizofrenia junto a Don Jackson, Jay Haley y John Weakland, sentando las bases epistemológicas de toda la terapia familiar sistémica contemporánea.',
    principalesAportes: [
      'Introducción de la epistemología cibernética y sistémica en psicología: pensar en términos de pautas relacionales, retroalimentación y contexto.',
      'Formulación de la teoría del "doble vínculo" (1956) sobre mensajes contradictorios en distintos niveles lógicos de comunicación.',
      'Concepto de "cismogénesis" simétrica y complementaria para explicar escaladas relacionales en individuos, familias y culturas.',
      'Teoría de los niveles de aprendizaje (Aprendizaje 0, I, II o deuteroaprendizaje y III) y "ecología de la mente".'
    ],
    conceptosClave: [
      {
        termino: 'Doble vínculo',
        explicacion:
          'Patrón comunicacional paradójico en una relación vital donde un mandato verbal contradice al mensaje metacomunicativo y el sujeto no puede salir del campo ni señalar la contradicción.'
      },
      {
        termino: 'Cismogénesis (simétrica y complementaria)',
        explicacion:
          'Dinámica de diferenciación progresiva en los vínculos: simétrica (competencia de conductas iguales) o complementaria (conductas opuestas que se refuerzan, como dominio/sumisión).'
      },
      {
        termino: 'Ecología de la mente',
        explicacion:
          'La mente no está encerrada dentro del cráneo individual, sino distribuida en circuitos de información entre organismo, vínculos y entorno.'
      },
      {
        termino: 'El mapa no es el territorio',
        explicacion:
          'Principio epistemológico (retomado de Korzybski): nunca accedemos a la realidad "en crudo", sino a diferencias y mapas construidos por el observador.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Pasos hacia una ecología de la mente',
        año: '1972',
        resumen: 'Compilación fundamental sobre doble vínculo, cibernética, aprendizaje y epistemología sistémica.'
      },
      {
        titulo: 'Espíritu y naturaleza',
        año: '1979',
        resumen: 'Síntesis accesible sobre la "pauta que conecta" los sistemas vivos y mentales.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Norbert Wiener y Ludwig von Bertalanffy', nota: 'Cibernética y Teoría General de los Sistemas' },
      { nombre: 'Bertrand Russell', nota: 'Teoría de los tipos lógicos aplicada a la comunicación' }
    ],
    influencioA: [
      { nombre: 'Paul Watzlawick', autorId: 'watzlawick', nota: 'Axiomas de la comunicación humana y Escuela de Palo Alto' },
      { nombre: 'Mara Selvini Palazzoli', autorId: 'selvini-palazzoli', nota: 'Epistemología sistémica de la Escuela de Milán' },
      { nombre: 'Salvador Minuchin', autorId: 'minuchin', nota: 'Enfoque sistémico de la terapia familiar' }
    ]
  },
  {
    id: 'minuchin',
    nombre: 'Salvador Minuchin',
    apellidoCorto: 'Minuchin',
    matchKeys: ['minuchin'],
    materiaIdsExtra: [
      'clinica-sistemica',
      'clinica-sistemica-familia-pareja-entrenamiento',
      'psico-clinica-psicoterapias-2'
    ],
    fechas: '1921 – 2017',
    origen: 'San Salvador (Entre Ríos), Argentina · Filadelfia / Estados Unidos',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Médico psiquiatra argentino creador de la Terapia Familiar Estructural. Sistematizó el diagnóstico y la intervención sobre subsistemas familiares, jerarquías, límites y triangulaciones.',
    biografia:
      'Nacido en Entre Ríos y graduado en medicina en la Universidad Nacional de Córdoba, Salvador Minuchin se formó en pediatría y psiquiatría infantil en Estados Unidos, donde dirigió la Philadelphia Child Guidance Clinic. Trabajando inicialmente con familias de bajos recursos y jóvenes institucionalizados, creó el modelo de Terapia Familiar Estructural.\n\nA diferencia de los enfoques centrados solo en el pasado intrapsíquico, Minuchin propuso intervenir activamente en el presente modificando la organización relacional de la familia, convirtiéndose en uno de los pilares de Clínica Sistémica en la UBA.',
    principalesAportes: [
      'Creación de la Terapia Familiar Estructural: el síntoma de un "paciente identificado" expresa una disfunción en la estructura familiar.',
      'Mapa estructural de la familia basado en subsistemas (conyugal, parental, fraterno), jerarquías, alianzas, coaliciones y triangulación.',
      'Tipología de límites (claros, difusos o rígidos) y de familias aglutinadas vs. desligadas.',
      'Técnicas clínicas activas: coparticipación (joining), escenificación (enactment), desequilibramiento y reencuadre.'
    ],
    conceptosClave: [
      {
        termino: 'Límites (claros, difusos, rígidos)',
        explicacion:
          'Reglas que definen quién participa y de qué manera en cada subsistema; límites difusos generan aglutinamiento y límites rígidos generan desligamiento.'
      },
      {
        termino: 'Subsistemas familiares',
        explicacion:
          'Unidades diferenciadas dentro de la familia (conyugal, parental, fraterno) que requieren fronteras claras para cumplir sus funciones.'
      },
      {
        termino: 'Triangulación',
        explicacion:
          'Desvío de un conflicto entre dos miembros (por ejemplo, la pareja parental) involucrando a un tercero (frecuentemente un hijo).'
      },
      {
        termino: 'Coparticipación y Escenificación',
        explicacion:
          'El terapeuta se une empáticamente al sistema familiar (coparticipación) y promueve que la familia actúe sus pautas en sesión para transformarlas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Familias y terapia familiar',
        año: '1974',
        resumen: 'Texto clásico y obligatorio de clínica sistémica sobre estructura familiar, límites y subsistemas.'
      },
      {
        titulo: 'Técnicas de terapia familiar (con H. Charles Fishman)',
        año: '1981',
        resumen: 'Manual práctico de intervenciones estructurales paso a paso.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gregory Bateson', autorId: 'bateson', nota: 'Pensamiento sistémico y contexto relacional' },
      { nombre: 'Nathan Ackerman y Jay Haley', nota: 'Pioneros de la terapia familiar e intervenciones estratégicas' }
    ],
    influencioA: [
      { nombre: 'Terapia Familiar Sistémica contemporánea', nota: 'Intervenciones estructurales en familias, niñez y trastornos alimentarios' }
    ]
  },
  {
    id: 'selvini-palazzoli',
    nombre: 'Mara Selvini Palazzoli',
    apellidoCorto: 'Selvini Palazzoli',
    matchKeys: ['selvini', 'palazzoli'],
    materiaIdsExtra: [
      'clinica-sistemica',
      'clinica-sistemica-familia-pareja-entrenamiento',
      'clinica-anorexias-bulimias'
    ],
    fechas: '1916 – 1999',
    origen: 'Milán, Italia',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Psiquiatra italiana fundadora de la Escuela de Milán de terapia familiar sistémica. Introdujo el trabajo en equipo con cámara Gesell, el interrogatorio circular, la connotación positiva y las contraparadojas.',
    biografia:
      'Médica y psiquiatra formada inicialmente en psicoanálisis y dedicada durante años a pacientes con anorexia nerviosa severa, Mara Selvini Palazzoli dio un giro radical a fines de los años 60 al incorporar el enfoque sistémico de Palo Alto. Junto a Luigi Boscolo, Gianfranco Cecchin y Giuliana Prata fundó el célebre Grupo de Milán.\n\nSu equipo revolucionó la entrevista sistémica mediante tres directrices —hipotetización, circularidad y neutralidad— y diseñó intervenciones paradójicas de enorme influencia en Clínica Sistémica y en el abordaje familiar de cuadros graves.',
    principalesAportes: [
      'Formulación de los tres principios de la entrevista sistémica de Milán: hipotetización, circularidad y neutralidad.',
      'Creación de la "connotación positiva" (resignificar el síntoma y las conductas de todos los miembros como intentos de preservar la cohesión del sistema).',
      'Uso del equipo terapéutico detrás del espejo unidireccional y de rituales familiares y prescripciones invariables.',
      'Investigación clínica pionera sobre los juegos familiares en la anorexia y las psicosis.'
    ],
    conceptosClave: [
      {
        termino: 'Hipotetización, Circularidad y Neutralidad',
        explicacion:
          'Brújula de la sesión en la Escuela de Milán: construir hipótesis relacionales provisorias, indagar diferencias mediante preguntas circulares y evitar alianzas parciales.'
      },
      {
        termino: 'Preguntas circulares',
        explicacion:
          'Interrogatorio que pide a un miembro describir cómo percibe la relación entre otros dos ("¿quién se preocupa más cuando...?") para hacer visible la red relacional.'
      },
      {
        termino: 'Connotación positiva',
        explicacion:
          'Reencuadre que valida la intención protectora de todos los integrantes (sin culpabilizar) para bajar resistencias y habilitar el cambio.'
      },
      {
        termino: 'Contraparadoja',
        explicacion:
          'Intervención que desarma un juego familiar paradójico prescribiendo el síntoma dentro de un marco nuevo que vuelve innecesaria su repetición.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Paradoja y contraparadoja (con Boscolo, Cecchin y Prata)',
        año: '1975',
        resumen: 'Obra emblemática de la Escuela de Milán sobre terapia familiar en sistemas rígidos.'
      },
      {
        titulo: 'Los juegos psicóticos en la familia',
        año: '1988',
        resumen: 'Estudia las coaliciones y dinámicas relacionales en anorexia y psicosis.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gregory Bateson', autorId: 'bateson', nota: 'Epistemología sistémica y concepto de paradoja' },
      { nombre: 'Paul Watzlawick', autorId: 'watzlawick', nota: 'Pragmática de la comunicación humana y MRI de Palo Alto' }
    ],
    influencioA: [
      { nombre: 'Luigi Boscolo y Gianfranco Cecchin', nota: 'Enfoque sistémico pos-Milán y cibernética de segundo orden' },
      { nombre: 'Clínica Sistémica en Argentina', nota: 'Entrevista circular y trabajo con equipo reflexivo' }
    ]
  },
  {
    id: 'rogers',
    nombre: 'Carl R. Rogers',
    apellidoCorto: 'Rogers',
    matchKeys: ['rogers'],
    materiaIdsExtra: [
      'psico-clinica-psicoterapias-2',
      'psico-fenomenologica-existencial',
      'historia-psico',
      'psico-personalidad'
    ],
    fechas: '1902 – 1987',
    origen: 'Oak Park (Illinois) · La Jolla, Estados Unidos',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Psicólogo estadounidense referente de la Psicología Humanista ("tercera fuerza") y creador de la Terapia Centrada en la Persona. Postuló la tendencia actualizante y las tres actitudes terapéuticas clave.',
    biografia:
      'Junto a Abraham Maslow, Carl Ransom Rogers lideró en los años 50 y 60 la Psicología Humanista como "tercera fuerza" frente al determinismo psicoanalítico y al conductismo clásico. También fue pionero en grabar y estudiar empíricamente sesiones de psicoterapia para investigar qué hace realmente efectivo un proceso terapéutico.\n\nSu Terapia Centrada en el Cliente (luego Centrada en la Persona) desplazó al terapeuta del lugar de experto directivo para centrarse en la calidad del vínculo humano como motor de cambio, influyendo transversalmente en todas las psicoterapias contemporáneas.',
    principalesAportes: [
      'Creación de la Terapia Centrada en la Persona y del enfoque no directivo en psicoterapia y educación.',
      'Identificación de las tres condiciones necesarias y suficientes del cambio terapéutico: empatía, congruencia y aceptación positiva incondicional.',
      'Postulación de la "tendencia actualizante" como impulso organísmico hacia el crecimiento, la autonomía y la autorrealización.',
      'Investigación empírica pionera sobre el proceso psicoterapéutico y la alianza terapéutica.'
    ],
    conceptosClave: [
      {
        termino: 'Tendencia actualizante',
        explicacion:
          'Fuerza constructiva inherente a todo ser humano orientada a desarrollar sus potencialidades cuando cuenta con un clima relacional favorable.'
      },
      {
        termino: 'Congruencia (Autenticidad)',
        explicacion:
          'Coherencia transparente entre lo que el terapeuta vivencia internamente, lo que registra en su conciencia y lo que comunica.'
      },
      {
        termino: 'Aceptación positiva incondicional',
        explicacion:
          'Acogida respetuosa y libre de juicios hacia la persona y su experiencia, sin exigir condiciones previas para valorarla.'
      },
      {
        termino: 'Comprensión empática',
        explicacion:
          'Capacidad de captar el marco de referencia interno del otro "como si" uno fuera esa persona, sin perder nunca la cualidad del "como si".'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El proceso de convertirse en persona',
        año: '1961',
        resumen: 'Su libro más influyente sobre relación terapéutica, crecimiento personal y aprendizaje significativo.'
      },
      {
        titulo: 'Psicoterapia centrada en el cliente',
        año: '1951',
        resumen: 'Exposición sistemática de la teoría de la personalidad y el dispositivo clínico rogeriano.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Otto Rank y John Dewey', nota: 'Enfoque centrado en la experiencia presente y educación democrática' },
      { nombre: 'Fenomenología y Existencialismo', nota: 'Prioridad del mundo subjetivo percibido por la persona' }
    ],
    influencioA: [
      { nombre: 'Investigación en factores comunes de psicoterapia', nota: 'Centralidad de la alianza terapéutica y la empatía en toda clínica' },
      { nombre: 'Entrevista Motivacional (Miller y Rollnick)', nota: 'Estilo colaborativo y escucha reflexiva' }
    ]
  },
  {
    id: 'frankl',
    nombre: 'Viktor E. Frankl',
    apellidoCorto: 'Frankl',
    matchKeys: ['frankl'],
    materiaIdsExtra: [
      'psico-fenomenologica-existencial',
      'psico-clinica-psicoterapias-2',
      'abordaje-cuidados-paliativos'
    ],
    fechas: '1905 – 1997',
    origen: 'Viena, Austria',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Médico neurólogo y psiquiatra austríaco fundador de la Logoterapia y el Análisis Existencial ("Tercera Escuela Vienesa de Psicoterapia"). Planteó la voluntad de sentido y la libertad interior frente al sufrimiento.',
    biografia:
      'Formado en Viena en diálogo crítico con Sigmund Freud y Alfred Adler, Viktor Emil Frankl sobrevivió entre 1942 y 1945 a cuatro campos de concentración nazis (entre ellos Auschwitz y Dachau), donde perdió a casi toda su familia. De esa experiencia extrema nació su célebre testimonio y ensayo "El hombre en busca de sentido".\n\nSu Logoterapia —estudiada en Psicología Fenomenológica y Existencial y en cuidados paliativos— concibe al ser humano como una unidad bio-psico-espiritual capaz de asumir una postura libre y responsable incluso ante condiciones límite.',
    principalesAportes: [
      'Fundación de la Logoterapia (terapia a través del sentido), centrada en la "voluntad de sentido" frente a la voluntad de placer (Freud) o de poder (Adler).',
      'Descripción del "vacío existencial" y de las "neurosis noógenas" ligadas a la pérdida de propósito y valores.',
      'Desarrollo de técnicas clínicas originales como la "intención paradójica" y la "derreflexión" para fobias, obsesiones e insomnio.',
      'Tres vías para hallar sentido: valores de creación (lo que damos), de experiencia (lo que recibimos/amamos) y de actitud (postura ante el sufrimiento inevitable).'
    ],
    conceptosClave: [
      {
        termino: 'Voluntad de sentido',
        explicacion:
          'Motivación primaria del ser humano orientada a descubrir un propósito concreto y trascendente que dé dirección a su existencia.'
      },
      {
        termino: 'Vacío existencial',
        explicacion:
          'Sensación contemporánea de tedio, apatía y falta de significado que puede derivar en conformismo, adicciones o depresión noógena.'
      },
      {
        termino: 'Intención paradójica',
        explicacion:
          'Técnica que invita al paciente a desear con humor aquello mismo que teme (como sudar o temblar) para cortar el círculo de la ansiedad anticipatoria.'
      },
      {
        termino: 'Autodistanciamiento y Autotrascendencia',
        explicacion:
          'Capacidades específicamente humanas de tomar distancia frente a los propios síntomas y abrirse hacia alguien o algo más allá de uno mismo.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El hombre en busca de sentido',
        año: '1946',
        resumen: 'Relato de su experiencia en los campos y presentación de los fundamentos de la Logoterapia.'
      },
      {
        titulo: 'Psicoanálisis y existencialismo',
        año: '1946',
        resumen: 'Desarrolla la antropología existencial y las técnicas logoterapéuticas.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Psicoanálisis vienés del cual se diferencia incorporando la dimensión noológica' },
      { nombre: 'Alfred Adler', autorId: 'adler', nota: 'Segunda Escuela Vienesa (Psicología Individual), con quien se formó en su juventud' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Fenomenología y filosofía de la existencia (junto a Max Scheler)' }
    ],
    influencioA: [
      { nombre: 'Psicoterapia Existencial y Cuidados Paliativos', nota: 'Acompañamiento clínico en crisis vitales y final de la vida' },
      { nombre: 'Paul Watzlawick', autorId: 'watzlawick', nota: 'Diálogo técnico en torno a las intervenciones paradójicas' }
    ]
  },
  {
    id: 'binswanger',
    nombre: 'Ludwig Binswanger',
    apellidoCorto: 'Binswanger',
    matchKeys: ['binswanger'],
    materiaIdsExtra: ['psico-fenomenologica-existencial', 'psicopatologia', 'historia-psico'],
    fechas: '1881 – 1966',
    origen: 'Kreuzlingen, Suiza',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Psiquiatra suizo fundador del Análisis Existencial (Daseinsanalyse). Integró la fenomenología de Husserl y la analítica existencial de Heidegger en la psicopatología y la comprensión clínica.',
    biografia:
      'Director durante casi medio siglo del célebre sanatorio Bellevue en Suiza y amigo cercano —a la vez que interlocutor crítico— de Sigmund Freud durante más de treinta años, Ludwig Binswanger inauguró la psiquiatría fenomenológico-existencial.\n\nEn Psicología Fenomenológica y Existencial de la UBA es un autor troncal para comprender cómo el padecimiento psíquico (melancolía, manía, esquizofrenia) no es un mero "déficit biológico" aislado, sino una transformación singular del modo de "ser-en-el-mundo" (tiempo, espacio, corporalidad y encuentro con los otros).',
    principalesAportes: [
      'Creación del Daseinsanalyse (Análisis Existencial) como método fenomenológico para describir los mundos vividos en la psicopatología.',
      'Relectura crítica de la psicopatología clásica: el delirio o la melancolía revelan una estructuración particular de la temporalidad y la espacialidad.',
      'Ampliación de la analítica de Heidegger incorporando el "ser-más-allá-del-mundo" en el amor y el encuentro dual (Nosotros).',
      'Célebres historiales clínico-existenciales (como el caso Ellen West) que muestran el rigor descriptivo de la mirada fenomenológica.'
    ],
    conceptosClave: [
      {
        termino: 'Daseinsanalyse (Análisis Existencial)',
        explicacion:
          'Investigación empírico-fenomenológica de las formas concretas en que una persona existe y despliega su proyecto de mundo.'
      },
      {
        termino: 'Ser-en-el-mundo (In-der-Welt-sein)',
        explicacion:
          'Supera la escisión sujeto/objeto: no hay un psiquismo aislado del mundo, sino una unidad estructural entre existencia y horizonte de sentido.'
      },
      {
        termino: 'Tres mundos de la existencia',
        explicacion:
          'Umwelt (mundo biológico/natural), Mitwelt (mundo compartido con los semejantes) y Eigenwelt (mundo propio y relación consigo mismo).'
      },
      {
        termino: 'Temporalidad y Espacialidad vividas',
        explicacion:
          'Ejes fenomenológicos clave en clínica (ej.: estancamiento del futuro en la melancolía o fuga acelerada en la manía).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Artículos y conferencias escogidas',
        año: '1947–1955',
        resumen: 'Reúne sus textos centrales sobre fenomenología, psiquiatría y diálogo con Freud.'
      },
      {
        titulo: 'Tres formas de la existencia frustrada',
        año: '1956',
        resumen: 'Análisis existencial de la extravagancia, la afectación y el manierismo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Método fenomenológico y descripción de la experiencia vivida' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Analítica existencial del Dasein y ser-en-el-mundo' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Vínculo personal y debate epistemológico sobre el sujeto' }
    ],
    influencioA: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Foucault tradujo e introdujo "Sueño y existencia" en 1954' },
      { nombre: 'Pablo Diego Muñoz', autorId: 'pablo-munoz', nota: 'Enseñanza de Psicología Fenomenológica y Existencial en la UBA' },
      { nombre: 'Medard Boss y Rollo May', nota: 'Psicoterapia existencial en Europa y Estados Unidos' }
    ]
  },

  // ======================== TCC Y NEUROCIENCIAS ========================
  {
    id: 'pavlov',
    nombre: 'Ivan P. Pavlov',
    apellidoCorto: 'Pavlov',
    matchKeys: ['pavlov'],
    materiaIdsExtra: [
      'historia-psico',
      'psico-aprendizaje',
      'neuro-fisiologia',
      'analisis-modificacion-conducta',
      'cbc-psico'
    ],
    fechas: '1849 – 1936',
    origen: 'Riazán · San Petersburgo / Leningrado, Rusia',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Fisiólogo ruso, Premio Nobel de Medicina (1904), descubridor del condicionamiento clásico (reflejo condicionado). Sus leyes de asociación, extinción y generalización fundaron la primera ola conductual.',
    biografia:
      'Mientras estudiaba la fisiología digestiva en perros —investigación que le valió el Premio Nobel en 1904—, Ivan Petróvich Pavlov observó las "secreciones psíquicas": los animales comenzaban a salivar antes de recibir comida, con solo oír los pasos del asistente o el sonido de un metrónomo.\n\nAl investigar experimentalmente este fenómeno descubrió el condicionamiento clásico (o respondiente), que John B. Watson adoptó para fundar el conductismo y que hoy sigue siendo la base científica de las técnicas de exposición y desensibilización en terapia cognitivo-conductual.',
    principalesAportes: [
      'Descubrimiento y formalización experimental del condicionamiento clásico (estímulo incondicionado, estímulo neutro/condicionado y respuesta condicionada).',
      'Descripción de los fenómenos de adquisición, extinción, recuperación espontánea, generalización y discriminación de estímulos.',
      'Estudio experimental de las "neurosis experimentales" ante discriminaciones conflictivas y del "segundo sistema de señales" (el lenguaje).',
      'Cimiento neurobiológico y experimental de la primera generación de terapias conductuales.'
    ],
    conceptosClave: [
      {
        termino: 'Condicionamiento clásico',
        explicacion:
          'Aprendizaje asociativo en el que un estímulo inicialmente neutro (EC) adquiere la capacidad de evocar una respuesta (RC) tras emparejarse con un estímulo incondicionado (EI).'
      },
      {
        termino: 'Extinción y Recuperación espontánea',
        explicacion:
          'Presentar repetidamente el estímulo condicionado sin el incondicionado debilita la respuesta (inhibición nueva, no borrado total); la respuesta puede reaparecer tras un descanso.'
      },
      {
        termino: 'Generalización y Discriminación',
        explicacion:
          'Tendencia a responder ante estímulos similares al condicionado (generalización) frente a la capacidad de diferenciar cuál anticipa realmente el evento (discriminación).'
      },
      {
        termino: 'Segundo sistema de señales',
        explicacion:
          'En los humanos, las palabras funcionan como "señales de señales" que permiten formas complejas de condicionamiento y regulación cortical.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Los reflejos condicionados',
        año: '1927',
        resumen: 'Exposición clásica de sus conferencias sobre la actividad nerviosa superior.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ivan Sechenov', nota: 'Fisiología reflexológica rusa del cerebro' }
    ],
    influencioA: [
      { nombre: 'John B. Watson', autorId: 'watson', nota: 'Base experimental del Conductismo clásico (condicionamiento emocional)' },
      { nombre: 'B. F. Skinner', autorId: 'skinner', nota: 'Diferenciación entre condicionamiento respondiente y operante' },
      { nombre: 'Alexander R. Luria', autorId: 'luria', nota: 'Fisiología de la actividad nerviosa superior' },
      { nombre: 'Joseph Wolpe y Terapia de Exposición', nota: 'Modelos de extinción del miedo y fobias en TCC' }
    ]
  },
  {
    id: 'bandura',
    nombre: 'Albert Bandura',
    apellidoCorto: 'Bandura',
    matchKeys: ['bandura'],
    materiaIdsExtra: [
      'psico-aprendizaje',
      'psico-social',
      'clinica-cognitivo-comportamental',
      'psico-personalidad',
      'psico-clinica-psicoterapias-2'
    ],
    fechas: '1925 – 2021',
    origen: 'Mundare, Canadá · Stanford, Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psicólogo canadiense-estadounidense creador de la Teoría del Aprendizaje Social y Sociocognitiva. Demostró el aprendizaje vicario por observación (experimento del muñeco Bobo) y formuló el concepto de autoeficacia.',
    biografia:
      'Profesor durante más de medio siglo en la Universidad de Stanford, Albert Bandura tendió el puente decisivo entre la primera ola conductual y la revolución cognitiva. Con sus célebres experimentos del "muñeco Bobo" (1961) demostró que las personas aprenden conductas complejas observando modelos, sin necesidad de recibir refuerzo directo.\n\nPosteriormente desarrolló la Teoría Sociocognitiva, destacando la agencia humana, la autorregulación y las creencias de autoeficacia, nociones centrales en Psicología del Aprendizaje, Psicología Social y clínica cognitivo-conductual.',
    principalesAportes: [
      'Teoría del Aprendizaje Social / Observacional: se aprende por modelado y reforzamiento vicario (atención, retención, reproducción y motivación).',
      'Concepto de "Autoeficacia percibida": creencia en la propia capacidad para organizar y ejecutar acciones ante desafíos concretos.',
      'Modelo del "Determinismo recíproco triádico": interacción mutua continua entre factores personales/cognitivos, conducta y ambiente.',
      'Estudio de los mecanismos de "desconexión moral" y técnicas clínicas de modelado participante.'
    ],
    conceptosClave: [
      {
        termino: 'Aprendizaje vicario (Modelado)',
        explicacion:
          'Adquisición de nuevas conductas y expectativas observando las acciones de otros (modelos) y las consecuencias que estos reciben.'
      },
      {
        termino: 'Autoeficacia',
        explicacion:
          'Juicio sobre la propia competencia para afrontar tareas específicas; predice esfuerzo, perseverancia y recuperación frente a la ansiedad o recaídas.'
      },
      {
        termino: 'Determinismo recíproco',
        explicacion:
          'El sujeto no es un producto pasivo del ambiente ni un agente aislado: persona, conducta y contexto se codeterminan mutuamente.'
      },
      {
        termino: 'Desconexión moral',
        explicacion:
          'Procesos sociocognitivos (eufemismos, desplazamiento de responsabilidad, deshumanización) que permiten actuar contra las propias normas éticas sin culpa.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Teoría del aprendizaje social',
        año: '1977',
        resumen: 'Sistematiza el modelado, la autorregulación y el determinismo recíproco.'
      },
      {
        titulo: 'Pensamiento y acción: fundamentos sociales',
        año: '1986',
        resumen: 'Formula de modo integral la Teoría Sociocognitiva.'
      },
      {
        titulo: 'Autoeficacia: cómo afrontamos los cambios de la sociedad actual',
        año: '1997',
        resumen: 'Desarrolla las fuentes y aplicaciones clínicas y educativas de la autoeficacia.'
      }
    ],
    influenciadoPor: [
      { nombre: 'B. F. Skinner', autorId: 'skinner', nota: 'Tradición experimental del aprendizaje que amplía con procesos cognitivos y sociales' },
      { nombre: 'Julian Rotter', nota: 'Expectativas de control y aprendizaje social' }
    ],
    influencioA: [
      { nombre: 'David H. Barlow', autorId: 'barlow', nota: 'Modelado y autoeficacia en trastornos de ansiedad' },
      { nombre: 'Psicología Clínica y de la Salud', nota: 'Programas de prevención, adherencia terapéutica y cambio conductual' }
    ]
  },
  {
    id: 'ellis',
    nombre: 'Albert Ellis',
    apellidoCorto: 'Ellis',
    matchKeys: ['ellis'],
    materiaIdsExtra: [
      'psico-clinica-psicoterapias-2',
      'clinica-cognitivo-comportamental',
      'entrenamiento-tecnicas-cognitivas'
    ],
    fechas: '1913 – 2007',
    origen: 'Pittsburgh · Nueva York, Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psicólogo clínico estadounidense fundador de la Terapia Racional Emotiva Conductual (TREC) y pionero de la segunda ola cognitivo-conductual. Creador del célebre modelo A–B–C.',
    biografia:
      'Formado inicialmente en psicoanálisis en Nueva York, Albert Ellis se desencantó de su lentitud clínica a comienzos de los años 50 e inspirándose en la filosofía estoica de Epicteto ("las personas no se perturban por las cosas, sino por la visión que tienen de ellas") fundó en 1955 la Terapia Racional Emotiva Conductual (TREC).\n\nJunto a Aaron Beck es considerado el padre de la segunda generación (ola cognitiva) de la TCC. Su modelo A–B–C y su distinción entre preferencias flexibles y exigencias absolutistas ("debo/tengo que") son clásicos de toda formación cognitivo-conductual.',
    principalesAportes: [
      'Creación de la Terapia Racional Emotiva Conductual (TREC), primera gran terapia cognitivo-conductual estructurada.',
      'Modelo A–B–C–D–E: entre el evento activador (A) y la consecuencia emocional/conductual (C) median las creencias (B), que pueden debatirse (D) para lograr un efecto saludable (E).',
      'Identificación de las creencias irracionales nucleares (exigencias absolutistas, tremendismo, baja tolerancia a la frustración y condena global).',
      'Concepto de "aceptación incondicional de uno mismo" frente a la autoestima condicional.'
    ],
    conceptosClave: [
      {
        termino: 'Modelo A–B–C',
        explicacion:
          'A (Acontecimiento activador) → B (Beliefs / creencias evaluativas) → C (Consecuencias emocionales y conductuales). Cambiar B transforma C.'
      },
      {
        termino: 'Creencias irracionales ("Deberías")',
        explicacion:
          'Exigencias rígidas y dogmáticas sobre uno mismo, los demás o el mundo ("tengo que hacerlo perfecto sí o sí") que generan perturbación emocional.'
      },
      {
        termino: 'Debate racional (D)',
        explicacion:
          'Cuestionamiento empírico, lógico y pragmático de las creencias irracionales para reemplazarlas por preferencias flexibles y realistas.'
      },
      {
        termino: 'Emociones negativas saludables vs. malsanas',
        explicacion:
          'La TREC no busca eliminar el dolor realista: diferencia tristeza o preocupación funcionales de depresión, pánico o ira paralizante.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Razón y emoción en psicoterapia',
        año: '1962',
        resumen: 'Obra fundacional de la TREC y de la terapia cognitiva moderna.'
      },
      {
        titulo: 'Manual de terapia racional-emotiva (con Russell Grieger)',
        año: '1977',
        resumen: 'Compendio clínico y técnico del modelo ABC y sus aplicaciones.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Epicteto y filosofía estoica', nota: 'El papel mediador de los juicios y creencias sobre las emociones' },
      { nombre: 'Alfred Adler', autorId: 'adler', nota: 'Esquemas de apercepción, objetivos vitales y psicoterapia activa' },
      { nombre: 'Karen Horney', autorId: 'horney', nota: 'La "tiranía de los deberías" y demandas irracionales' }
    ],
    influencioA: [
      { nombre: 'Aaron T. Beck', autorId: 'beck', nota: 'Desarrollo de la Terapia Cognitiva y la segunda ola de TCC' },
      { nombre: 'Eduardo Keegan', autorId: 'keegan', nota: 'Enseñanza de psicoterapias cognitivas en la UBA' }
    ]
  },
  {
    id: 'hayes',
    nombre: 'Steven C. Hayes',
    apellidoCorto: 'Hayes',
    matchKeys: ['hayes'],
    materiaIdsExtra: [
      'clinica-cognitivo-comportamental',
      'entrenamiento-tecnicas-cognitivas',
      'analisis-modificacion-conducta',
      'psico-clinica-psicoterapias-2'
    ],
    fechas: '1948 – presente',
    origen: 'California · Reno (Nevada), Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psicólogo clínico estadounidense líder de la tercera ola de TCC (terapias contextuales). Creador de la Terapia de Aceptación y Compromiso (ACT) y de la Teoría de los Marcos Relacionales (RFT).',
    biografia:
      'Profesor emérito de la Universidad de Nevada en Reno y referente del contextualismo funcional, Steven C. Hayes lideró desde fines de los años 90 la llamada "tercera generación" o tercera ola de terapias cognitivo-conductuales.\n\nA diferencia de la segunda ola centrada en modificar el contenido de los pensamientos, Hayes propuso cambiar la relación y la función que tenemos con pensamientos y emociones difíciles: aceptar el malestar inevitable, tomar distancia del lenguaje literal (defusión) y comprometerse con acciones guiadas por valores personales. Hoy ACT es un eje central en los posgrados y materias cognitivo-conductuales contemporáneas de la UBA.',
    principalesAportes: [
      'Creación de la Terapia de Aceptación y Compromiso (ACT) y del modelo del Hexaflex de la flexibilidad psicológica.',
      'Desarrollo de la Teoría de los Marcos Relacionales (RFT), explicación contextual-conductual del lenguaje y la cognición humana.',
      'Identificación de la "evitación experiencial" y la "fusión cognitiva" como procesos transdiagnósticos centrales del sufrimiento psicológico.',
      'Impulso reciente a la Terapia Basada en Procesos (PBT) junto a Stefan Hofmann, más allá de protocolos cerrados por diagnóstico.'
    ],
    conceptosClave: [
      {
        termino: 'Flexibilidad psicológica (Hexaflex)',
        explicacion:
          'Capacidad de contactar plenamente con el momento presente y elegir acciones valiosas aun en presencia de pensamientos o emociones difíciles.'
      },
      {
        termino: 'Evitación experiencial',
        explicacion:
          'Esfuerzo rígido por controlar, suprimir o escapar de vivencias internas desagradables (ansiedad, recuerdos), que a largo plazo empeora y achica la vida.'
      },
      {
        termino: 'Defusión cognitiva',
        explicacion:
          'Observar los pensamientos como eventos verbales transitorios ("estoy teniendo el pensamiento de que...") en lugar de verdades literales que mandan.'
      },
      {
        termino: 'Acción comprometida y Valores',
        explicacion:
          'Los valores son direcciones vitales elegidas (como el norte en una brújula) que orientan pasos conductuales concretos con sentido.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Terapia de Aceptación y Compromiso (con Strosahl y Wilson)',
        año: '1999 / 2012',
        resumen: 'Manual fundacional de ACT y de la tercera ola contextual.'
      },
      {
        titulo: 'Sal de tu mente, entra en tu vida',
        año: '2005',
        resumen: 'Presentación práctica y accesible de la aceptación, la defusión y los valores.'
      },
      {
        titulo: 'Terapia Basada en Procesos (con Stefan Hofmann)',
        año: '2018',
        resumen: 'Propone integrar la TCC contemporánea en torno a procesos empíricos de cambio.'
      }
    ],
    influenciadoPor: [
      { nombre: 'B. F. Skinner', autorId: 'skinner', nota: 'Análisis funcional de la conducta y contextualismo funcional' },
      { nombre: 'Aaron T. Beck', autorId: 'beck', nota: 'Tradición cognitivo-conductual con base empírica' }
    ],
    influencioA: [
      { nombre: 'Terapias Contextuales / 3ª Ola de TCC', nota: 'ACT, terapia basada en procesos y clínica transdiagnóstica actual' },
      { nombre: 'Eduardo Keegan', autorId: 'keegan', nota: 'Integración de la tercera ola en la formación TCC en la UBA' }
    ]
  },
  {
    id: 'linehan',
    nombre: 'Marsha M. Linehan',
    apellidoCorto: 'Linehan',
    matchKeys: ['linehan'],
    materiaIdsExtra: [
      'clinica-cognitivo-comportamental',
      'entrenamiento-tecnicas-cognitivas',
      'psico-clinica-psicoterapias-2',
      'clinica-trastornos-personalidad-psicosis'
    ],
    fechas: '1943 – presente',
    origen: 'Tulsa (Oklahoma) · Seattle, Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psicóloga clínica estadounidense referente de la tercera ola de TCC y creadora de la Terapia Dialéctico-Conductual (DBT). Revolucionó el tratamiento de la desregulación emocional severa y el riesgo suicida.',
    biografia:
      'Profesora emérita de la Universidad de Washington, Marsha Linehan desarrolló a fines de los años 80 la Terapia Dialéctico-Conductual (DBT) al comprobar que las técnicas conductuales centradas únicamente en el cambio resultaban invalidantes para personas con sufrimiento emocional extremo y conductas autolesivas.\n\nAl integrar estrategias basadas en evidencia del conductismo con la filosofía dialéctica y la aceptación radical inspirada en la práctica zen (mindfulness), construyó el tratamiento con mayor respaldo empírico para el trastorno límite de la personalidad y la desregulación emocional grave.',
    principalesAportes: [
      'Creación de la Terapia Dialéctico-Conductual (DBT), articulando la dialéctica central entre validación/aceptación radical y estrategias activas de cambio.',
      'Teoría Biosocial del trastorno límite: interacción transaccional entre vulnerabilidad emocional biológica y un ambiente invalidante.',
      'Entrenamiento sistemático en cuatro módulos de habilidades: Mindfulness, Tolerancia al malestar, Regulación emocional y Efectividad interpersonal.',
      'Diseño de protocolos claros de jerarquía terapéutica y manejo clínico basado en evidencia de conductas suicidas y autolesiones.'
    ],
    conceptosClave: [
      {
        termino: 'Dialéctica Aceptación ↔ Cambio',
        explicacion:
          'Sostener dos verdades aparentemente opuestas al mismo tiempo: "estás haciendo lo mejor que podés" y "necesitás aprender nuevas habilidades para cambiar".'
      },
      {
        termino: 'Teoría Biosocial',
        explicacion:
          'La desregulación emocional crónica surge del encuentro entre alta sensibilidad/reactividad emocional y entornos que minimizan o castigan esa vivencia.'
      },
      {
        termino: 'Validación emocional',
        explicacion:
          'Comunicar de manera genuina que las emociones y respuestas de la persona tienen sentido dentro de su historia y contexto actual, sin justificar conductas dañinas.'
      },
      {
        termino: 'Mente Sabia y Mindfulness',
        explicacion:
          'Síntesis equilibrada entre la Mente Racional (lógica) y la Mente Emocional (impulsos), cultivada mediante atención plena sin juzgar.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Manual de tratamiento de los trastornos de personalidad límite',
        año: '1993',
        resumen: 'Obra fundacional de la DBT y la teoría biosocial.'
      },
      {
        titulo: 'Manual de entrenamiento en habilidades DBT',
        año: '2015',
        resumen: 'Guía práctica completa de los cuatro módulos de habilidades clínicas.'
      }
    ],
    influenciadoPor: [
      { nombre: 'B. F. Skinner', autorId: 'skinner', nota: 'Análisis conductual y contingencias de aprendizaje' },
      { nombre: 'Práctica Zen y Filosofía Dialéctica', nota: 'Mindfulness, aceptación radical y síntesis de opuestos' }
    ],
    influencioA: [
      { nombre: 'Terapias de Tercera Ola y Clínica del Riesgo Suicida', nota: 'Estándar internacional basado en evidencia en regulación emocional' },
      { nombre: 'Steven C. Hayes', autorId: 'hayes', nota: 'Convergencia de la tercera generación contextual y mindfulness en TCC' }
    ]
  },

  // ======================== REFERENTES UBA / ARGENTINA ========================
  {
    id: 'ana-maria-fernandez',
    nombre: 'Ana María Fernández',
    apellidoCorto: 'A. M. Fernández',
    matchKeys: ['ana maria fernandez', 'fernandez, a. m', 'fernandez, a.m', 'fernandez, ana'],
    materiaIdsExtra: [
      'teoria-tecnica-grupos',
      'estudios-genero',
      'psico-social',
      'psico-organizacional-institucional'
    ],
    fechas: '1944 – presente',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicoanalista, doctora en Psicología y profesora emérita de la UBA. Referente imprescindible de Teoría y Técnica de Grupos y Estudios de Género; autora de "El campo grupal" y "La mujer de la ilusión".',
    biografia:
      'Profesora titular consulta y emérita de la Facultad de Psicología de la UBA —donde dirigió durante décadas la Cátedra I de Teoría y Técnica de Grupos y la pionera cátedra de Introducción a los Estudios de Género—, Ana María Fernández renovó profundamente el pensamiento sobre grupos, instituciones y subjetividades en Argentina y Latinoamérica.\n\nArticulando psicoanálisis, filosofía política (Foucault, Deleuze, Castoriadis) y teoría feminista, propuso pasar de las "teorías de los grupos" a pensar un "campo de problemáticas" atravesado por imaginarios sociales, poder, deseos y diferencias de género.',
    principalesAportes: [
      'Reconstrucción genealógica de las teorías grupales en "El campo grupal" (los tres momentos epistémicos: del todo mayor a las partes al campo de problemáticas).',
      'Noción de "elucidación crítica" y de "dispositivos grupales" como máquinas de visibilidad de sentidos colectivos e institucionales.',
      'Análisis de los "mitos sociales" (como la mujer-madre, el amor romántico y la pasividad erótica) en la producción de subjetividades de género.',
      'Estudio de las lógicas colectivas, asambleas y fábricas recuperadas en la Argentina contemporánea.'
    ],
    conceptosClave: [
      {
        termino: 'El campo grupal (Campo de problemáticas)',
        explicacion:
          'Supera la antinomia individuo/sociedad concibiendo al grupo como un nudo donde se entrecruzan inscripciones deseantes, institucionales, históricas y políticas.'
      },
      {
        termino: 'Imaginario social (efectivo y radical)',
        explicacion:
          'En diálogo con Castoriadis, estudia las significaciones compartidas que sostienen el orden instituido y aquellas capaces de inventar lo instituyente.'
      },
      {
        termino: 'Mitos sociales',
        explicacion:
          'Relatos naturalizados e invisibles que legitiman desigualdades (especialmente de género) al presentarse como "esencia" o naturaleza.'
      },
      {
        termino: 'Elucidación crítica',
        explicacion:
          'Trabajo de pensar lo que se hace y saber lo que se piensa, desarmando certezas naturalizadas sin quedar atrapado en dogmas teóricos.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El campo grupal: notas para una genealogía',
        año: '1989',
        resumen: 'Clásico absoluto de Teoría y Técnica de Grupos en la UBA.'
      },
      {
        titulo: 'La mujer de la ilusión',
        año: '1993',
        resumen: 'Obra fundacional sobre mitos sociales, psicoanálisis y diferencias de género.'
      },
      {
        titulo: 'Las lógicas colectivas: imaginarios, cuerpos y multiplicidades',
        año: '2007',
        resumen: 'Explora dispositivos grupales y movimientos sociales contemporáneos.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Genealogía, dispositivos y relaciones saber-poder' },
      { nombre: 'Gilles Deleuze', autorId: 'deleuze', nota: 'Multiplicidades, agenciamientos y lógicas colectivas (junto a Castoriadis)' },
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Tradición grupalista argentina que retoma y reelabora' },
      { nombre: 'Eduardo "Tato" Pavlovsky', autorId: 'pavlovsky', nota: 'Interlocución clave en psicodrama, multiplicación dramática y lo grupal' }
    ],
    influencioA: [
      { nombre: 'Teoría y Técnica de Grupos y Estudios de Género (UBA)', nota: 'Formación crítica en dispositivos grupales y feminismos' }
    ]
  },
  {
    id: 'aldo-schlemenson',
    nombre: 'Aldo Schlemenson',
    apellidoCorto: 'Schlemenson',
    matchKeys: ['schlemenson'],
    materiaIdsExtra: [
      'psico-trabajo-prof',
      'psico-organizacional-institucional',
      'seleccion-personal'
    ],
    fechas: '1937 – 2016',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicólogo argentino pionero del Análisis Organizacional en la UBA. Articuló el enfoque psicodinámico e institucional con la ética en el trabajo, el liderazgo y el diagnóstico de organizaciones.',
    biografia:
      'Licenciado en Psicología por la UBA (de las primeras promociones de la carrera), discípulo de José Bleger y formado luego en el Tavistock Institute de Londres junto a Elliott Jaques, Aldo Schlemenson fue uno de los fundadores del Análisis Organizacional en Argentina y profesor en la Facultad de Psicología de la UBA.\n\nSu obra —bibliografía obligatoria en Psicología del Trabajo y Psicología Organizacional e Institucional— defiende un rol del psicólogo organizacional riguroso e independiente, atento tanto a la eficacia del proyecto como a la ética, el bienestar subjetivo y la justicia en el trabajo.',
    principalesAportes: [
      'Definición sistemática de las seis dimensiones del Análisis Organizacional (proyecto, estructura, integración psicosocial, condiciones de trabajo, sistema político y contexto).',
      'Conceptualización del "encuadre de consultoría independiente" y de la "perspectiva ética" del psicólogo en las organizaciones.',
      'Estudio de los procesos de cambio organizacional, crisis, empresas familiares y liderazgo legítimo.',
      'Articulación del concepto de "trabajo requerido" y "capacidad de trabajo" (junto a Elliott Jaques) con la psicodinámica grupal.'
    ],
    conceptosClave: [
      {
        termino: 'Las seis dimensiones de la organización',
        explicacion:
          'Mapa diagnóstico integral: 1) Proyecto, 2) Estructura/roles, 3) Integración psicosocial, 4) Condiciones de trabajo, 5) Sistema político y 6) Contexto.'
      },
      {
        termino: 'Perspectiva ética en organizaciones',
        explicacion:
          'El analista organizacional trabaja desde la independencia profesional buscando transparencia, equidad y salud psíquica, no la manipulación gerencial.'
      },
      {
        termino: 'Contrato psicológico y Confianza',
        explicacion:
          'Acuerdo implícito de expectativas recíprocas entre el trabajador y la organización; su ruptura genera desconfianza, cinismo y sufrimiento.'
      },
      {
        termino: 'Rol del consultor / analista organizacional',
        explicacion:
          'Agente externo de cambio que co-construye diagnósticos participativos con los actores involucrados para destrabar conflictos estructurales.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La perspectiva ética en el análisis organizacional',
        año: '1990',
        resumen: 'Texto clásico y obligatorio en Psicología del Trabajo y Organizacional de la UBA.'
      },
      {
        titulo: 'Análisis organizacional y empresa unipersonal',
        año: '1987',
        resumen: 'Desarrolla las seis dimensiones organizacionales y el abordaje de crisis y conflictos.'
      },
      {
        titulo: 'La estrategia del talento',
        año: '2002',
        resumen: 'Aborda liderazgo, evaluación de potencial y desarrollo de personas en contextos inciertos.'
      }
    ],
    influenciadoPor: [
      { nombre: 'José Bleger', autorId: 'bleger', nota: 'Psicología institucional y encuadre independiente' },
      { nombre: 'Elliott Jaques y Wilfred R. Bion', autorId: 'bion', nota: 'Enfoque socioanalítico del Instituto Tavistock' }
    ],
    influencioA: [
      { nombre: 'Psicología del Trabajo y Organizacional (UBA)', nota: 'Modelo latinoamericano de análisis e intervención en organizaciones' }
    ]
  },
  {
    id: 'masotta',
    nombre: 'Oscar Masotta',
    apellidoCorto: 'Masotta',
    matchKeys: ['masotta'],
    materiaIdsExtra: [
      'historia-psico',
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'psicoanalisis-freud'
    ],
    fechas: '1930 – 1979',
    origen: 'Buenos Aires, Argentina · Barcelona, España',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Intelectual, semiólogo y psicoanalista argentino que introdujo la enseñanza de Jacques Lacan en Argentina y el mundo hispanohablante. Fundador de la Escuela Freudiana de Buenos Aires.',
    biografia:
      'Autodidacta brillante que transitó por la filosofía existencialista (Sartre), el arte pop, el happening y la semiología de la historieta antes de consagrarse al psicoanálisis, Oscar Masotta protagonizó uno de los giros culturales más profundos de la psicología argentina: la introducción temprana y sistemática de Jacques Lacan desde mediados de los años 60.\n\nA través de sus célebres grupos de estudio (en años de intervención universitaria), sus libros didácticos y la fundación de la Escuela Freudiana de Buenos Aires en 1974 —y luego su exilio en España—, moldeó la cultura psicoanalítica de toda una generación en la UBA.',
    principalesAportes: [
      'Introducción y traducción conceptual de la obra de Jacques Lacan en Argentina, Latinoamérica y España.',
      'Fundación de la Escuela Freudiana de Buenos Aires (1974), primera institución lacaniana de habla hispana.',
      'Lectura rigurosa y accesible de Freud (complejo de Edipo, falo, pulsión, castración) articulada con el estructuralismo y la lingüística.',
      'Aportes pioneros a la crítica cultural, la semiología y los medios masivos en Argentina.'
    ],
    conceptosClave: [
      {
        termino: 'Retorno a Freud en clave rioplatense',
        explicacion:
          'Transmisión viva de los textos freudianos leídos desde la primacía del significante, rompiendo con la hegemonía del kleinismo y la psicología del yo.'
      },
      {
        termino: 'Lecciones introductorias al psicoanálisis',
        explicacion:
          'Exposiciones claras sobre Edipo, castración, repetición y el lugar del falo que siguen siendo puerta de entrada para estudiantes de grado.'
      },
      {
        termino: 'Transmisión extrauniversitaria y grupos de estudio',
        explicacion:
          'Dispositivo clave en la historia de la psicología argentina durante las dictaduras, donde se formaron futuros profesores de la UBA.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Introducción a la lectura de Jacques Lacan',
        año: '1970',
        resumen: 'Primer gran libro introductorio a Lacan escrito en español.'
      },
      {
        titulo: 'Lecciones de introducción al psicoanálisis',
        año: '1977',
        resumen: 'Síntesis pedagógica muy valorada por estudiantes para abordar Freud y Lacan.'
      },
      {
        titulo: 'Ensayos lacanianos',
        año: '1976',
        resumen: 'Reúne sus trabajos clave sobre el sujeto, la metáfora paterna y la clínica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Eje de su transmisión psicoanalítica y epistolar' },
      { nombre: 'Jean-Paul Sartre', autorId: 'sartre', nota: 'Existencialismo y formación filosófica inicial' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Relectura estructural de los conceptos fundamentales' },
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Lingüística estructural y semiología' }
    ],
    influencioA: [
      { nombre: 'Psicoanálisis Lacaniano en Argentina y España', nota: 'Generaciones de docentes y analistas en la UBA y escuelas freudianas' },
      { nombre: 'Gabriel Lombardi', autorId: 'lombardi', nota: 'Tradición lacaniana argentina en la Facultad de Psicología' },
      { nombre: 'Víctor Korman', autorId: 'korman', nota: 'Participación en los primeros grupos lacanianos de Buenos Aires' }
    ]
  },
  {
    id: 'ferreiro',
    nombre: 'Emilia Ferreiro',
    apellidoCorto: 'Ferreiro',
    matchKeys: ['ferreiro'],
    materiaIdsExtra: [
      'psico-aprendizaje',
      'psico-educativa-prof',
      'psico-desarrollo-niñez',
      'psicopedagogia-clinica'
    ],
    fechas: '1937 – 2023',
    origen: 'Buenos Aires, Argentina · Ginebra · Ciudad de México',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicóloga y pedagoga argentina graduada en la UBA y doctorada en Ginebra bajo la dirección de Jean Piaget. Revolucionó la alfabetización al descubrir la psicogénesis de la lengua escrita.',
    biografia:
      'Graduada en la Facultad de Psicología de la UBA y doctorada en la Universidad de Ginebra con tesis dirigida personalmente por Jean Piaget, Emilia Ferreiro aplicó la epistemología genética a un objeto cultural que la escuela solía tratar como mera técnica motriz: la lectura y la escritura.\n\nJunto a Ana Teberosky en Buenos Aires (y luego exiliada en México), demostró en "Los sistemas de escritura en el desarrollo del niño" (1979) que los niños construyen hipótesis originales y sistemáticas sobre cómo funciona la escritura mucho antes de leer convencionalmente.',
    principalesAportes: [
      'Descubrimiento de la psicogénesis de la lengua escrita: el niño es un sujeto cognoscente que formula hipótesis sobre la escritura, no un repetidor pasivo de letras.',
      'Descripción de los niveles evolutivos de conceptualización de la escritura: presilábico, silábico, silábico-alfabético y alfabético.',
      'Revalorización del "error constructivo" como ventana a la lógica infantil y crítica a los métodos puramente mecánicos de alfabetización.',
      'Defensa de la lengua escrita como derecho cultural y objeto social frente a las desigualdades educativas en América Latina.'
    ],
    conceptosClave: [
      {
        termino: 'Psicogénesis de la lengua escrita',
        explicacion:
          'Proceso constructivo mediante el cual el niño reconstruye activamente las leyes del sistema de escritura a partir de conflictos cognitivos.'
      },
      {
        termino: 'Hipótesis de cantidad y variedad',
        explicacion:
          'Criterios tempranos que inventan los niños (ej.: para que algo "se pueda leer" debe tener al menos tres letras y no ser todas iguales).'
      },
      {
        termino: 'Hipótesis silábica',
        explicacion:
          'Momento decisivo donde el niño descubre la relación entre escritura y sonoridad, asignando una letra a cada sílaba de la palabra.'
      },
      {
        termino: 'Error constructivo',
        explicacion:
          'Producciones no convencionales que no indican déficit sino un nivel organizado y necesario en el camino hacia la escritura alfabética.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Los sistemas de escritura en el desarrollo del niño (con Ana Teberosky)',
        año: '1979',
        resumen: 'Investigación clásica realizada en Argentina que transformó la alfabetización mundial.'
      },
      {
        titulo: 'Alfabetización: teoría y práctica',
        año: '1997',
        resumen: 'Articula hallazgos psicogenéticos con las prácticas reales en el aula.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Director de tesis doctoral y marco de la Epistemología Genética' }
    ],
    influencioA: [
      { nombre: 'Psicología del Aprendizaje y Psicopedagogía en Iberoamérica', nota: 'Didáctica constructivista de la lectura y escritura' },
      { nombre: 'Ricardo Baquero', autorId: 'baquero', nota: 'Debate sobre aprendizaje escolar y no patologización' }
    ]
  },
  {
    id: 'samaja',
    nombre: 'Juan Samaja',
    apellidoCorto: 'Samaja',
    matchKeys: ['samaja'],
    materiaIdsExtra: ['metodologia-inv', 'cbc-ipc', 'estadistica'],
    fechas: '1941 – 2007',
    origen: 'Salta · Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Filósofo, sociólogo y epistemólogo argentino, profesor titular histórico de Metodología de la Investigación en Psicología UBA. Formuló la teoría dialéctica de la investigación científica y la matriz de datos.',
    biografia:
      'Doctor en Ciencias de la Salud y profesor titular plenario en la Facultad de Psicología de la UBA —donde fundó la cátedra de Metodología de la Investigación y dirigió la Maestría en Metodología—, Juan Alfonso Samaja renovó la enseñanza de la investigación en ciencias humanas y de la salud en toda América Latina.\n\nSuperando la falsa grieta entre métodos cuantitativos y cualitativos, articuló a Piaget, Peirce, Hegel y Marx para mostrar que investigar es un proceso dialéctico de descubrimiento y validación donde cada dato se construye dentro de un sistema de matrices de datos.',
    principalesAportes: [
      'Teoría del "sistema de matrices de datos": todo dato científico integra cuatro componentes inseparables (unidad de análisis, variable, valor e indicador).',
      'Superación de la dicotomía cuantitativo/cualitativo mostrando su integración dialéctica en el proceso real de investigación.',
      'Revalorización de la abducción y la analogía (junto a Peirce) en el proceso de generación de hipótesis y diseños de investigación.',
      'Estudio epistemológico de los procesos de salud-enfermedad-atención y del método científico como práctica social.'
    ],
    conceptosClave: [
      {
        termino: 'Matriz de datos (UA – V – R – I)',
        explicacion:
          'Estructura invariante del dato científico: Unidad de Análisis, Variable (dimensión), Valor (categoría) e Indicador (procedimiento empírico).'
      },
      {
        termino: 'Sistema de matrices',
        explicacion:
          'Toda investigación articula al menos tres niveles: matriz central (nivel de anclaje), matriz sub-unitaria (componentes) y matriz supra-unitaria (contexto).'
      },
      {
        termino: 'Proceso de investigación',
        explicacion:
          'Articulación de fases (sincrético/exploratorio, analítico y sintético) que combina invención teórica con validación empírica.'
      },
      {
        termino: 'Inferencias científicas (Abducción y Analogía)',
        explicacion:
          'Junto a la deducción e inducción, explican cómo nacen realmente los modelos y problemas de investigación en psicología.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Epistemología y metodología: elementos para una teoría de la investigación científica',
        año: '1993',
        resumen: 'Obra monumental y manual central de Metodología de la Investigación en la UBA.'
      },
      {
        titulo: 'Epistemología de la salud',
        año: '2004',
        resumen: 'Aplica su marco epistemológico al campo de la salud pública y la salud mental.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Charles S. Peirce', autorId: 'peirce', nota: 'Lógica de la abducción y semiótica de los indicios' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Epistemología genética y constructivismo dialéctico' },
      { nombre: 'Karl R. Popper', autorId: 'popper', nota: 'Debate sobre validación y contrastación de hipótesis' }
    ],
    influencioA: [
      { nombre: 'Roxana Ynoub y Cátedra II de Metodología (UBA)', nota: 'Continuidad directa de su enseñanza en Psicología UBA' }
    ]
  },
  {
    id: 'schejtman',
    nombre: 'Fabián Schejtman',
    apellidoCorto: 'Schejtman',
    matchKeys: ['schejtman'],
    materiaIdsExtra: ['psicopatologia', 'psicoanalisis-francesa-1', 'psico-clinica-psicoterapias-1'],
    fechas: '1965 – presente',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicoanalista y profesor titular regular de Psicopatología (Cátedra II) en Psicología UBA. Referente internacional en psicopatología lacaniana, clínica nodal, síntoma y sinthome.',
    biografia:
      'Doctor en Psicología por la UBA, psicoanalista (EOL / AMP) y profesor titular regular de Psicopatología Cátedra II en la Facultad de Psicología de la UBA, Fabián Schejtman es autor y compilador de varios de los textos más estudiados en el tramo psicopatológico de la carrera.\n\nSu investigación articula la psicopatología clásica de Freud y el primer Lacan (estructuras clínicas: neurosis, psicosis, perversión) con la última enseñanza lacaniana del nudo borromeo y el sinthome, ofreciendo una lectura rigurosa y didáctica de la clínica de los nudos.',
    principalesAportes: [
      'Sistematización universitaria de la psicopatología psicoanalítica de orientación lacaniana (neurosis, psicosis, perversión y trenzado nodal).',
      'Desarrollo de la clínica del "sinthome" como cuarto eslabón que repara lapsus del anudamiento entre Real, Simbólico e Imaginario.',
      'Estudio de los entrecruzamientos entre psicoanálisis, cine, literatura y síntomas contemporáneos.',
      'Compilación de manuales de cátedra de Psicopatología de enorme circulación en toda Argentina.'
    ],
    conceptosClave: [
      {
        termino: 'Clínica nodal / Borromea',
        explicacion:
          'Abordaje topológico que lee las estructuras y los síntomas según cómo se anudan, se sueltan o se reparan los registros Real, Simbólico e Imaginario.'
      },
      {
        termino: 'Sinthome',
        explicacion:
          'Concepto del último Lacan que designa la invención o arreglo singular con que un sujeto logra estabilizar su anudamiento psíquico.'
      },
      {
        termino: 'Elaboraciones sobre neurosis y psicosis',
        explicacion:
          'Articulación didáctica de los mecanismos estructurantes (represión, forclusión, desmentida) y sus presentaciones clínicas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicopatología: clínica y ética (comp.)',
        año: '2013',
        resumen: 'Manual de referencia de Psicopatología Cátedra II en Psicología UBA.'
      },
      {
        titulo: 'Sinthome: ensayos de clínica psicoanalítica nodal',
        año: '2013',
        resumen: 'Desarrolla en profundidad la topología del nudo borromeo y la clínica del sinthome.'
      },
      {
        titulo: 'Elaboraciones lacanianas sobre la psicosis (comp.)',
        año: '2012',
        resumen: 'Recorrido por el desencadenamiento, las suplencias y las psicosis ordinarias.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Psicopatología estructural y topología borromea' },
      { nombre: 'Jacques-Alain Miller', autorId: 'miller', nota: 'Orientación lacaniana, paradigmas del goce y psicosis ordinaria' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Nosología psicoanalítica clásica' }
    ],
    influencioA: [
      { nombre: 'Cátedra II de Psicopatología (UBA)', nota: 'Formación clínica y nodal de miles de estudiantes de Psicología' }
    ]
  },
  {
    id: 'pablo-munoz',
    nombre: 'Pablo Diego Muñoz',
    apellidoCorto: 'Pablo Muñoz',
    matchKeys: ['pablo munoz', 'munoz, p', 'munoz'],
    materiaIdsExtra: [
      'psicoanalisis-francesa-2',
      'psico-fenomenologica-existencial',
      'psicopatologia',
      'abordaje-patologias-acto'
    ],
    fechas: '1970 – presente',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Doctor en Psicología (UBA), psicoanalista y profesor titular regular de Psicoanálisis: Escuela Francesa (Cát. II) y Psicología Fenomenológica y Existencial en la UBA. Referente en pasaje al acto, acting out, locuras y psicopatología.',
    biografia:
      'Doctor en Psicología por la Universidad de Buenos Aires, psicoanalista y profesor titular regular en la Facultad de Psicología de la UBA —a cargo de Psicoanálisis: Escuela Francesa (Cátedra II) y Psicología Fenomenológica y Existencial, además de su extensa trayectoria docente en Psicopatología—, Pablo Muñoz es uno de los autores contemporáneos más leídos por estudiantes de grado y posgrado de la facultad.\n\nSu obra investiga con enorme precisión conceptual y clínica las fronteras entre psicoanálisis, psiquiatría clásica y fenomenología: el pasaje al acto y el acting out, la distinción lacaniana entre locura y psicosis, los dilemas epistemológicos de la psicopatología y el problema de la libertad.',
    principalesAportes: [
      'Estudio sistemático del "pasaje al acto" y el "acting out" en la enseñanza de Jacques Lacan y su valor diferencial en la clínica de urgencias y bordes.',
      'Reconstrucción rigurosa de la noción de "locura" en Lacan (diferenciada de la psicosis estructural y ligada a los impasses de la libertad y el desconocimiento).',
      'Articulación crítica entre psicoanálisis, psiquiatría clásica y psicología fenomenológico-existencial (Husserl, Heidegger, Binswanger, Sartre).',
      'Análisis de los "dilemas de la psicopatología" frente al avance de los manuales clasificatorios y la medicalización contemporánea.'
    ],
    conceptosClave: [
      {
        termino: 'Pasaje al acto vs. Acting out',
        explicacion:
          'En el acting out el sujeto monta una escena dirigida al Otro pidiendo lectura; en el pasaje al acto cae fuera de la escena simbólica identificado al objeto a.'
      },
      {
        termino: 'Locuras según Lacan',
        explicacion:
          'La locura no coincide sin más con la psicosis: para Lacan, el ser del hombre no puede comprenderse sin la locura y sin su límite con la libertad.'
      },
      {
        termino: 'Dilemas de la psicopatología',
        explicacion:
          'Interrogación epistemológica y ética sobre el estatuto del diagnóstico, el sufrimiento psíquico y la diferencia entre psiquiatría y psicoanálisis.'
      },
      {
        termino: 'Diálogo Psicoanálisis – Fenomenología',
        explicacion:
          'Lectura cruzada entre el sujeto del inconsciente y las preguntas existenciales sobre la angustia, la temporalidad y el ser-en-el-mundo.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La invención lacaniana del pasaje al acto',
        año: '2009',
        resumen: 'Investigación clave sobre el pasaje al acto, el acting out y el síntoma en la clínica.'
      },
      {
        titulo: 'Las locuras según Lacan',
        año: '2011',
        resumen: 'Recorrido riguroso por la diferencia entre locura y psicosis a lo largo de la obra de Lacan.'
      },
      {
        titulo: 'Dilemas de la psicopatología',
        año: '2015',
        resumen: 'Texto de consulta habitual en Psicopatología sobre diagnóstico, ciencia y ética clínica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Enseñanza estructural, acto, locura y clínica psicoanalítica' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Psicopatología y clínica del síntoma y el acto' },
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Psicopatología fenomenológica y límites de la comprensión' },
      { nombre: 'Ludwig Binswanger', autorId: 'binswanger', nota: 'Psiquiatría fenomenológico-existencial y Daseinsanalyse' },
      { nombre: 'Fabián Schejtman', autorId: 'schejtman', nota: 'Diálogo académico y trabajo compartido en Psicopatología UBA' }
    ],
    influencioA: [
      { nombre: 'Escuela Francesa Cát. II y Psicología Fenomenológica (UBA)', nota: 'Formación de grado, investigación clínica y tesis en Psicología UBA' }
    ]
  },
  {
    id: 'de-lellis',
    nombre: 'Martín De Lellis',
    apellidoCorto: 'De Lellis',
    matchKeys: ['de lellis', 'lellis'],
    materiaIdsExtra: [
      'salud-publica-mental',
      'psicologo-centros-atencion-primaria',
      'estrategias-intervencion-comunitaria',
      'salud-colectiva-gestion-politicas'
    ],
    fechas: '1963 – presente',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicólogo especialista en Salud Pública y profesor titular de Salud Pública y Salud Mental (Cátedra I) en Psicología UBA. Referente en políticas públicas de salud, atención primaria (APS) y prevención comunitaria.',
    biografia:
      'Licenciado en Psicología por la UBA, magíster en Administración Pública y profesor titular regular de Salud Pública y Salud Mental (Cátedra I) y de la práctica en Centros de Atención Primaria de la Salud (CAPS) en la Facultad de Psicología de la UBA, Martín De Lellis es uno de los principales referentes académicos en el diseño y evaluación de políticas públicas de salud mental.\n\nSu producción —bibliografía obligatoria de la materia— estudia la transformación del modelo asilar hacia redes territoriales de atención primaria, la promoción de la salud y el rol del psicólogo en el sistema público.',
    principalesAportes: [
      'Articulación entre psicología, políticas públicas y gestión del sistema de salud en Argentina.',
      'Desarrollo teórico y práctico de la estrategia de Atención Primaria de la Salud (APS) aplicada al campo de la salud mental comunitaria.',
      'Sistematización de la promoción de la salud, prevención en niveles y planificación participativa en el primer nivel de atención (CAPS).',
      'Estudios sobre la implementación de la Ley Nacional de Salud Mental 26.657 y formación interdisciplinaria en territorio.'
    ],
    conceptosClave: [
      {
        termino: 'Atención Primaria de la Salud (APS)',
        explicacion:
          'Estrategia integral que garantiza acceso universal, cercanía territorial, participación comunitaria y continuidad de cuidados como puerta de entrada al sistema.'
      },
      {
        termino: 'Promoción de la salud vs. Prevención',
        explicacion:
          'La prevención apunta a reducir riesgos y enfermedades específicas; la promoción fortalece determinantes positivos, derechos y autonomía comunitaria.'
      },
      {
        termino: 'Políticas públicas de salud mental',
        explicacion:
          'Decisiones estatales, redes asistenciales y marcos normativos (como la Ley 26.657) orientados a sustituir el modelo manicomial por atención comunitaria.'
      },
      {
        termino: 'Determinantes sociales de la salud',
        explicacion:
          'Condiciones de vida, vivienda, trabajo, educación y redes vinculares que condicionan de modo decisivo la salud física y mental de las poblaciones.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicología y políticas públicas de salud',
        año: '2006',
        resumen: 'Texto central de Salud Pública y Salud Mental sobre el rol del psicólogo en el Estado y la comunidad.'
      },
      {
        titulo: 'Perspectivas en salud pública y salud mental',
        año: '2015',
        resumen: 'Manual universitario sobre APS, epidemiología, promoción y reforma en salud mental.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Salud colectiva, interdisciplina y enfoque de derechos en la UBA' },
      { nombre: 'Enrique Saforcada y Mario Testa', nota: 'Psicología sanitaria y pensamiento estratégico en salud pública' }
    ],
    influencioA: [
      { nombre: 'Cátedra I de Salud Pública y Salud Mental (UBA)', nota: 'Prácticas comunitarias en CAPS y políticas sanitarias' }
    ]
  }
];
