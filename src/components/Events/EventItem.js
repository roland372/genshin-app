import React from 'react';

const EventItem = props => {
	return (
		<tr>
			<td>
				<img src={props.image} className='img-fluid' width='500px' alt='' />
			</td>
			<td>{props.name}</td>
			<td>{props.startDate}</td>
			<td>{props.endDate}</td>
		</tr>
	);
};

export default EventItem;
