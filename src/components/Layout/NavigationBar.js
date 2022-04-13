import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './Links';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
	return (
		<Navbar bg='dark' expand='lg' sticky='top' variant='dark'>
			<Container>
				<Navbar.Brand>
					<Link className='navbar-brand' to='/'>
						GenshinApp
					</Link>
				</Navbar.Brand>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						{navLinks.slice(1, 3).map(link => {
							const { id, url, text } = link;
							return (
								<li className='nav-item' key={id}>
									<Link to={url} className='nav-link'>
										<span className='text-capitalize'>{text}</span>
									</Link>
								</li>
							);
						})}
						<div>
							<NavDropdown title='Database' id='basic-nav-dropdown'>
								<div className=''>
									{navLinks.slice(3, 7).map(link => {
										const { id, url, text } = link;
										return (
											<li className='nav-item ms-2' key={id}>
												<Link to={url} className='nav-link text-dark'>
													<span className='text-capitalize'>{text}</span>
												</Link>
											</li>
											// <NavDropdown.Item key={id} href={url}>
											// 	<Link
											// 		key={id}
											// 		to={url}
											// 		className='text-decoration-none'
											// 	>
											// 		<span className='text-capitalize text-dark'>
											// 			{text}
											// 		</span>
											// 	</Link>
											// </NavDropdown.Item>
										);
									})}
								</div>
							</NavDropdown>
						</div>
						{navLinks.slice(7).map(link => {
							const { id, url, text } = link;
							return (
								<li className='nav-item' key={id}>
									<Link to={url} className='nav-link'>
										<span className='text-capitalize'>{text}</span>
									</Link>
								</li>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
