import type { AutorProfile } from './autores';

export const AUTORES_TANDA_5: AutorProfile[] = [
  // ======================== PSICOANÁLISIS ========================
  {
    id: 'jung',
    nombre: 'Carl G. Jung',
    apellidoCorto: 'Jung',
    matchKeys: ['jung'],
    materiaIdsExtra: ['historia-psico', 'psicoanalisis-freud', 'psico-personalidad', 'problemas-antropologicos'],
    fechas: '1875 – 1961',
    origen: 'Kesswil · Zúrich / Küsnacht, Suiza',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psiquiatra y psicoanalista suizo fundador de la Psicología Analítica. Amplió el inconsciente más allá de lo personal con el inconsciente colectivo, los arquetipos, la sombra, los tipos psicológicos y la individuación.',
    biografia:
      'Formado en psiquiatría junto a Eugen Bleuler en el hospital Burghölzli de Zúrich —donde investigó el test de asociación de palabras y la esquizofrenia—, Carl Gustav Jung fue el discípulo más cercano de Sigmund Freud y el primer presidente de la Asociación Psicoanalítica Internacional (IPA) antes de su resonante ruptura teórica en 1913.\n\nAl rechazar reducir toda la energía psíquica (libido) a la sexualidad infantil, fundó la Psicología Analítica. Aunque suele quedar marginado de las cátedras obligatorias de la UBA, sus nociones de introversión/extraversión, sombra, arquetipos y complejo se volvieron parte central de la cultura psicológica contemporánea.',
    principalesAportes: [
      'Formulación del "inconsciente colectivo": estrato profundo y compartido de la psique habitado por patrones simbólicos universales (arquetipos).',
      'Descripción de los grandes arquetipos (Persona, Sombra, Ánima/Ánimus y Sí-mismo/Self) y del proceso de "individuación" a lo largo de toda la vida.',
      'Creación de la tipología psicológica basada en actitudes (introversión / extraversión) y cuatro funciones psíquicas (pensamiento, sentimiento, sensación e intuición).',
      'Introducción del concepto de "complejo" afectivo (a partir de su experimento de asociación de palabras) y de "sincronicidad".'
    ],
    conceptosClave: [
      {
        termino: 'Inconsciente colectivo y Arquetipos',
        explicacion:
          'Disposiciones simbólicas heredadas comunes a toda la humanidad que se expresan en mitos, sueños y arte (la Madre, el Héroe, el Sabio, la Sombra).'
      },
      {
        termino: 'Persona y Sombra',
        explicacion:
          'La Persona es la máscara social con que nos adaptamos; la Sombra reúne los aspectos reprimidos, negados o no integrados de nuestra personalidad.'
      },
      {
        termino: 'Individuación',
        explicacion:
          'Proceso vital de integración consciente de lo inconsciente —especialmente en la segunda mitad de la vida— para llegar a ser el propio Sí-mismo (Self).'
      },
      {
        termino: 'Introversión y Extraversión',
        explicacion:
          'Orientación predominante de la energía psíquica hacia el mundo interno subjetivo (introversión) o hacia los objetos y vínculos externos (extraversión).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Tipos psicológicos',
        año: '1921',
        resumen: 'Introduce introversión, extraversión y las cuatro funciones de la conciencia.'
      },
      {
        titulo: 'Los arquetipos y lo inconsciente colectivo',
        año: '1934–1954',
        resumen: 'Reúne sus textos centrales sobre arquetipos, sombra, ánima y proceso de individuación.'
      },
      {
        titulo: 'Recuerdos, sueños, pensamientos',
        año: '1961',
        resumen: 'Autobiografía intelectual accesible que relata su clínica, sus crisis y su vínculo con Freud.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Diálogo fundacional, teoría del inconsciente y ruptura posterior' },
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Psicología profunda, mitología y crítica de la conciencia' },
      { nombre: 'William James', autorId: 'james', nota: 'Pragmatismo y tipologías del temperamento' }
    ],
    influencioA: [
      { nombre: 'Psicología Analítica y Psicología de la Personalidad', nota: 'Teorías de rasgos (introversión/extraversión) y clínica simbólica' }
    ]
  },
  {
    id: 'ferenczi',
    nombre: 'Sándor Ferenczi',
    apellidoCorto: 'Ferenczi',
    matchKeys: ['ferenczi'],
    materiaIdsExtra: [
      'psicoanalisis-freud',
      'psicoanalisis-inglesa-1',
      'psicoanalisis-inglesa-2',
      'historia-psico',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: '1873 – 1933',
    origen: 'Miskolc · Budapest, Hungría',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Médico y psicoanalista húngaro, "enfant terrible" del psicoanálisis y analista de Melanie Klein. Revalorizó el trauma real infantil, la "confusión de lenguas", el tacto clínico y la elasticidad de la técnica.',
    biografia:
      'Fundador de la Escuela de Budapest y uno de los interlocutores más creativos y afectivos de Sigmund Freud (con quien intercambió más de mil cartas), Sándor Ferenczi se dedicó a atender pacientes graves y traumatizados considerados "inanalizables" por la técnica clásica.\n\nSu audaz artículo "Confusión de lenguas entre los adultos y el niño" (1932) provocó tensiones con Freud al devolver centralidad al trauma real (abuso, desmentida del adulto) y anticipar conceptos retomados luego por Anna Freud, Winnicott y toda la clínica relacional contemporánea.',
    principalesAportes: [
      'Teoría de la "confusión de lenguas" entre el lenguaje de la ternura (del niño) y el lenguaje de la pasión (del adulto), junto al papel traumático de la "desmentida" posterior.',
      'Acuñación original del concepto de "identificación con el agresor" (antes de Anna Freud) y de la "introyección".',
      'Propuesta de la "elasticidad de la técnica analítica", el "tacto" (sentir con el paciente) y el análisis honesto de la contratransferencia.',
      'Impulso decisivo a la clínica de los casos límite, del trauma temprano y del análisis de niños (fue el primer analista de Melanie Klein).'
    ],
    conceptosClave: [
      {
        termino: 'Confusión de lenguas',
        explicacion:
          'El trauma sexual o afectivo infantil ocurre cuando el adulto responde con el lenguaje de la pasión a la búsqueda de ternura del niño y luego desmiente lo ocurrido.'
      },
      {
        termino: 'Elasticidad de la técnica y Tacto',
        explicacion:
          'El analista debe adaptarse como una banda elástica a las necesidades del paciente grave sin rigidez autoritaria ni hipocresía profesional.'
      },
      {
        termino: 'Introyección',
        explicacion:
          'Concepto introducido por Ferenczi en 1909 para nombrar la incorporación psíquica de objetos y vínculos del mundo externo hacia el Yo.'
      },
      {
        termino: 'Bebé sabio y Desmentida',
        explicacion:
          'Ante el trauma y la desmentida del adulto que niega el sufrimiento, el niño puede madurar precozmente de modo escindido para sobrevivir y cuidar a sus padres.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Confusión de lenguas entre los adultos y el niño',
        año: '1932',
        resumen: 'Conferencia revolucionaria sobre trauma real, desmentida e identificación con el agresor.'
      },
      {
        titulo: 'Diario clínico',
        año: '1932 (publicado en 1985)',
        resumen: 'Reflexiones de una honestidad radical sobre contratransferencia, trauma y límites de la cura.'
      },
      {
        titulo: 'Elasticidad de la técnica psicoanalítica',
        año: '1928',
        resumen: 'Plantea el tacto, la empatía y la segunda regla fundamental (el análisis del propio analista).'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Colaborador íntimo, discípulo creativo e interlocutor crítico' }
    ],
    influencioA: [
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Primer analista de Klein y mentor en el análisis de niños' },
      { nombre: 'Donald W. Winnicott', autorId: 'winnicott', nota: 'Regresión en la cura, trauma temprano y ambiente fallido' },
      { nombre: 'Anna Freud', autorId: 'anna-freud', nota: 'Retoma el concepto de identificación con el agresor' },
      { nombre: 'Fernando Ulloa', autorId: 'ulloa', nota: 'Resonancias en la institución de la ternura y la clínica del desamparo' }
    ]
  },

  // ======================== REFERENTES UBA / ARGENTINA ========================
  {
    id: 'nasio',
    nombre: 'Juan-David Nasio',
    apellidoCorto: 'Nasio',
    matchKeys: ['nasio', 'nassio'],
    materiaIdsExtra: [
      'psicoanalisis-freud',
      'psicoanalisis-francesa-1',
      'psicoanalisis-francesa-2',
      'psicopatologia',
      'psico-clinica-psicoterapias-1'
    ],
    fechas: '1942 – presente',
    origen: 'Rosario, Argentina · París, Francia',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psiquiatra y psicoanalista argentino radicado en París, discípulo y traductor de Jacques Lacan. Reconocido por la claridad didáctica de sus libros sobre Freud, Lacan, histeria, fantasma y dolor psíquico.',
    biografia:
      'Nacido en Rosario y graduado en medicina en la UBA, Juan-David Nasio se radicó en París en 1969, donde asistió durante más de una década al seminario de Jacques Lacan, tradujo sus "Escritos" al español junto a Tomás Segovia y fundó en 1986 los Seminarios Psicoanalíticos de París.\n\nPara generaciones de estudiantes de Psicología UBA, Nasio cumple un papel insustituible: vuelve legibles, clínicos y rigurosos algunos de los conceptos más difíciles de Freud y Lacan —como forclusión, objeto a, goce, fantasma, histeria y duelo— sin perder profundidad metapsicológica.',
    principalesAportes: [
      'Sistematización clara y clínica de los conceptos cruciales de Freud y Lacan (castración, falo, narcisismo, sublimación, identificación, superyó y forclusión).',
      'Estudios clínicos accesibles sobre el dolor psíquico, el duelo, la histeria, el fantasma inconsciente y las formaciones del objeto a.',
      'Traducción, revisión y difusión internacional de la enseñanza de Jacques Lacan entre Francia y el mundo hispanohablante.',
      'Articulación didáctica de la psicopatología psicoanalítica con viñetas clínicas comentadas paso a paso.'
    ],
    conceptosClave: [
      {
        termino: 'Los 7 conceptos cruciales',
        explicacion:
          'Recorrido estructurado por castración, falo, narcisismo, sublimación, identificación, superyó y forclusión como pilares para pensar la clínica.'
      },
      {
        termino: 'Dolor psíquico',
        explicacion:
          'Afecto límite provocado por la ruptura brutal del lazo con un objeto amado o una parte del cuerpo, donde el yo queda desbordado por una sobrecarga de excitación.'
      },
      {
        termino: 'El fantasma inconsciente',
        explicacion:
          'Guion imaginario-simbólico estable que encuadra el deseo del sujeto, organiza sus repeticiones amorosas y lo protege frente a la angustia.'
      },
      {
        termino: 'El dolor de la histeria',
        explicacion:
          'Lectura clínica de la histeria a partir de la insatisfacción del deseo, la conversión corporal y la pregunta por el deseo del Otro.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Enseñanza de 7 conceptos cruciales del psicoanálisis',
        año: '1988',
        resumen: 'Uno de los libros más consultados por estudiantes para dominar metapsicología freudiana y lacaniana.'
      },
      {
        titulo: 'Cinco lecciones sobre la teoría de Jacques Lacan',
        año: '1992',
        resumen: 'Introducción sumamente clara al inconsciente estructurado como un lenguaje, el goce y el objeto a.'
      },
      {
        titulo: 'El dolor de la histeria / El libro del dolor y del amor',
        año: '1990 / 1996',
        resumen: 'Clásicos clínicos sobre el sufrimiento histérico, el duelo y el trabajo psíquico del dolor.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Maestro directo en París y eje de su transmisión clínica' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Base metapsicológica y clínica de las neurosis y el duelo' },
      { nombre: 'Françoise Dolto', autorId: 'dolto', nota: 'Interlocución cercana y difusión de la imagen inconsciente del cuerpo' }
    ],
    influencioA: [
      { nombre: 'Estudiantes y clínicos psicoanalíticos hispanohablantes', nota: 'Puerta de entrada didáctica y rigurosa a Freud y Lacan en la UBA' }
    ]
  },

  // ======================== FILOSOFÍA Y FENOMENOLOGÍA ========================
  {
    id: 'ricoeur',
    nombre: 'Paul Ricoeur',
    apellidoCorto: 'Ricoeur',
    matchKeys: ['ricoeur'],
    materiaIdsExtra: ['problemas-filosoficos', 'psico-fenomenologica-existencial', 'historia-psico', 'etica-deontologia-ddhh'],
    fechas: '1913 – 2005',
    origen: 'Valence · París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo francés referente de la hermenéutica contemporánea. Acuñó la célebre expresión "maestros de la sospecha" (Marx, Nietzsche y Freud) y desarrolló los conceptos de identidad narrativa y memoria justa.',
    biografia:
      'Formado en fenomenología y filosofía reflexiva en Francia, Paul Ricoeur construyó una obra monumental dedicada a la interpretación (hermenéutica), el símbolo, la metáfora, el tiempo y el relato. Su libro "Freud: una interpretación de la cultura" (1965) es una de las lecturas filosóficas más profundas y respetuosas jamás escritas sobre la metapsicología freudiana.\n\nEn Psicología es clave tanto por pensar el estatuto epistemológico del psicoanálisis (entre energética de las fuerzas y hermenéutica del sentido) como por su noción de "identidad narrativa": nos conocemos a nosotros mismos narrando nuestra historia.',
    principalesAportes: [
      'Formulación de los tres "maestros de la sospecha" (Marx, Nietzsche y Freud) que desenmascaran las ilusiones de la conciencia transparente.',
      'Lectura epistemológica del psicoanálisis en "Freud: una interpretación de la cultura" como discurso mixto de fuerza (energética) y sentido (hermenéutica).',
      'Teoría de la "identidad narrativa": distinción entre identidad-mismidad (idem, lo que permanece igual) e identidad-ipseidad (ipse, la promesa y el relato de sí).',
      'Reflexiones sobre memoria, historia, olvido y justicia ("La memoria, la historia, el olvido"), muy citadas en Ética y Derechos Humanos.'
    ],
    conceptosClave: [
      {
        termino: 'Maestros de la sospecha',
        explicacion:
          'Marx, Nietzsche y Freud muestran que la conciencia no es dueña de sí: hay que descifrar los intereses, fuerzas y deseos ocultos detrás del sentido manifiesto.'
      },
      {
        termino: 'Identidad narrativa (Idem / Ipse)',
        explicacion:
          'La identidad personal no es una sustancia fija (idem), sino una trama en construcción que integra cambios, rupturas y promesas a través del relato (ipse).'
      },
      {
        termino: 'Hermenéutica y Símbolo',
        explicacion:
          '"El símbolo da que pensar": los sueños, mitos y síntomas tienen doble sentido y requieren un trabajo de interpretación sin agotarse en una explicación mecánica.'
      },
      {
        termino: 'Sí mismo como otro',
        explicacion:
          'La alteridad no es externa al sujeto: la propia identidad se constituye en diálogo ético y narrativo con los otros.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Freud: una interpretación de la cultura',
        año: '1965',
        resumen: 'Análisis filosófico clásico sobre epistemología freudiana, sospecha e interpretación.'
      },
      {
        titulo: 'Sí mismo como otro',
        año: '1990',
        resumen: 'Desarrolla la distinción idem/ipse, la identidad narrativa y la ética de la vida buena con otros.'
      },
      {
        titulo: 'La memoria, la historia, el olvido',
        año: '2000',
        resumen: 'Indaga trauma histórico, memoria impedida, duelo colectivo y deber de memoria.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Traductor de Husserl al francés y base fenomenológica' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Diálogo profundo sobre el inconsciente y la interpretación' },
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Escuela de la sospecha y genealogía del sentido' },
      { nombre: 'Karl Jaspers', autorId: 'jaspers', nota: 'Filosofía de la existencia, libertad y culpa' }
    ],
    influencioA: [
      { nombre: 'Jerome S. Bruner', autorId: 'bruner', nota: 'Psicología cultural y pensamiento narrativo' },
      { nombre: 'Psicología narrativa y Ética contemporánea', nota: 'Relato de sí, memoria y clínica del testimonio' }
    ]
  },
  {
    id: 'esposito',
    nombre: 'Roberto Esposito',
    apellidoCorto: 'Esposito',
    matchKeys: ['esposito'],
    materiaIdsExtra: [
      'problemas-filosoficos',
      'etica-deontologia-ddhh',
      'psico-politica-2',
      'salud-publica-mental',
      'psico-social'
    ],
    fechas: '1950 – presente',
    origen: 'Nápoles · Pisa, Italia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo italiano contemporáneo referente de la biopolítica junto a Foucault y Agamben. Formuló la polaridad entre Communitas e Immunitas y el paradigma inmunitario de la modernidad.',
    biografia:
      'Profesor de Filosofía Teorética en la Scuola Normale Superiore de Pisa, Roberto Esposito es una de las voces más originales de la filosofía política italiana contemporánea. Su célebre trilogía ("Communitas", "Immunitas" y "Bíos") dialoga estrechamente con Michel Foucault y Giorgio Agamben.\n\nA partir de la etimología de "munus" (don/obligación compartida), Esposito mostró que la modernidad política busca protegernos del contagio y la exposición a los otros mediante dispositivos de inmunización que, cuando se llevan al extremo, terminan volviéndose autoinmunes y destruyendo el lazo social.',
    principalesAportes: [
      'Reconstrucción de la "Communitas" no como una propiedad o identidad cerrada, sino como exposición común a una falta y obligación recíproca (munus).',
      'Formulación del "paradigma inmunitario" (Immunitas): mecanismos jurídicos, médicos y políticos que protegen la vida individual aislándola de lo común.',
      'Búsqueda de una "biopolítica afirmativa" (en contrapunto con la lectura más sombría de Agamben) que evite el giro tanatopolítico y autoinmune.',
      'Crítica filosófica a la categoría jurídica excluyente de "persona" y rescate de la dimensión de lo "impersonal".'
    ],
    conceptosClave: [
      {
        termino: 'Communitas (Munus)',
        explicacion:
          'Lo que une a los miembros de una comunidad no es una esencia compartida ("tener algo en común"), sino un deber, una deuda y una apertura vulnerable hacia el otro.'
      },
      {
        termino: 'Immunitas (Paradigma inmunitario)',
        explicacion:
          'Exención del deber común: defiende la vida frente a amenazas externas, pero en exceso genera clausura, rechazo del extranjero y "autoinmunidad" destructiva.'
      },
      {
        termino: 'Biopolítica afirmativa vs. Tanatopolítica',
        explicacion:
          'Diferencia entre políticas que cuidan y potencian la vida compartida y aquellas que, obsesionadas por la pureza o seguridad, producen exclusión y muerte.'
      },
      {
        termino: 'Filosofía de lo impersonal',
        explicacion:
          'Critica cómo el concepto tradicional de "persona" históricamente separó a humanos con derechos plenos de cuerpos despersonalizados.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Communitas: origen y destino de la comunidad',
        año: '1998',
        resumen: 'Reformula el lazo comunitario desde la exposición y el munus compartido.'
      },
      {
        titulo: 'Immunitas: protección y negación de la vida',
        año: '2002',
        resumen: 'Analiza el dispositivo inmunitario en el derecho, la medicina, la salud pública y la política.'
      },
      {
        titulo: 'Bíos: biopolítica y filosofía',
        año: '2004',
        resumen: 'Diálogo decisivo con Foucault, Nietzsche y Agamben hacia una biopolítica afirmativa.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Biopolítica y genealogía de los dispositivos de poder' },
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Vida, cuerpo y crítica de los ideales inmunitarios' },
      { nombre: 'Giorgio Agamben', autorId: 'agamben', nota: 'Diálogo italiano contemporáneo sobre biopolítica y soberanía' }
    ],
    influencioA: [
      { nombre: 'Debates contemporáneos sobre Salud Colectiva, Comunidad y DD.HH.', nota: 'Lectura política de pandemias, cuidados y lazo social' }
    ]
  },
  {
    id: 'deleuze',
    nombre: 'Gilles Deleuze',
    apellidoCorto: 'Deleuze',
    matchKeys: ['deleuze', 'guattari'],
    materiaIdsExtra: [
      'problemas-filosoficos',
      'teoria-tecnica-grupos',
      'psico-organizacional-institucional',
      'psico-politica-2',
      'salud-publica-mental'
    ],
    fechas: '1925 – 1995',
    origen: 'París, Francia',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofo francés que junto al psicoanalista Félix Guattari escribió "El Antiedipo" y "Mil Mesetas". Formuló las nociones de rizoma, deseo productivo, esquizoanálisis y "sociedades de control".',
    biografia:
      'Profesor en la Universidad de París VIII (Vincennes) y amigo estrecho de Michel Foucault, Gilles Deleuze renovó la filosofía de la diferencia y, en colaboración con el psicoanalista institucional Félix Guattari, lanzó en 1972 "El Antiedipo": una crítica resonante a la reducción del deseo a la carencia y al triángulo familiar edípico.\n\nEn Psicología UBA es lectura clave en Teoría y Técnica de Grupos (junto a Ana María Fernández), Psicología Institucional y Problemas Filosóficos, especialmente por su breve y profético ensayo "Post-scriptum sobre las sociedades de control" (1990).',
    principalesAportes: [
      'Crítica al "familismo edípico" y reconceptualización del deseo no como falta o carencia sino como potencia productiva y creadora de conexiones ("máquinas deseantes").',
      'Concepto de "Rizoma" (junto a Guattari): pensamiento horizontal, múltiple y descentrado frente a los modelos jerárquicos en forma de árbol.',
      'Diagnóstico de las "sociedades de control" (1990): transición desde el encierro disciplinario (fábrica, escuela, manicomio) hacia el control continuo, modular y endeudado.',
      'Distinción entre lo molar (identidades y estructuras rígidas) y lo molecular (flujos, afectos y líneas de fuga).'
    ],
    conceptosClave: [
      {
        termino: 'Sociedades de control',
        explicacion:
          'Continuación de Foucault: el poder ya no requiere muros de encierro fijos sino vigilancia abierta, formación permanente, claves digitales, evaluación continua y deuda.'
      },
      {
        termino: 'Rizoma',
        explicacion:
          'Modelo de pensamiento y organización sin centro ni jerarquía fija donde cualquier punto puede conectarse con cualquier otro.'
      },
      {
        termino: 'Deseo como producción (El Antiedipo)',
        explicacion:
          'Frente a la tradición que piensa el deseo desde lo que falta, Deleuze y Guattari lo conciben como fuerza productiva que fabrica realidad, vínculos y agenciamientos.'
      },
      {
        termino: 'Agenciamiento y Líneas de fuga',
        explicacion:
          'Ensamblajes heterogéneos de cuerpos, enunciados y máquinas; las líneas de fuga abren salidas creativas frente a las capturas instituidas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El Antiedipo: capitalismo y esquizofrenia (con Félix Guattari)',
        año: '1972',
        resumen: 'Crítica célebre al Edipo familiarista y propuesta del esquizoanálisis.'
      },
      {
        titulo: 'Mil Mesetas (con Félix Guattari)',
        año: '1980',
        resumen: 'Introduce rizoma, devenir, cuerpo sin órganos y agenciamientos colectivos.'
      },
      {
        titulo: 'Post-scriptum sobre las sociedades de control',
        año: '1990',
        resumen: 'Ensayo breve y obligatorio en múltiples cátedras sobre el pasaje de la disciplina al control.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Friedrich Nietzsche', autorId: 'nietzsche', nota: 'Afirmación vital, fuerzas activas y crítica del resentimiento' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Diálogo intenso sobre dispositivos, disciplina y poder' },
      { nombre: 'Baruch Spinoza y Henri Bergson', nota: 'Afectos, potencia de obrar y diferencia' }
    ],
    influencioA: [
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Multiplicidades, dispositivos grupales y lógicas colectivas en la UBA' },
      { nombre: 'Byung-Chul Han', autorId: 'byung-chul-han', nota: 'Transición post-disciplinaria hacia el control continuo' }
    ]
  },
  {
    id: 'butler',
    nombre: 'Judith Butler',
    apellidoCorto: 'Butler',
    matchKeys: ['butler'],
    materiaIdsExtra: [
      'estudios-genero',
      'etica-deontologia-ddhh',
      'problemas-filosoficos',
      'psico-social',
      'abordaje-prevencion-violencias-genero'
    ],
    fechas: '1956 – presente',
    origen: 'Cleveland · Berkeley, Estados Unidos',
    corriente: 'Filosofía y Fenomenología',
    resumenCorto:
      'Filósofa estadounidense referente internacional en teoría de género, filosofía política y ética. Formuló la teoría de la performatividad de género y reflexionó sobre vulnerabilidad, duelo y vidas precarias.',
    biografia:
      'Doctora en Filosofía por Yale y profesora emérita en la Universidad de California en Berkeley, Judith Butler transformó los debates contemporáneos sobre género, sexualidad y subjetividad con la publicación de "El género en disputa" (1990).\n\nEn diálogo crítico con Michel Foucault, Sigmund Freud, Jacques Lacan y Simone de Beauvoir, mostró que el género no es una esencia biológica previa sino una construcción performativa sostenida por normas reiteradas. En Psicología UBA es bibliografía central en Estudios de Género, Ética y DD.HH. y debates clínicos contemporáneos.',
    principalesAportes: [
      'Teoría de la "performatividad de género": el género no es algo que "se es" por naturaleza, sino algo que "se hace" mediante actos, gestos y discursos repetidos bajo normas sociales.',
      'Cuestionamiento de la dicotomía rígida sexo (natural) / género (cultural) y crítica a la matriz heterosexual normativa.',
      'Ética de la vulnerabilidad y la precariedad: interroga qué vidas son consideradas "duelables" y reconocidas plenamente como humanas.',
      'Relectura crítica de Freud y Lacan en torno a la melancolía de género, el parentesco y la violencia normativa.'
    ],
    conceptosClave: [
      {
        termino: 'Performatividad de género',
        explicacion:
          'No es elegir un disfraz libremente cada mañana, sino la repetición estilizada y regulada de normas que producen el efecto ilusorio de una identidad natural fija.'
      },
      {
        termino: 'Normas de inteligibilidad y Abyección',
        explicacion:
          'Regímenes sociales que definen qué cuerpos y deseos resultan "inteligibles" o legítimos y cuáles son empujados a la exclusión.'
      },
      {
        termino: 'Vidas precarias y Duelabilidad',
        explicacion:
          'Todos los seres humanos somos interdependientes y vulnerables, pero el poder distribuye de modo desigual qué vidas merecen cuidado y duelo público.'
      },
      {
        termino: 'Subversión y Agencia',
        explicacion:
          'Como las normas de género necesitan repetirse todo el tiempo para sostenerse, en esa misma repetición surgen grietas para desplazarlas y transformarlas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El género en disputa: el feminismo y la subversión de la identidad',
        año: '1990',
        resumen: 'Obra fundacional de la teoría performativa del género y los estudios queer.'
      },
      {
        titulo: 'Cuerpos que importan',
        año: '1993',
        resumen: 'Profundiza la materialidad de los cuerpos y la normatividad sexual en diálogo con Freud y Lacan.'
      },
      {
        titulo: 'Vida precaria: el poder del duelo y la violencia',
        año: '2004',
        resumen: 'Reflexión ética y política sobre vulnerabilidad, alteridad y reconocimiento.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Genealogía de la sexualidad y producción normativa de sujetos' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Duelo y melancolía releídos en clave de género' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Diálogo crítico sobre lo simbólico y la diferencia sexual' },
      { nombre: 'Simone de Beauvoir y J. L. Austin', nota: '"No se nace mujer" y actos de habla performativos' }
    ],
    influencioA: [
      { nombre: 'Ana María Fernández', autorId: 'ana-maria-fernandez', nota: 'Diálogo con los estudios de género y subjetividades en la UBA' },
      { nombre: 'Estudios de Género y Clínica Contemporánea', nota: 'Despatologización de identidades y ética de la diversidad' }
    ]
  },

  // ======================== DESARROLLO Y COGNICIÓN ========================
  {
    id: 'james',
    nombre: 'William James',
    apellidoCorto: 'William James',
    matchKeys: ['william james', 'james, w'],
    materiaIdsExtra: ['historia-psico', 'procesos-psico-basicos', 'cbc-psico', 'problemas-filosoficos'],
    fechas: '1842 – 1910',
    origen: 'Nueva York · Cambridge (Harvard), Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Médico, filósofo y psicólogo estadounidense, padre del funcionalismo y cofundador del pragmatismo junto a Peirce. Autor de los célebres "Principios de Psicología" (1890), describió el flujo de la conciencia y la emoción.',
    biografia:
      'Profesor en Harvard —donde montó un laboratorio demostrativo de psicología en la misma década que Wundt en Leipzig—, William James publicó en 1890 "Principios de Psicología", obra maestra que fundó la psicología funcionalista norteamericana.\n\nA diferencia del elementalismo estructuralista que intentaba descomponer la mente en átomos sensoriales, James concibió la conciencia como una corriente continua con función adaptativa ("¿para qué sirve la mente?"), anticipando estudios modernos de atención, hábito, memoria primaria/secundaria y neurociencia afectiva.',
    principalesAportes: [
      'Formulación del Funcionalismo: estudiar los procesos mentales por su función adaptativa para el organismo en su entorno, bajo inspiración darwiniana.',
      'Metáfora del "flujo de la conciencia" (stream of consciousness): la experiencia consciente es personal, cambiante, continua y selectiva.',
      'Teoría periférica de la emoción (James–Lange): primero ocurre la reacción corporal/visceral ante un estímulo y la emoción es la percepción de ese cambio corporal.',
      'Distinción clásica entre el "Mí" (yo empírico: material, social y espiritual) y el "Yo" (sujeto conocedor), además del co-desarrollo del pragmatismo junto a Peirce.'
    ],
    conceptosClave: [
      {
        termino: 'Flujo de la conciencia',
        explicacion:
          'La conciencia no es una cadena de piezas sueltas sino un río continuo, personal y selectivo en constante movimiento.'
      },
      {
        termino: 'Funcionalismo',
        explicacion:
          'Corriente centrada en el "para qué" de la mente, la atención y los hábitos como herramientas de adaptación activa al ambiente.'
      },
      {
        termino: 'Teoría de la emoción (James–Lange)',
        explicacion:
          'Invierte el sentido común: "no lloramos porque estamos tristes, sino que estamos tristes porque lloramos" —antecedente clave de Antonio Damasio.'
      },
      {
        termino: 'Pragmatismo',
        explicacion:
          'El valor y la verdad de una idea se prueban por sus consecuencias prácticas y su capacidad de orientarnos en la experiencia.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Principios de Psicología (2 volúmenes)',
        año: '1890',
        resumen: 'Clásico fundacional de Historia de la Psicología sobre conciencia, hábito, memoria, emoción y self.'
      },
      {
        titulo: 'Pragmatismo',
        año: '1907',
        resumen: 'Populariza el método pragmatista iniciado junto a Charles S. Peirce.'
      },
      {
        titulo: 'Las variedades de la experiencia religiosa',
        año: '1902',
        resumen: 'Estudio psicológico empático y pionero sobre las vivencias espirituales.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Charles S. Peirce', autorId: 'peirce', nota: 'Amigo íntimo y fundador original del pragmatismo' },
      { nombre: 'Charles Darwin', nota: 'Teoría evolutiva y perspectiva adaptativa de la mente' }
    ],
    influencioA: [
      { nombre: 'Antonio Damasio', autorId: 'damasio', nota: 'Neurociencia de las emociones corporales (hipótesis del marcador somático)' },
      { nombre: 'Carl G. Jung', autorId: 'jung', nota: 'Tipologías psicológicas y respeto por la experiencia subjetiva' },
      { nombre: 'Edmund Husserl', autorId: 'husserl', nota: 'Descripción del flujo de la conciencia y sus horizontes' }
    ]
  },
  {
    id: 'erikson',
    nombre: 'Erik H. Erikson',
    apellidoCorto: 'Erikson',
    matchKeys: ['erikson'],
    materiaIdsExtra: [
      'psico-desarrollo-adolescencia',
      'psico-desarrollo-niñez',
      'psico-tercera-edad-vejez',
      'psicoanalisis-psico-yo'
    ],
    fechas: '1902 – 1994',
    origen: 'Fráncfort, Alemania · Viena · Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicoanalista alemán-estadounidense de la Psicología del Yo, creador de la teoría del desarrollo psicosocial en 8 etapas a lo largo de toda la vida y referente sobre identidad y moratoria adolescente.',
    biografia:
      'Analizado por Anna Freud en Viena antes de emigrar a Estados Unidos en 1933, Erik Homburger Erikson amplió el desarrollo psicosexual freudiano incorporando la dimensión histórica, cultural y social y extendiéndolo desde el nacimiento hasta la vejez.\n\nEn Psicología del Desarrollo (Niñez, Adolescencia y Tercera Edad y Vejez) es un autor de consulta constante gracias a sus ocho crisis psicosociales normativas y a su célebre análisis de la búsqueda de identidad y la "moratoria psicosocial" en la juventud.',
    principalesAportes: [
      'Teoría de las ocho etapas del desarrollo psicosocial a lo largo de todo el ciclo vital (principio epigenético), cada una estructurada por una crisis normativa.',
      'Profundización del concepto de "identidad del Yo" y "confusión de identidad" como tarea central de la adolescencia.',
      'Noción de "moratoria psicosocial": período de espera socialmente habilitado en la juventud para explorar roles, valores y proyectos antes de compromisos definitivos.',
      'Revalorización de la adultez (generatividad vs. estancamiento) y la vejez (integridad del yo vs. desesperación) como etapas con tareas psíquicas propias.'
    ],
    conceptosClave: [
      {
        termino: 'Ocho etapas psicosociales',
        explicacion:
          'Secuencia vital de polaridades (desde Confianza básica vs. Desconfianza en el bebé hasta Integridad vs. Desesperación en la vejez) que dejan virtudes yoicas.'
      },
      {
        termino: 'Identidad vs. Confusión de roles',
        explicacion:
          'Crisis central de la adolescencia: integrar identificaciones infantiles, cambios corporales y expectativas sociales en un sentido coherente y continuo de sí.'
      },
      {
        termino: 'Moratoria psicosocial',
        explicacion:
          'Pausa o margen de experimentación que la cultura ofrece al adolescente para probar identidades y vocaciones sin sanción irreversible.'
      },
      {
        termino: 'Generatividad e Integridad',
        explicacion:
          'En la adultez, el cuidado y transmisión hacia las nuevas generaciones; en la vejez, la aceptación serena de la propia historia vivida.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Infancia y sociedad',
        año: '1950',
        resumen: 'Presenta las ocho edades del hombre y la articulación entre psicoanálisis y cultura.'
      },
      {
        titulo: 'Identidad, juventud y crisis',
        año: '1968',
        resumen: 'Texto clásico en Psicología del Desarrollo: Adolescencia sobre identidad y moratoria.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Anna Freud', autorId: 'anna-freud', nota: 'Analista en Viena y tradición de la Psicología del Yo' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Desarrollo psicosexual que expande al plano psicosocial' }
    ],
    influencioA: [
      { nombre: 'Psicología del Ciclo Vital y Gerontología', nota: 'Estudio del desarrollo humano más allá de la infancia (adolescencia y vejez)' },
      { nombre: 'Carol Gilligan', autorId: 'gilligan', nota: 'Colaboración docente en Harvard y debate sobre identidad relacional' }
    ]
  },
  {
    id: 'kohlberg',
    nombre: 'Lawrence Kohlberg',
    apellidoCorto: 'Kohlberg',
    matchKeys: ['kohlberg'],
    materiaIdsExtra: [
      'psico-desarrollo-niñez',
      'psico-desarrollo-adolescencia',
      'etica-deontologia-ddhh',
      'psico-aprendizaje'
    ],
    fechas: '1927 – 1987',
    origen: 'Bronxville · Chicago / Harvard, Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo estadounidense continuador de Jean Piaget en el estudio del juicio moral. Formuló los tres niveles y seis estadios del desarrollo moral mediante dilemas hipotéticos (como el dilema de Heinz).',
    biografia:
      'Doctorado en la Universidad de Chicago y profesor en Harvard, Lawrence Kohlberg retomó las investigaciones pioneras de Jean Piaget sobre el juicio moral infantil y las extendió a la adolescencia y la adultez mediante entrevistas basadas en dilemas morales hipotéticos.\n\nSu modelo —centrado en el razonamiento sobre la justicia y los derechos universales— dio lugar a uno de los debates más fértiles de la psicología del siglo XX cuando su colaboradora Carol Gilligan cuestionó su sesgo androcéntrico y propuso la ética del cuidado.',
    principalesAportes: [
      'Formulación de los tres niveles (Preconvencional, Convencional y Posconvencional) y seis estadios universales del desarrollo del juicio moral.',
      'Creación del método de los dilemas morales (como el célebre Dilema de Heinz): lo relevante no es si se responde "sí" o "no", sino el tipo de argumentación que justifica la decisión.',
      'Articulación del desarrollo cognitivo piagetiano como condición necesaria (aunque no suficiente) para alcanzar juicios morales autónomos.',
      'Aplicaciones pedagógicas en programas de educación moral y "comunidades justas" en escuelas.'
    ],
    conceptosClave: [
      {
        termino: 'Nivel Preconvencional (Estadios 1 y 2)',
        explicacion:
          'Moral centrada en consecuencias externas inmediatas: evitar el castigo (obediencia) o buscar el intercambio instrumental favorable.'
      },
      {
        termino: 'Nivel Convencional (Estadios 3 y 4)',
        explicacion:
          'Conformidad con las expectativas del grupo cercano ("ser buena persona") y respeto por la ley y el orden social establecido.'
      },
      {
        termino: 'Nivel Posconvencional (Estadios 5 y 6)',
        explicacion:
          'Juicio moral autónomo guiado por el contrato social democrático y principios éticos universales de justicia y dignidad humana por encima de leyes injustas.'
      },
      {
        termino: 'Dilema de Heinz',
        explicacion:
          'Dilema clásico (robar o no un medicamento impagable para salvar una vida) usado para evaluar la estructura lógica del razonamiento moral.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Psicología del desarrollo moral',
        año: '1984',
        resumen: 'Compilación definitiva de su teoría de los seis estadios y el debate sobre justicia y moral.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'El criterio moral en el niño y el enfoque constructivista por estadios' },
      { nombre: 'Immanuel Kant y John Rawls', nota: 'Ética deontológica, autonomía y principios de justicia' }
    ],
    influencioA: [
      { nombre: 'Carol Gilligan', autorId: 'gilligan', nota: 'Crítica decisiva que dio origen a la Ética del Cuidado' },
      { nombre: 'Psicología del Desarrollo y Ética Profesional', nota: 'Evaluación del razonamiento ético ante dilemas clínicos' }
    ]
  },

  // ======================== SOCIAL E INSTITUCIONAL ========================
  {
    id: 'gilligan',
    nombre: 'Carol Gilligan',
    apellidoCorto: 'Gilligan',
    matchKeys: ['gilligan'],
    materiaIdsExtra: [
      'etica-deontologia-ddhh',
      'estudios-genero',
      'psico-desarrollo-adolescencia',
      'psico-social'
    ],
    fechas: '1936 – presente',
    origen: 'Nueva York · Harvard / NYU, Estados Unidos',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Psicóloga y filósofa moral estadounidense autora de "In a Different Voice" (1982). Creó la Ética del Cuidado al cuestionar el sesgo androcéntrico de la teoría del desarrollo moral de Lawrence Kohlberg.',
    biografia:
      'Discípula y colaboradora de Erik Erikson y Lawrence Kohlberg en Harvard, Carol Gilligan advirtió a fines de los años 70 que las grandes teorías del desarrollo psicológico y moral habían tomado exclusivamente muestras masculinas como parámetro universal de madurez.\n\nAl publicar "In a Different Voice" ("La moral y la teoría", 1982) abrió un campo entero en la ética y la psicología: mostró que junto a una ética abstracta de la justicia y los derechos existe una "ética del cuidado", centrada en la responsabilidad contextual, los vínculos y el no dañar. Es lectura fundamental en Ética y DD.HH. y Estudios de Género en la UBA.',
    principalesAportes: [
      'Formulación de la "Ética del Cuidado" como perspectiva moral legítima y complementaria frente a la ética universalista de la justicia.',
      'Crítica metodológica y epistemológica al androcentrismo en la psicología del desarrollo (Freud, Piaget, Erikson y Kohlberg).',
      'Descripción de la evolución de la ética del cuidado en tres momentos: atención centrada en el yo, abnegación centrada solo en los otros y cuidado maduro que integra el cuidado de sí y de los demás.',
      'Escucha clínica e investigativa de las voces de niñas y adolescentes frente a los mandatos patriarcales.'
    ],
    conceptosClave: [
      {
        termino: 'Ética del cuidado vs. Ética de la justicia',
        explicacion:
          'La ética de la justicia razona con reglas imparciales y derechos abstractos; la ética del cuidado atiende a la singularidad del contexto, la interdependencia y la responsabilidad vincular.'
      },
      {
        termino: 'Una voz diferente (In a Different Voice)',
        explicacion:
          'No es una esencia biológica femenina, sino una voz relacional históricamente asociada a los cuidados que la teoría psicológica había juzgado como "inmadura".'
      },
      {
        termino: 'Cuidado de sí y de los otros',
        explicacion:
          'La madurez en la ética del cuidado supera el autosacrificio: exige incluirse a una misma dentro de la red de personas dignas de cuidado y respeto.'
      },
      {
        termino: 'Interdependencia relacional',
        explicacion:
          'Cuestiona el ideal patriarcal del individuo autosuficiente y aislado, reivindicando la vulnerabilidad y el lazo como base de toda democracia.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La moral y la teoría: psicología del desarrollo femenino (In a Different Voice)',
        año: '1982',
        resumen: 'Obra histórica que fundó la Ética del Cuidado y revolucionó los debates éticos en psicología.'
      },
      {
        titulo: 'La ética del cuidado',
        año: '2013',
        resumen: 'Actualiza su planteo articulando cuidado, feminismo y resistencia al patriarcado.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Lawrence Kohlberg', autorId: 'kohlberg', nota: 'Colaboración en Harvard y punto de partida de su crítica sobre desarrollo moral' },
      { nombre: 'Erik H. Erikson', autorId: 'erikson', nota: 'Trabajo docente conjunto sobre identidad y ciclo vital' }
    ],
    influencioA: [
      { nombre: 'Ética, Bioética y Estudios de Género contemporáneos', nota: 'Centralidad de los cuidados en salud mental, políticas públicas y clínica' },
      { nombre: 'Judith Butler', autorId: 'butler', nota: 'Convergencia en torno a la interdependencia y la vulnerabilidad humana' }
    ]
  },
  {
    id: 'basaglia',
    nombre: 'Franco Basaglia',
    apellidoCorto: 'Basaglia',
    matchKeys: ['basaglia'],
    materiaIdsExtra: [
      'salud-publica-mental',
      'salud-mental-desinstitucionalizacion',
      'etica-deontologia-ddhh',
      'psico-organizacional-institucional'
    ],
    fechas: '1924 – 1980',
    origen: 'Venecia · Gorizia / Trieste, Italia',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Médico psiquiatra italiano líder de la Psiquiatría Democrática y artífice de la desmanicomialización (Ley 180 en Italia). Su práctica transformadora inspiró directamente la Ley Nacional de Salud Mental 26.657 en Argentina.',
    biografia:
      'Formado inicialmente en psiquiatría fenomenológica (en diálogo con Binswanger, Sartre y Husserl), Franco Basaglia asumió en 1961 la dirección del hospital psiquiátrico de Gorizia y luego el de Trieste. Horrorizado por el encierro, las sujeciones y la deshumanización asilar, decidió "poner entre paréntesis la enfermedad" para encontrarse con la persona y transformar el manicomio desde adentro hasta cerrarlo.\n\nSu experiencia colectiva junto a Franca Ongaro y los trabajadores de Trieste culminó en la histórica Ley 180 (1978), que abolió los hospitales psiquiátricos en Italia y constituye la referencia directa de Salud Pública y Salud Mental en la UBA.',
    principalesAportes: [
      'Liderazgo de las experiencias de desmanicomialización en Gorizia y Trieste y fundación del movimiento Psiquiatría Democrática.',
      'Impulso a la Ley 180 de Italia (1978), primera legislación nacional en el mundo en ordenar el cierre de manicomios y su sustitución por centros territoriales de salud mental.',
      'Consigna "la libertad es terapéutica": devolver ciudadanía, derechos, trabajo cooperativo y lazos comunitarios a los usuarios.',
      'Aplicación de la epojé fenomenológica a la clínica: "poner entre paréntesis la enfermedad" para ver al sujeto completo y no solo al diagnóstico.'
    ],
    conceptosClave: [
      {
        termino: 'Desinstitucionalización',
        explicacion:
          'No es simplemente "externar" o vaciar camas, sino desmontar la lógica manicomial y construir dispositivos sustitutivos comunitarios, casas asistidas y trabajo.'
      },
      {
        termino: 'Poner entre paréntesis la enfermedad',
        explicacion:
          'No niega el sufrimiento psíquico, sino que suspende la etiqueta diagnóstica para impedir que anule la historia, los derechos y la palabra del sujeto.'
      },
      {
        termino: 'La institución negada',
        explicacion:
          'Práctica política y clínica que denuncia cómo el manicomio produce cronicidad y violencia bajo apariencia médica, exigiendo su superación.'
      },
      {
        termino: 'Ciudadanía y Salud Mental',
        explicacion:
          'El objetivo de la atención no es la custodia ni la obediencia del interno, sino la restitución plena de su estatuto de ciudadano con derechos.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La institución negada: informe de un hospital psiquiátrico',
        año: '1968',
        resumen: 'Relato colectivo fundacional de la transformación del hospital de Gorizia.'
      },
      {
        titulo: 'La condena de ser loco y pobre (Conferencias brasileñas)',
        año: '1979',
        resumen: 'Diálogo directo con América Latina sobre manicomios, clase social y reforma en salud mental.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Erving Goffman', autorId: 'goffman', nota: 'Análisis de las instituciones totales y la mortificación del yo' },
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Historia crítica de la locura y del poder psiquiátrico' },
      { nombre: 'Edmund Husserl y Jean-Paul Sartre', autorId: 'sartre', nota: 'Epojé fenomenológica y compromiso existencial' }
    ],
    influencioA: [
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Reforma en salud mental y Ley Nacional 26.657 en Argentina' },
      { nombre: 'Martín De Lellis', autorId: 'de-lellis', nota: 'Políticas públicas sustitutivas y atención territorial comunitaria' }
    ]
  },

  // ======================== EPISTEMOLOGÍA Y LENGUAJE ========================
  {
    id: 'chomsky',
    nombre: 'Noam Chomsky',
    apellidoCorto: 'Chomsky',
    matchKeys: ['chomsky'],
    materiaIdsExtra: [
      'procesos-psico-basicos',
      'historia-psico',
      'psico-aprendizaje',
      'cbc-semiologia'
    ],
    fechas: '1928 – presente',
    origen: 'Filadelfia · Cambridge (MIT), Estados Unidos',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Lingüista, filósofo y científico cognitivo estadounidense creador de la Gramática Generativa. Su célebre crítica de 1959 a "Conducta verbal" de Skinner fue un hito decisivo de la revolución cognitiva.',
    biografia:
      'Profesor emérito del MIT, Noam Chomsky revolucionó la lingüística moderna al plantear que la capacidad humana para adquirir el lenguaje no puede explicarse por simple imitación y reforzamiento, ya que los niños producen y comprenden infinitas oraciones nuevas a partir de estímulos limitados.\n\nSu demoledora reseña de 1959 al libro "Conducta verbal" de B. F. Skinner marcó un punto de quiebre en la historia de la psicología al cuestionar los límites del conductismo y abrir paso a la Psicología Cognitiva, además de protagonizar el histórico debate de Royaumont (1975) con Jean Piaget sobre innatismo y constructivismo.',
    principalesAportes: [
      'Creación de la Gramática Generativa y postulación de una Gramática Universal (GU) como dotación biológica específica de la especie humana.',
      'Reseña crítica de 1959 a "Conducta verbal" de Skinner: argumento de la "pobreza del estímulo" y creatividad infinita del lenguaje humano.',
      'Distinción clave entre "competencia" (conocimiento implícito de las reglas del lenguaje) y "actuación" (uso real concreto en situaciones particulares).',
      'Célebre debate de Royaumont (1975) con Jean Piaget sobre innatismo lingüístico frente a constructivismo genético.'
    ],
    conceptosClave: [
      {
        termino: 'Gramática Universal (GU) y LAD',
        explicacion:
          'Dispositivo innato de adquisición del lenguaje que contiene principios comunes a todas las lenguas humanas y permite aprender cualquier idioma velozmente.'
      },
      {
        termino: 'Pobreza del estímulo',
        explicacion:
          'Los niños reciben datos lingüísticos incompletos y aun así dominan reglas sintácticas complejas, lo que refuta el aprendizaje por mera copia o refuerzo.'
      },
      {
        termino: 'Competencia vs. Actuación',
        explicacion:
          'Diferencia entre el saber lingüístico internalizado (competencia) y su realización efectiva en el habla cotidiana, sujeta a memoria o distracciones (actuación).'
      },
      {
        termino: 'Creatividad lingüística',
        explicacion:
          'Con un conjunto finito de reglas y palabras podemos generar e interpretar un número infinito de enunciados inéditos.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Estructuras sintácticas',
        año: '1957',
        resumen: 'Obra fundacional de la gramática generativa transformacional.'
      },
      {
        titulo: 'Crítica de "Conducta verbal" de B. F. Skinner',
        año: '1959',
        resumen: 'Artículo clave en Historia de la Psicología y Procesos Básicos que impulsó la revolución cognitiva.'
      },
      {
        titulo: 'Teorías del lenguaje, teorías del aprendizaje (Debate con Piaget)',
        año: '1979',
        resumen: 'Registro del histórico contrapunto entre innatismo chomskiano y constructivismo piagetiano.'
      }
    ],
    influenciadoPor: [
      { nombre: 'René Descartes y Wilhelm von Humboldt', nota: 'Racionalismo, ideas innatas y uso infinito de medios finitos' },
      { nombre: 'Ferdinand de Saussure', autorId: 'saussure', nota: 'Referencia estructural con la que contrasta competencia y lengua' }
    ],
    influencioA: [
      { nombre: 'Ulric Neisser', autorId: 'neisser', nota: 'Consolidación de la psicología cognitiva contemporánea' },
      { nombre: 'Jerome S. Bruner', autorId: 'bruner', nota: 'Propone el LASS (apoyo cultural) en diálogo con el LAD de Chomsky' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Debate de Royaumont sobre innatismo y constructivismo' }
    ]
  },

  // ======================== TCC Y NEUROCIENCIAS ========================
  {
    id: 'damasio',
    nombre: 'Antonio Damasio',
    apellidoCorto: 'Damasio',
    matchKeys: ['damasio'],
    materiaIdsExtra: [
      'neuro-fisiologia',
      'neuropsicologia',
      'procesos-psico-basicos',
      'biologia-comportamiento'
    ],
    fechas: '1944 – presente',
    origen: 'Lisboa, Portugal · Iowa / Los Ángeles, Estados Unidos',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Médico neurólogo y neurocientífico portugués-estadounidense autor de "El error de Descartes". Demostró con su "hipótesis del marcador somático" que las emociones son indispensables para razonar y decidir.',
    biografia:
      'Profesor de Neurociencia y Psicología en la Universidad del Sur de California (USC), Antonio Damasio revolucionó la neuropsicología clínica y afectiva al estudiar pacientes con lesiones en la corteza prefrontal ventromedial —retomando el famoso caso histórico de Phineas Gage— que conservaban intacto su coeficiente intelectual pero se volvían incapaces de tomar decisiones sensatas en su vida cotidiana.\n\nSu libro "El error de Descartes" (1994) demolió la idea clásica de que la razón funciona mejor separada de la emoción y el cuerpo, convirtiéndose en un puente apasionante entre neurociencias, filosofía (Spinoza, William James) y psicología clínica.',
    principalesAportes: [
      'Crítica neurocientífica al dualismo cartesiano: la razón no es opuesta a la emoción; sin señales afectivas corporales el razonamiento práctico colapsa.',
      'Formulación de la "Hipótesis del marcador somático": recuerdos emocionales corporales guían rápidamente nuestras decisiones antes del cálculo consciente.',
      'Diferenciación precisa entre "emoción" (programa corporal y neural público/automático) y "sentimiento" (experiencia mental consciente y privada de ese estado corporal).',
      'Modelo neurobiológico de la conciencia y del self basado en la homeostasis y los mapas cerebrales del cuerpo.'
    ],
    conceptosClave: [
      {
        termino: 'Hipótesis del marcador somático',
        explicacion:
          'Señales corporales asociadas a experiencias pasadas (mediadas por la corteza prefrontal ventromedial y la amígdala) que "marcan" opciones como beneficiosas o riesgosas.'
      },
      {
        termino: 'El error de Descartes',
        explicacion:
          'Error de separar una mente racional desencarnada del cuerpo y las emociones; Damasio reivindica en cambio el monismo cuerpo-mente de Spinoza.'
      },
      {
        termino: 'Emoción vs. Sentimiento',
        explicacion:
          'Las emociones ocurren en el teatro del cuerpo (respuestas autonómicas, motoras y hormonales); los sentimientos ocurren en el teatro de la mente cuando registramos esos cambios.'
      },
      {
        termino: 'Homeostasis y Conciencia',
        explicacion:
          'Los sentimientos evolucionaron como reguladores vitales de la homeostasis que permiten al organismo saber cómo está su vida y actuar en consecuencia.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El error de Descartes: la emoción, la razón y el cerebro humano',
        año: '1994',
        resumen: 'Clásico sobre el caso Phineas Gage, los marcadores somáticos y la unión entre razón y emoción.'
      },
      {
        titulo: 'En busca de Spinoza: neurobiología de la emoción y los sentimientos',
        año: '2003',
        resumen: 'Distingue emoción de sentimiento y dialoga con la filosofía monista de Spinoza.'
      },
      {
        titulo: 'Sentir lo que sucede (La sensación de lo que ocurre)',
        año: '1999',
        resumen: 'Explora las bases neurales de la conciencia y el sentido del sí-mismo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'William James', autorId: 'james', nota: 'Papel decisivo de los estados corporales en la experiencia emocional' },
      { nombre: 'Alexander R. Luria', autorId: 'luria', nota: 'Neuropsicología de los lóbulos frontales y sistemas funcionales' },
      { nombre: 'Baruch Spinoza', nota: 'Monismo mente–cuerpo y afectos ligados a la conservación de la vida' }
    ],
    influencioA: [
      { nombre: 'Neurociencia afectiva y Neuropsicología contemporánea', nota: 'Integración de emoción, cuerpo y toma de decisiones' }
    ]
  }
];
