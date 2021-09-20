import React from 'react';
import AchievementImage from '../assets/Achievement_Domains_and_Spiral_Abyss_Series_I.png';
import { Accordion } from 'react-bootstrap';

const Achievements = () => {
	return (
		<main className='bg-secondary text-light pt-1 pb-1'>
			<div className='container'>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Achievements
					</h3>
					<section className='p-2 text-light'>
						<Accordion>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>
									<div className='text-dark'>
										<h4>Wonders of the World</h4>
										<h6>0/230 (0%)</h6>
									</div>
								</Accordion.Header>
								<Accordion.Body className='bg-dark'>
									<section className='d-flex align-items-center justify-content-between pb-1'>
										<div className='me-1'>
											<h5>Tales of Monstrous Madness</h5>
											<h6>Collect the entire "Toki Alley Tales" series.</h6>
										</div>
										<div className='form-check'>
											<input
												class='form-check-input p-3'
												type='checkbox'
												value=''
												id='flexCheckDefault'
											/>
										</div>
									</section>
									<section className='d-flex align-items-center justify-content-between pb-1'>
										<div className='me-1'>
											<h5>Tales of Monstrous Madness</h5>
											<h6>Collect the entire "Toki Alley Tales" series.</h6>
										</div>
										<div className='form-check'>
											<input
												class='form-check-input p-3'
												type='checkbox'
												value=''
												id='flexCheckDefault'
											/>
										</div>
									</section>
									<section className='d-flex align-items-center justify-content-between pb-1'>
										<div className='me-1'>
											<h5>Hidden Palace of Zhou Formula</h5>
											<h6>
												Follow the Seelie and light the torches to unlock the
												entrance to a domain in Wuwang Hill.
											</h6>
										</div>
										<div className='form-check'>
											<input
												class='form-check-input p-3'
												type='checkbox'
												value=''
												id='flexCheckDefault'
											/>
										</div>
									</section>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey=''>
								<Accordion.Header>
									<div className='text-dark'>
										<h4>Wonders of the World</h4>
										<h6>0/230 (0%)</h6>
									</div>
								</Accordion.Header>
								<Accordion.Body className='bg-dark'>
									<section className='d-flex align-items-center justify-content-between'>
										<div className='me-1'>
											<h5>Cecilia Garden</h5>
											<h6>
												Return the Seelie to their rightful places and unlock
												the entrance to a Domain in Wolvendom.
											</h6>
										</div>
										<div className='form-check'>
											<input
												class='form-check-input p-3'
												type='checkbox'
												value=''
												id='flexCheckDefault'
											/>
										</div>
									</section>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</section>
				</section>
			</div>
		</main>
	);
};

export default Achievements;
