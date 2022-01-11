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
										className='list-group-item bg-dark'
										key={id}
										onClick={handleClose}
									>
										<NavLink
											className='nav-link link-light text-capitalize'
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
