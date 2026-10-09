import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { MonthlyData } from '../data/mockData'
import { parseMonthlyCsv } from '../utils/csv'

type CsvUploadProps = {
  onDataLoaded: (data: MonthlyData[]) => void
  onReset: () => void
}

function CsvUpload({ onDataLoaded, onReset }: CsvUploadProps) {
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    const result = await parseMonthlyCsv(file)

    if (result.ok) {
      onDataLoaded(result.data)
      setIsError(false)
      setMessage(`Loaded ${result.data.length} months from ${file.name}`)
    } else {
      setIsError(true)
      setMessage(result.error)
    }

    event.target.value = ''
  }

  function handleReset() {
    onReset()
    setIsError(false)
    setMessage('Showing sample data')
  }

  return (
    <section className="upload-card">
      <div className="upload-text">
        <h2>Import your data</h2>
        <p>
          Upload a CSV with the columns month, revenue, expenses and newCustomers.{' '}
          <a href="/sample-data.csv" download>
            Download a sample file
          </a>
        </p>
      </div>

      <div className="upload-actions">
        <label className="button-primary">
          Choose CSV file
          <input type="file" accept=".csv" onChange={handleFileChange} hidden />
        </label>
        <button type="button" className="button-secondary" onClick={handleReset}>
          Reset to sample data
        </button>
      </div>

      {message && (
        <p className={isError ? 'upload-message error' : 'upload-message success'}>
          {message}
        </p>
      )}
    </section>
  )
}

export default CsvUpload