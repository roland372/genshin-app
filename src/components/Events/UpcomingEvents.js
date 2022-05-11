import React from 'react';

//? <----- Components ----->
import CardComponent from '../Layout/CardComponent';

const UpcomingEvents = () => {
	return (
		<CardComponent title='Past Events'>
			<div className='table-responsive mx-3'>
				<table
					className='table table-dark table-striped table-sm align-middle'
					style={{ minWidth: '700px' }}
				>
					<thead>
						<tr>
							<th scope='col'>Image</th>
							<th scope='col'>Name</th>
							<th scope='col'>Start</th>
							<th scope='col'>End</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</CardComponent>
	);
};

export default UpcomingEvents;
