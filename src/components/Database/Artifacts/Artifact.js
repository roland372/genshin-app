import React from 'react';

const Artifact = props => {
	return (
		<tr>
			<th scope='row'>{props.name}</th>
			<td>4-5★</td>
			<td>
				<img
					className='img-thumbnail border-0 bg-secondary'
					src={props.image}
					width='64px'
					alt=''
				/>
			</td>
			<td>
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
