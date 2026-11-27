import type { AutorProfile } from './autores';

export const AUTORES_TANDA_8: AutorProfile[] = [
  // ======================== ESCUELA DE FRANKFURT ========================
  {
    id: 'benjamin',
    nombre: 'Walter Benjamin',
    apellidoCorto: 'Benjamin',
    matchKeys: ['benjamin, w', 'walter benjamin'],
    materiaIdsExtra: [
      'psico-desarrollo-adolescencia',
      'historia-psico',
      'problemas-filosoficos',
      'etica-deontologia-ddhh',
      'psico-social'
    ],
    fechas: '1892 – 1940',
    origen: 'Berlín, Alemania · París · Portbou, España',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo, crítico cultural y ensayista alemán cercano a la Escuela de Frankfurt. Pensó la pobreza de la experiencia moderna, el declive de la narración y la transmisión intergeneracional ("El narrador"), la pérdida del aura y la memoria histórica frente a la catástrofe.',
    biografia:
      'Pensador singular a medio camino entre el marxismo heterodoxo, la crítica literaria y el mesianismo judío, Walter Benjamin mantuvo una intensa correspondencia con Theodor W. Adorno y Max Horkheimer mientras escribía desde el exilio parisino antes de morir en la frontera de Portbou huyendo del nazismo.\n\nEn Psicología UBA resuena con fuerza al pensar la transmisión entre generaciones (Adolescencia y Educación), la memoria histórica y los derechos humanos (Ética y DD.HH.), la cultura contemporánea y los debates filosóficos: su diagnóstico sobre el shock moderno —en diálogo directo con "Más allá del principio de placer" de Freud— y sobre la memoria que rescata a los vencidos ilumina hoy el trauma social y la subjetividad hiperconectada.',
    principalesAportes: [
      'Distinción clave entre "experiencia" (Erfahrung —acumulada, compartible y transmisible de generación en generación) y "vivencia" (Erlebnis —fragmentaria, instantánea y marcada por el shock moderno), fundamental para pensar la transmisión intergeneracional en Psicología del Desarrollo y cultura contemporánea.',
      'Análisis en "El narrador" (1936) de cómo la información veloz desplaza al relato artesanal y empobrece la capacidad de dar consejo y elaborar colectivamente la experiencia.',
      'Teoría de la pérdida del "aura" en "La obra de arte en la época de su reproductibilidad técnica" (1936): transformación histórica de la percepción sensorial, la cultura de masas y la estetización de la política.',
      'Crítica a la idea lineal de progreso en las "Tesis sobre el concepto de historia" (1940): "cepillar la historia a contrapelo" y rescatar la memoria de las víctimas frente a la barbarie (influencia directa en Agamben y debates de DD.HH.).'
    ],
    conceptosClave: [
      {
        termino: 'Experiencia (Erfahrung) vs. Vivencia (Erlebnis)',
        explicacion:
          'Mientras la experiencia teje memoria colectiva y relato transmisible, la modernidad industrial y mediática multiplica vivencias aisladas de shock que no llegan a inscribirse en una historia compartida (en diálogo con Freud).'
      },
      {
        termino: 'El narrador y la transmisión generacional',
        explicacion:
          'Narrar es intercambiar experiencias y transmitir sabiduría práctica; cuando domina la mera información inmediata, se debilita el lazo simbólico entre adultos y adolescentes.'
      },
      {
        termino: 'Pérdida del aura',
        explicacion:
          'El aura es el "aquí y ahora" irrepetible y la lejanía de la obra única; la fotografía y el cine la disuelven, democratizando el acceso pero cambiando radicalmente nuestra percepción.'
      },
      {
        termino: 'Ángel de la historia (Historia a contrapelo)',
        explicacion:
          'Frente al relato triunfal del progreso, el pensamiento crítico mira las ruinas acumuladas del pasado para hacer justicia a las memorias silenciadas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El narrador / Experiencia y pobreza',
        año: '1933 / 1936',
        resumen:
          'Ensayos centrales en Psicología del Desarrollo y cultura contemporánea sobre transmisión, memoria y declive del relato.'
      },
      {
        titulo: 'La obra de arte en la época de su reproductibilidad técnica',
        año: '1936',
        resumen:
          'Texto clásico sobre aura, cine, cultura de masas y mutación histórica de la percepción humana.'
      },
      {
        titulo: 'Tesis sobre el concepto de historia',
        año: '1940',
        resumen:
          'Manifiesto filosófico-político sobre memoria, tiempo, catástrofe y crítica al progreso lineal.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Teoría del trauma y el shock ("Más allá del principio de placer") aplicada a la vida urbana moderna' },
      { nombre: 'Georg Wilhelm Friedrich Hegel', autorId: 'hegel', nota: 'Dialéctica histórica (invertida en clave materialista junto a Marx)' }
    ],
    influencioA: [
      { nombre: 'Theodor W. Adorno', autorId: 'adorno', nota: 'Interlocutor decisivo en crítica cultural, estética y dialéctica negativa' },
      { nombre: 'Giorgio Agamben', autorId: 'agamben', nota: 'Estado de excepción, pobreza de la experiencia e infancia/lenguaje' },
      { nombre: 'Byung-Chul Han', autorId: 'byung-chul-han', nota: 'Crítica a la hiperinformación y la pérdida de la narración en la era digital' }
    ]
  },
  {
    id: 'horkheimer',
    nombre: 'Max Horkheimer',
    apellidoCorto: 'Horkheimer',
    matchKeys: ['horkheimer', 'max horkheimer'],
    materiaIdsExtra: [
      'psico-social',
      'metodologia-inv',
      'problemas-filosoficos',
      'psico-organizacional-institucional',
      'psico-trabajo-prof'
    ],
    fechas: '1895 – 1973',
    origen: 'Stuttgart · Fráncfort, Alemania · Estados Unidos',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo y sociólogo alemán, director fundador del Instituto de Investigación Social (Escuela de Frankfurt). Acuñó la distinción entre "Teoría Tradicional" y "Teoría Crítica", analizó la "razón instrumental" y coescribió con Adorno "Dialéctica de la Ilustración".',
    biografia:
      'Al asumir la dirección del Instituto de Investigación Social de Fráncfort en 1930, Max Horkheimer impulsó el programa interdisciplinario que dio nacimiento a la Escuela de Frankfurt: articular filosofía, sociología, economía y psicoanálisis (incorporando primero a Erich Fromm y luego a Adorno y Marcuse) para comprender por qué la racionalidad moderna derivó en autoritarismo y sociedad administrada.\n\nEn Psicología UBA es referencia obligada en debates epistemológicos (Metodología, Historia y Problemas Filosóficos) y en Psicología Social, Institucional y del Trabajo: su crítica a la "razón instrumental" muestra cómo la ciencia y la psicología pierden su potencia emancipatoria cuando se reducen a meras técnicas neutras al servicio del rendimiento, la eficiencia y el control social.',
    principalesAportes: [
      'Manifiesto fundacional "Teoría tradicional y teoría crítica" (1937): frente a la ciencia positivista que se pretende neutral y reproduce lo dado, la teoría crítica asume su implicación histórica y busca transformar las condiciones de dominación.',
      'Crítica a la "razón instrumental" ("Crítica de la razón instrumental", 1947): desplazamiento de la razón objetiva (preguntarse por fines, justicia y sentido) por una razón puramente subjetiva-técnica que solo calcula los medios más eficaces sin cuestionar los fines.',
      'Coautor junto a Theodor W. Adorno de "Dialéctica de la Ilustración" (1944/1947): muestra cómo el proyecto ilustrado de dominar la naturaleza terminó volviéndose dominio técnico sobre los propios seres humanos y producción de la industria cultural.',
      'Estudios pioneros sobre "Autoridad y familia" (1936, junto a Fromm y Marcuse): análisis psicosocial de cómo la familia internaliza los mandatos autoritarios en el psiquismo.'
    ],
    conceptosClave: [
      {
        termino: 'Teoría Tradicional vs. Teoría Crítica',
        explicacion:
          'La teoría tradicional (positivista) toma los hechos sociales como datos naturales externos; la teoría crítica analiza su génesis histórica, las relaciones de poder que los sostienen y su potencial de emancipación.'
      },
      {
        termino: 'Razón instrumental',
        explicacion:
          'Racionalidad reducida al cálculo eficiente de medios para fines que ya no se discuten —clave para criticar la psicotecnia adaptacionista en Psicología del Trabajo y la reducción tecnocrática de la clínica.'
      },
      {
        termino: 'Dialéctica de la Ilustración',
        explicacion:
          'Paradoja por la cual la razón que prometía liberar al ser humano del mito se convierte en un nuevo mito tecnocrático y administrado que cosifica la subjetividad.'
      },
      {
        termino: 'Autoridad y socialización familiar',
        explicacion:
          'Investigación que cruza marxismo y psicoanálisis freudiano para explicar cómo el orden social se sostiene mediante mecanismos psíquicos (superyó, obediencia, internalización de la autoridad).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Teoría tradicional y teoría crítica',
        año: '1937',
        resumen: 'Texto programático que define el estatuto epistemológico y político de la Escuela de Frankfurt.'
      },
      {
        titulo: 'Dialéctica de la Ilustración (con Theodor W. Adorno)',
        año: '1944 / 1947',
        resumen: 'Crítica radical de la modernidad tecnocrática, el dominio de la naturaleza y la industria cultural.'
      },
      {
        titulo: 'Crítica de la razón instrumental (Eclipse de la razón)',
        año: '1947',
        resumen: 'Diagnóstico lúcido del predominio de la razón técnica-utilitaria sobre el pensamiento crítico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Proyecto crítico y pregunta por los límites y fines de la razón' },
      { nombre: 'Georg Wilhelm Friedrich Hegel', autorId: 'hegel', nota: 'Dialéctica histórica y crítica de la inmediatez positivista' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Incorporación del psicoanálisis para explicar la internalización subjetiva de la autoridad' }
    ],
    influencioA: [
      { nombre: 'Theodor W. Adorno', autorId: 'adorno', nota: 'Coautoría intelectual y dirección conjunta de la Escuela de Frankfurt' },
      { nombre: 'Herbert Marcuse', autorId: 'marcuse', nota: 'Teoría crítica de la sociedad industrial y la racionalidad tecnológica' },
      { nombre: 'Erich Fromm', autorId: 'fromm', nota: 'Colaboración inicial en estudios empíricos sobre autoridad, carácter social y familia' },
      { nombre: 'Jürgen Habermas', autorId: 'habermas', nota: 'Continuación y reformulación comunicativa de la Teoría Crítica' }
    ]
  },
  {
    id: 'marcuse',
    nombre: 'Herbert Marcuse',
    apellidoCorto: 'Marcuse',
    matchKeys: ['marcuse', 'herbert marcuse'],
    materiaIdsExtra: [
      'psico-social',
      'psico-trabajo-prof',
      'psico-organizacional-institucional',
      'psicoanalisis-freud',
      'problemas-filosoficos'
    ],
    fechas: '1898 – 1979',
    origen: 'Berlín, Alemania · Estados Unidos',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo y sociólogo alemán de la Escuela de Frankfurt, gran artífice del diálogo entre Freud y Marx. En "Eros y civilización" diferenció la represión básica de la "represión excedente" ligada al "principio de actuación", y en "El hombre unidimensional" criticó la captura del deseo por el consumo.',
    biografia:
      'Formado en filosofía con Edmund Husserl y Martin Heidegger antes de integrarse a la Escuela de Frankfurt en los años 30 y exiliarse en Estados Unidos, Herbert Marcuse llevó el diálogo entre la metapsicología freudiana y la crítica social a su punto más audaz y original.\n\nEn Psicología UBA es un puente inmejorable para leer "El malestar en la cultura" de Freud en clave histórico-política (Psicoanálisis, Psicología Social, Trabajo e Institucional): frente a la idea de que toda renuncia pulsional sería eterna e inmutable, Marcuse mostró que el capitalismo tardío impone una "represión excedente" para sostener la disciplina laboral y luego canaliza el resto mediante una "desublimación represiva" que convierte al propio deseo en mercancía.',
    principalesAportes: [
      'Relectura histórico-política de Freud en "Eros y civilización" (1955): distingue la "represión básica" (necesaria para cualquier vida en sociedad) de la "represión excedente" (impuesta históricamente por formas específicas de dominación social).',
      'Formulación del "principio de actuación" (performance principle): forma histórica que adopta el principio de realidad freudiano bajo el capitalismo, donde el cuerpo y el tiempo quedan subordinados al rendimiento económico.',
      'Diagnóstico en "El hombre unidimensional" (1964) de la "desublimación represiva": la sociedad de consumo ya no prohíbe brutalmente el placer, sino que ofrece satisfacciones administradas y rápidas que anestesian la capacidad crítica y de protesta.',
      'Crítica a las psicologías adaptacionistas (incluso al neofreudismo culturalista): defiende la radicalidad de la teoría pulsional freudiana porque conserva la tensión irreductible entre deseo y orden social.'
    ],
    conceptosClave: [
      {
        termino: 'Represión básica vs. Represión excedente',
        explicacion:
          'La represión básica hace posible la cultura; la represión excedente es el plus de renuncia pulsional exigido para sostener la jerarquía laboral y la dominación de clase (y, por ser histórica, es transformable).'
      },
      {
        termino: 'Principio de actuación (Performance Principle)',
        explicacion:
          'Versión históricamente situada del principio de realidad de Freud: evalúa a los sujetos por su productividad competitiva —antecedente directo de la "sociedad del rendimiento" de Byung-Chul Han.'
      },
      {
        termino: 'Desublimación represiva',
        explicacion:
          'Mecanismo por el cual la sociedad de consumo tolera e incita goces inmediatos y sexualizados, pero vaciados de potencia subversiva, integrando al sujeto al conformismo.'
      },
      {
        termino: 'Hombre unidimensional',
        explicacion:
          'Subjetividad capturada por "falsas necesidades" y por un pensamiento puramente operativo que pierde la segunda dimensión: la capacidad negativa de imaginar que la realidad podría ser otra.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Eros y civilización',
        año: '1955',
        resumen:
          'Investigación filosófica sobre Freud: represión excedente, principio de actuación y crítica al conformismo neofreudiano.'
      },
      {
        titulo: 'El hombre unidimensional',
        año: '1964',
        resumen:
          'Análisis clásico de la sociedad industrial avanzada, las falsas necesidades y la desublimación represiva.'
      },
      {
        titulo: 'Razón y revolución',
        año: '1941',
        resumen: 'Rescate de la dialéctica negativa de Hegel y el surgimiento de la teoría social crítica.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Metapsicología pulsional y "El malestar en la cultura" leídos en clave histórico-crítica' },
      { nombre: 'Georg Wilhelm Friedrich Hegel', autorId: 'hegel', nota: 'Poder de lo negativo y dialéctica histórica' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Formación filosófica inicial en Friburgo antes de su giro hacia la Teoría Crítica' },
      { nombre: 'Max Horkheimer', autorId: 'horkheimer', nota: 'Programa de la Teoría Crítica de la Escuela de Frankfurt' }
    ],
    influencioA: [
      { nombre: 'Byung-Chul Han', autorId: 'byung-chul-han', nota: 'Resonancia del principio de actuación y la captura del deseo en la sociedad del rendimiento' },
      { nombre: 'Jean Baudrillard', autorId: 'baudrillard', nota: 'Crítica de las falsas necesidades y la sociedad de consumo' },
      { nombre: 'Psicología Social y Política crítica', nota: 'Debate sobre trabajo, subjetividad, malestar cultural y emancipación' }
    ]
  },
  {
    id: 'adorno',
    nombre: 'Theodor W. Adorno',
    apellidoCorto: 'Adorno',
    matchKeys: ['adorno', 'theodor adorno', 'theodor w. adorno'],
    materiaIdsExtra: [
      'psico-social',
      'etica-deontologia-ddhh',
      'problemas-filosoficos',
      'psico-organizacional-institucional',
      'historia-psico'
    ],
    fechas: '1903 – 1969',
    origen: 'Fráncfort, Alemania · Estados Unidos',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo, sociólogo y musicólogo alemán, figura emblema de la Escuela de Frankfurt. Codirigió el estudio clásico "La personalidad autoritaria" (clave en Psicología Social sobre prejuicio y fascismo), acuñó "industria cultural" con Horkheimer y formuló la "Dialéctica negativa".',
    biografia:
      'Figura central de la Escuela de Frankfurt junto a Max Horkheimer, Theodor Wiesengrund Adorno combinó la filosofía dialéctica, la estética y la investigación psicosocial empírica en el exilio estadounidense antes de regresar a Fráncfort en 1949.\n\nEn Psicología UBA ocupa un lugar histórico ineludible en Psicología Social (su investigación en Berkeley sobre "La personalidad autoritaria" y la Escala F marcó el estudio del prejuicio, el antisemitismo y la obediencia), en Ética y DD.HH. (su "nuevo imperativo categórico" tras Auschwitz y "La educación después de Auschwitz") y en la lectura crítica del psicoanálisis frente al conformismo ego-psicológico y la industria cultural.',
    principalesAportes: [
      'Investigación empírico-psicoanalítica "La personalidad autoritaria" (1950, con Frenkel-Brunswik, Levinson y Sanford): diseño de la célebre Escala F para estudiar cómo ciertas dinámicas yoicas y familiares predisponen al prejuicio, la rigidez y la sumisión autoritaria.',
      'Concepto de "Industria cultural" (en "Dialéctica de la Ilustración", con Horkheimer): el cine, la radio y los medios masivos no son cultura popular espontánea sino producción estandarizada de subjetividad que fabrica conformismo y pseudo-individualidad.',
      '"Dialéctica negativa" (1966): a diferencia de Hegel, rechaza la síntesis final que borra la diferencia; pensar críticamente es salvar lo "no-idéntico", el sufrimiento singular que escapa al concepto.',
      'Ética tras la catástrofe ("Minima Moralia" y "La educación después de Auschwitz"): el objetivo prioritario de toda educación y práctica humana es evitar que Auschwitz se repita, cultivando la autonomía y desarmando la frialdad burocrática.'
    ],
    conceptosClave: [
      {
        termino: 'Personalidad autoritaria y Escala F',
        explicacion:
          'Síndrome psicosocial caracterizado por convencionalismo rígido, sumisión acrítica a la autoridad, agresión hacia minorías, pensamiento estereotipado y proyección de impulsos reprimidos.'
      },
      {
        termino: 'Industria cultural',
        explicacion:
          'Sistema mercantil de producción simbólica que convierte el ocio en prolongación del trabajo, ofrece fórmulas repetitivas bajo apariencia de novedad y moldea el deseo y la atención.'
      },
      {
        termino: 'Dialéctica negativa y lo "no-idéntico"',
        explicacion:
          'Crítica a todo sistema cerrado que pretende reducir lo singular a una etiqueta o categoría total: la verdad aparece en la fisura donde lo real resiste a ser clasificado.'
      },
      {
        termino: 'La educación después de Auschwitz',
        explicacion:
          'Ensayo clave para Ética y Psicología Educacional: analiza la "frialdad burguesa" y la obediencia ciega como condiciones psicológicas de la barbarie moderna.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La personalidad autoritaria (con E. Frenkel-Brunswik, D. Levinson y R. N. Sanford)',
        año: '1950',
        resumen: 'Estudio fundacional de la Psicología Social sobre prejuicio, autoritarismo y estructura de personalidad.'
      },
      {
        titulo: 'Dialéctica de la Ilustración (con Max Horkheimer)',
        año: '1944 / 1947',
        resumen: 'Introduce la noción de industria cultural y analiza la regresión de la racionalidad ilustrada.'
      },
      {
        titulo: 'Minima Moralia / Dialéctica negativa',
        año: '1951 / 1966',
        resumen: 'Reflexiones desde la vida dañada y filosofía crítica de lo no-idéntico.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Georg Wilhelm Friedrich Hegel', autorId: 'hegel', nota: 'Método dialéctico (radicalizado como dialéctica sin síntesis final)' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Psicología de las masas, superyó, mecanismos de defensa y crítica al adaptacionismo' },
      { nombre: 'Walter Benjamin', autorId: 'benjamin', nota: 'Estética, memoria histórica y constelaciones conceptuales' },
      { nombre: 'Max Horkheimer', autorId: 'horkheimer', nota: 'Programa de la Teoría Crítica y coautoría de Dialéctica de la Ilustración' }
    ],
    influencioA: [
      { nombre: 'Jürgen Habermas', autorId: 'habermas', nota: 'Discípulo y asistente en Fráncfort; segunda generación de la Teoría Crítica' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Ética de la vulnerabilidad y lectura de "Minima Moralia" en "Dar cuenta de sí mismo"' },
      { nombre: 'Psicología Social crítica y estudios sobre prejuicio', nota: 'Referencia obligada en autoritarismo, obediencia (Milgram) y medios masivos' }
    ]
  },
  {
    id: 'habermas',
    nombre: 'Jürgen Habermas',
    apellidoCorto: 'Habermas',
    matchKeys: ['habermas', 'jurgen habermas'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'problemas-filosoficos',
      'metodologia-inv',
      'psico-social',
      'psico-organizacional-institucional'
    ],
    fechas: '1929 – presente',
    origen: 'Düsseldorf · Fráncfort, Alemania',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo y sociólogo alemán, principal exponente de la segunda generación de la Escuela de Frankfurt. Desarrolló la "Teoría de la acción comunicativa", la "ética del discurso" (citada en Ética UBA) y la crítica a la colonización del mundo de la vida.',
    biografia:
      'Asistente de Theodor W. Adorno en el Instituto de Investigación Social de Fráncfort, Jürgen Habermas renovó la Teoría Crítica desplazando el eje desde la filosofía de la conciencia hacia el lenguaje y la intersubjetividad.\n\nEn Psicología UBA aparece explícitamente en Ética, Deontología y Derechos Humanos (en diálogo con Kant y Lawrence Kohlberg en torno a la ética discursiva, el consentimiento racional y la deliberación democrática) y en Metodología y Problemas Filosóficos por su clasificación de los intereses del conocimiento (técnico, práctico y emancipatorio, donde otorgó al psicoanálisis un lugar paradigmático como ciencia autorreflexiva) y su célebre debate con Foucault y Gadamer.',
    principalesAportes: [
      'Teoría de la acción comunicativa (1981): distingue entre "acción estratégica/instrumental" (orientada al éxito y al cálculo) y "acción comunicativa" (orientada al entendimiento mutuo mediante pretensiones de validez: verdad, rectitud y veracidad).',
      'Ética del discurso (junto a Karl-Otto Apel, en diálogo con Kant y Kohlberg): una norma solo es moralmente válida si todos los afectados podrían consensuarla libremente en un diálogo sin coacción (clave en Ética y Bioética UBA).',
      'Tipología de los "intereses del conocimiento" ("Conocimiento e interés", 1968): ciencias empírico-analíticas (interés técnico), histórico-hermenéuticas (interés práctico) y crítico-emancipatorias —tomando al psicoanálisis como modelo de autorreflexión que libera de la comunicación sistemáticamente distorsionada.',
      'Diagnóstico de la "colonización del mundo de la vida": cuando la lógica del dinero (mercado) y el poder administrativo (burocracia) invaden las esferas de la crianza, la salud, la educación y los vínculos cotidianos.'
    ],
    conceptosClave: [
      {
        termino: 'Acción comunicativa vs. Acción instrumental',
        explicacion:
          'La acción instrumental manipula cosas o personas como medios para un fin; la acción comunicativa coordina vínculos a través del diálogo argumentado y el reconocimiento recíproco.'
      },
      {
        termino: 'Ética del discurso',
        explicacion:
          'Reformulación dialógica del imperativo categórico de Kant: la validez ética no se decide en la soledad de una conciencia, sino en la deliberación pública e inclusiva de todos los implicados.'
      },
      {
        termino: 'Colonización del mundo de la vida',
        explicacion:
          'Proceso por el cual imperativos económicos y burocráticos desplazan al entendimiento comunicativo en ámbitos vitales (hospitales, escuelas, familias), generando patologías sociales y pérdida de sentido.'
      },
      {
        termino: 'Psicoanálisis e interés emancipatorio',
        explicacion:
          'En "Conocimiento e interés", Habermas lee al psicoanálisis como una hermenéutica profunda que descifra síntomas ("textos mutilados") para ampliar la autonomía reflexiva del sujeto.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Teoría de la acción comunicativa (Tomos I y II)',
        año: '1981',
        resumen: 'Obra monumental sobre racionalidad comunicativa, lenguaje, sistema y mundo de la vida.'
      },
      {
        titulo: 'Conciencia moral y acción comunicativa',
        año: '1983',
        resumen: 'Desarrolla la ética del discurso en diálogo directo con la teoría del desarrollo moral de Lawrence Kohlberg.'
      },
      {
        titulo: 'Conocimiento e interés',
        año: '1968',
        resumen: 'Propone los tres intereses constitutivos del saber y analiza al psicoanálisis como ciencia crítico-emancipatoria.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Theodor W. Adorno', autorId: 'adorno', nota: 'Maestro en Fráncfort y punto de partida de la Teoría Crítica' },
      { nombre: 'Max Horkheimer', autorId: 'horkheimer', nota: 'Crítica de la razón instrumental y programa de la Escuela de Frankfurt' },
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Autonomía moral y universalismo reformulados en clave discursiva' },
      { nombre: 'Lawrence Kohlberg', autorId: 'kohlberg', nota: 'Estadios del juicio moral posconvencional integrados a la ética del discurso' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Modelo de la autorreflexión emancipatoria frente a la comunicación distorsionada' }
    ],
    influencioA: [
      { nombre: 'Ética, Deontología y Bioética contemporánea', nota: 'Comités de bioética, consentimiento informado y ética deliberativa en salud' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Célebre debate filosófico sobre Ilustración, poder, norma y modernidad' },
      { nombre: 'Axel Honneth y tercera generación de Frankfurt', nota: 'Teoría del reconocimiento intersubjetivo' }
    ]
  },

  // ======================== PENSAMIENTO FRANCÉS ========================
  {
    id: 'bachelard',
    nombre: 'Gaston Bachelard',
    apellidoCorto: 'Bachelard',
    matchKeys: ['bachelard', 'gaston bachelard'],
    materiaIdsExtra: [
      'cbc-ipc',
      'metodologia-inv',
      'historia-psico',
      'problemas-filosoficos',
      'psicoanalisis-francesa-1'
    ],
    fechas: '1884 – 1962',
    origen: 'Bar-sur-Aube · Dijon · París, Francia',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Epistemólogo y filósofo francés, maestro de Georges Canguilhem y mentor decisivo de la tradición francesa. Acuñó los conceptos de "obstáculo epistemológico" y "ruptura epistemológica", mostrando que el conocimiento científico avanza rompiendo con el sentido común y no por mera acumulación.',
    biografia:
      'Profesor de historia y filosofía de las ciencias en la Sorbona, Gaston Bachelard dividió su obra en dos vertientes fascinantes: una epistemología histórica "diurna" —que revolucionó el pensamiento francés sobre la ciencia— y una poética "nocturna" de la imaginación material y del espacio ("La poética del espacio").\n\nEn Psicología UBA es un pilar silencioso de toda la formación epistemológica (CBC IPC, Metodología, Historia y Problemas Filosóficos) y del linaje francés que desemboca en Canguilhem, Althusser, Foucault y Bourdieu: su tesis de que "el hecho científico se conquista, se construye y se comprueba" contra los "obstáculos epistemológicos" del sentido común (opinión, experiencia primera, sustancialismo) es central para pensar cómo la psicología y el psicoanálisis recortan su objeto.',
    principalesAportes: [
      'Teoría de los "obstáculos epistemológicos" ("La formación del espíritu científico", 1938): los frenos al conocimiento no vienen de la complejidad del objeto ni de la debilidad de los sentidos, sino de hábitos inconscientes e inercias del propio pensamiento (la opinión, la experiencia primera, la metáfora sustancialista).',
      'Noción de "ruptura epistemológica": la ciencia no es una prolongación lineal del sentido común; progresa mediante cortes discontinuos, rectificaciones de errores y reorganizaciones teóricas (retomada por Althusser, Bourdieu y Kuhn).',
      'Racionalismo aplicado y constructivismo científico: "nada está dado, todo se construye"; el dato científico nunca es puro sino producto de una pregunta teórica y de instrumentos técnicos ("fenomenotecnia").',
      '"Psicoanálisis del conocimiento objetivo" y poética de la imaginación: dialogó tempranamente con Freud y Jung para rastrear las raíces afectivas e inconscientes de las imágenes científicas y poéticas ("La poética del espacio").'
    ],
    conceptosClave: [
      {
        termino: 'Obstáculo epistemológico',
        explicacion:
          'Resistencia interna al acto mismo de conocer —como la opinión inmediata, la falsa evidencia de la "experiencia primera" o las generalizaciones apresuradas— que impide formular verdaderos problemas científicos.'
      },
      {
        termino: 'Ruptura epistemológica',
        explicacion:
          'Corte cualitativo entre el saber cotidiano/ideológico y el conocimiento científico; implica desaprender certezas previas para construir el objeto de estudio.'
      },
      {
        termino: 'El hecho se conquista, se construye y se comprueba',
        explicacion:
          'Principio rector de la epistemología francesa (retomado por Bourdieu en "El oficio de sociólogo" y en Metodología UBA): no hay observación "virgen" sin marco teórico.'
      },
      {
        termino: 'Vigilancia epistemológica',
        explicacion:
          'Actitud reflexiva permanente del investigador sobre sus propios presupuestos, valores y conceptos para detectar cuándo el sentido común se cuela bajo ropaje técnico.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La formación del espíritu científico',
        año: '1938',
        resumen: 'Obra fundacional sobre obstáculos epistemológicos, ruptura con la opinión y psicoanálisis del conocimiento objetivo.'
      },
      {
        titulo: 'El nuevo espíritu científico',
        año: '1934',
        resumen: 'Analiza la discontinuidad científica moderna y el diálogo entre razón y experiencia.'
      },
      {
        titulo: 'La poética del espacio',
        año: '1957',
        resumen: 'Clásico sobre la imaginación creadora, la casa, lo íntimo y la fenomenología de las imágenes poéticas.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Crítica al empirismo ingenuo reformulada en clave histórica y no fija' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Inspiración para pensar las resistencias afectivas e inconscientes en el conocimiento' }
    ],
    influencioA: [
      { nombre: 'Georges Canguilhem', autorId: 'canguilhem', nota: 'Sucesor en la Sorbona y continuador de la epistemología histórica en ciencias de la vida y psicología' },
      { nombre: 'Louis Althusser', autorId: 'althusser', nota: 'Concepto de "corte epistemológico" aplicado a Marx y a la teoría científica' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Historia discontinua de los saberes y epistemes en "La arqueología del saber"' },
      { nombre: 'Thomas S. Kuhn', autorId: 'kuhn', nota: 'Afinidad y antecedente directo de las revoluciones científicas discontinuas' }
    ]
  },
  {
    id: 'barthes',
    nombre: 'Roland Barthes',
    apellidoCorto: 'Barthes',
    matchKeys: ['barthes', 'roland barthes'],
    materiaIdsExtra: [
      'teoria-tecnica-grupos',
      'psico-social',
      'problemas-filosoficos',
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2'
    ],
    fechas: '1915 – 1980',
    origen: 'Cherburgo · París, Francia',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Semiólogo, ensayista y crítico francés, figura clave del estructuralismo y el postestructuralismo. Desmontó los "mitos" ideológicos de la vida cotidiana, escribió "Fragmentos de un discurso amoroso" y acuñó "studium" y "punctum"; citado en Teoría y Técnica de Grupos UBA.',
    biografia:
      'Profesor en la École Pratique des Hautes Études y titular de la cátedra de Semiología Literaria en el Collège de France, Roland Barthes expandió la lingüística de Ferdinand de Saussure para leer la cultura entera —la moda, la publicidad, el cine, la fotografía, la escena grupal y el enamoramiento— como sistemas de signos.\n\nEn Psicología UBA es muy leído y citado en Teoría y Técnica de Grupos (su seminario "Cómo vivir juntos" y la noción de "idiorritmia" aparecen en el programa de Grupos junto a Ana María Fernández y Deleuze), en Psicología Social (desnaturalización de los mitos cotidianos) y en la sensibilidad clínica porteña por su sutil diálogo con Lacan y Winnicott en "Fragmentos de un discurso amoroso" y "La cámara lúcida".',
    principalesAportes: [
      'Semiología crítica en "Mitologías" (1957): el "mito" es un habla despolitizada que convierte lo histórico y cultural en "naturaleza" obvia (herramienta clave en Psicología Social y Grupos para desnaturalizar sentidos comunes).',
      'Desplazamiento del estructuralismo al postestructuralismo ("La muerte del autor", 1968; "El placer del texto", 1973): el sentido de un texto no pertenece a la intención soberana de su autor, sino que se teje en el encuentro activo con el lector.',
      '"Fragmentos de un discurso amoroso" (1977): cartografía magistral —en diálogo explícito con Lacan, Freud y Winnicott— de las figuras cotidianas del sujeto enamorado (la espera, los celos, el rapto, la ausencia).',
      '"La cámara lúcida" (1980) y "Cómo vivir juntos" (1977): introduce la célebre dupla "studium / punctum" (lo codificado culturalmente vs. el detalle singular que "punza" al sujeto) y la "idiorritmia" (convivir respetando el ritmo propio de cada uno, trabajada en Grupos UBA).'
    ],
    conceptosClave: [
      {
        termino: 'Mito y Denotación / Connotación',
        explicacion:
          'Todo signo porta un sentido literal (denotación) y sentidos culturales añadidos (connotación); el mito ideológico borra su origen histórico para hacer pasar una norma social por "natural".'
      },
      {
        termino: 'Studium vs. Punctum',
        explicacion:
          'En la fotografía (y la experiencia estética), el studium es el interés cultural ordenado; el punctum es ese detalle inesperado y singular que hiere, conmueve y escapa al código.'
      },
      {
        termino: 'Idiorritmia ("Cómo vivir juntos")',
        explicacion:
          'Fantasía de comunidad en la que cada sujeto conserva su propio ritmo vital dentro del lazo con otros —concepto muy valorado en Teoría y Técnica de Grupos UBA.'
      },
      {
        termino: 'La muerte del autor y el Discurso amoroso',
        explicacion:
          'El sujeto no es dueño transparente de lo que dice: está atravesado por códigos y "figuras" del lenguaje que hablan a través de él.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Mitologías',
        año: '1957',
        resumen: 'Análisis semiótico brillante de los mitos cotidianos de la cultura de masas y la ideología.'
      },
      {
        titulo: 'Fragmentos de un discurso amoroso',
        año: '1977',
        resumen: 'Libro de culto en Buenos Aires que cruza semiología y psicoanálisis sobre la posición del sujeto enamorado.'
      },
      {
        titulo: 'La cámara lúcida / Cómo vivir juntos',
        año: '1980 / 1977',
        resumen: 'Duelo, fotografía (studium y punctum) y las formas de habitar lo común respetando la singularidad (idiorritmia).'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Base de la semiología general (significante, significado y sistema de signos)' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Imaginario, deseo y sujeto dividido en "Fragmentos de un discurso amoroso"' },
      { nombre: 'Jean-Paul Sartre', autorId: 'sartre', nota: 'Compromiso de la escritura y crítica literaria inicial' }
    ],
    influencioA: [
      { nombre: 'Jean Baudrillard', autorId: 'baudrillard', nota: 'Semiología crítica de los objetos cotidianos y la sociedad de consumo' },
      { nombre: 'Jacques Derrida', autorId: 'derrida', nota: 'Amistad intelectual, escritura y apertura infinita del texto' },
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Desnaturalización de mitos sociales y lectura de lo grupal en Psicología UBA' }
    ]
  },
  {
    id: 'althusser',
    nombre: 'Louis Althusser',
    apellidoCorto: 'Althusser',
    matchKeys: ['althusser', 'louis althusser'],
    materiaIdsExtra: [
      'psico-social',
      'psico-organizacional-institucional',
      'psico-educativa-prof',
      'psicoanalisis-francesa-1',
      'problemas-filosoficos'
    ],
    fechas: '1918 – 1990',
    origen: 'Birmandreis, Argelia francesa · París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo francés de la École Normale Supérieure, artífice del encuentro histórico entre marxismo estructuralista y psicoanálisis lacaniano. Formuló los "Aparatos Ideológicos de Estado" (AIE), la "interpelación ideológica del sujeto" y el célebre ensayo "Freud y Lacan".',
    biografia:
      'Maestro de toda una generación francesa en la École Normale Supérieure de París (entre sus alumnos estuvieron Michel Foucault, Jacques Derrida y Jacques-Alain Miller), Louis Althusser tuvo un papel decisivo en la historia del psicoanálisis: en 1964, cuando Lacan fue excluido del Hospital Sainte-Anne, Althusser le abrió las puertas de la ENS y publicó su célebre ensayo "Freud y Lacan" defendiendo la cientificidad y el descentramiento radical del sujeto inconsciente.\n\nEn Psicología UBA su concepto de "Aparatos Ideológicos de Estado" (la escuela, la familia, los medios, el derecho) y el mecanismo de "interpelación" —por el cual la ideología "recluta" a los individuos haciéndolos reconocerse como sujetos libres mientras los sujeta— atraviesan Psicología Social, Institucional, Educacional y la recepción porteña del psicoanálisis (Oscar Masotta, Emilio de Ípola, León Rozitchner).',
    principalesAportes: [
      'Teoría de los "Aparatos Ideológicos de Estado" (AIE, 1970): el orden social no se reproduce solo por represión (Aparato Represivo), sino principalmente a través de instituciones materiales y rituales cotidianos —escuela, familia, medios, cultura— que moldean subjetividades.',
      'Tesis célebre: "La ideología interpela a los individuos como sujetos": la ideología no es una simple "falsa conciencia" en la cabeza, sino una relación imaginaria materializada en prácticas (retomando el Estadio del Espejo de Lacan) que nos llama ("¡Eh, vos!") y al darnos vuelta nos constituye en sujetos sujetados.',
      'Ensayo "Freud y Lacan" (1964): legitimó filosóficamente la lectura lacaniana de Freud, mostrando que el psicoanálisis destruye el mito humanista de un sujeto centrado, autónomo y dueño de sí.',
      '"Lectura sintomal" y "corte epistemológico" (retomando a Freud y Bachelard): leer un texto o una institución atendiendo no solo a lo que dice explícitamente, sino a sus silencios, lapsus y preguntas ausentes.'
    ],
    conceptosClave: [
      {
        termino: 'Aparatos Ideológicos de Estado (AIE)',
        explicacion:
          'Instituciones (escuela, familia, iglesia, medios, derecho) que funcionan predominantemente mediante ideología y rituales diarios para reproducir las relaciones sociales —clave en Psicología Educacional e Institucional.'
      },
      {
        termino: 'Interpelación ideológica del sujeto',
        explicacion:
          'Mecanismo especular por el cual la ideología nos reconoce como "sujetos libres" y nos asigna un lugar; nos vivimos autónomos precisamente cuando estamos más sujetados al orden simbólico-ideológico.'
      },
      {
        termino: 'Lectura sintomal',
        explicacion:
          'Modo de lectura inspirado en la escucha freudiana que busca en los huecos, tensiones y silencios de un discurso la problemática oculta que lo produce.'
      },
      {
        termino: 'Sobredeterminación',
        explicacion:
          'Concepto tomado directamente de "La interpretación de los sueños" de Freud para mostrar que los procesos históricos y sociales nunca tienen una única causa lineal sino múltiples contradicciones condensadas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Ideología y aparatos ideológicos de Estado',
        año: '1970',
        resumen: 'Texto clásico e ineludible en Social, Institucional y Educacional sobre AIE e interpelación del sujeto.'
      },
      {
        titulo: 'Freud y Lacan',
        año: '1964',
        resumen: 'Ensayo histórico que consolidó el diálogo entre psicoanálisis lacaniano, epistemología y teoría crítica.'
      },
      {
        titulo: 'La revolución teórica de Marx / Para leer El Capital',
        año: '1965',
        resumen: 'Introduce el corte epistemológico, la sobredeterminación y la lectura sintomal.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gaston Bachelard', autorId: 'bachelard', nota: 'Concepto de ruptura o "corte epistemológico"' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Sobredeterminación, escucha del síntoma y descentramiento del yo' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Estadio del espejo, lo Imaginario y constitución del sujeto en el Otro' }
    ],
    influencioA: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Alumno en la ENS; diálogo y desplazamiento desde los AIE hacia la microfísica del poder y las disciplinas' },
      { nombre: 'Jacques Derrida', autorId: 'derrida', nota: 'Colega y diálogo en la ENS sobre lectura, texto y Marx' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Retoma la interpelación althusseriana en "Mecanismos psíquicos del poder"' },
      { nombre: 'Jacques-Alain Miller', autorId: 'miller', nota: 'Discípulo inicial en la ENS que pasó del seminario de Althusser al de Lacan' }
    ]
  },
  {
    id: 'baudrillard',
    nombre: 'Jean Baudrillard',
    apellidoCorto: 'Baudrillard',
    matchKeys: ['baudrillard', 'jean baudrillard'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'psico-social',
      'problemas-filosoficos',
      'psico-desarrollo-adolescencia',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: '1929 – 2007',
    origen: 'Reims · París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Sociólogo y filósofo francés clave para pensar la posmodernidad, el consumo y la era mediática. Formuló los conceptos de "simulacro", "hiperrealidad" y "objeto-signo"; citado en Ética, Deontología y Derechos Humanos UBA y gran antecedente de Byung-Chul Han.',
    biografia:
      'Formado en sociología bajo la dirección de Henri Lefebvre y en diálogo estrecho con la semiología de Roland Barthes, Jean Baudrillard pasó de analizar el sistema de los objetos y la sociedad de consumo en los años 60–70 a convertirse en el diagnosticador más filoso de la era de las pantallas, los simulacros y la hiperrealidad.\n\nEn Psicología UBA figura citado en Ética, Deontología y Derechos Humanos y resulta clave para pensar los malestares subjetivos contemporáneos (consumos, redes sociales, caída de la alteridad y exhibición total): donde la modernidad reprimía el deseo, la hiperrealidad contemporánea nos satura de imágenes, transparencia y consumo de signos hasta vaciar la experiencia y el lazo con el otro.',
    principalesAportes: [
      'Análisis de "La sociedad de consumo" (1970) y "El sistema de los objetos" (1968): no consumimos objetos por su valor de uso ni para satisfacer necesidades naturales, sino como "signos" diferenciales que producen identidad y estatus dentro de un código.',
      'Teoría del "simulacro" y la "hiperrealidad" ("Cultura y simulacro", 1978): en la era mediática y digital, las imágenes y modelos ya no representan una realidad previa sino que la preceden y la sustituyen ("el mapa precede al territorio").',
      'Crítica de la "transparencia" y el "éxtasis de la comunicación": la sobreexposición total, la pornografía informativa y la exigencia de visibilizarlo todo anulan el secreto, la distancia simbólica y la seducción.',
      'Contrapunto provocador con el psicoanálisis y Foucault ("Olvidar a Foucault", "De la seducción"): interroga la obsesión moderna por "producir" sentido, sexo y verdad, anticipando debates actuales sobre subjetividad algorítmica y fatiga digital.'
    ],
    conceptosClave: [
      {
        termino: 'Simulacro e Hiperrealidad',
        explicacion:
          'Copia sin original que se vuelve "más real que lo real": pantallas, filtros, encuestas y relatos mediáticos moldean la percepción hasta borrar la frontera entre ficción y experiencia.'
      },
      {
        termino: 'Consumo como sistema de signos',
        explicacion:
          'El consumo no calma una necesidad sino que responde a una falta interminable de reconocimiento y diferenciación social; explica la compulsión consumista contemporánea.'
      },
      {
        termino: 'Transparencia y pérdida de la alteridad',
        explicacion:
          'Cuando todo debe mostrarse, medirse y comunicarse sin resto, desaparece el enigma del otro y la distancia necesaria para el deseo (tesis central retomada por Byung-Chul Han).'
      },
      {
        termino: 'Intercambio simbólico vs. Valor de cambio',
        explicacion:
          'Contrasta los lazos recíprocos de don, duelo y ambivalencia simbólica con la lógica fría y equivalente del mercado que expulsa a la muerte y la finitud de la escena social.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Cultura y simulacro',
        año: '1978',
        resumen: 'Desarrolla la teoría de los simulacros, la hiperrealidad y la precesión de los modelos sobre lo real.'
      },
      {
        titulo: 'La sociedad de consumo: sus mitos, sus estructuras',
        año: '1970',
        resumen: 'Clásico sobre el consumo de signos, el cuerpo como objeto de salvación y el malestar en la abundancia.'
      },
      {
        titulo: 'La transparencia del mal / El crimen perfecto',
        año: '1990 / 1995',
        resumen: 'Ensayos agudos sobre alteridad, exceso de comunicación y borramiento de la realidad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Roland Barthes', autorId: 'barthes', nota: 'Semiología de los objetos y mitologías del consumo cotidiano' },
      { nombre: 'Herbert Marcuse', autorId: 'marcuse', nota: 'Crítica a las falsas necesidades de la sociedad industrial avanzada' },
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Crítica genealógica de la verdad y el simulacro' }
    ],
    influencioA: [
      { nombre: 'Byung-Chul Han', autorId: 'byung-chul-han', nota: 'Influencia directa en "La sociedad de la transparencia", agonía del Eros e hipercomunicación' },
      { nombre: 'Ética contemporánea y estudios sobre subjetividad digital', nota: 'Diagnóstico del consumo, las pantallas y los simulacros en la clínica actual' }
    ]
  },
  {
    id: 'derrida',
    nombre: 'Jacques Derrida',
    apellidoCorto: 'Derrida',
    matchKeys: ['derrida', 'jacques derrida'],
    materiaIdsExtra: [
      'problemas-filosoficos',
      'etica-deontologia-ddhh',
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'historia-psico'
    ],
    fechas: '1930 – 2004',
    origen: 'El Biar, Argelia francesa · París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo francés creador de la "deconstrucción" y una de las mayores figuras del pensamiento contemporáneo. Mantuvo un diálogo apasionante y crítico con Freud ("Freud y la escena de la escritura", "Mal de archivo"), Lacan ("El cartero de la verdad") y Foucault, y renovó la ética con la hospitalidad y la justicia.',
    biografia:
      'Nacido en una familia judía sefardí en Argelia y formado en la École Normale Supérieure de París, Jacques Derrida revolucionó la filosofía, la teoría literaria, el derecho y los estudios de género al proponer la "deconstrucción": no una destrucción nihilista, sino un trabajo minucioso para desmontar las oposiciones binarias jerárquicas (habla/escritura, presencia/ausencia, razón/locura, normal/patológico, masculino/femenino) sobre las que se apoyó la metafísica occidental.\n\nEn Buenos Aires y en Psicología UBA ocupa un lugar de enorme gravitación: leyó a Freud con una lucidez incomparable (el aparato psíquico como escritura y huella mnémica en la "Pizarra mágica" y el "Proyecto", el archivo y la pulsión de muerte en "Mal de archivo"), debatió a fondo con Lacan (en torno a "La carta robada" y el falogocentrismo) y con Foucault (sobre Descartes y la "Historia de la locura"), y aportó herramientas centrales para Ética y DD.HH. (distinción entre derecho y justicia, hospitalidad incondicional y duelo).',
    principalesAportes: [
      'Deconstrucción y crítica del "logocentrismo" y el "falogocentrismo": muestra cómo toda oposición binaria (naturaleza/cultura, cuerdo/loco, voz/escritura) privilegia un polo y reprime el otro, revelando que el término "secundario" es condición del primero.',
      'Noción de "différance" y "huella": el sentido nunca está dado en una presencia plena e idéntica a sí misma, sino que se produce por diferencia y diferimiento infinito —afinidad directa con el après-coup (Nachträglichkeit) freudiano.',
      'Lecturas decisivas de Freud y contrapunto con Lacan: en "Freud y la escena de la escritura" (1966) lee la memoria psíquica como escritura originaria y huella; en "Mal de archivo" (1995) cruza archivo, memoria y pulsión de muerte; en "El cartero de la verdad" (1975) discute con Lacan si una carta "llega siempre a su destino".',
      'Giro ético-político tardío: distinción entre "derecho" (calculable, deconstruible) y "justicia" (incalculable, experiencia de lo singular), más la ética de la "hospitalidad" ante la llegada imprevista del otro (clave en Ética, DD.HH. y clínica institucional).'
    ],
    conceptosClave: [
      {
        termino: 'Deconstrucción',
        explicacion:
          'Estrategia de lectura y análisis que desarma desde adentro las jerarquías binarias naturalizadas (normal/anormal, razón/locura, identidad/diferencia) para abrir paso a lo excluido.'
      },
      {
        termino: 'Différance y Huella (en diálogo con el après-coup)',
        explicacion:
          'Neologismo que condensa "diferir" (espacialmente) y "postergar" (temporalmente): no hay origen puro ni presencia plena, solo huellas que cobran sentido retroactivamente (como el trauma en Freud).'
      },
      {
        termino: 'Freud, la escena de la escritura y el Mal de archivo',
        explicacion:
          'El aparato psíquico freudiano no es un depósito de recuerdos intactos, sino una máquina de escritura, borradura y re-transcripción atravesada por la tensión entre conservación y pulsión de muerte.'
      },
      {
        termino: 'Hospitalidad y Derecho vs. Justicia',
        explicacion:
          'Las leyes son necesarias pero siempre insuficientes ante la singularidad de cada caso; la justicia y la hospitalidad exigen responder éticamente por la alteridad irreductible del otro.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La escritura y la diferencia (incluye "Freud y la escena de la escritura" y "Cogito e historia de la locura")',
        año: '1967',
        resumen: 'Reúne sus célebres lecturas de Freud y su histórico debate filosófico con Michel Foucault sobre la locura.'
      },
      {
        titulo: 'De la gramatología',
        año: '1967',
        resumen: 'Texto fundacional de la deconstrucción, crítica al logocentrismo y lectura de Saussure y Lévi-Strauss.'
      },
      {
        titulo: 'La tarjeta postal (de Sócrates a Freud y más allá) / Mal de archivo',
        año: '1980 / 1995',
        resumen: 'Contrapunto con Lacan sobre "La carta robada" y reflexión magistral sobre psicoanálisis, memoria y archivo.'
      },
      {
        titulo: 'Fuerza de ley / La hospitalidad',
        año: '1994 / 1997',
        resumen: 'Clásicos ético-políticos sobre derecho, justicia, responsabilidad y acogida del otro.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Punto de partida fenomenológico (su tesis y "La voz y el fenómeno")' },
      { nombre: 'Martin Heidegger', autorId: 'heidegger', nota: 'Destruktion de la metafísica de la presencia' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Huella mnémica, Nachträglichkeit, Pizarra mágica y pulsión de muerte' },
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Sistema de diferencias sin términos positivos radicalizado en la différance' },
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Crítica a la metafísica, juego de interpretaciones y genealogía' }
    ],
    influencioA: [
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Deconstrucción de los binarismos de género, iterabilidad y performatividad' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Interlocutor crítico clave sobre la letra, el falo y el destino del significante' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Famoso debate sobre Descartes, exclusión y razón en la "Historia de la locura"' },
      { nombre: 'Giorgio Agamben', autorId: 'agamben', nota: 'Diálogo sobre soberanía, fuerza de ley, lenguaje y hospitalidad' }
    ]
  }
];
