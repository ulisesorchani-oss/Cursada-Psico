import type { AutorProfile } from './autores';

export const AUTORES_TANDA_7: AutorProfile[] = [
  // ======================== FILOSOFÍA Y FENOMENOLOGÍA ========================
  {
    id: 'dilthey',
    nombre: 'Wilhelm Dilthey',
    apellidoCorto: 'Dilthey',
    matchKeys: ['dilthey', 'wilhelm dilthey'],
    materiaIdsExtra: [
      'psico-fenomenologica-existencial',
      'historia-psico',
      'problemas-filosoficos',
      'metodologia-inv'
    ],
    fechas: '1833 – 1911',
    origen: 'Biebrich · Berlín, Alemania',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo, historiador y referente de la hermenéutica alemana. Acuñó la distinción fundacional entre "explicar" (ciencias de la naturaleza) y "comprender" (ciencias del espíritu) y propuso una psicología descriptiva y analítica.',
    biografia:
      'Profesor en Basilea, Kiel, Breslavia y Berlín, Wilhelm Dilthey dedicó su obra a fundamentar la autonomía epistemológica de las "ciencias del espíritu" (historia, psicología, filosofía, arte) frente al avance del positivismo naturalista del siglo XIX.\n\nSu célebre sentencia —"a la naturaleza la explicamos, a la vida psíquica la comprendemos"— es una lectura obligatoria tanto en Psicología Fenomenológica y Existencial como en Historia de la Psicología y Metodología: abrió el camino directo hacia Karl Jaspers, Martin Heidegger y la hermenéutica de Paul Ricoeur.',
    principalesAportes: [
      'Separación epistemológica entre "Ciencias de la Naturaleza" (Naturwissenschaften, método explicativo-causal) y "Ciencias del Espíritu" (Geisteswissenschaften, método comprensivo-hermenéutico).',
      'Propuesta en 1894 de una "psicología descriptiva y analítica" basada en la vivencia (Erlebnis) total e histórica, en contraposición a la psicología "explicativa" o constructiva de laboratorio.',
      'Revalorización de la "vivencia" (Erlebnis), la expresión y la comprensión (Verstehen) como tríada fundamental para captar el sentido de la vida humana.',
      'Historicidad radical del sujeto: "el hombre no tiene naturaleza, sino historia", anticipando la fenomenología existencial y la hermenéutica contemporánea.'
    ],
    conceptosClave: [
      {
        termino: 'Explicar (Erklären) vs. Comprender (Verstehen)',
        explicacion:
          'Las ciencias naturales explican fenómenos externos mediante leyes causales e hipótesis; las ciencias del espíritu comprenden el sentido interno de las vivencias y obras humanas.'
      },
      {
        termino: 'Vivencia (Erlebnis)',
        explicacion:
          'Unidad inmediata y significativa de experiencia vivida donde pensamiento, afecto y voluntad aparecen entrelazados dentro de una biografía histórica.'
      },
      {
        termino: 'Psicología descriptiva vs. explicativa',
        explicacion:
          'Crítica a descomponer la mente en átomos sensoriales hipotéticos: la psicología debe partir de la totalidad estructurada de la vida psíquica tal como se vive.'
      },
      {
        termino: 'Círculo hermenéutico',
        explicacion:
          'Solo comprendemos una parte (un gesto, texto o síntoma) a la luz del todo histórico-vital, y el todo se enriquece al comprender sus partes.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Introducción a las ciencias del espíritu',
        año: '1883',
        resumen: 'Obra fundacional sobre la autonomía metodológica de las ciencias humanas e históricas.'
      },
      {
        titulo: 'Ideas acerca de una psicología descriptiva y analítica',
        año: '1894',
        resumen: 'Ensayo célebre que opone la psicología comprensiva a la psicología experimental explicativa.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Proyecto de una "crítica de la razón histórica" tras las críticas kantianas' },
      { nombre: 'Friedrich Schleiermacher', nota: 'Hermenéutica moderna y arte de la comprensión' }
    ],
    influencioA: [
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Distinción clínica entre explicar causalmente y comprender vivencias en Psicopatología General' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Historicidad del Dasein y facticidad de la vida' },
      { nombre: 'Paul Ricoeur', autorId: 'ricoeur', nota: 'Diálogo hermenéutico entre explicación y comprensión' }
    ]
  },
  {
    id: 'descartes',
    nombre: 'René Descartes',
    apellidoCorto: 'Descartes',
    matchKeys: ['descartes', 'rene descartes', 'cartesiano'],
    materiaIdsExtra: [
      'historia-psico',
      'problemas-filosoficos',
      'cbc-psico',
      'procesos-psico-basicos'
    ],
    fechas: '1596 – 1650',
    origen: 'La Haye en Touraine, Francia · Países Bajos · Estocolmo',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo y matemático francés fundador del racionalismo moderno y del dualismo mente–cuerpo (res cogitans / res extensa). Su tratado "Las pasiones del alma" (1649) abre en Historia de la Psicología el recorrido moderno de las pasiones hasta la pulsión.',
    biografia:
      'Padre de la filosofía moderna, René Descartes redefinió radicalmente la concepción del sujeto al situar la certeza en el pensamiento consciente ("pienso, luego existo") y separar dos sustancias distintas: la mente pensante (res cogitans) y el cuerpo-máquina material (res extensa).\n\nEn Historia de la Psicología UBA ocupa el punto de partida inevitable del "recorrido de las pasiones": en "Las pasiones del alma" (1649) explicó las pasiones como efectos del cuerpo (espíritus animales) sobre el alma en la glándula pineal, iniciando una larga genealogía que atraviesa a Hume, Kant, Ribot y culmina en el concepto freudiano de pulsión —además de ser interlocutor central de Lacan (sujeto de la ciencia) y Antonio Damasio.',
    principalesAportes: [
      'Formulación del dualismo sustancial mente–cuerpo (res cogitans vs. res extensa) y del cuerpo humano concebido como máquina mecánica (antecedente del arco reflejo).',
      'Teoría moderna de las pasiones en "Las pasiones del alma" (1649): las pasiones son "acciones del cuerpo" que se padecen en el alma, con seis pasiones primitivas (admiración, amor, odio, deseo, alegría y tristeza).',
      'Concepción del sujeto moderno centrado en el cogito ("pienso, luego existo") y la duda metódica, fundando el problema de la conciencia y el innatismo.',
      'Referencia clave para el contrapunto contemporáneo en neurociencias (Damasio), fenomenología (Merleau-Ponty, Heidegger) y psicoanálisis (el "sujeto del cogito" releído por Lacan).'
    ],
    conceptosClave: [
      {
        termino: 'Dualismo Res cogitans / Res extensa',
        explicacion:
          'División radical entre la sustancia pensante (alma/mente inextensa, libre y consciente) y la sustancia extensa (cuerpo mecánico regido por leyes físicas).'
      },
      {
        termino: 'Las pasiones del alma y la Glándula pineal',
        explicacion:
          'Las pasiones surgen de los movimientos corporales ("espíritus animales") que impactan en la glándula pineal, punto de unión donde el alma puede regularlas indirectamente.'
      },
      {
        termino: 'Cogito ("Pienso, luego existo")',
        explicacion:
          'Primera certeza indubitable tras la duda metódica: inaugura la subjetividad moderna que luego Freud descentrará con el inconsciente y Lacan invertirá ("pienso donde no soy").'
      },
      {
        termino: 'Ideas innatas',
        explicacion:
          'Contenidos racionales presentes en la mente antes de la experiencia sensorial, criticados por el empirismo de Hume y retomados en clave lingüística por Chomsky.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Las pasiones del alma',
        año: '1649',
        resumen: 'Texto bisagra de Historia de la Psicología sobre la fisiología y gobierno de las pasiones.'
      },
      {
        titulo: 'Meditaciones metafísicas',
        año: '1641',
        resumen: 'Presenta la duda metódica, el cogito y la distinción real entre mente y cuerpo.'
      },
      {
        titulo: 'Discurso del método',
        año: '1637',
        resumen: 'Reglas del método racional y fundación de la ciencia moderna.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Revolución científica moderna (Galileo) y Filosofía escolástica', nota: 'Ruptura con el aristotelismo hacia la física mecanicista' }
    ],
    influencioA: [
      { nombre: 'David Hume', autorId: 'hume', nota: 'Reacción empirista contra las ideas innatas y la supremacía de la razón sobre las pasiones' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'El sujeto del psicoanálisis como correlato subvertido del sujeto del cogito cartesiano' },
      { nombre: 'Noam Chomsky', autorId: 'chomsky', nota: 'Lingüística cartesiana e innatismo racionalista' },
      { nombre: 'Antonio Damasio', autorId: 'damasio', nota: 'Crítica neurocientífica al dualismo razón/emoción en "El error de Descartes"' }
    ]
  },
  {
    id: 'hume',
    nombre: 'David Hume',
    apellidoCorto: 'Hume',
    matchKeys: ['hume', 'david hume'],
    materiaIdsExtra: ['historia-psico', 'problemas-filosoficos', 'cbc-ipc', 'procesos-psico-basicos'],
    fechas: '1711 – 1776',
    origen: 'Edimburgo, Escocia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo escocés máximo exponente del empirismo y el asociacionismo clásico. Invirtió la jerarquía racionalista con su célebre tesis "la razón es, y solo debe ser, esclava de las pasiones" y disolvió el yo sustancial en un haz de percepciones.',
    biografia:
      'Figura central de la Ilustración escocesa, David Hume buscó construir en su "Tratado de la naturaleza humana" (1739–1740) una verdadera "ciencia del hombre" basada en la experiencia y la observación, equivalente a lo que Newton había logrado en física.\n\nEn el recorrido de las pasiones de Historia de la Psicología UBA, Hume marca un giro revolucionario: las pasiones dejan de ser meros "errores" que la razón debe dominar para convertirse en el verdadero motor afectivo de la acción y la moral, mientras que la mente se organiza por leyes de asociación (semejanza, contigüidad y causa-efecto).',
    principalesAportes: [
      'Formulación del empirismo radical: todo contenido mental deriva de la experiencia y se divide en "impresiones" (vívidas e inmediatas) e "ideas" (copias más débiles de las impresiones).',
      'Leyes de asociación de ideas (semejanza, contigüidad espacio-temporal y causalidad), base histórica de toda la psicología asociacionista y experimental posterior.',
      'Revalorización de las pasiones: "la razón es y solo debe ser esclava de las pasiones" —la razón calcula medios, pero solo las pasiones (directas e indirectas como orgullo y humildad) motivan la voluntad y la simpatía moral.',
      'Crítica a la sustancia del Yo ("haz o colección de percepciones" en perpetuo flujo) y crítica a la causalidad necesaria (hábito y costumbre), que "despertó a Kant de su sueño dogmático".'
    ],
    conceptosClave: [
      {
        termino: 'La razón esclava de las pasiones',
        explicacion:
          'Contra el racionalismo cartesiano, la razón sola es inerte para mover la voluntad: solo una pasión o afecto impulsa la acción humana.'
      },
      {
        termino: 'Impresiones e Ideas (Asociacionismo)',
        explicacion:
          'Las percepciones se combinan en la mente mediante la atracción suave de tres principios: semejanza, contigüidad y relación causa-efecto.'
      },
      {
        termino: 'El Yo como haz de percepciones',
        explicacion:
          'Al mirar hacia adentro no hallamos un "alma" fija e idéntica, sino una sucesión rapidísima de sensaciones, recuerdos y pasiones enlazados por la imaginación.'
      },
      {
        termino: 'Pasiones directas e indirectas y Simpatía',
        explicacion:
          'Las directas brotan del placer/dolor (deseo, aversión, alegría, tristeza); las indirectas (orgullo, humildad, amor, odio) implican el doble vínculo entre objeto y sí-mismo.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Tratado de la naturaleza humana (Libro II: De las pasiones)',
        año: '1739–1740',
        resumen: 'Clave en Historia de la Psicología por su teoría asociacionista de la mente y de las pasiones.'
      },
      {
        titulo: 'Investigación sobre el entendimiento humano',
        año: '1748',
        resumen: 'Síntesis accesible de su crítica a la causalidad, el hábito y el problema de la inducción (también visto en IPC).'
      }
    ],
    influenciadoPor: [
      { nombre: 'René Descartes', autorId: 'descartes', nota: 'Contrapunto racionalista frente al cual elabora el empirismo' },
      { nombre: 'John Locke y Francis Hutcheson', nota: 'Empirismo británico y teoría del sentimiento moral' }
    ],
    influencioA: [
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Despertó a Kant de su "sueño dogmático" e impulsó el giro crítico' },
      { nombre: 'Wilhelm Wundt', autorId: 'wundt', nota: 'Herencia del asociacionismo y el análisis de los elementos de la conciencia' },
      { nombre: 'Karl R. Popper', autorId: 'popper', nota: 'Problema lógico de la inducción como punto de partida del falsacionismo' }
    ]
  },
  {
    id: 'kant',
    nombre: 'Immanuel Kant',
    apellidoCorto: 'Kant',
    matchKeys: ['kant', 'immanuel kant', 'kantiano'],
    materiaIdsExtra: [
      'historia-psico',
      'problemas-filosoficos',
      'etica-deontologia-ddhh',
      'cbc-ipc'
    ],
    fechas: '1724 – 1804',
    origen: 'Königsberg, Prusia (Alemania)',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo alemán autor de la "Crítica de la razón pura" y la "Antropología en sentido pragmático". Cuestionó que la psicología pudiera ser una ciencia natural matematizable, distinguió afecto de pasión y fundó la ética deontológica de la autonomía.',
    biografia:
      'Figura cumbre de la filosofía moderna, Immanuel Kant realizó un "giro copernicano" al mostrar que el sujeto no es un espejo pasivo de la realidad, sino que organiza activamente la experiencia mediante formas a priori (espacio, tiempo y categorías del entendimiento).\n\nEn Psicología UBA aparece en tres frentes clave: 1) en Historia de la Psicología, tanto por su famosa objeción a la psicología como ciencia exacta (que Wundt intentó superar) como por su precisa distinción entre "afecto" y "pasión"; 2) en Ética y DD.HH. por la autonomía moral y el imperativo categórico; y 3) como cimiento filosófico de Piaget y Kohlberg.',
    principalesAportes: [
      'Objeción epistemológica a la psicología empírica: al carecer los fenómenos internos de extensión espacial y matematización rigurosa, la psicología no podía ser ciencia natural exacta, sino "antropología pragmática".',
      'Distinción clásica en el recorrido de las pasiones ("Antropología", 1798): el "afecto" es una sorpresa repentina y pasajera del sentimiento (como agua que rompe un dique), mientras la "pasión" es una inclinación duradera y reflexiva que coexiste con la razón y la somete (como un torrente que cava su propio cauce).',
      'Giro copernicano en teoría del conocimiento: síntesis entre racionalismo y empirismo mediante estructuras a priori del sujeto (antecedente directo de la epistemología genética de Piaget).',
      'Ética deontológica del deber y la autonomía: el Imperativo Categórico exige tratar a la humanidad siempre como un fin en sí misma y nunca meramente como un medio.'
    ],
    conceptosClave: [
      {
        termino: 'Afecto vs. Pasión',
        explicacion:
          'El afecto es súbito, impetuoso y fugaz (deja pronto lugar a la reflexión); la pasión es una inclinación crónica que calcula medios y "es un cáncer de la razón práctica".'
      },
      {
        termino: 'Imposibilidad de la psicología como ciencia exacta',
        explicacion:
          'Al observarse a sí misma, la mente altera el fenómeno interno y solo tiene una dimensión (el tiempo), por lo que Kant descartó una psicología experimental al estilo de la física.'
      },
      {
        termino: 'Imperativo categórico y Autonomía moral',
        explicacion:
          'Actuar por deber y leyes universales que el sujeto se da racionalmente a sí mismo, tratando a toda persona con dignidad incondicional (clave en Ética UBA y en Lacan con "Kant con Sade").'
      },
      {
        termino: 'Fenómeno y Noúmeno (Giro copernicano)',
        explicacion:
          'Conocemos el mundo tal como es estructurado por las formas a priori de nuestra sensibilidad y entendimiento (fenómeno), no la "cosa en sí" aislada.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Antropología en sentido pragmático',
        año: '1798',
        resumen: 'Desarrolla su psicología antropológica, el carácter, los temperamentos y la célebre distinción entre afecto y pasión.'
      },
      {
        titulo: 'Crítica de la razón pura',
        año: '1781 / 1787',
        resumen: 'Revoluciona la teoría del conocimiento y los límites de la psicología racional.'
      },
      {
        titulo: 'Fundamentación de la metafísica de las costumbres',
        año: '1785',
        resumen: 'Texto clásico de Ética sobre autonomía, deber e imperativo categórico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'David Hume', autorId: 'hume', nota: 'Impulso crítico decisivo frente al escepticismo empirista' },
      { nombre: 'René Descartes', autorId: 'descartes', nota: 'Tradición racionalista que Kant somete a crítica trascendental' }
    ],
    influencioA: [
      { nombre: 'Georg Wilhelm Friedrich Hegel', autorId: 'hegel', nota: 'Desarrollo dialéctico e histórico del idealismo alemán tras la crítica kantiana' },
      { nombre: 'Wilhelm Dilthey', autorId: 'dilthey', nota: 'Inspiración para fundamentar las ciencias del espíritu' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Epistemología genética como "kantismo evolutivo" (categorías construidas en el desarrollo)' },
      { nombre: 'Lawrence Kohlberg', autorId: 'kohlberg', nota: 'Ética de principios universales y autonomía moral posconvencional' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Lectura crítica de la ley moral en el Seminario 7 y "Kant con Sade"' }
    ]
  },
  {
    id: 'hegel',
    nombre: 'Georg Wilhelm Friedrich Hegel',
    apellidoCorto: 'Hegel',
    matchKeys: ['hegel', 'georg wilhelm friedrich hegel', 'hegeliano'],
    materiaIdsExtra: [
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'problemas-filosoficos',
      'metodologia-inv',
      'historia-psico',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: '1770 – 1831',
    origen: 'Stuttgart · Jena · Berlín, Alemania',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo alemán cumbre del idealismo y autor de la "Fenomenología del espíritu" (1807). Su dialéctica del amo y el esclavo, la lucha por el reconocimiento y el "alma bella" —leídos vía Kojève e Hyppolite— son pilares de la Escuela Francesa de Psicoanálisis (Lacan), además de nutrir la epistemología dialéctica de Samaja.',
    biografia:
      'Nacido en Stuttgart y profesor en Jena, Heidelberg y Berlín, Georg Wilhelm Friedrich Hegel revolucionó la filosofía moderna al concebir la razón, la conciencia y el sujeto no como sustancias fijas sino como un movimiento histórico y dialéctico movido por la negatividad y la contradicción.\n\nEn Psicología UBA es imprescindible para comprender a Jacques Lacan y toda la Escuela Francesa: a través de los célebres cursos de Alexandre Kojève en París (1933–1939) y el diálogo con Jean Hyppolite (sobre la Verneinung freudiana), Lacan tomó de la "Fenomenología del espíritu" la dialéctica del amo y el esclavo, la fórmula del deseo como deseo del Otro, la crítica al "alma bella" y a la "ley del corazón" (clave en su lectura del caso Dora y del estadio del espejo), para luego subvertir el "saber absoluto" hegeliano con el sujeto dividido del inconsciente. También reaparece en Metodología de la Investigación (Cat. II · Samaja/Ynoub) por la lógica dialéctica de la Aufhebung.',
    principalesAportes: [
      'Dialéctica del Amo y el Esclavo ("Fenomenología del espíritu"): el deseo humano es esencialmente deseo de reconocimiento por otra autoconciencia; la lucha a puro prestigio engendra la dialéctica de dominación y trabajo que Lacan retoma para el deseo y el Discurso del Amo (Seminario 17).',
      'Crítica del "alma bella" y de la "ley del corazón": figuras de la conciencia que denuncian el desorden del mundo como algo ajeno sin advertir su propia implicación en él (decisivas en "Intervención sobre la transferencia" de Lacan sobre el caso Dora y en la teoría del yo).',
      'Lógica dialéctica y Aufhebung (superación que niega, conserva y eleva): la contradicción no es un error lógico sino el motor del devenir histórico, de la ciencia y de la simbolización (retomada por Hyppolite y Lacan en torno a la negación freudiana, y por Juan Samaja en Metodología).',
      'Historicidad del sujeto y del Espíritu (Geist): frente a un yo aislado e intemporal, la subjetividad se constituye siempre en la mediación del lenguaje, el trabajo, las instituciones y el reconocimiento mutuo.'
    ],
    conceptosClave: [
      {
        termino: 'Dialéctica del Amo y el Esclavo',
        explicacion:
          'En la lucha por el reconocimiento, el amo arriesga la vida y somete al esclavo, pero queda dependiendo del reconocimiento de alguien a quien no reconoce; el esclavo, al trabajar y transformar la naturaleza, produce el saber (S2 en el Discurso del Amo de Lacan).'
      },
      {
        termino: 'Deseo de reconocimiento',
        explicacion:
          'A diferencia de la necesidad biológica, el deseo humano apunta a otro deseo: ser reconocido por otra conciencia (antecedente directo —vía Kojève— del axioma lacaniano "el deseo del hombre es el deseo del Otro").'
      },
      {
        termino: 'Alma bella y Ley del corazón',
        explicacion:
          'Posición de quien se vive inocente y acusa al mundo de su sufrimiento sin reconocer su propia participación en el desorden que denuncia; Lacan la usa para desmontar el narcisismo del yo y operar la "inversión dialéctica" en Dora.'
      },
      {
        termino: 'Aufhebung (Superación dialéctica)',
        explicacion:
          'Movimiento por el cual una determinación es a la vez suprimida, conservada y elevada a un plano superior —clave tanto en la dialéctica epistemológica de Samaja como en el comentario de Hyppolite sobre la Verneinung de Freud.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Fenomenología del espíritu',
        año: '1807',
        resumen:
          'Obra decisiva para la Escuela Francesa: desarrolla la autoconciencia, la dialéctica del amo y el esclavo, el alma bella y la ley del corazón.'
      },
      {
        titulo: 'Ciencia de la lógica',
        año: '1812–1816',
        resumen:
          'Sistematiza la lógica dialéctica del ser, la esencia, la contradicción y la Aufhebung.'
      },
      {
        titulo: 'Principios de la filosofía del derecho',
        año: '1820',
        resumen:
          'Desarrolla la eticidad (Sittlichkeit), la familia, la sociedad civil y el Estado como encarnaciones históricas de la libertad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Punto de partida crítico cuya separación entre fenómeno y cosa en sí busca superar dialécticamente' },
      { nombre: 'René Descartes', autorId: 'descartes', nota: 'Filosofía moderna de la conciencia y la subjetividad' },
      { nombre: 'Baruch Spinoza, J. G. Fichte y F. W. J. Schelling', nota: 'Sustancia-sujeto y tradición del idealismo alemán' }
    ],
    influencioA: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Deseo como deseo del Otro, amo/esclavo, alma bella y contrapunto en "Subversión del sujeto" y Seminario 17 (vía Kojève e Hyppolite)' },
      { nombre: 'Søren Kierkegaard', autorId: 'kierkegaard', nota: 'Reacción existencial radical contra el sistema totalizador hegeliano' },
      { nombre: 'Jean-Paul Sartre', autorId: 'sartre', nota: 'Dialéctica del para-sí, la mirada del otro y el existencialismo francés' },
      { nombre: 'Juan Samaja', autorId: 'samaja', nota: 'Lógica dialéctica, Aufhebung y superación de binarismos en Metodología de la Investigación (UBA)' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Deseo, reconocimiento y "Sujetos del deseo: reflexiones hegelianas en la Francia del siglo XX"' },
      { nombre: 'Karl Marx y Escuela de Frankfurt', nota: 'Inversión materialista de la dialéctica, alienación y teoría crítica' }
    ]
  },
  {
    id: 'kierkegaard',
    nombre: 'Søren Kierkegaard',
    apellidoCorto: 'Kierkegaard',
    matchKeys: ['kierkegaard', 'kierkegard', 'soren kierkegaard'],
    materiaIdsExtra: [
      'historia-psico',
      'psico-fenomenologica-existencial',
      'problemas-filosoficos',
      'psicoanalisis-francesa-1'
    ],
    fechas: '1813 – 1855',
    origen: 'Copenhague, Dinamarca',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo y teólogo danés considerado el padre del existencialismo. Su tratado "El concepto de la angustia" (1844) diferenció radicalmente la angustia ("vértigo de la libertad") del miedo y marcó a Heidegger, Sartre, Jaspers, Binswanger y Lacan.',
    biografia:
      'En rebeldía solitaria contra el sistema racional totalizador de Hegel —que diluía al individuo concreto en conceptos abstractos—, Søren Aabye Kierkegaard reivindicó la singularidad irrepetible de la existencia humana, la pasión subjetiva, la elección y el salto.\n\nEn Psicología UBA es un eslabón insustituible tanto en Psicología Fenomenológica y Existencial como en el recorrido afectivo-pasional de Historia de la Psicología y la clínica de la angustia: fue el primero en pensar la angustia no como debilidad ni miedo a un objeto externo, sino como la experiencia vertiginosa de la propia libertad y posibilidad.',
    principalesAportes: [
      'Distinción fundacional en "El concepto de la angustia" (1844) entre "miedo" (siempre referido a un objeto determinado) y "angustia" (sin objeto preciso: es el "vértigo de la libertad" ante la posibilidad pura).',
      'Análisis de la "desesperación" en "La enfermedad mortal" (1849) como quiebre de la relación del yo consigo mismo (no querer ser uno mismo o querer serlo con soberbia desesperada).',
      'Teoría de los tres estadios del camino de la vida: estadio estético (búsqueda inmediata de placer y hastío), estadio ético (elección, compromiso y responsabilidad) y estadio religioso (fe y paradoja).',
      'Defensa de la "subjetividad como verdad" y de la pasión existencial frente a la indiferencia objetiva de los sistemas puramente especulativos.'
    ],
    conceptosClave: [
      {
        termino: 'Angustia como "vértigo de la libertad"',
        explicacion:
          'Al asomarse al abismo de sus posibilidades, el sujeto siente a la vez atracción y espanto: la angustia revela que somos libres y responsables de elegir quiénes seremos.'
      },
      {
        termino: 'Angustia vs. Miedo',
        explicacion:
          'El miedo tiene un objeto concreto y externo; la angustia brota ante la "nada" de la posibilidad abierta (distinción retomada por Freud, Heidegger y Lacan).'
      },
      {
        termino: 'La enfermedad mortal (Desesperación)',
        explicacion:
          'Malestar espiritual propio de un yo que huye de sí mismo o no logra sintetizar su finitud con sus posibilidades infinitas.'
      },
      {
        termino: 'Estadios existenciales (Estético, Ético y Religioso)',
        explicacion:
          'Tres modos cualitativamente distintos de habitar la existencia que no evolucionan automáticamente, sino mediante saltos y decisiones personales.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El concepto de la angustia',
        año: '1844',
        resumen: 'Texto clásico sobre angustia, libertad, culpa y posibilidad, citado en Fenomenología, Historia y Seminario 10 de Lacan.'
      },
      {
        titulo: 'La enfermedad mortal (Tratado de la desesperación)',
        año: '1849',
        resumen: 'Análisis psicológico-existencial profundo sobre el yo y la desesperación.'
      },
      {
        titulo: 'Temor y temblor',
        año: '1843',
        resumen: 'Reflexión sobre la decisión singular, la ética y el salto de la fe.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Georg Wilhelm Friedrich Hegel', autorId: 'hegel', nota: 'Contrapunto existencial: defensa del individuo concreto frente al sistema totalizador hegeliano' },
      { nombre: 'Sócrates', nota: 'Ironía socrática y pasión por la verdad subjetiva' }
    ],
    influencioA: [
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Distinción ontológica entre miedo y angustia en "Ser y Tiempo"' },
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Filosofía de la existencia y situaciones límite' },
      { nombre: 'Jean-Paul Sartre', autorId: 'sartre', nota: 'Libertad radical, angustia y responsabilidad individual' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Referencia explícita sobre la angustia y la repetición en el Seminario 10 y 11' }
    ]
  },
  {
    id: 'hadot',
    nombre: 'Pierre Hadot',
    apellidoCorto: 'Hadot',
    matchKeys: ['hadot', 'pierre hadot'],
    materiaIdsExtra: [
      'historia-psico',
      'problemas-filosoficos',
      'etica-deontologia-ddhh',
      'psico-fenomenologica-existencial'
    ],
    fechas: '1922 – 2010',
    origen: 'París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo e historiador de la filosofía antigua francés, profesor en el Collège de France. Redescubrió la filosofía como "manera de vivir" y práctica de ejercicios espirituales, y sostuvo un célebre diálogo filosófico y amistad intelectual con Michel Foucault en torno al cuidado de sí.',
    biografia:
      'Especialista en estoicismo (Marco Aurelio y Epicteto), epicureísmo y neoplatonismo (Plotino), Pierre Hadot fue elegido profesor del Collège de France en 1982 gracias, en gran medida, al impulso y la admiración de Michel Foucault. Su tesis revolucionó la lectura de la Antigüedad: antes que sistemas teóricos abstractos, las escuelas filosóficas antiguas eran formas de vida orientadas a transformar la mirada, calmar las pasiones y convertir al propio sujeto mediante "ejercicios espirituales".\n\nEn Psicología UBA es una referencia muy valorada en Historia de la Psicología (Cát. I, Seminario D sobre Foucault y la genealogía de la subjetividad) y en debates ético-filosóficos: su amistoso pero riguroso contrapunto con Foucault sobre el "cultivo del yo" y la "estética de la existencia" abre una vía luminosa para pensar la subjetivación, la atención al presente y el cuidado de sí sin caer en el individualismo.',
    principalesAportes: [
      'Distinción fundamental entre "filosofía" (elección existencial y arte de vivir) y "discurso filosófico" (elaboración teórica al servicio de esa transformación vital).',
      'Redescubrimiento de los "ejercicios espirituales" antiguos (atención al presente o prosoche, diálogo socrático, premeditación de los males, mirada desde lo alto) como verdaderas terapéuticas del alma.',
      'Relectura renovadora de las Meditaciones de Marco Aurelio ("La ciudadela interior") y de la filosofía helenística frente a la tradición puramente escolástica.',
      'Diálogo intelectual y amistad con Michel Foucault: inspiró el giro ético del último Foucault ("cuidado de sí" y "tecnologías del yo") y formuló una crítica fecunda a la noción foucaultiana de "cultivo del yo".'
    ],
    conceptosClave: [
      {
        termino: 'Ejercicios espirituales (Askesis)',
        explicacion:
          'Prácticas voluntarias de pensamiento, imaginación y atención —no meramente religiosas— destinadas a transformar la visión del mundo y el modo de ser del sujeto.'
      },
      {
        termino: 'Filosofía como manera de vivir',
        explicacion:
          'En la Antigüedad ser filósofo no significaba producir tratados eruditos, sino adoptar una conducta cotidiana coherente orientada a la lucidez, la libertad interior y la paz del ánimo.'
      },
      {
        termino: 'Prosoche (atención al presente) y "mirada desde lo alto"',
        explicacion:
          'Vigilancia serena sobre el instante presente combinada con el ejercicio de situar la propia existencia dentro de la inmensidad del cosmos para relativizar las angustias egoístas.'
      },
      {
        termino: 'Crítica al "cultivo del yo" (Diálogo con Foucault)',
        explicacion:
          'Aunque compartía el interés por las prácticas de sí, Hadot señaló que los antiguos no buscaban un esteticismo individualista ni encerrarse en el yo, sino superarlo hacia la universalidad y la comunidad.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Ejercicios espirituales y filosofía antigua',
        año: '1981 / 2006',
        resumen:
          'Obra central donde sistematiza los ejercicios espirituales e incluye sus célebres textos sobre el diálogo interrumpido con Michel Foucault.'
      },
      {
        titulo: 'La ciudadela interior: Introducción a los Pensamientos de Marco Aurelio',
        año: '1992',
        resumen:
          'Muestra cómo el diario del emperador estoico es un cuaderno vivo de ejercicios espirituales cotidianos.'
      },
      {
        titulo: '¿Qué es la filosofía antigua?',
        año: '1995',
        resumen:
          'Síntesis magistral desde Sócrates hasta el neoplatonismo sobre la filosofía como elección de vida.'
      },
      {
        titulo: 'La filosofía como forma de vida',
        año: '2001',
        resumen:
          'Conversaciones accesibles sobre su trayectoria intelectual, el sentido existencial de leer a los antiguos y su relación con Foucault.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sócrates, Marco Aurelio y Plotino', nota: 'Tradición antigua del diálogo, el estoicismo y el cuidado del alma' },
      { nombre: 'Ludwig Wittgenstein', autorId: 'wittgenstein', nota: 'Juegos del lenguaje para comprender el sentido práctico de los textos antiguos' },
      { nombre: 'Henri Bergson', nota: 'Atención a la experiencia vivida y la percepción del presente' }
    ],
    influencioA: [
      {
        nombre: 'Michel Foucault',
        autorId: 'foucault',
        nota: 'Amistad intelectual en el Collège de France y fuente directa para "tecnologías del yo" y "cuidado de sí"'
      },
      {
        nombre: 'Ética contemporánea y terapias contextuales',
        nota: 'Revalorización actual de los ejercicios estoicos y de la atención plena (prosoche) en filosofía y clínica'
      }
    ]
  },

  // ======================== DESARROLLO Y COGNICIÓN ========================
  {
    id: 'ribot',
    nombre: 'Théodule-Armand Ribot',
    apellidoCorto: 'Ribot',
    matchKeys: ['ribot', 'theodule ribot', 'theodule-armand ribot'],
    materiaIdsExtra: ['historia-psico', 'psicopatologia', 'procesos-psico-basicos', 'neuropsicologia'],
    fechas: '1839 – 1916',
    origen: 'Guingamp · París, Francia',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Filósofo y psicólogo francés fundador de la psicología científica y patológica en Francia. Formuló el "método patológico", la "Ley de Ribot" de la memoria y selló el paso decimonónico de las "pasiones" hacia la psicología de los sentimientos y tendencias antes de Freud.',
    biografia:
      'Titular de la primera cátedra de Psicología Experimental y Comparada del Collège de France y fundador de la "Revue Philosophique", Théodule Ribot encabezó la emancipación de la psicología francesa respecto de la metafísica espiritualista —consolidando el "modelo clínico francés" analizado por Kurt Danziger junto a Charcot y Janet.\n\nEn el recorrido de las pasiones de Historia de la Psicología UBA es el eslabón inmediatamente previo a Sigmund Freud: naturalizó la vida afectiva estudiando la memoria, la voluntad, la personalidad y las pasiones desde la enfermedad mental y las tendencias motrices del organismo, preparando el terreno epistémico para la pulsión freudiana.',
    principalesAportes: [
      'Formulación del "método patológico": la enfermedad mental funciona como un "experimento espontáneo de la naturaleza" que descompone las funciones psíquicas normales y revela sus leyes ocultas.',
      'Enunciación de la célebre "Ley de regresión de Ribot" (1881): en las amnesias y demencias, la disolución de la memoria progresa de lo más reciente e inestable hacia lo más antiguo y consolidado, y de lo intelectual hacia lo afectivo.',
      'Estudio científico-natural de la vida afectiva ("La psicología de los sentimientos", 1896; "Ensayo sobre las pasiones", 1907): articula tendencias orgánicas, emociones y pasiones como fenómenos psicofisiológicos (bisagra histórica hacia la pulsión en Freud).',
      'Descripción de la "anhedonia" (término que él mismo acuñó en 1896 para nombrar la incapacidad de experimentar placer) y estudios pioneros sobre las enfermedades de la voluntad (abulia) y la personalidad.'
    ],
    conceptosClave: [
      {
        termino: 'Método patológico',
        explicacion:
          'En lugar de depender solo del laboratorio (Wundt), la psicología francesa observa lesiones, amnesias e histerias porque lo patológico exagera y desarma los mecanismos de lo normal.'
      },
      {
        termino: 'Ley de Ribot (Ley de regresión)',
        explicacion:
          'Principio aún vigente en neuropsicología: ante el deterioro amnésico se pierden primero los recuerdos recientes y complejos, conservándose por más tiempo los recuerdos antiguos y emocionales.'
      },
      {
        termino: 'De las pasiones a las tendencias y emociones',
        explicacion:
          'Ribot diferencia la emoción (choque breve e intenso) de la pasión (tendencia fija, duradera e intelectualizada), enraizando la vida afectiva en necesidades y tendencias del organismo.'
      },
      {
        termino: 'Anhedonia',
        explicacion:
          'Concepto clínico introducido por Ribot en 1896 —hoy central en psicopatología de la depresión y la esquizofrenia— para describir la pérdida de la capacidad de sentir placer.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Las enfermedades de la memoria',
        año: '1881',
        resumen: 'Formula el método patológico y la célebre Ley de regresión de Ribot.'
      },
      {
        titulo: 'La psicología de los sentimientos',
        año: '1896',
        resumen: 'Obra clave en el recorrido histórico de las pasiones hacia la afectividad y la pulsión; acuña "anhedonia".'
      },
      {
        titulo: 'Ensayo sobre las pasiones',
        año: '1907',
        resumen: 'Diferencia emoción, sentimiento y pasión desde la psicología científica francesa.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Charles Darwin y Herbert Spencer', nota: 'Evolucionismo y teoría de la disolución de las funciones nerviosas' },
      { nombre: 'David Hume', autorId: 'hume', nota: 'Tradición empirista y primacía afectiva de tendencias y pasiones' },
      { nombre: 'Jean-Martin Charcot', nota: 'Clínica neurológica de la Salpêtrière y método patológico francés' }
    ],
    influencioA: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Puente histórico del método patológico y las tendencias afectivas hacia el concepto de pulsión (Trieb)' },
      { nombre: 'Kurt Danziger', autorId: 'danziger', nota: 'Analizado como eje del "experimento clínico francés" en historia de la psicología' },
      { nombre: 'Pierre Janet y Neuropsicología moderna', nota: 'Tradición psicopatológica francesa y ley de gradiente temporal en la memoria' }
    ]
  },

  // ======================== REFERENTES UBA / ARGENTINA ========================
  {
    id: 'mazzuca',
    nombre: 'Roberto Mazzuca',
    apellidoCorto: 'Mazzuca',
    matchKeys: ['roberto mazzuca', 'mazzuca, r.'],
    materiaIdsExtra: ['psicopatologia', 'psicoanalisis-francesa-1', 'psico-clinica-psicoterapias-1'],
    fechas: 'Contemporáneo',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicoanalista (EOL / AMP), Lic. en Psicología y Filosofía y Profesor Consulto de la UBA. Fue el histórico Titular Plenario fundador de Psicopatología Cátedra II (1984–2005), cátedra que hoy continúa su discípulo Fabián Schejtman.',
    biografia:
      'Licenciado en Psicología y en Filosofía por la UBA, psicoanalista miembro de la Escuela de la Orientación Lacaniana (EOL) y de la Asociación Mundial de Psicoanálisis (AMP), Roberto Mazzuca es uno de los grandes arquitectos de la enseñanza universitaria de la psicopatología psicoanalítica en la Argentina.\n\nCon la recuperación democrática de 1984 asumió como Profesor Titular Plenario de la Segunda Cátedra de Psicopatología en la Facultad de Psicología de la UBA (1984–2005), construyendo un equipo docente y de investigación UBACyT que sentó las bases de la tradición que hoy continúa Fabián Schejtman. Profesor Consulto de la UBA, docente en maestrías de posgrado (UBA y UNSAM) y distinguido en 2024 como Personalidad Destacada de la Salud por la Legislatura Porteña, su obra articula con rigor la psiquiatría clásica, las estructuras freudolacanianas y el pasaje hacia la clínica borromea de los nudos.',
    principalesAportes: [
      'Fundación y dirección histórica (1984–2005) de Psicopatología Cátedra II en la UBA, formando a generaciones enteras de clínicos y docentes (Fabián Schejtman, Claudio Godoy, Leonardo Leibson, Nieves Soria, entre otros).',
      'Sistematización del contrapunto entre la psiquiatría clásica (Kraepelin, Bleuler, Clérambault, Sérieux y Capgras) y el diagnóstico estructural psicoanalítico, sin caer en reduccionismos ni en el empirismo ateórico del DSM.',
      'Difusión pionera en la universidad argentina de «las dos clínicas de Lacan»: la articulación entre la clínica estructuralista del significante y la clínica nodal del último Lacan (nudo borromeo y sinthome).',
      'Investigaciones de referencia sobre la neurosis («cizalla del cuerpo y del alma»), la perversión, las estabilizaciones en las psicosis y la ética del diagnóstico psicoanalítico.'
    ],
    conceptosClave: [
      {
        termino: 'Las dos clínicas de Lacan',
        explicacion:
          'Distinción y articulación entre la primera clínica lacaniana (discontinuista, estructurada en torno al Nombre-del-Padre y la forclusión) y la segunda clínica nodal (continuista, centrada en los modos de anudamiento borromeo y el sinthome).'
      },
      {
        termino: 'Encuentros y desencuentros: Psiquiatría y Psicoanálisis',
        explicacion:
          'Relectura crítica de los grandes nosógrafos clásicos para rescatar su fineza semiológica sin perder la especificidad ética del sujeto del inconsciente y la transferencia.'
      },
      {
        termino: 'Cizalla del cuerpo y del alma',
        explicacion:
          'Fórmula con la que Mazzuca aborda la división subjetiva en las neurosis (histeria y neurosis obsesiva) siguiendo su desarrollo desde los primeros textos de Freud hasta Lacan.'
      },
      {
        termino: 'Diagnóstico estructural y estabilidad clínica',
        explicacion:
          'Análisis riguroso de las condiciones de encadenamiento, desencadenamiento y suplencia tanto en las psicosis como en la estabilidad histérica y obsesiva.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Las dos clínicas de Lacan. Introducción a la clínica de los nudos (con F. Schejtman y M. Zlotnik)',
        año: '2000',
        resumen: 'Texto clásico de la UBA que introduce el pasaje de la clínica estructuralista a la topología borromea.'
      },
      {
        titulo: 'Cizalla del cuerpo y del alma. La neurosis de Freud a Lacan',
        año: '2003',
        resumen: 'Recorrido sistemático por la construcción del concepto de neurosis en Freud y su reformulación lacaniana.'
      },
      {
        titulo: 'Perversión. De la Psychopathia sexualis a la subjetividad perversa',
        año: '2003',
        resumen: 'Estudio histórico-clínico de la categoría de perversión desde la psiquiatría clásica hasta el psicoanálisis.'
      },
      {
        titulo: 'Psicoanálisis y psiquiatría: encuentros y desencuentros (comp. junto a C. Godoy, F. Schejtman y M. Zlotnik)',
        año: '2003',
        resumen: 'Obra colectiva de la Cátedra II sobre la relación epistemológica y clínica entre ambas disciplinas.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Psicopatología estructural y clínica nodal de la última enseñanza' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Nosología psicoanalítica y clínica de las neurosis y psicosis' },
      { nombre: 'Jacques-Alain Miller', autorId: 'miller', nota: 'Orientación lacaniana y lectura de la última enseñanza de Lacan' }
    ],
    influencioA: [
      { nombre: 'Fabián Schejtman', autorId: 'schejtman', nota: 'Discípulo, coautor en clínica nodal y sucesor en la titularidad de Psicopatología Cátedra II (UBA)' },
      { nombre: 'Cátedra II de Psicopatología (UBA)', nota: 'Tradición docente, revista Ancla e investigación UBACyT iniciada en 1984' }
    ]
  }
];

