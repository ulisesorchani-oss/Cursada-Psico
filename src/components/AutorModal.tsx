import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  BookOpen,
  Lightbulb,
  BookMarked,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Share2,
  ExternalLink,
  Library,
  ChevronRight
} from 'lucide-react';
import {
  AutorProfile,
  findAutorById,
  getMateriasForAutor
} from '../data/autores';
import { Materia } from '../constants';

interface AutorModalProps {
  autor: AutorProfile | null;
  materias: Materia[];
  onClose: () => void;
  onSelectAutor: (autor: AutorProfile) => void;
  onSelectMateria: (materia: Materia) => void;
}

export function AutorModal({
  autor,
  materias,
  onClose,
  onSelectAutor,
  onSelectMateria
}: AutorModalProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (!autor) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [autor, onClose]);

  const relatedMaterias = useMemo(
    () => (autor ? getMateriasForAutor(autor, materias) : []),
    [autor, materias]
  );

  const handleShare = async (current: AutorProfile) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?autor=${encodeURIComponent(current.id)}`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopiedId(current.id);
      window.setTimeout(() => {
        setCopiedId((c) => (c === current.id ? null : c));
      }, 2200);
    } catch {
      // Ignore clipboard failures
    }
  };

  return (
    <AnimatePresence>
      {autor && (
        <div
          className="fixed inset-0 z-[105] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-autor-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />

          <motion.div
            key={autor.id}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-bordo/10"
          >
            {/* Sticky Header */}
            <div className="px-5 sm:px-8 md:px-10 pt-5 sm:pt-7 pb-4 border-b border-ink/8 flex items-start justify-between gap-4 bg-white shrink-0">
              <div className="min-w-0">
                <p className="text-xs font-bold tracking-wide text-bordo mb-1.5">
                  {autor.corriente} <span aria-hidden="true">·</span>{' '}
                  <span className="text-violeta tabular-nums">{autor.fechas}</span>{' '}
                  <span aria-hidden="true">·</span>{' '}
                  <span className="text-muted font-medium">{autor.origen}</span>
                </p>
                <h2
                  id="modal-autor-title"
                  className="text-2xl sm:text-4xl font-serif font-bold text-ink leading-tight text-balance"
                >
                  {autor.nombre}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleShare(autor)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-paper border border-ink/12 text-ink hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap"
                >
                  <Share2 size={13} />
                  {copiedId === autor.id ? 'Enlace copiado' : 'Compartir ficha'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar ficha de autor"
                  className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center hover:bg-bordo hover:border-bordo hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-8 md:p-10 overflow-y-auto flex-1 space-y-9">
              {/* Mobile Share Button + EDI Digital Link if present */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleShare(autor)}
                  className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-paper border border-ink/12 text-ink hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap"
                >
                  <Share2 size={13} />
                  {copiedId === autor.id ? 'Enlace copiado' : 'Copiar enlace'}
                </button>

                {autor.ediRecursos?.map((recurso) => (
                  <a
                    key={recurso.url}
                    href={recurso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={recurso.detalle}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bordo/8 border border-bordo/20 text-xs font-bold text-bordo hover:bg-bordo hover:text-white transition-colors"
                  >
                    <Library size={14} />
                    <span>{recurso.label}</span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>

              {/* Top Grid: Biography + Main Contributions */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <section className="lg:col-span-7 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo flex items-center gap-2">
                    <BookOpen size={15} />
                    Biografía y contexto histórico
                  </h3>
                  <div className="space-y-3 text-sm sm:text-base text-muted leading-relaxed">
                    {autor.biografia.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section className="lg:col-span-5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violeta flex items-center gap-2 mb-3">
                    <Lightbulb size={15} />
                    Principales aportes
                  </h3>
                  <ul className="space-y-2.5">
                    {autor.principalesAportes.map((aporte, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-ink leading-relaxed flex items-start gap-2.5 p-3.5 rounded-xl bg-paper border border-ink/6"
                      >
                        <span className="text-bordo font-bold" aria-hidden="true">
                          •
                        </span>
                        <span>{aporte}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Key Concepts Grid */}
              <section className="pt-6 border-t border-ink/8">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo mb-4">
                  Conceptos clave para estudiar
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {autor.conceptosClave.map((concepto) => (
                    <div
                      key={concepto.termino}
                      className="p-4 rounded-2xl bg-paper border border-ink/8"
                    >
                      <h4 className="text-sm font-serif font-bold text-ink mb-1">
                        {concepto.termino}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed">{concepto.explicacion}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Intellectual Lineage: Influenced By <-> Influenced */}
              <section className="pt-6 border-t border-ink/8">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
                  Red de influencias teóricas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Upstream: Influenciado por */}
                  <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-600/20">
                    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-amber-800 flex items-center gap-1.5 mb-3.5">
                      <ArrowLeft size={14} />
                      Influenciado por
                    </h4>
                    <ul className="space-y-2.5">
                      {autor.influenciadoPor.map((inf) => {
                        const linked = inf.autorId ? findAutorById(inf.autorId) : undefined;
                        return (
                          <li key={inf.nombre} className="text-xs leading-relaxed">
                            {linked ? (
                              <button
                                type="button"
                                onClick={() => onSelectAutor(linked)}
                                className="inline-flex items-center gap-1 font-bold text-amber-900 hover:text-bordo underline decoration-amber-600/40 underline-offset-2 transition-colors text-left"
                              >
                                <span>{inf.nombre}</span>
                                <ChevronRight size={13} className="shrink-0" />
                              </button>
                            ) : (
                              <span className="font-bold text-ink">{inf.nombre}</span>
                            )}
                            {inf.nota && (
                              <span className="text-muted"> — {inf.nota}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Downstream: Influenció a */}
                  <div className="p-5 rounded-2xl bg-violeta/[0.04] border border-violeta/15">
                    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-violeta flex items-center gap-1.5 mb-3.5">
                      <ArrowRight size={14} />
                      Influenció a
                    </h4>
                    <ul className="space-y-2.5">
                      {autor.influencioA.map((inf) => {
                        const linked = inf.autorId ? findAutorById(inf.autorId) : undefined;
                        return (
                          <li key={inf.nombre} className="text-xs leading-relaxed">
                            {linked ? (
                              <button
                                type="button"
                                onClick={() => onSelectAutor(linked)}
                                className="inline-flex items-center gap-1 font-bold text-violeta hover:text-bordo underline decoration-violeta/35 underline-offset-2 transition-colors text-left"
                              >
                                <span>{inf.nombre}</span>
                                <ChevronRight size={13} className="shrink-0" />
                              </button>
                            ) : (
                              <span className="font-bold text-ink">{inf.nombre}</span>
                            )}
                            {inf.nota && (
                              <span className="text-muted"> — {inf.nota}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Essential Works + Where Studied in Psicología UBA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-ink/8">
                <section className="lg:col-span-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-bordo flex items-center gap-2 mb-4">
                    <BookMarked size={15} />
                    Obras esenciales
                  </h3>
                  <ul className="space-y-3">
                    {autor.obrasEsenciales.map((obra) => (
                      <li
                        key={obra.titulo}
                        className="p-3.5 rounded-xl bg-paper border border-ink/6 text-xs leading-relaxed"
                      >
                        <p className="font-bold text-ink">
                          <span className="italic">{obra.titulo}</span>{' '}
                          <span className="font-semibold text-bordo tabular-nums">
                            ({obra.año})
                          </span>
                        </p>
                        <p className="text-muted mt-1">{obra.resumen}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="lg:col-span-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violeta flex items-center gap-2 mb-4">
                    <GraduationCap size={15} />
                    Dónde se estudia en Psicología UBA
                  </h3>
                  {relatedMaterias.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {relatedMaterias.map((mat) => (
                        <button
                          key={mat.id}
                          type="button"
                          onClick={() => onSelectMateria(mat)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-paper border border-ink/12 text-ink hover:border-bordo hover:text-bordo transition-colors text-left"
                        >
                          <span>{mat.nombre}</span>
                          <ChevronRight size={13} className="shrink-0 opacity-60" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted">
                      Autor de consulta transversal en diversas cátedras de la carrera.
                    </p>
                  )}
                </section>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="px-5 sm:px-8 md:px-10 py-3.5 bg-paper border-t border-ink/8 flex items-center justify-between gap-4 shrink-0">
              <p className="text-xs text-muted font-medium">
                Biblioteca de Autores · Psicología UBA
              </p>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-bold text-bordo hover:underline"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
