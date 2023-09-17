import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ data }) => {
  const totalMaximum = Math.max(...data.map(item => item.value))

  return (
    <div className='chart'>
      {data.map(item => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
        />
      ))}
    </div>
  )
}

export default Chart