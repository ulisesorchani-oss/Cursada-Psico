import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, Maximize2, Download, X, RotateCcw } from 'lucide-react';

const FLOWCHART_SRC = '/assets/aistudio/plan_estudios_psicologia_2026_new_b3884e5a.png';

export function CurriculumFlowchart() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (event.key === '+' || event.key === '=') {
        setZoom((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))));
      } else if (event.key === '-') {
        setZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  const openLightbox = () => {
    setZoom(1);
    setIsLightboxOpen(true);
  };

  return (
    <section
      id="diagrama"
      className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28 scroll-mt-20"
    >
      <div className="bg-white border border-ink/8 rounded-3xl p-5 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
                Correlatividades
              </span>
              <div className="h-[1px] w-8 bg-bordo/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink text-balance">
              Diagrama de Flujo del Plan 1985
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl leading-relaxed">
              Mapa oficial de correlatividades por ciclo. Seguí las flechas de colores para saber
              qué materias te habilitan cada cursada.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={openLightbox}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bordo text-white text-xs font-bold hover:bg-bordo-light transition-colors whitespace-nowrap"
            >
              <Maximize2 size={14} />
              Ampliar diagrama
            </button>
            <a
              href={FLOWCHART_SRC}
              download="plan-estudios-psicologia-uba-1985.png"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-paper border border-ink/12 text-ink text-xs font-bold hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap"
            >
              <Download size={14} />
              Descargar PNG
            </a>
          </div>
        </div>

        {/* Interactive Diagram Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-ink/10 bg-paper group">
          <button
            type="button"
            onClick={openLightbox}
            className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-bordo cursor-zoom-in"
            aria-label="Abrir diagrama de correlatividades en pantalla completa"
          >
            <img
              src={FLOWCHART_SRC}
              alt="Diagrama de flujo oficial del Plan de Estudios 1985 de la Licenciatura en Psicología UBA con todas las materias y flechas de correlatividades"
              className="w-full h-auto block"
              loading="lazy"
            />
          </button>
          <div className="px-4 py-2.5 bg-paper border-t border-ink/8 flex items-center justify-between gap-3 text-xs text-muted">
            <span>Tocá o hacé clic sobre el diagrama para hacer zoom y leer cada flecha con detalle.</span>
            <button
              type="button"
              onClick={openLightbox}
              className="font-bold text-bordo hover:underline whitespace-nowrap shrink-0"
            >
              Ver en grande
            </button>
          </div>
        </div>

        {/* Official Plan 1985 Key Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-ink/8 text-xs sm:text-sm leading-relaxed">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo mb-2">
              Composición de la Carrera
            </h3>
            <p className="text-muted">
              El plan consta de <strong className="text-ink">6 materias del CBC</strong> más{' '}
              <strong className="text-ink">23 materias obligatorias</strong> de la Licenciatura
              (15 del Ciclo de Formación General, 7 del Ciclo de Formación Profesional y 1 Práctica
              Profesional y de Investigación) y <strong className="text-ink">5 electivas</strong>{' '}
              (2 del CFG y 3 del CFP).
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violeta mb-2">
              Aclaraciones de Cursada
            </h3>
            <p className="text-muted">
              <em>Exploración y Diagnóstico Psicológico I y II</em> pueden cursarse en simultáneo
              con <em>Psicopatología</em>. <em>Clínica y Psicoterapias I y II</em> no son
              correlativas entre sí. Además, una de las 3 electivas del CFP puede reemplazarse por
              otra Práctica Profesional y de Investigación.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-2">
              Idioma y Tesis
            </h3>
            <p className="text-muted">
              Para cursar <strong className="text-ink">Idioma I y II</strong> (Inglés o Francés) se
              requiere tener aprobadas <em>Procesos Psicológicos Básicos</em> y{' '}
              <em>Psicoanálisis: Freud</em> (Res. CD 17/99). Para graduarse se exige la{' '}
              <strong className="text-ink">Tesis de Licenciatura</strong> (Res. CS 6768/13).
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-[110] flex flex-col bg-ink/90 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Diagrama de flujo ampliado"
          >
            {/* Top Controls */}
            <div className="px-4 sm:px-6 py-3.5 bg-ink text-white border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <p className="text-xs sm:text-sm font-semibold truncate">
                Plan de Estudios 1985 · Correlatividades
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                  disabled={zoom <= 1}
                  aria-label="Alejar diagrama"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-xs font-bold tabular-nums min-w-[48px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))))}
                  disabled={zoom >= 2.5}
                  aria-label="Acercar diagrama"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
                >
                  <ZoomIn size={16} />
                </button>
                {zoom > 1 && (
                  <button
                    type="button"
                    onClick={() => setZoom(1)}
                    aria-label="Restablecer zoom"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <RotateCcw size={15} />
                  </button>
                )}
                <a
                  href={FLOWCHART_SRC}
                  download="plan-estudios-psicologia-uba-1985.png"
                  aria-label="Descargar diagrama"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Download size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Cerrar vista ampliada"
                  className="ml-1 p-2 rounded-lg bg-bordo hover:bg-bordo-light transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable Zoom Viewport */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) setIsLightboxOpen(false);
              }}
              className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center"
            >
              <img
                src={FLOWCHART_SRC}
                alt="Diagrama de flujo del Plan de Estudios 1985 de Psicología UBA"
                style={{ width: `${zoom * 100}%` }}
                className="max-w-none h-auto rounded-xl shadow-2xl bg-white transition-[width] duration-200"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
