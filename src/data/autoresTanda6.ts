import type { AutorProfile } from './autores';

export const AUTORES_TANDA_6: AutorProfile[] = [
  // ======================== PSICOANÁLISIS ========================
  {
    id: 'aulagnier',
    nombre: 'Piera Aulagnier',
    apellidoCorto: 'Aulagnier',
    matchKeys: ['aulagnier', 'piera aulagnier', 'castoriadis-aulagnier'],
    materiaIdsExtra: [
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'psicopatologia',
      'psico-desarrollo-niñez',
      'clinica-analitica-psicosis',
      'clinica-ninos-adolescentes'
    ],
    fechas: '1923 – 1990',
    origen: 'Milán, Italia · París, Francia',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psiquiatra y psicoanalista francesa post-lacaniana, autora de "La violencia de la interpretación" (1975). Formuló los procesos originario (pictograma), primario y secundario, la violencia primaria/secundaria, el portavoz y el contrato narcisista.',
    biografia:
      'Formada en psiquiatría en Roma y París y analizada por Jacques Lacan —de quien luego se distanció en 1969 para cofundar el Cuarto Grupo (OPLF)—, Piera Aulagnier dedicó su vida a la clínica de las psicosis y a los orígenes de la constitución subjetiva.\n\nEn Psicología UBA es una lectura imprescindible en Psicopatología, Niñez y Psicoanálisis Francés: su metapsicología articula el encuentro temprano entre el cuerpo del infans, el discurso materno ("portavoz") y el conjunto social ("contrato narcisista") con un rigor clínico notable.',
    principalesAportes: [
      'Formulación de tres procesos de metabolización psíquica: lo originario (pictograma), lo primario (fantasía/escena) y lo secundario (enunciado/Yo).',
      'Distinción decisiva entre "violencia primaria" (necesaria y estructurante: la madre anticipa e interpreta el llanto del bebé) y "violencia secundaria" (abusiva y patógena: impide al sujeto pensar por sí mismo).',
      'Concepto de "contrato narcisista": pacto inconsciente entre el niño que nace y el grupo social que le ofrece un lugar a cambio de que continúe los enunciados fundacionales.',
      'Teorización del Yo (Je) como "historiador" que construye un proyecto identificatorio y se enfrenta a la potencialidad psicótica cuando falla el anclaje simbólico.'
    ],
    conceptosClave: [
      {
        termino: 'Pictograma (Proceso originario)',
        explicacion:
          'Primera representación psíquica arcaica en la que zona erógena y objeto complementario se funden (pictograma de fusión/placer o de rechazo/odio).'
      },
      {
        termino: 'Violencia primaria y Violencia secundaria',
        explicacion:
          'La primaria es la imposición inevitable de sentido por parte de la madre-portavoz para que el infans advenga sujeto; la secundaria es el exceso que intenta anular su deseo y pensamiento autónomo.'
      },
      {
        termino: 'Portavoz (Porte-parole)',
        explicacion:
          'Función materna que presta su voz y discurso al bebé antes de que hable, traduciendo sus necesidades y transmitiéndole las reglas del mundo social.'
      },
      {
        termino: 'Contrato narcisista',
        explicacion:
          'Pacto fundante por el cual el conjunto social inviste narcisistamente al recién llegado y le asegura un lugar identificatorio en la cadena generacional.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La violencia de la interpretación: del pictograma al enunciado',
        año: '1975',
        resumen: 'Obra maestra sobre lo originario, el portavoz, el contrato narcisista y la clínica de la psicosis.'
      },
      {
        titulo: 'Los destinos del placer: alienación, amor, pasión',
        año: '1979',
        resumen: 'Profundiza la clínica de la alienación, las relaciones pasionales y las adicciones.'
      },
      {
        titulo: 'El aprendiz de historiador y el maestro-brujo',
        año: '1984',
        resumen: 'Trabaja la construcción de la propia historia identificatoria frente al discurso delirante.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Metapsicología pulsional y teoría del narcisismo' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Formación directa y posterior reelaboración crítica de lo originario y la psicosis' }
    ],
    influencioA: [
      { nombre: 'Silvia Bleichmar', autorId: 'bleichmar', nota: 'Constitución del psiquismo temprano y clínica en Argentina' },
      { nombre: 'Clínica psicoanalítica de las psicosis e infancias', nota: 'Lectura troncal en Psicopatología y Niñez UBA' }
    ]
  },
  {
    id: 'soler',
    nombre: 'Colette Soler',
    apellidoCorto: 'Soler',
    matchKeys: ['soler', 'colette soler'],
    materiaIdsExtra: [
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'psicoanalisis-orientacion-lacaniana',
      'psicopatologia',
      'clinica-analitica-psicosis',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: '1937 – presente',
    origen: 'París, Francia',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Filósofa y psicoanalista francesa, discípula directa de Jacques Lacan y cofundadora de los Foros del Campo Lacaniano (EPFCL). Referente mundial en clínica de las psicosis, sexuación, afectos lacanianos y fin de análisis.',
    biografia:
      'Doctora en Filosofía y en Psicología en París, Colette Soler se analizó y formó directamente con Jacques Lacan en la École Freudienne de Paris y dirigió la École de la Cause Freudienne entre 1981 y 1983. En 1998, tras diferencias institucionales con Jacques-Alain Miller, encabezó la fundación de la Internacional de los Foros del Campo Lacaniano (EPFCL).\n\nMuy leída y visitada en Argentina —donde recibió el Doctorado Honoris Causa de la UNC—, sus textos sobre la estabilización en la psicosis, la sexuación femenina y los afectos son lectura frecuente en cátedras lacanianas de la UBA.',
    principalesAportes: [
      'Estudios rigurosos sobre la clínica de las psicosis: el "inconsciente a cielo abierto", el trabajo del delirio, las estabilizaciones y el lugar del analista como secretario o testigo.',
      'Relectura detallada de la sexuación y el goce femenino en el último Lacan ("Lo que Lacan dijo de las mujeres", "La maldición sobre el sexo").',
      'Teorización de "los afectos lacanianos" (angustia, tristeza, entusiasmo, aburrimiento, vergüenza) y su relación con lo real del goce y el discurso capitalista.',
      'Reflexiones sobre el final de análisis, el pase y la crítica al "pensamiento único" tecnocrático en salud mental.'
    ],
    conceptosClave: [
      {
        termino: 'El inconsciente a cielo abierto',
        explicacion:
          'En la psicosis no opera la represión neurótica: lo inconsciente irrumpe en lo real sin el velo del fantasma, exigiendo inventar soluciones de estabilización.'
      },
      {
        termino: 'Afectos lacanianos',
        explicacion:
          'Lejos de ignorar los afectos, Soler muestra cómo en Lacan los afectos revelan el impacto del lenguaje y del goce sobre el cuerpo hablante.'
      },
      {
        termino: 'Sexuación y Goce suplementario',
        explicacion:
          'Análisis de las fórmulas de la sexuación del Seminario 20: la posición femenina como "no-toda" sometida a la función fálica.'
      },
      {
        termino: 'Fin de análisis y Síntoma',
        explicacion:
          'El fin de la cura no promete armonía ni curación total, sino una nueva relación con el propio sinthome y el deseo del analista.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Estudios sobre las psicosis',
        año: '1998',
        resumen: 'Clásico clínico sobre desencadenamiento, estabilización y maniobra de la transferencia en la psicosis.'
      },
      {
        titulo: 'Lo que Lacan dijo de las mujeres',
        año: '1998',
        resumen: 'Lectura sistemática sobre femineidad, histeria, amor y sexuación en la obra de Lacan.'
      },
      {
        titulo: 'Los afectos lacanianos',
        año: '2011',
        resumen: 'Recorrido clínico sobre angustia, dolor de existir, vergüenza y afectos en la época actual.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Analista, maestro directo y eje central de toda su obra' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Clínica de las neurosis, psicosis y repetición' }
    ],
    influencioA: [
      { nombre: 'Foros del Campo Lacaniano y Clínica en Argentina', nota: 'Referente directa en Psicopatología y Clínica de Adultos UBA' },
      { nombre: 'Fabián Schejtman', autorId: 'schejtman', nota: 'Diálogo clínico sobre psicosis, nudos y sinthome' }
    ]
  },
  {
    id: 'fromm',
    nombre: 'Erich Fromm',
    apellidoCorto: 'Fromm',
    matchKeys: ['fromm', 'erich fromm'],
    materiaIdsExtra: ['historia-psico', 'psico-social', 'psico-personalidad', 'psicoanalisis-freud'],
    fechas: '1900 – 1980',
    origen: 'Fráncfort, Alemania · Nueva York · Cuernavaca, México',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psicoanalista, psicólogo social y filósofo humanista alemán vinculado a la Escuela de Fráncfort. Articuló Freud y Marx en conceptos como "carácter social", "miedo a la libertad" y la polaridad "tener o ser".',
    biografia:
      'Doctorado en sociología en Heidelberg y formado en el Instituto Psicoanalítico de Berlín, Erich Fromm integró inicialmente el Instituto de Investigación Social (Escuela de Fráncfort) antes de emigrar a Estados Unidos escapando del nazismo y luego radicarse en México.\n\nConsiderado uno de los grandes referentes del psicoanálisis humanista y culturalista (junto a Karen Horney y Harry Stack Sullivan), investigó por qué las sociedades modernas pueden renunciar voluntariamente a su libertad buscando refugio en el autoritarismo o el conformismo consumista.',
    principalesAportes: [
      'Formulación del "carácter social": matriz caracterológica compartida por la mayoría de los miembros de una sociedad para que deseen hacer aquello que el sistema socioeconómico necesita.',
      'Análisis psicosocial del fascismo y el conformismo en "El miedo a la libertad" (1941): frente a la angustia de la soledad moderna surgen mecanismos de evasión (autoritarismo, destructividad, conformismo autómata).',
      'Ética del amor maduro y productivo en "El arte de amar" (1956): el amor como arte activo (cuidado, responsabilidad, respeto y conocimiento), no como mero enamoramiento pasivo.',
      'Crítica a la sociedad de consumo en "¿Tener o ser?" (1976): oposición entre el modo existencial de posesión y el modo de despliegue vital.'
    ],
    conceptosClave: [
      {
        termino: 'Miedo a la libertad',
        explicacion:
          'Al emanciparse de los lazos tradicionales, el individuo moderno gana autonomía pero enfrenta soledad e incertidumbre, lo que puede empujarlo a someterse a líderes autoritarios o al conformismo.'
      },
      {
        termino: 'Carácter social',
        explicacion:
          'Puente entre psicoanálisis y sociología: núcleo de la estructura del carácter moldeado por la cultura, la familia y las condiciones económicas.'
      },
      {
        termino: 'Orientación mercantil',
        explicacion:
          'Tipo de personalidad contemporánea en la que las personas se vivencian a sí mismas y a los demás como mercancías cuyo valor depende del "éxito" en el mercado.'
      },
      {
        termino: 'Tener vs. Ser',
        explicacion:
          'Dos modos fundamentales de existencia: acumular objetos, títulos o personas ("tener") frente a la experiencia viva, creativa y vinculada ("ser").'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El miedo a la libertad',
        año: '1941',
        resumen: 'Clásico de psicología social y política sobre autoritarismo, soledad y conformismo.'
      },
      {
        titulo: 'El arte de amar',
        año: '1956',
        resumen: 'Ensayo universal sobre el amor maduro, el narcisismo y la capacidad de dar.'
      },
      {
        titulo: '¿Tener o ser?',
        año: '1976',
        resumen: 'Crítica humanista al consumismo y la alienación contemporánea.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Inconsciente y formación del carácter, revisados desde lo social' },
      { nombre: 'Karl Marx', nota: 'Alienación, condiciones históricas y crítica del capitalismo' }
    ],
    influencioA: [
      { nombre: 'Psicología Humanista y Psicología Social Crítica', nota: 'Puente entre clínica psicodinámica, ética y crítica cultural' },
      { nombre: 'Byung-Chul Han', autorId: 'byung-chul-han', nota: 'Resonancias en la crítica al rendimiento, la autoexplotación y el consumo' }
    ]
  },
  {
    id: 'horney',
    nombre: 'Karen Horney',
    apellidoCorto: 'Horney',
    matchKeys: ['horney', 'karen horney'],
    materiaIdsExtra: ['historia-psico', 'psico-personalidad', 'estudios-genero', 'psicoanalisis-freud'],
    fechas: '1885 – 1952',
    origen: 'Hamburgo, Alemania · Nueva York, Estados Unidos',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Médica y psicoanalista alemana pionera de la psicología femenina y el psicoanálisis culturalista. Cuestionó la "envidia del pene" freudiana y describió la angustia básica, las tendencias neuróticas y la "tiranía de los deberías".',
    biografia:
      'Una de las primeras mujeres médicas formadas en el Instituto Psicoanalítico de Berlín —y luego figura central en Nueva York—, Karen Horney desafió desde los años 20 el sesgo androcéntrico de la teoría freudiana clásica de la sexualidad femenina, subrayando el peso de la cultura y el poder social en el sufrimiento psíquico.\n\nSu clínica de la "angustia básica", el yo idealizado y la "tiranía de los deberías" la convirtió en referente del neofreudismo culturalista y en antecedente directo de la terapia cognitiva de Albert Ellis.',
    principalesAportes: [
      'Crítica pionera al androcentrismo freudiano: cuestionó la universalidad de la "envidia del pene" y propuso la "envidia del útero" como contrapartida simbólica.',
      'Teoría de la "angustia básica": sentimiento profundo de aislamiento e indefensión en un mundo percibido como hostil cuando falla la calidez y seguridad en la infancia.',
      'Tipología de las tres estrategias neuróticas frente a los otros: moverse hacia la gente (sumisión/dependencia), contra la gente (agresión/poder) o alejarse de la gente (desapego).',
      'Descripción del "yo idealizado" rígido y la "tiranía de los deberías" (mandatos perfeccionistas internos que generan culpa y autodesprecio).'
    ],
    conceptosClave: [
      {
        termino: 'Angustia básica',
        explicacion:
          'Sensación infantil de estar solo e indefenso ante un entorno potencialmente hostil, raíz afectiva de las defensas neuróticas posteriores.'
      },
      {
        termino: 'Tres tendencias neuróticas',
        explicacion:
          'Patrones relacionales rígidos para calmar la angustia: complacencia ("hacia"), hostilidad/dominio ("contra") o aislamiento autosuficiente ("lejos de").'
      },
      {
        termino: 'Tiranía de los deberías',
        explicacion:
          'Exigencias absolutas e inalcanzables ("debería ser perfecto, nunca equivocarme, caerle bien a todos") que tiranizan al yo real.'
      },
      {
        termino: 'Psicología femenina y Cultura',
        explicacion:
          'Los malestares atribuidos a la "anatomía femenina" responden en gran medida a la subordinación cultural e histórica de las mujeres.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La personalidad neurótica de nuestro tiempo',
        año: '1937',
        resumen: 'Analiza cómo las contradicciones culturales competitivas moldean la angustia neurótica.'
      },
      {
        titulo: 'Nuestros conflictos interiores',
        año: '1945',
        resumen: 'Presenta las tres tendencias neuróticas y el conflicto entre yo real y yo idealizado.'
      },
      {
        titulo: 'Neurosis y madurez',
        año: '1950',
        resumen: 'Desarrolla la tiranía de los deberías y el camino hacia el crecimiento auténtico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Formación psicoanalítica inicial y posterior revisión culturalista' },
      { nombre: 'Alfred Adler', autorId: 'adler', nota: 'Énfasis en los factores sociales, la seguridad y el estilo vincular' }
    ],
    influencioA: [
      { nombre: 'Albert Ellis', autorId: 'ellis', nota: 'La "tiranía de los deberías" como antecedente directo de las creencias irracionales en TREC' },
      { nombre: 'Estudios de Género y Psicoanálisis Relacional', nota: 'Crítica temprana al falocentrismo en teoría psicoanalítica' }
    ]
  },
  {
    id: 'rorschach',
    nombre: 'Hermann Rorschach',
    apellidoCorto: 'Rorschach',
    matchKeys: ['rorschach', 'hermann rorschach'],
    materiaIdsExtra: [
      'exploracion-diagnostico-2',
      'psicodiagnostico-rorschach',
      'psicopatologia',
      'historia-psico'
    ],
    fechas: '1884 – 1922',
    origen: 'Zúrich · Herisau, Suiza',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psiquiatra y psicoanalista suizo formado con Eugen Bleuler, creador del célebre Test de Manchas de Tinta ("Psicodiagnóstico", 1921). Fundó la evaluación proyectiva de la percepción y la personalidad.',
    biografia:
      'Hijo de un profesor de dibujo y discípulo de Eugen Bleuler en el hospital Burghölzli de Zúrich —donde también convivió con las ideas de Freud y Jung—, Hermann Rorschach combinó su sensibilidad artística con la observación psiquiátrica para diseñar diez láminas simétricas de manchas de tinta (cinco acromáticas, dos rojo-negras y tres cromáticas).\n\nMurió prematuramente a los 37 años, apenas meses después de publicar "Psicodiagnóstico" (1921), pero su instrumento se volvió la técnica proyectiva más estudiada del mundo y cuenta incluso con una electiva propia en Psicología UBA ("Psicodiagnóstico: Rorschach").',
    principalesAportes: [
      'Creación del Psicodiagnóstico de Rorschach (10 láminas estandarizadas): estudia no solo el "qué" ve el sujeto, sino sobre todo el "cómo" organiza su percepción (localización, determinantes, calidad formal).',
      'Formulación del "Tipo Vivencial" (Erlebnistypus): proporción entre respuestas de movimiento humano (M, polo introversivo) y color (C, polo extratensivo).',
      'Articulación entre apercepción, dinámica afectiva, control racional y prueba de realidad en el diagnóstico diferencial (neurosis, psicosis, cuadros orgánicos).',
      'Legado continuado por escuelas como la Escuela Argentina de Rorschach, Bruno Klopfer y el Sistema Comprehensivo de John Exner.'
    ],
    conceptosClave: [
      {
        termino: 'Manchas de tinta y Apercepción',
        explicacion:
          'Ante estímulos ambiguos, el sujeto proyecta sus modos habituales de estructurar la realidad, manejar afectos y sostener defensas.'
      },
      {
        termino: 'Determinantes (Forma, Movimiento, Color)',
        explicacion:
          'Factores que explican qué cualidad de la lámina generó la respuesta: F (control lógico), M (vida interior/creatividad), C (afectividad e impulsividad), claroscuro (angustia).'
      },
      {
        termino: 'Tipo Vivencial (Erlebnistypus)',
        explicacion:
          'Equilibrio entre recursos introversivos (pensamiento interno) y extratensivos (respuesta afectiva al ambiente).'
      },
      {
        termino: 'Fenómenos especiales y Calidad formal',
        explicacion:
          'Indicadores del grado de ajuste perceptivo a la realidad compartida y posibles fallas lógicas o contaminaciones propias de la psicosis.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicodiagnóstico',
        año: '1921',
        resumen: 'Monografía original donde presenta las diez láminas y el método de interpretación perceptivo-dinámico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Eugen Bleuler', autorId: 'bleuler', nota: 'Maestro en el hospital Burghölzli e investigación sobre esquizofrenia' },
      { nombre: 'Carl G. Jung', autorId: 'jung', nota: 'Tipos psicológicos (introversión/extraversión) y asociación de palabras' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Dinámica inconsciente, defensas y simbolismo' }
    ],
    influencioA: [
      { nombre: 'María Luisa Siquier de Ocampo', autorId: 'siquier-de-ocampo', nota: 'Desarrollo del proceso psicodiagnóstico y técnicas proyectivas en Argentina' },
      { nombre: 'Psicodiagnóstico Clínico Contemporáneo (Klopfer, Exner)', nota: 'Evaluación estructural de personalidad y prueba de realidad' }
    ]
  },
  {
    id: 'bleuler',
    nombre: 'Eugen Bleuler',
    apellidoCorto: 'Bleuler',
    matchKeys: ['bleuler', 'eugen bleuler'],
    materiaIdsExtra: ['psicopatologia', 'historia-psico', 'clinica-analitica-psicosis'],
    fechas: '1857 – 1939',
    origen: 'Zollikon · Zúrich, Suiza',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psiquiatra suizo director del hospital Burghölzli de Zúrich y puente histórico entre la psiquiatría clásica y el psicoanálisis. Acuñó los términos "esquizofrenia", "autismo" y "ambivalencia".',
    biografia:
      'Director de la célebre clínica universitaria Burghölzli de Zúrich —donde tuvo como asistentes a Carl G. Jung y Hermann Rorschach—, Eugen Bleuler transformó la nosología psiquiátrica al revisar en 1911 la "demencia precoz" de Emil Kraepelin.\n\nAl advertir que no siempre comenzaba en la juventud ni desembocaba inevitablemente en demencia, propuso llamarla "grupo de las esquizofrenias" (mente escindida) y fue el primer gran psiquiatra académico en incorporar las ideas de Sigmund Freud para buscar un sentido psicológico en los delirios y síntomas psicóticos.',
    principalesAportes: [
      'Acuñación del término "esquizofrenia" (1908/1911) en reemplazo de "demencia precoz", enfatizando la escisión (Spaltung) de las funciones psíquicas por sobre el deterioro fatal.',
      'Distinción entre síntomas fundamentales (las "4 A": alteración de las asociaciones, aplanamiento afectivo, ambivalencia y autismo) y síntomas accesorios (alucinaciones y delirios).',
      'Introducción clínica de los conceptos de "ambivalencia" (adoptado de inmediato por Freud) y "autismo" (retraimiento hacia la vida interior).',
      'Apertura institucional del Burghölzli al psicoanálisis, habilitando el diálogo entre psiquiatría hospitalaria y comprensión psicodinámica.'
    ],
    conceptosClave: [
      {
        termino: 'Grupo de las esquizofrenias (Spaltung)',
        explicacion:
          'Escisión o disociación entre pensamiento, afecto y conducta que caracteriza al cuadro, sin implicar necesariamente una evolución demencial irreversible.'
      },
      {
        termino: 'Las 4 A (Síntomas fundamentales)',
        explicacion:
          'Alteración de las Asociaciones (laxitud del pensamiento), Afectividad perturbada, Ambivalencia afectiva/volitiva y Autismo.'
      },
      {
        termino: 'Síntomas primarios vs. secundarios',
        explicacion:
          'Mientras los síntomas fundamentales derivan directamente del trastorno, los delirios y alucinaciones son síntomas accesorios/secundarios con sentido psicológico comprensible.'
      },
      {
        termino: 'Ambivalencia',
        explicacion:
          'Coexistencia simultánea de sentimientos, impulsos o pensamientos opuestos (amor y odio) hacia un mismo objeto.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Demencia precoz o el grupo de las esquizofrenias',
        año: '1911',
        resumen: 'Texto bisagra de Psicopatología que introduce esquizofrenia, autismo y ambivalencia.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Emil Kraepelin', autorId: 'kraepelin', nota: 'Nosología de la demencia precoz que Bleuler revisa y amplía' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Interpretación psicodinámica de los complejos y síntomas psicóticos' }
    ],
    influencioA: [
      { nombre: 'Carl G. Jung', autorId: 'jung', nota: 'Formación psiquiátrica en el Burghölzli y estudios de asociación' },
      { nombre: 'Hermann Rorschach', autorId: 'rorschach', nota: 'Director de tesis y mentor en el estudio de la esquizofrenia' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Incorporación de "ambivalencia" y debate sobre esquizofrenia vs. parafrenia' }
    ]
  },
  {
    id: 'clerambault',
    nombre: 'Gaëtan Gatian de Clérambault',
    apellidoCorto: 'Clérambault',
    matchKeys: ['clerambault', 'gatan de clerambault', 'gatian de clerambault'],
    materiaIdsExtra: [
      'psicopatologia',
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'clinica-analitica-psicosis'
    ],
    fechas: '1872 – 1934',
    origen: 'Bourges · París, Francia',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psiquiatra francés de la Enfermería Especial de la Prefectura de Policía de París, reconocido por Jacques Lacan como su "único maestro en psiquiatría". Describió el automatismo mental y los delirios pasionales (erotomanía).',
    biografia:
      'Médico psiquiatra brillante y observador minucioso en la Enfermería Especial de París —donde evaluó miles de pacientes agudos—, Gaëtan Gatian de Clérambault dejó una huella indeleble en la psiquiatría francesa y en la formación clínica del joven Jacques Lacan.\n\nEn Psicopatología UBA es bibliografía obligatoria para comprender la estructura de las psicosis antes y junto al psicoanálisis: su descripción del "automatismo mental" (eco del pensamiento, robo de ideas, enunciación de actos) fue retomada por Lacan como evidencia directa de la autonomía del significante en lo real.',
    principalesAportes: [
      'Descripción magistral del "síndrome de automatismo mental" (Síndrome de Clérambault): fenómeno elemental, neutro y anideico que precede y genera secundariamente la construcción delirante.',
      'Diferenciación entre pequeño automatismo mental (sutiles interferencias del pensamiento) y gran automatismo mental (triple automatismo: ideoverbal, sensitivo y psicomotor).',
      'Tipología clínica de los "delirios pasionales" (erotomanía o síndrome de Clérambault, delirio de celos y delirio de reivindicación), caracterizados por un postulado afectivo inicial en sector.',
      'Agudeza semiológica que inspiró directamente la concepción lacaniana de los fenómenos elementales y la xenopatía del lenguaje en la psicosis.'
    ],
    conceptosClave: [
      {
        termino: 'Automatismo mental',
        explicacion:
          'Fenómeno elemental inicial —neutro, sin contenido afectivo previo— donde el sujeto percibe pensamientos impuestos, eco del pensamiento, comentarios de actos o robo de ideas.'
      },
      {
        termino: 'Carácter basal y anideico',
        explicacion:
          'Para Clérambault el delirio es una superestructura secundaria que intenta explicar el automatismo mental previo (una tesis organicista que Lacan relee en clave estructural del lenguaje).'
      },
      {
        termino: 'Delirios pasionales y Erotomanía',
        explicacion:
          'Delirios que estallan en torno a un postulado central ("el Objeto —alguien prestigioso— me ama primero"), desarrollando fases de esperanza, despecho y rencor.'
      },
      {
        termino: 'Fenómenos elementales',
        explicacion:
          'Signos clínicos mínimos pero decisivos de la estructura psicótica que muestran la exterioridad íntima del lenguaje.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Automatismo mental y escisión del yo',
        año: '1920–1927',
        resumen: 'Recopilación de sus exposiciones clásicas sobre el síndrome de automatismo mental.'
      },
      {
        titulo: 'Las psicosis pasionales (Erotomanía)',
        año: '1921',
        resumen: 'Descripción clínica insuperable del postulado erotomaníaco y los delirios en sector.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Psiquiatría clásica francesa (Magnan, Sérieux y Capgras)', nota: 'Tradición semiológica de los delirios crónicos' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Reconocido por Lacan como su "único maestro en psiquiatría" (Seminario 3)' },
      { nombre: 'Fabián Schejtman', autorId: 'schejtman', nota: 'Enseñanza de Psicopatología en la UBA sobre fenómenos elementales' },
      { nombre: 'Pablo Diego Muñoz', autorId: 'pablo-munoz', nota: 'Clínica diferencial de las psicosis y automatismo mental' }
    ]
  },

  // ======================== TCC Y NEUROCIENCIAS ========================
  {
    id: 'watson',
    nombre: 'John B. Watson',
    apellidoCorto: 'Watson',
    matchKeys: ['watson', 'john watson', 'john b watson'],
    materiaIdsExtra: [
      'cbc-psico',
      'historia-psico',
      'psico-aprendizaje',
      'procesos-psico-basicos',
      'analisis-modificacion-conducta'
    ],
    fechas: '1878 – 1958',
    origen: 'Greenville · Baltimore (Johns Hopkins), Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psicólogo estadounidense fundador del Conductismo clásico con su manifiesto de 1913. Desplazó la conciencia y la introspección para definir la psicología como ciencia natural objetiva de la conducta observable (Estímulo–Respuesta).',
    biografia:
      'Profesor en la Universidad Johns Hopkins, John Broadus Watson sacudió la psicología académica en 1913 al publicar "La psicología tal como la ve el conductista", conocido como el Manifiesto Conductista. Rechazó el estudio de la conciencia y el método introspectivo de Wundt por considerarlos subjetivos e inverificables.\n\nEs un autor troncal desde el CBC y en Historia de la Psicología: apoyándose en los reflejos condicionados de Pavlov, aplicó el condicionamiento clásico a las emociones humanas (experimento del "Pequeño Albert") y defendió un ambientalismo radical.',
    principalesAportes: [
      'Publicación del Manifiesto Conductista (1913): redefine objeto (conducta observable) y método (observación experimental) para predecir y controlar el comportamiento.',
      'Modelo asociacionista Estímulo–Respuesta (E–R) inspirado en el condicionamiento clásico de Ivan Pavlov.',
      'Experimento del "Pequeño Albert" (con Rosalie Rayner, 1920): demostró la adquisición y generalización de respuestas emocionales de miedo por condicionamiento (hoy analizado también como caso emblemático en Ética de la investigación).',
      'Ambientalismo radical ("dadme una docena de niños sanos...") y tesis del pensamiento como "habla subvocal" o hábito laríngeo.'
    ],
    conceptosClave: [
      {
        termino: 'Conductismo metodológico (Manifiesto de 1913)',
        explicacion:
          'Ruptura con la introspección y la mente como "caja negra": la psicología científica solo debe estudiar estímulos ambientales y respuestas observables.'
      },
      {
        termino: 'Esquema Estímulo–Respuesta (E–R)',
        explicacion:
          'Toda conducta compleja —incluso emociones y lenguaje— se explica por cadenas de reflejos incondicionados y hábitos condicionados.'
      },
      {
        termino: 'Condicionamiento emocional (Pequeño Albert)',
        explicacion:
          'Asociación de un estímulo neutro (rata blanca) con un ruido estridente hasta provocar miedo condicionado y generalización a objetos peludos.'
      },
      {
        termino: 'Ambientalismo radical',
        explicacion:
          'Postura extrema que minimiza los instintos heredados y atribuye casi toda la formación de la personalidad al entrenamiento ambiental.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La psicología tal como la ve el conductista',
        año: '1913',
        resumen: 'Artículo fundacional (Manifiesto Conductista) de lectura obligatoria en CBC e Historia.'
      },
      {
        titulo: 'El conductismo',
        año: '1924',
        resumen: 'Exposición divulgativa de su ambientalismo y su visión de las emociones, hábitos y pensamiento.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ivan P. Pavlov', autorId: 'pavlov', nota: 'Reflejo condicionado como unidad explicativa del aprendizaje' },
      { nombre: 'Positivismo y Psicología Animal', nota: 'Ideal de objetividad experimental de las ciencias naturales' }
    ],
    influencioA: [
      { nombre: 'B. F. Skinner', autorId: 'skinner', nota: 'Desarrollo posterior del conductismo radical y condicionamiento operante' },
      { nombre: 'Terapias Conductuales de Primera Ola', nota: 'Desensibilización sistemática y modificación de conducta' }
    ]
  },
  {
    id: 'kraepelin',
    nombre: 'Emil Kraepelin',
    apellidoCorto: 'Kraepelin',
    matchKeys: ['kraepelin', 'emil kraepelin'],
    materiaIdsExtra: ['psicopatologia', 'historia-psico', 'psicofarmacologia', 'clinica-analitica-psicosis'],
    fechas: '1856 – 1926',
    origen: 'Neustrelitz · Heidelberg / Múnich, Alemania',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Psiquiatra alemán, padre de la nosología psiquiátrica moderna y antecedente directo de los sistemas diagnósticos contemporáneos (DSM). Diferenció la "demencia precoz" de la "locura maníaco-depresiva" según curso y evolución.',
    biografia:
      'Discípulo de Wilhelm Wundt en psicología experimental y profesor en Dorpat, Heidelberg y Múnich, Emil Kraepelin dedicó su carrera a observar longitudinalmente miles de historias clínicas para ordenar el caos de las clasificaciones psiquiátricas del siglo XIX.\n\nSu gran viraje metodológico —agrupar las enfermedades mentales no por un síntoma aislado sino por su inicio, curso clínico y desenlace— dio origen a la gran dicotomía entre demencia precoz (luego esquizofrenia) y psicosis maníaco-depresiva (luego trastorno bipolar), además de delimitar la paranoia. Es lectura ineludible en Psicopatología UBA.',
    principalesAportes: [
      'Consolidación del criterio clínico-evolutivo en psiquiatría: una entidad nosográfica se define por su comienzo, evolución longitudinal y terminación.',
      'Gran dicotomía de las psicosis endógenas: "demencia precoz" (deterioro progresivo) frente a "locura maníaco-depresiva" (episodios cíclicos con remisión intercrítica).',
      'Delimitación estricta de la "paranoia": delirio crónico sistematizado, insidioso y duradero con conservación intacta de la claridad intelectual.',
      'Base histórica del enfoque "neo-kraepeliniano" que dio forma a la psiquiatría descriptiva contemporánea a partir del DSM-III (1980).'
    ],
    conceptosClave: [
      {
        termino: 'Criterio clínico-evolutivo',
        explicacion:
          'Observar al paciente a lo largo de los años (curso y pronóstico) para distinguir cuadros que en un corte transversal pueden parecer similares.'
      },
      {
        termino: 'Demencia precoz',
        explicacion:
          'Categoría kraepeliniana (hebefrénica, catatónica y paranoide) que luego Eugen Bleuler renombraría como "esquizofrenia".'
      },
      {
        termino: 'Locura maníaco-depresiva',
        explicacion:
          'Trastorno afectivo fásico con oscilaciones entre manía y melancolía y recuperación entre episodios, antecedente directo del trastorno bipolar.'
      },
      {
        termino: 'Paranoia (en sentido estricto)',
        explicacion:
          'Sistema delirante duradero e inquebrantable que evoluciona sin alucinaciones dominantes ni deterioro cognitivo.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Tratado de Psiquiatría (6ª a 8ª edición)',
        año: '1899–1915',
        resumen: 'Obra monumental donde fija las grandes entidades clínicas estudiadas en Psicopatología.'
      },
      {
        titulo: 'Introducción a la clínica psiquiátrica (Lecciones clínicas)',
        año: '1901',
        resumen: 'Presentaciones de casos célebres usadas aún hoy en la enseñanza universitaria.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Wilhelm Wundt', autorId: 'wundt', nota: 'Formación en psicología experimental y medición en laboratorio' },
      { nombre: 'Karl Kahlbaum y Wilhelm Griesinger', nota: 'Enfoque médico-evolutivo de las enfermedades cerebrales' }
    ],
    influencioA: [
      { nombre: 'Eugen Bleuler', autorId: 'bleuler', nota: 'Revisión crítica de la demencia precoz hacia el concepto de esquizofrenia' },
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Interlocutor en Psicopatología General y límites del modelo médico' },
      { nombre: 'David H. Barlow', autorId: 'barlow', nota: 'Tradición diagnóstica empírica reflejada en los manuales DSM' }
    ]
  },

  // ======================== SISTÉMICA Y HUMANISTA ========================
  {
    id: 'maslow',
    nombre: 'Abraham H. Maslow',
    apellidoCorto: 'Maslow',
    matchKeys: ['maslow', 'abraham maslow'],
    materiaIdsExtra: [
      'historia-psico',
      'psico-personalidad',
      'psico-trabajo-prof',
      'psico-fenomenologica-existencial'
    ],
    fechas: '1908 – 1970',
    origen: 'Brooklyn, Nueva York · California, Estados Unidos',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Psicólogo estadounidense cofundador de la Psicología Humanista ("Tercera Fuerza", junto a Carl Rogers). Formuló la teoría de la motivación humana (jerarquía de necesidades), la autorrealización y las experiencias cumbre.',
    biografia:
      'Doctorado en Wisconsin —donde investigó el comportamiento de primates junto a Harry Harlow— y luego profesor en Brooklyn College y Brandeis, Abraham Harold Maslow impulsó en los años 50 y 60 la "Tercera Fuerza" en psicología como alternativa tanto al conductismo reduccionista como al psicoanálisis centrado en la patología.\n\nSu propuesta de estudiar a personas psicológicamente sanas y creativas dio origen a su célebre teoría motivacional de necesidades, ampliamente citada en Historia de la Psicología, Psicología de la Personalidad y Psicología del Trabajo.',
    principalesAportes: [
      'Cofundación de la Psicología Humanista ("Tercera Fuerza") enfocada en el potencial humano, la creatividad, el crecimiento y la salud mental positiva.',
      'Teoría de la motivación humana y jerarquía de necesidades: fisiológicas, seguridad, pertenencia y afecto, estima y autorrealización (necesidades de déficit vs. necesidades de ser/crecimiento).',
      'Estudio de las personas "autorrealizadas" y descripción de las "experiencias cumbre" (momentos intensos de plenitud, asombro y sentido).',
      'Impulso tardío a la "Cuarta Fuerza" (Psicología Transpersonal), incorporando la autotrascendencia en la cúspide motivacional.'
    ],
    conceptosClave: [
      {
        termino: 'Jerarquía de necesidades',
        explicacion:
          'Organización motivacional desde necesidades básicas de déficit (supervivencia, seguridad, pertenencia, estima) hacia necesidades de crecimiento (autorrealización).'
      },
      {
        termino: 'Autorrealización',
        explicacion:
          'Tendencia a desplegar al máximo las propias potencialidades, talentos y autenticidad una vez razonablemente cubiertas las carencias básicas.'
      },
      {
        termino: 'Experiencias cumbre (Peak experiences)',
        explicacion:
          'Instantes profundos de unidad, creatividad, alegría o revelación en los que el sujeto trasciende la rutina cotidiana.'
      },
      {
        termino: 'Tercera Fuerza',
        explicacion:
          'Movimiento humanista que propone una visión integral, libre y orientada al sentido de la persona frente al mecanicismo conductista y el determinismo pulsional.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Una teoría sobre la motivación humana',
        año: '1943',
        resumen: 'Artículo original donde formula su célebre jerarquía de necesidades.'
      },
      {
        titulo: 'Motivación y personalidad',
        año: '1954',
        resumen: 'Desarrollo completo de su teoría motivacional y estudios sobre personas autorrealizadas.'
      },
      {
        titulo: 'El hombre autorrealizado (Hacia una psicología del ser)',
        año: '1962',
        resumen: 'Manifiesto de la psicología humanista sobre crecimiento, valores del ser y experiencias cumbre.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Max Wertheimer', autorId: 'wertheimer', nota: 'Mentor en Nueva York e inspiración para su visión holística y modelo de autorrealización' },
      { nombre: 'Alfred Adler', autorId: 'adler', nota: 'Enfoque holístico y orientación hacia metas de crecimiento' },
      { nombre: 'Kurt Goldstein y Ruth Benedict', nota: 'Concepto original de autorrealización y antropología cultural' }
    ],
    influencioA: [
      { nombre: 'Carl R. Rogers', autorId: 'rogers', nota: 'Compañero en la consolidación del movimiento de Psicología Humanista' },
      { nombre: 'Psicología Organizacional y Psicología Positiva', nota: 'Estudios de motivación laboral, bienestar y florecimiento humano' }
    ]
  },

  // ======================== DESARROLLO Y COGNICIÓN ========================
  {
    id: 'wertheimer',
    nombre: 'Max Wertheimer',
    apellidoCorto: 'Wertheimer',
    matchKeys: ['wertheimer', 'max wertheimer', 'gestalt'],
    materiaIdsExtra: ['cbc-psico', 'historia-psico', 'procesos-psico-basicos', 'psico-aprendizaje'],
    fechas: '1880 – 1943',
    origen: 'Praga · Fráncfort / Berlín · Nueva York, EE.UU.',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo austro-checo fundador de la Psicología de la Gestalt (1912) junto a Köhler y Koffka. Descubrió el fenómeno phi, formuló las leyes de organización perceptiva ("el todo es más que la suma de las partes") y el pensamiento productivo.',
    biografia:
      'Nacido en Praga y formado en Alemania bajo la estela de la fenomenología y la filosofía de Brentano, Max Wertheimer fundó en 1912 la Escuela de la Gestalt en Fráncfort al investigar la ilusión de movimiento aparente ("fenómeno phi") junto a Wolfgang Köhler y Kurt Koffka.\n\nExiliado en Nueva York huyendo del nazismo (en la New School for Social Research), demolió el elementalismo asociacionista de Wundt y el conductismo mecanicista. Su obra es unidad obligatoria en Psicología del CBC, Historia de la Psicología y Procesos Psicológicos Básicos.',
    principalesAportes: [
      'Estudio experimental del "fenómeno phi" (1912): el movimiento aparente entre luces fijas demuestra que la mente percibe estructuras globales organizadas, no átomos sensoriales aislados.',
      'Formulación de las Leyes de la Gestalt (organización perceptiva): ley de pregnancia o buena forma, proximidad, semejanza, cierre, continuidad y figura-fondo.',
      'Distinción entre "pensamiento reproductivo" (aplicación mecánica de hábitos pasados) y "pensamiento productivo" (reestructuración creativa que capta la estructura profunda de un problema).',
      'Influencia directa en la psicología social (Kurt Lewin), el humanismo (Maslow) y la psicología cognitiva de la percepción.'
    ],
    conceptosClave: [
      {
        termino: 'Gestalt (Estructura o Forma)',
        explicacion:
          '"El todo es diferente —y más— que la suma de las partes": la percepción capta configuraciones organizadas con propiedades emergentes (como una melodía).'
      },
      {
        termino: 'Fenómeno Phi',
        explicacion:
          'Ilusión óptica de movimiento continuo producida al encender alternadamente dos luces fijas, prueba fundacional contra el elementalismo sensorial.'
      },
      {
        termino: 'Ley de Pregnancia (Prägnanz / Buena forma)',
        explicacion:
          'Principio rector según el cual la percepción tiende siempre a organizar los estímulos de la manera más simple, estable, simétrica y coherente posible.'
      },
      {
        termino: 'Pensamiento productivo',
        explicacion:
          'Resolución genuina de problemas por comprensión estructural y reordenamiento del campo, frente a la repetición ciega de memoria.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Estudios experimentales sobre la visión del movimiento',
        año: '1912',
        resumen: 'Artículo fundacional de la Psicología de la Gestalt a partir del fenómeno phi.'
      },
      {
        titulo: 'Pensamiento productivo',
        año: '1945 (póstumo)',
        resumen: 'Clásico sobre resolución creativa de problemas y crítica al aprendizaje meramente memorístico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Franz Brentano', autorId: 'brentano', nota: 'Tradición fenomenológica austríaca de la experiencia inmediata' },
      { nombre: 'Christian von Ehrenfels', nota: 'Noción previa de "cualidades de la forma" (Gestaltqualitäten)' }
    ],
    influencioA: [
      { nombre: 'Wolfgang Köhler', autorId: 'kohler', nota: 'Cofundador de la Escuela de la Gestalt e investigación del insight' },
      { nombre: 'Kurt Lewin', autorId: 'lewin', nota: 'Aplicación de la noción de campo y totalidad a grupos y dinámica social' },
      { nombre: 'Abraham H. Maslow', autorId: 'maslow', nota: 'Inspiración directa del enfoque holístico humanista' }
    ]
  },
  {
    id: 'kohler',
    nombre: 'Wolfgang Köhler',
    apellidoCorto: 'Köhler',
    matchKeys: ['kohler', 'koehler', 'wolfgang kohler'],
    materiaIdsExtra: ['cbc-psico', 'historia-psico', 'psico-aprendizaje', 'procesos-psico-basicos'],
    fechas: '1887 – 1967',
    origen: 'Reval (Tallin) · Berlín · Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo alemán cofundador de la Escuela de la Gestalt. Célebre por sus experimentos con chimpancés en Tenerife donde demostró el aprendizaje por "insight" (comprensión súbita y reestructuración del campo perceptivo).',
    biografia:
      'Sujeto experimental de Wertheimer en 1912 junto a Kurt Koffka y luego director del Instituto Psicológico de Berlín —desde donde se opuso abiertamente a la persecución nazi de colegas judíos antes de emigrar a Estados Unidos—, Wolfgang Köhler llevó los principios de la Gestalt al campo del aprendizaje y la resolución de problemas.\n\nDurante la Primera Guerra Mundial quedó varado en la estación de antropoides de Tenerife, donde realizó sus famosos estudios con el chimpancé Sultán: demostró que los animales no aprenden solo por ensayo y error ciego (Thorndike), sino por reorganización súbita del problema ("insight").',
    principalesAportes: [
      'Descubrimiento del aprendizaje por "insight" (discernimiento o comprensión súbita): resolución inteligente de problemas mediante la reestructuración global del campo perceptivo.',
      'Crítica experimental al asociacionismo de ensayo y error de Thorndike y al conductismo mecanicista a través de los estudios con chimpancés en Tenerife (1913–1917).',
      'Formulación del principio de "isomorfismo psicofísico": existe una correspondencia estructural (topológica, no fotográfica) entre la experiencia perceptiva y los campos eléctricos cerebrales.',
      'Sistematización teórica internacional de la Psicología de la Gestalt ("Psicología de la forma", 1929).'
    ],
    conceptosClave: [
      {
        termino: 'Insight (Comprensión súbita)',
        explicacion:
          'Momento en que el organismo capta de golpe una nueva relación funcional entre los elementos del campo (ej.: unir dos cañas o apilar cajas para alcanzar la banana).'
      },
      {
        termino: 'Reestructuración del campo',
        explicacion:
          'Aprender no es sumar reflejos aislados sino reorganizar la percepción total de la situación de modo que un objeto cobra una nueva función.'
      },
      {
        termino: 'Isomorfismo psicofísico',
        explicacion:
          'Hipótesis gestáltica según la cual las estructuras organizadas de la experiencia consciente se corresponden con patrones dinámicos de organización cortical.'
      },
      {
        termino: 'Crítica al ensayo y error ciego',
        explicacion:
          'Las cajas-problema conductistas ocultaban los medios; cuando la situación es visible en conjunto, aparece la conducta inteligente y planificada.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Experimentos sobre la inteligencia de los chimpancés',
        año: '1917',
        resumen: 'Relato clásico de las pruebas con Sultán en Tenerife y la formulación del insight.'
      },
      {
        titulo: 'Psicología de la forma (Gestalt Psychology)',
        año: '1929',
        resumen: 'Obra de síntesis contra el conductismo y el introspeccionismo elementalista.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Max Wertheimer', autorId: 'wertheimer', nota: 'Cofundador y guía teórico de la Escuela de la Gestalt' },
      { nombre: 'Carl Stumpf y Max Planck', nota: 'Fenomenología experimental y física de campos' }
    ],
    influencioA: [
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Diálogo crítico sobre inteligencia práctica y estructuras cognitivas' },
      { nombre: 'Lev S. Vygotsky', autorId: 'vygotsky', nota: 'Retoma los experimentos con primates para contrastar inteligencia práctica y lenguaje' },
      { nombre: 'Ulric Neisser', autorId: 'neisser', nota: 'Herencia holística en la psicología cognitiva de la percepción' }
    ]
  },
  {
    id: 'wechsler',
    nombre: 'David Wechsler',
    apellidoCorto: 'Wechsler',
    matchKeys: ['wechsler', 'david wechsler', 'wais', 'wisc', 'wppsi'],
    materiaIdsExtra: [
      'exploracion-diagnostico-1',
      'neuropsicologia',
      'neuropsicologia-practica',
      'evaluacion-psicologica-contexto',
      'historia-psico'
    ],
    fechas: '1896 – 1981',
    origen: 'Lespezi, Rumania · Nueva York, Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo clínico y psicometrista rumano-estadounidense, creador de las escalas de inteligencia WAIS (adultos), WISC (niños) y WPPSI (preescolares). Introdujo el CI de desviación y la evaluación multidimensional de la inteligencia.',
    biografia:
      'Psicólogo jefe del Hospital Psiquiátrico Bellevue de Nueva York durante más de tres décadas —formado con Charles Spearman y Karl Pearson en Londres—, David Wechsler advirtió que las escalas tipo Binet-Simon pensadas para niños no servían para evaluar adecuadamente a adultos.\n\nEn 1939 publicó la escala Wechsler-Bellevue, origen de las famosas WAIS y WISC que hoy son el estándar de oro mundial de evaluación cognitiva y un contenido obligatorio central de Exploración y Diagnóstico Psicológico Módulo I (Psicométricas) en la UBA.',
    principalesAportes: [
      'Creación de la familia de escalas de inteligencia más utilizada en clínica y educación: WAIS (adultos), WISC (niños y adolescentes) y WPPSI (primera infancia).',
      'Definición global de la inteligencia como capacidad agregada del individuo para actuar con propósito, pensar racionalmente y relacionarse eficazmente con su entorno.',
      'Reemplazo del antiguo cociente edad mental / edad cronológica por el "CI de desviación" (puntuación estandarizada con media 100 y desvío estándar 15 respecto al grupo etario).',
      'Integración de pruebas verbales y ejecutivas/visoespaciales, evolucionando en ediciones modernas (WISC-V / WAIS-IV) hacia índices factoriales (comprensión verbal, razonamiento perceptivo/fluido, memoria de trabajo y velocidad de procesamiento).'
    ],
    conceptosClave: [
      {
        termino: 'Escalas WAIS / WISC / WPPSI',
        explicacion:
          'Baterías psicométricas estandarizadas que evalúan el funcionamiento intelectual general y el perfil de fortalezas y debilidades cognitivas por edades.'
      },
      {
        termino: 'CI de desviación',
        explicacion:
          'Puntaje normativo (media = 100, DE = 15) que compara el desempeño del sujeto con una muestra representativa de su misma edad.'
      },
      {
        termino: 'Inteligencia como capacidad global y multifacética',
        explicacion:
          'La inteligencia no es solo un rasgo escolar abstracto: combina habilidades verbales, manipulativas, memoria de trabajo, velocidad de procesamiento y factores no intelectivos.'
      },
      {
        termino: 'Perfil intratest e intertest',
        explicacion:
          'El valor clínico de las escalas Wechsler no se agota en el puntaje total: las discrepancias entre índices orientan hipótesis neuropsicológicas y psicopedagógicas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La medición de la inteligencia adulta (Escala Wechsler-Bellevue)',
        año: '1939',
        resumen: 'Obra fundacional de las escalas Wechsler y del CI de desviación.'
      },
      {
        titulo: 'Escala de Inteligencia de Wechsler para Niños (WISC) y Adultos (WAIS)',
        año: '1949 / 1955 (ediciones actualizadas)',
        resumen: 'Instrumentos troncales estudiados en Módulo I (Psicométricas) y Neuropsicología.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Alfred Binet y Charles Spearman', nota: 'Psicometría inicial de la inteligencia y teoría del factor g' }
    ],
    influencioA: [
      { nombre: 'Evaluación Psicológica y Neuropsicología Clínica', nota: 'Estándar internacional en psicometría cognitiva (Módulo I UBA)' }
    ]
  },
  {
    id: 'kahneman',
    nombre: 'Daniel Kahneman',
    apellidoCorto: 'Kahneman',
    matchKeys: ['kahneman', 'daniel kahneman', 'tversky'],
    materiaIdsExtra: [
      'procesos-psico-basicos',
      'psico-aprendizaje',
      'psico-social',
      'metodologia-inv'
    ],
    fechas: '1934 – 2024',
    origen: 'Tel Aviv, Israel · Princeton, Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo cognitivo israelí-estadounidense, Premio Nobel de Economía (2002) por su trabajo junto a Amos Tversky sobre heurísticos, sesgos cognitivos, teoría prospectiva y la arquitectura mental de Sistema 1 y Sistema 2.',
    biografia:
      'Nacido en Tel Aviv y profesor emérito en Princeton, Daniel Kahneman protagonizó junto a su entrañable colaborador Amos Tversky una de las revoluciones científicas más influyentes de la psicología cognitiva contemporánea: demostraron experimentalmente que el juicio humano bajo incertidumbre se aparta sistemáticamente de la racionalidad lógica clásica.\n\nSu best-seller científico "Pensar rápido, pensar despacio" (2011) condensó cuatro décadas de investigación sobre intuición, sesgos cognitivos y toma de decisiones, hoy de enorme peso en Procesos Psicológicos Básicos, Metodología y Psicología Cognitiva.',
    principalesAportes: [
      'Programa de "Heurísticos y Sesgos" (con Amos Tversky): atajos mentales útiles (disponibilidad, representatividad, anclaje) que inducen errores sistemáticos y predecibles de juicio.',
      'Teoría Prospectiva (1979): las decisiones humanas se guían por cambios relativos respecto a un punto de referencia y por la "aversión a la pérdida" (perder duele aproximadamente el doble de lo que alegra ganar).',
      'Modelo dual de procesamiento: Sistema 1 (rápido, automático, intuitivo y emocional) frente a Sistema 2 (lento, deliberativo, esforzado y lógico).',
      'Distinción entre el "yo que experimenta" (vivencia momento a momento) y el "yo que recuerda" (regla del pico-final en la memoria evaluativa).'
    ],
    conceptosClave: [
      {
        termino: 'Sistema 1 y Sistema 2',
        explicacion:
          'Dos modos de operar de la mente: el Sistema 1 genera impresiones instantáneas sin esfuerzo; el Sistema 2 supervisa, calcula y corrige, pero es "perezoso" y consume recursos.'
      },
      {
        termino: 'Heurísticos y Sesgos cognitivos',
        explicacion:
          'Atajos mentales como disponibilidad (juzgar probabilidad según lo fácil que viene un recuerdo), representatividad (estereotipos) y anclaje (dejarse arrastrar por una cifra inicial).'
      },
      {
        termino: 'Aversión a la pérdida (Teoría Prospectiva)',
        explicacion:
          'Asimetría psicológica por la cual evitar una pérdida pesa mucho más en nuestras elecciones que obtener una ganancia equivalente.'
      },
      {
        termino: 'Efecto encuadre (Framing)',
        explicacion:
          'Un mismo problema genera decisiones opuestas según se formule en términos de "vidas salvadas" o "personas que morirán".'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Pensar rápido, pensar despacio (Thinking, Fast and Slow)',
        año: '2011',
        resumen: 'Síntesis magistral sobre Sistema 1 y 2, sesgos cognitivos y teoría prospectiva.'
      },
      {
        titulo: 'Juicio bajo incertidumbre: heurísticos y sesgos (con A. Tversky y P. Slovic)',
        año: '1982',
        resumen: 'Compilación científica clásica que fundó la economía conductual y el estudio de sesgos.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ulric Neisser', autorId: 'neisser', nota: 'Revolución cognitiva y estudio experimental de atención y procesamiento' },
      { nombre: 'Herbert Simon', nota: 'Racionalidad limitada en la toma de decisiones humanas' }
    ],
    influencioA: [
      { nombre: 'Economía Conductual y Ciencia Cognitiva Contemporánea', nota: 'Diseño de políticas públicas, sesgos clínicos y toma de decisiones' }
    ]
  },

  // ======================== SOCIAL E INSTITUCIONAL ========================
  {
    id: 'milgram',
    nombre: 'Stanley Milgram',
    apellidoCorto: 'Milgram',
    matchKeys: ['milgram', 'stanley milgram'],
    materiaIdsExtra: ['psico-social', 'etica-deontologia-ddhh', 'historia-psico', 'psico-politica-2'],
    fechas: '1933 – 1984',
    origen: 'Nueva York · Yale / CUNY, Estados Unidos',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Psicólogo social estadounidense célebre por sus experimentos en Yale (1961–1963) sobre la obediencia a la autoridad legítima. Mostró cómo personas comunes pueden infligir daño grave bajo presión situacional ("estado agéntico").',
    biografia:
      'Discípulo y asistente de Solomon Asch (célebre por sus estudios de conformidad grupal) y conmovido por el juicio a Adolf Eichmann en Jerusalén, Stanley Milgram diseñó en la Universidad de Yale uno de los experimentos más famosos —y éticamente debatidos— de la historia de la psicología.\n\nAl comprobar que alrededor del 65% de participantes comunes obedecía órdenes de aplicar supuestas descargas eléctricas letales a un desconocido, Milgram transformó la Psicología Social y encendió el debate sobre los límites éticos de la investigación con humanos (clave en Psicología Social y en Ética y Derechos Humanos UBA).',
    principalesAportes: [
      'Experimentos de "Obediencia a la autoridad" (Yale, 1961–1963): demostraron el peso abrumador del contexto institucional y la autoridad legítima sobre la conciencia moral individual.',
      'Concepto de "estado agéntico": estado psicológico en el que la persona deja de sentirse autora responsable de sus actos y se percibe como mero instrumento ejecutor de una autoridad.',
      'Análisis de las variables situacionales que aumentan o quiebran la obediencia (cercanía de la víctima, prestigio institucional, presencia de pares desobedientes).',
      'Otros estudios clásicos de psicología social urbana: el experimento del "mundo pequeño" (seis grados de separación) y la técnica de la carta perdida.'
    ],
    conceptosClave: [
      {
        termino: 'Obediencia a la autoridad',
        explicacion:
          'Cumplimiento de órdenes de una figura percibida como legítima incluso cuando entran en choque directo con los valores morales del propio sujeto.'
      },
      {
        termino: 'Estado agéntico',
        explicacion:
          'Desplazamiento de la responsabilidad personal hacia quien da la orden ("solo cumplía instrucciones"), reduciendo la autonomía ética.'
      },
      {
        termino: 'Desobediencia y Apoyo grupal',
        explicacion:
          'En las variantes donde dos compañeros se negaban a continuar, la obediencia caía drásticamente: el lazo colectivo habilita romper mandatos injustos.'
      },
      {
        termino: 'Ética de la investigación psicológica',
        explicacion:
          'El estrés extremo y el engaño empleados en Yale impulsaron normas estrictas de consentimiento informado, no maleficencia y comités de ética.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Obediencia a la autoridad: un punto de vista experimental',
        año: '1974',
        resumen: 'Exposición completa de las 18 variantes experimentales y sus implicancias políticas y éticas.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Kurt Lewin', autorId: 'lewin', nota: 'Fuerza del campo situacional sobre la conducta individual' },
      { nombre: 'Solomon Asch y Hannah Arendt', nota: 'Conformidad grupal y reflexión sobre la "banalidad del mal"' }
    ],
    influencioA: [
      { nombre: 'Psicología Social Experimental y Ética de la Investigación', nota: 'Debate sobre obediencia debida, derechos humanos y consentimiento informado' },
      { nombre: 'Juan Jorge Michel Fariña', autorId: 'michel-farina', nota: 'Análisis ético-clínico de la obediencia y la responsabilidad subjetiva en la UBA' }
    ]
  },
  {
    id: 'martin-baro',
    nombre: 'Ignacio Martín-Baró',
    apellidoCorto: 'Martín-Baró',
    matchKeys: ['martin-baro', 'martin baro', 'ignacio martin baro'],
    materiaIdsExtra: [
      'psico-social',
      'salud-publica-mental',
      'estrategias-intervencion-comunitaria',
      'etica-deontologia-ddhh',
      'psico-politica-2'
    ],
    fechas: '1942 – 1989',
    origen: 'Valladolid, España · San Salvador, El Salvador',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Psicólogo social y sacerdote jesuita, fundador de la Psicología de la Liberación latinoamericana. Planteó la desideologización, la concientización, la crítica al fatalismo y el concepto de trauma psicosocial.',
    biografia:
      'Nacido en España y arraigado profundamente en El Salvador —donde fue vicerrector de la Universidad Centroamericana (UCA) y fundó el Instituto Universitario de Opinión Pública—, Ignacio Martín-Baró construyó una psicología social situada desde las mayorías populares latinoamericanas.\n\nFue asesinado en 1989 junto a otros cinco jesuitas y dos colaboradoras por un batallón militar durante la guerra civil salvadoreña. Su obra es lectura fundamental en Psicología Social, Intervención Comunitaria y Derechos Humanos en toda América Latina.',
    principalesAportes: [
      'Fundación de la "Psicología de la Liberación": propone pasar de una psicología mimética importada del norte a una praxis comprometida con la transformación de la opresión social.',
      'Reconceptualización del "trauma psicosocial": el trauma producido por la guerra, la represión o la exclusión no es solo un daño intrapsíquico individual sino una herida en las relaciones sociales.',
      'Análisis crítico del "fatalismo latinoamericano": desmonta la idea esencialista de un pueblo "resignado por naturaleza", mostrándolo como internalización histórica de estructuras opresivas.',
      'Propuesta de tres tareas urgentes del psicólogo social: recuperación de la memoria histórica, desideologización del sentido común y potenciación de las virtudes populares.'
    ],
    conceptosClave: [
      {
        termino: 'Psicología de la Liberación',
        explicacion:
          'Perspectiva ética y epistemológica que pone el saber psicológico al servicio de las mayorías oprimidas para favorecer su protagonismo histórico.'
      },
      {
        termino: 'Trauma psicosocial',
        explicacion:
          'Herida generada y sostenida socialmente (violencia estatal, desigualdad, impunidad) que afecta tanto a los sujetos como a la confianza y el tejido comunitario.'
      },
      {
        termino: 'Desideologización y Concientización',
        explicacion:
          'Develar los discursos que naturalizan la injusticia —en diálogo con Paulo Freire— para que las comunidades lean críticamente su realidad y la transformen.'
      },
      {
        termino: 'Crítica al fatalismo',
        explicacion:
          'El fatalismo no es un rasgo cultural innato sino un producto aprendido de la impotencia estructural que puede revertirse mediante organización y memoria.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Hacia una psicología de la liberación',
        año: '1986',
        resumen: 'Artículo programático clave sobre el compromiso ético-político de la psicología latinoamericana.'
      },
      {
        titulo: 'Acción e ideología / Sistema, grupo y poder',
        año: '1983 / 1989',
        resumen: 'Manuales de referencia de psicología social desde Centroamérica.'
      },
      {
        titulo: 'Psicología social de la guerra: trauma y terapia',
        año: '1990 (póstumo)',
        resumen: 'Desarrolla la categoría de trauma psicosocial y sus implicancias clínicas y comunitarias.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Paulo Freire y Teología de la Liberación', nota: 'Pedagogía del oprimido, concientización y opción por los empobrecidos' },
      { nombre: 'Kurt Lewin', autorId: 'lewin', nota: 'Investigación-acción participativa y cambio social' }
    ],
    influencioA: [
      { nombre: 'Psicología Comunitaria y Salud Colectiva Latinoamericana', nota: 'Referente ético-político en intervención comunitaria y DD.HH.' },
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Convergencias latinoamericanas en salud colectiva y derechos' }
    ]
  },

  // ======================== REFERENTES UBA / ARGENTINA ========================
  {
    id: 'knobel',
    nombre: 'Mauricio Knobel',
    apellidoCorto: 'Knobel',
    matchKeys: ['knobel', 'mauricio knobel'],
    materiaIdsExtra: [
      'psico-desarrollo-adolescencia',
      'psico-desarrollo-niñez',
      'clinica-ninos-adolescentes',
      'clinica-puberes-adolescentes-hospital'
    ],
    fechas: '1922 – 2008',
    origen: 'Buenos Aires, Argentina · Campinas, Brasil',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psiquiatra y psicoanalista argentino, coautor junto a Arminda Aberastury del clásico "La adolescencia normal" (1971). Acuñó el célebre concepto de "síndrome de la adolescencia normal".',
    biografia:
      'Graduado en la Universidad de Buenos Aires, profesor titular en la UNLP y docente clave de la primera etapa de la carrera de Psicología en la UBA antes de exiliarse en 1976 en Brasil (donde fundó y dirigió el departamento de Psicología Médica y Psiquiatría de la UNICAMP en Campinas), Mauricio Knobel dejó una marca imborrable en la psicología evolutiva rioplatense.\n\nSu capítulo "El síndrome de la adolescencia normal" —escrito junto a Arminda Aberastury— es una de las lecturas más clásicas e ineludibles de Psicología del Desarrollo: Adolescencia en la UBA.',
    principalesAportes: [
      'Formulación del "síndrome de la adolescencia normal": conjunto de diez manifestaciones esperables (crisis de identidad, tendencia grupal, contradicciones, fluctuaciones del humor) que no deben patologizarse.',
      'Articulación junto a Arminda Aberastury de los tres duelos fundamentales del adolescente (por el cuerpo infantil, por el rol e identidad infantiles y por los padres de la infancia).',
      'Propuesta de la "normal anormalidad" adolescente: cierta dosis de turbulencia y desequilibrio es saludable y necesaria para elaborar la salida exogámica.',
      'Desarrollo de psicoterapias breves, psicofarmacología crítica e intervención institucional en América Latina.'
    ],
    conceptosClave: [
      {
        termino: 'Síndrome de la adolescencia normal',
        explicacion:
          'Diez rasgos habituales (búsqueda de identidad, tendencia grupal, necesidad de intelectualizar y fantasear, crisis religiosas, desubicación temporal, evolución sexual, actitud social reivindicatoria, contradicciones sucesivas, separación progresiva de los padres y constantes fluctuaciones de humor).'
      },
      {
        termino: 'Normal anormalidad',
        explicacion:
          'Lo patológico en la adolescencia no suele ser la crisis ni la rebeldía, sino la sobreadaptación rígida que impide atravesar los duelos evolutivos.'
      },
      {
        termino: 'Tendencia grupal',
        explicacion:
          'El grupo de pares actúa como refugio transicional e identificatorio que reemplaza temporalmente la dependencia de las figuras parentales.'
      },
      {
        termino: 'Duelos adolescentes (con Aberastury)',
        explicacion:
          'Elaboración psíquica de las pérdidas infantiles indispensable para acceder a una identidad adulta propia.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La adolescencia normal: un enfoque psicoanalítico (con Arminda Aberastury)',
        año: '1971',
        resumen: 'Obra clásica y obligatoria de Psicología del Desarrollo: Adolescencia en toda Latinoamérica.'
      },
      {
        titulo: 'Psicoterapia breve',
        año: '1986',
        resumen: 'Aportes técnicos y clínicos de orientación psicoanalítica para ámbitos institucionales.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Arminda Aberastury', autorId: 'aberastury', nota: 'Coautora y maestra en el psicoanálisis infanto-juvenil argentino' },
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Marco kleiniano sobre duelos, ansiedades y posiciones' },
      { nombre: 'Erik H. Erikson', autorId: 'erikson', nota: 'Diálogo en torno a la crisis de identidad juvenil' }
    ],
    influencioA: [
      { nombre: 'Psicología del Desarrollo: Adolescencia en la UBA', nota: 'Referente indiscutido de la clínica no patologizante de adolescentes' }
    ]
  },
  {
    id: 'siquier-de-ocampo',
    nombre: 'María Luisa Siquier de Ocampo',
    apellidoCorto: 'Siquier de Ocampo',
    matchKeys: ['siquier de ocampo', 'siquier', 'ocampo', 'garcia arzeno', 'grassano'],
    materiaIdsExtra: [
      'exploracion-diagnostico-2',
      'exploracion-diagnostico-1',
      'psicodiagnostico-rorschach',
      'clinica-ninos-adolescentes'
    ],
    fechas: 'Siglo XX – 2019',
    origen: 'Buenos Aires, Argentina · Barcelona, España',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicóloga y psicoanalista argentina ("Pichona" Siquier), Directora de la Carrera de Psicología UBA en 1973 y coautora junto a M. E. García Arzeno y E. Grassano del clásico "Las técnicas proyectivas y el proceso psicodiagnóstico".',
    biografia:
      'Licenciada en Psicología en 1961, discípula de Arminda Aberastury y Enrique Pichon-Rivière, María Luisa Siquier de Ocampo fue profesora de la UBA desde 1966 y asumió como Directora de la Carrera de Psicología en 1973 antes de verse forzada al exilio tras el golpe de 1976 (radicándose en Barcelona).\n\nJunto a María Esther García Arzeno y Elsa Grassano revolucionó la enseñanza de Exploración y Diagnóstico Módulo II (Proyectivas) en la UBA: sacó al psicólogo del papel de mero "toma-tests" subordinado para convertir el psicodiagnóstico en un proceso clínico-vincular completo, con encuadre, hipótesis dinámicas y entrevista de devolución.',
    principalesAportes: [
      'Concepción del psicodiagnóstico como un "proceso clínico vincular" con cuatro momentos estructurados: primer contacto/entrevista inicial, administración de batería proyectiva, devolución y elaboración del informe.',
      'Revalorización de la "entrevista de devolución de información" como intervención clínica ética y terapéutica orientada a restituirle al paciente (y a los padres en niños) una imagen integrada de sí.',
      'Integración de la teoría psicoanalítica (especialmente kleiniana) en la lectura de técnicas proyectivas como el Cuestionario Desiderativo, el TRO, el CAT, la Hora de Juego y los tests gráficos.',
      'Defensa de la autonomía clínica e identidad profesional del psicólogo frente a pedidos mecánicos de terceros.'
    ],
    conceptosClave: [
      {
        termino: 'Proceso psicodiagnóstico',
        explicacion:
          'Situación bipersonal de duración limitada con encuadre claro orientada a lograr una descripción y comprensión profunda de la personalidad total del consultante.'
      },
      {
        termino: 'Entrevista de devolución',
        explicacion:
          'Comunicación verbal discriminada y dosificada de los resultados del proceso al examinado, con valor ético y potencial efecto de insight.'
      },
      {
        termino: 'Batería proyectiva y Recurrencias/Convergencias',
        explicacion:
          'Nunca se interpreta un indicador aislado: las hipótesis diagnósticas se validan cruzando recurrencias y convergencias a lo largo de toda la batería y la entrevista.'
      },
      {
        termino: 'Crítica al "toma-tests"',
        explicacion:
          'El psicodiagnosticador no es un técnico auxiliar que entrega rótulos, sino un clínico que interpreta dinámicas transferenciales, defensas y recursos yoicos.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Las técnicas proyectivas y el proceso psicodiagnóstico (con M. E. García Arzeno y E. Grassano)',
        año: '1974',
        resumen: 'Biblia indiscutida de Módulo II (Proyectivas) en Psicología UBA y en toda Iberoamérica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Arminda Aberastury', autorId: 'aberastury', nota: 'Maestra directa en clínica de niños y hora de juego diagnóstica' },
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Mirada vincular y formación psicoanalítica en Buenos Aires' },
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Lectura psicodinámica de defensas, ansiedades y relaciones de objeto' },
      { nombre: 'Hermann Rorschach', autorId: 'rorschach', nota: 'Tradición clínica de las técnicas proyectivas' }
    ],
    influencioA: [
      { nombre: 'Generaciones de psicodiagnosticadores de la UBA', nota: 'Marco rector de Exploración y Diagnóstico Psicológico Módulo II' }
    ]
  },
  {
    id: 'michel-farina',
    nombre: 'Juan Jorge Michel Fariña',
    apellidoCorto: 'Michel Fariña',
    matchKeys: ['michel farina', 'farina', 'juan jorge michel farina', 'juan jose michel farina'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'cine-subjetividad-intervenciones',
      'derechos-subjetividad-intervenciones-etico-clinicas',
      'bioetica-instituciones-salud'
    ],
    fechas: 'Contemporáneo',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicólogo, doctor UBA e investigador, Profesor Titular Regular de Psicología, Ética y Derechos Humanos (UBA) y cofundador del Movimiento Solidario de Salud Mental (1982). Pionero del método clínico-analítico de "Ética y Cine".',
    biografia:
      'Doctor en Psicología por la UBA y formado en posgrado en Francia, Juan Jorge Michel Fariña es uno de los grandes referentes de la enseñanza de la Ética y los Derechos Humanos en la Facultad de Psicología de la UBA. En 1982 cofundó junto a Fernando Ulloa y Eduardo "Tato" Pavlovsky el Movimiento Solidario de Salud Mental (MSSM), brindando asistencia psicológica a víctimas del terrorismo de Estado.\n\nA través de su cátedra, el portal elSigma y el proyecto "Ética y Cine", renovó la pedagogía universitaria articulando psicoanálisis, bioética, tragedia griega y lectura clínica de películas y series para pensar dilemas subjetivos contemporáneos.',
    principalesAportes: [
      'Formulación del método clínico-analítico de "Ética y Cine": uso de películas y series como vía regia para analizar encrucijadas éticas, responsabilidad subjetiva y derechos humanos.',
      'Diferenciación entre el "campo normativo-deontológico" (códigos, leyes y deberes profesionales) y la "dimensión clínica-singular" de la ética (la decisión del sujeto allí donde la norma no alcanza).',
      'Articulación del "triple movimiento de la ética contemporánea": el sujeto frente a la ley universal, la singularidad en situación y el suplemento que excede lo calculable.',
      'Trabajo histórico en Derechos Humanos, bioética y memoria (cofundador del Movimiento Solidario de Salud Mental y referente de la Red UNESCO de Bioética).'
    ],
    conceptosClave: [
      {
        termino: 'Doble movimiento: Deontología y Clínica',
        explicacion:
          'Conocer los códigos y leyes (secreto profesional, consentimiento informado) es indispensable, pero la ética genuina comienza cuando dos deberes entran en conflicto en un caso singular.'
      },
      {
        termino: 'Ética y Cine',
        explicacion:
          'Dispositivo académico y clínico que analiza obras cinematográficas (desde tragedias modernas hasta series como Black Mirror) para interrogar la responsabilidad subjetiva.'
      },
      {
        termino: 'Responsabilidad subjetiva',
        explicacion:
          'En diálogo con Freud, Lacan y el caso Milgram, distingue la culpa neurótica o la obediencia debida de la posición ética que responde por sus actos y consecuencias.'
      },
      {
        termino: 'Horizonte en quiebra',
        explicacion:
          'Diagnóstico de la crisis contemporánea de los grandes relatos morales, que obliga a repensar la ética sin garantías absolutas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Ética: un horizonte en quiebra',
        año: '1999',
        resumen: 'Texto central de la cátedra de Ética UBA sobre subjetividad moral y responsabilidad.'
      },
      {
        titulo: 'Ética y Cine (con Carlos Gutiérrez)',
        año: '1999',
        resumen: 'Obra pionera en la lectura ético-clínica de películas en la formación psicológica.'
      },
      {
        titulo: '(Bio)ética y cine: tragedia griega y acontecimiento del cuerpo (con J. H. Solbakk)',
        año: '2012',
        resumen: 'Cruza tragedia antigua, bioética contemporánea y cine.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Psicoanálisis y malestar en la cultura' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'La ética del psicoanálisis (Seminario 7) y posición del sujeto' },
      { nombre: 'Fernando Ulloa', autorId: 'ulloa', nota: 'Compañero fundador del Movimiento Solidario de Salud Mental (MSSM)' },
      { nombre: 'Stanley Milgram', autorId: 'milgram', nota: 'Lectura crítica de la obediencia a la autoridad en clave ética' }
    ],
    influencioA: [
      { nombre: 'Enseñanza de Ética, DD.HH. y Bioética en la UBA', nota: 'Referente de cátedra, Ética y Cine Journal y formación en derechos humanos' }
    ]
  },
  {
    id: 'korman',
    nombre: 'Víctor Korman',
    apellidoCorto: 'Korman',
    matchKeys: ['korman', 'victor korman'],
    materiaIdsExtra: [
      'clinica-toxicomanias',
      'clinica-adicciones-interdisciplinario',
      'adicciones-abordaje-clinico-comunitario',
      'psicoanalisis-francesa-1',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: 'Contemporáneo',
    origen: 'Buenos Aires, Argentina · Barcelona, España',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psiquiatra y psicoanalista argentino radicado en Barcelona, formado en el mítico Servicio del Hospital Evita de Lanús y cercano a Oscar Masotta. Autor de "Y antes de la droga, ¿qué?", "El oficio de analista" y 10 tomos sobre identificación y transmisión intergeneracional.',
    biografia:
      'Recibido de médico en la UBA en 1968, Víctor Korman se formó en el histórico Servicio de Psicopatología del Hospital Evita de Lanús (1967–1977) y participó de los primeros grupos lacanianos de Buenos Aires en diálogo con Oscar Masotta. Exiliado durante la dictadura, continuó su formación en París y se radicó en Barcelona en 1977.\n\nSu libro "Y antes de la droga, ¿qué?" es referencia obligada en la clínica psicoanalítica de las adicciones y la estructuración subjetiva, y su obra monumental "Estudios Psicoanalíticos" (10 tomos) recorre las teorías de la identificación en Freud, Klein y Lacan para formular su propia tesis sobre la transmisión psíquica intergeneracional.',
    principalesAportes: [
      'Abordaje psicoanalítico de las toxicomanías ("Y antes de la droga, ¿qué?"): desplaza la mirada de la sustancia hacia la estructuración previa del sujeto, el malestar y la función que cumple el tóxico.',
      'Investigación monumental sobre la "identificación" en Freud, Melanie Klein y Jacques Lacan (9 tomos) coronada por su propia teorización de la "transmisión psíquica intergeneracional inconsciente" (tomo 10).',
      'Reflexión clínica sobre "el oficio de analista" como práctica artesanal, rigurosa y ética en el espacio psicoanalítico.',
      'Ensayos sobre exilio, migración, identidad, racismo y malestares subjetivos contemporáneos.'
    ],
    conceptosClave: [
      {
        termino: 'Estructuración del sujeto y Toxicomanía',
        explicacion:
          'Antes de preguntar por la droga como objeto químico, la clínica interroga la historia identificatoria, el lazo con el Otro y la función subjetiva del consumo.'
      },
      {
        termino: 'Transmisión psíquica intergeneracional',
        explicacion:
          'Modo en que significantes, ideales, traumas no simbolizados y mandatos inconscientes se transmiten a través de las generaciones.'
      },
      {
        termino: 'El oficio de analista',
        explicacion:
          'Metáfora artesanal de la clínica: rigor teórico articulado con la singularidad irrepetible de cada encuentro analítico.'
      },
      {
        termino: 'Trencadís y Espacio psicoanalítico',
        explicacion:
          'Inspirado en el mosaico catalán de fragmentos, piensa el trabajo analítico como recomposición singular de restos identificatorios y traumas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Y antes de la droga, ¿qué? Una introducción a la teoría psicoanalítica de la estructuración del sujeto',
        año: '1995',
        resumen: 'Clásico sobre estructuración subjetiva, clínica de las adicciones e identificaciones.'
      },
      {
        titulo: 'El oficio de analista',
        año: '1996',
        resumen: 'Reflexiones clínicas y técnicas sobre la posición, el encuadre y la ética del psicoanalista.'
      },
      {
        titulo: 'Estudios Psicoanalíticos (10 volúmenes)',
        año: '2016–2023',
        resumen: 'Obra cumbre sobre la identificación en Freud, Klein y Lacan y la transmisión intergeneracional.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Teoría de las identificaciones y estructuración psíquica' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Clínica estructural, significante e identificación simbólica' },
      { nombre: 'Oscar Masotta', autorId: 'masotta', nota: 'Primeros grupos lacanianos de Buenos Aires en los años 70' }
    ],
    influencioA: [
      { nombre: 'Clínica psicoanalítica de las adicciones e instituciones en Argentina y España', nota: 'Lectura clave en Toxicomanías y Clínica Psicoanalítica' }
    ]
  },
  {
    id: 'elida-fernandez',
    nombre: 'Élida Fernández',
    apellidoCorto: 'Élida Fernández',
    matchKeys: ['elida fernandez', 'elida ester fernandez'],
    materiaIdsExtra: [
      'psicopatologia',
      'clinica-analitica-psicosis',
      'psico-clinica-psicoterapias-1',
      'clinica-instituciones-publicas-complejidad',
      'atencion-psicologica-hospital'
    ],
    fechas: 'Contemporánea',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicóloga UBA y psicoanalista argentina, ex residente e instructora del Hospital Borda y referente indiscutida de la clínica psicoanalítica de las psicosis y locuras en el hospital público. Autora de "Diagnosticar las psicosis" y "Algo es posible".',
    biografia:
      'Licenciada en Psicología por la Universidad de Buenos Aires, Élida Ester Fernández realizó su residencia clínica en el Hospital Borda (1970–1973) y se desempeñó durante décadas como instructora, docente y supervisora de residencias en hospitales públicos emblemáticos (Borda, Tobar García, Alvear y Centro Ameghino).\n\nSus libros combinan el rigor del psicoanálisis freudiano y lacaniano con la trinchera real del hospital público argentino: rechaza toda romantización idealista del delirio y apuesta a la inventiva del analista para recortar el enorme sufrimiento de la psicosis ("Algo es posible").',
    principalesAportes: [
      'Sistematización clínica y didáctica del diagnóstico diferencial de las psicosis en "Diagnosticar las psicosis", muy consultado por estudiantes y residentes de la UBA.',
      'Defensa de una clínica hospitalaria inventiva y despojada de "superyó analítico": con las psicosis y locuras graves siempre "algo es posible" para alojar y aliviar el padecimiento.',
      'Crítica frontal a las lecturas idealistas que romantizan el delirio o la locura, recordando el inmenso dolor psíquico que conlleva la psicosis.',
      'Formación y supervisión de innumerables camadas de residentes de salud mental en hospitales públicos de Buenos Aires y todo el país.'
    ],
    conceptosClave: [
      {
        termino: 'Diagnosticar las psicosis',
        explicacion:
          'El diagnóstico estructural no busca etiquetar sino orientar la dirección de la cura, escuchar los fenómenos elementales y evitar intervenciones iatrogénicas.'
      },
      {
        termino: 'Algo es posible',
        explicacion:
          'Posición ética y clínica frente a la gravedad psicótica: inventar dispositivos, bordes y maniobras transferenciales que recorten el sufrimiento y sostengan un lazo.'
      },
      {
        termino: 'El psicoanálisis en el hospital público',
        explicacion:
          'El trabajo con la urgencia y la locura exige revisar los encuadres clásicos de la neurosis y articular el psicoanálisis con el equipo interdisciplinario.'
      },
      {
        termino: 'Las psicosis y sus exilios',
        explicacion:
          'Indaga el desamparo, la exclusión institucional y los modos singulares de volver a alojarse en algún lazo social.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Diagnosticar las psicosis',
        año: '1999 (múltiples ediciones)',
        resumen: 'Manual clínico de referencia para el diagnóstico diferencial y el trabajo con estructuras psicóticas.'
      },
      {
        titulo: 'Algo es posible: clínica psicoanalítica con locuras y psicosis',
        año: '2005',
        resumen: 'Desarrolla intervenciones posibles e inventiva analítica frente a cuadros graves.'
      },
      {
        titulo: 'Las psicosis y sus exilios',
        año: '2007',
        resumen: 'Reflexiones clínicas sobre sufrimiento psicótico, bordes y dispositivos hospitalarios.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Teoría del delirio como intento de curación y clínica diferencial' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Clínica estructural de las psicosis y posición del analista' }
    ],
    influencioA: [
      { nombre: 'Residencias de Salud Mental y Psicopatología UBA', nota: 'Referente directa de clínica hospitalaria de las psicosis en Argentina' }
    ]
  },
  {
    id: 'galende',
    nombre: 'Emiliano Galende',
    apellidoCorto: 'Galende',
    matchKeys: ['galende', 'emiliano galende'],
    materiaIdsExtra: [
      'salud-publica-mental',
      'salud-mental-desinstitucionalizacion',
      'salud-colectiva-gestion-politicas',
      'psicofarmacologia',
      'etica-deontologia-ddhh'
    ],
    fechas: '1940 – 2025',
    origen: 'España · Rosario / Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psicoanalista, ex miembro de la FAP y fundador de la Maestría y Doctorado en Salud Mental Comunitaria (UNLa). Referente imprescindible de la desmanicomialización, la crítica a la medicalización y la Salud Mental en Argentina.',
    biografia:
      'Nacido en España en una familia republicana exiliada y graduado de médico en la Universidad Nacional de Rosario (1965), Emiliano Galende fue protagonista de la renovación crítica de la psiquiatría argentina en la Federación Argentina de Psiquiatras (FAP) y asesor de la OPS/OMS en atención comunitaria.\n\nEn 1996 fundó el área de Salud Mental Comunitaria de la Universidad Nacional de Lanús (UNLa), formando a generaciones de profesionales de toda Iberoamérica. Su obra "Psicoanálisis y salud mental" es lectura obligatoria en Salud Pública y Salud Mental en la UBA y uno de los cimientos intelectuales de la Ley Nacional de Salud Mental (26.657).',
    principalesAportes: [
      'Crítica epistemológica y política de la "razón psiquiátrica" y del modelo manicomial en "Psicoanálisis y salud mental" (1990), articulando psicoanálisis, historia y salud colectiva.',
      'Impulso teórico e institucional a la Salud Mental Comunitaria y la desmanicomialización en Argentina en diálogo con Franco Basaglia y la reforma italiana.',
      'Denuncia documentada de la medicalización de la vida cotidiana y del complejo médico-industrial farmacéutico ("Psicofármacos y salud mental: la ilusión de no ser", 2008).',
      'Articulación del sufrimiento mental con los derechos humanos y el marco legal ("El sufrimiento mental: el poder, la ley y los derechos", junto a Alfredo Kraut).'
    ],
    conceptosClave: [
      {
        termino: 'Crítica de la razón psiquiátrica',
        explicacion:
          'Desmonta el modelo positivista-biologicista que reduce el padecimiento psíquico a una avería orgánica desconectada de la subjetividad, la historia y el lazo social.'
      },
      {
        termino: 'Salud Mental Comunitaria y Desmanicomialización',
        explicacion:
          'Reemplazo progresivo del asilo psiquiátrico por dispositivos territoriales, interdisciplinarios y participativos que restituyan ciudadanía y derechos.'
      },
      {
        termino: 'Medicalización de la vida ("La ilusión de no ser")',
        explicacion:
          'Expansión del mercado psicofarmacológico que promete suprimir químicamente el malestar existencial, el duelo o el conflicto subjetivo.'
      },
      {
        termino: 'Subjetividad y Derechos',
        explicacion:
          'La persona con padecimiento mental es sujeto de derechos y palabra, nunca un objeto pasivo de tutela o encierro.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicoanálisis y Salud Mental: para una crítica de la razón psiquiátrica',
        año: '1990',
        resumen: 'Clásico obligatorio de Salud Pública y Salud Mental en la UBA.'
      },
      {
        titulo: 'Psicofármacos y Salud Mental: la ilusión de no ser',
        año: '2008',
        resumen: 'Crítica rigurosa al uso masivo de psicofármacos y la industria farmacéutica.'
      },
      {
        titulo: 'Conocimiento y prácticas de Salud Mental',
        año: '2015',
        resumen: 'Síntesis madura sobre epistemología, políticas públicas y mercantilización de la salud.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Psicoanálisis como herramienta crítica del positivismo psiquiátrico' },
      { nombre: 'Franco Basaglia', autorId: 'basaglia', nota: 'Psiquiatría democrática italiana y cierre de manicomios' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Genealogía del saber-poder psiquiátrico e instituciones de encierro' }
    ],
    influencioA: [
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Construcción compartida del campo de la Salud Mental y Derechos en Argentina' },
      { nombre: 'Martín De Lellis', autorId: 'de-lellis', nota: 'Políticas públicas de salud mental comunitaria en la UBA' }
    ]
  },
  {
    id: 'pavlovsky',
    nombre: 'Eduardo "Tato" Pavlovsky',
    apellidoCorto: 'Pavlovsky',
    matchKeys: ['pavlovsky', 'tato pavlovsky', 'eduardo pavlovsky'],
    materiaIdsExtra: [
      'teoria-tecnica-grupos',
      'psico-organizacional-institucional',
      'salud-publica-mental',
      'etica-deontologia-ddhh'
    ],
    fechas: '1933 – 2015',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psicoanalista, dramaturgo, actor y pionero del psicodrama psicoanalítico en Latinoamérica. Junto a Hernán Kesselman creó la "multiplicación dramática", revolucionando la clínica grupal y el diálogo con Deleuze y Guattari en la UBA.',
    biografia:
      'Médico formado en la UBA, miembro disidente de la APA (integrante del histórico grupo Plataforma en 1971) y referente del teatro argentino contemporáneo, Eduardo "Tato" Pavlovsky introdujo y reinventó el psicodrama de Jacob L. Moreno cruzándolo con el psicoanálisis, los grupos operativos y el pensamiento de Gilles Deleuze y Félix Guattari.\n\nCofundador del Movimiento Solidario de Salud Mental junto a Fernando Ulloa y Juan Jorge Michel Fariña, es autor imprescindible en Teoría y Técnica de Grupos y Psicología Institucional en la UBA por su invención clínica de la "multiplicación dramática".',
    principalesAportes: [
      'Creación junto a Hernán Kesselman de la "multiplicación dramática": técnica grupal que parte de una escena dramatizada para disparar múltiples resonancias escénicas y sentidos nuevos, rompiendo la interpretación única.',
      'Introducción y desarrollo del psicodrama psicoanalítico en Argentina y Latinoamérica, integrando cuerpo, acción, escena y palabra.',
      'Diálogo creativo entre la clínica grupal rioplatense y la filosofía de Gilles Deleuze y Félix Guattari (micropolítica, devenires, agenciamientos colectivos).',
      'Compromiso ético-político desde el grupo Plataforma, el exilio en Madrid y el Movimiento Solidario de Salud Mental (1982).'
    ],
    conceptosClave: [
      {
        termino: 'Multiplicación dramática',
        explicacion:
          'A partir de la escena de un protagonista, los demás integrantes del grupo improvisan breves escenas resonantes que despliegan multiplicidad de sentidos inconscientes y grupales.'
      },
      {
        termino: 'Psicodrama psicoanalítico',
        explicacion:
          'Articulación del dispositivo escénico y corporal del psicodrama con la escucha psicoanalítica de la transferencia y lo grupal.'
      },
      {
        termino: 'Escena temida del coordinador',
        explicacion:
          'Trabajo sobre las ansiedades, bloqueos y resonancias corporales del propio coordinador o terapeuta frente al grupo.'
      },
      {
        termino: 'Micropolítica grupal',
        explicacion:
          'El grupo no es solo suma de individuos sino usina de producción de subjetividad, afectos y líneas de fuga creativas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La multiplicación dramática (con Hernán Kesselman)',
        año: '1989',
        resumen: 'Texto clásico de Teoría y Técnica de Grupos sobre escena, resonancia y creación colectiva.'
      },
      {
        titulo: 'Psicodrama: cuándo y por qué dramatizar',
        año: '1970',
        resumen: 'Fundamentos clínicos y técnicos del psicodrama psicoanalítico en el Río de la Plata.'
      },
      {
        titulo: 'Lo grupal (colección dirigida con Juan Carlos De Brasi)',
        año: '1983–1993',
        resumen: 'Serie fundamental que reunió el pensamiento grupal e institucional argentino.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Tradición grupal rioplatense y clínica del vínculo' },
      { nombre: 'Gilles Deleuze', autorId: 'deleuze', nota: 'Multiplicidades, agenciamientos y filosofía junto a Félix Guattari' },
      { nombre: 'Jacob L. Moreno', nota: 'Creador original del psicodrama que Pavlovsky articula con el psicoanálisis' }
    ],
    influencioA: [
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Interlocución directa en el campo grupal y las lógicas colectivas en la UBA' },
      { nombre: 'Teoría y Técnica de Grupos en la UBA', nota: 'Pilar del psicodrama y los dispositivos grupales contemporáneos' }
    ]
  }
];
