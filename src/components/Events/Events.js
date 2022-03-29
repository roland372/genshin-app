import React from 'react';

import Container from '../Layout/Container';

import CurrentEvents from './CurrentEvents';
import PastEvents from './PastEvents';

import eventsData from '../../assets/data/Events/events.json';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Events = () => {
	useDocumentTitle('Events');

	return (
		<Container>
			<CurrentEvents eventsData={eventsData} />
			<PastEvents eventsData={eventsData} />
		</Container>
	);
};

export default Events;
