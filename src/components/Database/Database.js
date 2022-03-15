import React from 'react';

import Container from '../Layout/Container';

import Weapons from './Weapons/Weapons';
import TalentBooks from './Materials/Talent Books/TalentBooks';
import WeaponMaterials from './Materials/Weapon Ascension Materials/WeaponMaterials';

import charactersData from '../../assets/data/Characters/characters.json';
import weaponsData from '../../assets/data/Weapons/weapons.json';

const database = () => {
	return (
		<Container>
			<Weapons />
			<TalentBooks charactersData={charactersData} />
			<WeaponMaterials weaponsData={weaponsData} />
		</Container>
	);
};

export default database;
