import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import GeneralInfo from './GeneralInfo';
import CurrentBanners from '../Banners/CurrentBanners';
import CurrentEvents from '../Events/CurrentEvents';
import CharacterDomains from './CharacterDomains';
import WeaponDomains from './WeaponDomains';
import Links from './Links';
import { motion } from 'framer-motion/dist/framer-motion';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Homepage = props => {
	useDocumentTitle('Home');

	//* Animation variables
	const initialX = { x: 25 };
	const initialXReverse = { x: -25 };
	const animateX = { x: 0 };
	const delay = 0.1;
	const type = 'spring';
	const bounce = 0.5;
	// const whileHover = { scale: 0.99 };

	return (
		<Container>
			<motion.div
				initial={initialX}
				animate={animateX}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<GeneralInfo />
			</motion.div>
			<motion.div
				initial={initialXReverse}
				animate={animateX}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<CharacterDomains />
			</motion.div>
			<motion.div
				initial={initialX}
				animate={animateX}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<WeaponDomains />
			</motion.div>
			<motion.div
				initial={initialXReverse}
				animate={animateX}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<CurrentBanners bannersData={props.bannersData} />
			</motion.div>
			<motion.div
				initial={initialX}
				animate={animateX}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<CurrentEvents eventsData={props.eventsData} />
			</motion.div>
			<motion.div
				initial={initialXReverse}
				animate={animateX}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<Links />
			</motion.div>
		</Container>
	);
};

export default Homepage;
