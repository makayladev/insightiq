import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import type { ExpenseCategory } from '../data/mockData'
import { formatValue } from '../utils/format'

const COLORS = ['#4f46e5', '#06b6d4', '#f59e0b', '#10b981', '#ec4899', '#6b7280']

type ExpensesChartProps = {
  data: ExpenseCategory[]
}

function ExpensesChart({ data }: ExpensesChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => formatValue(Number(value), 'currency')} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default ExpensesChart