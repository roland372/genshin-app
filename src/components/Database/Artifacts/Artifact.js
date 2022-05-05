import React from 'react';

const Artifact = props => {
	return (
		<tr className='new-line align-middle'>
			<th scope='row'>{props.name}</th>
			<td>{props.rarity}</td>
			<td>
				<img className='img' src={props.image} width='50px' alt='' />
			</td>
			<td className='text-start'>
				<div>
					<b>2 Piece: </b>
					{props.bonus1}
				</div>
				<div>
					<b>4 Piece: </b>
					{props.bonus2}
				</div>
			</td>
		</tr>
	);
};

export default Artifact;
