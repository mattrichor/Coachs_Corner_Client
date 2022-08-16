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
    <Bar
      data={chartData}
      redraw={true}
      options={{
        maintainAspectRatio: false,

        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: true,
              drawBorder: false
            },
            ticks: { display: false }
          },
          y: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: { display: true }
          }
        },
        barThickness: 30,
        responsive: true
      }}
    />
  )
}

export default SkillChart
