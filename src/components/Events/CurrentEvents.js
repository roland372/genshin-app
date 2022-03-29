import React from 'react';
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
			<div className='table-responsive mx-3'>
				<table
					className='table table-dark table-striped table-sm table-hover align-middle'
					style={{ minWidth: '400px' }}
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
								<tr key={index}>
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
												className='link-info text-decoration-none'
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
