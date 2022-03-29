import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Characters from './Characters';
import AddCharacter from './AddCharacter';
import EditCharacter from './EditCharacter';
import CharacterInfo from '../components/CharacterInfo';

import levelOptions from '../utils/levelOptions';
import talentOptions from '../utils/talentOptions';

import characters from '../../../assets/data/Characters/characters.json';
import charactersData from '../../../constants/characters';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const FarmingPlanner = () => {
	useDocumentTitle('Farming Planner');

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

	const characterNames = [];
	characters.characters.map(c => {
		return characterNames.push({ value: c.name, label: c.name });
	});

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
						characterNames={characterNames}
					/>
				</Route>
				<Route exact path='/farming-planner/characters/edit/:id'>
					<EditCharacter
						characters={characters.characters}
						filterCharacters={filterCharacters}
						charactersData={characters.characters}
						characterNames={characterNames}
						levelOptions={levelOptions}
						talentOptions={talentOptions}
						materialsData={charactersData}
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
