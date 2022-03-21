import React from 'react';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const CharacterStatsHP = props => {
	let { charactersArray } = props;

	const chartData = {
		labels: charactersArray.map(c => c.name),
		datasets: [
			{
				label: 'HP',
				data: charactersArray.map(c => c.HP),
				fill: true,
				borderColor: 'rgb(119, 221, 119)',
				backgroundColor: 'rgb(119, 221, 119, 0.5)',
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

export default CharacterStatsHP;
