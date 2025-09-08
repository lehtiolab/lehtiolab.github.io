// PieChart.jsx
import React, { useRef, useMemo } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';

const PieChart = ({ data, setSelectedTeam }) => {
	Chart.register(CategoryScale);
	const chartRef = useRef();

	const labels = useMemo(() => data.map(d => d.label), [data]);
	const values = useMemo(() => data.map(d => d.value), [data]);
	const colors = useMemo(() => data.map(d => d.color), [data]);
	const bgKeys = useMemo(() => data.map(d => d.bg), [data]);

	const chartData = {
		labels,
		datasets: [{
		data: values,
		backgroundColor: colors,
		borderWidth: 0
		}]
	};

	const options = {
		animation: false,
		maintainAspectRatio: false,
		aspectRatio: 1,
		plugins: { legend: { display: false } }
	};

	const onClick = (event) => {
		const elems = getElementAtEvent(chartRef.current, event);
		if (!elems.length) return;
		const { index } = elems[0];
		const bg = bgKeys[index];
		setSelectedTeam(prev => (prev === bg ? null : bg));
	};

	return (
		<div className='doughnut' style={{ width: '400px', height: '400px' }}>
		<Doughnut ref={chartRef} data={chartData} options={options} onClick={onClick} />
		</div>
	);
};

export default PieChart;
