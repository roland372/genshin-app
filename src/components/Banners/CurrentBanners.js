import React from 'react';
import BannerItem from './BannerItem';
import CardComponent from '../Layout/CardComponent';

const CurrentBanners = props => {
	return (
		<CardComponent title='Current Banners'>
			<div className='table-responsive mx-3'>
				<table
					className='table table-dark table-striped table-sm align-middle'
					style={{ minWidth: '700px' }}
				>
					<thead>
						<tr>
							<th scope='col'>Image</th>
							<th scope='col'>Name</th>
							<th scope='col'>Start</th>
							<th scope='col'>End</th>
						</tr>
					</thead>
					<tbody>
						{props.bannersData.currentBanners.map((e, index) => {
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
					</tbody>
				</table>
			</div>
		</CardComponent>
	);
};

export default CurrentBanners;
