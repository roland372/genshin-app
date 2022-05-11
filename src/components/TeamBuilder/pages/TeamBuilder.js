import React from 'react';

//? <----- Router ----->
import { Route, Switch } from 'react-router-dom';

//? <----- User Auth ----->
import { useUserAuth } from '../../../context/UserAuthContext';

//? <----- Components ----->
import Teams from './Teams';
import Team from '../components/Team';
import AddTeam from './AddTeam';
import EditTeam from './EditTeam';
// import TeamsLocalStorage from './TeamsLocalStorage';
// import TeamLocalStorage from '../components/TeamLocalStorage';
// import AddTeamLocalStorage from './AddTeamLocalStorage';
// import EditTeamLocalStorage from './EditTeamLocalStorage';

//? <----- Firebase ----->
import TeamDataService from '../services/team.services';

//? <----- Data ----->
import characters from '../../../assets/data/Characters/characters.json';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const TeamBuilder = () => {
	useDocumentTitle('Team Builder');

	const { user } = useUserAuth();

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
		<Switch>
			<Route exact path='/team-builder'>
				<Teams
					characters={characters.characters}
					filterCharacters={filterCharacters}
					characterNames={characterNames}
					user={user}
					TeamDataService={TeamDataService}
					useDocumentTitle={useDocumentTitle}
				/>
			</Route>
			<Route exact path='/team-builder/teams/add'>
				<AddTeam
					characters={characters.characters}
					filterCharacters={filterCharacters}
					characterNames={characterNames}
					user={user}
					TeamDataService={TeamDataService}
					useDocumentTitle={useDocumentTitle}
				/>
			</Route>
			<Route exact path='/team-builder/teams/edit/:id'>
				<EditTeam
					characters={characters.characters}
					filterCharacters={filterCharacters}
					characterNames={characterNames}
					user={user}
					TeamDataService={TeamDataService}
					useDocumentTitle={useDocumentTitle}
				/>
			</Route>
			<Route exact path='/team-builder/teams/:id'>
				<Team
					characters={characters.characters}
					filterCharacters={filterCharacters}
					characterNames={characterNames}
					user={user}
					TeamDataService={TeamDataService}
					useDocumentTitle={useDocumentTitle}
				/>
			</Route>
		</Switch>
	);
};

export default TeamBuilder;

//* local storage
/* <Switch>
		<Route exact path='/team-builder'>
			<TeamsLocalStorage
				characters={characters.characters}
				filterCharacters={filterCharacters}
				characterNames={characterNames}
			/>
		</Route>
		<Route exact path='/team-builder/teams/add'>
			<AddTeamLocalStorage
				characters={characters.characters}
				filterCharacters={filterCharacters}
				characterNames={characterNames}
			/>
		</Route>
		<Route exact path='/team-builder/teams/edit/:id'>
			<EditTeamLocalStorage
				characters={characters.characters}
				filterCharacters={filterCharacters}
				characterNames={characterNames}
			/>
		</Route>
		<Route exact path='/team-builder/teams/:id'>
			<TeamLocalStorage
				characters={characters.characters}
				filterCharacters={filterCharacters}
				characterNames={characterNames}
				useDocumentTitle={useDocumentTitle}
			/>
		</Route>
	</Switch> */
