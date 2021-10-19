import React from 'react';
import CardComponent from '../Layout/CardComponent';
import CurrentEvents from '../../assets/Spiral_Abyss_Event_-_Peoples_Choice.jpg';
import UpcomingEvents from '../../assets/Spiral_Abyss_Event_-_Peoples_Choice.jpg';

const Events = () => {
	return (
		<CardComponent title='Current & Upcoming Events'>
			<div className='d-xl-flex'>
				<section className='p-3'>
					<h4>Current Events</h4>
					<img src={CurrentEvents} alt='' className='img-fluid' />
					<h4 className='pt-2'>September 01, 2021 ~ September 21, 2021</h4>
				</section>
				<section className='p-3'>
					<h4>Upcoming Events</h4>
					<img src={UpcomingEvents} alt='' className='img-fluid' />
					<h4 className='pt-2'>September 01, 2021 ~ September 21, 2021</h4>
				</section>
			</div>
		</CardComponent>
	);
};

export default Events;
