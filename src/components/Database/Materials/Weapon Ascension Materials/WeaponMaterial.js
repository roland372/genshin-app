import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const WeaponMaterial = props => {
	const materialNames = props.ascensionMaterial.replaceAll(' ', '_');

	return (
		<tr className='text-color'>
			<td className='ps-4'>
				<OverlayTrigger
					placement='top'
					overlay={<Tooltip>{props.ascensionMaterial}</Tooltip>}
				>
					<img
						src={`/images/Materials/Weapon Materials/Ascension/Item_${materialNames}.png`}
						width='60px'
						alt={props.ascensionMaterial}
					/>
				</OverlayTrigger>
			</td>
			<td>
				<h6>{props.days}</h6>
			</td>
			<td className='pe-4'>
				<div>
					{props.weaponsData.weapons.map(weapon =>
						weapon.ascensionMaterial1.slice(49, -4).replaceAll('_', ' ') ===
						props.ascensionMaterial ? (
							<OverlayTrigger
								key={weapon.name}
								placement='top'
								overlay={<Tooltip>{weapon.name}</Tooltip>}
							>
								<img
									// key={weapon.name}
									className='img-fluid'
									src={weapon.image}
									width='60px'
									alt={weapon.name}
									// title={weapon.name}
								/>
							</OverlayTrigger>
						) : null
					)}
				</div>
			</td>
		</tr>
	);
};

export default WeaponMaterial;
