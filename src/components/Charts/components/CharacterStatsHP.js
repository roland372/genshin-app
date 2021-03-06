import React from 'react';

//? <----- Components ----->
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const CharacterStatsHP = props => {
	const { charactersArray } = props;

	charactersArray.sort((a, b) => (a.HP > b.HP ? 1 : -1));

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
