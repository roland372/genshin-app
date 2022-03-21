import React from 'react';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const TalentBook = props => {
	let { talentBook, charactersArray } = props;

	let newTalentBookArray = [...new Set(talentBook)].map(
		u => charactersArray.filter(c => c.data.talentBook.includes(u)).length
	);

	// remove last element, there was some weird bug and it had all elements for some reason
	newTalentBookArray.pop();

	const chartData = {
		labels: [...new Set(talentBook)],
		datasets: [
			{
				label: 'Talent Book',
				data: newTalentBookArray,
				borderColor: [
					'#26a684',
					'#26a684',
					'#9336b0',
					'#b68d07',
					'#26a684',
					'#b68d07',
					'#9336b0',
					'#b68d07',
					'#9336b0',
				],
				backgroundColor: [
					'#26a684',
					'#26a684',
					'#9336b0',
					'#b68d07',
					'#26a684',
					'#b68d07',
					'#9336b0',
					'#b68d07',
					'#9336b0',
				],
			},
		],
	};

	return (
		<section>
			<h1>TalentBook</h1>
			<Chart type='line' data={chartData} />
		</section>
	);
};

export default TalentBook;
