import React from 'react';

const Artifact = ({ name, rarity, image, bonus1, bonus2 }) => {
	let rarityColor = '';
	if (rarity === '5★') {
		rarityColor = 'rarity5bg';
	} else if (rarity === '4★') {
		rarityColor = 'rarity4bg';
	} else if (rarity === '3★') {
		rarityColor = 'rarity3bg';
	}

	return (
		<tr className='new-line align-middle text-color'>
			<th scope='row'>{name}</th>
			<td>{rarity}</td>
			<td>
				<img
					className={`${rarityColor} rounded img-fluid`}
					src={image}
					width='50px'
					alt=''
				/>
			</td>
			<td className='text-start'>
				<div>
					<b>2 Piece: </b>
					{bonus1}
				</div>
				<div>
					<b>4 Piece: </b>
					{bonus2}
				</div>
			</td>
		</tr>
	);
};

export default Artifact;
