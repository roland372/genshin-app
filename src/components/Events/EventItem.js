import React from 'react';

const EventItem = props => {
	return (
		<tr>
			<td>
				<img src={props.image} className='img-fluid' width='500px' alt='' />
			</td>
			<td>
				<a
					href={props.link}
					target='_blank'
					rel='noreferrer'
					className='link-info text-decoration-none'
				>
					{props.name}
				</a>
			</td>
			<td>{props.startDate}</td>
			<td>{props.endDate}</td>
		</tr>
	);
};

export default EventItem;
