import React from 'react';

//? <----- Router ----->
import { Link } from 'react-router-dom';

//? <----- Components ----->
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion/dist/framer-motion';

const TalentBook = props => {
	let rarityColor = '';

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
						overlay={<Tooltip>{props.talentBook}</Tooltip>}
					>
						<img
							src={`/images/Materials/Character Materials/Talents/${props.talentBook}/Item_Teachings_of_${props.talentBook}.png`}
							width='60px'
							alt={props.talentBook}
						/>
					</OverlayTrigger>
				</motion.div>
			</td>
			<td style={{ maxWidth: '100px' }}>
				<h6 className='my-1'>{props.days}</h6>
			</td>
			<td className='pe-4'>
				<div className='d-flex justify-content-center  flex-wrap'>
					{props.charactersData.characters.map(character => {
						character.rarity === 5
							? (rarityColor = 'rarity5bg')
							: (rarityColor = 'rarity4bg');
						return character.talentBook === props.talentBook ? (
							<motion.div
								whileHover={{ scale: 1.1 }}
								initial={{ x: 20 }}
								animate={{ x: 0 }}
								key={character.name}
							>
								<OverlayTrigger
									placement='top'
									overlay={<Tooltip>{character.name}</Tooltip>}
								>
									<div className='m-1'>
										<Link to={`characters/${character.url}`}>
											<img
												className={`img-fluid img-thumbnail ${rarityColor}`}
												src={character.image}
												width='60px'
												alt={character.name}
											/>
										</Link>
									</div>
								</OverlayTrigger>
							</motion.div>
						) : null;
					})}
				</div>
			</td>
		</tr>
	);
};

export default TalentBook;
