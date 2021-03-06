import React from 'react';

const EventItem = props => {
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
						className='link-color'
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

export default EventItem;
