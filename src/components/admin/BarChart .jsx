import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
  const option = {
    title: {
      text: 'Leçon',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Sales'],
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Sales',
        type: 'bar', // Change to 'bar' for a bar chart
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle: {
          color: '#4C51BF', // Customize bar color
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};

export default BarChart;
