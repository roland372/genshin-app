import React from 'react';
import Select from 'react-select';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import charactersData from '../../assets/data/Characters/characters.json';
import Materials from './Materials';
import CharacterCard from './CharacterCard';

// select array
const characterNames = [];

charactersData.characters.map(c => {
	return characterNames.push({ value: c.name, label: c.name });
});

const FarmingPlanner = () => {
	return (
		<Container>
			<CardComponent title='Farming Planner'>
				<Select
					className='text-dark'
					options={characterNames}
					onChange={e => {
						console.log(e.value);
					}}
				/>
				<CharacterCard charactersData={charactersData} />
				<Materials />
			</CardComponent>
		</Container>
	);
};

export default FarmingPlanner;
