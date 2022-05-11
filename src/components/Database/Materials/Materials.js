import React from 'react';

//? <----- Components ----->
import Container from '../../Layout/Container';
import TalentBooks from '../../../components/Database/Materials/Talent Books/TalentBooks';
import WeaponMaterials from '../../../components/Database/Materials/Weapon Ascension Materials/WeaponMaterials';
import BossMaterials from './Boss Materials/BossMaterials';

//? <----- Data ----->
import charactersData from '../../../assets/data/Characters/characters.json';
import weaponsData from '../../../assets/data/Weapons/weapons.json';
import characters from '../../../constants/characters';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Materials = () => {
	useDocumentTitle('Materials');

	return (
		<Container>
			<TalentBooks charactersData={charactersData} />
			<WeaponMaterials weaponsData={weaponsData} />
			<BossMaterials characters={characters} />
		</Container>
	);
};

export default Materials;
