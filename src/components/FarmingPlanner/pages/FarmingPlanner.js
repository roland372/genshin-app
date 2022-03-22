import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Characters from './Characters';
import AddCharacter from './AddCharacter';
import EditCharacter from './EditCharacter';
import Character from '../components/Character';

import characters from '../../../assets/data/Characters/characters.json';
import charactersData from '../../../constants/characters';

const FarmingPlanner = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/farming-planner'>
					<Characters />
				</Route>
				<Route exact path='/farming-planner/add'>
					<AddCharacter
						charactersData={charactersData}
						characters={characters}
					/>
				</Route>
				<Route exact path='/farming-planner/edit/:id'>
					<EditCharacter />
				</Route>
				<Route exact path='/farming-planner/characters/:id'>
					<Characters />
				</Route>
			</Switch>
		</Router>
	);
};

export default FarmingPlanner;
