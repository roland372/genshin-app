import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks } from './Links';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
	return (
		// 	<nav className='navbar navbar-expand-xl bg-dark navbar-dark'>
		// 		<div className='container'>
		// 			<NavLink className='navbar-brand' exact to='/'>
		// 				GenshinApp
		// 			</NavLink>
		// 			<button
		// 				className='navbar-toggler'
		// 				type='button'
		// 				data-bs-toggle='collapse'
		// 				data-bs-target='#navmenu'
		// 			>
		// 				<span className='navbar-toggler-icon'></span>
		// 			</button>
		// 			<div className='collapse navbar-collapse' id='navmenu'>
		// 				<ul className='navbar-nav ms-auto'>
		// 					{navLinks.slice(1).map(link => {
		// 						const { id, url, text } = link;
		// 						return (
		// 							<li className='nav-item' key={id}>
		// 								<NavLink to={url} className='nav-link'>
		// 									<span className='text-capitalize'>{text}</span>
		// 								</NavLink>
		// 							</li>
		// 						);
		// 					})}
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</nav>
		<Navbar bg='dark' expand='lg' variant='dark'>
			<Container>
				<Navbar.Brand>
					<NavLink className='navbar-brand' exact to='/'>
						GenshinApp
					</NavLink>
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						{navLinks.slice(1, 5).map(link => {
							const { id, url, text } = link;
							return (
								<li className='nav-item' key={id}>
									<NavLink to={url} className='nav-link'>
										<span className='text-capitalize'>{text}</span>
									</NavLink>
								</li>
							);
						})}
						<div>
							<NavDropdown title='Database' id='basic-nav-dropdown'>
								{navLinks.slice(6, 8).map(link => {
									const { id, url, text } = link;
									return (
										<NavDropdown.Item key={id}>
											<NavLink to={url} className='text-decoration-none'>
												<span className='text-capitalize text-dark'>
													{text}
												</span>
											</NavLink>
										</NavDropdown.Item>
									);
								})}
							</NavDropdown>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
