import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Layout/Container';
import CardComponent from '../../components/Layout/CardComponent';

const About = () => {
	return (
		<Container>
			<CardComponent title='About'>
				<div className='mx-2'>
					<h5>
						Genshin-App is a fanmade website for Genshin Impact game. Database
						where you can have easy and quick access to most useful information
						like current and past events or banners, see what's available in
						domains, quickly calculate materials needed for leveling up or even
						build your own teams.
					</h5>
					<h6>Here's full list of things that you can find on a website:</h6>
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
							<Link
								className='link-primary text-decoration-none'
								to='/database'
							>
								Database
							</Link>{' '}
							where you can view all available weapons and their stats, see
							artifacts with their descriptions and also see characters and
							weapons with their corresponding talents or materials
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
				</div>
			</CardComponent>
		</Container>
	);
};

export default About;
