import type { AutorProfile } from './autores';

export const AUTORES_TANDA_10: AutorProfile[] = [
  {
    id: 'wittgenstein',
    nombre: 'Ludwig Wittgenstein',
    apellidoCorto: 'Wittgenstein',
    matchKeys: ['wittgenstein', 'ludwig wittgenstein'],
    materiaIdsExtra: [
      'problemas-filosoficos',
      'cbc-ipc',
      'procesos-psico-basicos',
      'historia-psico',
      'clinica-sistemica'
    ],
    fechas: '1889 – 1951',
    origen: 'Viena, Austria · Cambridge, Reino Unido',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Filósofo austríaco-británico protagonista absoluto del "giro lingüístico" del siglo XX. Pasó del rigor lógico del "Tractatus" ("los límites de mi lenguaje significan los límites de mi mundo") a los "juegos del lenguaje", "formas de vida" y el "argumento contra el lenguaje privado" en las "Investigaciones filosóficas".',
    biografia:
      'Nacido en la misma Viena finisecular que Sigmund Freud —a quien leyó con intensa ambivalencia crítica— y profesor en la Universidad de Cambridge, Ludwig Wittgenstein protagonizó uno de los virajes más célebres de la filosofía: tras publicar el "Tractatus Logico-Philosophicus" (1921), creyó haber resuelto todos los problemas filosóficos y abandonó la academia; años después demolió su propia teoría anterior para escribir las "Investigaciones filosóficas" (1953).\n\nEn Psicología UBA es un interlocutor fascinante en Problemas Filosóficos, IPC, Psicología General (Procesos Básicos), Terapia Sistémica (Escuela de Palo Alto / Watzlawick) y Psicología Social: su célebre "argumento contra el lenguaje privado" golpea de lleno al dualismo cartesiano y a la idea de una mente encerrada en sí misma, mostrando que incluso hablar de nuestros estados internos y emociones supone reglas públicas compartidas dentro de una "forma de vida".',
    principalesAportes: [
      'Primer Wittgenstein ("Tractatus Logico-Philosophicus", 1921): teoría figurativa del lenguaje, límites del sentido ("de lo que no se puede hablar, hay que callar") e influencia decisiva sobre el Círculo de Viena y el positivismo lógico (estudiado en CBC IPC).',
      'Segundo Wittgenstein ("Investigaciones filosóficas", 1953): el significado de una palabra no es un objeto mental oculto ni una etiqueta fija, sino su "uso" concreto dentro de distintos "juegos del lenguaje" entramados en prácticas y "formas de vida".',
      'Argumento contra el lenguaje privado: resulta conceptualmente imposible un lenguaje que solo una persona pudiera entender para nombrar sus sensaciones internas —demoliendo el mito cartesiano del "teatro privado de la conciencia" (clave en filosofía de la mente y procesos básicos).',
      'Crítica terapéutica de la filosofía y lectura de Freud: concibió la filosofía como una "terapia" contra los embrujamientos del lenguaje, y advirtió que las psicologías sufren de "métodos experimentales y confusión conceptual".'
    ],
    conceptosClave: [
      {
        termino: 'Juegos del lenguaje',
        explicacion:
          'Hablar no sirve solo para describir hechos: dar órdenes, bromear, pedir perdón, relatar un sueño o diagnosticar son prácticas sociales regladas ("juegos") donde las palabras cobran su sentido.'
      },
      {
        termino: 'Formas de vida',
        explicacion:
          'El lenguaje está inseparable de prácticas culturales, corporales y comunitarias compartidas: entender un enunciado implica compartir una forma de vida.'
      },
      {
        termino: 'Argumento contra el lenguaje privado',
        explicacion:
          'Ni siquiera el dolor o los sentimientos pueden nombrarse en un código estrictamente solipsista: los criterios del lenguaje emocional son públicos e intersubjetivos (afín al giro sociocultural de Vygotsky).'
      },
      {
        termino: 'Parecidos de familia',
        explicacion:
          'Muchos conceptos psicológicos y culturales (como "juego", "inteligencia" o "trastorno") no poseen una esencia única común, sino una red superpuesta de semejanzas parciales.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Investigaciones filosóficas',
        año: '1953',
        resumen: 'Obra cumbre del segundo Wittgenstein sobre juegos del lenguaje, formas de vida, mente y lenguaje privado.'
      },
      {
        titulo: 'Tractatus Logico-Philosophicus',
        año: '1921',
        resumen: 'Texto bisagra de la lógica moderna, los límites del lenguaje y el debate con el positivismo lógico.'
      },
      {
        titulo: 'Observaciones sobre la filosofía de la psicología',
        año: '1980',
        resumen: 'Notas póstumas dedicadas específicamente a desarmar confusiones conceptuales sobre percepción, emoción e introspección.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gottlob Frege y Bertrand Russell', nota: 'Lógica moderna y análisis del lenguaje en el primer Wittgenstein' },
      { nombre: 'Søren Kierkegaard', autorId: 'kierkegaard', nota: 'Límites de lo decible, ética y lo místico en el Tractatus' }
    ],
    influencioA: [
      { nombre: 'John L. Austin', autorId: 'austin', nota: 'Filosofía del lenguaje ordinario y actos de habla' },
      { nombre: 'Paul Watzlawick', autorId: 'watzlawick', nota: 'Pragmática de la comunicación humana y paradojas lingüísticas en Terapia Sistémica' },
      { nombre: 'Pierre Hadot', autorId: 'hadot', nota: 'Juegos del lenguaje aplicados a comprender los textos de la filosofía antigua' },
      { nombre: 'Thomas S. Kuhn', autorId: 'kuhn', nota: 'Parecidos de familia y prácticas comunitarias en el concepto de paradigma' }
    ]
  },
  {
    id: 'bajtin',
    nombre: 'Mijaíl Bajtín',
    apellidoCorto: 'Bajtín',
    matchKeys: ['bajtin', 'bajtín', 'bakhtin', 'mijail bajtin', 'mijaíl bajtín'],
    materiaIdsExtra: [
      'psico-educativa-prof',
      'psico-social',
      'procesos-psico-basicos',
      'psico-aprendizaje',
      'teoria-tecnica-grupos'
    ],
    fechas: '1895 – 1975',
    origen: 'Oriol · Vitebsk · Saransk · Moscú, Rusia',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Teórico ruso del lenguaje, la literatura y la cultura (Círculo de Bajtín junto a Volóshinov). Formulador del "dialogismo", la "polifonía", la "heteroglosia" y los "géneros discursivos": puente imprescindible con Lev Vygotsky y Jerome Bruner para pensar la mente y la palabra como fenómenos radicalmente sociales.',
    biografia:
      'Contemporáneo exacto de Lev S. Vygotsky en la Rusia posrevolucionaria —aunque condenado al exilio interno y redescubierto mundialmente recién en los años 60—, Mijaíl Mijáilovich Bajtín (en estrecho diálogo con Valentín Volóshinov y el Círculo de Bajtín) revolucionó la teoría del lenguaje al desplazar el foco desde el sistema abstracto de la lengua (Saussure) hacia el "enunciado" vivo y dialógico.\n\nEn Psicología UBA es el complemento natural de Vygotsky (en Psicología del Aprendizaje, Educacional, Procesos Básicos, Social y Grupos): mientras Vygotsky mostró cómo el lenguaje social se interioriza para constituir la conciencia y el habla interna, Bajtín mostró que toda palabra que pronunciamos está "habitada por voces ajenas", dirigida a un otro y moldeada por "géneros discursivos" e ideologías en disputa —base directa de la psicología cultural de Jerome Bruner y James Wertsch.',
    principalesAportes: [
      'Principio del "dialogismo": no existe un enunciado aislado ni un sujeto monológico; toda palabra es respuesta a enunciados previos y anticipa la respuesta de un destinatario —"ser significa comunicarse dialógicamente".',
      'Teoría de los "géneros discursivos" ("El problema de los géneros discursivos", 1952–1953): cada esfera de la actividad humana (la escuela, el consultorio, la familia, un examen oral) elabora tipos relativamente estables de enunciados que organizan cómo pensamos y hablamos.',
      'Nociones de "polifonía" y "heteroglosia" ("Problemas de la poética de Dostoievski"): en el discurso y en la propia conciencia coexisten múltiples voces, acentos sociales y puntos de vista en tensión, nunca una sola voz homogénea.',
      'Diálogo fecundo con Lev Vygotsky y crítica socio-semiótica (en el Círculo de Bajtín / Volóshinov, "El marxismo y la filosofía del lenguaje" y "Freudismo"): la conciencia y el signo son materiales, sociales e intersubjetivos desde el inicio.'
    ],
    conceptosClave: [
      {
        termino: 'Dialogismo y Enunciado',
        explicacion:
          'A diferencia de la oración gramatical abstracta, el enunciado es la unidad real de la comunicación: siempre tiene autor, destinatario, entonación valorativa y se eslabona en una cadena dialógica infinita.'
      },
      {
        termino: 'Polifonía y Heteroglosia',
        explicacion:
          'Nuestra propia habla interna (Vygotsky) es polifónica: lleva ecos de padres, docentes, pares, instituciones y conflictos sociales que dialogan o chocan dentro de cada sujeto.'
      },
      {
        termino: 'Géneros discursivos (Primarios y Secundarios)',
        explicacion:
          'Formas típicas de comunicación —desde una charla cotidiana (primarios) hasta un informe clínico o un texto académico (secundarios)— claves en Psicología Educacional y alfabetización académica.'
      },
      {
        termino: 'Exotopía (Otredad) y Carnavalización',
        explicacion:
          'Solo podemos vernos y comprendernos a través de la mirada exterior del otro (exotopía); en la cultura popular ("carnaval"), la risa y la inversión subvierten temporalmente las jerarquías rígidas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Estética de la creación verbal (incluye "El problema de los géneros discursivos")',
        año: '1979',
        resumen: 'Compilación esencial en Psicología Educacional, Aprendizaje y Ciencias del Lenguaje.'
      },
      {
        titulo: 'Problemas de la poética de Dostoievski',
        año: '1929 / 1963',
        resumen: 'Desarrolla los conceptos clásicos de polifonía, dialogismo y conciencia plurivocal.'
      },
      {
        titulo: 'La cultura popular en la Edad Media y en el Renacimiento (Rabelais)',
        año: '1965',
        resumen: 'Estudio célebre sobre risa, cuerpo, carnaval y subversión simbólica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Contrapunto crítico: frente a la langue abstracta, Bajtín reivindica el enunciado concreto y social' },
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Formación filosófica neokantiana en su juventud sobre ética, responsabilidad y alteridad' }
    ],
    influencioA: [
      { nombre: 'Lev S. Vygotsky', autorId: 'vygotsky', nota: 'Convergencia histórico-cultural en Rusia: habla interna, mediación semiótica y mente social (articulados luego por Wertsch)' },
      { nombre: 'Jerome S. Bruner', autorId: 'bruner', nota: 'Psicología cultural, narrativa, géneros del relato y construcción dialógica del sí-mismo' },
      { nombre: 'Roland Barthes', autorId: 'barthes', nota: 'Intertextualidad (vía Julia Kristeva) y pluralidad de voces en el texto' },
      { nombre: 'Psicología Educacional y Discursiva contemporánea', nota: 'Alfabetización académica, géneros discursivos en el aula y psicoterapia dialógica' }
    ]
  },
  {
    id: 'jakobson',
    nombre: 'Roman Jakobson',
    apellidoCorto: 'Jakobson',
    matchKeys: ['jakobson', 'roman jakobson'],
    materiaIdsExtra: [
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'neuropsicologia',
      'procesos-psico-basicos',
      'psico-social'
    ],
    fechas: '1896 – 1982',
    origen: 'Moscú, Rusia · Praga · Nueva York · Harvard, Estados Unidos',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Lingüista y fonólogo ruso, cofundador del Círculo de Praga y puente decisivo del estructuralismo. Formuló las 6 funciones del lenguaje, el eje metafórico/metonímico a partir del estudio de las afasias (tomado directamente por Lacan para condensación y desplazamiento) y la teoría de los "shifters".',
    biografia:
      'Figura itinerante entre Moscú, Praga, Escandinavia y Estados Unidos (donde conoció a Claude Lévi-Strauss y fundó la fonología estructural junto a Trubetzkoy), Roman Jakobson tendió puentes prodigiosos entre lingüística, neurología clínica, antropología, poética y psicoanálisis.\n\nEn Psicología UBA ocupa un sitio central en dos áreas clave: 1) en Psicoanálisis: Escuela Francesa, porque Jacques Lacan tomó literalmente su distinción de 1956 entre el eje paradigmático de la selección/semejanza (**metáfora**) y el eje sintagmático de la combinación/contigüidad (**metonimia**) para reformular lingüísticamente la condensación y el desplazamiento freudianos; y 2) en Neuropsicología y Procesos Básicos por su estudio pionero de las afasias y su célebre esquema de las 6 funciones del lenguaje.',
    principalesAportes: [
      'Estudio lingüístico de las afasias ("Dos aspectos del lenguaje y dos tipos de trastornos afásicos", 1956): clasifica los trastornos afásicos según dañen el eje de la selección/similitud (polo metafórico) o el eje de la combinación/contigüidad (polo metonímico).',
      'Reformulacion estructural de "metáfora" y "metonimia": base directa de "La instancia de la letra en el inconsciente" (1957) de Jacques Lacan, donde la metáfora equivale a la condensación (síntoma) y la metonimia al desplazamiento (deseo).',
      'Esquema clásico de la comunicación y las 6 funciones del lenguaje: referencial, emotiva, conativa, fática, metalingüística y poética (lectura clave en comunicación, lingüística y clínica).',
      'Teoría de los "shifters" (embragues o conmutadores, como "yo", "aquí", "ahora") y fonología estructural (rasgos distintivos binarios), que inspiró la antropología estructural de Lévi-Strauss y el análisis lacaniano del sujeto de la enunciación.'
    ],
    conceptosClave: [
      {
        termino: 'Metáfora (Selección) y Metonimia (Combinación)',
        explicacion:
          'Los dos ejes fundamentales de todo acto verbal: sustituir un término por otro semejante (metáfora) y encadenar términos contiguos (metonimia) —clave absoluta en Escuela Francesa (Lacan).'
      },
      {
        termino: 'Dos tipos de afasias',
        explicacion:
          'Demostró que las lesiones cerebrales afásicas revelan la doble articulación del lenguaje (trastorno de la semejanza vs. trastorno de la contigüidad), dialogando con la neuropsicología de Luria.'
      },
      {
        termino: 'Las seis funciones del lenguaje',
        explicacion:
          'Todo mensaje combina en distinta proporción funciones ligadas al referente, emisor, receptor, canal (fática), código (metalingüística) y al propio mensaje (poética).'
      },
      {
        termino: 'Shifters (Conmutadores)',
        explicacion:
          'Signos lingüísticos (pronombres, tiempos verbales) cuyo significado cambia según quién habla y cuándo, anudando el código general con el acto singular de enunciación (retomados por Benveniste y Lacan).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Ensayos de lingüística general (incluye "Dos aspectos del lenguaje y dos tipos de trastornos afásicos")',
        año: '1963 / 1975',
        resumen: 'Compilación esencial donde figuran las 6 funciones del lenguaje, las afasias, metáfora/metonimia y los shifters.'
      },
      {
        titulo: 'Lenguaje infantil y afasia',
        año: '1941 / 1974',
        resumen: 'Estudio clásico que compara el orden de adquisición fonológica en el niño con su disolución en la afasia.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Estructuralismo lingüístico y relaciones asociativas/sintagmáticas' },
      { nombre: 'Charles S. Peirce', autorId: 'peirce', nota: 'Semiótica triádica e índices (base de su teoría de los shifters)' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Metáfora/condensación, metonimia/desplazamiento y shifters en el sujeto del inconsciente' },
      { nombre: 'Claude Lévi-Strauss', autorId: 'levi-strauss', nota: 'Encuentro en Nueva York: aplicación de la fonología estructural al parentesco y los mitos' },
      { nombre: 'Émile Benveniste', autorId: 'benveniste', nota: 'Diálogo sobre conmutadores, pronombres y aparato de la enunciación' },
      { nombre: 'Alexander R. Luria', autorId: 'luria', nota: 'Intercambio científico decisivo sobre la clasificación lingüística y neurológica de las afasias' }
    ]
  },
  {
    id: 'benveniste',
    nombre: 'Émile Benveniste',
    apellidoCorto: 'Benveniste',
    matchKeys: ['benveniste', 'emile benveniste', 'émile benveniste'],
    materiaIdsExtra: [
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'procesos-psico-basicos',
      'problemas-filosoficos',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: '1902 – 1976',
    origen: 'Alepo, Siria · París (Collège de France), Francia',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Lingüista francés fundador de la "teoría de la enunciación" y discípulo de Antoine Meillet. Demostró que la subjetividad se constituye "en y por el lenguaje" mediante los pronombres yo/tú, distinguió enunciado de enunciación y dialogó directamente con Freud y Jacques Lacan.',
    biografia:
      'Titular durante más de treinta años de la cátedra de Gramática Comparada en el Collège de France, Émile Benveniste dio un paso decisivo más allá de Ferdinand de Saussure: si Saussure había privilegiado la lengua como sistema impersonal, Benveniste mostró cómo el hablante se apropia del aparato formal de la lengua y se constituye como sujeto en el acto mismo de decir "yo".\n\nEn Psicología UBA es referencia obligada en Psicoanálisis: Escuela Francesa, Clínica de Adultos y Teorías del Lenguaje: su célebre artículo "Observaciones sobre la función del lenguaje en el descubrimiento freudiano" (publicado en 1956 en la revista "La Psychanalyse" dirigida por Lacan) y su distinción entre "sujeto del enunciado" y "sujeto de la enunciación" son llaves maestras para entender la escucha analítica, el chiste, el lapsus y la división subjetiva ($).',
    principalesAportes: [
      'Tesis fundacional "De la subjetividad en el lenguaje" (1958): "Es en y por el lenguaje como el hombre se constituye como sujeto"; no hay un yo previo que luego "usa" el lenguaje como herramienta, sino que "ego" es quien dice "ego" dirigiéndose a un "tú".',
      'Teoría de la "enunciación" ("El aparato formal de la enunciación", 1970): diferencia el "enunciado" (lo dicho, el producto) de la "enunciación" (el acto singular de poner en funcionamiento la lengua, dejando huellas en los pronombres, tiempos verbales y modalizadores).',
      'Distinción entre persona (yo / tú —reversibles en el diálogo) y "no-persona" (él/ella —aquello de lo que se habla, ausente de la escena enunciativa), así como entre "discurso" e "historia".',
      'Diálogo directo con Freud y Lacan ("Observaciones sobre la función del lenguaje en el descubrimiento freudiano", 1956): revisa críticamente la hipótesis lingüística de Freud sobre los "sentidos antitéticos de las palabras primitivas" y señala que el inconsciente opera a nivel retórico y simbólico (supralingüístico), no meramente léxico.'
    ],
    conceptosClave: [
      {
        termino: 'Sujeto del enunciado vs. Sujeto de la enunciación',
        explicacion:
          'Distinción central en la clínica psicoanalítica lacaniana: una cosa es lo que el yo dice de sí en el contenido del enunciado ("no estoy enojado") y otra la posición desde donde se enuncia (el tono, el lapsus, la negación).'
      },
      {
        termino: 'De la subjetividad en el lenguaje (Yo / Tú)',
        explicacion:
          'Los pronombres "yo" y "tú" son formas vacías que cada hablante llena al tomar la palabra; la conciencia de sí solo nace por contraste y reciprocidad con un "tú".'
      },
      {
        termino: 'Aparato formal de la enunciación y Deícticos',
        explicacion:
          'Conjunto de marcas lingüísticas (yo/tú, aquí/ahora, tiempos verbales) que anclan el discurso en la situación única en que un sujeto habla a otro.'
      },
      {
        termino: 'Lenguaje y descubrimiento freudiano',
        explicacion:
          'En su ensayo para la revista de Lacan, Benveniste compara la lógica del sueño y el síntoma con los tropos retóricos (metáfora, metonimia, elipsis) y distingue la comunicación animal (código fijo de las abejas) del lenguaje simbólico humano.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Problemas de lingüística general (Tomos I y II)',
        año: '1966 / 1974',
        resumen:
          'Reúne sus ensayos célebres sobre subjetividad en el lenguaje, aparato formal de la enunciación, comunicación animal y Freud.'
      },
      {
        titulo: 'Vocabulario de las instituciones indoeuropeas',
        año: '1969',
        resumen: 'Investigación magistral sobre las raíces lingüísticas del derecho, el don, la hospitalidad, la ley y la autoridad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Lingüística estructural del signo, ampliada hacia el discurso y la enunciación' },
      { nombre: 'Roman Jakobson', autorId: 'jakobson', nota: 'Diálogo fecundo sobre shifters, pragmática y poética' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Distinción clínica esencial entre sujeto del enunciado y sujeto de la enunciación, e interlocución directa en "La Psychanalyse"' },
      { nombre: 'Roland Barthes', autorId: 'barthes', nota: 'Teoría del discurso, la escritura y el lugar del sujeto en el texto' },
      { nombre: 'Paul Ricoeur', autorId: 'ricoeur', nota: 'Paso de la semiótica del signo a la semántica de la frase y el discurso en hermenéutica' },
      { nombre: 'Giorgio Agamben', autorId: 'agamben', nota: 'Reflexiones sobre infancia, experiencia, juramento y el pasaje de la lengua al discurso' }
    ]
  },
  {
    id: 'austin',
    nombre: 'John L. Austin',
    apellidoCorto: 'Austin',
    matchKeys: ['austin, j', 'john austin', 'john l. austin'],
    materiaIdsExtra: [
      'procesos-psico-basicos',
      'problemas-filosoficos',
      'psico-social',
      'etica-deontologia-ddhh'
    ],
    fechas: '1911 – 1960',
    origen: 'Lancaster · Oxford, Reino Unido',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Filósofo británico del lenguaje ordinario y padre de la "teoría de los actos de habla" ("Cómo hacer cosas con palabras"). Demostró que hablar no es solo describir el mundo sino ejecutar acciones ("enunciados performativos"). Citado en Procesos Psicológicos Básicos UBA y base directa de Judith Butler.',
    biografia:
      'Profesor en la Universidad de Oxford y figura central de la filosofía del lenguaje ordinario tras la Segunda Guerra Mundial, John Langshaw Austin transformó para siempre la pragmática y las ciencias sociales con sus célebres conferencias de Harvard reunidas póstumamente en "Cómo hacer cosas con palabras" (1962).\n\nEn Psicología UBA aparece en Procesos Psicológicos Básicos (Psicología General) y resulta clave para comprender desde la pragmática clínica hasta los estudios de género: cuando alguien dice "te prometo", "los declaro casados" o "es una nena / es un varón" no está meramente describiendo un hecho, sino realizando un acto performativo que produce efectos institucionales y subjetivos reales (piedra angular de Judith Butler y de su debate con Jacques Derrida).',
    principalesAportes: [
      'Descubrimiento de los "enunciados performativos" (realizativos) frente a los "constatativos": mientras los constatativos describen hechos y son verdaderos o falsos, los performativos ("juro", "bautizo", "apuesto", "declaro") hacen aquello mismo que dicen y se evalúan como "afortunados" o "infortunados" según sus condiciones institucionales.',
      'Teoría tripartita de los actos de habla: todo decir implica simultáneamente un acto "locucionario" (emitir palabras con sentido), un acto "ilocucionario" (la fuerza de lo que se hace al decir: prometer, advertir, ordenar, diagnosticar) y un acto "perlocucionario" (los efectos que produce en el oyente: calmar, angustiar, convencer).',
      'Crítica a la "falacia descriptiva": el error clásico de la filosofía y la psicología tradicional de suponer que el lenguaje sirve principalmente para reflejar o etiquetar la realidad.',
      'Puente directo hacia la pragmática psicolingüística (John Searle, Grice), la teoría de la performatividad del género (Judith Butler) y la lectura deconstructiva de la iterabilidad (Jacques Derrida).'
    ],
    conceptosClave: [
      {
        termino: 'Enunciado performativo (Hacer cosas con palabras)',
        explicacion:
          'Expresión lingüística que no informa sobre una acción externa, sino que constituye la acción misma —como un fallo judicial, un diagnóstico institucional o una promesa.'
      },
      {
        termino: 'Acto locucionario, ilocucionario y perlocucionario',
        explicacion:
          'Distinción entre qué se dice (locucionario), con qué fuerza/intención social se dice (ilocucionario) y qué consecuencias emocionales o prácticas genera en quien escucha (perlocucionario).'
      },
      {
        termino: 'Condiciones de felicidad (o infortunio)',
        explicacion:
          'Para que un acto performativo tenga eficacia real requiere un procedimiento convencional reconocido, personas autorizadas y circunstancias apropiadas (vínculo directo con el poder institucional).'
      },
      {
        termino: 'Pragmática del lenguaje',
        explicacion:
          'Rama que estudia el lenguaje en contexto de uso e interacción —central en Procesos Básicos, psicolingüística y análisis clínico de la comunicación.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Cómo hacer cosas con palabras',
        año: '1962',
        resumen: 'Conferencias clásicas que fundan la teoría de los actos de habla y la noción de performatividad.'
      },
      {
        titulo: 'Ensayos filosóficos / Sentido y percepción',
        año: '1961 / 1962',
        resumen: 'Análisis finos sobre el lenguaje cotidiano, la excusa, la responsabilidad y la percepción.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ludwig Wittgenstein', autorId: 'wittgenstein', nota: 'Afinidad en la filosofía del lenguaje ordinario y el significado como uso práctico' }
    ],
    influencioA: [
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Teoría de la performatividad del género y "Lenguaje, poder e identidad"' },
      { nombre: 'Jacques Derrida', autorId: 'derrida', nota: 'Lectura célebre sobre citacionalidad e iterabilidad en "Firma, acontecimiento, contexto"' },
      { nombre: 'Jürgen Habermas', autorId: 'habermas', nota: 'Fuerza ilocucionaria en el núcleo de la Teoría de la acción comunicativa' },
      { nombre: 'John Searle y la pragmática contemporánea', nota: 'Sistematización de los actos de habla y psicología cognitiva del lenguaje' }
    ]
  },
  {
    id: 'morin',
    nombre: 'Edgar Morin',
    apellidoCorto: 'Morin',
    matchKeys: ['morin', 'edgar morin'],
    materiaIdsExtra: [
      'psico-aprendizaje',
      'psico-organizacional-institucional',
      'salud-publica-mental',
      'psico-educativa-prof',
      'metodologia-inv'
    ],
    fechas: '1921 – presente',
    origen: 'París, Francia',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Filósofo y sociólogo francés creador del "Paradigma de la Complejidad" ("Introducción al pensamiento complejo", "El Método"). Critica el reduccionismo disciplinar y propone pensar la subjetividad, la salud y las instituciones desde la incertidumbre, la recursividad y la interdisciplina. Citado en Aprendizaje e Institucional UBA.',
    biografia:
      'Combatiente de la Resistencia francesa, investigador emérito del CNRS y autor de la monumental obra en seis volúmenes "El Método", Edgar Morin (nacido Edgar Nahoum) articuló cibernética, teoría de sistemas, biología, antropología y ciencias humanas para formular el "pensamiento complejo".\n\nEn Psicología UBA es citado explícitamente en Psicología del Aprendizaje y Psicología Institucional —y atraviesa Salud Pública, Educacional y Clínica Sistémica— en estrecha afinidad con Rolando García, Alicia Stolkiner y Gregory Bateson: frente a un "paradigma de simplificación" que separa mente/cuerpo, individuo/sociedad y normal/patológico en compartimentos estancos, Morin enseña a "tejer junto" (*complexus*) lo biológico, lo psíquico y lo social sin borrar sus tensiones.',
    principalesAportes: [
      'Crítica al "paradigma de simplificación" (disyunción, reducción y abstracción) heredado del cartesianismo y el positivismo, que mutila el conocimiento de los fenómenos humanos al aislarlos de su contexto.',
      'Formulación de los tres principios del "pensamiento complejo": principio "dialógico" (coexistencia necesaria de contrarios como orden/desorden o autonomía/dependencia), principio "recursivo" (los productos y efectos son a la vez causas de aquello que los produce, como individuos y sociedad) y principio "hologramático" (la parte está en el todo y el todo está inscripto en cada parte).',
      'Defensa de la "interdisciplina" y la "transdisciplina" ("La cabeza bien puesta", "Los siete saberes necesarios para la educación del futuro"): indispensable para el trabajo en equipos de Salud Mental (Ley 26.657), escuelas e instituciones.',
      'Ética de la comprensión y de la incertidumbre: abandonar la ilusión determinista de control absoluto y asumir la incertidumbre, el error y la complejidad como condiciones propias del conocer y del intervenir.'
    ],
    conceptosClave: [
      {
        termino: 'Paradigma de la complejidad (Complexus: "lo tejido junto")',
        explicacion:
          'Modo de pensar que rechaza reducir lo humano a una sola dimensión (solo cerebro, solo conducta o solo estructura social) y busca articular las múltiples tramas que lo constituyen.'
      },
      {
        termino: 'Principio dialógico, recursivo y hologramático',
        explicacion:
          'Las tres herramientas lógicas centrales de Morin: sostener tensiones opuestas sin anularlas (dialógico), romper la causalidad lineal causa→efecto (recursivo) y ver cómo la sociedad habita en el sujeto y el sujeto produce la sociedad (hologramático).'
      },
      {
        termino: 'Auto-eco-organización',
        explicacion:
          'Los seres vivos y los sujetos humanos construyen su autonomía precisamente a través de su dependencia abierta respecto del ambiente ecológico, cultural y vincular.'
      },
      {
        termino: 'Interdisciplina y "cabeza bien puesta"',
        explicacion:
          'Formar profesionales capaces de contextualizar problemas complejos y dialogar entre disciplinas, en lugar de acumular información fragmentada ("cabeza bien llena").'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Introducción al pensamiento complejo',
        año: '1990',
        resumen: 'Puerta de entrada clásica y muy leída en Psicología UBA (Aprendizaje, Institucional y Salud Pública).'
      },
      {
        titulo: 'Los siete saberes necesarios para la educación del futuro',
        año: '1999',
        resumen: 'Informe para la UNESCO muy trabajado en Psicología Educacional sobre error, incertidumbre y comprensión humana.'
      },
      {
        titulo: 'El Método (6 volúmenes)',
        año: '1977 – 2004',
        resumen: 'Obra magna sobre naturaleza, vida, conocimiento, ideas, humanidad y ética desde la complejidad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gregory Bateson', autorId: 'bateson', nota: 'Cibernética, ecología de la mente y sistemas abiertos' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Constructivismo, autorregulación e interdisciplinariedad científica' },
      { nombre: 'Gaston Bachelard', autorId: 'bachelard', nota: 'Epistemología no cartesiana y crítica al simplismo positivista' }
    ],
    influencioA: [
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Interdisciplina y complejidad en Salud Pública y Salud Mental (UBA)' },
      { nombre: 'Psicología Institucional, Educacional y Sistémica', nota: 'Abordajes complejos no reduccionistas en escuelas, hospitales y organizaciones' }
    ]
  },
  {
    id: 'klimovsky',
    nombre: 'Gregorio Klimovsky',
    apellidoCorto: 'Klimovsky',
    matchKeys: ['klimovsky', 'gregorio klimovsky'],
    materiaIdsExtra: [
      'cbc-ipc',
      'metodologia-inv',
      'historia-psico',
      'problemas-filosoficos',
      'psicoanalisis-freud'
    ],
    fechas: '1922 – 2009',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Matemático y epistemólogo argentino, maestro histórico de la UBA y referente ineludible en la enseñanza de la epistemología en nuestro país ("Las desventuras del conocimiento científico"). Pionero en analizar rigurosamente el estatuto científico y metodológico del psicoanálisis (en diálogo con Etchegoyen y Samaja).',
    biografia:
      'Profesor titular en la Universidad de Buenos Aires, decano de la Facultad de Ciencias Exactas y Naturales en 1966 (renunciante tras la Noche de los Bastones Largos) y miembro de la CONADEP en 1984, Gregorio Klimovsky formó a generaciones enteras de científicos, filósofos y psicólogos argentinos en lógica y metodología de la ciencia.\n\nEn Psicología UBA ocupa un lugar único: su libro "Las desventuras del conocimiento científico" es el gran manual argentino de IPC y Metodología de la Investigación (donde sistematiza los contextos de descubrimiento/justificación/aplicación y el método hipotético-deductivo), y su libro "Epistemología y psicoanálisis" —fruto de décadas de seminarios con psicoanalistas argentinos como R. Horacio Etchegoyen— constituye una de las defensas críticas más serias del rigor epistemológico de la clínica psicoanalítica frente a las objeciones de Karl Popper y Adolf Grünbaum.',
    principalesAportes: [
      'Sistematización magistral en español de la metodología científica ("Las desventuras del conocimiento científico", 1994): niveles de afirmaciones científicas (empíricas básicas, generalizaciones y teóricas), método hipotético-deductivo y contextos de descubrimiento, justificación y aplicación.',
      'Debate riguroso sobre "Epistemología y psicoanálisis" (2004): analiza cómo se contrastan hipótesis clínicas en la sesión analítica ("base empírica" en psicoanálisis), respondiendo con precisión lógica a la acusación popperiana de infalsabilidad.',
      'Defensa de la especificidad metodológica de las ciencias sociales y humanas ("La inexplicable sociedad", con Cecilia Hidalgo, 1998): articula explicación causal, comprensión de sentidos y modelos en ciencias sociales sin caer ni en el cientificismo ingenuo ni en el irracionalismo.',
      'Compromiso ético y universitario: unió siempre la exigencia de racionalidad crítica con la defensa de la universidad pública y los derechos humanos (CONADEP).'
    ],
    conceptosClave: [
      {
        termino: 'Contexto de descubrimiento, justificación y aplicación',
        explicacion:
          'Distinción clásica enseñada en IPC y Metodología UBA: cómo nace una hipótesis (descubrimiento), cómo se la valida con evidencia y lógica (justificación) y qué usos ético-prácticos tiene (aplicación).'
      },
      {
        termino: 'Método hipotético-deductivo y Niveles de enunciados',
        explicacion:
          'Diferencia los enunciados empíricos básicos (nivel 1), las generalizaciones empíricas (nivel 2) y los enunciados teóricos con términos no observables —como "inconsciente" o "esquema"— (nivel 3).'
      },
      {
        termino: 'Base empírica en Psicoanálisis',
        explicacion:
          'Frente a quienes niegan estatuto científico al psicoanálisis, Klimovsky distingue la base empírica filosófica, la epistemológica y la metodológica, mostrando cómo la clínica trabaja con indicios e hipótesis contrastables en transferencia.'
      },
      {
        termino: 'Explicación y Comprensión en Ciencias Sociales',
        explicacion:
          'Análisis claro de las controversias metodológicas entre naturalismo (explicación por leyes) y comprensivismo (sentido e intencionalidad) en psicología y ciencias sociales.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Las desventuras del conocimiento científico: Una introducción a la epistemología',
        año: '1994',
        resumen: 'Clásico absoluto de la universidad argentina en IPC y Metodología de la Investigación.'
      },
      {
        titulo: 'Epistemología y psicoanálisis (Volúmenes I y II)',
        año: '2004',
        resumen: 'Obra de referencia en Buenos Aires sobre validación clínica, hipótesis inconscientes y debate con Popper.'
      },
      {
        titulo: 'La inexplicable sociedad: Cuestiones de epistemología de las ciencias sociales (con Cecilia Hidalgo)',
        año: '1998',
        resumen: 'Recorrido riguroso y didáctico sobre los problemas metodológicos de las ciencias humanas.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Karl R. Popper', autorId: 'popper', nota: 'Racionalismo crítico y método hipotético-deductivo (debatido luego respecto del psicoanálisis)' },
      { nombre: 'Imre Lakatos', autorId: 'lakatos', nota: 'Programas de investigación científica aplicados a las ciencias sociales y la psicología' },
      { nombre: 'Thomas S. Kuhn', autorId: 'kuhn', nota: 'Debate sobre paradigmas, comunidades científicas y racionalidad histórica' }
    ],
    influencioA: [
      { nombre: 'Juan Samaja', autorId: 'samaja', nota: 'Diálogo y contrapunto fecundo en la enseñanza de Metodología en Psicología UBA' },
      { nombre: 'Epistemología del Psicoanálisis en Argentina (R. H. Etchegoyen y APA/APdeBA)', nota: 'Décadas de seminarios sobre validación clínica e investigación conceptual' }
    ]
  },
  {
    id: 'lakatos',
    nombre: 'Imre Lakatos',
    apellidoCorto: 'Lakatos',
    matchKeys: ['lakatos', 'imre lakatos'],
    materiaIdsExtra: [
      'cbc-ipc',
      'metodologia-inv',
      'historia-psico',
      'problemas-filosoficos'
    ],
    fechas: '1922 – 1974',
    origen: 'Debrecen, Hungría · Londres (LSE), Reino Unido',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Filósofo de la ciencia húngaro-británico, discípulo crítico de Karl Popper y creador de la "Metodología de los Programas de Investigación Científica" (PIC: núcleo duro, cinturón protector y heurísticas). Clásico de CBC IPC y citado en Metodología de la Investigación UBA.',
    biografia:
      'Huyendo de la invasión soviética de Hungría en 1956, Imre Lakatos llegó a Inglaterra y se convirtió en el gran continuador y crítico de Karl Popper en la London School of Economics, intentando tender un puente racional entre el falsacionismo popperiano y la historia de los paradigmas de Thomas Kuhn.\n\nEn Psicología UBA es lectura esencial en CBC IPC y Metodología de la Investigación (citado en el programa 2026 junto a Popper y Kuhn): su modelo de los "Programas de Investigación Científica" resulta mucho más fiel que el falsacionismo ingenuo para comprender la historia de la psicología, donde distintos programas rivales (psicoanálisis, conductismo, cognitivismo, neurociencias) coexisten, protegen sus hipótesis centrales y compiten por su fecundidad.',
    principalesAportes: [
      'Falsacionismo sofisticado: una teoría científica nunca se abandona por una sola anomalía empírica aislada (como creía el falsacionismo ingenuo), sino únicamente cuando surge un programa rival con mayor poder explicativo y predictivo.',
      'Estructura de los "Programas de Investigación Científica" (PIC): todo programa se compone de un "núcleo duro" (hipótesis fundamentales irrefutables por decisión metodológica), un "cinturón protector" (hipótesis auxiliares modificables que absorben las anomalías) y dos heurísticas (negativa y positiva).',
      'Criterio de demarcación dinámico: diferencia entre "programas progresivos" (predicen hechos nuevos y amplían su contenido empírico) y "programas regresivos" o degenerativos (solo inventan parches ad hoc para explicar anomalías pasadas).',
      'Famosa máxima inspirada en Kant: "La filosofía de la ciencia sin historia de la ciencia es vacía; la historia de la ciencia sin filosofía de la ciencia es ciega" —puente directo entre Metodología e Historia de la Psicología.'
    ],
    conceptosClave: [
      {
        termino: 'Programa de Investigación Científica (PIC)',
        explicacion:
          'Unidad de análisis epistemológica que reemplaza a la teoría aislada: es una sucesión histórica de teorías emparentadas que comparten un mismo núcleo duro y reglas de trabajo.'
      },
      {
        termino: 'Núcleo duro y Cinturón protector',
        explicacion:
          'El núcleo duro contiene los postulados intocables del programa (por ejemplo, la existencia del inconsciente o el procesamiento de información); ante un problema empírico, los científicos ajustan primero el cinturón protector de hipótesis auxiliares.'
      },
      {
        termino: 'Heurística negativa y Heurística positiva',
        explicacion:
          'La heurística negativa indica qué caminos evitar (no atacar el núcleo duro); la heurística positiva señala qué problemas investigar y cómo perfeccionar los modelos.'
      },
      {
        termino: 'Programas progresivos vs. regresivos',
        explicacion:
          'Permite evaluar racionalmente programas rivales en competencia (a diferencia de la "incomensurabilidad" más radical de Kuhn), observando si generan descubrimientos genuinos o solo excusas defensivas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La metodología de los programas de investigación científica',
        año: '1978',
        resumen: 'Obra fundamental estudiada en IPC y Metodología sobre PIC, núcleo duro, cinturón protector y falsacionismo sofisticado.'
      },
      {
        titulo: 'Historia de la ciencia y sus reconstrucciones racionales',
        año: '1971',
        resumen: 'Articula historia interna, historia externa y evaluación epistemológica de teorías.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Karl R. Popper', autorId: 'popper', nota: 'Falsacionismo reformulado en clave histórica y sofisticada' },
      { nombre: 'Thomas S. Kuhn', autorId: 'kuhn', nota: 'Debate sobre tenacidad de los paradigmas, anomalías e historia real de la ciencia' }
    ],
    influencioA: [
      { nombre: 'Paul Feyerabend', autorId: 'feyerabend', nota: 'Amistad intelectual célebre y debate plasmado en "Contra el método" (dedicado a Lakatos)' },
      { nombre: 'Gregorio Klimovsky', autorId: 'klimovsky', nota: 'Difusión y aplicación de los PIC en la epistemología argentina y psicología' },
      { nombre: 'Juan Samaja', autorId: 'samaja', nota: 'Diálogo crítico en Metodología de la Investigación (Psicología UBA)' }
    ]
  },
  {
    id: 'feyerabend',
    nombre: 'Paul Feyerabend',
    apellidoCorto: 'Feyerabend',
    matchKeys: ['feyerabend', 'paul feyerabend'],
    materiaIdsExtra: [
      'cbc-ipc',
      'metodologia-inv',
      'problemas-filosoficos',
      'historia-psico'
    ],
    fechas: '1924 – 1994',
    origen: 'Viena, Austria · Berkeley, Estados Unidos · Zúrich, Suiza',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Filósofo de la ciencia austríaco célebre por su "Tratado contra el método" (1975) y su "anarquismo epistemológico". Mostró que ningún método único ni rígido explica los grandes avances científicos y defendió el pluralismo teórico frente al dogmatismo cientificista.',
    biografia:
      'Alumno de Karl Popper y amigo íntimo —y rival filosófico— de Imre Lakatos, Paul Karl Feyerabend se convirtió en el gran provocador de la epistemología contemporánea tras estudiar la historia real de Galileo y la física moderna y comprobar que los mayores descubrimientos violaron sistemáticamente las "reglas sagradas" del método científico.\n\nEn Psicología UBA es un clásico infaltable en CBC IPC, Metodología de la Investigación y Problemas Filosóficos (como cuarto vértice del cuarteto Popper–Kuhn–Lakatos–Feyerabend): su célebre lema "todo vale" (*anything goes*) suele malinterpretarse como indiferencia hacia el rigor, cuando en realidad es una defensa apasionada del pluralismo metodológico —vital en una disciplina tan diversa como la psicología— y una crítica democrática al autoritarismo del "experto" en salud y sociedad.',
    principalesAportes: [
      'Crítica radical al monismo metodológico ("Tratado contra el método", 1975): la historia de la ciencia demuestra que no existe una receta metodológica única y universal; intentar imponer un solo método rígido sofoca la creatividad y el progreso del conocimiento.',
      'Principio de "proliferación" y pluralismo teórico: cuantas más teorías, hipótesis e incluso tradiciones rivales convivan y se critiquen mutuamente, mejor conocemos la realidad (argumento muy valorado frente a los intentos de reducir la psicología a una sola escuela).',
      'Inconmensurabilidad y carga teórica de la observación (en paralelo con Thomas Kuhn): las observaciones nunca son neutras, sino interpretadas desde marcos teóricos y lenguajes específicos.',
      'Crítica política al cientificismo ("La ciencia en una sociedad libre", 1978): cuestiona el monopolio absoluto de una ciencia burocratizada sobre la educación, la salud y las decisiones públicas, defendiendo una sociedad plural y democrática.'
    ],
    conceptosClave: [
      {
        termino: 'Anarquismo epistemológico ("Todo vale")',
        explicacion:
          'No significa que cualquier afirmación sea igualmente verdadera, sino que el único principio metodológico que no frena el avance del conocimiento es no encerrarse de antemano en un único método obligatorio.'
      },
      {
        termino: 'Principio de proliferación',
        explicacion:
          'Inventar y sostener teorías alternativas —aun cuando contradigan el consenso dominante— es indispensable porque muchas fallas de una teoría solo se vuelven visibles al contrastarla con otra.'
      },
      {
        termino: 'Contrainducción',
        explicacion:
          'Estrategia legítima (usada por Galileo) de proponer hipótesis que contradicen temporalmente los "hechos" aceptados o las teorías establecidas para descubrir nuevos fenómenos.'
      },
      {
        termino: 'Crítica al cientificismo dogmático',
        explicacion:
          'Distingue la investigación científica viva y plural de su transformación en una ideología autoritaria que descalifica otros saberes clínicos, culturales o comunitarios.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Tratado contra el método: Esquema de una teoría anarquista del conocimiento',
        año: '1975',
        resumen: 'Clásico provocador estudiado en IPC y Metodología sobre pluralismo metodológico, Galileo y contrainducción.'
      },
      {
        titulo: 'La ciencia en una sociedad libre',
        año: '1978',
        resumen: 'Extiende su crítica epistemológica al plano político-democrático y al rol social de los expertos.'
      },
      {
        titulo: 'Adiós a la razón',
        año: '1987',
        resumen: 'Ensayos accesibles contra el racionalismo rígido y en defensa de la diversidad cultural y epistémica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Karl R. Popper', autorId: 'popper', nota: 'Maestro inicial en Londres frente a cuyo racionalismo normativo se rebela' },
      { nombre: 'Imre Lakatos', autorId: 'lakatos', nota: 'Interlocutor predilecto: "Contra el método" nació como un debate epistolar con él' },
      { nombre: 'Thomas S. Kuhn', autorId: 'kuhn', nota: 'Desarrollo paralelo de la noción de inconmensurabilidad entre teorías' },
      { nombre: 'Ludwig Wittgenstein', autorId: 'wittgenstein', nota: 'Pluralidad de juegos del lenguaje y formas de vida' }
    ],
    influencioA: [
      { nombre: 'Metodología de la Investigación y Epistemología crítica (UBA)', nota: 'Defensa del pluralismo metodológico en ciencias sociales, clínicas y cualitativas' },
      { nombre: 'Estudios sociales de la ciencia contemporáneos', nota: 'Crítica al cientificismo y democratización del saber científico' }
    ]
  }
];
