import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Sidebar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<nav className='navbar navbar-expand-xl navbar-dark bg-dark'>
			<div className='container'>
				<NavLink className='navbar-brand' exact to='/'>
					GenshinApp
				</NavLink>
				<Button
					className='navbar-toggler'
					variant='dark'
					type='button'
					onClick={handleShow}
				>
					<span className='navbar-toggler-icon'></span>
				</Button>
				<Offcanvas show={show} onHide={handleClose} placement='end'>
					<Offcanvas.Header closeButton>
						<NavLink exact to='/' className='nav-link text-black'>
							<Offcanvas.Title>Home</Offcanvas.Title>
						</NavLink>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<ul className='nav-item'>
							<li className='nav-item'>
								<NavLink className='nav-link' to='characters'>
									Characters
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='banners'>
									Banners
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='events'>
									Events
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='artifacts'>
									Artifacts
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='farming-planner'>
									Farming Planner
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
								<NavLink className='nav-link' to='database'>
									Database - TODO make it dropdown
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='changelog'>
									Changelog
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='achievements'>
									Achievements
								</NavLink>
							</li>
						</ul>
					</Offcanvas.Body>
				</Offcanvas>
			</div>
		</nav>
	);
};

export default Sidebar;
