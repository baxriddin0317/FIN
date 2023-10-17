import React from 'react';
import DoughnutChart from '../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../utils/Utils';

export function CircleChart() {

  const chartData = {
    labels: ['<18', '18-24', '24-36', '>35'],
    datasets: [
      {
        label: 'Visit By Age Category',
        data: [
          30, 50, 5, 15,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.sky[400],
          tailwindConfig().theme.colors.rose[500],
          tailwindConfig().theme.colors.emerald[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.sky[500],
          tailwindConfig().theme.colors.rose[600],
          tailwindConfig().theme.colors.emerald[600],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full md:col-span-1 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}