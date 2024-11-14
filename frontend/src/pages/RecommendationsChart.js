import React, { useRef, useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, PieController);

function RecommendationsChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    const chartInstance = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: data.map((item) => item.solution),
        datasets: [
          {
            label: 'Solution Percentage',
            data: data.map((item) => item.percentage),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Keep aspect ratio consistent
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    chartRef.current.chartInstance = chartInstance;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div style={{ width: '350px', height: '350px', margin: '0 auto' }}> {/* Fixed container size */}
      <canvas ref={chartRef} style={{ display: 'block', maxWidth: '100%', maxHeight: '150%' }} />
    </div>
  );
}

export default RecommendationsChart;
