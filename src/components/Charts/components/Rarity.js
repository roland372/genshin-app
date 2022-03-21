import React from 'react';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Rarity = props => {
	let { rarity, charactersArray } = props;

	// .rarity5bg {
	// 	background: linear-gradient(
	// 		-3deg,
	// 		rgba(105, 84, 83, 0.565) 0%,
	// 		rgba(161, 112, 78, 0.565) 39%,
	// 		rgba(228, 171, 82, 0.565) 100%
	// 	);
	// }

	// .rarity4bg {
	// 	background: linear-gradient(
	// 		-3deg,
	// 		rgba(89, 84, 130, 0.565) 0%,
	// 		rgba(120, 102, 157, 0.565) 39%,
	// 		rgba(183, 133, 201, 0.565) 100%
	// 	);
	// }

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
