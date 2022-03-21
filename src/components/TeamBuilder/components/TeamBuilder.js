import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Teams from '../pages/Teams';
import AddTeam from '../pages/AddTeam';
import EditTeam from '../pages/EditTeam';
import Team from './Team';

import characters from '../../../assets/data/Characters/characters.json';

// console.log(characters.characters);

const TeamBuilder = () => {
	// reusable function to filter out characters
	const filterCharacters = teamsArray => {
		const filteredCharacters = characters.characters.filter(character =>
			teamsArray.includes(character.name)
		);
		// console.log(teamsArray);
		// console.log(filteredCharacters);

		// sort characters so it matches order in which they are selected
		filteredCharacters.sort((a, b) => {
			return teamsArray.indexOf(a.name) - teamsArray.indexOf(b.name);
		});

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
