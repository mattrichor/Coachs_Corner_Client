import '../Feed.css'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import React from 'react'

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const SkillChart = ({ chartData }) => {
  return (
    <div className="chart">
      {chartData !== {} ? (
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {}
          }}
        />
      ) : (
        <span>Loading Chart, Please Wait...</span>
      )}
    </div>
  )
}

export default SkillChart
