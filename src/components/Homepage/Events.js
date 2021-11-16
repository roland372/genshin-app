import React from 'react';
import CardComponent from '../Layout/CardComponent';

const Events = props => {
	return (
		<CardComponent title='Current & Upcoming Events'>
			<div className='d-lg-flex'>
				<section className='ps-3 pe-1 border m-2'>
					<h4 className='text-info'>Current Events</h4>
					{props.eventsData.currentEvents.map((e, index) => {
						return (
							<div key={index}>
								<a
									href={e.link}
									target='_blank'
									rel='noreferrer'
									className='link-info text-decoration-none'
								>
									<img src={e.image} alt='' className='img-fluid' />
								</a>
								<h4 className='pt-2'>
									September 01, 2021 ~ September 21, 2021
								</h4>
							</div>
						);
					})}
				</section>
				<section className='pe-3 ps-1 border m-2'>
					<h4 className='text-info'>Upcoming Events</h4>
					{props.eventsData.upcomingEvents.map((e, index) => {
						return (
							<div key={index}>
								<a
									href={e.link}
									target='_blank'
									rel='noreferrer'
									className='link-info text-decoration-none'
								>
									<img src={e.image} alt='' className='img-fluid' />
								</a>
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
