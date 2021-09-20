import React from 'react';
import CharacterBanner from '../assets/Wish_Adrift_in_the_Harbor_2021-01-12.jpg';
import WeaponBanner from '../assets/Wish_Epitome_Invocation_2020-09-28.jpg';
import CurrentEvents from '../assets/Spiral_Abyss_Event_-_Peoples_Choice.jpg';
import UpcomingEvents from '../assets/Spiral_Abyss_Event_-_Peoples_Choice.jpg';
import CharacterAmber from '../assets/Character_Amber_Thumb.png';
import TalentFreedom from '../assets/Item_Teachings_of_Freedom.png';

const home = () => {
	return (
		<main className='bg-secondary text-light text-center pt-3 pb-1'>
			<div className='container'>
				{/* <--- General Information ---> */}
				<div className='rounded-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary mx-3 rounded-2 p-2'>
						Welcome to Genshn-App
					</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
						quas quos eligendi excepturi, exercitationem numquam accusantium
						nostrum id vel distinctio.
					</p>
				</div>
				{/* <--- Banners ---> */}
				<section className='rounded-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary mx-3 rounded-2 p-2'>Current Banners</h3>
					<div className='d-xl-flex'>
						<section className='p-3'>
							<img src={CharacterBanner} alt='' className='img-fluid' />
							<h4 className='pt-2'>September 01, 2021 ~ September 21, 2021</h4>
						</section>
						<section className='p-3'>
							<img src={WeaponBanner} alt='' className='img-fluid' />
							<h4 className='pt-2'>September 01, 2021 ~ September 21, 2021</h4>
						</section>
					</div>
				</section>
				{/* <--- Events ---> */}
				<section className='rounded-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary mx-3 rounded-2 p-2'>
						Current & Upcoming Events
					</h3>
					<div className='d-xl-flex'>
						<section className='p-3'>
							<h4>Current Events</h4>
							<img src={CurrentEvents} alt='' className='img-fluid' />
							<h4 className='pt-2'>September 01, 2021 ~ September 21, 2021</h4>
						</section>
						<section className='p-3'>
							<h4>Upcoming Events</h4>
							<img src={UpcomingEvents} alt='' className='img-fluid' />
							<h4 className='pt-2'>September 01, 2021 ~ September 21, 2021</h4>
						</section>
					</div>
				</section>
				{/* <--- Domains ---> */}
				<section className='rounded-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary mx-3 rounded-2 p-2'>Today in domains</h3>
					<div className=''>
						<div>
							<img width='96px' src={TalentFreedom} alt='' />
							<img
								className='rounded-circle'
								width='80px'
								src={CharacterAmber}
								alt=''
							/>
							<img
								className='rounded-circle'
								width='80px'
								src={CharacterAmber}
								alt=''
							/>
							<img
								className='rounded-circle'
								width='80px'
								src={CharacterAmber}
								alt=''
							/>
							<img
								className='rounded-circle'
								width='80px'
								src={CharacterAmber}
								alt=''
							/>
						</div>
						<div>
							<img width='96px' src={TalentFreedom} alt='' />
							<img
								className='rounded-circle'
								width='80px'
								src={CharacterAmber}
								alt=''
							/>
						</div>
						<div>
							<img width='96px' src={TalentFreedom} alt='' />
							<img
								className='rounded-circle'
								width='80px'
								src={CharacterAmber}
								alt=''
							/>
						</div>
						<div>
							<img width='96px' src={TalentFreedom} alt='' />
							<img
								className='rounded-circle'
								width='80px'
								src={CharacterAmber}
								alt=''
							/>
						</div>
					</div>
				</section>
				{/* <--- Links ---> */}
				<section className='rounded-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary mx-3 rounded-2 p-2'>Useful Links</h3>
					<span>Official Map</span>
					<span> icon with link</span>
					<span>Wiki</span>
					<span> wiki icon</span>
				</section>
			</div>
		</main>
	);
};

export default home;

// homepage to display most useful information, like when does certain event or upcoming banner ends, and when next one starts, what day it is today, and what materials you can farm today and for what characters, useful links to external websites like hoyolab or map
