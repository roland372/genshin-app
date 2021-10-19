import React from 'react';
import EventImage from '../../assets/Spiral_Abyss_Event_-_Peoples_Choice.jpg';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import Event from './Event';
import EventItem from './EventItem';

const Events = () => {
	return (
		<Container>
			<CardComponent title='Current Events'>
				<Event>
					<EventItem
						image={EventImage}
						name="Spiral Abyss Event - People's Choice"
						startDate='September 28, 2020'
						endDate='November 10, 2020'
					/>
				</Event>
			</CardComponent>
			<CardComponent title='Upcoming Events'>
				<Event>
					<EventItem
						image={EventImage}
						name='Spiral Abyss Event'
						startDate='September 28, 2020'
						endDate='November 10, 2020'
					/>
					<EventItem
						image={EventImage}
						name="Spiral Abyss Event - People's Choice"
						startDate='September 28, 2020'
						endDate='November 10, 2020'
					/>
				</Event>
			</CardComponent>
			<CardComponent title='Previous Events'>
				<Event>
					<EventItem
						image={EventImage}
						name="Spiral Abyss Event - People's Choice"
						startDate='September 28, 2020'
						endDate='November 10, 2020'
					/>
					<EventItem
						image={EventImage}
						name="Spiral Abyss Event - People's Choice"
						startDate='September 28, 2020'
						endDate='November 10, 2020'
					/>
				</Event>
			</CardComponent>
		</Container>
	);
};

export default Events;
