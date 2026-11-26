import type { AutorProfile } from './autores';

export const AUTORES_TANDA_2: AutorProfile[] = [
  // ======================== PSICOANÁLISIS ========================
  {
    id: 'anna-freud',
    nombre: 'Anna Freud',
    apellidoCorto: 'Anna Freud',
    matchKeys: ['anna freud', 'freud, a'],
    materiaIdsExtra: [
      'psicoanalisis-psico-yo',
      'psico-desarrollo-niñez',
      'psico-desarrollo-adolescencia',
      'historia-psico'
    ],
    fechas: '1895 – 1982',
    origen: 'Viena, Austria · Londres, Reino Unido',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psicoanalista austríaca-británica pionera del análisis infantil y figura central de la Psicología del Yo. Sistematizó los mecanismos de defensa y las líneas del desarrollo.',
    biografia:
      'Hija menor de Sigmund Freud y formada inicialmente como maestra, Anna Freud dedicó su obra a estudiar el desarrollo infantil, la adolescencia y el papel del Yo en el conflicto psíquico. Tras exiliarse en Londres en 1938, dirigió las guarderías de guerra de Hampstead y fundó la célebre Clínica Hampstead para niños.\n\nProtagonizó junto a Melanie Klein las históricas "Controversias" de la Sociedad Británica de Psicoanálisis en los años 40, defendiendo una mirada evolutiva del Yo, el valor de la observación directa y la articulación entre psicoanálisis y pedagogía.',
    principalesAportes: [
      'Sistematización clásica de los mecanismos de defensa del Yo (represión, regresión, formación reactiva, proyección, sublimación, identificación con el agresor).',
      'Desarrollo de las "Líneas del Desarrollo" y del Perfil Metapsicológico para evaluar el crecimiento infantil más allá de síntomas aislados.',
      'Estudio de la adolescencia como etapa de reequilibrio entre el incremento pulsional y nuevas defensas (intelectualización y ascetismo).',
      'Impulso a la Psicología del Yo junto a Heinz Hartmann y Erik Erikson.'
    ],
    conceptosClave: [
      {
        termino: 'Mecanismos de defensa',
        explicacion:
          'Operaciones inconscientes que el Yo despliega para protegerse de la angustia pulsional, superyoica o proveniente de la realidad.'
      },
      {
        termino: 'Identificación con el agresor',
        explicacion:
          'Defensa por la cual el sujeto asimila rasgos o actitudes de quien lo amenaza, pasando de una posición pasiva a una activa.'
      },
      {
        termino: 'Líneas del desarrollo',
        explicacion:
          'Secuencias evolutivas observables (de la dependencia a la autonomía emocional, del juego al trabajo) que permiten evaluar armonía o desfasajes.'
      },
      {
        termino: 'Intelectualización y Ascetismo',
        explicacion:
          'Defensas típicas de la adolescencia para dominar el empuje pulsional mediante debates abstractos o renuncias rígidas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El yo y los mecanismos de defensa',
        año: '1936',
        resumen: 'Obra fundacional de la Psicología del Yo y referencia obligada sobre defensas y adolescencia.'
      },
      {
        titulo: 'Normalidad y patología en la niñez',
        año: '1965',
        resumen: 'Desarrolla las líneas del desarrollo y los criterios diagnósticos en la clínica infantil.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Segunda tópica, teoría de la angustia y metapsicología' }
    ],
    influencioA: [
      { nombre: 'Erik H. Erikson', autorId: 'erikson', nota: 'Psicología del Yo y teoría del desarrollo psicosocial (junto a Hartmann)' },
      { nombre: 'René Spitz', autorId: 'spitz', nota: 'Observación psicoanalítica temprana del desarrollo' },
      { nombre: 'John Bowlby', autorId: 'bowlby', nota: 'Observación directa de separaciones infantiles' }
    ]
  },
  {
    id: 'bion',
    nombre: 'Wilfred R. Bion',
    apellidoCorto: 'Bion',
    matchKeys: ['bion'],
    materiaIdsExtra: [
      'psicoanalisis-inglesa-1',
      'psicoanalisis-inglesa-2',
      'teoria-tecnica-grupos',
      'psicopatologia'
    ],
    fechas: '1897 – 1979',
    origen: 'Muttra, India · Londres, Reino Unido · Los Ángeles',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psiquiatra y psicoanalista británico clave de la Escuela Inglesa. Revolucionó la teoría de grupos con los supuestos básicos y formuló una teoría original del pensamiento (función alfa y réverie).',
    biografia:
      'Veterano de la Primera Guerra Mundial, médico psiquiatra y analizado por Melanie Klein en Londres, Wilfred Ruprecht Bion realizó dos grandes contribuciones que marcaron al psicoanálisis contemporáneo y a la clínica grupal: primero, sus experiencias en el Hospital de Northfield sobre la dinámica inconsciente de los grupos; luego, su teoría del pensamiento a partir del trabajo con pacientes psicóticos.\n\nEn Psicología UBA es lectura clave en Escuela Inglesa y en Teoría y Técnica de Grupos para comprender cómo las ansiedades primitivas organizan tanto la vida grupal como la capacidad humana de pensar.',
    principalesAportes: [
      'Distinción en grupos entre el "grupo de trabajo" (orientado a la tarea racional) y el "grupo de supuesto básico" (dependencia, ataque-fuga y emparejamiento).',
      'Teoría del pensamiento: transformación de impresiones sensoriales brutas (elementos beta) en pensamientos asimilables (elementos alfa) mediante la función alfa.',
      'Modelo continente–contenido y concepto de "capacidad de réverie" materna como base del psiquismo infantil.',
      'Regla clínica de escuchar "sin memoria ni deseo" para abrirse a la experiencia emocional inédita de cada sesión.'
    ],
    conceptosClave: [
      {
        termino: 'Supuestos básicos grupales',
        explicacion:
          'Estados emocionales inconscientes que desvían al grupo de su tarea: Dependencia (esperar un líder salvador), Ataque-Fuga y Emparejamiento.'
      },
      {
        termino: 'Elementos beta y Función alfa',
        explicacion:
          'Los elementos beta son vivencias crudas no pensables; la función alfa los metaboliza en elementos alfa aptos para soñar, recordar y pensar.'
      },
      {
        termino: 'Capacidad de réverie',
        explicacion:
          'Estado mental receptivo de la madre (o del analista) que aloja la angustia del bebé y se la devuelve digerida y tolerable.'
      },
      {
        termino: 'Continente / Contenido',
        explicacion:
          'Relación dinámica entre una mente capaz de alojar experiencias emocionales y las emociones o pensamientos contenidos.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Experiencias en grupos',
        año: '1961',
        resumen: 'Clásico indispensable en Teoría y Técnica de Grupos sobre grupo de trabajo y supuestos básicos.'
      },
      {
        titulo: 'Aprendiendo de la experiencia',
        año: '1962',
        resumen: 'Presenta la función alfa, el modelo continente–contenido y la teoría del pensamiento.'
      },
      {
        titulo: 'Volviendo a pensar',
        año: '1967',
        resumen: 'Reúne sus trabajos clínicos fundamentales sobre psicosis y ataques al vínculo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Melanie Klein', autorId: 'klein', nota: 'Posiciones, identificación proyectiva y clínica de las psicosis' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Principio de realidad y psicología de las masas' }
    ],
    influencioA: [
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Dinámica inconsciente de grupos e instituciones' },
      { nombre: 'Donald Meltzer y Thomas Ogden', nota: 'Psicoanálisis poskleiniano contemporáneo' }
    ]
  },
  {
    id: 'spitz',
    nombre: 'René A. Spitz',
    apellidoCorto: 'Spitz',
    matchKeys: ['spitz'],
    materiaIdsExtra: ['psico-desarrollo-niñez', 'psicoanalisis-psico-yo'],
    fechas: '1887 – 1974',
    origen: 'Viena, Austria · Estados Unidos',
    corriente: 'Psicoanálisis',
    resumenCorto:
      'Psicoanalista austríaco-estadounidense pionero en observación directa de bebés. Describió los tres organizadores del psiquismo, la depresión anaclítica y el hospitalismo.',
    biografia:
      'Analizado por Sigmund Freud en 1910 y emigrado a Estados Unidos en los años 30, René Spitz fue pionero en combinar el psicoanálisis con filmaciones y observación sistemática de lactantes criados en familia y en orfanatos.\n\nSus investigaciones demostraron de manera contundente que el cuidado físico e higiénico no alcanza para que un bebé sobreviva y se desarrolle: el vínculo afectivo estable con una figura materna es una condición vital. En Psicología del Desarrollo: Niñez de la UBA su esquema de los tres organizadores del primer año es un clásico de examen.',
    principalesAportes: [
      'Formulación de los tres organizadores del psiquismo en el primer año de vida: sonrisa social (3° mes), angustia del octavo mes y el gesto semántico del "no" (15 meses).',
      'Descripción clínica del "hospitalismo" y la "depresión anaclítica" en bebés privados de sostén afectivo.',
      'Articulación entre maduración biológica y relaciones objetales tempranas en el nacimiento del Yo.'
    ],
    conceptosClave: [
      {
        termino: 'Primer organizador: Sonrisa social (3° mes)',
        explicacion:
          'Respuesta ante la gestalt del rostro humano de frente (ojos, nariz, frente); indica el pasaje hacia el objeto precursor.'
      },
      {
        termino: 'Segundo organizador: Angustia del 8° mes',
        explicacion:
          'Llanto o rechazo ante el rostro de un extraño: demuestra que el bebé ya reconoce y diferencia a la madre como objeto libidinal específico.'
      },
      {
        termino: 'Tercer organizador: El "No" (15 meses)',
        explicacion:
          'Gesto y palabra de negación que inaugura la comunicación semántica, el juicio y la diferenciación entre el niño y el adulto.'
      },
      {
        termino: 'Depresión anaclítica y Hospitalismo',
        explicacion:
          'Cuadros de retraimiento severo y deterioro psicosomático causados por la privación afectiva parcial o total en la primera infancia.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El primer año de vida del niño',
        año: '1965',
        resumen: 'Síntesis definitiva de sus observaciones sobre los tres organizadores y la privación afectiva.'
      },
      {
        titulo: 'No y sí: sobre la génesis de la comunicación humana',
        año: '1957',
        resumen: 'Estudia cómo el gesto del "no" inaugura la simbolización y la autonomía temprana.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Teoría libidinal y génesis del Yo' },
      { nombre: 'Anna Freud', autorId: 'anna-freud', nota: 'Observación directa de niños y Psicología del Yo' }
    ],
    influencioA: [
      { nombre: 'John Bowlby', autorId: 'bowlby', nota: 'Evidencia sobre privación materna y apego' },
      { nombre: 'Psicología del Desarrollo y Pediatría', nota: 'Humanización de internaciones y cuidados tempranos' }
    ]
  },

  // ======================== DESARROLLO Y COGNICIÓN ========================
  {
    id: 'bruner',
    nombre: 'Jerome S. Bruner',
    apellidoCorto: 'Bruner',
    matchKeys: ['bruner'],
    materiaIdsExtra: [
      'procesos-psico-basicos',
      'psico-aprendizaje',
      'psico-educativa-prof',
      'psico-desarrollo-niñez',
      'historia-psico'
    ],
    fechas: '1915 – 2016',
    origen: 'Nueva York, Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo estadounidense protagonista de la revolución cognitiva y fundador de la psicología cultural. Creó los conceptos de andamiaje, formatos de interacción y pensamiento narrativo.',
    biografia:
      'Doctorado en Harvard y cofundador en 1960 del Center for Cognitive Studies junto a George Miller, Jerome Bruner fue uno de los arquitectos centrales de la revolución cognitiva que superó al conductismo. Sin embargo, hacia fines de los años 80 criticó el giro excesivamente computacional de la ciencia cognitiva y propuso recuperar la "construcción de significado" mediante una Psicología Cultural.\n\nSu trabajo sobre el lenguaje infantil, el aprendizaje por descubrimiento y el andamiaje dialoga directamente con Piaget y Vygotsky y es lectura habitual en Procesos Básicos, Aprendizaje y Psicología Educacional de la UBA.',
    principalesAportes: [
      'Diferenciación entre pensamiento paradigmático (lógico-científico) y pensamiento narrativo (historias, intenciones, sentido cultural).',
      'Concepto de "andamiaje" (scaffolding) como apoyo graduado que brinda el adulto dentro de la Zona de Desarrollo Próximo.',
      'Estudio de los "formatos" (rutinas lúdicas como el juego de aparecer y desaparecer) como matriz prelingüística del lenguaje.',
      'Propuesta de la Psicología Cultural centrada en los significados compartidos y la "psicología popular".'
    ],
    conceptosClave: [
      {
        termino: 'Andamiaje (Scaffolding)',
        explicacion:
          'Soporte temporal y ajustable que ofrece un adulto o par experto para que el aprendiz resuelva tareas que luego hará de modo autónomo.'
      },
      {
        termino: 'Psicología cultural',
        explicacion:
          'Enfoque que entiende a la mente humana como inseparable de los sistemas simbólicos, relatos e instituciones de su cultura.'
      },
      {
        termino: 'Formatos y LASS',
        explicacion:
          'Microinteracciones repetitivas adulto-bebé (Sistema de Apoyo para la Adquisición del Lenguaje) que complementan la capacidad innata de Chomsky.'
      },
      {
        termino: 'Pensamiento narrativo vs. paradigmático',
        explicacion:
          'Dos modos irreductibles de conocer: el lógico busca verdades verificables; el narrativo da sentido a acciones e intenciones humanas.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Actos de significado: más allá de la revolución cognitiva',
        año: '1990',
        resumen: 'Manifiesto de la psicología cultural y crítica al reduccionismo computacional.'
      },
      {
        titulo: 'Realidad mental y mundos posibles',
        año: '1986',
        resumen: 'Desarrolla las dos modalidades de pensamiento y el diálogo con Vygotsky.'
      },
      {
        titulo: 'El habla del niño',
        año: '1983',
        resumen: 'Analiza los formatos de interacción temprana en la adquisición del lenguaje.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Lev S. Vygotsky', autorId: 'vygotsky', nota: 'Mediación cultural y Zona de Desarrollo Próximo' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Constructivismo y desarrollo representacional' }
    ],
    influencioA: [
      { nombre: 'Ulric Neisser', autorId: 'neisser', nota: 'Revolución cognitiva en Harvard' },
      { nombre: 'Juan Ignacio Pozo', autorId: 'pozo', nota: 'Teorías constructivistas del aprendizaje' },
      { nombre: 'Ricardo Baquero', autorId: 'baquero', nota: 'Psicología educacional y dispositivos escolares' }
    ]
  },
  {
    id: 'bowlby',
    nombre: 'John Bowlby',
    apellidoCorto: 'Bowlby',
    matchKeys: ['bowlby'],
    materiaIdsExtra: [
      'psico-desarrollo-niñez',
      'psico-desarrollo-adolescencia',
      'psico-clinica-psicoterapias-2',
      'psicopatologia'
    ],
    fechas: '1907 – 1990',
    origen: 'Londres, Reino Unido',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psiquiatra y psicoanalista británico creador de la Teoría del Apego. Demostró que la búsqueda de proximidad afectiva es una necesidad biológica primaria y no un derivado secundario del hambre.',
    biografia:
      'Formado en medicina, psiquiatría infantil y psicoanálisis en Londres (donde supervisó con Melanie Klein y trabajó en la Clínica Tavistock), John Bowlby rompió con la idea de que el vínculo del bebé con su madre derivara únicamente de la satisfacción oral del alimento.\n\nIntegrando el psicoanálisis con la etología (Konrad Lorenz, Harry Harlow), la cibernética y la psicología cognitiva, elaboró la Teoría del Apego, luego validada empíricamente por Mary Ainsworth con la "Situación Extraña". Hoy es una referencia central tanto en Psicología del Desarrollo como en clínica relacional y cognitiva.',
    principalesAportes: [
      'Formulación de la Teoría del Apego: el sistema conductual de apego tiene valor evolutivo de protección y regulación emocional.',
      'Concepto de "base segura" desde la cual el niño puede explorar el mundo y a la que regresa ante el peligro o la angustia.',
      'Noción de Modelos Operativos Internos (MOI): representaciones mentales sobre uno mismo y los otros que guían vínculos futuros.',
      'Estudio de las fases de la separación temprana (protesta, desesperación, desapego) y su impacto en la salud mental.'
    ],
    conceptosClave: [
      {
        termino: 'Sistema de apego',
        explicacion:
          'Disposición innata a buscar proximidad con una figura protectora diferenciada ante situaciones de amenaza, estrés o malestar.'
      },
      {
        termino: 'Base segura',
        explicacion:
          'Disponibilidad sensible del cuidador que habilita la exploración confiada del entorno y funciona como refugio emocional.'
      },
      {
        termino: 'Modelos Operativos Internos (MOI)',
        explicacion:
          'Esquemas afectivo-cognitivos construidos en la infancia acerca de cuán digno de cuidado es uno mismo y cuán confiables son los demás.'
      },
      {
        termino: 'Patrones de apego (con Mary Ainsworth)',
        explicacion:
          'Estilos diferenciados en la Situación Extraña: apego seguro, inseguro evitativo, inseguro ambivalente/resistente y desorganizado.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El apego y la pérdida (Trilogía: El apego, La separación, La pérdida)',
        año: '1969–1980',
        resumen: 'Obra monumental que funda la teoría del apego y analiza el duelo infantil y adulto.'
      },
      {
        titulo: 'Una base segura',
        año: '1988',
        resumen: 'Aplicaciones clínicas de la teoría del apego a la psicoterapia y la crianza.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Importancia decisiva de los vínculos tempranos' },
      { nombre: 'René A. Spitz', autorId: 'spitz', nota: 'Estudios sobre privación materna y hospitalismo' },
      { nombre: 'Konrad Lorenz y Harry Harlow', nota: 'Etología, impronta y necesidad de contacto afectivo' }
    ],
    influencioA: [
      { nombre: 'Mary Ainsworth y Mary Main', nota: 'Situación Extraña y entrevista de apego adulto' },
      { nombre: 'Peter Fonagy', nota: 'Mentalización y clínica contemporánea del apego' }
    ]
  },
  {
    id: 'skinner',
    nombre: 'B. F. Skinner',
    apellidoCorto: 'Skinner',
    matchKeys: ['skinner'],
    materiaIdsExtra: [
      'historia-psico',
      'psico-aprendizaje',
      'procesos-psico-basicos',
      'analisis-modificacion-conducta',
      'cbc-psico'
    ],
    fechas: '1904 – 1990',
    origen: 'Susquehanna · Cambridge, Estados Unidos',
    corriente: 'Desarrollo y Cognición',
    resumenCorto:
      'Psicólogo estadounidense máximo exponente del conductismo radical. Formuló el condicionamiento operante, los programas de reforzamiento y el análisis experimental de la conducta.',
    biografia:
      'Doctorado y profesor durante décadas en Harvard, Burrhus Frederic Skinner llevó el programa conductista iniciado por John B. Watson a su formulación más sistemática y experimental. A diferencia del condicionamiento clásico de Pavlov (asociación entre estímulos), Skinner centró su investigación en cómo las consecuencias de una acción modifican la probabilidad futura de esa conducta.\n\nAunque su célebre debate con Noam Chomsky sobre el lenguaje impulsó el auge cognitivo, sus principios de análisis funcional, reforzamiento y extinción siguen siendo base indispensable de la psicología del aprendizaje y de la clínica conductual contemporánea.',
    principalesAportes: [
      'Formulación del condicionamiento operante: la conducta se selecciona y mantiene por sus consecuencias ambientales (contingencia de tres términos).',
      'Clasificación de reforzamiento positivo, reforzamiento negativo, castigo y extinción, y estudio de los programas de reforzamiento.',
      'Conductismo radical: no niega los eventos privados (pensamientos, emociones), pero rechaza usarlos como causas mentalistas autónomas.',
      'Aplicaciones a la educación programada y al análisis y modificación de la conducta clínica.'
    ],
    conceptosClave: [
      {
        termino: 'Condicionamiento operante',
        explicacion:
          'Aprendizaje por el cual una conducta voluntaria aumenta o disminuye su frecuencia según las consecuencias que produce en el entorno.'
      },
      {
        termino: 'Reforzamiento positivo y negativo',
        explicacion:
          'Ambos fortalecen una conducta: el positivo agrega un estímulo apetitivo; el negativo retira un estímulo aversivo (no confundir con castigo).'
      },
      {
        termino: 'Contingencia de tres términos',
        explicacion:
          'Unidad básica del análisis funcional: Estímulo discriminativo (antecedente) → Conducta (respuesta) → Consecuencia.'
      },
      {
        termino: 'Moldeamiento y Extinción',
        explicacion:
          'El moldeamiento refuerza aproximaciones sucesivas a una conducta nueva; la extinción debilita una conducta al suspender su reforzador.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Ciencia y conducta humana',
        año: '1953',
        resumen: 'Exposición general del conductismo radical aplicado al comportamiento humano y social.'
      },
      {
        titulo: 'Sobre el conductismo',
        año: '1974',
        resumen: 'Aclara los malentendidos frecuentes sobre el conductismo radical y los eventos privados.'
      },
      {
        titulo: 'La conducta de los organismos',
        año: '1938',
        resumen: 'Obra experimental fundacional del condicionamiento operante.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Ivan P. Pavlov', autorId: 'pavlov', nota: 'Reflejo condicionado (junto a la ley del efecto de Thorndike)' },
      { nombre: 'John B. Watson', nota: 'Manifiesto conductista y psicología objetiva' }
    ],
    influencioA: [
      { nombre: 'Albert Bandura', autorId: 'bandura', nota: 'Puente hacia el aprendizaje social y sociocognitivo' },
      { nombre: 'Steven C. Hayes', autorId: 'hayes', nota: 'Contextualismo funcional y tercera ola (ACT / RFT)' },
      { nombre: 'Marsha M. Linehan', autorId: 'linehan', nota: 'Análisis conductual en la Terapia Dialéctico-Conductual (DBT)' },
      { nombre: 'David H. Barlow', autorId: 'barlow', nota: 'Principios de aprendizaje en terapia de exposición' }
    ]
  },

  // ======================== SOCIAL E INSTITUCIONAL ========================
  {
    id: 'lewin',
    nombre: 'Kurt Lewin',
    apellidoCorto: 'Lewin',
    matchKeys: ['lewin'],
    materiaIdsExtra: [
      'psico-social',
      'teoria-tecnica-grupos',
      'psico-organizacional-institucional',
      'historia-psico'
    ],
    fechas: '1890 – 1947',
    origen: 'Mogilno, Prusia · Berlín · Estados Unidos',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Psicólogo alemán-estadounidense considerado el padre de la psicología social moderna y la dinámica de grupos. Formuló la teoría del campo y la investigación-acción.',
    biografia:
      'Vinculado inicialmente a la Escuela de la Gestalt en Berlín y exiliado en Estados Unidos en 1933 por el nazismo, Kurt Lewin transformó el estudio de los grupos humanos al mostrar que un grupo es un todo dinámico diferente de la suma de sus miembros.\n\nSu famosa fórmula C = f(P, A) —la conducta es función de la persona y su ambiente percibido en el aquí y ahora— y su metodología de investigación-acción influyeron profundamente en Psicología Social, Teoría y Técnica de Grupos y en el propio Enrique Pichon-Rivière.',
    principalesAportes: [
      'Teoría del Campo: la conducta resulta de la totalidad de fuerzas coexistentes e interdependientes en el "espacio vital" del sujeto.',
      'Fundación de la Dinámica de Grupos y estudios experimentales clásicos sobre climas sociales y liderazgos (autocrático, democrático y laissez-faire).',
      'Creación de la Investigación-Acción (Action Research): investigar transformando problemas sociales reales junto a los actores.',
      'Modelo de cambio social e institucional en tres fases: descongelamiento, cambio y recongelamiento.'
    ],
    conceptosClave: [
      {
        termino: 'Teoría del Campo y Espacio Vital',
        explicacion:
          'El comportamiento depende de la configuración actual de necesidades, metas y barreras percibidas por la persona en su entorno.'
      },
      {
        termino: 'Dinámica de grupos',
        explicacion:
          'El grupo funciona como un sistema de interdependencia: un cambio en cualquier miembro o subparte modifica al conjunto.'
      },
      {
        termino: 'Estilos de liderazgo',
        explicacion:
          'Sus experimentos con Lippitt y White mostraron que el liderazgo democrático genera mayor cooperación, autonomía y menor hostilidad.'
      },
      {
        termino: 'Investigación-Acción',
        explicacion:
          'Ciclo espiralado de diagnóstico, acción colectiva y evaluación crítica; sintetizado en su frase "nada es tan práctico como una buena teoría".'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La teoría del campo en la ciencia social',
        año: '1951 (póstumo)',
        resumen: 'Compilación esencial sobre espacio vital, dinámica grupal y cambio social.'
      },
      {
        titulo: 'Resolución de conflictos sociales',
        año: '1948 (póstumo)',
        resumen: 'Reúne sus trabajos sobre liderazgo democrático, minorías e investigación-acción.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Psicología de la Gestalt (Wertheimer, Köhler, Koffka)', nota: 'Totalidad dinámica y organización perceptual' }
    ],
    influencioA: [
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Noción de campo y dinámica de grupos operativos' },
      { nombre: 'Leon Festinger', nota: 'Disonancia cognitiva y psicología social experimental' },
      { nombre: 'Psicología Institucional y Comunitaria', nota: 'Dispositivos de investigación-acción participativa' }
    ]
  },
  {
    id: 'wundt',
    nombre: 'Wilhelm Wundt',
    apellidoCorto: 'Wundt',
    matchKeys: ['wundt'],
    materiaIdsExtra: ['historia-psico', 'cbc-psico', 'procesos-psico-basicos'],
    fechas: '1832 – 1920',
    origen: 'Neckarau · Leipzig, Alemania',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Médico, fisiólogo y filósofo alemán fundador en 1879 del primer laboratorio de psicología experimental en Leipzig. Propuso dos psicologías complementarias: la experimental y la de los pueblos.',
    biografia:
      'Suele señalarse el año 1879 —cuando Wilhelm Wundt creó su laboratorio de psicología experimental en la Universidad de Leipzig— como el hito institucional del nacimiento de la psicología como disciplina científica autónoma. Allí estudió los procesos sensoriales y tiempos de reacción mediante la introspección experimental controlada.\n\nSin embargo, como destacan Kurt Danziger y las cátedras de Historia de la Psicología de la UBA, Wundt nunca redujo toda la psicología al laboratorio: reservó una segunda gran rama, la Völkerpsychologie (Psicología de los Pueblos), para estudiar el lenguaje, los mitos y las costumbres con método histórico-cultural.',
    principalesAportes: [
      'Institucionalización de la psicología como ciencia independiente con el laboratorio de Leipzig (1879) y la revista Philosophische Studien.',
      'Definición del objeto de la psicología como la "experiencia inmediata" (frente a la experiencia mediata de la física).',
      'Proyecto bicéfalo: Psicología Fisiológica/Experimental (procesos elementales) y Psicología de los Pueblos (procesos culturales superiores).',
      'Modelo colaborativo de laboratorio donde experimentador y sujeto eran científicos entrenados que intercambiaban roles.'
    ],
    conceptosClave: [
      {
        termino: 'Experiencia inmediata',
        explicacion:
          'Vivencia consciente tal como se presenta al sujeto (sensaciones y sentimientos), objeto propio de la psicología según Wundt.'
      },
      {
        termino: 'Introspección experimental',
        explicacion:
          'Autoobservación estrictamente controlada bajo estímulos medibles en laboratorio, distinta de la reflexión filosófica libre.'
      },
      {
        termino: 'Völkerpsychologie (Psicología de los pueblos)',
        explicacion:
          'Estudio histórico-comparado de productos colectivos (lenguaje, mitos, moral) que no pueden investigarse en un laboratorio individual.'
      },
      {
        termino: 'Apercepción',
        explicacion:
          'Proceso activo y voluntario de síntesis creadora que organiza elementos conscientes en un foco atencional unificado.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Principios de psicología fisiológica',
        año: '1874',
        resumen: 'Tratado fundacional que delimitó la psicología experimental moderna.'
      },
      {
        titulo: 'Psicología de los pueblos (10 volúmenes)',
        año: '1900–1920',
        resumen: 'Investigación histórico-cultural sobre lenguaje, mito, arte y sociedad.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gustav Fechner y Hermann von Helmholtz', nota: 'Psicofísica y fisiología sensorial alemana' },
      { nombre: 'David Hume', autorId: 'hume', nota: 'Asociacionismo clásico de los elementos de la experiencia' },
      { nombre: 'Immanuel Kant', autorId: 'kant', nota: 'Desafío epistemológico que Wundt busca responder con el laboratorio de Leipzig' }
    ],
    influencioA: [
      { nombre: 'Kurt Danziger', autorId: 'danziger', nota: 'Relectura historiográfica crítica del modelo de Leipzig' },
      { nombre: 'Psicología experimental y cultural del siglo XX', nota: 'Formación de la primera generación mundial de psicólogos' }
    ]
  },
  {
    id: 'goffman',
    nombre: 'Erving Goffman',
    apellidoCorto: 'Goffman',
    matchKeys: ['goffman'],
    materiaIdsExtra: [
      'psico-social',
      'salud-publica-mental',
      'psico-organizacional-institucional',
      'salud-mental-desinstitucionalizacion',
      'psico-juridica'
    ],
    fechas: '1922 – 1982',
    origen: 'Mannville, Canadá · Chicago / Filadelfia, Estados Unidos',
    corriente: 'Social e Institucional',
    resumenCorto:
      'Sociólogo y psicólogo social canadiense autor de "Internados" y "Estigma". Analizó las instituciones totales (manicomios, cárceles) y la vida cotidiana desde una perspectiva dramatúrgica.',
    biografia:
      'Doctorado en la Universidad de Chicago, Erving Goffman realizó trabajo etnográfico encubierto durante un año en el Hospital psiquiátrico St. Elizabeths de Washington. De esa experiencia nació "Internados" (1961), una obra demoledora que mostró cómo el hospital psiquiátrico tradicional, lejos de curar, produce una "mortificación del yo" y cronifica al paciente.\n\nEn Psicología UBA sus conceptos de institución total, estigma e identidad deteriorada son lectura imprescindible en Psicología Social, Salud Pública y Salud Mental e Institucional.',
    principalesAportes: [
      'Conceptualización de las "instituciones totales" (manicomios, cárceles, cuarteles) y de los procesos de desculturación y mortificación del yo.',
      'Teoría del Estigma: cómo ciertos atributos desacreditadores construyen una identidad social deteriorada y excluyente.',
      'Enfoque dramatúrgico de la interacción cotidiana (fachada, región anterior, trasfondo o backstage y manejo de impresiones).',
      'Aporte decisivo a los movimientos internacionales de reforma psiquiátrica y desmanicomialización.'
    ],
    conceptosClave: [
      {
        termino: 'Institución total',
        explicacion:
          'Lugar de residencia y trabajo donde un gran número de individuos aislados de la sociedad comparten una rutina diaria estrictamente administrada.'
      },
      {
        termino: 'Mortificación del yo',
        explicacion:
          'Despojo sistemático de roles, pertenencias, intimidad y autonomía al ingresar a una institución total, moldeando una identidad de "interno".'
      },
      {
        termino: 'Estigma',
        explicacion:
          'Marca o atributo socialmente desacreditado que reduce a una persona compleja a una categoría inferior o peligrosa.'
      },
      {
        termino: 'Enfoque dramatúrgico',
        explicacion:
          'Metáfora teatral para estudiar cómo las personas presentan su sí-mismo y sostienen acuerdos tácitos en la interacción cara a cara.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Internados: ensayos sobre la situación social de los enfermos mentales',
        año: '1961',
        resumen: 'Clásico de Salud Mental y Psicología Institucional sobre el dispositivo manicomial.'
      },
      {
        titulo: 'Estigma: la identidad deteriorada',
        año: '1963',
        resumen: 'Analiza los procesos psicosociales de etiquetamiento, exclusión y manejo de la identidad.'
      },
      {
        titulo: 'La presentación de la persona en la vida cotidiana',
        año: '1959',
        resumen: 'Funda el enfoque dramatúrgico de la microsociología y la interacción.'
      }
    ],
    influenciadoPor: [
      { nombre: 'George Herbert Mead y Escuela de Chicago', nota: 'Interaccionismo simbólico y trabajo etnográfico' },
      { nombre: 'Émile Durkheim', nota: 'Rituales sociales en la interacción cotidiana' }
    ],
    influencioA: [
      { nombre: 'Franco Basaglia', autorId: 'basaglia', nota: 'Desinstitucionalización y reforma psiquiátrica en Italia y Argentina' },
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Crítica a las instituciones manicomiales y salud mental comunitaria' }
    ]
  },

  // ======================== EPISTEMOLOGÍA Y LENGUAJE ========================
  {
    id: 'peirce',
    nombre: 'Charles S. Peirce',
    apellidoCorto: 'Peirce',
    matchKeys: ['peirce'],
    materiaIdsExtra: ['cbc-semiologia', 'metodologia-inv', 'problemas-filosoficos'],
    fechas: '1839 – 1914',
    origen: 'Cambridge, Massachusetts, Estados Unidos',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Filósofo, lógico y científico estadounidense fundador de la semiótica triádica y del pragmatismo. Formuló la tricotomía ícono–índice–símbolo y la lógica de la abducción.',
    biografia:
      'Lógico, matemático y filósofo de la ciencia, Charles Sanders Peirce construyó en paralelo e independientemente de Saussure una teoría general de los signos llamada Semiótica. Mientras Saussure propuso un signo diádico centrado en la lengua, Peirce formuló un modelo triádico dinámico (Representamen, Objeto e Interpretante) que abarca toda experiencia humana y científica.\n\nEn Psicología UBA se estudia desde el CBC en Semiología y reaparece con fuerza en Metodología de la Investigación (especialmente en Cátedra Ynoub) gracias a su análisis de la abducción como lógica de la formulación de hipótesis.',
    principalesAportes: [
      'Modelo triádico del signo (Representamen – Objeto – Interpretante) y concepto de semiosis infinita.',
      'Clasificación célebre de los signos según su relación con el objeto: Ícono (semejanza), Índice (contigüidad causal) y Símbolo (ley/convención).',
      'Descripción de la abducción junto a la deducción y la inducción como inferencia creativa que produce hipótesis nuevas en ciencia y clínica.',
      'Fundación del pragmatismo filosófico (el significado de una idea reside en sus efectos prácticos concebibles).'
    ],
    conceptosClave: [
      {
        termino: 'Signo triádico (R – O – I)',
        explicacion:
          'Un signo (Representamen) está para alguien en lugar de algo (Objeto) creando en la mente otro signo más desarrollado (Interpretante).'
      },
      {
        termino: 'Ícono, Índice y Símbolo',
        explicacion:
          'Ícono: parecido (un mapa o foto). Índice: conexión física/causal (humo respecto al fuego, un síntoma). Símbolo: convención cultural (palabras).'
      },
      {
        termino: 'Semiosis infinita',
        explicacion:
          'Cada interpretante se vuelve a su vez un nuevo signo que remite a otro interpretante en una cadena abierta de sentidos.'
      },
      {
        termino: 'Abducción',
        explicacion:
          'Inferencia conjetural que parte de un indicio sorprendente para postular una hipótesis explicativa (clave en diagnóstico e investigación).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La ciencia de la semiótica (escritos reunidos)',
        año: '1867–1911',
        resumen: 'Compilación usada en Semiología del CBC con las tricotomías del signo.'
      },
      {
        titulo: 'El hombre, un signo',
        año: '1868–1908',
        resumen: 'Textos clave sobre pragmatismo, fijación de la creencia y abducción.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Immanuel Kant', nota: 'Categorías lógicas y teoría del conocimiento' }
    ],
    influencioA: [
      { nombre: 'William James', autorId: 'james', nota: 'Difusión del pragmatismo en filosofía y psicología' },
      { nombre: 'Juan Samaja', autorId: 'samaja', nota: 'Lógica abductiva e indiciaria en Metodología de la Investigación (UBA)' },
      { nombre: 'Umberto Eco y Eliseo Verón', nota: 'Semiótica contemporánea y teoría de los discursos sociales' }
    ]
  },
  {
    id: 'popper',
    nombre: 'Karl R. Popper',
    apellidoCorto: 'Popper',
    matchKeys: ['popper'],
    materiaIdsExtra: ['cbc-ipc', 'metodologia-inv', 'historia-psico'],
    fechas: '1902 – 1994',
    origen: 'Viena, Austria · Londres, Reino Unido',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Filósofo de la ciencia austríaco-británico creador del falsacionismo y del racionalismo crítico. Propuso la falsabilidad como criterio de demarcación científica y polemizó con el psicoanálisis y Kuhn.',
    biografia:
      'Nacido en Viena en estrecho debate con el Círculo de Viena y exiliado por el nazismo hacia Nueva Zelanda y luego la London School of Economics, Karl Raimund Popper criticó el inductivismo clásico: ninguna cantidad de cisnes blancos verifica definitivamente "todos los cisnes son blancos", pero un solo cisne negro basta para refutarla.\n\nEn Psicología UBA es lectura obligatoria en IPC del CBC y Metodología de la Investigación, tanto por el método hipotético-deductivo como por su famosa controversia sobre la cientificidad del psicoanálisis y su debate epistemológico con Thomas Kuhn.',
    principalesAportes: [
      'Criterio de demarcación por falsabilidad: una teoría es científica si formula enunciados arriesgados susceptibles de ser refutados empíricamente.',
      'Crítica al inductivismo y defensa del método hipotético-deductivo (conjeturas audaces y refutaciones rigurosas).',
      'Noción de "corroboración": las teorías nunca se prueban verdaderas de modo definitivo, solo sobreviven provisoriamente a intentos de falsación.',
      'Debate crítico contra la pseudociencia y defensa de la "sociedad abierta" frente a los historicismos autoritarios.'
    ],
    conceptosClave: [
      {
        termino: 'Falsabilidad (Criterio de demarcación)',
        explicacion:
          'Propiedad lógica de una hipótesis que permite imaginar al menos un hecho observable que la contradiga (falsador potencial).'
      },
      {
        termino: 'Asimetría verificación / falsación',
        explicacion:
          'No es lógicamente posible verificar una ley universal por inducción, pero sí refutarla deductivamente mediante un contraejemplo.'
      },
      {
        termino: 'Conjeturas y refutaciones',
        explicacion:
          'La ciencia avanza formulando hipótesis arriesgadas y sometiéndolas a pruebas severas, aprendiendo de los errores.'
      },
      {
        termino: 'Hipótesis ad hoc',
        explicacion:
          'Supuesto agregado únicamente para salvar una teoría de una refutación sin aumentar su contenido contrastable.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La lógica de la investigación científica',
        año: '1934',
        resumen: 'Obra fundacional del falsacionismo y la crítica al empirismo lógico.'
      },
      {
        titulo: 'Conjeturas y refutaciones',
        año: '1963',
        resumen: 'Desarrolla el problema de la demarcación y sus críticas a Freud, Adler y Marx.'
      }
    ],
    influenciadoPor: [
      { nombre: 'David Hume', nota: 'Problema lógico de la inducción' },
      { nombre: 'Albert Einstein', nota: 'Modelo de predicciones científicas arriesgadas y falsables' }
    ],
    influencioA: [
      { nombre: 'Thomas S. Kuhn', autorId: 'kuhn', nota: 'Contrapunto central en el debate epistemológico del siglo XX' },
      { nombre: 'Imre Lakatos', nota: 'Falsacionismo sofisticado y programas de investigación' }
    ]
  },
  {
    id: 'canguilhem',
    nombre: 'Georges Canguilhem',
    apellidoCorto: 'Canguilhem',
    matchKeys: ['canguilhem'],
    materiaIdsExtra: ['historia-psico', 'salud-publica-mental', 'psicopatologia', 'etica-deontologia-ddhh'],
    fechas: '1904 – 1995',
    origen: 'Castelnaudary · París, Francia',
    corriente: 'Epistemología y Lenguaje',
    resumenCorto:
      'Médico y filósofo de la ciencia francés maestro de Michel Foucault. Reconceptualizó la salud como normatividad vital y escribió la célebre crítica "¿Qué es la psicología?".',
    biografia:
      'Profesor en la Sorbona, médico y figura central de la epistemología histórica francesa, Georges Canguilhem transformó la filosofía de la medicina y la biología con su tesis "Lo normal y lo patológico" (1943). Allí mostró que la salud no equivale a ajustarse a un promedio estadístico, sino a la capacidad creativa del organismo de instituir nuevas normas frente a los cambios del medio.\n\nEn Psicología UBA es un texto célebre y recurrente su conferencia "¿Qué es la psicología?" (1956), donde interroga la unidad de la disciplina y advierte sobre el riesgo de una psicología instrumental al servicio del control social.',
    principalesAportes: [
      'Diferenciación entre "anomalía" (variación estadística) y "patología" (reducción de la capacidad normativa del sujeto vivo).',
      'Definición de la salud como "normatividad": margen de tolerancia y poder de crear nuevas normas frente a las infidelidades del medio.',
      'Célebre conferencia "¿Qué es la psicología?": mapa histórico crítico de la psicología como ciencia natural, de la subjetividad y de las reacciones.',
      'Advertencia ética sobre el uso policial o meramente adaptativo de los tests y dispositivos psicológicos.'
    ],
    conceptosClave: [
      {
        termino: 'Normatividad vital',
        explicacion:
          'Estar sano no es solo ser "normal" según una media estadística, sino poder enfermar, recuperarse e inventar nuevas normas de vida.'
      },
      {
        termino: 'Lo normal y lo patológico',
        explicacion:
          'La enfermedad no es una simple diferencia cuantitativa respecto de la salud, sino una nueva forma de vida más estrecha y menos plástica.'
      },
      {
        termino: '¿Qué es la psicología? (1956)',
        explicacion:
          'Ensayo clásico en Historia de la Psicología que cuestiona la identidad unitaria de la disciplina y su vínculo con el poder institucional.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Lo normal y lo patológico',
        año: '1943 / 1966',
        resumen: 'Referencia esencial para pensar salud, enfermedad y clínica más allá del reduccionismo estadístico.'
      },
      {
        titulo: '¿Qué es la psicología?',
        año: '1956',
        resumen: 'Texto icónico de Historia de la Psicología sobre la epistemología y la ética del psicólogo.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gaston Bachelard', nota: 'Epistemología histórica y rupturas epistemológicas' },
      { nombre: 'Kurt Goldstein', nota: 'Biología organísmica y clínica neurológica' }
    ],
    influencioA: [
      { nombre: 'Michel Foucault', autorId: 'foucault', nota: 'Director de tesis y matriz de su crítica a la normalización' },
      { nombre: 'Jacques Lacan', autorId: 'lacan', nota: 'Diálogo sobre el estatuto científico y ético del psicoanálisis' },
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Concepción dinámica de salud más allá del modelo biomédico' }
    ]
  },

  // ======================== NEUROCIENCIAS Y CLÍNICA ========================
  {
    id: 'luria',
    nombre: 'Alexander R. Luria',
    apellidoCorto: 'Luria',
    matchKeys: ['luria'],
    materiaIdsExtra: ['neuro-fisiologia', 'neuropsicologia', 'neuropsicologia-practica', 'procesos-psico-basicos'],
    fechas: '1902 – 1977',
    origen: 'Kazán · Moscú, Rusia / URSS',
    corriente: 'TCC y Neurociencias',
    resumenCorto:
      'Médico y psicólogo ruso, discípulo directo de Vygotsky y padre de la neuropsicología moderna. Formuló el concepto de sistemas funcionales complejos y las tres unidades funcionales del cerebro.',
    biografia:
      'Estrecho colaborador de Lev Vygotsky desde 1924 y formado también en medicina, Alexander Romanovich Luria atendió durante la Segunda Guerra Mundial a cientos de soldados con lesiones cerebrales focales. A partir de esa inmensa experiencia clínica superó el viejo debate entre localizacionismo estricto y antilocalizacionismo holista.\n\nPropuso que las funciones mentales superiores (lenguaje, memoria, planificación) no residen en un "centro" aislado, sino en sistemas funcionales dinámicos distribuidos por todo el cerebro y moldeados por la cultura. Es pilar de Neurofisiología y Neuropsicología en la UBA.',
    principalesAportes: [
      'Modelo de las tres unidades funcionales del cerebro: tono/vigilia (tronco y sistema reticular), recepción/almacenamiento (regiones posteriores) y programación/control (lóbulos frontales).',
      'Teoría de los Sistemas Funcionales Complejos: una función psicológica integra múltiples áreas cerebrales y puede reorganizarse tras una lesión.',
      'Desarrollo de la evaluación neuropsicológica cualitativa (análisis del síndrome y rehabilitación de afasias, apraxias y agnosias).',
      'Estudios transculturales en Asia Central junto a Vygotsky y célebres casos clínicos ("ciencia romántica").'
    ],
    conceptosClave: [
      {
        termino: 'Sistemas funcionales complejos',
        explicacion:
          'Las funciones superiores tienen organización dinámica y plástica: la misma meta puede alcanzarse por vías cerebrales diversas.'
      },
      {
        termino: 'Tres unidades funcionales',
        explicacion:
          '1) Regulación del tono y vigilia; 2) Obtención, procesamiento y almacenamiento de información; 3) Programación, regulación y verificación ejecutiva.'
      },
      {
        termino: 'Localización dinámica',
        explicacion:
          'Cada zona cortical aporta un factor específico al sistema; su lesión altera distintas funciones que dependen de ese factor.'
      },
      {
        termino: 'Función reguladora del lenguaje',
        explicacion:
          'El lenguaje internalizado reorganiza la atención, la memoria y el control voluntario de la acción (especialmente en regiones prefrontales).'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'El cerebro en acción',
        año: '1973',
        resumen: 'Manual clásico de introducción a la neuropsicología y las tres unidades funcionales.'
      },
      {
        titulo: 'Las funciones corticales superiores del hombre',
        año: '1962',
        resumen: 'Tratado exhaustivo sobre síndromes neuropsicológicos y evaluación clínica.'
      },
      {
        titulo: 'Pequeño libro de una gran memoria',
        año: '1968',
        resumen: 'Célebre estudio de caso sobre el mnemonista S. y la "ciencia romántica".'
      }
    ],
    influenciadoPor: [
      { nombre: 'Lev S. Vygotsky', autorId: 'vygotsky', nota: 'Origen sociohistórico y mediación lingüística de las funciones superiores' },
      { nombre: 'Ivan P. Pavlov', autorId: 'pavlov', nota: 'Fisiología nerviosa (junto a Pyotr Anokhin)' }
    ],
    influencioA: [
      { nombre: 'Neuropsicología clínica contemporánea', nota: 'Evaluación cualitativa, funciones ejecutivas y rehabilitación' },
      { nombre: 'Oliver Sacks', nota: 'Narrativa clínica neurológica ("ciencia romántica")' }
    ]
  },
  {
    id: 'watzlawick',
    nombre: 'Paul Watzlawick',
    apellidoCorto: 'Watzlawick',
    matchKeys: ['watzlawick'],
    materiaIdsExtra: [
      'clinica-sistemica',
      'clinica-sistemica-familia-pareja-entrenamiento',
      'psico-clinica-psicoterapias-2',
      'psico-social'
    ],
    fechas: '1921 – 2007',
    origen: 'Villach, Austria · Palo Alto, California',
    corriente: 'Sistémica y Humanista',
    resumenCorto:
      'Psicólogo y teórico de la comunicación austríaco-estadounidense, referente del Mental Research Institute (Escuela de Palo Alto). Formuló los 5 axiomas de la comunicación humana y el modelo de terapia breve sistémica.',
    biografia:
      'Doctorado en filosofía y formado en psicoterapia en Suiza, Paul Watzlawick se incorporó en 1960 al Mental Research Institute (MRI) de Palo Alto, California, continuando las investigaciones de Gregory Bateson sobre cibernética, familia y comunicación.\n\nSu libro "Teoría de la comunicación humana" (1967, con Beavin y Jackson) es un texto fundacional de la Clínica Sistémica y Psicoterapias en la UBA, al desplazar el foco desde el síntoma intrapsíquico aislado hacia los patrones circulares de interacción y comunicación en los vínculos.',
    principalesAportes: [
      'Formulación de los cinco axiomas de la pragmática de la comunicación humana (encabezados por "es imposible no comunicar").',
      'Diferenciación entre cambio 1 (más de lo mismo dentro del sistema) y cambio 2 (transformación de las reglas del propio sistema).',
      'Análisis de las "soluciones intentadas" que paradójicamente mantienen y agravan el problema clínico.',
      'Desarrollo de la terapia breve estratégica y constructivismo radical en psicoterapia sistémica.'
    ],
    conceptosClave: [
      {
        termino: 'Los 5 axiomas de la comunicación',
        explicacion:
          '1) Imposible no comunicar; 2) Contenido y relación; 3) Puntuación de secuencia; 4) Digital y analógico; 5) Interacción simétrica o complementaria.'
      },
      {
        termino: 'Causalidad circular',
        explicacion:
          'En un sistema humano las conductas se retroalimentan mutuamente (A influye en B y B en A), superando la causalidad lineal causa → efecto.'
      },
      {
        termino: 'Doble vínculo y Paradojas pragmáticas',
        explicacion:
          'Mensajes contradictorios en distintos niveles lógicos (ej. "¡Sé espontáneo!") de los que el receptor no puede metacomunicar ni escapar.'
      },
      {
        termino: 'Cambio 1 vs. Cambio 2',
        explicacion:
          'El cambio 1 modifica conductas sin alterar las reglas del sistema; el cambio 2 reencuadra el marco y disuelve el círculo vicioso.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Teoría de la comunicación humana (con Beavin y Jackson)',
        año: '1967',
        resumen: 'Texto clásico sobre pragmática comunicacional, axiomas y comunicación patológica.'
      },
      {
        titulo: 'Cambio (con Weakland y Fisch)',
        año: '1974',
        resumen: 'Sistematiza las soluciones intentadas, el cambio 1/2 y las intervenciones estratégicas.'
      },
      {
        titulo: '¿Es real la realidad?',
        año: '1976',
        resumen: 'Explora la construcción comunicacional de la realidad y la profecía autocumplida.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Gregory Bateson', autorId: 'bateson', nota: 'Cibernética, doble vínculo y Escuela de Palo Alto (junto a Don D. Jackson)' }
    ],
    influencioA: [
      { nombre: 'Mara Selvini Palazzoli', autorId: 'selvini-palazzoli', nota: 'Escuela de Milán e intervenciones paradójicas' },
      { nombre: 'Salvador Minuchin', autorId: 'minuchin', nota: 'Diálogo clínico en terapia familiar sistémica' }
    ]
  },

  // ======================== REFERENTES UBA / ARGENTINA ========================
  {
    id: 'ulloa',
    nombre: 'Fernando Ulloa',
    apellidoCorto: 'Ulloa',
    matchKeys: ['ulloa'],
    materiaIdsExtra: [
      'psico-organizacional-institucional',
      'salud-publica-mental',
      'teoria-tecnica-grupos',
      'etica-deontologia-ddhh'
    ],
    fechas: '1924 – 2008',
    origen: 'Pigüé · Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Médico psiquiatra y psicoanalista argentino, docente histórico de la UBA. Creó los conceptos de "encerrona trágica", "institución de la ternura" y "números clínicos" en psicología institucional.',
    biografia:
      'Discípulo de Enrique Pichon-Rivière y compañero de generación de José Bleger, Fernando Ulloa fue profesor titular en la carrera de Psicología de la UBA (creador de la cátedra de Psicología Clínica de Adultos en los años 60 y figura central tras la recuperación democrática) y un referente ético y político del psicoanálisis argentino.\n\nSu trabajo articuló la clínica psicoanalítica con la intervención en hospitales, escuelas y derechos humanos —acompañando a organismos frente al terrorismo de Estado— y dejó herramientas clínicas inolvidables como la encerrona trágica, la síndrome de violentación institucional y la institución de la ternura.',
    principalesAportes: [
      'Concepto de "encerrona trágica": situación sin tercero de apelación donde el sujeto queda a merced de quien ejerce el poder arbitrario.',
      'Noción de "institución de la ternura" (empatía y miramiento) como base afectiva y ética de la subjetivación y la salud mental.',
      'Análisis del "síndrome de violentación institucional" y de la "cultura de la mortificación" en hospitales y organizaciones públicas.',
      'Dispositivos de intervención clínica institucional ("números clínicos" y asambleas clínicas).'
    ],
    conceptosClave: [
      {
        termino: 'Encerrona trágica',
        explicacion:
          'Escena de dos lugares sin tercero de apelación —víctima y victimario, o usuario sin derechos frente a una burocracia— que produce dolor psíquico extremo.'
      },
      {
        termino: 'Institución de la ternura',
        explicacion:
          'Instancia fundante que articula empatía (registro del otro) y miramiento (respeto por el sujeto autónomo), antídoto contra la crueldad.'
      },
      {
        termino: 'Cultura de la mortificación',
        explicacion:
          'Naturalización del malestar, la queja impotente y la pérdida de coraje institucional cuando se deterioran las condiciones de trabajo y cuidado.'
      },
      {
        termino: 'Tercero de apelación',
        explicacion:
          'Instancia legal, ética o institucional externa que rompe la encerrona trágica y restituye derechos y palabra.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Novela clínica psicoanalítica: historial de una práctica',
        año: '1995',
        resumen: 'Obra emblemática que reúne sus textos sobre ternura, encerrona trágica e instituciones.'
      },
      {
        titulo: 'Salud ele-Mental: con toda la mar detrás',
        año: '2011 (póstumo)',
        resumen: 'Compilación de seminarios sobre clínica, instituciones públicas y derechos humanos.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Enrique Pichon-Rivière', autorId: 'pichon-riviere', nota: 'Psicología social, clínica grupal y lectura institucional' },
      { nombre: 'José Bleger', autorId: 'bleger', nota: 'Psicohigiene e intervención en instituciones' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Metapsicología y malestar en la cultura' }
    ],
    influencioA: [
      { nombre: 'Psicología Institucional y Derechos Humanos en la UBA', nota: 'Ética clínica frente a la vulnerabilidad institucional' },
      { nombre: 'Alicia Stolkiner', autorId: 'stolkiner', nota: 'Articulación entre subjetividad, instituciones y derechos' }
    ]
  },
  {
    id: 'bleichmar',
    nombre: 'Silvia Bleichmar',
    apellidoCorto: 'Bleichmar',
    matchKeys: ['bleichmar, s.', 'silvia bleichmar'],
    materiaIdsExtra: [
      'psico-desarrollo-niñez',
      'psico-desarrollo-adolescencia',
      'clinica-ninos-adolescentes',
      'psico-educativa-prof',
      'etica-deontologia-ddhh'
    ],
    fechas: '1944 – 2007',
    origen: 'Bahía Blanca · Buenos Aires, Argentina · México',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicoanalista y doctora en psicoanálisis argentina, discípula de Jean Laplanche. Investigó la fundación temprana del inconsciente, el diagnóstico infantil y la producción histórica de la subjetividad.',
    biografia:
      'Formada en Psicología y Sociología en la UBA y doctorada en la Universidad de París VII bajo la dirección de Jean Laplanche durante su exilio en México, Silvia Bleichmar es una de las voces más lúcidas y leídas del psicoanálisis argentino contemporáneo.\n\nSu obra articula una rigurosa clínica con niños y adolescentes —diferenciando trastornos en la constitución psíquica de síntomas neuróticos— con ensayos penetrantes sobre la subjetividad en tiempos de crisis social, violencia escolar y ética.',
    principalesAportes: [
      'Modelo metapsicológico de la "fundación de lo inconsciente" a partir de la represión originaria y los cuidados tempranos del semejante.',
      'Diferenciación clínica clave en infancia entre "trastorno" (falla en la estructuración del aparato psíquico) y "síntoma" (formación de compromiso).',
      'Distinción entre constitución del psiquismo (leyes universales) y producción de subjetividad (modos históricos y sociales de habitar el mundo).',
      'Intervenciones sobre violencia en escuelas, construcción de legalidades y ética del semejante.'
    ],
    conceptosClave: [
      {
        termino: 'Constitución psíquica vs. Subjetividad',
        explicacion:
          'El aparato psíquico responde a invariantes metapsicológicas; la subjetividad varía históricamente según los discursos y condiciones sociales.'
      },
      {
        termino: 'Trastorno vs. Síntoma en la infancia',
        explicacion:
          'El síntoma supone un inconsciente ya fundado y reprimido; el trastorno expresa déficit o fallas en la propia constitución psíquica.'
      },
      {
        termino: 'Represión originaria',
        explicacion:
          'Operación fundacional que separa el inconsciente del preconsciente-consciente y organiza el aparato psíquico infantil.'
      },
      {
        termino: 'Construcción de legalidades',
        explicacion:
          'Tarea educativa y ética de pasar de límites meramente punitivos a normas interiorizadas basadas en el reconocimiento del otro.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'La fundación de lo inconsciente',
        año: '1993',
        resumen: 'Desarrolla la metapsicología de los orígenes y la clínica temprana.'
      },
      {
        titulo: 'La subjetividad en riesgo',
        año: '2005',
        resumen: 'Analiza el impacto de la exclusión y las crisis sociales sobre infancias y adolescencias.'
      },
      {
        titulo: 'Violencia social – Violencia escolar',
        año: '2008 (póstumo)',
        resumen: 'Texto muy consultado en Psicología Educacional sobre límites y legalidades.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Jean Laplanche & J.-B. Pontalis', autorId: 'laplanche', nota: 'Teoría de la seducción generalizada y rigor metapsicológico' },
      { nombre: 'Sigmund Freud', autorId: 'freud', nota: 'Metapsicología y orígenes del aparato psíquico' }
    ],
    influencioA: [
      { nombre: 'Clínica infantil y Psicología Educacional en Argentina', nota: 'Diagnóstico diferencial no patologizante y ética del semejante' }
    ]
  },
  {
    id: 'baquero',
    nombre: 'Ricardo Baquero',
    apellidoCorto: 'Baquero',
    matchKeys: ['baquero'],
    materiaIdsExtra: ['psico-educativa-prof', 'psico-aprendizaje'],
    fechas: '1962 – presente',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Psicólogo argentino e investigador referente en Psicología Educacional en la UBA y UNQ. Analizó el aprendizaje escolar desde el enfoque sociohistórico de Vygotsky y cuestionó la naturalización del "fracaso escolar".',
    biografia:
      'Licenciado en Psicología por la UBA y docente-investigador en la UBA y la Universidad Nacional de Quilmes, Ricardo Baquero es uno de los autores más leídos en Psicología Educacional de la Facultad de Psicología.\n\nRetomando a Lev Vygotsky, Jerome Bruner y los estudios históricos sobre la escuela moderna, su obra desmonta la idea de que el fracaso escolar se explique simplemente por "déficits individuales" del alumno, proponiendo analizar en cambio las condiciones situacionales del dispositivo escolar y la "educabilidad".',
    principalesAportes: [
      'Introducción crítica y pedagógica de la obra de Vygotsky en el campo educativo argentino ("Vigotsky y el aprendizaje escolar").',
      'Revisión de la "hipótesis de la educabilidad": el problema no es la capacidad individual del niño sino la relación entre sujeto y dispositivo escolar.',
      'Crítica a la patologización del fracaso escolar y a la aplicación mecánica de psicologías del desarrollo al aula.',
      'Enfoque situacional del aprendizaje: la unidad de análisis es la actividad escolar en contexto, no el alumno aislado.'
    ],
    conceptosClave: [
      {
        termino: 'Sospecha sobre la educabilidad',
        explicacion:
          'Cuestiona atribuir el fracaso escolar a presuntas carencias biológicas o familiares del alumno, desplazando la mirada a la situación educativa.'
      },
      {
        termino: 'Dispositivo escolar moderno',
        explicacion:
          'La escuela no es un ámbito "natural" del desarrollo, sino una construcción histórica con reglas específicas (gradualidad, simultaneidad, descontextualización).'
      },
      {
        termino: 'Enfoque situacional',
        explicacion:
          'Analiza el aprender como participación en prácticas culturales concretas junto a docentes, pares y herramientas semióticas.'
      },
      {
        termino: 'Falacia de abstracción de la situación',
        explicacion:
          'Error de evaluar las capacidades de un estudiante haciendo caso omiso de las condiciones institucionales y pedagógicas en que aprende.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Vigotsky y el aprendizaje escolar',
        año: '1996',
        resumen: 'Manual fundamental de Psicología Educacional sobre ZDP, mediación y escuela.'
      },
      {
        titulo: 'La educabilidad bajo sospecha',
        año: '2001',
        resumen: 'Artículo imprescindible sobre inclusión educativa y crítica al modelo del déficit.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Lev S. Vygotsky', autorId: 'vygotsky', nota: 'Teoría sociohistórica y Zona de Desarrollo Próximo' },
      { nombre: 'Jerome S. Bruner', autorId: 'bruner', nota: 'Psicología cultural y andamiaje educativo' },
      { nombre: 'Jean Piaget', autorId: 'piaget', nota: 'Diálogo crítico sobre constructivismo y escolarización' }
    ],
    influencioA: [
      { nombre: 'Cátedras de Psicología Educacional (UBA)', nota: 'Intervención psicoeducativa inclusiva y situada' }
    ]
  },
  {
    id: 'keegan',
    nombre: 'Eduardo Keegan',
    apellidoCorto: 'Keegan',
    matchKeys: ['keegan'],
    materiaIdsExtra: [
      'psico-clinica-psicoterapias-2',
      'clinica-cognitivo-comportamental',
      'entrenamiento-tecnicas-cognitivas'
    ],
    fechas: '1961 – presente',
    origen: 'Buenos Aires, Argentina',
    corriente: 'Referentes UBA / Argentina',
    resumenCorto:
      'Doctor en Psicología y profesor titular de Psicoterapias II y Clínica Cognitivo-Comportamental en la UBA. Principal referente académico de la terapia cognitiva y los tratamientos basados en evidencia en Argentina.',
    biografia:
      'Doctor en Psicología por la UBA y profesor titular regular de Clínica Psicológica y Psicoterapias: Psicoterapias, Emergencia e Interconsulta (Cátedra II) y de Teoría y Técnica de la Clínica Cognitivo-Comportamental en la Facultad de Psicología, Eduardo Keegan impulsó de manera decisiva la enseñanza universitaria y la investigación clínica en psicoterapia cognitivo-conductual en Argentina.\n\nSu producción aborda los fundamentos filosóficos y empíricos de la terapia cognitiva, los trastornos de ansiedad, el perfeccionismo clínico, la depresión y los criterios de psicoterapia basada en la evidencia.',
    principalesAportes: [
      'Consolidación de la enseñanza de la terapia cognitivo-conductual y de la psicoterapia basada en la evidencia en la Facultad de Psicología de la UBA.',
      'Difusión crítica del modelo cognitivo de Beck y de los enfoques transdiagnósticos de Barlow en el contexto clínico argentino.',
      'Investigaciones sobre perfeccionismo clínico, rumiación, depresión, trastornos de ansiedad y alianza terapéutica.',
      'Sistematización de criterios para evaluar eficacia, efectividad y eficiencia en psicoterapia.'
    ],
    conceptosClave: [
      {
        termino: 'Tratamientos con apoyo empírico',
        explicacion:
          'Intervenciones psicoterapéuticas cuya eficacia fue demostrada en estudios clínicos controlados y replicados para problemas específicos.'
      },
      {
        termino: 'Formulación cognitiva de caso',
        explicacion:
          'Hipótesis individualizada que conecta problemas actuales, creencias nucleares, factores mantenedores y plan terapéutico.'
      },
      {
        termino: 'Perfeccionismo clínico',
        explicacion:
          'Proceso transdiagnóstico donde la autovaloración depende rígidamente de alcanzar estándares exigentes pese a sus costos emocionales.'
      },
      {
        termino: 'Psicoeducación',
        explicacion:
          'Componente activo de la clínica cognitiva orientado a que el paciente comprenda su problema y participe colaborativamente del tratamiento.'
      }
    ],
    obrasEsenciales: [
      {
        titulo: 'Escritos de psicoterapia cognitiva',
        año: '2007',
        resumen: 'Compilación central en Psicoterapias II sobre fundamentos, técnica y debates clínicos.'
      },
      {
        titulo: 'Terapia cognitivo-conductual: teoría y práctica (con colaboradores)',
        año: '2018',
        resumen: 'Recorrido actualizado por la clínica cognitiva contemporánea y basada en evidencia.'
      }
    ],
    influenciadoPor: [
      { nombre: 'Aaron T. Beck', autorId: 'beck', nota: 'Modelo cognitivo de la depresión y los trastornos de ansiedad' },
      { nombre: 'David H. Barlow', autorId: 'barlow', nota: 'Clínica basada en la evidencia y enfoque transdiagnóstico' },
      { nombre: 'Albert Ellis', autorId: 'ellis', nota: 'Fundamentos de la psicoterapia cognitiva' },
      { nombre: 'Steven C. Hayes', autorId: 'hayes', nota: 'Diálogo con la tercera ola contextual (ACT)' }
    ],
    influencioA: [
      { nombre: 'Clínica Cognitivo-Comportamental en Psicología UBA', nota: 'Formación e investigación clínica contemporánea en Argentina' }
    ]
  }
];
