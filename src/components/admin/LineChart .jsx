import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = () => {
  const option = {
    title: {
      text: 'Line Chart Example'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Sales']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [120, 200, 150, 80, 70, 110, 130],
        smooth: true // Optional: makes the line smooth
      }
    ]
  };

  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};

export default LineChart;
