import React from 'react';

import Container from '../../Layout/Container';

import TalentBooks from '../../../components/Database/Materials/Talent Books/TalentBooks';
import WeaponMaterials from '../../../components/Database/Materials/Weapon Ascension Materials/WeaponMaterials';

import charactersData from '../../../assets/data/Characters/characters.json';
import weaponsData from '../../../assets/data/Weapons/weapons.json';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Materials = () => {
	useDocumentTitle('Materials');

	return (
		<Container>
			<TalentBooks charactersData={charactersData} />
			<WeaponMaterials weaponsData={weaponsData} />
		</Container>
	);
};

export default Materials;
