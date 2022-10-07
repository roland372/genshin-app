import React, { useState } from 'react';

//? <----- Router ----->
import { NavLink } from 'react-router-dom';

//? <----- Components ----->
import { Button, CloseButton } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { navLinks } from '../Layout/Links';

const Sidebar = ({ userData }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<nav
			className='navbar navbar-dark sticky-top bg-secondary-medium'
			style={{
				borderBottom: '3px solid var(--bg-secondary-light)',
			}}
		>
			<div className='container bg-secondary-medium'>
				<NavLink className='navbar-brand' exact to='/'>
					<img src='images/Elements/Element_Cryo.png' width='30px' alt='' />{' '}
					<span className='text-color'>Genshin-App</span>
				</NavLink>
				<div className='d-flex align-items-center'>
					{userData ? (
						<li className='px-2 list-unstyled'>
							<NavLink to={'/profile'}>
								<img
									src={userData?.photoURL}
									width='40px'
									className='rounded-circle'
									alt=''
								/>
							</NavLink>
						</li>
					) : null}
					<Button
						className='navbar-toggler bg-primary-dark shadow-none'
						variant=''
						type='button'
						onClick={handleShow}
					>
						<span className='navbar-toggler-icon'></span>
					</Button>
				</div>

				<Offcanvas
					show={show}
					onHide={handleClose}
					placement='end'
					className='bg-primary-medium'
					scroll={false}
					backdrop={true}
				>
					<Offcanvas.Header className='bg-primary-dark'>
						<NavLink
							exact
							to='/'
							className='nav-link text-color ms-3'
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
										className='list-group-item bg-secondary-medium'
										key={id}
										onClick={handleClose}
									>
										<NavLink
											className='nav-link text-color text-capitalize'
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
