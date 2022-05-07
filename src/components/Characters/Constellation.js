import React from 'react';

const Constellation = props => {
	return (
		<tr className='text-color'>
			<td className='px-3'>{props.level}</td>
			<td>
				<img src={props.image} width='50px' alt='' />
			</td>
			<td>{props.name}</td>
			<td className='text-start'>{props.description}</td>
		</tr>
	);
};

export default Constellation;
