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
	const initial = { y: -10 };
	const initialReverse = { y: 10 };
	const animate = { y: 0 };
	const delay = 0.1;
	const type = 'spring';
	const bounce = 0.5;
	// const whileHover = { scale: 0.99 };

	return (
		<Container>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<GeneralInfo />
			</motion.div>
			<motion.div
				initial={initialReverse}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<CharacterDomains />
			</motion.div>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<WeaponDomains />
			</motion.div>
			<motion.div
				initial={initialReverse}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<CurrentBanners bannersData={props.bannersData} />
			</motion.div>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<CurrentEvents eventsData={props.eventsData} />
			</motion.div>
			<motion.div
				initial={initialReverse}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<Links />
			</motion.div>
		</Container>
	);
};

export default Homepage;
