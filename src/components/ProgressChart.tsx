import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { Materia } from '../constants';
import { cn } from '../lib/utils';

export const CYCLE_COLORS: Record<string, string> = {
  CBC: '#3D0066',
  'Formación General': '#6B001A',
  'Electivas General': '#9E3253',
  'Formación Profesional': '#B45309',
  'Electivas Profesional': '#0F766E',
  Prácticas: '#1E40AF'
};

/**
 * Metas reales del Plan de Estudios 1985 (Licenciatura en Psicología UBA):
 * - CBC: 6 materias
 * - Licenciatura (28 materias = 23 obligatorias + 5 electivas):
 *   - Formación General: 15 obligatorias
 *   - Formación Profesional: 7 obligatorias
 *   - Práctica Profesional y de Investigación: 1 obligatoria
 *   - Electivas General: 2 requeridas
 *   - Electivas Profesional: 3 requeridas (hasta 1 práctica extra puede contar aquí)
 * Total para completar el plan: 34 materias (6 CBC + 23 obligatorias + 5 electivas).
 */
export const CYCLE_REQUIRED: Record<string, number> = {
  CBC: 6,
  'Formación General': 15,
  'Electivas General': 2,
  'Formación Profesional': 7,
  'Electivas Profesional': 3,
  Prácticas: 1
};

export const TOTAL_REQUIRED_MATERIAS = Object.values(CYCLE_REQUIRED).reduce((a, b) => a + b, 0);

const PENDING_COLOR = '#EAE4DA';

interface CycleStat {
  cycle: string;
  approvedRaw: number;
  counted: number;
  required: number;
  catalogTotal: number;
  percentage: number;
  color: string;
  extraPracticaApplied?: boolean;
}

interface ChartSlice {
  name: string;
  value: number;
  requiredInCycle?: number;
  cyclePercent?: number;
  color: string;
  isPending?: boolean;
}

interface ProgressChartProps {
  materias: Materia[];
  cycles: readonly string[];
  approvedSet: Set<string>;
  selectedCycle: string;
  onlyApprovedFilter: 'all' | 'approved' | 'pending';
  onSelectCycle: (cycle: string) => void;
  onChangeApprovedFilter: (filter: 'all' | 'approved' | 'pending') => void;
  onResetProgress: () => void;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: ChartSlice }>;
}

function ProgressTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const item = payload[0].payload;

  return (
    <div className="bg-white border border-ink/12 rounded-xl px-3.5 py-2.5 shadow-lg text-xs">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: item.color }}
        />
        <span className="font-bold text-ink">{item.name}</span>
      </div>
      {item.isPending ? (
        <p className="text-muted tabular-nums">
          {item.value} {item.value === 1 ? 'materia pendiente' : 'materias pendientes'} del plan
        </p>
      ) : (
        <p className="text-muted tabular-nums">
          {item.value} de {item.requiredInCycle} requeridas ({item.cyclePercent}% del ciclo)
        </p>
      )}
    </div>
  );
}

export function ProgressChart({
  materias,
  cycles,
  approvedSet,
  selectedCycle,
  onlyApprovedFilter,
  onSelectCycle,
  onChangeApprovedFilter,
  onResetProgress
}: ProgressChartProps) {
  const {
    cycleStats,
    totalCounted,
    totalRawApproved,
    overallPercent,
    cbcCounted,
    obligatoriasLicCounted,
    electivasCounted,
    chartData
  } = useMemo(() => {
    const rawByCycle: Record<string, { approved: number; catalog: number }> = {};
    for (const cycle of cycles) {
      const cycleMaterias = materias.filter((m) => m.ciclo === cycle);
      rawByCycle[cycle] = {
        approved: cycleMaterias.filter((m) => approvedSet.has(m.id)).length,
        catalog: cycleMaterias.length
      };
    }

    // Según el Plan 1985, dentro de las 3 electivas del CFP se puede hacer otra Práctica Profesional
    const practicasRaw = rawByCycle['Prácticas']?.approved ?? 0;
    const extraPracticasForCfp = practicasRaw > 1 ? 1 : 0;

    const stats: CycleStat[] = cycles.map((cycle) => {
      const approvedRaw = rawByCycle[cycle]?.approved ?? 0;
      const catalogTotal = rawByCycle[cycle]?.catalog ?? 0;
      const required = CYCLE_REQUIRED[cycle] ?? catalogTotal;

      let effectiveApproved = approvedRaw;
      let extraPracticaApplied = false;

      if (cycle === 'Electivas Profesional' && extraPracticasForCfp > 0 && approvedRaw < required) {
        effectiveApproved = Math.min(required, approvedRaw + extraPracticasForCfp);
        extraPracticaApplied = effectiveApproved > approvedRaw;
      }

      const counted = Math.min(effectiveApproved, required);
      const percentage = required > 0 ? Math.round((counted / required) * 100) : 0;

      return {
        cycle,
        approvedRaw,
        counted,
        required,
        catalogTotal,
        percentage,
        color: CYCLE_COLORS[cycle] ?? '#6B001A',
        extraPracticaApplied
      };
    });

    const statMap = Object.fromEntries(stats.map((s) => [s.cycle, s]));
    const cbc = statMap['CBC']?.counted ?? 0;
    const obligLic =
      (statMap['Formación General']?.counted ?? 0) +
      (statMap['Formación Profesional']?.counted ?? 0) +
      (statMap['Prácticas']?.counted ?? 0);
    const electivas =
      (statMap['Electivas General']?.counted ?? 0) +
      (statMap['Electivas Profesional']?.counted ?? 0);

    const countedSum = stats.reduce((acc, s) => acc + s.counted, 0);
    const rawSum = approvedSet.size;
    const overall =
      TOTAL_REQUIRED_MATERIAS > 0
        ? Math.min(100, Math.round((countedSum / TOTAL_REQUIRED_MATERIAS) * 100))
        : 0;
    const pending = Math.max(0, TOTAL_REQUIRED_MATERIAS - countedSum);

    const slices: ChartSlice[] = stats
      .filter((s) => s.counted > 0)
      .map((s) => ({
        name: s.cycle,
        value: s.counted,
        requiredInCycle: s.required,
        cyclePercent: s.percentage,
        color: s.color
      }));

    if (pending > 0 || slices.length === 0) {
      slices.push({
        name: 'Pendientes',
        value: pending > 0 ? pending : 1,
        color: PENDING_COLOR,
        isPending: true
      });
    }

    return {
      cycleStats: stats,
      totalCounted: countedSum,
      totalRawApproved: rawSum,
      overallPercent: overall,
      cbcCounted: cbc,
      obligatoriasLicCounted: obligLic,
      electivasCounted: electivas,
      chartData: slices
    };
  }, [materias, cycles, approvedSet]);

  return (
    <section
      aria-label="Progreso académico por ciclo"
      className="mb-8 p-5 sm:p-7 bg-white border border-ink/8 rounded-3xl"
    >
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-ink/6">
        <div className="flex items-start gap-3">
          <CheckCircle2 size={20} className="text-bordo shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-ink leading-tight">
              Avance en el Plan de Estudios 1985 y modificatorias
            </h3>
            <p className="text-xs text-muted mt-1 tabular-nums">
              CBC: <strong className="text-ink">{cbcCounted}/6</strong>
              <span aria-hidden="true" className="mx-1.5">·</span>
              Obligatorias Lic.: <strong className="text-ink">{obligatoriasLicCounted}/23</strong>
              <span aria-hidden="true" className="mx-1.5">·</span>
              Electivas: <strong className="text-ink">{electivasCounted}/5</strong>
              <span className="hidden sm:inline text-muted/80">
                {' '}— Total: 34 materias (más Idioma y Tesis)
              </span>
            </p>
          </div>
        </div>

        {totalRawApproved > 0 && (
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div
              role="group"
              aria-label="Filtrar materias por estado"
              className="inline-flex items-center p-1 bg-paper border border-ink/8 rounded-xl text-xs font-medium"
            >
              {(
                [
                  ['all', 'Todas'],
                  ['approved', `Aprobadas (${totalRawApproved})`],
                  ['pending', 'Pendientes']
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={onlyApprovedFilter === value}
                  onClick={() => onChangeApprovedFilter(value)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer tabular-nums',
                    onlyApprovedFilter === value
                      ? 'bg-ink text-white shadow-xs'
                      : 'text-muted hover:text-ink'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onResetProgress}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-muted hover:text-bordo transition-colors whitespace-nowrap cursor-pointer"
              title="Reiniciar materias marcadas"
            >
              <RotateCcw size={13} />
              Reiniciar
            </button>
          </div>
        )}
      </div>

      {/* Chart + Cycle Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Donut Chart */}
        <div className="md:col-span-4 flex flex-col items-center">
          <div className="relative w-full max-w-[225px] h-[220px]">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="64%"
                  outerRadius="92%"
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={totalCounted > 0 ? 2 : 0}
                  stroke="none"
                  isAnimationActive={true}
                  animationDuration={450}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<ProgressTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* Center KPI */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-ink tabular-nums leading-none">
                {overallPercent}%
              </span>
              <span className="text-[11px] font-semibold text-muted mt-1.5 tabular-nums">
                {totalCounted} / {TOTAL_REQUIRED_MATERIAS} materias
              </span>
            </div>
          </div>
          <p className="text-[11px] text-muted text-center mt-1">
            Guardado automáticamente en este dispositivo
          </p>
        </div>

        {/* Per-cycle progress bars & interactive cycle selector */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cycleStats.map((stat) => {
            const isSelected = selectedCycle === stat.cycle;
            const isElectiveOrPractice = stat.catalogTotal > stat.required;

            return (
              <button
                key={stat.cycle}
                type="button"
                onClick={() => onSelectCycle(stat.cycle)}
                className={cn(
                  'text-left p-3.5 rounded-2xl border transition-all group',
                  isSelected
                    ? 'bg-paper border-bordo/35 shadow-xs'
                    : 'bg-paper/50 border-ink/6 hover:border-ink/20 hover:bg-paper'
                )}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: stat.color }}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold text-ink truncate group-hover:text-bordo transition-colors">
                      {stat.cycle}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-ink tabular-nums shrink-0">
                    {stat.percentage}%
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-ink/8 overflow-hidden mb-1.5">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${stat.percentage}%`,
                      backgroundColor: stat.color
                    }}
                  />
                </div>

                <p className="text-[11px] text-muted tabular-nums">
                  {stat.counted} de {stat.required}{' '}
                  {stat.required === 1 ? 'requerida' : 'requeridas'}
                  {isElectiveOrPractice && (
                    <span className="text-muted/75"> · {stat.catalogTotal} opciones</span>
                  )}
                  {stat.extraPracticaApplied && (
                    <span className="text-bordo font-medium"> (+1 práctica)</span>
                  )}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
