import React from 'react';

//? <----- Components ----->
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Rarity = props => {
	const { rarity, charactersArray } = props;

	const chartData = {
		labels: [...new Set(rarity)],
		datasets: [
			{
				label: 'Rarity',
				data: [...new Set(rarity)].map(
					u =>
						charactersArray.filter(c => c.data.rarity.toString().includes(u))
							.length
				),
				borderColor: [
					'rgba(228, 171, 82, 0.565)',
					'rgba(183, 133, 201, 0.565)',
				],
				backgroundColor: [
					'rgba(228, 171, 82, 0.565)',
					'rgba(183, 133, 201, 0.565)',
				],
			},
		],
	};

	return (
		<section>
			<h1>Rarity</h1>
			<Chart type='pie' data={chartData} />
		</section>
	);
};

export default Rarity;
