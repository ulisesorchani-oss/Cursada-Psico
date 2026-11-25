import React from 'react';
import {
  FileText,
  ExternalLink,
  BookMarked,
  GraduationCap,
  PlayCircle,
  Calendar,
  Mail,
  Building2
} from 'lucide-react';

const UBA_TESIS_URL = 'https://www.psi.uba.ar/estudiantes.php?var=tesis_licenciatura/index.php';
const EDI_TESIS_URL = 'https://edipsicouba.net.ar/academico/que-es-la-tesis/';
const SISTEMA_ACADEMICO_URL = 'http://academica.psi.uba.ar/';

interface TesisResource {
  title: string;
  source: string;
  format: string;
  description: string;
  url: string;
  kind: 'pdf' | 'video' | 'calendar';
}

const RESOURCES: TesisResource[] = [
  {
    title: 'Reglamento de Tesis de Licenciatura',
    source: 'Facultad de Psicología UBA',
    format: 'PDF oficial',
    description:
      'Marco normativo oficial con requisitos, plazos, conformación de jurados y pautas de evaluación.',
    url: 'https://www.psi.uba.ar/tesis_licenciatura/archivos/reglamento_tesis_licenciatura.pdf',
    kind: 'pdf'
  },
  {
    title: 'Instructivo para Alumnos actualizado',
    source: 'Facultad de Psicología UBA',
    format: 'PDF oficial',
    description:
      'Paso a paso de los trámites administrativos en el Sistema Académico (Nota 1 y entregas) y pautas formales de escritura.',
    url: 'https://www.psi.uba.ar/tesis_licenciatura/instructivo_alumnos.pdf',
    kind: 'pdf'
  },
  {
    title: 'Guía rápida de referencias · Normas APA',
    source: 'Facultad de Psicología UBA',
    format: 'PDF oficial',
    description:
      'Lineamientos oficiales de citación en texto y armado de referencias bibliográficas.',
    url: 'https://www.psi.uba.ar/tesis_licenciatura/archivos/guia_rapida_referencias_apa.pdf',
    kind: 'pdf'
  },
  {
    title: 'Pautas para un Lenguaje Inclusivo y No Discriminatorio',
    source: 'Facultad de Psicología UBA',
    format: 'PDF oficial',
    description:
      'Recomendaciones institucionales de redacción académica vigentes para la presentación de tesis.',
    url: 'https://www.psi.uba.ar/tesis_licenciatura/archivos/pautas_lenguaje_inclusivo.pdf',
    kind: 'pdf'
  },
  {
    title: 'Curso completo: Cómo hacer una Tesis',
    source: 'EDI Psicología UBA',
    format: 'Playlist YouTube',
    description:
      'Videos orientativos publicados por el Centro de Estudiantes para despejar dudas sobre tema, metodología y escritura.',
    url: 'https://www.youtube.com/playlist?list=PLCy0hcTWg09Pa0TdE5vXdVyr_cXdviK1x',
    kind: 'video'
  },
  {
    title: 'Calendario de Tesis de Grado',
    source: 'EDI Psicología UBA',
    format: 'Guía online',
    description:
      'Fechas límite de entrega de notas administrativas y turnos de defensa actualizados.',
    url: 'https://edipsicouba.net.ar/info-util/tesis-de-grado/',
    kind: 'calendar'
  }
];

interface KeyPoint {
  number: string;
  title: string;
  body: string;
}

const KEY_POINTS: KeyPoint[] = [
  {
    number: '01',
    title: '¿En qué consiste la Tesis?',
    body: 'Es un trabajo de integración final obligatorio para ingresantes desde 2011 (Res. CS 6768/13). Consiste en un trabajo escrito realizado con el acompañamiento de un/a Tutor/a y culmina con una defensa oral ante un Jurado compuesto por dos Profesores y/o JTP de la Facultad.'
  },
  {
    number: '02',
    title: 'Cuándo podés empezar (Nota 1)',
    body: 'Para iniciar la tesis y formalizar el vínculo académico con tu tutor/a mediante la Nota 1 alcanza con tener aprobada una Práctica Profesional (o de Investigación), o bien estar cursándola. Todas las notas administrativas se gestionan desde el Sistema Académico.'
  },
  {
    number: '03',
    title: '¿Quién puede ser Tutor/a?',
    body: 'Puede cumplir el rol cualquier Profesor/a o JTP de la Facultad, o un ATP 1° (Ayudante de Trabajos Prácticos) que acredite formación específica en la temática elegida. Cada estudiante propone y acuerda su tutoría.'
  },
  {
    number: '04',
    title: 'Requisitos para la defensa oral',
    body: 'Para llegar a la instancia de defensa oral ante el Jurado es requisito tener la tesis escrita aprobada y contar con la totalidad de las materias del plan de estudios aprobadas (si adeudás finales obligatorios, tenés que rendir en el 1er llamado del turno).'
  }
];

export function TesisSection() {
  return (
    <section
      id="tesis"
      className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28 scroll-mt-20"
    >
      <div className="bg-white border border-ink/8 rounded-3xl p-5 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-8 border-b border-ink/8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
                Instancia Final · Res. CS 6768/13
              </span>
              <div className="h-[1px] w-8 bg-bordo/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink text-balance">
              Tesis de Licenciatura
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl leading-relaxed">
              Información oficial de la Facultad de Psicología UBA y guía estudiantil de EDI sobre
              requisitos, tutoría, trámites administrativos y defensas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={UBA_TESIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bordo text-white text-xs font-bold hover:bg-bordo-light transition-colors whitespace-nowrap"
            >
              Portal Oficial UBA
              <ExternalLink size={12} />
            </a>
            <a
              href={EDI_TESIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-paper border border-ink/12 text-ink text-xs font-bold hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap"
            >
              ¿Qué es la Tesis? (EDI)
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Official Documentation & EDI Resources */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo flex items-center gap-2">
                <BookMarked size={15} />
                Documentación Oficial y Guías
              </h3>
              <span className="text-xs text-muted tabular-nums">{RESOURCES.length} recursos</span>
            </div>

            <div className="space-y-3">
              {RESOURCES.map((res) => {
                const Icon =
                  res.kind === 'video'
                    ? PlayCircle
                    : res.kind === 'calendar'
                      ? Calendar
                      : FileText;

                return (
                  <a
                    key={res.title}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-2xl bg-paper border border-ink/8 hover:border-bordo/45 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <Icon
                          size={16}
                          className={
                            res.kind === 'pdf'
                              ? 'text-bordo shrink-0 mt-0.5'
                              : 'text-violeta shrink-0 mt-0.5'
                          }
                        />
                        <h4 className="text-sm font-bold text-ink group-hover:text-bordo transition-colors leading-snug">
                          {res.title}
                        </h4>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-muted group-hover:text-bordo shrink-0 mt-0.5 transition-colors"
                      />
                    </div>
                    <p className="text-xs text-muted leading-relaxed pl-6">{res.description}</p>
                    <p className="text-[11px] font-semibold text-bordo/80 pl-6 mt-2">
                      {res.source} · {res.format}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Structured Overview + Official Contact & Repository */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violeta flex items-center gap-2 mb-5">
              <GraduationCap size={15} />
              Guía rápida: requisitos y pasos clave
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {KEY_POINTS.map((item) => (
                <div
                  key={item.number}
                  className="p-5 rounded-2xl bg-paper border border-ink/8 flex flex-col"
                >
                  <span className="text-xs font-bold text-bordo tabular-nums">{item.number}.</span>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-ink mt-1 mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Reservorio de Tesis + Important Notes */}
            <div className="p-5 rounded-2xl bg-violeta/[0.04] border border-violeta/15 text-xs leading-relaxed space-y-2 mb-6">
              <p className="font-bold text-violeta uppercase tracking-wide text-[11px]">
                Reservorio de Tesis Publicadas
              </p>
              <p className="text-ink">
                Podés consultar tesis ya aprobadas como referencia ingresando al{' '}
                <a
                  href={SISTEMA_ACADEMICO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-bordo hover:underline"
                >
                  Sistema Académico
                </a>{' '}
                en la sección <em>Consultas académicas / Tesis publicadas</em>. Recordá que si
                ingresaste a la Facultad antes de 2011, el requisito de Tesis no aplica a tu plan.
              </p>
            </div>

            {/* Official Contact & Source Attribution Bar */}
            <div className="mt-auto p-4 sm:p-5 rounded-2xl bg-paper border border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 text-xs">
                <p className="font-bold text-ink flex items-center gap-2">
                  <Building2 size={15} className="text-bordo shrink-0" />
                  Oficina de Tesis · Facultad de Psicología UBA
                </p>
                <p className="text-muted">
                  Hipólito Yrigoyen 3242, CABA · Fuentes: Portal Oficial UBA y{' '}
                  <a
                    href={EDI_TESIS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink hover:text-bordo hover:underline"
                  >
                    EDI Psicología UBA
                  </a>
                </p>
              </div>
              <a
                href="mailto:tesis@psi.uba.ar"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-bordo/8 text-xs font-bold text-bordo hover:bg-bordo hover:text-white transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
              >
                <Mail size={13} />
                tesis@psi.uba.ar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
