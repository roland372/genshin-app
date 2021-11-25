import React from 'react';

import CardComponent from '../Layout/CardComponent';
// import Banner from '../Banners/Banner';

const Banners = props => {
	return (
		<CardComponent title='Current Banners'>
			<div className='d-xl-flex'>
				{/* {props.bannersData.currentBanners.map((banner, index) => {
					return (
						<Banner
							key={index}
							name={banner.name}
							link={banner.link}
							image={banner.image}
							startDate={banner.startDate}
							endDate={banner.endDate}
						/>
					);
				})} */}
			</div>
		</CardComponent>
	);
};

export default Banners;
