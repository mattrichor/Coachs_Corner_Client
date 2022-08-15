import '../Feed.css'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import React from 'react'

ChartJs.register(CategoryScale, LinearScale, BarElement)

const SkillChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  )
}

export default SkillChart
