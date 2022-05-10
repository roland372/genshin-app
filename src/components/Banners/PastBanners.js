import React, { useState } from 'react';
import CardComponent from '../Layout/CardComponent';
import BannersVersion from './BannersVersion';

const PastBanners = props => {
	const { bannersData } = props;

	const versionsArray = [];
	Object.keys(bannersData.pastBanners).map(banner =>
		versionsArray.push(banner.slice(8))
	);

	const [searchTerm, setSearchTerm] = useState('');

	return (
		<CardComponent title='Past Banners'>
			<section className='m-2'>
				<input
					type='text'
					className='form-control'
					placeholder='Search for a version, e.g. 1.6'
					onChange={event => {
						setSearchTerm(event.target.value);
					}}
				/>
			</section>
			{versionsArray
				.filter(value => {
					if (value === '') {
						return value;
					} else if (
						value.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
					) {
						return value;
					}
					return 0;
				})
				.map(banner => (
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
