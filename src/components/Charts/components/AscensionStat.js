import React from 'react';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const AscensionStat = props => {
	let { ascensionStat, charactersArray } = props;

	// .text-anemo {
	// 	color: #26a684;
	// }

	// .text-cryo {
	// 	color: #4878a8;
	// }

	// .text-electro {
	// 	color: #9336b0;
	// }

	// .text-geo {
	// 	color: #b68d07;
	// }

	// .text-hydro {
	// 	color: #0b4dda;
	// }

	// .text-pyro {
	// 	color: #bf2818;
	// }

	const chartData = {
		labels: [...new Set(ascensionStat)],
		datasets: [
			{
				label: 'Ascension Stat',
				data: [...new Set(ascensionStat)].map(
					u => charactersArray.filter(c => c.ascension.includes(u)).length
				),
				borderColor: [
					'#b68d07',
					'#4878a8',
					'rgba(255, 99, 132, 0.5)',
					'rgba(255, 99, 132, 1)',
					'rgb(119, 221, 119, 0.5)',
					'#9336b0',
					'#b19cd9',
					'#000000',
					'#4878a8',
					'#26a684',
					'#bf2818',
					'#b68d07',
					'#ffffff',
					'#0b4dda',
					'#26a684',
				],
				backgroundColor: [
					'#b68d07',
					'#4878a8',
					'rgba(255, 99, 132, 0.5)',
					'rgba(255, 99, 132, 1)',
					'rgb(119, 221, 119, 0.5)',
					'#9336b0',
					'#b19cd9',
					'#000000',
					'#4878a8',
					'#26a684',
					'#bf2818',
					'#b68d07',
					'#ffffff',
					'#0b4dda',
					'#26a684',
				],
			},
		],
	};

	return (
		<section>
			<h1>AscensionStat</h1>
			<Chart type='bar' data={chartData} />
		</section>
	);
};

export default AscensionStat;
