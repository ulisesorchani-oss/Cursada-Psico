import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ChevronRight,
  BookOpen,
  GitFork,
  Library,
  ExternalLink
} from 'lucide-react';
import {
  AUTORES,
  CORRIENTES_AUTORES,
  EDI_APUNTES_URL,
  AutorProfile,
  getMateriasForAutor
} from '../data/autores';
import { EDI_SHEET_URL } from '../data/ediBibliografias';
import { Materia } from '../constants';
import { cn } from '../lib/utils';

interface AutoresSectionProps {
  materias: Materia[];
  onSelectAutor: (autor: AutorProfile) => void;
}

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function AutoresSection({ materias, onSelectAutor }: AutoresSectionProps) {
  const [selectedCorriente, setSelectedCorriente] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const materiasCountByAutor = useMemo(() => {
    const map = new Map<string, number>();
    for (const autor of AUTORES) {
      map.set(autor.id, getMateriasForAutor(autor, materias).length);
    }
    return map;
  }, [materias]);

  const corrienteCounts = useMemo(() => {
    const counts: Record<string, number> = { Todas: AUTORES.length };
    for (const a of AUTORES) {
      counts[a.corriente] = (counts[a.corriente] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filteredAutores = useMemo(() => {
    const query = normalizeText(searchQuery.trim());

    return AUTORES.filter((a) => {
      if (query) {
        return (
          normalizeText(a.nombre).includes(query) ||
          a.matchKeys.some((k) => normalizeText(k).includes(query)) ||
          normalizeText(a.corriente).includes(query) ||
          normalizeText(a.origen).includes(query) ||
          normalizeText(a.resumenCorto).includes(query) ||
          normalizeText(a.biografia).includes(query) ||
          a.conceptosClave.some(
            (c) =>
              normalizeText(c.termino).includes(query) ||
              normalizeText(c.explicacion).includes(query)
          ) ||
          a.obrasEsenciales.some((o) => normalizeText(o.titulo).includes(query)) ||
          a.influenciadoPor.some((i) => normalizeText(i.nombre).includes(query)) ||
          a.influencioA.some((i) => normalizeText(i.nombre).includes(query))
        );
      }

      return selectedCorriente === 'Todas' || a.corriente === selectedCorriente;
    });
  }, [selectedCorriente, searchQuery]);

  return (
    <section
      id="autores"
      className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28 scroll-mt-20"
    >
      <div className="bg-white border border-ink/8 rounded-3xl p-5 sm:p-8 lg:p-10">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 sm:gap-10 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
                Biblioteca Conceptual
              </span>
              <div className="h-[1px] w-8 bg-bordo/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink text-balance">
              Autores Troncales
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl leading-relaxed">
              Biografía, aportes principales, conceptos clave para rendir, red de influencias y en
              qué materias de Psicología UBA se estudia cada autor.
            </p>
          </div>

          <div className="relative w-full md:w-80 lg:w-96 shrink-0">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-bordo/50 pointer-events-none"
              size={17}
            />
            <input
              type="search"
              aria-label="Buscar autor, concepto o corriente"
              placeholder="Buscar autor, concepto o obra..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-paper border border-ink/10 rounded-2xl text-sm font-medium focus:outline-none focus:border-bordo focus:ring-2 focus:ring-bordo/15 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar búsqueda de autores"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-bordo hover:bg-bordo/5 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Corriente Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {searchQuery.trim() ? (
            <div className="w-full px-4 py-3 bg-bordo/5 border border-bordo/15 rounded-2xl flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold text-bordo tabular-nums">
                {filteredAutores.length}{' '}
                {filteredAutores.length === 1 ? 'autor encontrado' : 'autores encontrados'} para
                &ldquo;{searchQuery.trim()}&rdquo;
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-bordo hover:underline whitespace-nowrap"
              >
                Limpiar búsqueda
              </button>
            </div>
          ) : (
            ['Todas', ...CORRIENTES_AUTORES].map((corriente) => (
              <button
                key={corriente}
                type="button"
                onClick={() => setSelectedCorriente(corriente)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-bold transition-all border whitespace-nowrap tabular-nums',
                  selectedCorriente === corriente
                    ? 'bg-ink border-ink text-white shadow-sm'
                    : 'bg-paper border-ink/10 text-muted hover:border-bordo hover:text-bordo'
                )}
              >
                {corriente}{' '}
                <span
                  className={cn(
                    'ml-1 font-normal',
                    selectedCorriente === corriente ? 'text-white/70' : 'text-muted/70'
                  )}
                >
                  ({corrienteCounts[corriente] ?? 0})
                </span>
              </button>
            ))
          )}
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAutores.map((autor) => {
              const relatedCount = materiasCountByAutor.get(autor.id) ?? 0;

              return (
                <motion.article
                  layout
                  key={autor.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => onSelectAutor(autor)}
                  className="group cursor-pointer bg-paper/70 border border-ink/8 p-6 rounded-2xl hover:border-bordo hover:bg-white transition-all hover:shadow-lg hover:shadow-bordo/5 flex flex-col h-full"
                >
                  <p className="text-[11px] font-bold tracking-wide text-bordo mb-2">
                    {autor.corriente} <span aria-hidden="true">·</span>{' '}
                    <span className="text-muted font-semibold tabular-nums">{autor.fechas}</span>
                  </p>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink leading-snug mb-2 group-hover:text-bordo transition-colors">
                    {autor.nombre}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-5">
                    {autor.resumenCorto}
                  </p>

                  <div className="mt-auto pt-4 border-t border-ink/8 flex items-center justify-between gap-2 text-[11px] font-semibold text-muted tabular-nums">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="inline-flex items-center gap-1 text-ink">
                        <BookOpen size={13} className="text-bordo shrink-0" />
                        {relatedCount} {relatedCount === 1 ? 'materia' : 'materias'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 truncate">
                        <GitFork size={12} className="text-violeta shrink-0" />
                        {autor.conceptosClave.length} conceptos
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-bordo opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredAutores.length === 0 && (
          <div className="text-center py-12 px-4 bg-paper rounded-2xl border border-ink/8">
            <p className="text-sm text-muted mb-3">
              No se encontraron autores que coincidan con tu búsqueda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCorriente('Todas');
              }}
              className="px-4 py-2 rounded-full bg-bordo text-white text-xs font-bold hover:bg-bordo-light transition-colors"
            >
              Ver todos los autores
            </button>
          </div>
        )}

        {/* EDI Digital Bibliography Authorized Banner */}
        <div className="mt-8 pt-8 border-t border-ink/8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-bordo/8 text-bordo flex items-center justify-center shrink-0">
              <Library size={18} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-ink">
                Apuntes Digitales Gratuitos · Centro de Estudiantes (EDI – CEP)
              </h3>
              <p className="text-xs text-muted mt-0.5 leading-relaxed max-w-2xl">
                Accedé a la biblioteca digital gratuita autorizada por el Centro de Estudiantes con
                los Tomos de Freud (1–23), Seminarios y Escritos de Lacan, Diccionario de
                Psicoanálisis (Laplanche y Pontalis), DSM-5 y manuales clínicos de Barlow.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-auto">
            <a
              href={EDI_SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bordo text-white text-xs font-bold hover:bg-bordo-light transition-colors whitespace-nowrap"
            >
              Planilla Digital EDI (Drive)
              <ExternalLink size={13} />
            </a>
            <a
              href={EDI_APUNTES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-paper border border-ink/12 text-ink text-xs font-bold hover:border-bordo hover:text-bordo transition-colors whitespace-nowrap"
            >
              Portal EDI
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
