import React, { Fragment } from 'react';

//? <----- Router ----->
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//? <----- User Auth ----->
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Profile from './components/Auth/Profile';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

//? <----- Components ----->
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//? <----- Pages ----->
import about from './pages/about';
// import achievements from './pages/achievements';
import artifacts from './pages/artifacts';
import banners from './pages/banners';
// import calculator from './pages/calculator';
import characters from './pages/characters';
// import changelog from './pages/changelog';
import charts from './pages/charts';
// import database from './pages/database';
import events from './pages/events';
import FarmingPlanner from './pages/farmingPlanner';
import home from './pages/home';
import imageGallery from './pages/imageGallery';
import materials from './pages/materials';
import notes from './pages/notes';
import NotFound from './pages/NotFound';
import TeamBuilder from './pages/teamBuilder';
import test from './pages/test';
import todoList from './pages/todoList';
import weapons from './pages/weapons';

//? <----- Styles ----->
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollToTopRouter from './components/Layout/ScrollToTopRouter';

function App() {
	// fetch('https://enka.shinshin.moe/u/700684214')
	// 	.then(function (response) {
	// 		// When the page is loaded convert it to text
	// 		return response.text();
	// 	})
	// 	.then(function (html) {
	// 		// Initialize the DOM parser
	// 		var parser = new DOMParser();
	// 		// Parse the text
	// 		var doc = parser.parseFromString(html, 'text/html');
	// 		// You can now even select part of that html as you would in the regular DOM
	// 		// Example:
	// 		// console.log(doc);
	// 		var script = doc.querySelector('script:nth-child(3)').innerHTML;
	// 		// let main = doc.querySelector('main').innerHTML;
	// 		// JSON.stringify(script);
	// 		console.log(script);
	// 		const obj = JSON.parse(script);
	// 		console.log(obj.playerInfo);
	// 	})
	// 	.catch(function (err) {
	// 		console.log('Failed to fetch page: ', err);
	// 	});

	return (
		<Fragment>
			<Router>
				<ScrollToTopRouter />
				<Layout>
					<UserAuthContextProvider>
						<ToastContainer
							position='top-center'
							autoClose={2000}
							hideProgressBar={false}
							newestOnTop
							closeOnClick
							rtl={false}
							pauseOnFocusLoss={false}
							draggable
							pauseOnHover={false}
							transition={Flip}
							theme='dark'
							limit={3}
						/>
						<Switch>
							<Route exact path='/' component={home} />
							<Route path='/about' component={about} />
							{/* <Route path='/achievements' component={achievements} /> */}
							<Route path='/artifacts' component={artifacts} />
							<Route path='/banners' component={banners} />
							{/* <Route path='/calculator' component={calculator} /> */}
							<Route exact path='/characters' component={characters} />
							<Route path='/charts' component={charts} />
							{/* <Route path='/changelog' component={changelog} /> */}
							<Route path='/characters' component={characters} />
							<Route path='/characters/:id' component={characters} />
							{/* <Route path='/database' component={database} /> */}
							<Route path='/events' component={events} />
							<Route path='/farming-planner'>
								<ProtectedRoute>
									<FarmingPlanner />
								</ProtectedRoute>
							</Route>
							<Route path='/image-gallery' component={imageGallery} />
							<Route path='/materials' component={materials} />
							<Route path='/notes' component={notes} />
							<Route path='/team-builder'>
								<ProtectedRoute>
									<TeamBuilder />
								</ProtectedRoute>
							</Route>
							<Route path='/test' component={test} />
							<Route path='/todoList' component={todoList} />
							<Route path='/weapons' component={weapons} />
							<Route path='/login' component={Login} />
							<Route path='/signup' component={Signup} />
							<Route path='/profile'>
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							</Route>
							<Route component={NotFound} />
						</Switch>
					</UserAuthContextProvider>
				</Layout>
			</Router>
		</Fragment>
	);
}

export default App;
