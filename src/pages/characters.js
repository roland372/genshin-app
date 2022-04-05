import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Characters from '../components/Characters/Characters';
import ScrollToTopRouter from '../components/Layout/ScrollToTopRouter';

import charactersImports from '../constants/characters';

const characters = () => {
	// console.log(charactersImports[0].component.name);
	// console.log(charactersUrl.characters[0].url);
	return (
		<Router>
			<ScrollToTopRouter />
			<Switch>
				<Route exact path={'/characters/'} component={Characters} />
				{charactersImports.map(character => {
					const { component, data } = character;
					return (
						<Route
							key={component.name}
							exact
							path={`/characters/${data.url}`}
							component={component}
						/>
					);
				})}
			</Switch>
		</Router>
	);
};

export default characters;

// display all characters
