type ReportActionsProps = {
    onDownloadCsv: () => void
}

function ReportActions({ onDownloadCsv }: ReportActionsProps) {
    return (
        <div className="report-actions">
            <button type="button" className="button-secondary" onClick={onDownloadCsv}>
                Download CSV
            </button>
            <button type="button" className="button-secondary" onClick={() => window.print()}>
                Save as PDF
            </button>
        </div>
    )
}

export default ReportActions