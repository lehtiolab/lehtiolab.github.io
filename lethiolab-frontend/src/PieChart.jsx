import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";

const PieChart = ({ data, selectedCountry, setSelectedCountry }) => {
	Chart.register(CategoryScale);
	const chartRef = useRef();

	const [chartData, setChartData] = useState({
		data: {
			labels: data.map(item => item.label),
			datasets: [{
				data: data.map(item => item.value),
			}]
		},
	});

	const options = {
		animation: false,
		maintainAspectRatio: false,
  		aspectRatio: 1,
		plugins: {
			legend: {
				display: false,
			}
		}
	  };

	const returnElementAtEvent = (element) => {
		if (!element.length) return;
	
		const {index } = element[0];
		const label = data[index].label;
		if (selectedCountry === label) {
			setSelectedCountry(null);
		} else {
			setSelectedCountry(label);
		}
	  };
	
	  const onClick = (event) => {
		returnElementAtEvent(getElementAtEvent(chartRef.current, event));
	  }

	  
	  

  return (
	<div style={{ width: '400px', height: '400px' }}>
    	<Doughnut data={chartData.data} options={options} ref={chartRef} onClick={onClick} />
 	</div>
  );
};

export default PieChart;