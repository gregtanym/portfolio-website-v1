import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';
const BarChart = () => {
    
  return (
    <div>
        <Bar
        data={{
            labels: ['Javascript', 'React', 'Python', 'HTML & CSS', 'CSS Flexbox & Grid', 'Mircosoft Excel', 'Django/Django REST Framework', 'C', 'SQL', 'Flask'],
            datasets: [{
                label: 'Level of Proficiency',
                data: [5,5,5,4,4,3,3,3,2,2],
                backgroundColor: '#00a0ed',
            }]
        }}
        height={300}
        width={800}
        options={{
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                },]
            },
        }}
        />
    </div>
  )
}

export default BarChart