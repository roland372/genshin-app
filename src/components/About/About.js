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
				<section className='mx-2 text-start'>
					<h5>
						Genshin-App is a fanmade website for Genshin Impact game. Database
						where you can have easy and quick access to most useful information
						like current and past events or banners, see what's available in
						domains, quickly calculate materials needed for leveling up or even
						build your own teams.
					</h5>
					<p>Here's full list of things that you can find on a website:</p>
					<ul className='list-group text-light'>
						<li className='list-group-item list-group-item-dark'>
							Current and past{' '}
							<Link className='link-primary text-decoration-none' to='/events'>
								events
							</Link>{' '}
							and{' '}
							<Link className='link-primary text-decoration-none' to='/banners'>
								banners
							</Link>{' '}
						</li>
						<li className='list-group-item list-group-item-dark'>
							Quickly see what's available in{' '}
							<Link className='link-primary text-decoration-none' to='/'>
								domains
							</Link>{' '}
						</li>
						<li className='list-group-item list-group-item-dark'>
							Shortcuts for most useful{' '}
							<Link className='link-primary text-decoration-none' to='/'>
								links
							</Link>{' '}
							for official media
						</li>
						<li className='list-group-item list-group-item-dark'>
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
						<li className='list-group-item list-group-item-dark'>
							See all available{' '}
							<Link
								className='link-primary text-decoration-none'
								to='/artifacts'
							>
								artifacts
							</Link>{' '}
							with descriptions
						</li>
						<li className='list-group-item list-group-item-dark'>
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
						<li className='list-group-item list-group-item-dark'>
							<Link
								className='link-primary text-decoration-none'
								to='/team-builder'
							>
								Team builder
							</Link>{' '}
							- since there are only 4 slots in game for teams, I decided to add
							an option where you can create and, edit and view your own teams
						</li>
						<li className='list-group-item list-group-item-dark'>
							<Link className='link-primary text-decoration-none' to='/weapons'>
								Weapons
							</Link>{' '}
							where you can view all available weapons and their stats
						</li>
						<li className='list-group-item list-group-item-dark'>
							<Link
								className='link-primary text-decoration-none'
								to='/materials'
							>
								Materials
							</Link>{' '}
							section where you can see characters and weapons with their
							corresponding talents or materials
						</li>
						<li className='list-group-item list-group-item-dark'>
							<Link className='link-primary text-decoration-none' to='/charts'>
								Charts
							</Link>{' '}
							where you can quickly compare character stats, see how many
							characters use specific element, weapon, their rarities, genders,
							nations ascension stats or even talent books
						</li>
					</ul>
				</section>
				<section className='mx-2 text-start'>
					<hr />
					<h5 className='pb-2'>
						Languages and technologies used in this project:
					</h5>
					<ul className='list-group text-light'>
						<li className='list-group-item list-group-item-dark'>
							ReactJS as main frontend framework
						</li>
						<li className='list-group-item list-group-item-dark'>
							React Router for routing
						</li>
						<li className='list-group-item list-group-item-dark'>
							Firestore Firebase as database
						</li>
						<li className='list-group-item list-group-item-dark'>
							Axios for fetching data
						</li>
						<li className='list-group-item list-group-item-dark'>
							ChartJS for charts
						</li>
						<li className='list-group-item list-group-item-dark'>
							Framer Motion used in image gallery
						</li>
						<li className='list-group-item list-group-item-dark'>
							React Select to have easier way of handling select inputs
						</li>
						<li className='list-group-item list-group-item-dark'>
							Bootstrap v5.0 and React-Bootstrap for styling
						</li>
						<li className='list-group-item list-group-item-dark'>
							CSS for some custom styles
						</li>
					</ul>
				</section>
			</CardComponent>
		</Container>
	);
};

export default About;
