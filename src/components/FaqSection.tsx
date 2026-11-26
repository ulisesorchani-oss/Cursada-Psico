import React, { useState, useMemo } from 'react';
import { ChevronDown, ExternalLink, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

type FaqCategory = 'Todas' | 'CBC e Ingreso' | 'Equivalencias' | 'Trámites e Inscripciones' | 'Correlatividades';

interface FaqLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FaqItem {
  id: string;
  categoria: Exclude<FaqCategory, 'Todas'>;
  pregunta: string;
  respuesta: string[];
  links?: FaqLink[];
}

const FAQ_CATEGORIES: readonly FaqCategory[] = [
  'Todas',
  'CBC e Ingreso',
  'Equivalencias',
  'Trámites e Inscripciones',
  'Correlatividades'
] as const;

const FAQ_ITEMS: readonly FaqItem[] = [
  // ================= CBC E INGRESO =================
  {
    id: 'cbc-materias-ubaxxi',
    categoria: 'CBC e Ingreso',
    pregunta: '¿Qué materias del CBC necesito para Psicología y puedo cursarlas por UBA XXI?',
    respuesta: [
      'El Ciclo Básico Común (CBC) para la Licenciatura en Psicología consta de 6 materias obligatorias: Introducción al Pensamiento Científico (IPC), Introducción al Conocimiento de la Sociedad y el Estado (ICSE), Psicología, Biología, Matemática y Semiología.',
      'Podés cursarlas de forma presencial en las sedes del CBC o a distancia a través de UBA XXI (o combinar ambas modalidades). Para inscribirte al Ciclo de Formación General de la facultad necesitás tener aprobadas las 6 materias.'
    ],
    links: [
      { label: 'Ver materias del CBC en el Plan', href: '#plan' },
      { label: 'Portal oficial del CBC', href: 'https://www.cbc.uba.ar/', external: true }
    ]
  },
  {
    id: 'cbc-pase-facultad',
    categoria: 'CBC e Ingreso',
    pregunta: 'Ya terminé el CBC: ¿cómo hago el trámite para ingresar a la Facultad de Psicología?',
    respuesta: [
      'Al aprobar las 6 materias del CBC (incluyendo exámenes finales si correspondiera), debés realizar la inscripción de ingreso a la Facultad de Psicología dentro de las fechas publicadas en el Calendario Académico.',
      'El trámite incluye la presentación de la documentación requerida (DNI, título secundario legalizado o constancia en trámite, y certificación de materias del CBC / UBA XXI) para obtener tu legajo y habilitar tu usuario en el Sistema Académico de Psicología.'
    ],
    links: [
      {
        label: 'Calendario Académico 2026',
        href: 'https://www.psi.uba.ar/estudiantes.php?var=calendario2026/2026.php',
        external: true
      }
    ]
  },
  {
    id: 'cbc-otra-carrera-uba',
    categoria: 'CBC e Ingreso',
    pregunta: 'Si ya aprobé materias del CBC en otra carrera de la UBA, ¿tengo que recursar todo?',
    respuesta: [
      'No. Las materias comunes ya aprobadas (como IPC e ICSE, o Biología/Matemática si coinciden en código y programa) se reconocen mediante el trámite de pase de carrera o simultaneidad en el CBC.',
      'Solo vas a tener que cursar y aprobar las asignaturas específicas del CBC de Psicología que todavía te falten.'
    ]
  },

  // ================= EQUIVALENCIAS =================
  {
    id: 'equivalencias-otras-universidades',
    categoria: 'Equivalencias',
    pregunta: '¿Cómo solicito equivalencias si vengo de otra universidad o de otra facultad de la UBA?',
    respuesta: [
      'Las solicitudes de equivalencias se presentan ante la Dirección de Alumnos / Mesa de Entradas dentro de los períodos fijados en el Calendario Académico, una vez que ya sos estudiante regular de la facultad (o junto al pase de facultad UBA).',
      'Generalmente se solicita certificado analítico legalizado, plan de estudios y programas autenticados de cada materia aprobada donde figuren contenidos y carga horaria. Cada cátedra evalúa si corresponde equivalencia total, parcial (rindiendo contenidos complementarios) o denegación.'
    ],
    links: [
      {
        label: 'Portal de Estudiantes UBA Psicología',
        href: 'https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php',
        external: true
      }
    ]
  },
  {
    id: 'equivalencias-idioma-electivas',
    categoria: 'Equivalencias',
    pregunta: '¿Cómo se acredita el requisito de Idioma y se pueden pedir equivalencias por electivas?',
    respuesta: [
      'El Plan 1985 exige acreditar un nivel de lectocomprensión en idioma extranjero (Inglés o Francés). Podés cursarlo en la facultad o rendir el examen libre/de suficiencia en las fechas habilitadas por el Departamento de Idiomas.',
      'En cuanto a materias electivas, asignaturas aprobadas en otras facultades de la UBA o universidades nacionales con pertinencia psicológica o metodológica pueden presentarse para evaluación de equivalencia ante la Secretaría Académica.'
    ]
  },

  // ================= TRÁMITES E INSCRIPCIONES =================
  {
    id: 'inscripcion-sistema-academico',
    categoria: 'Trámites e Inscripciones',
    pregunta: '¿Cómo funciona la inscripción a materias, comisiones y exámenes finales?',
    respuesta: [
      'Todas las inscripciones a cursadas (teóricos, prácticos y seminarios) y a mesas de exámenes finales se gestionan desde el Sistema Académico de Psicología UBA dentro de las ventanas de fechas del Calendario Académico.',
      'En las inscripciones a cursada podés elegir prioridades de cátedra y bandas horarias; si no obtenés vacante en el primer llamado, existe una instancia de reasignación o segundo llamado. Recordá siempre guardar el comprobante de cada inscripción.'
    ],
    links: [
      { label: 'Ir al Sistema Académico', href: 'http://academica.psi.uba.ar/', external: true },
      { label: 'Ir al Campus Virtual', href: 'https://www.campusvirtual.psi.uba.ar/', external: true }
    ]
  },
  {
    id: 'regimen-promocion-final-libre',
    categoria: 'Trámites e Inscripciones',
    pregunta: '¿Cuál es la diferencia entre promoción directa, regularidad con final y examen libre?',
    respuesta: [
      'Promoción sin examen final: en la mayoría de las cátedras se alcanza con 75% de asistencia y nota mínima de 7 (siete) en cada instancia parcial (sin promediar notas menores a 7, salvo aclaración expresa del programa).',
      'Regularidad con examen final: se obtiene con 75% de asistencia y nota entre 4 y 6 en los parciales, habilitándote a rendir el final en las mesas oficiales mientras esté vigente tu regularidad. La modalidad libre permite rendir sin cursar (instancia escrita y oral sobre el programa vigente completo), salvo en materias o prácticas que exigen presencialidad obligatoria.'
    ]
  },
  {
    id: 'tramites-certificados-libreta',
    categoria: 'Trámites e Inscripciones',
    pregunta: '¿Cómo pido constancia de alumno regular, analítico parcial o consulta de legajo?',
    respuesta: [
      'La mayoría de las constancias (alumno regular, materias aprobadas y situación académica) se consultan o tramitan en línea a través del Sistema Académico y la plataforma TAD-UBA según el tipo de documento.',
      'Para trámites presenciales específicos —como legalizaciones, títulos o reclamos de actas— verificá siempre los horarios de atención y requisitos actualizados en la web oficial de la facultad.'
    ],
    links: [
      { label: 'Sistema Académico UBA', href: 'http://academica.psi.uba.ar/', external: true }
    ]
  },

  // ================= CORRELATIVIDADES =================
  {
    id: 'correlativas-cursada-vs-final',
    categoria: 'Correlatividades',
    pregunta: '¿Cómo funciona la correlatividad entre cursada (regular) y final aprobado?',
    respuesta: [
      'En el Plan 1985 cada materia define qué asignaturas previas exige como correlativas. Como regla general, para cursar una materia posterior necesitás tener regularizada (o aprobada) su correlativa inmediata, según lo habilite el sistema en cada inscripción.',
      'Sin embargo, para rendir el examen final o promocionar la materia posterior es indispensable tener previamente aprobado el final de la correlativa. Si promocionás una materia sin haber aprobado el final de su correlativa previa, no podrás cerrar la promoción hasta regularizar esa situación.'
    ],
    links: [{ label: 'Explorar el Diagrama de Correlativas', href: '#diagrama' }]
  },
  {
    id: 'correlativas-mesas-previas',
    categoria: 'Correlatividades',
    pregunta: 'Si apruebo una correlativa en las mesas de febrero/marzo o julio/agosto, ¿llego a inscribirme?',
    respuesta: [
      'Sí, siempre que el acta del examen esté cargada y pasada al Sistema Académico antes del cierre de las fechas de inscripción o de la instancia de reasignación/reclamos.',
      'Si rendiste en un llamado muy cercano al cierre de inscripciones y la nota todavía no figura reflejada en tu historia académica, revisá los canales de consulta de Dirección de Alumnos durante el período de reclamos.'
    ]
  },
  {
    id: 'correlativas-estructura-plan-34',
    categoria: 'Correlatividades',
    pregunta: '¿Cómo se completan las 34 materias del Plan 1985 (electivas, prácticas y tesis)?',
    respuesta: [
      'El plan se organiza en 34 materias: 6 del CBC, 15 obligatorias de Formación General, 2 Electivas del Ciclo de Formación General, 7 obligatorias de Formación Profesional, 3 Electivas del Ciclo de Formación Profesional y 1 Práctica Profesional o de Investigación.',
      'Dato útil: podés cursar una segunda Práctica Profesional o de Investigación para computarla como 1 de las 3 Electivas del Ciclo Profesional. Además, para recibirte necesitás acreditar el requisito de Idioma y aprobar la Tesis de Licenciatura.'
    ],
    links: [
      { label: 'Ver progreso del Plan', href: '#plan' },
      { label: 'Ir a la guía de Tesis', href: '#tesis' }
    ]
  }
];

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('Todas');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(['cbc-materias-ubaxxi']));

  const visibleItems = useMemo(() => {
    if (selectedCategory === 'Todas') return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) => item.categoria === selectedCategory);
  }, [selectedCategory]);

  const allVisibleOpen = useMemo(
    () => visibleItems.length > 0 && visibleItems.every((item) => openIds.has(item.id)),
    [visibleItems, openIds]
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAllVisible = () => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (allVisibleOpen) {
        for (const item of visibleItems) next.delete(item.id);
      } else {
        for (const item of visibleItems) next.add(item.id);
      }
      return next;
    });
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-paper border-t border-ink/8 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
                Dudas comunes
              </span>
              <div className="h-[1px] w-8 bg-bordo/30" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink text-balance">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mt-3">
              Respuestas claras sobre el CBC, pedidos de equivalencias, inscripciones en el Sistema
              Académico y cómo gestionar las correlatividades del Plan 1985.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted shrink-0">
            <span className="tabular-nums font-medium">
              {visibleItems.length} {visibleItems.length === 1 ? 'consulta' : 'consultas'}
            </span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={toggleAllVisible}
              className="font-bold text-bordo hover:text-violeta transition-colors whitespace-nowrap cursor-pointer"
            >
              {allVisibleOpen ? 'Contraer todas' : 'Expandir todas'}
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Functional Controls) */}
        <div
          role="tablist"
          aria-label="Filtrar preguntas frecuentes por tema"
          className="flex flex-wrap gap-2 p-1.5 bg-white border border-ink/10 rounded-2xl mb-8 w-fit max-w-full"
        >
          {FAQ_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer',
                  active
                    ? 'bg-bordo text-white shadow-sm'
                    : 'text-muted hover:text-ink hover:bg-paper'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Accordion Container */}
        <div className="bg-white border border-ink/10 rounded-3xl divide-y divide-ink/8 overflow-hidden">
          {visibleItems.map((item, idx) => {
            const isOpen = openIds.has(item.id);
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-trigger-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-5 sm:px-8 py-5 sm:py-6 flex items-start justify-between gap-4 hover:bg-paper/60 transition-colors cursor-pointer focus:outline-none focus-visible:bg-paper focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bordo/35"
                  >
                    <div className="space-y-1.5 min-w-0">
                      <p className="text-[11px] font-semibold text-muted tabular-nums">
                        {String(idx + 1).padStart(2, '0')} · {item.categoria}
                      </p>
                      <span className="block text-base sm:text-lg font-bold text-ink leading-snug">
                        {item.pregunta}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className={cn(
                        'w-9 h-9 shrink-0 rounded-full border border-ink/12 flex items-center justify-center text-muted transition-transform duration-200 mt-1',
                        isOpen && 'rotate-180 bg-bordo border-bordo text-white'
                      )}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-8 pb-6 pt-1 space-y-3"
                  >
                    {item.respuesta.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-[15px] text-muted leading-relaxed max-w-3xl"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {item.links && item.links.length > 0 && (
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        {item.links.map((link) =>
                          link.external ? (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-bordo hover:text-violeta underline decoration-bordo/30 underline-offset-4 transition-colors"
                            >
                              {link.label}
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <a
                              key={link.label}
                              href={link.href}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-bordo hover:text-violeta underline decoration-bordo/30 underline-offset-4 transition-colors"
                            >
                              {link.label}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpful Orientative Reminder */}
        <div className="mt-6 flex items-start gap-3 text-xs text-muted leading-relaxed px-1">
          <HelpCircle size={15} className="text-bordo shrink-0 mt-0.5" />
          <p>
            Esta sección tiene carácter orientativo. Las fechas de trámites, requisitos de
            equivalencias y disposiciones de correlatividad pueden actualizarse cada ciclo lectivo
            en el{' '}
            <a
              href="https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-bordo hover:underline"
            >
              portal oficial de la Facultad de Psicología UBA
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
