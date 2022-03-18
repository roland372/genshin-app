import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Teams from './Teams/pages/Teams';
import AddTeam from './Teams/AddTeam';
import EditTeam from './Teams/EditTeam';
import Team from './Teams/Team';

import characters from '../../assets/data/Characters/characters.json';

// console.log(characters.characters);

const TeamBuilder = () => {
	// reusable function to filter out characters
	const filterCharacters = teamsArray => {
		const filteredCharacters = characters.characters.filter(character =>
			teamsArray.includes(character.name)
		);

		// console.log(filteredCharacters);
		return filteredCharacters;
	};

	// let test = ['Diluc', 'Razor', 'Sayu', 'Lisa'];
	// filterCharacters(test);

	// select options
	const characterNames = [];
	characters.characters.map(c => {
		return characterNames.push({ value: c.name, label: c.name });
	});

	// console.log(characterNames);

	return (
		<Router>
			<Switch>
				<Route exact path='/team-builder'>
					<Teams
						characters={characters.characters}
						filterCharacters={filterCharacters}
						characterNames={characterNames}
					/>
				</Route>
				<Route exact path='/team-builder/teams/add'>
					<AddTeam
						characters={characters.characters}
						filterCharacters={filterCharacters}
						characterNames={characterNames}
					/>
				</Route>
				<Route exact path='/team-builder/teams/edit/:id'>
					<EditTeam
						characters={characters.characters}
						filterCharacters={filterCharacters}
						characterNames={characterNames}
					/>
				</Route>
				<Route exact path='/team-builder/teams/:id'>
					<Team
						characters={characters.characters}
						filterCharacters={filterCharacters}
						characterNames={characterNames}
					/>
				</Route>
			</Switch>
		</Router>
	);
};

export default TeamBuilder;
