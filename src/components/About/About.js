import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const About = () => {
	useDocumentTitle('About');

	return (
		<Container>
			<CardComponent title='About'>
				<section className='mx-2 pt-2 text-start'>
					<h5>
						Genshin-App is a fanmade website for Genshin Impact game.
						<br />
						It contains database where you can have easy and quick access to
						most useful information like current and past events or banners, see
						what's available in domains, quickly calculate materials needed for
						leveling up or even build your own teams.
					</h5>
					<p>Here's full list of features that you can find on a website:</p>
					<ul className='list-group text-light'>
						<li className='list-group-item dark-blue text-light'>
							Current and past{' '}
							<Link className='link-primary text-decoration-none' to='/events'>
								events
							</Link>{' '}
							and{' '}
							<Link className='link-primary text-decoration-none' to='/banners'>
								banners
							</Link>{' '}
						</li>
						<li className='list-group-item dark-blue text-light'>
							Shortcuts for most useful{' '}
							<Link className='link-primary text-decoration-none' to='/'>
								links
							</Link>{' '}
							for official media
						</li>
						<li className='list-group-item dark-blue text-light'>
							View all{' '}
							<Link
								className='link-primary text-decoration-none'
								to='/characters'
							>
								characters
							</Link>{' '}
							information, their talents, constellations, required materials,
							etc.
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link className='link-primary text-decoration-none' to='/weapons'>
								Weapons
							</Link>{' '}
							where you can view all available weapons and their stats
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link
								className='link-primary text-decoration-none'
								to='/materials'
							>
								Materials
							</Link>{' '}
							section where you can see characters and weapons with their
							corresponding talents or materials
						</li>
						<li className='list-group-item dark-blue text-light'>
							See all available{' '}
							<Link
								className='link-primary text-decoration-none'
								to='/artifacts'
							>
								artifacts
							</Link>{' '}
							with descriptions
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link
								className='link-primary text-decoration-none'
								to='/farming-planner'
							>
								Farming planner
							</Link>{' '}
							where you can easily see what materials you will need to level up
							your character, how much it will cost you and how much time it's
							going to take
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link
								className='link-primary text-decoration-none'
								to='/team-builder'
							>
								Team builder
							</Link>{' '}
							- since there are only 4 slots in game for teams, I decided to add
							an option where you can create and, edit and view your own teams
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link
								className='link-primary text-decoration-none'
								to='/image-gallery'
							>
								Image gallery
							</Link>{' '}
							to check out characters images
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link className='link-primary text-decoration-none' to='/notes'>
								Notes
							</Link>{' '}
							to write and format notes with a support of markdown
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link className='link-primary text-decoration-none' to='/charts'>
								Charts
							</Link>{' '}
							where you can quickly compare character stats, see how many
							characters use specific element, weapon, their rarities, genders,
							nations, etc.
						</li>
						<li className='list-group-item dark-blue text-light'>
							<Link className='link-primary text-decoration-none' to='/profile'>
								Profile
							</Link>{' '}
							to customize your own profile after signing in with Google
							account, or creating one with your email address
						</li>
					</ul>
				</section>
				<section className='mx-2 text-start'>
					<hr />
					<h5 className='pb-2'>
						Languages and technologies used in this project:
					</h5>
					<ul className='list-group text-light'>
						<li className='list-group-item dark-blue text-light'>
							<b>ReactJS</b> as main frontend framework
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>React Router</b> for routing
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>Context API</b> to access user's auth throught the whole app
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>Firestore Firebase</b> as database
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>Axios</b> for fetching data
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>ChartJS</b> for charts
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>Framer Motion</b> used in image gallery
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>React Select</b> to have easier way of handling select inputs
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>React-Toastify</b> for pop-up notifications
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>React-Spinners</b> for loading spinners
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>Bootstrap v5.0</b> and <b>React-Bootstrap</b> for styling
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>CSS</b> for some custom styles
						</li>
						<li className='list-group-item dark-blue text-light'>
							<b>React-markdown</b> to render markdown
						</li>
					</ul>
				</section>
			</CardComponent>
		</Container>
	);
};

export default About;
