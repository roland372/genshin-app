import React from 'react';
import BannerItem from './BannerItem';
import CardComponent from '../Layout/CardComponent';
import BannerHeading from './BannerHeading';

const PastBanners = props => {
	return (
		<CardComponent title='Past Banners'>
			{/* <----- Version 2.2 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 2.2</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 2.2'].map((e, index) => {
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
			</section>
			{/* <----- Version 2.1 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 2.1</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 2.1'].map((e, index) => {
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
			</section>
			{/* <----- Version 2.0 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 2.0</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 2.0'].map((e, index) => {
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
			</section>
			{/* <----- Version 1.6 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 1.6</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 1.6'].map((e, index) => {
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
			</section>
			{/* <----- Version 1.5 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 1.5</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 1.5'].map((e, index) => {
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
			</section>
			{/* <----- Version 1.4 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 1.4</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 1.4'].map((e, index) => {
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
			</section>
			{/* <----- Version 1.3 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 1.3</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 1.3'].map((e, index) => {
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
			</section>
			{/* <----- Version 1.2 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 1.2</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 1.2'].map((e, index) => {
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
			</section>
			{/* <----- Version 1.1 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-2'>Version 1.1</h5>
				<BannerHeading>
					{props.bannersData.pastBanners['version 1.1'].map((e, index) => {
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
			</section>
			{/* <----- Version 1.0 -----> */}
			<section>
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
			</section>
		</CardComponent>
	);
};

export default PastBanners;
