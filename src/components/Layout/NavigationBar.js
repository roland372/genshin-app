import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
									<NavLink
										to={url}
										className='nav-link'
										activeClassName='active-navbar'
									>
										<span className='text-capitalize text-light'>{text}</span>
									</NavLink>
								</li>
							);
						})}
						<div>
							<NavDropdown
								title={<span className='text-light'>Dropdown</span>}
								id='basic-nav-dropdown'
								menuVariant='dark'
							>
								<div>
									{navLinks.slice(3, 7).map(link => {
										const { id, url, text } = link;
										return (
											<li className='nav-item mx-2' key={id}>
												<NavLink
													to={url}
													className='nav-link'
													activeClassName='active-navbar'
												>
													<span className='text-capitalize text-light'>
														{text}
													</span>
												</NavLink>
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
									<NavLink
										to={url}
										className='nav-link'
										activeClassName='active-navbar'
									>
										<span className='text-capitalize text-light'>{text}</span>
									</NavLink>
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
