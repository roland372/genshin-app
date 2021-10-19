import React from 'react';
import CharacterBanner from '../../assets/Wish_Adrift_in_the_Harbor_2021-01-12.jpg';
import WeaponBanner from '../../assets/Wish_Epitome_Invocation_2020-09-28.jpg';
import CardComponent from '../Layout/CardComponent';
import Container from '../Layout/Container';
import Banner from './Banner';

const Banners = () => {
	return (
		<Container>
			<CardComponent title='Current Banners'>
				<Banner
					bannerDuration='September 1, 2021 ~ September 21, 2021'
					characterBannerImg={CharacterBanner}
					weaponBannerImg={WeaponBanner}
				/>
			</CardComponent>
			<CardComponent title='Upcoming Banners'>
				<Banner
					bannerDuration='September 21, 2021 ~ September 22, 2021'
					characterBannerImg={CharacterBanner}
					weaponBannerImg={WeaponBanner}
				/>
			</CardComponent>
			<CardComponent title='Past Banners'>
				<h4>Version 2.0</h4>
				<Banner
					bannerDuration='August 10, 2021 ~ August 31, 2021'
					characterBannerImg={CharacterBanner}
					weaponBannerImg={WeaponBanner}
				/>
				<Banner
					bannerDuration='August 11, 2021 ~ August 33, 2021'
					characterBannerImg={CharacterBanner}
					weaponBannerImg={WeaponBanner}
				/>
			</CardComponent>
		</Container>
	);
};

export default Banners;
