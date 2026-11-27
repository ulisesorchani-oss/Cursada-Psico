import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  Flame,
  Check,
  BookOpen,
  ExternalLink,
  Calendar,
  Clock,
  Layers,
  X
} from 'lucide-react';
import { Materia } from '../constants';
import { cn } from '../lib/utils';

export type HeatmapMetricMode = 'pending' | 'approved' | 'total';
type CellColumnKey = 'c1' | 'c2' | 'annual' | 'cumulative';

interface TermSubjectItem {
  key: string;
  materiaId?: string;
  materia?: Materia;
  label: string;
  hours: number;
  weeklyHours: number;
  isAnnualPart?: boolean;
  isApproved: boolean;
  isUnlocked: boolean;
  isSlotPlaceholder?: boolean;
  targetCycle?: string;
}

interface YearRowData {
  yearIndex: number; // 0 = CBC, 1..5 = 1°..5° Año
  yearLabel: string;
  shortSubtitle: string;
  c1Items: TermSubjectItem[];
  c2Items: TermSubjectItem[];
  c1TotalHours: number;
  c1ApprovedHours: number;
  c1PendingHours: number;
  c2TotalHours: number;
  c2ApprovedHours: number;
  c2PendingHours: number;
  annualTotalHours: number;
  annualApprovedHours: number;
  annualPendingHours: number;
  cumulativeTotalHours: number;
  cumulativeApprovedHours: number;
  cumulativePendingHours: number;
  uniqueSubjectsTotal: number;
  uniqueSubjectsApproved: number;
  uniqueSubjectsUnlockedPending: number;
}

interface HeatmapCellDatum {
  id: string;
  yearIndex: number;
  yearLabel: string;
  colKey: CellColumnKey;
  colLabel: string;
  valueHours: number;
  totalHours: number;
  approvedHours: number;
  pendingHours: number;
  intensity: number; // 0..1 normalized for its column group
  weeklyHours?: number;
  subjectsCount: number;
  approvedCount: number;
  pendingCount: number;
  unlockedPendingCount: number;
  items: TermSubjectItem[];
  isComplete: boolean;
}

interface WorkloadHeatmapD3Props {
  materias: Materia[];
  approvedSet: Set<string>;
  unlockedIds: Set<string>;
  onToggleApproved: (id: string) => void;
  onOpenMateria: (materia: Materia) => void;
  onJumpToCycle: (cycle: string) => void;
}

/**
 * Carga horaria oficial de referencia (Plan 1985, Psicología UBA):
 * - CBC: Biología y Matemática = 96 hs (6 hs/sem); IPC, ICSE, Psicología, Semiología = 64 hs (4 hs/sem)
 * - Materias cuatrimestrales de grado (obligatorias, electivas y prácticas): 90 hs (6 hs/sem × 15 sem)
 * - Materias anuales en el plan (Psicoanálisis: Freud, Psicopatología): 180 hs (90 hs por cuatrimestre)
 */
const CBC_HOURS_BY_ID: Record<string, { hours: number; weekly: number }> = {
  'cbc-ipc': { hours: 64, weekly: 4 },
  'cbc-icse': { hours: 64, weekly: 4 },
  'cbc-biologia': { hours: 96, weekly: 6 },
  'cbc-psico': { hours: 64, weekly: 4 },
  'cbc-semiologia': { hours: 64, weekly: 4 },
  'cbc-matematica': { hours: 96, weekly: 6 }
};

const YEAR_META: Array<{ index: number; label: string; subtitle: string }> = [
  { index: 0, label: 'CBC', subtitle: 'Ciclo Inicial' },
  { index: 1, label: '1° Año', subtitle: 'CFG Inicial' },
  { index: 2, label: '2° Año', subtitle: 'CFG Intermedio' },
  { index: 3, label: '3° Año', subtitle: 'CFG + Electivas' },
  { index: 4, label: '4° Año', subtitle: 'CFP' },
  { index: 5, label: '5° Año', subtitle: 'CFP + Práctica' }
];

const COLUMNS: Array<{ key: CellColumnKey; label: string; shortLabel: string }> = [
  { key: 'c1', label: '1° Cuatrimestre', shortLabel: '1° Cuat.' },
  { key: 'c2', label: '2° Cuatrimestre', shortLabel: '2° Cuat.' },
  { key: 'annual', label: 'Carga Anual', shortLabel: 'Anual' },
  { key: 'cumulative', label: 'Acumulado Carrera', shortLabel: 'Acumulado' }
];

function getRelativeLuminance(colorStr: string): number {
  const rgb = d3.color(colorStr)?.rgb();
  if (!rgb) return 1;
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(rgb.r) + 0.7152 * toLinear(rgb.g) + 0.0722 * toLinear(rgb.b);
}

function getContrastInk(bgColor: string): string {
  return getRelativeLuminance(bgColor) < 0.42 ? '#FFFFFF' : '#1A1A1A';
}

function getContrastMuted(bgColor: string): string {
  return getRelativeLuminance(bgColor) < 0.42 ? 'rgba(255,255,255,0.82)' : '#57534E';
}

export function WorkloadHeatmapD3({
  materias,
  approvedSet,
  unlockedIds,
  onToggleApproved,
  onOpenMateria,
  onJumpToCycle
}: WorkloadHeatmapD3Props) {
  const [metricMode, setMetricMode] = useState<HeatmapMetricMode>('pending');
  const [pacePerTerm, setPacePerTerm] = useState<2 | 3 | 4>(3);
  const [selectedCellId, setSelectedCellId] = useState<string | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{
    datum: HeatmapCellDatum;
    x: number;
    y: number;
  } | null>(null);

  const chartWrapperRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const legendSvgRef = useRef<SVGSVGElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(880);

  // Measure container width cleanly with ResizeObserver
  useEffect(() => {
    const el = chartWrapperRef.current;
    if (!el) return;
    const updateWidth = () => {
      const next = Math.max(640, Math.floor(el.clientWidth));
      setContainerWidth(next);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build structured 6-year Plan 1985 workload dataset directly from PLAN_ESTUDIOS + approvedSet
  const { rows, cells, totals } = useMemo(() => {
    const byYearTerm: Record<number, { c1: TermSubjectItem[]; c2: TermSubjectItem[] }> = {
      0: { c1: [], c2: [] },
      1: { c1: [], c2: [] },
      2: { c1: [], c2: [] },
      3: { c1: [], c2: [] },
      4: { c1: [], c2: [] },
      5: { c1: [], c2: [] }
    };

    const allCbcApproved = materias
      .filter((m) => m.ciclo === 'CBC')
      .every((m) => approvedSet.has(m.id));

    // 1. Mandatory subjects (CBC, Formación General, Formación Profesional)
    for (const m of materias) {
      if (
        m.ciclo !== 'CBC' &&
        m.ciclo !== 'Formación General' &&
        m.ciclo !== 'Formación Profesional'
      ) {
        continue;
      }

      const yearIdx = Math.min(5, Math.max(0, m.año));
      const isApproved = approvedSet.has(m.id);
      const isUnlocked = unlockedIds.has(m.id);

      if (m.ciclo === 'CBC') {
        const meta = CBC_HOURS_BY_ID[m.id] ?? { hours: 64, weekly: 4 };
        const termKey = m.cuatrimestre === 2 ? 'c2' : 'c1';
        byYearTerm[0][termKey].push({
          key: m.id,
          materiaId: m.id,
          materia: m,
          label: m.nombre,
          hours: meta.hours,
          weeklyHours: meta.weekly,
          isApproved,
          isUnlocked: true
        });
      } else if (m.cuatrimestre === 'Anual') {
        // Annual subjects contribute 90 hs in 1°C and 90 hs in 2°C (180 hs total)
        byYearTerm[yearIdx].c1.push({
          key: `${m.id}__c1`,
          materiaId: m.id,
          materia: m,
          label: `${m.nombre} (1°C · Anual)`,
          hours: 90,
          weeklyHours: 6,
          isAnnualPart: true,
          isApproved,
          isUnlocked
        });
        byYearTerm[yearIdx].c2.push({
          key: `${m.id}__c2`,
          materiaId: m.id,
          materia: m,
          label: `${m.nombre} (2°C · Anual)`,
          hours: 90,
          weeklyHours: 6,
          isAnnualPart: true,
          isApproved,
          isUnlocked
        });
      } else {
        const termKey = m.cuatrimestre === 2 ? 'c2' : 'c1';
        byYearTerm[yearIdx][termKey].push({
          key: m.id,
          materiaId: m.id,
          materia: m,
          label: m.nombre,
          hours: 90,
          weeklyHours: 6,
          isApproved,
          isUnlocked
        });
      }
    }

    // 2. Required Electivas CFG (2 slots → 3° Año: 1°C & 2°C)
    const approvedElectCfg = materias.filter(
      (m) => m.ciclo === 'Electivas General' && approvedSet.has(m.id)
    );
    const cfgSlots: Array<{ term: 'c1' | 'c2'; slotNum: number }> = [
      { term: 'c1', slotNum: 1 },
      { term: 'c2', slotNum: 2 }
    ];
    cfgSlots.forEach(({ term, slotNum }, idx) => {
      const mat = approvedElectCfg[idx];
      if (mat) {
        byYearTerm[3][term].push({
          key: `slot-cfg-${slotNum}-${mat.id}`,
          materiaId: mat.id,
          materia: mat,
          label: `${mat.nombre} (Electiva CFG)`,
          hours: 90,
          weeklyHours: 6,
          isApproved: true,
          isUnlocked: true
        });
      } else {
        byYearTerm[3][term].push({
          key: `slot-cfg-pending-${slotNum}`,
          label: `Electiva CFG #${slotNum} (a elección)`,
          hours: 90,
          weeklyHours: 6,
          isApproved: false,
          isUnlocked: allCbcApproved,
          isSlotPlaceholder: true,
          targetCycle: 'Electivas General'
        });
      }
    });

    // 3. Required Práctica (1 slot → 5° Año 1°C) + extra Práctica counts as 1 Electiva CFP
    const approvedPracticas = materias.filter(
      (m) => m.ciclo === 'Prácticas' && approvedSet.has(m.id)
    );
    const practicaUnlocked = approvedSet.has('salud-publica-mental');
    if (approvedPracticas[0]) {
      const mat = approvedPracticas[0];
      byYearTerm[5].c1.push({
        key: `slot-practica-1-${mat.id}`,
        materiaId: mat.id,
        materia: mat,
        label: `${mat.nombre} (Práctica)`,
        hours: 90,
        weeklyHours: 6,
        isApproved: true,
        isUnlocked: true
      });
    } else {
      byYearTerm[5].c1.push({
        key: 'slot-practica-pending-1',
        label: 'Práctica Profesional / Investigación (a elección)',
        hours: 90,
        weeklyHours: 6,
        isApproved: false,
        isUnlocked: practicaUnlocked,
        isSlotPlaceholder: true,
        targetCycle: 'Prácticas'
      });
    }

    // 4. Required Electivas CFP (3 slots → 4° Año 2°C, 5° Año 1°C, 5° Año 2°C)
    const approvedElectCfp = materias.filter(
      (m) => m.ciclo === 'Electivas Profesional' && approvedSet.has(m.id)
    );
    const effectiveElectCfp: Materia[] = [...approvedElectCfp];
    if (approvedPracticas.length > 1 && effectiveElectCfp.length < 3) {
      effectiveElectCfp.push(approvedPracticas[1]);
    }
    const cfpSlots: Array<{ year: number; term: 'c1' | 'c2'; slotNum: number }> = [
      { year: 4, term: 'c2', slotNum: 1 },
      { year: 5, term: 'c1', slotNum: 2 },
      { year: 5, term: 'c2', slotNum: 3 }
    ];
    cfpSlots.forEach(({ year, term, slotNum }, idx) => {
      const mat = effectiveElectCfp[idx];
      if (mat) {
        const isExtraPrac = mat.ciclo === 'Prácticas';
        byYearTerm[year][term].push({
          key: `slot-cfp-${slotNum}-${mat.id}`,
          materiaId: mat.id,
          materia: mat,
          label: `${mat.nombre} (${isExtraPrac ? '2ª Práctica · CFP' : 'Electiva CFP'})`,
          hours: 90,
          weeklyHours: 6,
          isApproved: true,
          isUnlocked: true
        });
      } else {
        byYearTerm[year][term].push({
          key: `slot-cfp-pending-${slotNum}`,
          label: `Electiva CFP #${slotNum} (a elección)`,
          hours: 90,
          weeklyHours: 6,
          isApproved: false,
          isUnlocked: allCbcApproved,
          isSlotPlaceholder: true,
          targetCycle: 'Electivas Profesional'
        });
      }
    });

    // Compute per-year rows and running cumulative totals
    let runningTotal = 0;
    let runningApproved = 0;
    let runningPending = 0;
    let totalSubjectsCount = 0;
    let approvedSubjectsCount = 0;
    let unlockedPendingSubjectsCount = 0;

    const computedRows: YearRowData[] = YEAR_META.map((meta) => {
      const c1Items = byYearTerm[meta.index].c1;
      const c2Items = byYearTerm[meta.index].c2;

      const sumHours = (list: TermSubjectItem[]) => list.reduce((acc, i) => acc + i.hours, 0);
      const sumApproved = (list: TermSubjectItem[]) =>
        list.reduce((acc, i) => acc + (i.isApproved ? i.hours : 0), 0);

      const c1TotalHours = sumHours(c1Items);
      const c1ApprovedHours = sumApproved(c1Items);
      const c1PendingHours = c1TotalHours - c1ApprovedHours;

      const c2TotalHours = sumHours(c2Items);
      const c2ApprovedHours = sumApproved(c2Items);
      const c2PendingHours = c2TotalHours - c2ApprovedHours;

      const annualTotalHours = c1TotalHours + c2TotalHours;
      const annualApprovedHours = c1ApprovedHours + c2ApprovedHours;
      const annualPendingHours = annualTotalHours - annualApprovedHours;

      runningTotal += annualTotalHours;
      runningApproved += annualApprovedHours;
      runningPending += annualPendingHours;

      // Deduplicate annual subjects for accurate subject count
      const uniqueMap = new Map<string, TermSubjectItem>();
      for (const item of [...c1Items, ...c2Items]) {
        const dedupeKey = item.materiaId ?? item.key;
        if (!uniqueMap.has(dedupeKey)) {
          uniqueMap.set(dedupeKey, item);
        }
      }
      const uniqueList = Array.from(uniqueMap.values());
      const uniqueSubjectsTotal = uniqueList.length;
      const uniqueSubjectsApproved = uniqueList.filter((i) => i.isApproved).length;
      const uniqueSubjectsUnlockedPending = uniqueList.filter(
        (i) => !i.isApproved && i.isUnlocked
      ).length;

      totalSubjectsCount += uniqueSubjectsTotal;
      approvedSubjectsCount += uniqueSubjectsApproved;
      unlockedPendingSubjectsCount += uniqueSubjectsUnlockedPending;

      return {
        yearIndex: meta.index,
        yearLabel: meta.label,
        shortSubtitle: meta.subtitle,
        c1Items,
        c2Items,
        c1TotalHours,
        c1ApprovedHours,
        c1PendingHours,
        c2TotalHours,
        c2ApprovedHours,
        c2PendingHours,
        annualTotalHours,
        annualApprovedHours,
        annualPendingHours,
        cumulativeTotalHours: runningTotal,
        cumulativeApprovedHours: runningApproved,
        cumulativePendingHours: runningPending,
        uniqueSubjectsTotal,
        uniqueSubjectsApproved,
        uniqueSubjectsUnlockedPending
      };
    });

    // Maximums per column group so color intensity is meaningful across both term cells and cumulative column
    const maxTermHours = Math.max(
      1,
      ...computedRows.flatMap((r) => [r.c1TotalHours, r.c2TotalHours])
    );
    const maxAnnualHours = Math.max(1, ...computedRows.map((r) => r.annualTotalHours));
    const maxCumulativeHours = Math.max(1, runningTotal);

    const pickValue = (total: number, approved: number, pending: number) =>
      metricMode === 'pending' ? pending : metricMode === 'approved' ? approved : total;

    const computedCells: HeatmapCellDatum[] = [];

    computedRows.forEach((row) => {
      // Helper to count unique items in a list
      const countStats = (items: TermSubjectItem[]) => {
        const map = new Map<string, TermSubjectItem>();
        for (const it of items) {
          const k = it.materiaId ?? it.key;
          if (!map.has(k)) map.set(k, it);
        }
        const list = Array.from(map.values());
        return {
          total: list.length,
          approved: list.filter((i) => i.isApproved).length,
          pending: list.filter((i) => !i.isApproved).length,
          unlockedPending: list.filter((i) => !i.isApproved && i.isUnlocked).length
        };
      };

      const c1Stats = countStats(row.c1Items);
      const c2Stats = countStats(row.c2Items);
      const annualItems = [...row.c1Items, ...row.c2Items];
      const annualStats = countStats(annualItems);
      const cumulativeItems = computedRows
        .filter((r) => r.yearIndex <= row.yearIndex)
        .flatMap((r) => [...r.c1Items, ...r.c2Items]);
      const cumulativeStats = countStats(cumulativeItems);

      const c1Val = pickValue(row.c1TotalHours, row.c1ApprovedHours, row.c1PendingHours);
      const c2Val = pickValue(row.c2TotalHours, row.c2ApprovedHours, row.c2PendingHours);
      const annualVal = pickValue(
        row.annualTotalHours,
        row.annualApprovedHours,
        row.annualPendingHours
      );
      const cumVal = pickValue(
        row.cumulativeTotalHours,
        row.cumulativeApprovedHours,
        row.cumulativePendingHours
      );

      const c1Weekly = row.c1Items.reduce(
        (acc, i) =>
          acc +
          (metricMode === 'pending'
            ? i.isApproved
              ? 0
              : i.weeklyHours
            : metricMode === 'approved'
              ? i.isApproved
                ? i.weeklyHours
                : 0
              : i.weeklyHours),
        0
      );
      const c2Weekly = row.c2Items.reduce(
        (acc, i) =>
          acc +
          (metricMode === 'pending'
            ? i.isApproved
              ? 0
              : i.weeklyHours
            : metricMode === 'approved'
              ? i.isApproved
                ? i.weeklyHours
                : 0
              : i.weeklyHours),
        0
      );

      computedCells.push(
        {
          id: `${row.yearIndex}-c1`,
          yearIndex: row.yearIndex,
          yearLabel: row.yearLabel,
          colKey: 'c1',
          colLabel: '1° Cuatrimestre',
          valueHours: c1Val,
          totalHours: row.c1TotalHours,
          approvedHours: row.c1ApprovedHours,
          pendingHours: row.c1PendingHours,
          intensity: Math.min(1, c1Val / maxTermHours),
          weeklyHours: c1Weekly,
          subjectsCount: c1Stats.total,
          approvedCount: c1Stats.approved,
          pendingCount: c1Stats.pending,
          unlockedPendingCount: c1Stats.unlockedPending,
          items: row.c1Items,
          isComplete: row.c1PendingHours === 0
        },
        {
          id: `${row.yearIndex}-c2`,
          yearIndex: row.yearIndex,
          yearLabel: row.yearLabel,
          colKey: 'c2',
          colLabel: '2° Cuatrimestre',
          valueHours: c2Val,
          totalHours: row.c2TotalHours,
          approvedHours: row.c2ApprovedHours,
          pendingHours: row.c2PendingHours,
          intensity: Math.min(1, c2Val / maxTermHours),
          weeklyHours: c2Weekly,
          subjectsCount: c2Stats.total,
          approvedCount: c2Stats.approved,
          pendingCount: c2Stats.pending,
          unlockedPendingCount: c2Stats.unlockedPending,
          items: row.c2Items,
          isComplete: row.c2PendingHours === 0
        },
        {
          id: `${row.yearIndex}-annual`,
          yearIndex: row.yearIndex,
          yearLabel: row.yearLabel,
          colKey: 'annual',
          colLabel: 'Carga Anual',
          valueHours: annualVal,
          totalHours: row.annualTotalHours,
          approvedHours: row.annualApprovedHours,
          pendingHours: row.annualPendingHours,
          intensity: Math.min(1, annualVal / maxAnnualHours),
          subjectsCount: annualStats.total,
          approvedCount: annualStats.approved,
          pendingCount: annualStats.pending,
          unlockedPendingCount: annualStats.unlockedPending,
          items: annualItems,
          isComplete: row.annualPendingHours === 0
        },
        {
          id: `${row.yearIndex}-cumulative`,
          yearIndex: row.yearIndex,
          yearLabel: row.yearLabel,
          colKey: 'cumulative',
          colLabel: 'Acumulado Carrera',
          valueHours: cumVal,
          totalHours: row.cumulativeTotalHours,
          approvedHours: row.cumulativeApprovedHours,
          pendingHours: row.cumulativePendingHours,
          intensity: Math.min(1, cumVal / maxCumulativeHours),
          subjectsCount: cumulativeStats.total,
          approvedCount: cumulativeStats.approved,
          pendingCount: cumulativeStats.pending,
          unlockedPendingCount: cumulativeStats.unlockedPending,
          items: cumulativeItems,
          isComplete: row.cumulativePendingHours === 0
        }
      );
    });

    const heaviestPendingRow = computedRows.reduce<YearRowData | null>((best, curr) => {
      if (curr.annualPendingHours === 0) return best;
      if (!best || curr.annualPendingHours > best.annualPendingHours) return curr;
      return best;
    }, null);

    return {
      rows: computedRows,
      cells: computedCells,
      totals: {
        totalHours: runningTotal,
        approvedHours: runningApproved,
        pendingHours: runningPending,
        percentHours: runningTotal > 0 ? Math.round((runningApproved / runningTotal) * 100) : 0,
        totalSubjects: totalSubjectsCount,
        approvedSubjects: approvedSubjectsCount,
        pendingSubjects: Math.max(0, totalSubjectsCount - approvedSubjectsCount),
        unlockedPendingSubjects: unlockedPendingSubjectsCount,
        heaviestPendingRow
      }
    };
  }, [materias, approvedSet, unlockedIds, metricMode]);

  const selectedCell = useMemo(
    () => (selectedCellId ? cells.find((c) => c.id === selectedCellId) ?? null : null),
    [selectedCellId, cells]
  );

  // Deduplicated subject list for the inspector drawer
  const selectedCellUniqueItems = useMemo(() => {
    if (!selectedCell) return [];
    const seen = new Map<string, TermSubjectItem & { combinedHours: number }>();
    for (const item of selectedCell.items) {
      const k = item.materiaId ?? item.key;
      const existing = seen.get(k);
      if (existing) {
        existing.combinedHours += item.hours;
        existing.label = existing.materia ? existing.materia.nombre : existing.label;
      } else {
        seen.set(k, {
          ...item,
          label: item.isAnnualPart && selectedCell.colKey !== 'c1' && selectedCell.colKey !== 'c2' && item.materia
            ? `${item.materia.nombre} (Anual)`
            : item.label,
          combinedHours: item.hours
        });
      }
    }
    return Array.from(seen.values());
  }, [selectedCell]);

  // Estimated remaining terms & years based on chosen cursada pace
  const estimatedTerms = useMemo(() => {
    if (totals.pendingSubjects === 0) return 0;
    return Math.ceil(totals.pendingSubjects / pacePerTerm);
  }, [totals.pendingSubjects, pacePerTerm]);

  const estimatedWeeklyHours = pacePerTerm * 6;

  // Color interpolator per metric mode (Editorial UBA palette)
  const colorInterpolator = useMemo(() => {
    if (metricMode === 'pending') {
      // Cool paper -> warm amber -> UBA bordó (high pending load = hot)
      return d3.interpolateRgbBasis(['#FAF6EF', '#F3DFC6', '#D98A6C', '#9E2A3B', '#6B001A']);
    }
    if (metricMode === 'approved') {
      // Quiet stone -> sage -> deep academic emerald (more approved = richer)
      return d3.interpolateRgbBasis(['#F7F4EE', '#D5ECE0', '#6EB894', '#1E825A', '#065F46']);
    }
    // Total plan baseline: warm paper -> muted violeta -> deep UBA violeta
    return d3.interpolateRgbBasis(['#FAF7F2', '#E4D8EE', '#A37AC2', '#642B91', '#3D0066']);
  }, [metricMode]);

  // Render & animate the D3.js Heatmap SVG
  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 0 : 340;

    const margin = { top: 44, right: 20, bottom: 18, left: 132 };
    const width = containerWidth;
    const rowHeight = 64;
    const height = margin.top + rows.length * rowHeight + margin.bottom;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = rows.length * rowHeight;

    const svg = d3
      .select(svgEl)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', width)
      .attr('height', height);

    // Ensure structural layers exist once
    let root = svg.select<SVGGElement>('g.heatmap-root');
    if (root.empty()) {
      root = svg.append('g').attr('class', 'heatmap-root');
      root.append('g').attr('class', 'col-headers');
      root.append('g').attr('class', 'row-headers');
      root.append('g').attr('class', 'group-dividers');
      root.append('g').attr('class', 'cells-layer');
    }
    root.attr('transform', `translate(${margin.left},${margin.top})`);

    // Compute custom column layout with a subtle visual gap separating Terms | Annual | Cumulative
    const gapNormal = 10;
    const gapSection = 22;
    const totalGaps = gapNormal + gapSection + gapSection;
    const colWidth = Math.max(100, (innerWidth - totalGaps) / 4);

    const colX: Record<CellColumnKey, number> = {
      c1: 0,
      c2: colWidth + gapNormal,
      annual: (colWidth + gapNormal) + colWidth + gapSection,
      cumulative: (colWidth + gapNormal) + colWidth + gapSection + colWidth + gapSection
    };

    const yScale = d3
      .scaleBand<number>()
      .domain(rows.map((r) => r.yearIndex))
      .range([0, innerHeight])
      .paddingInner(0.16)
      .paddingOuter(0.05);

    const cellHeight = yScale.bandwidth();

    // Subtle vertical hairline dividers between column groups
    const dividerPositions = [
      colX.c2 + colWidth + gapSection / 2,
      colX.annual + colWidth + gapSection / 2
    ];
    root
      .select<SVGGElement>('g.group-dividers')
      .selectAll<SVGLineElement, number>('line')
      .data(dividerPositions)
      .join('line')
      .attr('x1', (d) => d)
      .attr('x2', (d) => d)
      .attr('y1', -26)
      .attr('y2', innerHeight)
      .attr('stroke', 'rgba(26,26,26,0.09)')
      .attr('stroke-dasharray', '3 3')
      .attr('stroke-width', 1);

    // Column headers
    type ColMeta = (typeof COLUMNS)[number];
    const colHeaderGroups = root
      .select<SVGGElement>('g.col-headers')
      .selectAll<SVGGElement, ColMeta>('g.col-header')
      .data<ColMeta>(COLUMNS, (d) => (d as ColMeta).key)
      .join('g')
      .attr('class', 'col-header')
      .attr('transform', (d) => `translate(${colX[d.key] + colWidth / 2}, -14)`);

    colHeaderGroups
      .selectAll<SVGTextElement, ColMeta>('text')
      .data<ColMeta>((d) => [d])
      .join('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', width < 720 ? '11px' : '12px')
      .attr('font-weight', (d) => (d.key === 'cumulative' || d.key === 'annual' ? '700' : '600'))
      .attr('fill', (d) =>
        d.key === 'cumulative' ? '#6B001A' : d.key === 'annual' ? '#1A1A1A' : '#666666'
      )
      .text((d) => (width < 720 ? d.shortLabel : d.label));

    // Row headers (left axis)
    const rowHeaderGroups = root
      .select<SVGGElement>('g.row-headers')
      .selectAll<SVGGElement, YearRowData>('g.row-header')
      .data<YearRowData>(rows, (d) => String((d as YearRowData).yearIndex))
      .join('g')
      .attr('class', 'row-header')
      .attr('transform', (d) => `translate(-14, ${(yScale(d.yearIndex) ?? 0) + cellHeight / 2})`);

    rowHeaderGroups
      .selectAll<SVGTextElement, YearRowData>('text.year-title')
      .data<YearRowData>((d) => [d])
      .join('text')
      .attr('class', 'year-title')
      .attr('text-anchor', 'end')
      .attr('y', -4)
      .attr('font-family', 'var(--font-serif)')
      .attr('font-size', '15px')
      .attr('font-weight', '700')
      .attr('fill', '#1A1A1A')
      .text((d) => d.yearLabel);

    rowHeaderGroups
      .selectAll<SVGTextElement, YearRowData>('text.year-sub')
      .data<YearRowData>((d) => [d])
      .join('text')
      .attr('class', 'year-sub')
      .attr('text-anchor', 'end')
      .attr('y', 13)
      .attr('font-size', '10.5px')
      .attr('font-weight', '500')
      .attr('fill', '#666666')
      .style('font-variant-numeric', 'tabular-nums')
      .text((d) => `${d.uniqueSubjectsApproved}/${d.uniqueSubjectsTotal} aprob. · ${d.shortSubtitle}`);

    // Cell fill resolver
    const getCellFill = (d: HeatmapCellDatum): string => {
      if (metricMode === 'pending' && d.pendingHours === 0) {
        return '#ECFDF5'; // Calm completed emerald tint
      }
      if (metricMode === 'approved' && d.approvedHours === 0) {
        return '#F8F5EF'; // Quiet neutral paper
      }
      return colorInterpolator(Math.max(0.06, d.intensity));
    };

    const getCellStroke = (d: HeatmapCellDatum): string => {
      if (selectedCellId === d.id) return '#1A1A1A';
      if (metricMode === 'pending' && d.pendingHours === 0) return 'rgba(4, 120, 87, 0.35)';
      if (d.colKey === 'cumulative') return 'rgba(107, 0, 26, 0.22)';
      return 'rgba(26, 26, 26, 0.08)';
    };

    // Data-join heatmap cells
    const cellGroups = root
      .select<SVGGElement>('g.cells-layer')
      .selectAll<SVGGElement, HeatmapCellDatum>('g.heatmap-cell')
      .data<HeatmapCellDatum>(cells, (d) => (d as HeatmapCellDatum).id)
      .join(
        (enter) => {
          const g = enter
            .append('g')
            .attr('class', 'heatmap-cell')
            .attr('role', 'button')
            .attr('tabindex', '0')
            .style('cursor', 'pointer')
            .attr(
              'transform',
              (d) => `translate(${colX[d.colKey]}, ${yScale(d.yearIndex) ?? 0})`
            );

          g.append('rect')
            .attr('class', 'cell-bg')
            .attr('rx', 12)
            .attr('ry', 12)
            .attr('width', colWidth)
            .attr('height', cellHeight)
            .attr('fill', '#FAF6EF')
            .attr('stroke', 'rgba(26,26,26,0.08)')
            .attr('stroke-width', 1);

          g.append('text')
            .attr('class', 'cell-primary')
            .attr('text-anchor', 'middle')
            .attr('font-weight', '700')
            .style('font-variant-numeric', 'tabular-nums')
            .style('pointer-events', 'none');

          g.append('text')
            .attr('class', 'cell-secondary')
            .attr('text-anchor', 'middle')
            .attr('font-weight', '500')
            .style('font-variant-numeric', 'tabular-nums')
            .style('pointer-events', 'none');

          return g;
        },
        (update) => update,
        (exit) => exit.remove()
      );

    cellGroups
      .attr('aria-label', (d) => `${d.yearLabel}, ${d.colLabel}: ${d.valueHours} horas`)
      .attr('transform', (d) => `translate(${colX[d.colKey]}, ${yScale(d.yearIndex) ?? 0})`)
      .on('mouseenter', function (event: MouseEvent, d: HeatmapCellDatum) {
        d3.select(this)
          .select('rect.cell-bg')
          .attr('stroke', '#1A1A1A')
          .attr('stroke-width', selectedCellId === d.id ? 2.5 : 1.75);

        const wrapperRect = chartWrapperRef.current?.getBoundingClientRect();
        if (wrapperRect) {
          setHoveredCell({
            datum: d,
            x: event.clientX - wrapperRect.left,
            y: event.clientY - wrapperRect.top
          });
        }
      })
      .on('mousemove', function (event: MouseEvent, d: HeatmapCellDatum) {
        const wrapperRect = chartWrapperRef.current?.getBoundingClientRect();
        if (wrapperRect) {
          setHoveredCell({
            datum: d,
            x: event.clientX - wrapperRect.left,
            y: event.clientY - wrapperRect.top
          });
        }
      })
      .on('mouseleave', function (_event: MouseEvent, d: HeatmapCellDatum) {
        d3.select(this)
          .select('rect.cell-bg')
          .attr('stroke', getCellStroke(d))
          .attr('stroke-width', selectedCellId === d.id ? 2.25 : 1);
        setHoveredCell(null);
      })
      .on('click', (_event: MouseEvent, d: HeatmapCellDatum) => {
        setSelectedCellId((prev) => (prev === d.id ? null : d.id));
      })
      .on('keydown', (event: KeyboardEvent, d: HeatmapCellDatum) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setSelectedCellId((prev) => (prev === d.id ? null : d.id));
        }
      });

    // Animated rect fill & geometry transitions
    cellGroups
      .select<SVGRectElement>('rect.cell-bg')
      .transition()
      .duration(duration)
      .ease(d3.easeCubicOut)
      .attr('width', colWidth)
      .attr('height', cellHeight)
      .attr('fill', (d) => getCellFill(d))
      .attr('stroke', (d) => getCellStroke(d))
      .attr('stroke-width', (d) => (selectedCellId === d.id ? 2.25 : 1));

    // Primary text (hours)
    cellGroups
      .select<SVGTextElement>('text.cell-primary')
      .attr('x', colWidth / 2)
      .attr('y', cellHeight / 2 - 3)
      .attr('font-size', width < 720 ? '13px' : '15px')
      .text((d) => {
        if (metricMode === 'pending' && d.pendingHours === 0) {
          return '0 hs · Listo';
        }
        return `${d.valueHours.toLocaleString('es-AR')} hs`;
      })
      .transition()
      .duration(duration)
      .attr('fill', (d) => {
        if (metricMode === 'pending' && d.pendingHours === 0) return '#065F46';
        return getContrastInk(getCellFill(d));
      });

    // Secondary contextual line (weekly load / ratio / % of plan)
    cellGroups
      .select<SVGTextElement>('text.cell-secondary')
      .attr('x', colWidth / 2)
      .attr('y', cellHeight / 2 + 14)
      .attr('font-size', '10.5px')
      .text((d) => {
        if (d.colKey === 'cumulative') {
          const pct =
            totals.totalHours > 0 ? Math.round((d.valueHours / totals.totalHours) * 100) : 0;
          if (metricMode === 'pending') {
            return d.pendingHours === 0
              ? `${d.approvedCount}/${d.subjectsCount} materias`
              : `${pct}% del plan · ${d.pendingCount} pend.`;
          }
          if (metricMode === 'approved') {
            return `${pct}% del plan · ${d.approvedCount} aprob.`;
          }
          return `${pct}% acumulado · ${d.subjectsCount} mat.`;
        }

        if (d.colKey === 'annual') {
          if (metricMode === 'pending') {
            return d.pendingHours === 0
              ? `${d.subjectsCount} de ${d.subjectsCount} aprob.`
              : `${d.pendingCount} pend. (${d.unlockedPendingCount} hab.)`;
          }
          if (metricMode === 'approved') {
            const pct = d.totalHours > 0 ? Math.round((d.approvedHours / d.totalHours) * 100) : 0;
            return `${pct}% del año · ${d.approvedCount}/${d.subjectsCount}`;
          }
          return `${d.subjectsCount} materias`;
        }

        // 1°C or 2°C term cells
        if (metricMode === 'pending') {
          if (d.pendingHours === 0) return `${d.subjectsCount} mat. aprobadas`;
          return `${d.weeklyHours ?? 0} hs/sem · ${d.pendingCount} pend.`;
        }
        if (metricMode === 'approved') {
          return `${d.approvedCount}/${d.subjectsCount} mat. · ${d.weeklyHours ?? 0} hs/sem`;
        }
        return `${d.weeklyHours ?? 0} hs/sem · ${d.subjectsCount} mat.`;
      })
      .transition()
      .duration(duration)
      .attr('fill', (d) => {
        if (metricMode === 'pending' && d.pendingHours === 0) return '#047857';
        return getContrastMuted(getCellFill(d));
      });
  }, [rows, cells, containerWidth, metricMode, selectedCellId, colorInterpolator, totals.totalHours]);

  // Render D3 Continuous Color Legend Bar
  useEffect(() => {
    const el = legendSvgRef.current;
    if (!el) return;

    const w = 240;
    const h = 30;
    const barH = 9;
    const svg = d3.select(el).attr('viewBox', `0 0 ${w} ${h}`).attr('width', w).attr('height', h);
    svg.selectAll('*').remove();

    const gradId = `heatmap-legend-grad-${metricMode}`;
    const defs = svg.append('defs');
    const grad = defs
      .append('linearGradient')
      .attr('id', gradId)
      .attr('x1', '0%')
      .attr('x2', '100%');

    const stops = d3.range(0, 1.01, 0.1);
    stops.forEach((t) => {
      grad
        .append('stop')
        .attr('offset', `${Math.round(t * 100)}%`)
        .attr('stop-color', colorInterpolator(t));
    });

    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 2)
      .attr('width', w)
      .attr('height', barH)
      .attr('rx', 4.5)
      .attr('fill', `url(#${gradId})`)
      .attr('stroke', 'rgba(26,26,26,0.1)')
      .attr('stroke-width', 0.75);

    const labels =
      metricMode === 'pending'
        ? ['0 hs (Listo)', 'Carga media', 'Alta carga']
        : metricMode === 'approved'
          ? ['0 hs', 'Avance medio', 'Tramo completo']
          : ['Menor peso', 'Carga media', 'Mayor peso'];

    const positions = [0, w / 2, w];
    const anchors = ['start', 'middle', 'end'] as const;

    labels.forEach((txt, i) => {
      svg
        .append('text')
        .attr('x', positions[i])
        .attr('y', 25)
        .attr('text-anchor', anchors[i])
        .attr('font-size', '10px')
        .attr('font-weight', '600')
        .attr('fill', '#666666')
        .text(txt);
    });
  }, [metricMode, colorInterpolator]);

  return (
    <div id="mapa-calor" className="mt-10 pt-10 border-t border-ink/8 scroll-mt-24">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-bordo">
              Planificador D3.js · Carga Horaria
            </span>
            <div className="h-[1px] w-8 bg-bordo/30" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink text-balance">
            Mapa de Calor de Carga Horaria Anual Acumulada
          </h3>
          <p className="text-sm text-muted mt-1.5 max-w-2xl leading-relaxed">
            Visualizá cuántas horas reloj te quedan por cuatrimestre, por año y en el acumulado
            de la carrera según las materias que ya aprobaste. Tocá cualquier celda para planificar
            o tildar materias.
          </p>
        </div>

        {/* Dynamic Metric Mode Switcher */}
        <div
          role="group"
          aria-label="Modo del mapa de calor"
          className="inline-flex items-center p-1 bg-paper border border-ink/10 rounded-2xl text-xs font-bold self-start lg:self-auto shrink-0"
        >
          {(
            [
              ['pending', 'Carga pendiente'],
              ['approved', 'Horas aprobadas'],
              ['total', 'Plan completo']
            ] as const
          ).map(([mode, label]) => (
            <button
              key={mode}
              type="button"
              aria-pressed={metricMode === mode}
              onClick={() => setMetricMode(mode)}
              className={cn(
                'px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer',
                metricMode === mode
                  ? 'bg-ink text-white shadow-xs'
                  : 'text-muted hover:text-ink'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Concise Tabular KPI Strip + Pace Simulator */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 mb-6 border-b border-ink/8">
        <div className="py-1">
          <p className="text-xs font-semibold text-muted flex items-center gap-1.5">
            <Clock size={13} className="text-bordo shrink-0" />
            Horas acumuladas aprobadas
          </p>
          <p className="text-2xl font-serif font-bold text-ink tabular-nums mt-1">
            {totals.approvedHours.toLocaleString('es-AR')}{' '}
            <span className="text-sm font-sans font-medium text-muted">
              / {totals.totalHours.toLocaleString('es-AR')} hs
            </span>
          </p>
          <p className="text-xs text-muted tabular-nums mt-0.5">
            {totals.percentHours}% de carga · {totals.approvedSubjects} de {totals.totalSubjects}{' '}
            materias
          </p>
        </div>

        <div className="py-1 sm:border-l sm:border-ink/8 sm:pl-4">
          <p className="text-xs font-semibold text-muted flex items-center gap-1.5">
            <Flame size={13} className="text-bordo shrink-0" />
            Carga pendiente total
          </p>
          <p className="text-2xl font-serif font-bold text-ink tabular-nums mt-1">
            {totals.pendingHours.toLocaleString('es-AR')}{' '}
            <span className="text-sm font-sans font-medium text-muted">hs</span>
          </p>
          <p className="text-xs text-muted tabular-nums mt-0.5">
            {totals.pendingSubjects === 0
              ? 'Plan de cursada completo'
              : `${totals.pendingSubjects} pendientes · ${totals.unlockedPendingSubjects} habilitadas hoy`}
          </p>
        </div>

        <div className="py-1 lg:border-l lg:border-ink/8 lg:pl-4">
          <p className="text-xs font-semibold text-muted flex items-center gap-1.5">
            <Layers size={13} className="text-violeta shrink-0" />
            Tramo más intenso pendiente
          </p>
          <p className="text-2xl font-serif font-bold text-ink tabular-nums mt-1">
            {totals.heaviestPendingRow ? totals.heaviestPendingRow.yearLabel : 'Completado'}
          </p>
          <p className="text-xs text-muted tabular-nums mt-0.5">
            {totals.heaviestPendingRow
              ? `${totals.heaviestPendingRow.annualPendingHours.toLocaleString('es-AR')} hs restantes (${totals.heaviestPendingRow.shortSubtitle})`
              : '0 hs pendientes en todos los años'}
          </p>
        </div>

        <div className="py-1 sm:border-l sm:border-ink/8 sm:pl-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-muted flex items-center gap-1.5">
              <Calendar size={13} className="text-bordo shrink-0" />
              Ritmo estimado
            </p>
            <div
              role="group"
              aria-label="Materias por cuatrimestre"
              className="inline-flex items-center gap-0.5 bg-paper border border-ink/10 rounded-lg p-0.5 text-[11px] font-bold"
            >
              {([2, 3, 4] as const).map((pace) => (
                <button
                  key={pace}
                  type="button"
                  aria-pressed={pacePerTerm === pace}
                  onClick={() => setPacePerTerm(pace)}
                  className={cn(
                    'px-2 py-0.5 rounded-md transition-colors cursor-pointer tabular-nums whitespace-nowrap',
                    pacePerTerm === pace ? 'bg-bordo text-white' : 'text-muted hover:text-ink'
                  )}
                  title={`Simular cursando ${pace} materias por cuatrimestre`}
                >
                  {pace}/cuat
                </button>
              ))}
            </div>
          </div>
          <p className="text-2xl font-serif font-bold text-ink tabular-nums mt-1">
            {estimatedTerms === 0
              ? '¡Listo!'
              : `${estimatedTerms} ${estimatedTerms === 1 ? 'cuatrimestre' : 'cuat.'}`}
            {estimatedTerms > 0 && (
              <span className="text-sm font-sans font-medium text-muted">
                {' '}
                (
                {estimatedTerms === 1
                  ? '~medio año'
                  : `~${(estimatedTerms / 2).toFixed(1).replace('.0', '')} ${
                      estimatedTerms === 2 ? 'año' : 'años'
                    }`}
                )
              </span>
            )}
          </p>
          <p className="text-xs text-muted tabular-nums mt-0.5">
            {estimatedTerms === 0
              ? 'Solo resta Tesis / Idioma si corresponde'
              : `~${estimatedWeeklyHours} hs/sem de cursada (${pacePerTerm} mat/cuat)`}
          </p>
        </div>
      </div>

      {/* D3.js Interactive Heatmap Canvas */}
      <div className="relative rounded-2xl border border-ink/10 bg-paper p-3 sm:p-5 overflow-x-auto custom-scrollbar">
        <div ref={chartWrapperRef} className="relative min-w-[640px]">
          <svg
            ref={svgRef}
            className="block w-full h-auto select-none"
            role="img"
            aria-label="Mapa de calor dinámico de carga horaria anual acumulada del Plan 1985 de Psicología UBA"
          />

          {/* Floating Hover Tooltip */}
          {hoveredCell && (
            <div
              className="pointer-events-none absolute z-30 bg-white border border-ink/15 rounded-xl px-3.5 py-2.5 shadow-lg text-xs max-w-[260px] transition-opacity duration-150"
              style={{
                left: Math.min(Math.max(12, hoveredCell.x + 14), containerWidth - 270),
                top: Math.max(8, hoveredCell.y - 84)
              }}
            >
              <p className="font-serif font-bold text-ink text-sm leading-tight">
                {hoveredCell.datum.yearLabel} · {hoveredCell.datum.colLabel}
              </p>
              <div className="mt-1.5 space-y-0.5 text-muted tabular-nums">
                <p>
                  Aprobadas:{' '}
                  <strong className="text-emerald-700">
                    {hoveredCell.datum.approvedHours.toLocaleString('es-AR')} hs
                  </strong>{' '}
                  ({hoveredCell.datum.approvedCount}/{hoveredCell.datum.subjectsCount} mat.)
                </p>
                <p>
                  Pendientes:{' '}
                  <strong className="text-bordo">
                    {hoveredCell.datum.pendingHours.toLocaleString('es-AR')} hs
                  </strong>
                  {hoveredCell.datum.unlockedPendingCount > 0 && (
                    <span> · {hoveredCell.datum.unlockedPendingCount} habilitadas</span>
                  )}
                </p>
                {hoveredCell.datum.weeklyHours !== undefined && (
                  <p>
                    Intensidad:{' '}
                    <strong className="text-ink">{hoveredCell.datum.weeklyHours} hs/semana</strong>
                  </p>
                )}
              </div>
              <p className="text-[10.5px] font-semibold text-bordo mt-1.5">
                Clic para ver y tildar materias ↓
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Legend + Guidance Footer */}
      <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-muted">
          <span className="font-semibold text-ink">Referencia de color:</span>
          <svg
            ref={legendSvgRef}
            className="block shrink-0"
            aria-label="Escala de intensidad de carga horaria"
          />
          {metricMode === 'pending' && (
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-50 border border-emerald-700/40 inline-block" />
              Tramo completo (0 hs)
            </span>
          )}
        </div>
        <p className="text-[11px] text-muted">
          Base oficial Plan 1985: cuatrimestrales 90 hs (6 hs/sem), anuales 180 hs, CBC 64–96 hs.
        </p>
      </div>

      {/* Inline Cell Planner Inspector (opens when clicking any cell) */}
      {selectedCell && (
        <div className="mt-5 pt-5 border-t border-ink/10">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-xs font-bold text-bordo">
                Detalle de planificación · {selectedCell.yearLabel} · {selectedCell.colLabel}
              </p>
              <p className="text-xs text-muted mt-0.5 tabular-nums">
                Aprobadas: <strong className="text-ink">{selectedCell.approvedHours} hs</strong>
                <span aria-hidden="true" className="mx-1.5">·</span>
                Pendientes: <strong className="text-bordo">{selectedCell.pendingHours} hs</strong>
                <span aria-hidden="true" className="mx-1.5">·</span>
                Total del bloque:{' '}
                <strong className="text-ink">{selectedCell.totalHours} hs</strong>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedCellId(null)}
              className="inline-flex items-center gap-1 text-xs font-bold text-muted hover:text-bordo transition-colors cursor-pointer whitespace-nowrap"
            >
              <X size={14} />
              Cerrar detalle
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {selectedCellUniqueItems.map((item) => (
              <div
                key={item.key}
                className={cn(
                  'flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl border transition-colors',
                  item.isApproved
                    ? 'bg-emerald-50/70 border-emerald-600/30'
                    : item.isUnlocked
                      ? 'bg-paper border-bordo/25'
                      : 'bg-paper/60 border-ink/8'
                )}
              >
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      'text-xs font-bold leading-snug truncate',
                      item.isApproved ? 'text-emerald-950' : 'text-ink'
                    )}
                    title={item.label}
                  >
                    {item.label}
                  </p>
                  <p className="text-[11px] text-muted tabular-nums mt-0.5">
                    {item.combinedHours} hs · {item.weeklyHours} hs/sem
                    <span aria-hidden="true" className="mx-1">·</span>
                    <span
                      className={cn(
                        'font-semibold',
                        item.isApproved
                          ? 'text-emerald-700'
                          : item.isUnlocked
                            ? 'text-bordo'
                            : 'text-muted'
                      )}
                    >
                      {item.isApproved
                        ? 'Aprobada'
                        : item.isUnlocked
                          ? 'Habilitada'
                          : 'Con correlativas'}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.materia && (
                    <button
                      type="button"
                      onClick={() => onOpenMateria(item.materia!)}
                      title={`Ver cátedras de ${item.materia.nombre}`}
                      aria-label={`Ver cátedras de ${item.materia.nombre}`}
                      className="w-7 h-7 rounded-full border border-ink/12 bg-white text-muted hover:text-bordo hover:border-bordo flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <BookOpen size={12} />
                    </button>
                  )}

                  {item.materiaId ? (
                    <button
                      type="button"
                      onClick={() => onToggleApproved(item.materiaId!)}
                      aria-pressed={item.isApproved}
                      aria-label={
                        item.isApproved
                          ? `Quitar ${item.label} de aprobadas`
                          : `Marcar ${item.label} como aprobada`
                      }
                      title={item.isApproved ? 'Quitar de aprobadas' : 'Marcar como aprobada'}
                      className={cn(
                        'w-7 h-7 rounded-full border flex items-center justify-center transition-colors cursor-pointer',
                        item.isApproved
                          ? 'bg-emerald-700 border-emerald-700 text-white'
                          : 'bg-white border-ink/18 text-muted hover:border-bordo hover:text-bordo'
                      )}
                    >
                      <Check size={12} strokeWidth={2.5} />
                    </button>
                  ) : item.targetCycle ? (
                    <button
                      type="button"
                      onClick={() => onJumpToCycle(item.targetCycle!)}
                      title={`Elegir en ${item.targetCycle}`}
                      aria-label={`Elegir materia en ${item.targetCycle}`}
                      className="w-7 h-7 rounded-full border border-bordo/30 bg-white text-bordo hover:bg-bordo hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ExternalLink size={12} />
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
