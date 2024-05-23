import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GrowthChart = () => {
  const data = {
    labels: ['2020', '2021', '2022'],
    datasets: [
      {
        label: 'Physics',
        data: [73.905, 98.437, 98.9275],
        borderColor: '#FF6384',
        pointRadius: 7,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        
      },
      {
        label: 'Chemistry',
        data: [70, 90, 100],
        borderColor: '#36A2EB',
        pointRadius: 7,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Combined Maths',
        data: [60, 80, 95],
        borderColor: '#FFCE56',
        pointRadius: 7,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      },
      {
        label: 'Biology',
        data: [65, 85, 100],
        borderColor: '#4BC0C0',
        pointRadius: 7,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: 'Chakra Petch, sans-serif',
            color: '#fff',
          }
        }
        
      },
      title: {
        display: false,
        text: 'Pass Percentage Growth Over Three Batches (2020-2022)',
        font: {
          size: 32,
          family: 'Chakra Petch, sans-serif',
          color: '#fff',
        }
      },
      tooltip: {
        bodyFont: {
          size: 14,
          family: 'Chakra Petch, sans-serif',
          color: '#fff',
        },
        titleFont: {
          size: 16,
          family: 'Chakra Petch, sans-serif',
          color: '#fff',
        },
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
            family: 'Chakra Petch, sans-serif',
            color: '#fff',
          }
        },
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 16,
            family: 'Chakra Petch, sans-serif',
            color: '#fff',
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 14,
            family: 'Chakra Petch, sans-serif',
            color: '#fff',
          }
        },
        title: {
          display: true,
          text: 'Pass Percentage',
          font: {
            size: 16,
            family: 'Chakra Petch, sans-serif',
            color: '#fff',
          }
        }
      }
    }
  };

  return <div className='section3' data-aos="fade-up">
    <h1 className='.section-title'>
    Pass Percentage Growth Over Three Batches (2020-2022)
    </h1>
    <Line data={data} options={options} />
    </div>;
};

export default GrowthChart;
