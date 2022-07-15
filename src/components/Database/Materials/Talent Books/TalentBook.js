import React from 'react';

//? <----- Router ----->
import { Link } from 'react-router-dom';

//? <----- Components ----->
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TalentBook = props => {
	let rarityColor = '';

	return (
		<tr className='text-color'>
			<td className='ps-4'>
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
							<OverlayTrigger
								key={character.name}
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
						) : null;
					})}
				</div>
			</td>
		</tr>
	);
};

export default TalentBook;
