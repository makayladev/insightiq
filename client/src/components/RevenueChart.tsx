import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import type { MonthlyData } from '../data/mockData'
import { formatValue, formatCompact } from '../utils/format'

type RevenueChartProps = {
  data: MonthlyData[]
}

function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => formatCompact(value)} />
        <Tooltip formatter={(value) => formatValue(Number(value), 'currency')} />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Revenue"
          stroke="#4f46e5"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          name="Expenses"
          stroke="#dc2626"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default RevenueChart