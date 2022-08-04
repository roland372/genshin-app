import React from 'react';

//? <----- Components ----->
import CardComponent from '../Layout/CardComponent';
import { motion } from 'framer-motion/dist/framer-motion';

const CurrentEvents = props => {
	//* Animation variables
	const initial = { x: 20 };
	const initialReverse = { x: -20 };
	const animate = { x: 0 };

	//* get current date and format it
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
										<motion.div initial={initialReverse} animate={animate}>
											<img src={e.image} className='img-fluid' alt='' />
										</motion.div>
									</td>
									<td>
										<motion.div initial={initial} animate={animate}>
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
										</motion.div>
									</td>
									<td>
										<motion.div initial={initial} animate={animate}>
											<h6>{e.startDate}</h6>
										</motion.div>
									</td>
									<td>
										<motion.div initial={initial} animate={animate}>
											<h6>
												{Date.parse(today) > Date.parse(e.endDate) ? (
													<div className='text-pyro'>Event Ended</div>
												) : (
													<div className='text-anemo'>{e.endDate}</div>
												)}
											</h6>
										</motion.div>
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
