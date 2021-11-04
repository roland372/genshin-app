import React from 'react';
import CardComponent from '../Layout/CardComponent';
import Container from '../Layout/Container';
import Banner from './Banner';
import data from '../../assets/data/Banners/banners.json';

const Banners = () => {
	return (
		<Container>
			<CardComponent title='Current Banners'>
				{data.currentBanners.map(banner => {
					return (
						<Banner
							characterBannerName={banner.characterBannerName}
							characterBannerImage={banner.characterBannerImage}
							characterBannerLink={banner.characterBannerLink}
							weaponBannerName={banner.weaponBannerName}
							weaponBannerImage={banner.weaponBannerImage}
							weaponBannerLink={banner.weaponBannerLink}
							duration={banner.duration}
						/>
					);
				})}
			</CardComponent>
			{/* <CardComponent title='Upcoming Banners'>
				<Banner
					duration='September 21, 2021 ~ September 22, 2021'
					characterBannerImage={CharacterBanner}
					weaponBannerImage={WeaponBanner}
				/>
			</CardComponent> */}
			<CardComponent title='Past Banners'>
				{data.pastBanners.map(banner => {
					return (
						<Banner
							characterBannerName={banner.characterBannerName}
							characterBannerImage={banner.characterBannerImage}
							characterBannerLink={banner.characterBannerLink}
							weaponBannerName={banner.weaponBannerName}
							weaponBannerImage={banner.weaponBannerImage}
							weaponBannerLink={banner.weaponBannerLink}
							duration={banner.duration}
						/>
					);
				})}
				{/* <Banner
					bannerDuration='August 11, 2021 ~ August 33, 2021'
					characterBannerImage={CharacterBanner}
					weaponBannerImage={WeaponBanner}
				/> */}
			</CardComponent>
		</Container>
	);
};

export default Banners;
