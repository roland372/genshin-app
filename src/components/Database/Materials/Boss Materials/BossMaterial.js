import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const BossMaterial = props => {
	const { bossMaterial, bossName, characters } = props;
	
	return (
		<tr>
			<td>
				<OverlayTrigger
					placement='top'
					overlay={<Tooltip>{bossMaterial}</Tooltip>}
				>
					<img
						src={`/images/Materials/Character Materials/Talents/Boss Drops/Item_${bossMaterial
							.split(' ')
							.join('_')}.png`}
						width='60px'
						alt={bossMaterial}
					/>
				</OverlayTrigger>
			</td>
			<td>
				<h6>{bossName}</h6>
			</td>
			<td>
				<div>
					{characters.map(character =>
						character.data.talentMaterials[8].bossMaterialImage
							.slice(61, -4)
							.split('_')
							.join(' ') === bossMaterial ? (
							<OverlayTrigger
								key={character.data.name}
								placement='top'
								overlay={<Tooltip>{character.data.name}</Tooltip>}
							>
								<img
									className='img-fluid'
									src={character.data.thumbnail}
									width='60px'
									alt={character.data.name}
								/>
							</OverlayTrigger>
						) : null
					)}
				</div>
			</td>
		</tr>
	);
};

export default BossMaterial;
