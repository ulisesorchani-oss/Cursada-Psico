import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  X,
  RotateCcw,
  Check,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Image as ImageIcon,
  GitBranch
} from 'lucide-react';
import { Materia } from '../constants';
import { cn } from '../lib/utils';

const FLOWCHART_SRC = '/assets/aistudio/plan_estudios_psicologia_2026_new_b3884e5a.png';
const REQ_STORAGE_KEY = 'psi_uba_requisitos_v1';

const CANVAS_W = 1220;
const CANVAS_H = 820;

type NodeKind = 'materia' | 'requirement' | 'slot';

interface FlowNode {
  id: string;
  label: string;
  col: 'cbc' | 'cfg1' | 'cfg2' | 'cfg3' | 'cfp';
  kind: NodeKind;
  x: number;
  y: number;
  w: number;
  h: number;
  prereqs: string[];
  requiresCbc?: boolean;
  simultaneousNote?: string;
  targetCycle?: string;
  requiredCount?: number;
}

const CBC_IDS = [
  'cbc-ipc',
  'cbc-icse',
  'cbc-biologia',
  'cbc-psico',
  'cbc-semiologia',
  'cbc-matematica'
] as const;

const FLOW_NODES: FlowNode[] = [
  // Col 1: CBC
  { id: 'cbc-ipc', label: 'Pensamiento Científico', col: 'cbc', kind: 'materia', x: 18, y: 92, w: 174, h: 62, prereqs: [] },
  { id: 'cbc-icse', label: 'Sociedad y Estado', col: 'cbc', kind: 'materia', x: 18, y: 176, w: 174, h: 62, prereqs: [] },
  { id: 'cbc-biologia', label: 'Biología', col: 'cbc', kind: 'materia', x: 18, y: 260, w: 174, h: 62, prereqs: [] },
  { id: 'cbc-psico', label: 'Psicología', col: 'cbc', kind: 'materia', x: 18, y: 344, w: 174, h: 62, prereqs: [] },
  { id: 'cbc-semiologia', label: 'Semiología', col: 'cbc', kind: 'materia', x: 18, y: 428, w: 174, h: 62, prereqs: [] },
  { id: 'cbc-matematica', label: 'Matemática', col: 'cbc', kind: 'materia', x: 18, y: 512, w: 174, h: 62, prereqs: [] },

  // Col 2: CFG Iniciales + Idioma
  { id: 'procesos-psico-basicos', label: 'Procesos Psicológicos Básicos', col: 'cfg1', kind: 'materia', x: 234, y: 74, w: 196, h: 66, prereqs: [], requiresCbc: true },
  { id: 'estadistica', label: 'Estadística', col: 'cfg1', kind: 'materia', x: 234, y: 158, w: 196, h: 66, prereqs: [], requiresCbc: true },
  { id: 'psico-social', label: 'Psicología Social', col: 'cfg1', kind: 'materia', x: 234, y: 242, w: 196, h: 66, prereqs: [], requiresCbc: true },
  { id: 'psicoanalisis-freud', label: 'Psicoanálisis: Freud', col: 'cfg1', kind: 'materia', x: 234, y: 326, w: 196, h: 66, prereqs: [], requiresCbc: true },
  { id: 'psico-aprendizaje', label: 'Psicología del Aprendizaje', col: 'cfg1', kind: 'materia', x: 234, y: 410, w: 196, h: 66, prereqs: [], requiresCbc: true },
  { id: 'neuro-fisiologia', label: 'Neurofisiología', col: 'cfg1', kind: 'materia', x: 234, y: 494, w: 196, h: 66, prereqs: [], requiresCbc: true },
  { id: 'req-idioma-1', label: 'Requisito Idioma I', col: 'cfg1', kind: 'requirement', x: 234, y: 612, w: 196, h: 58, prereqs: ['procesos-psico-basicos', 'psicoanalisis-freud'] },
  { id: 'req-idioma-2', label: 'Requisito Idioma II', col: 'cfg1', kind: 'requirement', x: 234, y: 690, w: 196, h: 58, prereqs: ['req-idioma-1'] },

  // Col 3: CFG Intermedias
  { id: 'historia-psico', label: 'Historia de la Psicología', col: 'cfg2', kind: 'materia', x: 480, y: 74, w: 204, h: 66, prereqs: ['procesos-psico-basicos'] },
  { id: 'metodologia-inv', label: 'Metodología de la Investigación', col: 'cfg2', kind: 'materia', x: 480, y: 166, w: 204, h: 66, prereqs: ['procesos-psico-basicos', 'estadistica'] },
  { id: 'salud-publica-mental', label: 'Salud Pública y Salud Mental', col: 'cfg2', kind: 'materia', x: 480, y: 264, w: 204, h: 66, prereqs: ['metodologia-inv', 'psico-social'] },
  { id: 'teoria-tecnica-grupos', label: 'Teoría y Técnica de Grupos', col: 'cfg2', kind: 'materia', x: 480, y: 356, w: 204, h: 66, prereqs: ['psico-social', 'psicoanalisis-freud'] },
  { id: 'psico-desarrollo-niñez', label: 'Psicología del Desarrollo: Niñez', col: 'cfg2', kind: 'materia', x: 480, y: 448, w: 204, h: 66, prereqs: ['psicoanalisis-freud', 'psico-aprendizaje'] },
  { id: 'psico-desarrollo-adolescencia', label: 'Psicología del Desarrollo: Adolescencia', col: 'cfg2', kind: 'materia', x: 480, y: 540, w: 204, h: 66, prereqs: ['psicoanalisis-freud', 'psico-aprendizaje'] },
  { id: 'psicopatologia', label: 'Psicopatología', col: 'cfg2', kind: 'materia', x: 480, y: 648, w: 204, h: 66, prereqs: ['psico-desarrollo-adolescencia', 'neuro-fisiologia'] },

  // Col 4: CFG Exploración y Diagnóstico + Electivas CFG
  {
    id: 'exploracion-diagnostico-1',
    label: 'Exploración y Diagnóstico Psicológico I',
    col: 'cfg3',
    kind: 'materia',
    x: 734,
    y: 472,
    w: 204,
    h: 72,
    prereqs: ['metodologia-inv', 'psicopatologia'],
    simultaneousNote: 'Se puede cursar simultáneamente con Psicopatología.'
  },
  {
    id: 'exploracion-diagnostico-2',
    label: 'Exploración y Diagnóstico Psicológico II',
    col: 'cfg3',
    kind: 'materia',
    x: 734,
    y: 564,
    w: 204,
    h: 72,
    prereqs: ['metodologia-inv', 'psicopatologia'],
    simultaneousNote: 'Se puede cursar simultáneamente con Psicopatología.'
  },
  {
    id: 'slot-electivas-cfg',
    label: '2 Materias Electivas (CFG)',
    col: 'cfg3',
    kind: 'slot',
    x: 734,
    y: 676,
    w: 204,
    h: 66,
    prereqs: [],
    targetCycle: 'Electivas General',
    requiredCount: 2
  },

  // Col 5: CFP
  { id: 'etica-deontologia-ddhh', label: 'Ética, Deontología y DDHH', col: 'cfp', kind: 'materia', x: 992, y: 66, w: 210, h: 60, prereqs: ['historia-psico', 'psico-social'] },
  { id: 'psico-organizacional-institucional', label: 'Psic. Organizacional e Institucional', col: 'cfp', kind: 'materia', x: 992, y: 138, w: 210, h: 60, prereqs: ['salud-publica-mental', 'teoria-tecnica-grupos'] },
  { id: 'psico-educativa-prof', label: 'Psicología Educacional', col: 'cfp', kind: 'materia', x: 992, y: 210, w: 210, h: 60, prereqs: ['salud-publica-mental', 'teoria-tecnica-grupos', 'psico-desarrollo-adolescencia'] },
  { id: 'psico-trabajo-prof', label: 'Psicología del Trabajo', col: 'cfp', kind: 'materia', x: 992, y: 282, w: 210, h: 60, prereqs: ['salud-publica-mental', 'teoria-tecnica-grupos', 'exploracion-diagnostico-1', 'exploracion-diagnostico-2'] },
  {
    id: 'psico-clinica-psicoterapias-1',
    label: 'Psic. Clínica y Psicoterapias I',
    col: 'cfp',
    kind: 'materia',
    x: 992,
    y: 354,
    w: 210,
    h: 60,
    prereqs: ['psicopatologia', 'exploracion-diagnostico-1', 'exploracion-diagnostico-2'],
    simultaneousNote: 'No es correlativa con Clínica y Psicoterapias II.'
  },
  { id: 'psico-juridica', label: 'Psicología Jurídica', col: 'cfp', kind: 'materia', x: 992, y: 426, w: 210, h: 60, prereqs: ['psicopatologia', 'exploracion-diagnostico-1', 'exploracion-diagnostico-2'] },
  {
    id: 'psico-clinica-psicoterapias-2',
    label: 'Psic. Clínica y Psicoterapias II',
    col: 'cfp',
    kind: 'materia',
    x: 992,
    y: 498,
    w: 210,
    h: 60,
    prereqs: ['psicopatologia', 'exploracion-diagnostico-1', 'exploracion-diagnostico-2'],
    simultaneousNote: 'No es correlativa con Clínica y Psicoterapias I.'
  },
  {
    id: 'slot-practica',
    label: '1 Práctica Prof. y de Inv. *',
    col: 'cfp',
    kind: 'slot',
    x: 992,
    y: 574,
    w: 210,
    h: 60,
    prereqs: ['salud-publica-mental'],
    targetCycle: 'Prácticas',
    requiredCount: 1,
    simultaneousNote: 'Cada práctica puede solicitar correlativas adicionales específicas.'
  },
  {
    id: 'slot-electivas-cfp',
    label: '3 Materias Electivas (CFP)',
    col: 'cfp',
    kind: 'slot',
    x: 992,
    y: 646,
    w: 210,
    h: 60,
    prereqs: [],
    targetCycle: 'Electivas Profesional',
    requiredCount: 3,
    simultaneousNote: 'Podés reemplazar 1 electiva del CFP por una segunda Práctica.'
  },
  {
    id: 'req-tesis',
    label: 'Requisito Tesis de Licenciatura',
    col: 'cfp',
    kind: 'requirement',
    x: 992,
    y: 722,
    w: 210,
    h: 58,
    prereqs: [],
    simultaneousNote: 'Obligatoria para ingresantes desde 2011 (Res. CS 6768/13).'
  }
];

interface EdgeDef {
  id: string;
  from: string;
  to: string;
}

const EDGES: EdgeDef[] = FLOW_NODES.flatMap((node) =>
  node.prereqs.map((from) => ({
    id: `${from}__${node.id}`,
    from,
    to: node.id
  }))
);

function loadRequirements(): string[] {
  try {
    const raw = window.localStorage.getItem(REQ_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

function buildEdgePath(fromNode: FlowNode, toNode: FlowNode): string {
  // Same-column vertical connector (e.g., Metodología -> Salud Pública, Adolescencia -> Psicopatología, Idioma I -> II)
  if (Math.abs(fromNode.x - toNode.x) < 10) {
    const x = fromNode.x + fromNode.w / 2;
    const y1 = fromNode.y + fromNode.h;
    const y2 = toNode.y;
    return `M ${x} ${y1} L ${x} ${y2}`;
  }

  // Standard left-to-right smooth cubic Bezier curve
  const x1 = fromNode.x + fromNode.w;
  const y1 = fromNode.y + fromNode.h / 2;
  const x2 = toNode.x;
  const y2 = toNode.y + toNode.h / 2;
  const dx = Math.max(40, (x2 - x1) * 0.48);

  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

interface CurriculumFlowchartProps {
  materias: Materia[];
  approvedSet: Set<string>;
  onToggleApproved: (id: string) => void;
  onToggleManyApproved: (ids: string[], approve: boolean) => void;
  onOpenMateria: (materia: Materia) => void;
  onJumpToCycle: (cycle: string) => void;
  onOpenTesis: () => void;
}

export function CurriculumFlowchart({
  materias,
  approvedSet,
  onToggleApproved,
  onToggleManyApproved,
  onOpenMateria,
  onJumpToCycle,
  onOpenTesis
}: CurriculumFlowchartProps) {
  const [viewMode, setViewMode] = useState<'interactive' | 'poster'>('interactive');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [completedReqs, setCompletedReqs] = useState<string[]>(loadRequirements);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    try {
      window.localStorage.setItem(REQ_STORAGE_KEY, JSON.stringify(completedReqs));
    } catch {
      // Ignore storage errors
    }
  }, [completedReqs]);

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

  const completedReqSet = useMemo(() => new Set(completedReqs), [completedReqs]);

  const toggleRequirement = (id: string) => {
    setCompletedReqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const nodeMap = useMemo(() => {
    const map = new Map<string, FlowNode>();
    for (const n of FLOW_NODES) map.set(n.id, n);
    return map;
  }, []);

  const materiaMap = useMemo(() => {
    const map = new Map<string, Materia>();
    for (const m of materias) map.set(m.id, m);
    return map;
  }, [materias]);

  // Adjacency lists for upstream & downstream traversal
  const { prereqMap, unlocksMap } = useMemo(() => {
    const pre = new Map<string, string[]>();
    const unl = new Map<string, string[]>();
    for (const n of FLOW_NODES) {
      pre.set(n.id, [...n.prereqs]);
      unl.set(n.id, []);
    }
    for (const e of EDGES) {
      unl.get(e.from)?.push(e.to);
    }
    return { prereqMap: pre, unlocksMap: unl };
  }, []);

  // CBC completion & dynamic slot counts
  const cbcApprovedCount = useMemo(
    () => CBC_IDS.filter((id) => approvedSet.has(id)).length,
    [approvedSet]
  );
  const allCbcApproved = cbcApprovedCount === CBC_IDS.length;

  const slotCounts = useMemo(() => {
    const countCycle = (cycle: string) =>
      materias.filter((m) => m.ciclo === cycle && approvedSet.has(m.id)).length;

    const electCfg = countCycle('Electivas General');
    const practicas = countCycle('Prácticas');
    const electCfpRaw = countCycle('Electivas Profesional');
    const electCfpEffective = electCfpRaw + (practicas > 1 ? 1 : 0);

    return {
      'slot-electivas-cfg': Math.min(2, electCfg),
      'slot-practica': Math.min(1, practicas),
      'slot-electivas-cfp': Math.min(3, electCfpEffective)
    } as Record<string, number>;
  }, [materias, approvedSet]);

  const isNodeApproved = (node: FlowNode): boolean => {
    if (node.kind === 'materia') return approvedSet.has(node.id);
    if (node.kind === 'requirement') return completedReqSet.has(node.id);
    if (node.kind === 'slot') {
      return (slotCounts[node.id] ?? 0) >= (node.requiredCount ?? 1);
    }
    return false;
  };

  const isNodeUnlocked = (node: FlowNode): boolean => {
    if (node.col === 'cbc') return true;
    if (node.requiresCbc && !allCbcApproved) return false;
    if (node.prereqs.length === 0) {
      // Electivas & Tesis require at least CBC done
      return allCbcApproved;
    }
    return node.prereqs.every((preId) => {
      const preNode = nodeMap.get(preId);
      return preNode ? isNodeApproved(preNode) : false;
    });
  };

  // Active node (hover takes temporary precedence, otherwise pinned)
  const activeId = hoveredId ?? pinnedId;

  // Compute full highlight sets for the active node
  const highlight = useMemo(() => {
    if (!activeId) {
      return {
        directPrereqs: new Set<string>(),
        ancestorPrereqs: new Set<string>(),
        directUnlocks: new Set<string>(),
        descendantUnlocks: new Set<string>(),
        upstreamEdges: new Set<string>(),
        downstreamEdges: new Set<string>(),
        cbcHighlight: false
      };
    }

    const activeNode = nodeMap.get(activeId);
    const directPrereqs = new Set<string>(prereqMap.get(activeId) ?? []);
    const ancestorPrereqs = new Set<string>();
    const upstreamEdges = new Set<string>();

    // BFS upstream
    const upQueue = [...directPrereqs];
    for (const p of directPrereqs) {
      upstreamEdges.add(`${p}__${activeId}`);
    }
    while (upQueue.length > 0) {
      const curr = upQueue.shift()!;
      const parents = prereqMap.get(curr) ?? [];
      for (const p of parents) {
        upstreamEdges.add(`${p}__${curr}`);
        if (!directPrereqs.has(p) && !ancestorPrereqs.has(p)) {
          ancestorPrereqs.add(p);
          upQueue.push(p);
        }
      }
    }

    // Check if upstream chain touches CBC
    const cbcHighlight =
      activeNode?.col === 'cbc' ||
      Boolean(activeNode?.requiresCbc) ||
      [...directPrereqs, ...ancestorPrereqs].some((id) => nodeMap.get(id)?.requiresCbc);

    // Direct & descendant unlocks
    const directUnlocks = new Set<string>(unlocksMap.get(activeId) ?? []);
    const descendantUnlocks = new Set<string>();
    const downstreamEdges = new Set<string>();

    if (activeNode?.col === 'cbc') {
      // Hovering any CBC subject unlocks the 6 initial CFG subjects
      for (const n of FLOW_NODES) {
        if (n.requiresCbc) directUnlocks.add(n.id);
      }
    } else {
      const downQueue = [...directUnlocks];
      for (const u of directUnlocks) {
        downstreamEdges.add(`${activeId}__${u}`);
      }
      while (downQueue.length > 0) {
        const curr = downQueue.shift()!;
        const children = unlocksMap.get(curr) ?? [];
        for (const c of children) {
          downstreamEdges.add(`${curr}__${c}`);
          if (!directUnlocks.has(c) && !descendantUnlocks.has(c)) {
            descendantUnlocks.add(c);
            downQueue.push(c);
          }
        }
      }
    }

    return {
      directPrereqs,
      ancestorPrereqs,
      directUnlocks,
      descendantUnlocks,
      upstreamEdges,
      downstreamEdges,
      cbcHighlight
    };
  }, [activeId, nodeMap, prereqMap, unlocksMap]);

  const activeNode = activeId ? nodeMap.get(activeId) ?? null : null;
  const activeMateria = activeNode?.kind === 'materia' ? materiaMap.get(activeNode.id) ?? null : null;

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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
                Correlatividades
              </span>
              <div className="h-[1px] w-8 bg-bordo/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink text-balance">
              Diagrama de Flujo · Plan 1985 y modificatorias
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl leading-relaxed">
              Pasá el cursor o tocá cualquier materia para ver qué necesitás antes y a cuáles te
              habilita. Tildá las aprobadas directamente en el mapa.
            </p>
          </div>

          {/* View Switcher */}
          <div className="inline-flex items-center p-1 bg-paper border border-ink/10 rounded-2xl text-xs font-bold self-start lg:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-colors whitespace-nowrap',
                viewMode === 'interactive'
                  ? 'bg-ink text-white shadow-xs'
                  : 'text-muted hover:text-ink'
              )}
            >
              <GitBranch size={14} />
              Mapa interactivo
            </button>
            <button
              type="button"
              onClick={() => setViewMode('poster')}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-colors whitespace-nowrap',
                viewMode === 'poster'
                  ? 'bg-ink text-white shadow-xs'
                  : 'text-muted hover:text-ink'
              )}
            >
              <ImageIcon size={14} />
              Imagen oficial
            </button>
          </div>
        </div>

        {viewMode === 'interactive' ? (
          <>
            {/* Legend + Quick Inspector Bar */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted pb-4 border-b border-ink/8">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-700" />
                  Aprobada
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  Necesitás antes
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-violeta" />
                  Te habilita
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-bordo bg-white" />
                  Lista para cursar
                </span>
              </div>

              {pinnedId && (
                <button
                  type="button"
                  onClick={() => setPinnedId(null)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-bordo hover:underline whitespace-nowrap"
                >
                  <X size={13} />
                  Soltar selección
                </button>
              )}
            </div>

            {/* Live Selection / Hover Inspector */}
            <div className="mb-5 p-4 rounded-2xl bg-paper border border-ink/8 min-h-[84px] flex flex-col justify-center">
              {activeNode ? (
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-ink leading-tight">
                        {activeNode.label}
                      </h3>
                      <span
                        className={cn(
                          'text-[11px] font-bold',
                          isNodeApproved(activeNode)
                            ? 'text-emerald-700'
                            : isNodeUnlocked(activeNode)
                              ? 'text-bordo'
                              : 'text-muted'
                        )}
                      >
                        ·{' '}
                        {isNodeApproved(activeNode)
                          ? 'Aprobada'
                          : isNodeUnlocked(activeNode)
                            ? 'Habilitada para cursar'
                            : 'Con correlativas pendientes'}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs">
                      {/* Upstream summary */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 font-bold text-amber-700">
                          <ArrowLeft size={12} />
                          Antes:
                        </span>
                        {activeNode.col === 'cbc' ? (
                          <span className="text-muted">Sin correlativas (Ciclo inicial)</span>
                        ) : activeNode.requiresCbc ? (
                          <span className={allCbcApproved ? 'text-emerald-700 font-semibold' : 'text-ink'}>
                            CBC completo ({cbcApprovedCount}/6)
                          </span>
                        ) : activeNode.prereqs.length === 0 ? (
                          <span className="text-muted">
                            Según cada materia electiva / plan de carrera
                          </span>
                        ) : (
                          activeNode.prereqs.map((preId, i) => {
                            const pre = nodeMap.get(preId);
                            if (!pre) return null;
                            const ok = isNodeApproved(pre);
                            return (
                              <button
                                key={preId}
                                type="button"
                                onClick={() => setPinnedId(preId)}
                                className={cn(
                                  'hover:underline font-medium text-left',
                                  ok ? 'text-emerald-700' : 'text-ink'
                                )}
                              >
                                {ok ? '✓ ' : ''}
                                {pre.label}
                                {i < activeNode.prereqs.length - 1 ? ',' : ''}
                              </button>
                            );
                          })
                        )}
                      </div>

                      {/* Downstream summary */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 font-bold text-violeta">
                          <ArrowRight size={12} />
                          Te habilita:
                        </span>
                        {activeNode.col === 'cbc' ? (
                          <span className="text-ink font-medium">
                            Las 6 materias iniciales del Ciclo de Formación General (al completar el CBC)
                          </span>
                        ) : highlight.directUnlocks.size === 0 ? (
                          <span className="text-muted">Tramo final de la carrera</span>
                        ) : (
                          Array.from(highlight.directUnlocks).map((uId, i, arr) => {
                            const target = nodeMap.get(uId);
                            if (!target) return null;
                            return (
                              <button
                                key={uId}
                                type="button"
                                onClick={() => setPinnedId(uId)}
                                className="text-violeta hover:underline font-medium text-left"
                              >
                                {target.label}
                                {i < arr.length - 1 ? ',' : ''}
                              </button>
                            );
                          })
                        )}
                      </div>
                    </div>

                    {activeNode.simultaneousNote && (
                      <p className="text-[11px] text-muted italic">{activeNode.simultaneousNote}</p>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {activeNode.kind === 'materia' && (
                      <>
                        <button
                          type="button"
                          onClick={() => onToggleApproved(activeNode.id)}
                          className={cn(
                            'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold border transition-colors whitespace-nowrap',
                            approvedSet.has(activeNode.id)
                              ? 'bg-emerald-700 border-emerald-700 text-white'
                              : 'bg-white border-ink/15 text-ink hover:border-bordo hover:text-bordo'
                          )}
                        >
                          <Check size={13} />
                          {approvedSet.has(activeNode.id) ? 'Aprobada' : 'Marcar aprobada'}
                        </button>
                        {activeMateria && (
                          <button
                            type="button"
                            onClick={() => onOpenMateria(activeMateria)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-bordo text-white hover:bg-bordo-light transition-colors whitespace-nowrap"
                          >
                            <BookOpen size={13} />
                            Ver cátedras
                          </button>
                        )}
                      </>
                    )}

                    {activeNode.kind === 'requirement' && (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleRequirement(activeNode.id)}
                          className={cn(
                            'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold border transition-colors whitespace-nowrap',
                            completedReqSet.has(activeNode.id)
                              ? 'bg-emerald-700 border-emerald-700 text-white'
                              : 'bg-white border-ink/15 text-ink hover:border-bordo hover:text-bordo'
                          )}
                        >
                          <Check size={13} />
                          {completedReqSet.has(activeNode.id) ? 'Cumplido' : 'Marcar cumplido'}
                        </button>
                        {activeNode.id === 'req-tesis' && (
                          <button
                            type="button"
                            onClick={onOpenTesis}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-bordo text-white hover:bg-bordo-light transition-colors whitespace-nowrap"
                          >
                            <BookOpen size={13} />
                            Ver guía y recursos de Tesis
                          </button>
                        )}
                      </>
                    )}

                    {activeNode.kind === 'slot' && activeNode.targetCycle && (
                      <button
                        type="button"
                        onClick={() => onJumpToCycle(activeNode.targetCycle!)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-bordo text-white hover:bg-bordo-light transition-colors whitespace-nowrap"
                      >
                        Elegir en {activeNode.targetCycle}
                        <ExternalLink size={12} />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-muted">
                  <span>
                    Pasá el mouse o tocá cualquier materia del mapa para iluminar su cadena de
                    correlatividades hacia atrás y hacia adelante.
                  </span>
                  <span className="text-xs font-semibold text-ink tabular-nums">
                    CBC: {cbcApprovedCount}/6 {allCbcApproved ? '✓ Completo' : ''}
                  </span>
                </div>
              )}
            </div>

            {/* Interactive Scrollable Graph Canvas */}
            <div className="rounded-2xl border border-ink/10 bg-paper overflow-x-auto custom-scrollbar">
              <div
                className="relative select-none"
                style={{ width: CANVAS_W, height: CANVAS_H }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setPinnedId(null);
                }}
              >
                {/* Column Backdrop Zones & Headers */}
                <div
                  className="absolute top-3 bottom-3 left-2 rounded-2xl bg-violeta/[0.035] border border-violeta/10 pointer-events-none"
                  style={{ width: 194 }}
                />
                <div
                  className="absolute top-3 bottom-3 rounded-2xl bg-bordo/[0.025] border border-bordo/10 pointer-events-none"
                  style={{ left: 220, width: 734 }}
                />
                <div
                  className="absolute top-3 bottom-3 rounded-2xl bg-ink/[0.03] border border-ink/10 pointer-events-none"
                  style={{ left: 976, width: 236 }}
                />

                {/* Column Titles */}
                <div
                  className="absolute top-5 left-4 flex items-center justify-between gap-2"
                  style={{ width: 170 }}
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-violeta">
                    CBC ({cbcApprovedCount}/6)
                  </span>
                  <button
                    type="button"
                    onClick={() => onToggleManyApproved([...CBC_IDS], !allCbcApproved)}
                    className="text-[10px] font-bold text-violeta hover:underline"
                    title={allCbcApproved ? 'Desmarcar todo el CBC' : 'Marcar las 6 materias del CBC'}
                  >
                    {allCbcApproved ? 'Limpiar' : 'Todo ✓'}
                  </button>
                </div>

                <div
                  className="absolute top-5 text-center pointer-events-none"
                  style={{ left: 220, width: 734 }}
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-bordo">
                    Ciclo de Formación General (15 obligatorias + 2 electivas)
                  </span>
                </div>

                <div
                  className="absolute top-5 text-center pointer-events-none"
                  style={{ left: 976, width: 236 }}
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-ink">
                    Formación Profesional
                  </span>
                </div>

                {/* CBC -> CFG Bridge Visual Indicator */}
                <div
                  className={cn(
                    'absolute flex flex-col items-center justify-center pointer-events-none transition-opacity duration-200',
                    activeId && !highlight.cbcHighlight ? 'opacity-20' : 'opacity-100'
                  )}
                  style={{ left: 196, top: 270, width: 34, height: 110 }}
                >
                  <div
                    className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold transition-colors',
                      highlight.cbcHighlight
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : allCbcApproved
                          ? 'bg-emerald-700 border-emerald-700 text-white'
                          : 'bg-white border-ink/20 text-muted'
                    )}
                    title="Completar el CBC habilita las 6 materias iniciales del CFG"
                  >
                    <ArrowRight size={12} />
                  </div>
                </div>

                {/* SVG Layer for Arrows */}
                <svg
                  width={CANVAS_W}
                  height={CANVAS_H}
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <defs>
                    <marker
                      id="arrow-neutral"
                      viewBox="0 0 10 10"
                      refX="8.5"
                      refY="5"
                      markerWidth="5.5"
                      markerHeight="5.5"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#8C857B" />
                    </marker>
                    <marker
                      id="arrow-upstream"
                      viewBox="0 0 10 10"
                      refX="8.5"
                      refY="5"
                      markerWidth="6.5"
                      markerHeight="6.5"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#D97706" />
                    </marker>
                    <marker
                      id="arrow-downstream"
                      viewBox="0 0 10 10"
                      refX="8.5"
                      refY="5"
                      markerWidth="6.5"
                      markerHeight="6.5"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#5B21B6" />
                    </marker>
                  </defs>

                  {/* Draw neutral edges first, then highlighted edges on top */}
                  {EDGES.map((edge) => {
                    const fromNode = nodeMap.get(edge.from);
                    const toNode = nodeMap.get(edge.to);
                    if (!fromNode || !toNode) return null;

                    const isUpstream = highlight.upstreamEdges.has(edge.id);
                    const isDownstream = highlight.downstreamEdges.has(edge.id);
                    if (isUpstream || isDownstream) return null;

                    return (
                      <path
                        key={edge.id}
                        d={buildEdgePath(fromNode, toNode)}
                        fill="none"
                        stroke="#8C857B"
                        strokeWidth={1.25}
                        strokeOpacity={activeId ? 0.08 : 0.28}
                        markerEnd="url(#arrow-neutral)"
                        className="transition-opacity duration-200"
                      />
                    );
                  })}

                  {/* Highlighted edges on top */}
                  {EDGES.map((edge) => {
                    const fromNode = nodeMap.get(edge.from);
                    const toNode = nodeMap.get(edge.to);
                    if (!fromNode || !toNode) return null;

                    const isUpstream = highlight.upstreamEdges.has(edge.id);
                    const isDownstream = highlight.downstreamEdges.has(edge.id);
                    if (!isUpstream && !isDownstream) return null;

                    const isDirect = edge.from === activeId || edge.to === activeId;

                    return (
                      <path
                        key={`hi-${edge.id}`}
                        d={buildEdgePath(fromNode, toNode)}
                        fill="none"
                        stroke={isUpstream ? '#D97706' : '#5B21B6'}
                        strokeWidth={isDirect ? 2.6 : 1.9}
                        strokeOpacity={isDirect ? 0.95 : 0.6}
                        strokeDasharray={isDirect ? undefined : '5 4'}
                        markerEnd={isUpstream ? 'url(#arrow-upstream)' : 'url(#arrow-downstream)'}
                      />
                    );
                  })}
                </svg>

                {/* Interactive Node Cards */}
                {FLOW_NODES.map((node) => {
                  const approved = isNodeApproved(node);
                  const unlocked = isNodeUnlocked(node);
                  const isActive = activeId === node.id;
                  const isDirectPre = highlight.directPrereqs.has(node.id);
                  const isAncestorPre =
                    highlight.ancestorPrereqs.has(node.id) ||
                    (activeId &&
                      node.col === 'cbc' &&
                      highlight.cbcHighlight &&
                      nodeMap.get(activeId)?.col !== 'cbc');
                  const isDirectUnlock = highlight.directUnlocks.has(node.id);
                  const isDescendantUnlock = highlight.descendantUnlocks.has(node.id);

                  const isRelated =
                    !activeId ||
                    isActive ||
                    isDirectPre ||
                    isAncestorPre ||
                    isDirectUnlock ||
                    isDescendantUnlock;

                  const slotCurrent = node.kind === 'slot' ? (slotCounts[node.id] ?? 0) : 0;

                  return (
                    <div
                      key={node.id}
                      style={{
                        left: node.x,
                        top: node.y,
                        width: node.w,
                        height: node.h
                      }}
                      onMouseEnter={() => setHoveredId(node.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => {
                        if (node.id === 'req-tesis') {
                          setPinnedId(node.id);
                          onOpenTesis();
                          return;
                        }
                        setPinnedId((prev) => (prev === node.id ? null : node.id));
                      }}
                      className={cn(
                        'absolute rounded-xl px-2.5 py-2 flex items-center justify-between gap-2 cursor-pointer transition-all duration-150',
                        node.kind === 'requirement' ? 'border-dashed' : 'border-solid',
                        // Opacity dimming for non-related nodes
                        !isRelated ? 'opacity-20' : 'opacity-100',
                        // Border & background hierarchy
                        isActive
                          ? 'bg-white border-2 border-bordo shadow-lg shadow-bordo/15 z-20 scale-[1.02]'
                          : isDirectPre
                            ? 'bg-amber-50 border-2 border-amber-600 shadow-sm z-10'
                            : isAncestorPre
                              ? 'bg-amber-50/60 border border-amber-500/60 z-10'
                              : isDirectUnlock
                                ? 'bg-violeta/[0.07] border-2 border-violeta shadow-sm z-10'
                                : isDescendantUnlock
                                  ? 'bg-violeta/[0.04] border border-violeta/45 z-10'
                                  : approved
                                    ? 'bg-emerald-50/90 border border-emerald-600/45'
                                    : unlocked && node.kind === 'materia'
                                      ? 'bg-white border border-bordo/35 hover:border-bordo'
                                      : 'bg-white/90 border border-ink/12 hover:border-ink/30'
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <p
                          className={cn(
                            'text-[11px] font-bold leading-snug line-clamp-2',
                            approved ? 'text-emerald-950' : 'text-ink'
                          )}
                        >
                          {node.label}
                        </p>
                        {node.kind === 'slot' && (
                          <p className="text-[10px] font-semibold text-muted tabular-nums mt-0.5">
                            {slotCurrent} / {node.requiredCount} completadas
                          </p>
                        )}
                        {node.kind === 'requirement' && (
                          <p className="text-[10px] text-muted mt-0.5">
                            {node.id === 'req-tesis'
                              ? approved
                                ? 'Cumplido · Ver guía ↓'
                                : 'Clic para ver guía y recursos ↓'
                              : approved
                                ? 'Cumplido'
                                : 'Requisito'}
                          </p>
                        )}
                      </div>

                      {/* Direct Tick Button for Materias & Requirements, or Jump arrow for Electivas/Prácticas */}
                      {node.kind === 'materia' && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleApproved(node.id);
                          }}
                          aria-label={
                            approved
                              ? `Quitar ${node.label} de aprobadas`
                              : `Marcar ${node.label} como aprobada`
                          }
                          aria-pressed={approved}
                          title={approved ? 'Aprobada (clic para quitar)' : 'Marcar como aprobada'}
                          className={cn(
                            'w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors',
                            approved
                              ? 'bg-emerald-700 border-emerald-700 text-white'
                              : 'bg-paper border-ink/20 text-muted/60 hover:border-bordo hover:text-bordo'
                          )}
                        >
                          <Check size={12} strokeWidth={2.5} />
                        </button>
                      )}

                      {node.kind === 'requirement' && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleRequirement(node.id);
                          }}
                          aria-label={
                            approved
                              ? `Quitar ${node.label} de cumplidos`
                              : `Marcar ${node.label} como cumplido`
                          }
                          aria-pressed={approved}
                          title={approved ? 'Cumplido' : 'Marcar como cumplido'}
                          className={cn(
                            'w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors',
                            approved
                              ? 'bg-emerald-700 border-emerald-700 text-white'
                              : 'bg-paper border-ink/20 text-muted/60 hover:border-bordo hover:text-bordo'
                          )}
                        >
                          <Check size={12} strokeWidth={2.5} />
                        </button>
                      )}

                      {node.kind === 'slot' && node.targetCycle && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onJumpToCycle(node.targetCycle!);
                          }}
                          title={`Ir a ${node.targetCycle}`}
                          aria-label={`Ver materias de ${node.targetCycle}`}
                          className={cn(
                            'w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors',
                            approved
                              ? 'bg-emerald-700 border-emerald-700 text-white'
                              : 'bg-paper border-ink/20 text-bordo hover:bg-bordo hover:text-white'
                          )}
                        >
                          {approved ? <Check size={12} strokeWidth={2.5} /> : <ArrowRight size={12} />}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[11px] text-muted mt-3 flex flex-wrap items-center justify-between gap-2">
              <span>
                En celular o pantallas chicas podés deslizar el diagrama horizontalmente. Tocá una
                materia para fijar su recorrido.
              </span>
              <button
                type="button"
                onClick={() => setViewMode('poster')}
                className="font-bold text-bordo hover:underline"
              >
                Ver o descargar imagen oficial →
              </button>
            </p>
          </>
        ) : (
          /* Official Poster Image View */
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
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

            <div className="relative rounded-2xl overflow-hidden border border-ink/10 bg-paper">
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
            </div>
          </div>
        )}

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
              <em>Psicoanálisis: Freud</em> (Res. CD 17/99). Desde la modificación aplicada a
              ingresantes de <strong className="text-ink">2011 en adelante</strong> se exige la{' '}
              <strong className="text-ink">Tesis de Licenciatura</strong> (Res. CS 6768/13).
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Lightbox for Official Poster */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-[110] flex flex-col bg-ink/90 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Diagrama de flujo ampliado"
          >
            <div className="px-4 sm:px-6 py-3.5 bg-ink text-white border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <p className="text-xs sm:text-sm font-semibold truncate">
                Plan de Estudios 1985 y modificatorias · Correlatividades
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
