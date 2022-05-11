import React from 'react';

//? <----- Components ----->
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Weapon = props => {
	const { weapon, charactersArray } = props;

	const chartData = {
		labels: [...new Set(weapon)],
		datasets: [
			{
				label: 'Weapons',
				data: [...new Set(weapon)].map(
					u => charactersArray.filter(c => c.data.weapon.includes(u)).length
				),
				borderColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
				backgroundColor: [
					'#003f5c',
					'#58508d',
					'#bc5090',
					'#ff6361',
					'#ffa600',
				],
			},
		],
	};

	return (
		<section>
			<h1>Weapon</h1>
			<Chart type='pie' data={chartData} />
		</section>
	);
};

export default Weapon;
