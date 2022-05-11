import React from 'react';

//? <----- Components ----->
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Sex = props => {
	const { sex, charactersArray } = props;

	const chartData = {
		labels: [...new Set(sex.filter(s => s !== "Player's Choice"))],
		datasets: [
			{
				label: 'Sex',
				data: [...new Set(sex)].map(
					u =>
						charactersArray.filter(
							c =>
								c.data.name !== 'Traveler (Anemo)' &&
								c.data.name !== 'Traveler (Geo)' &&
								c.data.name !== 'Traveler (Electro)' &&
								c.data.name !== 'Traveler (Dendro)' &&
								c.data.name !== 'Traveler (Hydro)' &&
								c.data.name !== 'Traveler (Pyro)' &&
								c.data.name !== 'Traveler (Cryo)' &&
								c.data.sex.includes(u)
						).length
				),
				borderColor: [
					'#b68d07',
					'#4878a8',
					'#bf2818',
					'#0b4dda',
					'#9336b0',
					'#26a684',
				],
				backgroundColor: [
					'#b68d07',
					'#4878a8',
					'#bf2818',
					'#0b4dda',
					'#9336b0',
					'#26a684',
				],
			},
		],
	};

	return (
		<section>
			<h1>Sex</h1>
			<Chart type='pie' data={chartData} />
		</section>
	);
};

export default Sex;
