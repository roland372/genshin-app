import React from 'react';
import EventImage from '../../assets/Spiral_Abyss_Event_-_Peoples_Choice.jpg';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import Event from './Event';
import EventItem from './EventItem';
import data from '../../assets/data/Events/events.json';

const Events = () => {
	return (
		<Container>
			<CardComponent title='Current Events'>
				<Event>
					{data.currentEvents.map(e => {
						return (
							<EventItem
								name={e.name}
								link={e.link}
								image={e.image}
								startDate={e.startDate}
								endDate={e.endDate}
							/>
						);
					})}
				</Event>
			</CardComponent>
			<CardComponent title='Upcoming Events'>
				<Event>
					{data.upcomingEvents.map(e => {
						return (
							<EventItem
								name={e.name}
								link={e.link}
								image={e.image}
								startDate={e.startDate}
								endDate={e.endDate}
							/>
						);
					})}
				</Event>
			</CardComponent>
			<CardComponent title='Previous Events'>
				<Event>
					{data.pastEvents.map(e => {
						return (
							<EventItem
								name={e.name}
								link={e.link}
								image={e.image}
								startDate={e.startDate}
								endDate={e.endDate}
							/>
						);
					})}
				</Event>
			</CardComponent>
		</Container>
	);
};

export default Events;
