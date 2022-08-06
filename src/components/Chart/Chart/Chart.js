import React from 'react'
import "./Chart.css"
import ChartBar from "../Charbar/ChartBar"

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximun = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
     {
        dataPoints.map(dataPoint => (
          <ChartBar key={dataPoint.label} label={dataPoint.label} maxValue={totalMaximun} value={dataPoint.value} />
        ))
     }
    </div>
  )
}

export default Chart