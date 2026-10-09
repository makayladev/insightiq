const options = [3, 6, 12]

type PeriodFilterProps = {
    value: number
    onChange: (months: number) => void
}

function PeriodFilter({ value, onChange }: PeriodFilterProps) {
    return (
        <div className="filter">
            {options.map((months) => (
                <button
                    key={months}
                    type="button"
                    className={value === months ? 'active' : ''}
                    onClick={() => onChange(months)}
                >
                    {months} months
                </button>
            ))}
        </div>
    )
}

export default PeriodFilter