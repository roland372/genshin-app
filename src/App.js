// <--- React --->
import { React, Fragment } from 'react';
// import Layout from './components/Layout/Layout';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	// useRouteMatch,
} from 'react-router-dom';

// <--- Pages --->
import home from './pages/home';
import NotFound from './pages/NotFound';
import characters from './pages/characters';
import events from './pages/events';
import artifacts from './pages/artifacts';
import farmingPlanner from './pages/farmingPlanner';
import teamBuilder from './pages/teamBuilder';
import calculator from './pages/calculator';
import banners from './pages/banners';
import database from './pages/database';
import changelog from './pages/changelog';
import achievements from './pages/achievements';

import Layout from './components/Layout/Layout';
// <--- Styles --->
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	// const { url } = useRouteMatch;
	// console.log('url', url);
	return (
		<Fragment>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/' render={home} />
						<Route exact path='/characters' render={characters} />
						<Route exact path='/banners' render={banners} />
						<Route exact path='/events' render={events} />
						<Route exact path='/artifacts' render={artifacts} />
						<Route exact path='/farming-planner' render={farmingPlanner} />
						<Route exact path='/team-builder' render={teamBuilder} />
						<Route exact path='/calculator' render={calculator} />
						<Route exact path='/database' render={database} />
						<Route exact path='/changelog' render={changelog} />
						<Route exact path='/achievements' render={achievements} />
						<Route render={NotFound} />
					</Switch>
				</Layout>
			</Router>
		</Fragment>
	);
}

export default App;
