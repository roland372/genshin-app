import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, CloseButton } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Sidebar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<nav className='navbar navbar-dark sticky-top bg-dark'>
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
				<Offcanvas
					show={show}
					onHide={handleClose}
					placement='end'
					className='bg-secondary'
				>
					<Offcanvas.Header className='bg-primary'>
						<NavLink exact to='/' className='nav-link text-light ms-3'>
							<Offcanvas.Title>Home</Offcanvas.Title>
						</NavLink>
						<CloseButton variant='white' className='me-2' />
					</Offcanvas.Header>
					<Offcanvas.Body>
						<ul className='list-group text-start'>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/characters'>
									Characters
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/banners'>
									Banners
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/events'>
									Events
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/artifacts'>
									Artifacts
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/farming-planner'>
									Farming Planner
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/team-builder'>
									Team Builder
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/calculator'>
									Calculator
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/database'>
									Database - TODO make it dropdown
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/changelog'>
									Changelog
								</NavLink>
							</li>
							<li className='list-group-item bg-dark'>
								<NavLink className='nav-link link-light' to='/achievements'>
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
