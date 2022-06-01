import React from 'react';

//? <----- Components ----->
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const CharacterStats = props => {
	const { charactersArray } = props;

	charactersArray.sort((a, b) => (a.DEF > b.DEF ? 1 : -1));

	const chartData = {
		labels: charactersArray.map(c => c.name),
		datasets: [
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
