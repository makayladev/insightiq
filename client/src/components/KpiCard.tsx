import type { Kpi } from '../data/mockData'
import { formatValue } from '../utils/format'

type KpiCardProps = {
  kpi: Kpi
}

function KpiCard({ kpi }: KpiCardProps) {
  const isPositive = kpi.change >= 0

  return (
    <article className="kpi-card">
      <p className="kpi-label">{kpi.label}</p>
      <p className="kpi-value">{formatValue(kpi.value, kpi.format)}</p>
      <p className={isPositive ? 'kpi-change positive' : 'kpi-change negative'}>
        {isPositive ? '▲' : '▼'} {Math.abs(kpi.change)}% vs last month
      </p>
    </article>
  )
}

export default KpiCard