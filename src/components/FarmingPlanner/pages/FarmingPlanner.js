import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Characters from './Characters';
import AddCharacter from './AddCharacter';
import EditCharacter from './EditCharacter';
import CharacterInfo from '../components/CharacterInfo';

import characters from '../../../assets/data/Characters/characters.json';
import charactersData from '../../../constants/characters';

const FarmingPlanner = () => {
	const filterCharacters = charactersArray => {
		const filteredCharacters = characters.characters.filter(character =>
			charactersArray.includes(character.name)
		);
		// console.log(teamsArray);
		// console.log(filteredCharacters);

		// sort characters so it matches order in which they are selected
		filteredCharacters.sort((a, b) => {
			return charactersArray.indexOf(a.name) - charactersArray.indexOf(b.name);
		});

		return filteredCharacters;
	};

	return (
		<Router>
			<Switch>
				<Route exact path='/farming-planner'>
					<Characters
						characters={characters.characters}
						filterCharacters={filterCharacters}
						charactersData={charactersData}
					/>
				</Route>
				<Route exact path='/farming-planner/characters/add'>
					<AddCharacter
						characters={characters.characters}
						filterCharacters={filterCharacters}
						charactersData={charactersData}
					/>
				</Route>
				<Route exact path='/farming-planner/characters/edit/:id'>
					<EditCharacter
						characters={characters.characters}
						filterCharacters={filterCharacters}
						charactersData={charactersData}
					/>
				</Route>
				<Route exact path='/farming-planner/characters/:id'>
					<CharacterInfo
						characters={characters.characters}
						filterCharacters={filterCharacters}
						charactersData={characters.characters}
						materialsData={charactersData}
					/>
				</Route>
			</Switch>
		</Router>
	);
};

export default FarmingPlanner;
