import React from 'react';
import Container from '../Layout/Container';
import eventsData from '../../assets/data/Events/events.json';
import CurrentEvents from './CurrentEvents';
import PastEvents from './PastEvents';

const Events = () => {
	return (
		<Container>
			<CurrentEvents eventsData={eventsData} />
			<PastEvents eventsData={eventsData} />
		</Container>
	);
};

export default Events;
