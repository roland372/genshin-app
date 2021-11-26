import React from 'react';
import EventItem from './EventItem';
import CardComponent from '../Layout/CardComponent';

const CurrentEvents = props => {
	return (
		<CardComponent title='Current Events'>
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
					<tbody>
						{props.eventsData.currentEvents.map((e, index) => {
							return (
								<EventItem
									key={index}
									name={e.name}
									link={e.link}
									image={e.image}
									startDate={e.startDate}
									endDate={e.endDate}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		</CardComponent>
	);
};

export default CurrentEvents;
