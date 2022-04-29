import React from 'react';

import Container from '../Layout/Container';

import CurrentEvents from './CurrentEvents';
import PastEvents from './PastEvents';

import eventsData from '../../assets/data/Events/events.json';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Events = () => {
	useDocumentTitle('Events');

	const gotoVersion = version =>
		window.scrollTo({
			top: version.current.offsetTop - 70,
			behavior: 'smooth',
		});

	return (
		<Container>
			<CurrentEvents eventsData={eventsData} />
			<PastEvents eventsData={eventsData} gotoVersion={gotoVersion} />
		</Container>
	);
};

export default Events;
