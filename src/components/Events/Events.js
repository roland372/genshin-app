import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import CurrentEvents from './CurrentEvents';
import PastEvents from './PastEvents';

//? <----- Data ----->
import eventsData from '../../assets/data/Events/events.json';

//? <----- Custom Hooks ----->
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
