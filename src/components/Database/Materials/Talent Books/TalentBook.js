import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TalentBook = props => {
	return (
		<tr className='text-light'>
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
			<td>
				<h6 className='my-1'>{props.days}</h6>
			</td>
			<td className='pe-4'>
				<div className='d-flex justify-content-center'>
					{props.charactersData.characters.map(character =>
						character.talentBook === props.talentBook ? (
							<OverlayTrigger
								key={character.name}
								placement='top'
								overlay={<Tooltip>{character.name}</Tooltip>}
							>
								<div>
									<Link to={`characters/${character.url}`}>
										<img
											// key={character.name}
											className='img'
											src={character.image}
											width='60px'
											alt={character.name}
											// title={character.name}
										/>
									</Link>
								</div>
							</OverlayTrigger>
						) : null
					)}
				</div>
			</td>
		</tr>
	);
};

export default TalentBook;
