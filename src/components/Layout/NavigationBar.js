import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from './Links';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
	return (
		<div className='bg-primary-dark'>
			<Navbar bg='' expand='lg' sticky='top' variant='dark'>
				<Container>
					<Navbar.Brand>
						<Link className='navbar-brand' to='/'>
							<img src='images/Elements/Element_Cryo.png' width='30px' alt='' />{' '}
							Genshin-App
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
											<span className='text-capitalize text-color'>{text}</span>
										</NavLink>
									</li>
								);
							})}
							<div>
								<NavDropdown
									title={<span className='text-color'>Database</span>}
									id='basic-nav-dropdown'
									menuVariant='dark bg-primary-light'
								>
									<div className='bg-primary-light'>
										{navLinks.slice(3, 7).map(link => {
											const { id, url, text } = link;
											return (
												<li className='nav-item mx-2 ' key={id}>
													<NavLink
														to={url}
														className='nav-link'
														activeClassName='active-navbar'
													>
														<span className='text-capitalize text-color'>
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
											<span className='text-capitalize text-color'>{text}</span>
										</NavLink>
									</li>
								);
							})}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
