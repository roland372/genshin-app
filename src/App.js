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
import './App.css';

function App() {
	// const { url } = useRouteMatch;
	// console.log('url', url);
	return (
		<Fragment>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/' component={home} />
						<Route exact path='/characters' component={characters} />
						<Route path='/characters/:id' component={characters} />
						<Route path='/banners' component={banners} />
						<Route path='/events' component={events} />
						<Route path='/artifacts' component={artifacts} />
						<Route path='/farming-planner' component={farmingPlanner} />
						<Route path='/team-builder' component={teamBuilder} />
						<Route path='/calculator' component={calculator} />
						<Route path='/database' component={database} />
						<Route path='/changelog' component={changelog} />
						<Route path='/achievements' component={achievements} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</Router>
		</Fragment>
	);
}

export default App;
