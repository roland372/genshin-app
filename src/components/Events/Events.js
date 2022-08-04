import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import CurrentEvents from './CurrentEvents';
import PastEvents from './PastEvents';
import { motion } from 'framer-motion/dist/framer-motion';

//? <----- Data ----->
import eventsData from '../../assets/data/Events/events.json';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Events = () => {
	useDocumentTitle('Events');

	//* Animation variables
	const initial = { y: -10 };
	const initialReverse = { y: 10 };
	const animate = { y: 0 };
	const delay = 0.1;
	const type = 'spring';
	const bounce = 0.5;

	return (
		<Container>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<CurrentEvents eventsData={eventsData} />
			</motion.div>
			<motion.div
				initial={initialReverse}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<PastEvents eventsData={eventsData} />
			</motion.div>
		</Container>
	);
};

export default Events;
