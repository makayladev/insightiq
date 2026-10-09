import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import KpiCard from './components/KpiCard'
import PeriodFilter from './components/PeriodFilter'
import ReportActions from './components/ReportActions'
import ChartCard from './components/ChartCard'
import RevenueChart from './components/RevenueChart'
import ExpensesChart from './components/ExpensesChart'
import CustomersChart from './components/CustomersChart'
import CsvUpload from './components/CsvUpload'
import { monthlyData, expenseCategories } from './data/mockData'
import type { MonthlyData } from './data/mockData'
import { computeKpis } from './utils/kpis'
import { buildReportCsv, downloadFile } from './utils/export'

function App() {
  const [data, setData] = useState<MonthlyData[]>(monthlyData)
  const [period, setPeriod] = useState(12)

  const filteredData = data.slice(-period)
  const kpis = computeKpis(data)
  const latestMonth = data[data.length - 1].month
  const today = new Date().toISOString().slice(0, 10)

  function handleDownloadCsv() {
    const csv = buildReportCsv(filteredData)
    downloadFile(csv, `insightiq-report-${period}-months-${today}.csv`, 'text/csv')
  }

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <p className="print-only">
          InsightIQ report, generated {today}, covering the last {filteredData.length} months
        </p>

        <div className="page-top">
          <Header
            title="Overview"
            subtitle={`Latest month: ${latestMonth}, showing the last ${filteredData.length} months`}
          />
          <div className="page-actions">
            <ReportActions onDownloadCsv={handleDownloadCsv} />
            <PeriodFilter value={period} onChange={setPeriod} />
          </div>
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