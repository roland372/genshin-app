import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	path,
} from 'react-router-dom';

import Characters from '../components/Characters/Characters';
import Amber from '../components/Characters/Character/Amber/Amber';
import Beidou from '../components/Characters/Character/Beidou/Beidou';

const characters = () => {
	// const { url, path } = useRouteMatch;
	// console.log('url', url);
	return (
		<Router>
			<Switch>
				<Route exact path={'/characters/'} component={Characters} />
				<Route exact path={'/characters/Amber'} component={Amber} />
				<Route path='/characters/Beidou'>
					<Beidou />
				</Route>
			</Switch>
		</Router>
	);
};

export default characters;

// display all characters
