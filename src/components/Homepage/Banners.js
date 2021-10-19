import React from 'react';
import CardComponent from '../Layout/CardComponent';
import CharacterBanner from '../../assets/Wish_Adrift_in_the_Harbor_2021-01-12.jpg';
import WeaponBanner from '../../assets/Wish_Epitome_Invocation_2020-09-28.jpg';

const Banners = () => {
	return (
		<CardComponent title='Current Banners'>
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
		</CardComponent>
	);
};

export default Banners;
