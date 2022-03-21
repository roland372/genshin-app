import React from 'react';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const CharacterStats = props => {
	let { charactersArray } = props;

	const chartData = {
		labels: charactersArray.map(c => c.name),
		datasets: [
			{
				label: 'ATK',
				data: charactersArray.map(c => c.ATK),
				fill: true,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'DEF',
				data: charactersArray.map(c => c.DEF),
				fill: true,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return (
		<section>
			<h1>Character Stats</h1>
			<Chart type='line' data={chartData} />
		</section>
	);
};

export default CharacterStats;
