import React from 'react';
import CardComponent from '../Layout/CardComponent';
import BannersVersion from './BannersVersion';

const PastBanners = props => {
	const { bannersData } = props;

	return (
		<CardComponent title='Past Banners'>
			<BannersVersion version='2.6' bannersData={bannersData} />
			<BannersVersion version='2.5' bannersData={bannersData} />
			<BannersVersion version='2.4' bannersData={bannersData} />
			<BannersVersion version='2.3' bannersData={bannersData} />
			<BannersVersion version='2.2' bannersData={bannersData} />
			<BannersVersion version='2.1' bannersData={bannersData} />
			<BannersVersion version='2.0' bannersData={bannersData} />
			<BannersVersion version='1.6' bannersData={bannersData} />
			<BannersVersion version='1.5' bannersData={bannersData} />
			<BannersVersion version='1.4' bannersData={bannersData} />
			<BannersVersion version='1.3' bannersData={bannersData} />
			<BannersVersion version='1.2' bannersData={bannersData} />
			<BannersVersion version='1.1' bannersData={bannersData} />
			<BannersVersion version='1.0' bannersData={bannersData} />

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
