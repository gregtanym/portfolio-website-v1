import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';
const BarChart = () => {
    
  return (
    <div>
        <Bar className='barchart'
        data={{
            labels: ['Javascript', 'React', 'Python', 'HTML & CSS', 'Django/Django REST Framework', 'CSS Flexbox & Grid', 'Mircosoft Excel', 'C', 'SQL', 'Flask'],
            datasets: [{
                label: 'Level of Proficiency',
                data: [5,5,5,4,4,4,3,3,2,2],
                backgroundColor: '#00a0ed',
            }]
        }}
        style={{height: '300px', width:'800px'}}
        // height={300}
        // width={800}
        // options={{
        //     maintainAspectRatio: false,
        //     scales: {
        //         yAxes: [{
        //             ticks: {
        //                 beginAtZero: true,
        //             },
        //         },]
        //     },
        // }}
        options={{
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }}
        />
    </div>
  )
}

export default BarChart