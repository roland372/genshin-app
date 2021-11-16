import React from 'react';
import CardComponent from '../Layout/CardComponent';

import eventsData from '../../assets/data/Events/events.json';

const Events = () => {
	const { currentEvents, upcomingEvents } = eventsData;
	return (
		<CardComponent title='Current & Upcoming Events'>
			<div className='d-lg-flex'>
				<section className='ps-3 pe-1 border m-2'>
					<h4>Current Events</h4>
					{currentEvents.map((e, index) => {
						return (
							<div key={index}>
								<img
									src={currentEvents[index].image}
									alt=''
									className='img-fluid'
								/>
								<h4 className='pt-2'>
									September 01, 2021 ~ September 21, 2021
								</h4>
							</div>
						);
					})}
				</section>

				<section className='pe-3 ps-1 border m-2'>
					<h4>Upcoming Events</h4>
					{upcomingEvents.map((e, index) => {
						return (
							<div key={index}>
								<img
									src={currentEvents[index].image}
									alt=''
									className='img-fluid'
								/>
								<h4 className='pt-2'>
									September 01, 2021 ~ September 21, 2021
								</h4>
							</div>
						);
					})}
				</section>
			</div>
		</CardComponent>
	);
};

export default Events;
