import type { AutorProfile } from './autores';

export const AUTORES_TANDA_9: AutorProfile[] = [
  // ======================== ÉTICA, FILOSOFÍA Y ALTERIDAD ========================
  {
    id: 'arendt',
    nombre: 'Hannah Arendt',
    apellidoCorto: 'Arendt',
    matchKeys: ['arendt', 'hannah arendt'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'psico-social',
      'psico-organizacional-institucional',
      'psico-trabajo-prof',
      'problemas-filosoficos'
    ],
    fechas: '1906 – 1975',
    origen: 'Hannover, Alemania · París · Nueva York, Estados Unidos',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofa y teórica política alemana-estadounidense, discípula de Heidegger y Jaspers. Acuñó el célebre concepto de "banalidad del mal" (en el juicio a Eichmann), analizó los totalitarismos y distinguió labor, trabajo y acción en "La condición humana". Clave en Ética, DD.HH. y Psicología Social UBA.',
    biografia:
      'Formada en filosofía con Martin Heidegger y Karl Jaspers en Alemania y exiliada por el nazismo primero en Francia y luego en Estados Unidos, Hannah Arendt se convirtió en una de las pensadoras políticas y éticas más lúcidas del siglo XX.\n\nEn Psicología UBA es referencia obligada en Ética, Deontología y Derechos Humanos y en Psicología Social (en diálogo directo con Stanley Milgram y Theodor Adorno): al cubrir en 1961 el juicio a Adolf Eichmann en Jerusalén descubrió que los peores crímenes burocráticos no requerían monstruos sádicos, sino funcionarios "terriblemente normales" que habían renunciado a pensar y a juzgar por sí mismos. También su distinción entre labor, trabajo y acción nutre Psicología del Trabajo e Institucional.',
    principalesAportes: [
      'Concepto de "banalidad del mal" ("Eichmann en Jerusalén", 1963): el mal radical puede perpetrarse desde la obediencia burocrática irreflexiva y la incapacidad de ponerse en el lugar del otro —eje central en Ética y DD.HH. y diálogo directo con los experimentos de obediencia de Milgram.',
      'Análisis de "Los orígenes del totalitarismo" (1951): cómo los regímenes totalitarios destruyen la esfera pública, fabrican el aislamiento masivo y convierten a los seres humanos en "superfluos", formulando el "derecho a tener derechos".',
      'Cartografía de la "vita activa" en "La condición humana" (1958): diferencia la "labor" (reproducción biológica), el "trabajo" (fabricación de un mundo duradero) y la "acción" (palabra y política en pluralidad con otros).',
      'Reivindicación del "pensar" y del "juicio reflexivo" (retomando a Kant) como antídoto ético frente a los clichés, los automatismos institucionales y la obediencia ciega.'
    ],
    conceptosClave: [
      {
        termino: 'Banalidad del mal',
        explicacion:
          'No significa que el mal sea trivial, sino que puede ser ejecutado por personas grises que cumplen órdenes y protocolos sin ejercer el pensamiento crítico ni la responsabilidad moral.'
      },
      {
        termino: 'Derecho a tener derechos',
        explicacion:
          'Fórmula clave en Derechos Humanos: los derechos no se garantizan en abstracto, sino mediante la pertenencia a una comunidad política que reconozca la voz y dignidad de cada persona.'
      },
      {
        termino: 'Labor, Trabajo y Acción (Vita activa)',
        explicacion:
          'Tres dimensiones distintas de la actividad humana: sobrevivir (labor), fabricar objetos/instituciones (trabajo) y crear algo nuevo mediante la palabra compartida entre iguales diferentes (acción).'
      },
      {
        termino: 'Natalidad y Pluralidad',
        explicacion:
          'Cada ser humano que llega al mundo abre la posibilidad de un comienzo imprevisto; la vida ética y política existe precisamente porque "los hombres, y no el Hombre, habitan la tierra".'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Eichmann en Jerusalén: Un estudio sobre la banalidad del mal',
        año: '1963',
        resumen: 'Texto indispensable en Ética, DD.HH. y Psicología Social sobre obediencia, burocracia y responsabilidad subjetiva.'
      },
      {
        titulo: 'La condición humana',
        año: '1958',
        resumen: 'Desarrolla la distinción entre labor, trabajo y acción, esfera pública/privada y pluralidad.'
      },
      {
        titulo: 'Los orígenes del totalitarismo',
        año: '1951',
        resumen: 'Estudio monumental sobre terror totalitario, masas aisladas y el derecho a tener derechos.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Maestro, director de tesis y amigo entrañable en filosofía de la existencia y culpa moral' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Formación fenomenológica inicial luego tensionada desde la pluralidad política' },
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Facultad de juzgar ("mentalidad ampliada") para pensar desde el lugar de los otros' }
    ],
    influencioA: [
      { nombre: 'Giorgio Agamben', autorId: 'agamben', nota: 'Análisis del campo, la nuda vida y los refugiados a partir de "Los orígenes del totalitarismo"' },
      { nombre: 'Zygmunt Bauman', autorId: 'bauman', nota: 'Burocracia moderna, racionalidad instrumental y "Modernidad y Holocausto"' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Ética de la cohabitación no elegida, pluralidad y derechos humanos' },
      { nombre: 'Ética y DD.HH. en Psicología UBA', nota: 'Referente clave sobre responsabilidad moral, obediencia institucional y memoria' }
    ]
  },
  {
    id: 'levinas',
    nombre: 'Emmanuel Levinas',
    apellidoCorto: 'Levinas',
    matchKeys: ['levinas', 'emmanuel levinas'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'problemas-filosoficos',
      'psico-fenomenologica-existencial',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: '1906 – 1995',
    origen: 'Kaunas, Lituania · Estrasburgo · París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo franco-lituano, introductor de la fenomenología en Francia y referente central de la ética contemporánea. Postuló la "ética como filosofía primera", el encuentro con el "Rostro del Otro" y la responsabilidad infinita ante la alteridad. Citado en Ética, Deontología y DD.HH. UBA.',
    biografia:
      'Formado en Friburgo con Edmund Husserl y Martin Heidegger —a quienes tradujo y dio a conocer en Francia, influyendo decisivamente en Sartre y Merleau-Ponty—, Emmanuel Levinas sobrevivió como prisionero de guerra al Holocausto en el que fue asesinada casi toda su familia en Lituania. Esa herida marcó toda su filosofía: denunció que la ontología occidental había intentado siempre reducir al "Otro" a lo "Mismo" (conocerlo, poseerlo, clasificarlo).\n\nEn Psicología UBA es un pilar en Ética, Deontología y Derechos Humanos (especialmente en las éticas del cuidado, el reconocimiento y la alteridad junto a Paul Ricoeur y Jacques Derrida) y una brújula profunda para la escucha clínica: el paciente o el sujeto vulnerado nunca se agota en un diagnóstico ni en una categoría, porque su "Rostro" nos interpela éticamente antes de cualquier teoría.',
    principalesAportes: [
      'Inversión radical de la filosofía occidental: "la ética es filosofía primera" —antes de conocer o clasificar al otro (ontología), somos interpelados a responder por él.',
      'Epifanía del "Rostro del Otro" ("Totalidad e infinito", 1961): el rostro no es meramente una cara física, sino la presencia vulnerable e irreductible de otra persona que desborda toda imagen o etiqueta y pronuncia el mandato ético primordial: "No matarás".',
      'Crítica a la "Totalidad" y apertura al "Infinito": todo saber cerrado o dispositivo institucional que pretende subsumir a la persona bajo un concepto comete violencia; la relación ética respeta la alteridad absoluta.',
      'Ética de la responsabilidad asimétrica ("De otro modo que ser", 1974): somos responsables del otro antes incluso de elegirlo, en una hospitalidad radical que inspiró directamente a Derrida, Ricoeur y la bioética de la vulnerabilidad.'
    ],
    conceptosClave: [
      {
        termino: 'El Rostro del Otro',
        explicacion:
          'Modo en que el otro se presenta más allá de cualquier representación o diagnóstico que yo haga de él: expresa a la vez fragilidad extrema y una exigencia ética ineludible.'
      },
      {
        termino: 'Ética como filosofía primera',
        explicacion:
          'Contra el primado del conocimiento y del yo soberano, el sujeto humano nace en la respuesta responsable hacia otro ser humano.'
      },
      {
        termino: 'Lo Mismo vs. el Otro (Totalidad e Infinito)',
        explicacion:
          'Lo Mismo busca asimilar, controlar y encasillar lo diferente; el Infinito se abre cuando acogemos al Otro sin reducirlo a nuestros propios esquemas (clave para pensar los límites del etiquetamiento diagnóstico).'
      },
      {
        termino: 'Responsabilidad asimétrica y el Tercero',
        explicacion:
          'Ante el Otro soy infinitamente responsable sin esperar reciprocidad; pero al aparecer "el Tercero" (los demás otros), nace la necesidad de la justicia, las leyes y las instituciones.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Totalidad e infinito: Ensayo sobre la exterioridad',
        año: '1961',
        resumen: 'Obra cumbre sobre el Rostro, la alteridad irreductible y la crítica a la violencia totalizadora.'
      },
      {
        titulo: 'Ética e infinito',
        año: '1982',
        resumen: 'Diálogos muy claros y accesibles que sintetizan su pensamiento sobre el rostro, la responsabilidad y el otro.'
      },
      {
        titulo: 'De otro modo que ser o más allá de la esencia',
        año: '1974',
        resumen: 'Profundiza la vulnerabilidad, la proximidad, el decir/lo dicho y la subjetividad como responsabilidad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Método fenomenológico e intencionalidad, luego desbordados por la alteridad' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Ontología fundamental frente a la cual Levinas opone la primacía de la ética' }
    ],
    influencioA: [
      { nombre: 'Jacques Derrida', autorId: 'derrida', nota: 'Ética de la hospitalidad, la huella del otro y el diálogo en "Violencia y metafísica"' },
      { nombre: 'Paul Ricoeur', autorId: 'ricoeur', nota: 'Diálogo ético sobre alteridad, reconocimiento y "Sí mismo como otro"' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Precariedad, rostro y ética de la no violencia en "Vida precaria"' },
      { nombre: 'Jean-Paul Sartre', autorId: 'sartre', nota: 'Introdujo a Husserl y Heidegger en Francia, abriendo el camino al existencialismo francés' }
    ]
  },
  {
    id: 'rawls',
    nombre: 'John Rawls',
    apellidoCorto: 'Rawls',
    matchKeys: ['rawls', 'john rawls'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'salud-publica-mental',
      'problemas-filosoficos',
      'psico-juridica'
    ],
    fechas: '1921 – 2002',
    origen: 'Baltimore · Harvard, Estados Unidos',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo moral y político estadounidense, autor de "Teoría de la justicia" (1971). Reformuló el contractualismo kantiano con la "justicia como equidad", el "velo de ignorancia" y el "principio de diferencia", pilares en Ética, Bioética, Salud Pública y Derechos Humanos.',
    biografia:
      'Profesor durante décadas en la Universidad de Harvard, John Rawls revitalizó la filosofía moral y política contemporánea al publicar en 1971 "Teoría de la justicia", una crítica frontal al utilitarismo (sacrificar derechos de minorías en nombre del "mayor bienestar general") desde una ética de inspiración kantiana.\n\nEn Psicología UBA su marco es imprescindible en Ética, Deontología y Derechos Humanos, Bioética y Salud Pública: tanto para pensar la asignación justa de recursos en salud mental y el principio bioético de justicia (Beauchamp y Childress) como en su diálogo directo con el desarrollo moral de Lawrence Kohlberg y la ética del discurso de Jürgen Habermas.',
    principalesAportes: [
      'Concepción de la "justicia como equidad" (justice as fairness): la justicia es la primera virtud de las instituciones sociales, y ningún cálculo utilitario de eficiencia puede atropellar los derechos básicos de una persona.',
      'Experimento mental de la "posición original" y el "velo de ignorancia": si diseñáramos las reglas de la sociedad sin saber qué lugar ocuparíamos (clase, género, salud, discapacidad, talento), elegiríamos proteger siempre a los más vulnerables.',
      'Dos principios de justicia: 1) iguales libertades básicas para todos; 2) las desigualdades sociales y económicas solo son justas si operan en beneficio de los miembros menos aventajados ("principio de diferencia") con igualdad equitativa de oportunidades.',
      '"Equilibrio reflexivo" y "consenso entrecruzado" ("Liberalismo político", 1993): cómo construir principios públicos compartidos de justicia y derechos humanos en sociedades plurales con distintas creencias morales y religiosas.'
    ],
    conceptosClave: [
      {
        termino: 'Velo de ignorancia y Posición original',
        explicacion:
          'Dispositivo hipotético de imparcialidad: obliga a decidir normas justas desconociendo la propia posición social, riqueza, salud o capacidades —clave para debatir dilemas éticos y de salud pública.'
      },
      {
        termino: 'Principio de diferencia',
        explicacion:
          'Criterio distributivo equitativo: una política o institución solo es justa si mejora la situación de quienes están en peor posición (fundamento ético de la equidad en salud y educación).'
      },
      {
        termino: 'Crítica al utilitarismo',
        explicacion:
          'Contra la lógica de "maximizar la suma total de bienestar", Rawls defiende la inviolabilidad de cada persona individual, que ni siquiera el bienestar de la mayoría puede vulnerar.'
      },
      {
        termino: 'Equilibrio reflexivo',
        explicacion:
          'Método de deliberación ética —muy usado en bioética— que ajusta mutuamente nuestros principios generales y nuestros juicios ponderados ante casos concretos.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Teoría de la justicia',
        año: '1971',
        resumen: 'Obra clásica del siglo XX sobre justicia como equidad, velo de ignorancia y principio de diferencia.'
      },
      {
        titulo: 'Liberalismo político',
        año: '1993',
        resumen: 'Aborda el pluralismo razonable, la razón pública y el consenso entrecruzado en democracias diversas.'
      },
      {
        titulo: 'La justicia como equidad: Una reformulación',
        año: '2001',
        resumen: 'Síntesis pedagógica y madura de toda su teoría de la justicia.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Constructivismo kantiano, autonomía, dignidad incondicional y rechazo al utilitarismo' }
    ],
    influencioA: [
      { nombre: 'Lawrence Kohlberg', autorId: 'kohlberg', nota: 'El Estadio 6 del desarrollo moral incorpora explícitamente la posición original y la reversibilidad rawlsiana' },
      { nombre: 'Jürgen Habermas', autorId: 'habermas', nota: 'Célebre debate filosófico sobre justicia política, democracia deliberativa y ética discursiva' },
      { nombre: 'Bioética y Salud Pública contemporánea', nota: 'Fundamento del principio de justicia distributiva y equidad en el acceso a la salud mental' }
    ]
  },

  // ======================== ESTRUCTURALISMO Y ANTROPOLOGÍA ========================
  {
    id: 'levi-strauss',
    nombre: 'Claude Lévi-Strauss',
    apellidoCorto: 'Lévi-Strauss',
    matchKeys: ['levi-strauss', 'lévi-strauss', 'claude levi-strauss'],
    materiaIdsExtra: [
      'psico-social',
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'teoria-tecnica-grupos',
      'historia-psico'
    ],
    fechas: '1908 – 2009',
    origen: 'Bruselas, Bélgica · París, Francia · Brasil',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Antropólogo francés fundador de la antropología estructural y pieza clave en el giro estructuralista de Jacques Lacan. Formuló la prohibición del incesto como pasaje de la naturaleza a la cultura, la "eficacia simbólica" y el inconsciente como estructura formal. Citado en Psicología Social UBA.',
    biografia:
      'Tras su decisivo trabajo de campo etnográfico en Brasil (relatado en "Tristes trópicos") y su exilio en Nueva York —donde conoció al lingüista Roman Jakobson—, Claude Lévi-Strauss trasladó el método de la lingüística estructural de Ferdinand de Saussure al estudio del parentesco, los mitos y el pensamiento humano.\n\nEn Psicología UBA es un puente fundamental entre Psicología Social (citado en el programa 2026) y Psicoanálisis: Escuela Francesa: Jacques Lacan tomó directamente de Lévi-Strauss la noción de "Orden Simbólico", la ley de prohibición del incesto como regla universal de intercambio que funda la cultura, el "significante flotante" y la comparación entre el chamanismo y la cura analítica en el célebre texto "La eficacia simbólica".',
    principalesAportes: [
      'La prohibición del incesto ("Las estructuras elementales del parentesco", 1949): única regla a la vez universal (como la naturaleza) y normativa (como la cultura), que funda el intercambio social y la exogamia —cimiento directo del complejo de Edipo y la Ley simbólica en Lacan.',
      'Concepto de "eficacia simbólica" (1949): comparando el canto de un chamán cuna ante un parto difícil con la cura psicoanalítica, muestra cómo el orden simbólico del lenguaje y el mito produce efectos reales sobre el cuerpo y el padecimiento.',
      'Concepción del "inconsciente estructural": a diferencia de un depósito individual de contenidos reprimidos, el inconsciente es una función simbólica vacía de contenido que impone leyes formales y binarias a la experiencia humana.',
      'Reivindicación del "pensamiento salvaje" (1962): las culturas llamadas "primitivas" no son prelógicas ni infantiles, sino que operan con una lógica concreta rigurosa ("bricolaje" intelectual), desmontando el etnocentrismo evolucionista.'
    ],
    conceptosClave: [
      {
        termino: 'Prohibición del incesto (Naturaleza → Cultura)',
        explicacion:
          'Bisagra estructural que instituye el orden humano: al prohibir la endogamia, obliga al intercambio de dones y alianzas entre grupos, fundando el lazo social y la Ley simbólica.'
      },
      {
        termino: 'Eficacia simbólica',
        explicacion:
          'Capacidad de las palabras, rituales y estructuras simbólicas para reorganizar un dolor innombrable y transformarlo en experiencia inteligible con efectos psíquicos y somáticos reales.'
      },
      {
        termino: 'Orden simbólico y Significante flotante',
        explicacion:
          'La cultura funciona como un sistema de relaciones simbólicas análogo al lenguaje donde el significante excede siempre al significado —influencia capital en el primer Lacan.'
      },
      {
        termino: 'Pensamiento salvaje y Bricolaje',
        explicacion:
          'Crítica radical al prejuicio colonial: el pensamiento mítico es tan lógico y sistemático como el científico, solo que construye sentido recombinando signos concretos disponibles.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Antropología estructural (incluye "La eficacia simbólica" y "El hechicero y su magia")',
        año: '1958',
        resumen: 'Compilación esencial sobre método estructural, eficacia simbólica, mito y comparación con el psicoanálisis.'
      },
      {
        titulo: 'Las estructuras elementales del parentesco',
        año: '1949',
        resumen: 'Clásico sobre la prohibición del incesto, la reciprocidad y el pasaje de la naturaleza a la cultura.'
      },
      {
        titulo: 'El pensamiento salvaje / Tristes trópicos',
        año: '1962 / 1955',
        resumen: 'Crítica al etnocentrismo, lógica del bricolaje y memoria etnográfica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Lingüística estructural (sistema de diferencias) aplicada al parentesco y los mitos' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Uno de sus "tres maestros" (junto a Marx y la geología): sentido latente detrás de lo manifiesto' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Orden Simbólico, ley del incesto, eficacia simbólica y estructura del lenguaje en el inconsciente' },
      { nombre: 'Roland Barthes', autorId: 'barthes', nota: 'Expansión del método estructuralista al análisis de los mitos modernos' },
      { nombre: 'Pierre Bourdieu', autorId: 'bourdieu', nota: 'Punto de partida estructuralista luego superado hacia la teoría de la práctica y el habitus' },
      { nombre: 'Jacques Derrida', autorId: 'derrida', nota: 'Lectura deconstructiva célebre de Lévi-Strauss en "La estructura, el signo y el juego"' }
    ]
  },

  // ======================== SOCIAL, GRUPOS, INSTITUCIONAL Y TRABAJO ========================
  {
    id: 'castoriadis',
    nombre: 'Cornelius Castoriadis',
    apellidoCorto: 'Castoriadis',
    matchKeys: ['castoriadis', 'cornelius castoriadis'],
    materiaIdsExtra: [
      'teoria-tecnica-grupos',
      'psico-organizacional-institucional',
      'psico-social',
      'etica-deontologia-ddhh',
      'psicoanalisis-francesa-1'
    ],
    fechas: '1922 – 1997',
    origen: 'Constantinopla · Atenas, Grecia · París, Francia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Filósofo, psicoanalista y pensador político greco-francés. Creador de la teoría del "imaginario social" (instituyente vs. instituido), la "imaginación radical" y el proyecto de autonomía. Referente ineludible en Teoría y Técnica de Grupos y Psicología Institucional UBA.',
    biografia:
      'Nacido en Estambul, criado en Atenas y radicado en París desde 1945 —donde cofundó el mítico colectivo político-filosófico "Socialismo o Barbarie" y ejerció como psicoanalista (tras su ruptura con Lacan y la fundación del Cuarto Grupo junto a Piera Aulagnier)—, Cornelius Castoriadis construyó una obra monumental que une psicoanálisis, filosofía política y teoría de las instituciones.\n\nEn Psicología UBA es uno de los pilares indiscutidos de Teoría y Técnica de Grupos y de Psicología Institucional (citado en los programas 2026 junto a Ana María Fernández, Lourau, Ulloa y Kaës): su teoría del "imaginario social instituyente" permite comprender cómo una sociedad crea sus propias significaciones, normas y subjetividades —y también cómo puede transformarlas colectivamente hacia la autonomía.',
    principalesAportes: [
      'Teoría del "imaginario social" ("La institución imaginaria de la sociedad", 1975): la sociedad no es un reflejo mecánico de la economía ni de la biología, sino creación histórica de "significaciones imaginarias sociales" que dan sentido a lo que una época considera real, válido o deseable.',
      'Tensión constitutiva entre "imaginario instituyente" (potencia creadora de nuevas formas y sentidos) e "imaginario instituido" (formas ya cristalizadas, leyes e instituciones que tienden a presentarse como inmutables).',
      'Articulación psique–sociedad ("mónada psíquica" y "sublimación"): la psique singular porta una "imaginación radical" irreductible, y mediante el proceso de socialización y sublimación internaliza las significaciones sociales sin quedar nunca completamente absorbida por ellas.',
      'Proyecto de "autonomía" vs. "heteronomía": una sociedad o sujeto es heterónomo cuando atribuye sus leyes a una fuente externa incuestionable (Dios, la Naturaleza, el Mercado, el Destino); es autónomo cuando se reconoce creador lúcido de sus propias normas —horizonte común de la democracia y el psicoanálisis.'
    ],
    conceptosClave: [
      {
        termino: 'Imaginario social (Instituyente vs. Instituido)',
        explicacion:
          'Lo instituido son las normas, roles y creencias cristalizadas; lo instituyente es la fuerza colectiva capaz de crear nuevas figuras de pensamiento y transformar las instituciones.'
      },
      {
        termino: 'Significaciones imaginarias sociales',
        explicacion:
          'Tramas de sentido compartidas (por ejemplo "familia", "locura", "éxito", "infancia", "ciudadano") que cohesionan a una sociedad y moldean el psiquismo de quienes la habitan.'
      },
      {
        termino: 'Autonomía vs. Heteronomía',
        explicacion:
          'Para Castoriadis, el fin del psicoanálisis y de la política democrática es el mismo: pasar de padecer leyes ajenas naturalizadas (heteronomía) a poder interrogarlas y crearlas conscientemente (autonomía).'
      },
      {
        termino: 'Imaginación radical y Mónada psíquica',
        explicacion:
          'Capacidad creadora ex nihilo de la psique humana de producir representaciones, afectos y deseos nuevos —rompiendo con el determinismo causal cerrado.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La institución imaginaria de la sociedad',
        año: '1975',
        resumen: 'Obra maestra citada en Grupos e Institucional UBA sobre imaginario social, psique, creación y autonomía.'
      },
      {
        titulo: 'Los dominios del hombre: Las encrucijadas del laberinto',
        año: '1986',
        resumen: 'Ensayos clave sobre democracia, psicoanálisis, autonomía y crisis de la subjetividad contemporánea.'
      },
      {
        titulo: 'El avance de la insignificancia',
        año: '1996',
        resumen: 'Diagnóstico filoso del conformismo, la crisis del sentido y el debilitamiento del proyecto de autonomía.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Metapsicología, sublimación y "donde ello era, yo debo advenir" releído como proyecto de autonomía' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Debate intenso sobre lo imaginario (que Castoriadis reivindica como creación radical, no como mero engaño especular)' }
    ],
    influencioA: [
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Imaginario social, mitos sociales y campo grupal en Psicología UBA' },
      { nombre: 'René Lourau', autorId: 'lourau', nota: 'Dialéctica instituido/instituyente en el Análisis Institucional' },
      { nombre: 'Piera Aulagnier', autorId: 'aulagnier', nota: 'Diálogo clínico y cofundación del Cuarto Grupo psicoanalítico en Francia' },
      { nombre: 'René Kaës', nota: 'Articulación entre institución, contrato narcisista y psiquismo grupal' }
    ]
  },
  {
    id: 'bauman',
    nombre: 'Zygmunt Bauman',
    apellidoCorto: 'Bauman',
    matchKeys: ['bauman', 'zygmunt bauman'],
    materiaIdsExtra: [
      'psicopatologia',
      'etica-deontologia-ddhh',
      'psico-trabajo-prof',
      'psico-social',
      'psico-desarrollo-adolescencia'
    ],
    fechas: '1925 – 2017',
    origen: 'Poznań, Polonia · Leeds, Reino Unido',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Sociólogo y filósofo polaco-británico creador de la metáfora de la "modernidad líquida". Analizó la fragilidad de los vínculos contemporáneos ("Amor líquido"), la precarización laboral y la relación entre burocracia y barbarie ("Modernidad y Holocausto"). Citado en Psicopatología, Ética y Trabajo UBA.',
    biografia:
      'Exiliado de Polonia en 1968 tras una purga antisemita y profesor emérito en la Universidad de Leeds, Zygmunt Bauman se convirtió en uno de los intérpretes más leídos de las transformaciones culturales y subjetivas del cambio de siglo.\n\nEn Psicología UBA aparece citado en tres materias troncales —Psicopatología, Ética y DD.HH., y Psicología del Trabajo— porque ofrece un diagnóstico claro de cómo el pasaje de la "modernidad sólida" (instituciones estables, empleos de por vida, lazos duraderos) a la "modernidad líquida" (precariedad, consumo instantáneo, vínculos descartables) reconfigura el malestar psíquico, las identidades juveniles y la ética contemporánea.',
    principalesAportes: [
      'Teoría de la "modernidad líquida" (2000): las instituciones, identidades y contratos sociales ya no conservan su forma durante mucho tiempo; se "derriten" más rápido de lo que tarda en construirse un proyecto de vida estable.',
      'Análisis de los lazos en "Amor líquido" (2003): los vínculos afectivos se vuelven ambivalentes —deseamos cercanía y seguridad, pero tememos el compromiso duradero— y quedan moldeados por la lógica del consumo y la "conexión" fácil de desconectar.',
      '"Modernidad y Holocausto" (1989): en diálogo con Hannah Arendt y Milgram, sostiene que el Holocausto no fue un retroceso "primitivo", sino un producto posible de la burocracia moderna, la división técnica del trabajo y la anestesia moral a distancia.',
      'Diagnóstico del trabajo y el consumo ("Trabajo, consumismo y nuevos pobres", 1998): pasaje de una sociedad de productores (ética del trabajo) a una sociedad de consumidores donde el excluido es vivido como "consumidor fallido".'
    ],
    conceptosClave: [
      {
        termino: 'Modernidad sólida vs. Modernidad líquida',
        explicacion:
          'Contraste entre la modernidad industrial de estructuras duraderas (fábrica, Estado, familia estable) y la era globalizada marcada por incertidumbre, flexibilidad extrema y responsabilidad individualizada.'
      },
      {
        termino: 'Amor líquido y Conexiones vs. Relaciones',
        explicacion:
          'Desplazamiento desde vínculos profundos que requieren tiempo y cuidado hacia "conexiones" reversibles y rápidas que prometen placer sin riesgo ni atadura.'
      },
      {
        termino: 'Modernidad y Holocausto (Adiaforización)',
        explicacion:
          'Mecanismo burocrático por el cual las acciones hacia otros seres humanos quedan declaradas "moralmente neutras" (meros trámites técnicos), silenciando la responsabilidad ética (citado en Ética UBA).'
      },
      {
        termino: 'Sociedad de consumidores y Vidas desperdiciadas',
        explicacion:
          'Cuando el valor de una persona se mide por su capacidad de consumir y renovarse, quienes quedan fuera del mercado laboral y de consumo sufren estigmatización y desamparo subjetivo.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Modernidad líquida',
        año: '2000',
        resumen: 'Obra emblemática sobre precariedad, tiempo, trabajo, comunidad e identidad fluida.'
      },
      {
        titulo: 'Modernidad y Holocausto',
        año: '1989',
        resumen: 'Clásico de Ética y Sociología sobre burocracia, obediencia (Milgram) y neutralización moral.'
      },
      {
        titulo: 'Amor líquido / Trabajo, consumismo y nuevos pobres',
        año: '2003 / 1998',
        resumen: 'Análisis clave de los vínculos contemporáneos y las transformaciones subjetivas del trabajo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Emmanuel Levinas', autorId: 'levinas', nota: 'Base de su "Ética posmoderna": responsabilidad moral incondicional frente al otro' },
      { nombre: 'Hannah Arendt', autorId: 'arendt', nota: 'Banalidad del mal y burocracia moderna en "Modernidad y Holocausto"' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Inversión de "El malestar en la cultura": hoy sobra libertad incierta y falta seguridad' }
    ],
    influencioA: [
      { nombre: 'Byung-Chul Han', autorId: 'byung-chul-han', nota: 'Continuidad crítica sobre vínculos efímeros, narcisismo digital y desgaste subjetivo' },
      { nombre: 'Clínica contemporánea y Psicología del Trabajo', nota: 'Lectura de las nuevas presentaciones del malestar, la ansiedad y la precariedad' }
    ]
  },
  {
    id: 'bourdieu',
    nombre: 'Pierre Bourdieu',
    apellidoCorto: 'Bourdieu',
    matchKeys: ['bourdieu', 'pierre bourdieu'],
    materiaIdsExtra: [
      'metodologia-inv',
      'psico-organizacional-institucional',
      'psico-juridica',
      'psico-social',
      'psico-educativa-prof'
    ],
    fechas: '1930 – 2002',
    origen: 'Denguin · París, Francia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Sociólogo francés de enorme gravitación en ciencias sociales y Psicología UBA (citado en Metodología, Institucional y Jurídica). Acuñó las nociones de "habitus", "campo", "capital cultural/simbólico" y "violencia simbólica", además de renovar la vigilancia epistemológica en "El oficio de sociólogo".',
    biografia:
      'Titular de la cátedra de Sociología en el Collège de France, Pierre Bourdieu construyó una teoría de la práctica ("constructivismo estructuralista") destinada a superar la falsa dicotomía entre el objetivismo determinista (las estructuras lo explican todo) y el subjetivismo voluntarista (el individuo elige en el vacío).\n\nEn Psicología UBA es citado en Metodología de la Investigación (por la "vigilancia epistemológica" y "El oficio de sociólogo" en línea con Gaston Bachelard), en Psicología Institucional, Jurídica y Educacional: sus conceptos de "habitus" (lo social hecho cuerpo), "violencia simbólica" y "reproducción escolar" son herramientas afiladísimas para analizar instituciones, escuelas, tribunales y desigualdades sin psicologizar problemas estructurales.',
    principalesAportes: [
      'Tríada conceptual "Habitus – Campo – Capital": las prácticas humanas surgen del encuentro entre el "habitus" (disposiciones duraderas incorporadas en la historia social) y el "campo" (espacio de juego con reglas y luchas por distintos capitales: económico, cultural, social y simbólico).',
      'Teoría de la "violencia simbólica" ("La dominación masculina", "La reproducción"): dominación suave e invisible que se ejerce con la complicidad inconsciente de quienes la padecen, porque internalizan los esquemas de percepción del propio dominador como "naturales".',
      'Epistemología reflexiva en "El oficio de sociólogo" (1968, con Chamboredon y Passeron): retomando a Bachelard, propone la "vigilancia epistemológica" y la ruptura con las prenociones del sentido común —lectura clave en Metodología UBA.',
      'Crítica a la "ilusión meritocrática" en educación ("Los herederos", "La reproducción"): la escuela suele consagrar como "dones" o "inteligencia natural" lo que en realidad es capital cultural heredado de clase (vital en Psicología Educacional).'
    ],
    conceptosClave: [
      {
        termino: 'Habitus',
        explicacion:
          '"Estructuras estructuradas predispuestas a funcionar como estructuras estructurantes": lo social hecho cuerpo, percepción y gusto, que orienta nuestras acciones sin necesidad de cálculo consciente.'
      },
      {
        termino: 'Campo y Capitales (Económico, Cultural, Social, Simbólico)',
        explicacion:
          'La sociedad se compone de campos relativamente autónomos (académico, jurídico, salud mental, artístico) donde los agentes disputan prestigio y poder según el capital acumulado.'
      },
      {
        termino: 'Violencia simbólica',
        explicacion:
          'Imposición de significaciones y jerarquías arbitrarias (de clase, género o saber experto) que son vividas como legítimas y evidentes incluso por quienes resultan subordinados.'
      },
      {
        termino: 'Vigilancia epistemológica',
        explicacion:
          'Exigencia metodológica de objetivar al propio investigador, su posición social y sus categorías para no proyectar prejuicios del sentido común sobre el objeto estudiado.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El oficio de sociólogo (con J.-C. Chamboredon y J.-C. Passeron)',
        año: '1968',
        resumen: 'Manual epistemológico clásico en Metodología UBA sobre ruptura, construcción del objeto y vigilancia epistemológica.'
      },
      {
        titulo: 'El sentido práctico / La distinción',
        año: '1980 / 1979',
        resumen: 'Desarrolla sistemáticamente el habitus, el campo, el gusto y el capital cultural.'
      },
      {
        titulo: 'La dominación masculina / La miseria del mundo',
        año: '1998 / 1993',
        resumen: 'Violencia simbólica de género y entrevistas en profundidad sobre el sufrimiento social contemporáneo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gaston Bachelard', autorId: 'bachelard', nota: 'Ruptura y vigilancia epistemológica en la construcción del objeto científico' },
      { nombre: 'Claude Lévi-Strauss', autorId: 'levi-strauss', nota: 'Estructuralismo inicial superado mediante la práctica histórica y el habitus' },
      { nombre: 'Maurice Merleau-Ponty', autorId: 'merleau-ponty', nota: 'Fenomenología del cuerpo vivido en la base del concepto de habitus' }
    ],
    influencioA: [
      { nombre: 'Psicología Educacional, Institucional y Jurídica UBA', nota: 'Crítica al fracaso escolar como déficit individual y análisis de violencia simbólica en instituciones' },
      { nombre: 'Metodología de la Investigación (UBA)', nota: 'Reflexividad del investigador y construcción teórica del dato' }
    ]
  },
  {
    id: 'guattari',
    nombre: 'Félix Guattari',
    apellidoCorto: 'Guattari',
    matchKeys: ['guattari', 'felix guattari', 'félix guattari'],
    materiaIdsExtra: [
      'teoria-tecnica-grupos',
      'psico-organizacional-institucional',
      'salud-publica-mental',
      'psico-social',
      'problemas-filosoficos'
    ],
    fechas: '1930 – 1992',
    origen: 'Villeneuve-les-Sablons · Clínica de La Borde · París, Francia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Psicoanalista, filósofo y activista francés de la Clínica de La Borde, figura clave de la psicoterapia institucional y coautor con Gilles Deleuze de "El Anti-Edipo" y "Mil mesetas". Acuñó "transversalidad", "grupo-sujeto vs. grupo-sometido" y "producción de subjetividad". Citado en Grupos e Institucional UBA.',
    biografia:
      'Formado en psicoanálisis con Jacques Lacan y trabajador clínico durante más de treinta años en la revolucionaria Clínica de La Borde junto a Jean Oury, Félix Guattari transformó desde la práctica concreta con pacientes psicóticos el modo de pensar los grupos, las instituciones manicomiales y la subjetividad.\n\nEn Psicología UBA es lectura fundamental en Teoría y Técnica de Grupos y en Psicología Institucional (citado en los programas 2026 junto a Deleuze, Castoriadis, Lourau y Ana María Fernández): mucho antes de su célebre alianza con Deleuze, introdujo el concepto de "transversalidad" para romper las jerarquías rígidas del hospital y diferenció los "grupos-sujeto" de los "grupos-sometidos", demostrando que la subjetividad no es algo puramente intrapsíquico sino una producción colectiva, maquínica y ecosófica.',
    principalesAportes: [
      'Concepto de "transversalidad" ("Psicoanálisis y transversalidad", 1972): coeficiente de apertura comunicacional de una institución que atraviesa tanto la verticalidad jerárquica (jefes/subordinados) como la horizontalidad estanca (cada sector encerrado en sí mismo).',
      'Distinción en Grupos entre "grupo-sujeto" (capaz de elucidar su propia ley, abrirse al afuera y crear sentidos) y "grupo-sometido" (encerrado en mandatos externos, burocratizado y temeroso del cambio).',
      'Cofundación del "esquizoanálisis" junto a Gilles Deleuze ("El Anti-Edipo", 1972; "Mil mesetas", 1980): crítica al reduccionismo familiarista ("papá-mamá-yo") para pensar el deseo como potencia productiva conectada al campo social y político.',
      '"Las tres ecologías" (1989) y "producción de subjetividad": propone la "ecosofía" articulando ecología ambiental, ecología social y ecología mental frente a la estandarización subjetiva del capitalismo mundial integrado.'
    ],
    conceptosClave: [
      {
        termino: 'Transversalidad',
        explicacion:
          'Herramienta clínica e institucional nacida en La Borde para reemplazar la noción psicoanalítica de transferencia cuando se trabaja con grupos e instituciones enteras, habilitando cruces no jerárquicos.'
      },
      {
        termino: 'Grupo-sujeto vs. Grupo-sometido',
        explicacion:
          'Polos dinámicos presentes en todo grupo: mientras el grupo sometido repite guiones impuestos, el grupo sujeto asume la palabra, cuestiona lo instituido y produce singularidad.'
      },
      {
        termino: 'Producción de subjetividad (y Subjetivación)',
        explicacion:
          'La subjetividad no es una esencia individual aislada ni mero producto familiar, sino una fabricación plural atravesada por instituciones, medios, lenguaje, territorio y máquinas sociales.'
      },
      {
        termino: 'Las tres ecologías (Ecosofía)',
        explicacion:
          'Imposibilidad de separar el cuidado del planeta (ecología ambiental) del cuidado de los lazos comunitarios (ecología social) y de la salud mental/singularidad (ecología subjetiva).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicoanálisis y transversalidad',
        año: '1972',
        resumen: 'Reúne sus textos fundacionales sobre psicoterapia institucional, transversalidad y grupos.'
      },
      {
        titulo: 'El Anti-Edipo / Mil mesetas (con Gilles Deleuze)',
        año: '1972 / 1980',
        resumen: 'Obra monumental sobre deseo, máquinas deseantes, rizoma, esquizoanálisis y micropolítica.'
      },
      {
        titulo: 'Las tres ecologías / Caosmosis',
        año: '1989 / 1992',
        resumen: 'Desarrolla la ecosofía y la producción contemporánea de subjetividad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Análisis personal y formación inicial, luego debatida desde el esquizoanálisis y las instituciones' },
      { nombre: 'Jean-Paul Sartre', autorId: 'sartre', nota: 'Dialéctica de grupo en fusión y serialidad en la base de grupo-sujeto / grupo-sometido' }
    ],
    influencioA: [
      { nombre: 'Gilles Deleuze', autorId: 'deleuze', nota: 'Alianza intelectual inseparable en el esquizoanálisis, rizoma y "Capitalismo y esquizofrenia"' },
      { nombre: 'René Lourau', autorId: 'lourau', nota: 'Incorporación directa del concepto de transversalidad en el Análisis Institucional' },
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Lectura de dispositivos grupales, micropolítica y producción de subjetividades en Psicología UBA' }
    ]
  },
  {
    id: 'lourau',
    nombre: 'René Lourau',
    apellidoCorto: 'Lourau',
    matchKeys: ['lourau', 'rene lourau', 'rené lourau'],
    materiaIdsExtra: [
      'psico-organizacional-institucional',
      'teoria-tecnica-grupos',
      'psico-social',
      'psico-trabajo-prof'
    ],
    fechas: '1933 – 2000',
    origen: 'Gelos · París (Vincennes / París VIII), Francia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Sociólogo y pedagogo francés fundador del "Análisis Institucional" (junto a Georges Lapassade). Sistematizó la dialéctica "instituido – instituyente – institucionalización", el concepto de "analizador" y el análisis de la "implicación". Clave en Psicología Institucional y Grupos UBA.',
    biografia:
      'Profesor en la Universidad de París VIII (Vincennes) y heredero de la pedagogía y psicoterapia institucional francesa, René Lourau dio forma teórica y metodológica al Análisis Institucional ("El análisis institucional", 1970) y al socioanálisis como dispositivo de intervención directa en escuelas, hospitales, empresas y organizaciones comunitarias.\n\nEn Psicología UBA es lectura obligatoria en Psicología Institucional y en Teoría y Técnica de Grupos: frente a las consultorías que buscan "adaptar" al personal a la organización, Lourau enseñó a mirar lo "no-dicho" institucional a través de los "analizadores" (crisis, conflictos, síntomas que revelan la estructura oculta) y exigió al propio psicólogo analizar su "implicación" afectiva, política y económica en lugar de fingir una neutralidad imposible.',
    principalesAportes: [
      'Concepto dialéctico de "institución" en tres momentos: lo "instituido" (norma establecida y visible), lo "instituyente" (fuerza de negación y creación) y la "institucionalización" (el proceso vivo de lucha y síntesis entre ambos).',
      'Noción clave de "analizador" (natural o construido): acontecimiento, persona, síntoma o dispositivo que "habla" por sí mismo y desnuda las contradicciones y relaciones de poder ocultas de una institución (más potente que cualquier entrevista formal).',
      'Teoría de la "implicación" y crítica a la neutralidad ficticia: el interventor institucional no está afuera ni por encima del campo; analizar sus propias implicaciones (libidinales, institucionales, ideológicas) es el verdadero corazón del rigor clínico-institucional.',
      'Diferenciación entre "encargo" (lo que la dirección o el cliente pide explícitamente) y "demanda" (el entramado complejo de deseos, malestares y pedidos que emerge al escuchar a todos los actores de la institución).'
    ],
    conceptosClave: [
      {
        termino: 'Instituido / Instituyente / Institucionalización',
        explicacion:
          'Una institución no es un edificio ni un organigrama fijo, sino una dinámica permanente entre lo que tiende a conservarse (instituido) y las fuerzas que lo cuestionan y transforman (instituyente).'
      },
      {
        termino: 'Analizador',
        explicacion:
          'Elemento o situación (una huelga, un ausentismo masivo, un "chivo expiatorio", una asamblea) que provoca la revelación de la estructura oculta y el "no-dicho" de una institución.'
      },
      {
        termino: 'Análisis de la implicación',
        explicacion:
          'Frente a la ilusión positivista de distancia neutral, el analista institucional examina sus propios vínculos, pagos, pertenencias y afectos en la intervención para convertirlos en herramienta de conocimiento.'
      },
      {
        termino: 'Encargo vs. Demanda',
        explicacion:
          'Distinción técnica fundamental en Psicología Institucional UBA: nunca aceptar acríticamente el encargo inicial de la autoridad sin trabajar la demanda colectiva que circula en la institución.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El análisis institucional',
        año: '1970',
        resumen: 'Obra fundacional del socioanálisis: instituido/instituyente, analizador, transversalidad e implicación.'
      },
      {
        titulo: 'El Estado y el inconsciente',
        año: '1978',
        resumen: 'Explora la presencia del Estado dentro de las instituciones cotidianas y en la subjetividad.'
      },
      {
        titulo: 'Claves de la sociología (con Georges Lapassade)',
        año: '1971',
        resumen: 'Introducción clara a la sociología crítica y al enfoque institucional francés.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Félix Guattari', autorId: 'guattari', nota: 'Transversalidad, grupo-sujeto y psicoterapia institucional de La Borde' },
      { nombre: 'Cornelius Castoriadis', autorId: 'castoriadis', nota: 'Dialéctica instituido/instituyente e imaginario social' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Inconsciente, contratransferencia (ampliada a "implicación") y escucha de lo latente' }
    ],
    influencioA: [
      { nombre: 'Fernando Ulloa', autorId: 'ulloa', nota: 'Diálogo fecundo con la psicología institucional clínica en Argentina' },
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Dispositivos grupales, analizadores e intervención institucional en Psicología UBA' },
      { nombre: 'Psicología Institucional UBA', nota: 'Marco conceptual central de ambas cátedras de Psicología Institucional' }
    ]
  },
  {
    id: 'castel',
    nombre: 'Robert Castel',
    apellidoCorto: 'Castel',
    matchKeys: ['castel', 'robert castel'],
    materiaIdsExtra: [
      'teoria-tecnica-grupos',
      'psicopatologia',
      'etica-deontologia-ddhh',
      'psico-organizacional-institucional',
      'psico-trabajo-prof'
    ],
    fechas: '1933 – 2013',
    origen: 'Saint-Pierre-Quilbignon · París, Francia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Sociólogo francés cercano a Michel Foucault y Pierre Bourdieu, uno de los autores contemporáneos más citados en Psicología UBA (Grupos, Psicopatología, Ética e Institucional). Investigó el "orden psiquiátrico", la "gestión de riesgos" y la crisis de la sociedad salarial ("desafiliación").',
    biografia:
      'Director de estudios en la École des Hautes Études en Sciences Sociales (EHESS) de París, Robert Castel recorrió un arco intelectual decisivo para nuestra disciplina: en una primera etapa —en diálogo estrecho con Michel Foucault— estudió el nacimiento del manicomio ("El orden psiquiátrico"), la expansión del psicoanálisis ("El psicoanalismo") y el paso de la "peligrosidad" a la "gestión de riesgos" en salud mental; luego consagró su obra mayor ("Las metamorfosis de la cuestión social") a analizar el desmantelamiento de la sociedad salarial y las nuevas formas de vulnerabilidad.\n\nEn Psicología UBA aparece citado en cuatro materias obligatorias (Grupos, Psicopatología, Ética e Institucional, además de resonar fuerte en Trabajo y Salud Pública): su concepto de "desafiliación" explica con precisión cómo la pérdida simultánea del trabajo estable y de las redes relacionales produce hoy nuevas formas de desamparo subjetivo.',
    principalesAportes: [
      'Genealogía de la psiquiatría y la salud mental ("El orden psiquiátrico", 1976; "La gestión de los riesgos", 1981): muestra el pasaje histórico desde el encierro manicomial clásico hacia dispositivos preventivos basados en perfiles estadísticos de "factores de riesgo" que tienden a disolver al sujeto singular.',
      'Concepto de "desafiliación" ("Las metamorfosis de la cuestión social", 1995): frente a la etiqueta estática de "exclusión", propone pensar zonas dinámicas —integración, vulnerabilidad y desafiliación— en el cruce entre el eje del trabajo y el eje de la inserción relacional.',
      'Noción de "individuo por defecto" vs. "individuo por exceso": cuando se retiran los "soportes" colectivos (empleo, protecciones sociales, instituciones públicas), el individuo queda obligado a hacerse cargo solo de su destino sin recursos para sostenerse.',
      'Crítica en "El psicoanalismo" (1973) a los usos despolitizados del dispositivo clínico que borran los determinantes institucionales y sociales del sufrimiento.'
    ],
    conceptosClave: [
      {
        termino: 'Desafiliación (Integración / Vulnerabilidad / Desafiliación)',
        explicacion:
          'Proceso progresivo de desenganche simultáneo del mundo del trabajo y de los lazos comunitarios/familiares; mucho más preciso que hablar de "marginados" como si estuvieran simplemente afuera.'
      },
      {
        termino: 'De la peligrosidad a la gestión de riesgos',
        explicacion:
          'En salud mental contemporánea (y psicopatología/ética), el foco se desplaza desde el sujeto concreto hacia el cálculo probabilístico de "poblaciones de riesgo", promoviendo controles preventivos y protocolos estandarizados.'
      },
      {
        termino: 'Soportes sociales e Individuo por defecto',
        explicacion:
          'Nadie es autónomo "desde la nada": para ser individuo se necesitan soportes materiales, derechos y lazos; sin ellos emerge el desamparo subjetivo del "individuo por defecto".'
      },
      {
        termino: 'Metamorfosis de la sociedad salarial',
        explicacion:
          'Análisis histórico de cómo la precarización laboral moderna desarma la "propiedad social" (derechos laborales, salud, jubilación) que durante el siglo XX otorgó seguridad existencial a las mayorías.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Las metamorfosis de la cuestión social: Una crónica del salariado',
        año: '1995',
        resumen: 'Obra maestra sobre sociedad salarial, vulnerabilidad, soportes y desafiliación.'
      },
      {
        titulo: 'La gestión de los riesgos: De la antipsiquiatría al post-análisis',
        año: '1981',
        resumen: 'Clásico citado en Psicopatología y Ética UBA sobre el paso de la clínica del sujeto al cálculo actuarial de riesgos.'
      },
      {
        titulo: 'El orden psiquiátrico: La edad de oro del alienismo',
        año: '1976',
        resumen: 'Historia crítica de la institución psiquiátrica y sus vínculos con la ley y el Estado.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Genealogía del poder psiquiátrico, disciplina y biopolítica del riesgo' },
      { nombre: 'Pierre Bourdieu', autorId: 'bourdieu', nota: 'Sociología crítica y rigor empírico-histórico en la tradición francesa' }
    ],
    influencioA: [
      { nombre: 'Psicología Institucional, Grupos y Salud Pública UBA', nota: 'Lectura central de la vulnerabilidad social, los soportes y el sufrimiento contemporáneo' },
      { nombre: 'Emiliano Galende', autorId: 'galende', nota: 'Diálogo sobre políticas de salud mental, desmanicomialización y gestión de riesgos' }
    ]
  },
  {
    id: 'dejours',
    nombre: 'Christophe Dejours',
    apellidoCorto: 'Dejours',
    matchKeys: ['dejours', 'christophe dejours'],
    materiaIdsExtra: [
      'psico-trabajo-prof',
      'psico-organizacional-institucional',
      'etica-deontologia-ddhh',
      'salud-publica-mental'
    ],
    fechas: '1949 – presente',
    origen: 'París, Francia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Médico psiquiatra, psicoanalista y ergonomista francés, fundador de la "Psicodinámica del Trabajo". Estudia el sufrimiento y el placer en el trabajo, la brecha entre trabajo prescripto y trabajo real, las estrategias colectivas de defensa y la banalización de la injusticia social. Citado en Trabajo, Institucional y Ética UBA.',
    biografia:
      'Profesor titular en el Conservatoire National des Arts et Métiers (CNAM) de París y miembro de la Asociación Psicoanalítica de Francia, Christophe Dejours creó la "Psicodinámica del Trabajo", una disciplina que articula psicoanálisis, ergonomía y sociología para investigar cómo la organización del trabajo afecta la salud mental.\n\nEn Psicología UBA es un autor estrella en tres materias del Ciclo Profesional (Psicología del Trabajo, Psicología Institucional y Ética y DD.HH.): su gran giro consistió en dejar de preguntarse solo por qué algunos trabajadores enferman ("psicopatología del trabajo") para preguntar cómo hace la mayoría para conservar una "normalidad sufriente" gracias a estrategias colectivas de defensa, cooperación y reconocimiento —y qué ocurre cuando la evaluación individualizada del rendimiento destruye esos lazos.',
    principalesAportes: [
      'Distinción fundacional entre "trabajo prescripto" (normas, protocolos, manuales) y "trabajo real" (lo que efectivamente hay que inventar frente a imprevistos, fallas y resistencias de lo real): trabajar siempre implica subjetividad, cuerpo e inteligencia práctica ("celo").',
      'Teoría de las "estrategias colectivas de defensa": pactos inconscientes que arman los equipos de trabajo para soportar el miedo, la precariedad o la sobrecarga (que protegen del derrumbe, pero pueden derivar en cinismo o negación del sufrimiento).',
      'Dinámica del "reconocimiento" (juicio de utilidad por parte de jefes/clientes y juicio de belleza por parte de los pares): motor clave que transforma el sufrimiento inevitable del trabajo en placer, sentido y construcción de identidad.',
      '"La banalización de la injusticia social" (1998): en diálogo con Hannah Arendt, analiza cómo las nuevas formas de management, la evaluación individualizada y el miedo al despido inducen a trabajadores comunes a tolerar o ejecutar prácticas dañinas (y suicidios vinculados al trabajo).'
    ],
    conceptosClave: [
      {
        termino: 'Trabajo prescripto vs. Trabajo real',
        explicacion:
          'Jamás basta con cumplir el reglamento al pie de la letra ("huelga de celo" paraliza cualquier organización): trabajar exige movilizar el ingenio subjetivo para cubrir la brecha con lo real.'
      },
      {
        termino: 'Sufrimiento creativo vs. Sufrimiento patógeno',
        explicacion:
          'El trabajo nunca es neutro respecto de la salud mental: cuando hay margen de autonomía y reconocimiento, el sufrimiento se sublima en creación y salud; cuando se bloquea toda iniciativa, enferma.'
      },
      {
        termino: 'Estrategias colectivas de defensa',
        explicacion:
          'Mecanismos compartidos por un colectivo laboral para anestesiar la angustia ante el riesgo o el desgaste —claves en Psicología del Trabajo e Institucional al intervenir en hospitales, fábricas u oficinas.'
      },
      {
        termino: 'Juicio de utilidad y Juicio de belleza (Reconocimiento)',
        explicacion:
          'El reconocimiento laboral no es mero elogio narcisista, sino validación del "hacer" (su utilidad social y su calidad técnica reconocida por los pares), sostén vital de la identidad.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Trabajo y desgaste mental: Una contribución a la psicopatología del trabajo',
        año: '1980 / 1990',
        resumen: 'Obra fundacional muy leída en Psicología del Trabajo UBA sobre sufrimiento, organización del trabajo y defensas.'
      },
      {
        titulo: 'La banalización de la injusticia social',
        año: '1998',
        resumen: 'Articula psicodinámica del trabajo con la banalidad del mal de Hannah Arendt frente al neoliberalismo laboral.'
      },
      {
        titulo: 'El factor humano / Trabajo vivo',
        año: '1995 / 2012',
        resumen: 'Síntesis accesible sobre trabajo real, cooperación, subjetividad y reconocimiento.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Sublimación, mecanismos de defensa y centralidad del trabajo en el equilibrio psíquico' },
      { nombre: 'Hannah Arendt', autorId: 'arendt', nota: 'Banalidad del mal retomada para pensar el sufrimiento ético en el trabajo moderno' }
    ],
    influencioA: [
      { nombre: 'Psicología del Trabajo e Institucional UBA', nota: 'Eje teórico central de las clínicas del trabajo contemporáneas en Argentina' },
      { nombre: 'Ética y Derechos Humanos en salud laboral', nota: 'Análisis del acoso laboral (mobbing), burnout y sufrimiento ético en organizaciones' }
    ]
  },

  // ======================== REFERENTES ARGENTINA / LATINOAMÉRICA ========================
  {
    id: 'segato',
    nombre: 'Rita Segato',
    apellidoCorto: 'Segato',
    matchKeys: ['segato', 'rita segato'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'psico-educativa-prof',
      'psico-juridica',
      'psico-social',
      'psico-organizacional-institucional'
    ],
    fechas: '1951 – presente',
    origen: 'Buenos Aires, Argentina · Brasilia, Brasil',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Antropóloga y feminista argentina (formada en la UBA), profesora emérita en Brasilia y referente latinoamericana en derechos humanos y estudios de género. Acuñó los conceptos de "mandato de masculinidad", "pedagogía de la crueldad" y "estructura elemental de la violencia". Citada en Ética, Educacional y Jurídica UBA.',
    biografia:
      'Egresada de la Universidad de Buenos Aires y doctorada en Antropología Social en la Queen’s University de Belfast, Rita Laura Segato construyó desde América Latina una de las lecturas más influyentes de las violencias de género, el racismo estructural y la colonialidad del poder.\n\nEn Psicología UBA es citada en tres materias obligatorias del Ciclo de Formación Profesional —Ética y DD.HH., Psicología Educacional y Psicología Jurídica—: a partir de sus investigaciones etnográficas en cárceles con condenados por delitos sexuales ("Las estructuras elementales de la violencia") y en Ciudad Juárez ("La guerra contra las mujeres"), demostró que la violencia machista no es un "desvío patológico individual" ni meramente pasional, sino un acto expresivo y político dirigido a los pares varones para demostrar pertenencia al "mandato de masculinidad".',
    principalesAportes: [
      'Investigación en "Las estructuras elementales de la violencia" (2003): la violación y las violencias machistas no responden principalmente a un impulso sexual individual, sino a un acto de poder expresivo ("eje horizontal" entre pares varones y "eje vertical" sobre la víctima) para exhibir potencia.',
      'Concepto de "mandato de masculinidad": pacto corporativo y exigencia permanente de demostrar fuerza, crueldad y dominio —del cual los propios varones son las "primeras víctimas" en la socialización patriarcal.',
      'Noción de "pedagogía de la crueldad" ("Contra-pedagogías de la crueldad", 2018): todos los actos y discursos mediáticos o institucionales que entrenan a los sujetos para perder la empatía, cosificar la vida y naturalizar el dolor ajeno (vital en Ética, Educacional y Jurídica).',
      'Propuesta de "contra-pedagogías" del vínculo y la comunidad: frente a la lógica extractiva y dueñista del mundo contemporáneo, reconstruir lazos de reciprocidad, cuidado y arraigo comunitario.'
    ],
    conceptosClave: [
      {
        termino: 'Mandato de masculinidad',
        explicacion:
          'Exigencia social de probar continuamente virilidad mediante dominio y baja empatía ante una cofradía de pares; explica la dimensión estructural y grupal de las violencias de género.'
      },
      {
        termino: 'Pedagogía de la crueldad',
        explicacion:
          'Entrenamiento cultural que habitúa a la población a mirar el sufrimiento y la violencia extrema sin conmoverse, transformando cuerpos y vínculos en cosas desechables.'
      },
      {
        termino: 'Estructura elemental de la violencia (Eje vertical y horizontal)',
        explicacion:
          'En la violencia de género hay siempre dos interlocutores: el ataque sobre la víctima (eje vertical) funciona a la vez como mensaje dirigido a los pares para obtener reconocimiento (eje horizontal).'
      },
      {
        termino: 'Contra-pedagogías de la crueldad',
        explicacion:
          'Prácticas educativas, clínicas, jurídicas y comunitarias orientadas a desarmar el mandato de dueño y restaurar la sensibilidad vincular (muy trabajadas en Educacional y Ética UBA).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Las estructuras elementales de la violencia',
        año: '2003',
        resumen: 'Estudio antropológico clave sobre género, cárcel, ley y el carácter expresivo de las violencias.'
      },
      {
        titulo: 'Contra-pedagogías de la crueldad',
        año: '2018',
        resumen: 'Clases en la UNSAM sobre crueldad, empatía, patriarcado, medios y construcción de vínculos comunitarios.'
      },
      {
        titulo: 'La guerra contra las mujeres',
        año: '2016',
        resumen: 'Análisis geopolítico de las nuevas formas de violencia contra los cuerpos feminizados en América Latina.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Claude Lévi-Strauss', autorId: 'levi-strauss', nota: 'Diálogo crítico con la antropología estructural (título mismo de "Las estructuras elementales de la violencia")' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Psicoanálisis, fratría, ley y subjetivación en diálogo con la antropología' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Interlocución feminista contemporánea sobre género, vulnerabilidad y violencia' }
    ],
    influencioA: [
      { nombre: 'Psicología Jurídica, Educacional y Ética UBA', nota: 'Referente indispensable en intervenciones sobre violencias de género, DD.HH. y ESI' },
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Convergencia en los estudios de género, patriarcado y subjetividades en Argentina' }
    ]
  }
];
