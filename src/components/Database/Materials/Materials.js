import React from 'react';

//? <----- Components ----->
import Container from '../../Layout/Container';
import TalentBooks from '../../../components/Database/Materials/Talent Books/TalentBooks';
import WeaponMaterials from '../../../components/Database/Materials/Weapon Ascension Materials/WeaponMaterials';
import BossMaterials from './Boss Materials/BossMaterials';
import { motion } from 'framer-motion/dist/framer-motion';

//? <----- Data ----->
import charactersData from '../../../assets/data/Characters/characters.json';
import weaponsData from '../../../assets/data/Weapons/weapons.json';
import characters from '../../../constants/characters';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Materials = () => {
	useDocumentTitle('Materials');

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
				<TalentBooks charactersData={charactersData} />
			</motion.div>
			<motion.div
				initial={initialReverse}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<WeaponMaterials weaponsData={weaponsData} />
			</motion.div>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: delay, type: type, bounce: bounce }}
			>
				<BossMaterials characters={characters} />
			</motion.div>
		</Container>
	);
};

export default Materials;
