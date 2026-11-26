import React, { useState, useEffect, useMemo } from 'react';
import {
  Users,
  ExternalLink,
  Library,
  ChevronDown,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { Materia, Catedra, BibliografiaItem } from '../constants';
import { AutorProfile, findAutorByBibName } from '../data/autores';
import { EDI_SHEET_URL, getEdiLinkForCatedra } from '../data/ediBibliografias';
import { cn } from '../lib/utils';

interface MateriaCatedrasPanelProps {
  materia: Materia;
  autores: AutorProfile[];
  onSelectAutor: (autor: AutorProfile) => void;
}

interface BibGroup {
  unidad: string;
  items: BibliografiaItem[];
}

function getShortCatedraTabLabel(catedra: Catedra, index: number): {
  title: string;
  subtitle: string;
} {
  // Strip trailing "(Cód. XXX)" for compact tab title while keeping Cátedra I / II / Única
  const cleanName = catedra.nombre.replace(/\s*\(C[oó]d\.?\s*[^)]+\)/i, '').trim();
  const title = cleanName || `Cátedra ${index + 1}`;

  // Extract concise surname from titular (e.g., "Federico Faustino González" -> "González")
  const rawTitular = catedra.titular.trim();
  if (!rawTitular || rawTitular.toLowerCase() === 'varios') {
    return { title, subtitle: rawTitular };
  }
  // If multiple names separated by "/" or "y", keep short first surname
  const firstPerson = rawTitular.split(/\s*[\/–-]\s*/)[0].trim();
  const tokens = firstPerson.split(/\s+/).filter(Boolean);
  let surname = tokens[tokens.length - 1] ?? firstPerson;
  // Handle compound Spanish surnames starting with De / Del / La / San / Van / Von
  if (tokens.length >= 2) {
    const prev = tokens[tokens.length - 2].toLowerCase();
    if (['de', 'del', 'la', 'las', 'los', 'san', 'van', 'von', 'di'].includes(prev)) {
      surname = `${tokens[tokens.length - 2]} ${surname}`;
    }
  }
  return { title, subtitle: surname };
}

function groupByUnidad(items: BibliografiaItem[]): BibGroup[] {
  const groups: BibGroup[] = [];
  const indexByKey = new Map<string, number>();

  for (const item of items) {
    const key = item.unidad?.trim() || 'General';
    const existingIdx = indexByKey.get(key);
    if (existingIdx !== undefined) {
      groups[existingIdx].items.push(item);
    } else {
      indexByKey.set(key, groups.length);
      groups.push({ unidad: key, items: [item] });
    }
  }

  return groups;
}

export const MateriaCatedrasPanel: React.FC<MateriaCatedrasPanelProps> = ({
  materia,
  autores,
  onSelectAutor
}) => {
  const [activeCatedraIdx, setActiveCatedraIdx] = useState(0);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>({});
  const [showAllAutores, setShowAllAutores] = useState(false);

  // Reset UI state whenever a different materia is opened
  useEffect(() => {
    setActiveCatedraIdx(0);
    setOpenSections({});
    setOpenUnits({});
    setShowAllAutores(false);
  }, [materia.id]);

  const safeIdx =
    activeCatedraIdx < materia.catedras.length ? activeCatedraIdx : 0;
  const activeCatedra = materia.catedras[safeIdx];

  const { obligatoria, complementaria, obligatoriaGroups, hasUnitGroups } = useMemo(() => {
    if (!activeCatedra) {
      return {
        obligatoria: [] as BibliografiaItem[],
        complementaria: [] as BibliografiaItem[],
        obligatoriaGroups: [] as BibGroup[],
        hasUnitGroups: false
      };
    }
    const obl = activeCatedra.bibliografia.filter((b) => b.tipo === 'Obligatoria');
    const comp = activeCatedra.bibliografia.filter((b) => b.tipo === 'Complementaria');
    const hasUnits = obl.some((b) => Boolean(b.unidad?.trim()));
    const groups = hasUnits ? groupByUnidad(obl) : [];
    return {
      obligatoria: obl,
      complementaria: comp,
      obligatoriaGroups: groups,
      hasUnitGroups: hasUnits
    };
  }, [activeCatedra]);

  if (!activeCatedra) return null;

  const oblSectionKey = `${materia.id}-${safeIdx}-obl`;
  const compSectionKey = `${materia.id}-${safeIdx}-comp`;

  // Long or unit-structured syllabi start collapsed to avoid scroll walls; short lists stay open by default
  const defaultOblOpen = !hasUnitGroups && obligatoria.length <= 6;
  const isOblOpen =
    openSections[oblSectionKey] !== undefined
      ? openSections[oblSectionKey]
      : defaultOblOpen;

  const defaultCompOpen = complementaria.length <= 4;
  const isCompOpen =
    openSections[compSectionKey] !== undefined
      ? openSections[compSectionKey]
      : defaultCompOpen;

  const toggleSection = (key: string, current: boolean) => {
    setOpenSections((prev) => ({ ...prev, [key]: !current }));
  };

  const getUnitKey = (unitIdx: number) => `${materia.id}-${safeIdx}-u-${unitIdx}`;

  const areAllUnitsOpen =
    hasUnitGroups &&
    obligatoriaGroups.length > 0 &&
    obligatoriaGroups.every((_, idx) => Boolean(openUnits[getUnitKey(idx)]));

  const toggleAllUnits = () => {
    const nextVal = !areAllUnitsOpen;
    setOpenUnits((prev) => {
      const updated = { ...prev };
      obligatoriaGroups.forEach((_, idx) => {
        updated[getUnitKey(idx)] = nextVal;
      });
      return updated;
    });
  };

  const ediLink = getEdiLinkForCatedra(materia, activeCatedra);
  const isDirectPdf = Boolean(activeCatedra.link?.includes('Ver521'));
  const titularAutor = findAutorByBibName(activeCatedra.titular);

  const renderBibItem = (
    bib: BibliografiaItem,
    key: string | number,
    variant: 'obligatoria' | 'complementaria'
  ) => {
    const matchedAutor = findAutorByBibName(bib.autor);
    const isObl = variant === 'obligatoria';

    return (
      <li
        key={key}
        className={cn(
          'text-xs leading-relaxed',
          isObl ? 'text-ink' : 'text-muted'
        )}
      >
        {matchedAutor ? (
          <button
            type="button"
            onClick={() => onSelectAutor(matchedAutor)}
            title={`Ver ficha completa de ${matchedAutor.nombre}`}
            className={cn(
              'underline underline-offset-2 transition-colors cursor-pointer text-left',
              isObl
                ? 'font-bold text-bordo decoration-bordo/35 hover:text-violeta hover:decoration-violeta'
                : 'font-semibold text-violeta decoration-violeta/35 hover:text-bordo hover:decoration-bordo'
            )}
          >
            {bib.autor}
          </button>
        ) : (
          <span className={isObl ? 'font-bold text-bordo' : 'font-semibold text-violeta'}>
            {bib.autor}
          </span>
        )}
        {bib.año ? ` (${bib.año})` : ''}.{' '}
        <span className="italic">{bib.titulo}</span>
        {bib.editorial ? `. ${bib.editorial}` : ''}.
      </li>
    );
  };

  return (
    <div className="lg:col-span-5">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violeta flex items-center gap-2">
          <Users size={15} />
          {materia.catedras.length === 1 ? 'Cátedra' : 'Cátedras'}
        </h3>
        {materia.catedras.length > 1 && (
          <span className="text-[11px] font-medium text-muted tabular-nums">
            {materia.catedras.length} opciones disponibles
          </span>
        )}
      </div>

      <div className="space-y-5">
        {/* Segmented Cátedra Tabs (when 2+ cátedras) */}
        {materia.catedras.length > 1 && (
          <div
            role="tablist"
            aria-label="Seleccionar cátedra"
            className={cn(
              'grid gap-1.5 p-1 rounded-2xl bg-paper border border-ink/8',
              materia.catedras.length === 2
                ? 'grid-cols-2'
                : 'grid-cols-2 sm:grid-cols-3'
            )}
          >
            {materia.catedras.map((cat, idx) => {
              const isSelected = idx === safeIdx;
              const { title, subtitle } = getShortCatedraTabLabel(cat, idx);
              return (
                <button
                  key={`${cat.nombre}-${idx}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCatedraIdx(idx)}
                  title={`${cat.nombre} — ${cat.titular}`}
                  className={cn(
                    'px-3 py-2 rounded-xl text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordo/40',
                    isSelected
                      ? 'bg-white text-ink shadow-sm ring-1 ring-ink/8'
                      : 'text-muted hover:text-ink hover:bg-white/50'
                  )}
                >
                  <span
                    className={cn(
                      'block text-xs font-bold truncate',
                      isSelected ? 'text-bordo' : 'text-ink/80'
                    )}
                  >
                    {title}
                  </span>
                  {subtitle && (
                    <span className="block text-[11px] text-muted truncate mt-0.5">
                      {subtitle}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Active Cátedra Card */}
        <div
          role={materia.catedras.length > 1 ? 'tabpanel' : undefined}
          className="p-5 rounded-2xl bg-paper border border-ink/8 space-y-4"
        >
          {/* Header: Name, Titular, Official Links */}
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-base sm:text-lg text-ink leading-snug">
                {activeCatedra.nombre}
              </h4>
              <p className="text-xs text-muted mt-0.5">
                {materia.ciclo === 'Prácticas' ? 'Coordinador/a' : 'Titular'}:{' '}
                {titularAutor ? (
                  <button
                    type="button"
                    onClick={() => onSelectAutor(titularAutor)}
                    title={`Ver ficha completa de ${titularAutor.nombre}`}
                    className="text-bordo font-semibold underline decoration-bordo/35 underline-offset-2 hover:text-violeta hover:decoration-violeta transition-colors cursor-pointer"
                  >
                    {activeCatedra.titular}
                  </button>
                ) : (
                  <span className="text-ink font-semibold">{activeCatedra.titular}</span>
                )}
              </p>
            </div>

            {(activeCatedra.link || ediLink) && (
              <div className="flex flex-wrap items-center gap-2">
                {activeCatedra.link && (
                  <a
                    href={activeCatedra.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-bordo hover:text-white hover:bg-bordo transition-colors bg-bordo/8 px-3.5 py-1.5 rounded-full whitespace-nowrap"
                  >
                    {isDirectPdf ? 'Programa (PDF)' : 'Ver en Portal UBA'}
                    <ExternalLink size={12} />
                  </a>
                )}
                {ediLink && (
                  <a
                    href={ediLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Bibliografía digital gratuita autorizada por el Centro de Estudiantes (EDI – CEP)"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violeta hover:text-white hover:bg-violeta transition-colors bg-violeta/8 px-3.5 py-1.5 rounded-full whitespace-nowrap"
                  >
                    <Library size={12} />
                    {ediLink.label}
                    <ExternalLink size={11} />
                  </a>
                )}
                {isDirectPdf && (
                  <a
                    href="https://www.psi.uba.ar/estudiantes.php?var=psicologia/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Abrir índice de materias de la facultad"
                    className="text-[11px] font-semibold text-muted hover:text-bordo transition-colors whitespace-nowrap"
                  >
                    Portal UBA
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Enfoque & Evaluación Summary (when syllabus metadata is loaded) */}
          {(activeCatedra.enfoque || activeCatedra.evaluacion) && (
            <div className="pt-3.5 border-t border-ink/8 space-y-3">
              {activeCatedra.enfoque && (
                <div>
                  <p className="text-[11px] font-bold text-ink mb-1">Enfoque del programa</p>
                  <p className="text-xs text-muted leading-relaxed">
                    {activeCatedra.enfoque}
                  </p>
                </div>
              )}
              {activeCatedra.evaluacion && (
                <div>
                  <p className="text-[11px] font-bold text-ink mb-1">Cursada y evaluación</p>
                  <p className="text-xs text-muted leading-relaxed">
                    {activeCatedra.evaluacion}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Collapsible Bibliografía Obligatoria */}
          {obligatoria.length > 0 && (
            <div className="pt-3 border-t border-ink/8">
              <button
                type="button"
                onClick={() => toggleSection(oblSectionKey, isOblOpen)}
                aria-expanded={isOblOpen}
                aria-controls={`bib-obl-${safeIdx}`}
                className="w-full flex items-center justify-between gap-3 py-1 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordo/40 rounded-lg"
              >
                <div className="min-w-0">
                  <span className="block text-[11px] uppercase font-bold text-bordo tracking-wide">
                    Bibliografía Obligatoria
                  </span>
                  <span className="block text-[11px] text-muted tabular-nums mt-0.5">
                    {obligatoria.length}{' '}
                    {obligatoria.length === 1 ? 'texto' : 'textos'}
                    {hasUnitGroups
                      ? ` · ${obligatoriaGroups.length} ${
                          obligatoriaGroups.length === 1 ? 'unidad' : 'unidades'
                        }`
                      : ''}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-bordo shrink-0">
                  <span>{isOblOpen ? 'Ocultar' : 'Ver'}</span>
                  <ChevronDown
                    size={15}
                    className={cn(
                      'transition-transform duration-200',
                      isOblOpen && 'rotate-180'
                    )}
                  />
                </span>
              </button>

              {isOblOpen && (
                <div id={`bib-obl-${safeIdx}`} className="mt-3">
                  {hasUnitGroups ? (
                    <div className="space-y-2">
                      {obligatoriaGroups.length > 1 && (
                        <div className="flex items-center justify-between gap-2 pb-1">
                          <span className="text-[11px] text-muted">
                            Tocá una unidad para ver sus textos
                          </span>
                          <button
                            type="button"
                            onClick={toggleAllUnits}
                            className="text-[11px] font-bold text-bordo hover:text-violeta transition-colors whitespace-nowrap cursor-pointer"
                          >
                            {areAllUnitsOpen ? 'Contraer todas' : 'Desplegar todas'}
                          </button>
                        </div>
                      )}

                      <div className="divide-y divide-ink/8 border-y border-ink/8">
                        {obligatoriaGroups.map((group, uIdx) => {
                          const uKey = getUnitKey(uIdx);
                          const isUnitOpen = Boolean(openUnits[uKey]);
                          return (
                            <div key={group.unidad} className="py-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenUnits((prev) => ({
                                    ...prev,
                                    [uKey]: !isUnitOpen
                                  }))
                                }
                                aria-expanded={isUnitOpen}
                                aria-controls={`unit-list-${safeIdx}-${uIdx}`}
                                className="w-full flex items-start justify-between gap-2.5 py-1 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordo/40 rounded"
                              >
                                <span className="text-xs font-semibold text-ink group-hover:text-bordo transition-colors leading-snug">
                                  {group.unidad}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] text-muted tabular-nums shrink-0 mt-0.5">
                                  <span>{group.items.length}</span>
                                  <ChevronDown
                                    size={13}
                                    className={cn(
                                      'text-bordo/75 transition-transform duration-200',
                                      isUnitOpen && 'rotate-180'
                                    )}
                                  />
                                </span>
                              </button>

                              {isUnitOpen && (
                                <ul
                                  id={`unit-list-${safeIdx}-${uIdx}`}
                                  className="mt-2 mb-1 pl-2 space-y-2"
                                >
                                  {group.items.map((bib, bIdx) =>
                                    renderBibItem(bib, `${uIdx}-${bIdx}`, 'obligatoria')
                                  )}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {obligatoria.map((bib, bIdx) =>
                        renderBibItem(bib, bIdx, 'obligatoria')
                      )}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Collapsible Bibliografía Complementaria */}
          {complementaria.length > 0 && (
            <div className="pt-3 border-t border-ink/8">
              <button
                type="button"
                onClick={() => toggleSection(compSectionKey, isCompOpen)}
                aria-expanded={isCompOpen}
                aria-controls={`bib-comp-${safeIdx}`}
                className="w-full flex items-center justify-between gap-3 py-1 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violeta/40 rounded-lg"
              >
                <div className="min-w-0">
                  <span className="block text-[11px] uppercase font-bold text-violeta tracking-wide">
                    Bibliografía Complementaria
                  </span>
                  <span className="block text-[11px] text-muted tabular-nums mt-0.5">
                    {complementaria.length}{' '}
                    {complementaria.length === 1 ? 'texto' : 'textos'}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-violeta shrink-0">
                  <span>{isCompOpen ? 'Ocultar' : 'Ver'}</span>
                  <ChevronDown
                    size={15}
                    className={cn(
                      'transition-transform duration-200',
                      isCompOpen && 'rotate-180'
                    )}
                  />
                </span>
              </button>

              {isCompOpen && (
                <ul id={`bib-comp-${safeIdx}`} className="mt-3 space-y-2">
                  {complementaria.map((bib, bIdx) =>
                    renderBibItem(bib, bIdx, 'complementaria')
                  )}
                </ul>
              )}
            </div>
          )}

          {obligatoria.length === 0 && complementaria.length === 0 && (
            <p className="text-xs text-muted pt-3 border-t border-ink/6">
              Consultá el programa vigente de la cátedra en el portal oficial de la
              facultad.
            </p>
          )}
        </div>

        {/* Autores clave en la biblioteca */}
        {autores.length > 0 && (
          <section className="p-5 rounded-2xl bg-paper border border-ink/8 space-y-3.5">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-bordo flex items-center gap-2">
                <BookOpen size={14} className="shrink-0" />
                Autores clave en la biblioteca
              </h4>
              <span className="text-[11px] font-bold text-muted tabular-nums">
                {autores.length}
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Autores estudiados en esta materia que ya cuentan con ficha conceptual
              completa. Tocá cualquiera para explorar su obra e influencias.
            </p>
            <div className="flex flex-wrap gap-2">
              {(showAllAutores ? autores : autores.slice(0, 14)).map((autor) => (
                <button
                  key={autor.id}
                  type="button"
                  onClick={() => onSelectAutor(autor)}
                  title={`Abrir ficha completa de ${autor.nombre}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-ink/10 text-xs font-semibold text-ink hover:border-bordo hover:text-bordo hover:bg-bordo/[0.03] transition-colors cursor-pointer"
                >
                  <span>{autor.nombre}</span>
                  <ChevronRight size={12} className="opacity-55 shrink-0" />
                </button>
              ))}
            </div>
            {autores.length > 14 && (
              <button
                type="button"
                onClick={() => setShowAllAutores((prev) => !prev)}
                className="text-xs font-bold text-bordo hover:text-violeta transition-colors cursor-pointer"
              >
                {showAllAutores
                  ? 'Mostrar menos autores'
                  : `Ver los ${autores.length} autores`}
              </button>
            )}
          </section>
        )}

        {/* Fallback EDI sheet link */}
        {materia.catedras.every((cat) => !getEdiLinkForCatedra(materia, cat)) && (
          <a
            href={EDI_SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-violeta/[0.04] border border-violeta/15 text-xs font-semibold text-violeta hover:border-violeta transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <Library size={14} className="shrink-0" />
              Consultar planilla de Bibliografía Digital (EDI – CEP)
            </span>
            <ExternalLink size={13} className="shrink-0" />
          </a>
        )}
      </div>
    </div>
  );
};
