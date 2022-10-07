import React from 'react';

//? <----- Router ----->
import { Link, NavLink } from 'react-router-dom';

//? <----- Components ----->
import { navLinks } from './Links';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = ({ userData }) => {
	return (
		<div
			className='bg-secondary-medium'
			style={{
				borderBottom: '3px solid var(--bg-secondary-light)',
			}}
		>
			<Navbar bg='' expand='lg' sticky='top' variant='dark'>
				<Container>
					<Navbar.Brand>
						<Link className='navbar-brand' to='/'>
							<img src='images/Elements/Element_Cryo.png' width='30px' alt='' />{' '}
							<span className=' text-color'>Genshin-App</span>
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
									menuVariant='dark bg-primary-dark'
								>
									<div className='bg-primary-dark'>
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
							{userData ? (
								<li className='px-2 d-flex align-items-center'>
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
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
