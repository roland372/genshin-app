import React from 'react';

import CardComponent from '../Layout/CardComponent';
import Banner from '../Banners/Banner';

const Banners = props => {
	return (
		<CardComponent title='Current Banners'>
			<div className='d-xl-flex'>
				{props.bannersData.currentBanners.map((banner, index) => {
					return (
						<Banner
							key={index}
							bannersData={props.bannersData}
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
			</div>
		</CardComponent>
	);
};

export default Banners;
