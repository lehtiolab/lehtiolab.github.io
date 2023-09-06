import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import Loader from './Loader'

const pieOptions = {
  title: '',
  pieHole: 0.6,
  backgroundColor: 'transparent',
  legend: 'none'
};

const PieChart = ({ data, setSelectedCountry }) => {
  const [selectedSlice, setSelectedSlice] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrames = [];
    if (selectedSlice !== null) {
      for (let i = 0.01; i <= 0.1; i += 0.01) {
        const timeout = setTimeout(() => setOffset(i), i * 1000);
        animationFrames.push(timeout);
      }
    } else {
      setOffset(0);
    }

    return () => animationFrames.forEach((t) => clearTimeout(t));
  }, [selectedSlice]);

  const chartEvents = [
    {
      eventName: 'select',
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        const sliceIndex = selection.length > 0 ? selection[0].row : null;
    
        // Check if the selected slice is the same as the previously selected one
        if (sliceIndex === selectedSlice) {
          // Reset the selection
          chart.setSelection([]);
          
          // Reset the selected country if needed
          setSelectedCountry(null);
          
          // Exit early since the selection was reset
          return;
        }
    
        setSelectedSlice(sliceIndex);
        if (sliceIndex !== null) {
          const selectedDataElement = data[sliceIndex + 1][0];
          setSelectedCountry(selectedDataElement);
        }
      }
    },
    {
      eventName: 'click',
      callback: ({ chartWrapper }) => {
        chartWrapper.getChart().clearChart();
      }
    }
  ];

  const dynamicOptions = {
    ...pieOptions,
    slices: selectedSlice !== null ? { [selectedSlice]: { offset } } : {}
  };

  
  return (
	<Chart
		width={'600px'}
		height={'320px'}
		chartType="PieChart"
		loader={<Loader />}
		data={data}
		options={dynamicOptions}
		chartEvents={chartEvents}
		rootProps={{ 'data-testid': '3' }}
	/>
  )
}

export default PieChart;