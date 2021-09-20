import React from 'react';
import CharacterBanner from '../assets/Wish_Adrift_in_the_Harbor_2021-01-12.jpg';
import WeaponBanner from '../assets/Wish_Epitome_Invocation_2020-09-28.jpg';

const Banners = () => {
	return (
		<main className='bg-secondary text-light text-center pt-1 pb-1'>
			<div className='container'>
				<section className='rounded-3 my-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2'>Current Banners</h3>
					<div className='d-md-flex'>
						<section className='p-2'>
							<img src={CharacterBanner} alt='' className='img-fluid' />
						</section>
						<section className='p-2'>
							<img src={WeaponBanner} alt='' className='img-fluid' />
						</section>
					</div>
					<h5>September 1, 2021 ~ September 21, 2021</h5>
				</section>
				<section className='rounded-3 my-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2'>Upcoming Banners</h3>
					<div className='d-md-flex'>
						<section className='p-2'>
							<img src={CharacterBanner} alt='' className='img-fluid' />
						</section>
						<section className='p-2'>
							<img src={WeaponBanner} alt='' className='img-fluid' />
						</section>
					</div>
					<h5>September 1, 2021 ~ September 21, 2021</h5>
				</section>
				<section className='rounded-3 my-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2'>Past Banners </h3>
					<h4>Version 2.0</h4>
					<section>
						<div className='d-md-flex'>
							<section className='p-2'>
								<img src={CharacterBanner} alt='' className='img-fluid' />
							</section>
							<section className='p-2'>
								<img src={WeaponBanner} alt='' className='img-fluid' />
							</section>
						</div>
						<h5>August 10, 2021 ~ August 31, 2021</h5>
					</section>
					<section>
						<div className='d-md-flex'>
							<section className='p-2'>
								<img src={CharacterBanner} alt='' className='img-fluid' />
							</section>
							<section className='p-2'>
								<img src={WeaponBanner} alt='' className='img-fluid' />
							</section>
						</div>
						<h5>August 10, 2021 ~ August 31, 2021</h5>
					</section>
				</section>
			</div>
		</main>
	);
};

export default Banners;
