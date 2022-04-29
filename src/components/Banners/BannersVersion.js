import React from 'react'
import BannerItem from './BannerItem';
import BannerHeading from './BannerHeading';

const BannersVersion = (props) => {
  const {bannersData, version} = props;

  return (
    <section>
				<h5 className='text-start ms-3 mt-3'>Version {version}</h5>
				<BannerHeading>
					{bannersData.pastBanners[`version ${version}`].map((e, index) => {
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
  )
}

export default BannersVersion