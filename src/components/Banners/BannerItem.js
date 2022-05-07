import React from 'react';

const BannerItem = props => {
	return (
		<tr className='text-color'>
			<td
				style={{
					width: '400px',
				}}
			>
				<img src={props.image} className='img-fluid' alt='' />
			</td>
			<td>
				<h6>
					<a
						href={props.link}
						target='_blank'
						rel='noreferrer'
						className='link-info text-decoration-none'
					>
						{props.name}
					</a>
				</h6>
			</td>
			<td>
				<h6>{props.startDate}</h6>
			</td>
			<td>
				<h6>{props.endDate}</h6>
			</td>
		</tr>
	);
};

export default BannerItem;
