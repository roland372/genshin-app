import React from 'react';

//? <----- Components ----->
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion/dist/framer-motion';

const WeaponMaterial = props => {
	const materialNames = props.ascensionMaterial.replaceAll(' ', '_');

	return (
		<tr className='text-color'>
			<td className='ps-4'>
				<motion.div
					whileHover={{ scale: 1.2 }}
					initial={{ x: -50 }}
					animate={{ x: 0 }}
				>
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
				</motion.div>
			</td>
			<td>
				<h6>{props.days}</h6>
			</td>
			<td className='pe-4'>
				<div className='d-flex justify-content-center  flex-wrap'>
					{props.weaponsData.weapons.map(weapon =>
						weapon.ascensionMaterial1.slice(49, -4).replaceAll('_', ' ') ===
						props.ascensionMaterial ? (
							<motion.div
								whileHover={{ scale: 1.1 }}
								initial={{ x: 20 }}
								animate={{ x: 0 }}
								key={weapon.name}
							>
								<OverlayTrigger
									placement='top'
									overlay={<Tooltip>{weapon.name}</Tooltip>}
								>
									<img
										// key={weapon.name}
										className='img'
										src={weapon.image}
										width='60px'
										alt={weapon.name}
										// title={weapon.name}
									/>
								</OverlayTrigger>
							</motion.div>
						) : null
					)}
				</div>
			</td>
		</tr>
	);
};

export default WeaponMaterial;
