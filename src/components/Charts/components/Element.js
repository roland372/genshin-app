import React from 'react';

//? <----- Components ----->
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Element = props => {
	const { element, charactersArray } = props;

	const chartData = {
		labels: [...new Set(element)],
		datasets: [
			{
				label: 'Elements',
				data: [...new Set(element)].map(
					u => charactersArray.filter(c => c.data.element.includes(u)).length
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
			<h1>Element</h1>
			<Chart type='pie' data={chartData} />
		</section>
	);
};

export default Element;
