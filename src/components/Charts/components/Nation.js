import React from 'react';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Nation = props => {
	let { nation, charactersArray } = props;

	const chartData = {
		labels: [...new Set(nation)],
		datasets: [
			{
				label: 'Nation',
				data: [...new Set(nation)].map(
					u =>
						charactersArray.filter(
							c =>
								c.data.name !== 'Traveler Geo' &&
								c.data.name !== 'Traveler Electro' &&
								c.data.name !== 'Traveler Dendro' &&
								c.data.name !== 'Traveler Hydro' &&
								c.data.name !== 'Traveler Pyro' &&
								c.data.name !== 'Traveler Cryo' &&
								c.data.nation.includes(u)
						).length
				),
				borderColor: ['#26a684', '#CFCFC4', '#9336b0', '#b68d07', '#4878a8'],
				backgroundColor: [
					'#26a684',
					'#CFCFC4',
					'#9336b0',
					'#b68d07',
					'#4878a8',
				],
			},
		],
	};

	return (
		<section>
			<h1>Nation</h1>
			<Chart type='pie' data={chartData} />
		</section>
	);
};

export default Nation;
