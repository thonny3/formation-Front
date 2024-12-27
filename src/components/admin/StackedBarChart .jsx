import React from 'react';
import ReactECharts from 'echarts-for-react';

const StackedBarChart = () => {
  const option = {
    title: {
      text: 'Stacked Bar Chart Example',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Sales', 'Profit'],
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Sales',
        type: 'bar',
        stack: 'total', // Stack series
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle: {
          color: '#4CAF50',
          borderRadius: [5, 5, 0, 0], // Rounded corners for top
        },
      },
      {
        name: 'Profit',
        type: 'bar',
        stack: 'total',
        data: [90, 140, 120, 60, 50, 80, 100],
        itemStyle: {
          color: '#2196F3',
          borderRadius: [5, 5, 0, 0], // Rounded corners for top
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};

export default StackedBarChart;
