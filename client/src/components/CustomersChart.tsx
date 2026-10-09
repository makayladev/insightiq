import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import type { MonthlyData } from '../data/mockData'

type CustomersChartProps = {
  data: MonthlyData[]
}

function CustomersChart({ data }: CustomersChartProps) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="newCustomers" name="New customers" fill="#4f46e5" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CustomersChart