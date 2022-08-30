import React from 'react';

//? <----- Components ----->
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const AscensionStat = props => {
	const { ascensionStat, charactersArray } = props;

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
					'#7bb42d',
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
					'#7bb42d',
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
