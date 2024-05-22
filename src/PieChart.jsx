import React, { useRef } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";

const PieChart = ({ data, selectedTeam, setSelectedTeam, colors }) => {
	Chart.register(CategoryScale);
	const chartRef = useRef();

	const colorMap = {};
	data.forEach((item, index) => {
		colorMap[item.label] = colors[index];
	});

	const [chartData, setChartData] = useState({
		labels: data.map(item => item.label),
		datasets: [{
			data: data.map(item => item.value),
			backgroundColor: data.map(item => colorMap[item.label]),
		}]
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
	
	const onClick = (event) => {
		const elements = getElementAtEvent(chartRef.current, event);
		if (!elements.length) return;

		const { index } = elements[0];
		const label = data[index].label;

		if (selectedTeam === label) {
			setSelectedTeam(null);
		} else {
			setSelectedTeam(label);
		}
	};

	return (
		<div className='doughnut' style={{ width: '400px', height: '400px' }}>
			<Doughnut data={chartData} options={options} ref={chartRef} onClick={onClick} />
			<p className='country-selection'>{selectedTeam}</p>
		</div>
	);
};

export default PieChart;
