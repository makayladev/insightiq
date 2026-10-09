import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import KpiCard from './components/KpiCard'
import PeriodFilter from './components/PeriodFilter'
import ChartCard from './components/ChartCard'
import RevenueChart from './components/RevenueChart'
import ExpensesChart from './components/ExpensesChart'
import CustomersChart from './components/CustomersChart'
import CsvUpload from './components/CsvUpload'
import { monthlyData, expenseCategories } from './data/mockData'
import type { MonthlyData } from './data/mockData'
import { computeKpis } from './utils/kpis'

function App() {
  const [data, setData] = useState<MonthlyData[]>(monthlyData)
  const [period, setPeriod] = useState(12)

  const filteredData = data.slice(-period)
  const kpis = computeKpis(data)

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <div className="page-top">
          <Header
            title="Overview"
            subtitle="How your business is performing this month"
          />
          <PeriodFilter value={period} onChange={setPeriod} />
        </div>

        <section className="kpi-grid">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </section>

        <section className="chart-grid">
          <ChartCard title="Revenue vs expenses">
            <RevenueChart data={filteredData} />
          </ChartCard>
          <ChartCard title="Expenses by category (sample)">
            <ExpensesChart data={expenseCategories} />
          </ChartCard>
          <ChartCard title="New customers per month" wide>
            <CustomersChart data={filteredData} />
          </ChartCard>
        </section>

        <CsvUpload
          onDataLoaded={setData}
          onReset={() => setData(monthlyData)}
        />
      </main>
    </div>
  )
}

export default App