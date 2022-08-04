import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import CurrentBanners from './CurrentBanners';
import PastBanners from './PastBanners';
import { motion } from 'framer-motion/dist/framer-motion';

//? <----- Data ----->
import bannersData from '../../assets/data/Banners/banners.json';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Banners = () => {
	useDocumentTitle('Banners');

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
				<CurrentBanners bannersData={bannersData} />
			</motion.div>
			<motion.div
				initial={initialReverse}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<PastBanners bannersData={bannersData} />
			</motion.div>
		</Container>
	);
};

export default Banners;
