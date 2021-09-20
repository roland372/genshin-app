import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<nav className='navbar navbar-expand-xl bg-dark navbar-dark'>
			<div className='container'>
				<NavLink className='navbar-brand' exact to='/'>
					GenshinApp
				</NavLink>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navmenu'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navmenu'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<NavLink to='characters' className='nav-link'>
								Characters
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='farming-schedule'>
								Farming Schedule
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='team-builder'>
								Team Builder
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='calculator'>
								Calculator
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='banners'>
								Banners
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='database'>
								Database - TODO make it dropdown
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='changelog'>
								Changelog
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
