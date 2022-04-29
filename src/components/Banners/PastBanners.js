import React from 'react';
import CardComponent from '../Layout/CardComponent';
import BannersVersion from './BannersVersion';

const PastBanners = props => {
	const { bannersData } = props;

	const versionsArray = [];
	Object.keys(bannersData.pastBanners).map(banner =>
		versionsArray.push(banner.slice(8))
	);

	return (
		<CardComponent title='Past Banners'>
			{versionsArray.map(banner => (
				<div key={banner}>
					<BannersVersion version={banner} bannersData={bannersData} />
				</div>
			))}

			{/* <----- Version 1.0 -----> */}
			{/* <section>
				<h5 className='text-start ms-3 mt-2'>Version 1.0</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 1.0'].map((e, index) => {
						return (
							<BannerItem
								key={index}
								name={e.name}
								link={e.link}
								image={e.image}
								startDate={e.startDate}
								endDate={e.endDate}
							/>
						);
					})}
				</BannerHeading>
			</section> */}
		</CardComponent>
	);
};

export default PastBanners;
