import React from 'react';

//? <----- Components ----->
import CardComponent from '../Layout/CardComponent';

const CurrentEvents = props => {
	let today;
	let objToday = new Date();
	let dayOfMonth =
			today + (objToday.getDate() < 10)
				? '0' + objToday.getDate()
				: objToday.getDate(),
		months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
	let curMonth = months[objToday.getMonth()];
	let curYear = objToday.getFullYear();
	today = curMonth + ' ' + dayOfMonth + ', ' + curYear;

	// console.log(Date.parse(today));

	return (
		<CardComponent title='Current Events'>
			<div className='table-responsive mx-2 rounded'>
				<table
					className='table table-sm bg-secondary-medium text-color table-striped align-middle table-borderless'
					style={{ minWidth: '400px' }}
				>
					<thead className='bg-primary-dark'>
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
								<tr key={index} className='text-color'>
									<td
										style={{
											width: '400px',
										}}
									>
										<img src={e.image} className='img-fluid' alt='' />
									</td>
									<td>
										<h6>
											<a
												href={e.link}
												target='_blank'
												rel='noreferrer'
												className='link-color'
											>
												{e.name}
											</a>
										</h6>
									</td>
									<td>
										<h6>{e.startDate}</h6>
									</td>
									<td>
										<h6>
											{Date.parse(today) > Date.parse(e.endDate) ? (
												<div className='text-pyro'>Event Ended</div>
											) : (
												<div className='text-anemo'>{e.endDate}</div>
											)}
										</h6>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</CardComponent>
	);
};

export default CurrentEvents;
