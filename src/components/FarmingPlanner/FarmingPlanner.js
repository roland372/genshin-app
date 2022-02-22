import React from 'react';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import characters from '../../assets/data/Characters/characters.json';
import charactersData from '../../constants/characters';
import Materials from './Materials';
import CharacterCard from './CharacterCard';



const FarmingPlanner = () => {
	return (
		<Container>
			<CardComponent title='Farming Planner'>
				
				<CharacterCard
					charactersData={charactersData}
					characters={characters}
				/>
				<Materials />
			</CardComponent>
		</Container>
	);
};

export default FarmingPlanner;
