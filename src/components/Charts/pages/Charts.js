import React from 'react';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import Element from '../components/Element';
import Weapon from '../components/Weapon';
import Nation from '../components/Nation';
import Rarity from '../components/Rarity';
import Sex from '../components/Sex';
import TalentBook from '../components/TalentBook';
import AscensionStat from '../components/AscensionStat';
import CharacterStatsATKDEF from '../components/CharacterStatsATKDEF';
import CharacterStatsHP from '../components/CharacterStatsHP';

import characters from '../../../constants/characters';
import charactersData from '../../../assets/data/Characters/characters.json';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Charts = () => {
	useDocumentTitle('Charts');

	const charactersArray = characters.map(character => character);
	const ascensionStat = charactersData.characters.map(
		character => character.ascension
	);
	const element = charactersData.characters.map(character => character.element);
	const nation = charactersData.characters.map(character => character.nation);
	const rarity = charactersData.characters.map(character => character.rarity);
	const sex = charactersData.characters.map(character => character.sex);
	const talentBook = charactersData.characters.map(
		character => character.talentBook
	);
	const weapon = charactersData.characters.map(character => character.weapon);

	return (
		<Container>
			<CardComponent title='Charts'>
				<section
					className='m-2 p-2'
					// style={{ width: '99%' }}
				>
					<div>
						<CharacterStatsATKDEF
							ascensionStat={ascensionStat}
							charactersArray={charactersData.characters}
						/>
						<CharacterStatsHP
							ascensionStat={ascensionStat}
							charactersArray={charactersData.characters}
						/>
					</div>
					<div
						className='m-2 p-2 d-flex flex-wrap col-lg-12 
					align-items-center justify-content-around'
					>
						<Element element={element} charactersArray={charactersArray} />
						<Weapon weapon={weapon} charactersArray={charactersArray} />
						<Rarity rarity={rarity} charactersArray={charactersArray} />
						<Sex sex={sex} charactersArray={charactersArray} />
						<Nation nation={nation} charactersArray={charactersArray} />
					</div>
					<AscensionStat
						ascensionStat={ascensionStat}
						charactersArray={charactersData.characters}
					/>
					<TalentBook
						talentBook={talentBook}
						charactersArray={charactersArray}
					/>
				</section>
			</CardComponent>
		</Container>
	);
};

export default Charts;
