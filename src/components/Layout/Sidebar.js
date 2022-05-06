import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, CloseButton } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { navLinks } from '../Layout/Links';

const Sidebar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<nav className='navbar navbar-dark sticky-top medium-blue'>
			<div className='container medium-blue'>
				<NavLink className='navbar-brand' exact to='/'>
					<img src='images/Elements/Element_Cryo.png' width='30px' alt='' />{' '}
					Genshin-App
				</NavLink>
				<Button
					className='navbar-toggler dark-blue'
					variant=''
					type='button'
					onClick={handleShow}
				>
					<span className='navbar-toggler-icon'></span>
				</Button>
				<Offcanvas
					show={show}
					onHide={handleClose}
					placement='end'
					className='dark-blue-shadow'
					scroll='true'
				>
					<Offcanvas.Header className='dark-blue'>
						<NavLink
							exact
							to='/'
							className='nav-link text-light ms-3'
							onClick={handleClose}
						>
							<Offcanvas.Title>Home</Offcanvas.Title>
						</NavLink>
						<CloseButton
							variant='white'
							className='me-2'
							onClick={handleClose}
						/>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<ul className='list-group text-start'>
							{navLinks.slice(1).map(link => {
								const { id, url, text } = link;
								return (
									<li
										className='list-group-item dark-blue-medium'
										key={id}
										onClick={handleClose}
									>
										<NavLink
											className='nav-link link-light text-capitalize'
											activeClassName='active-navbar'
											to={url}
										>
											{text}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</Offcanvas.Body>
				</Offcanvas>
			</div>
		</nav>
	);
};

export default Sidebar;
