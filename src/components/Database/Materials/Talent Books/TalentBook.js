import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TalentBook = props => {
	return (
		<tr>
			<td>
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
			<td>
				<div>
					{props.charactersData.characters.map(character =>
						character.talentBook === props.talentBook ? (
							<OverlayTrigger
								key={character.name}
								placement='top'
								overlay={<Tooltip>{character.name}</Tooltip>}
							>
								<img
									// key={character.name}
									className='img-fluid'
									src={character.image}
									width='60px'
									alt={character.name}
									// title={character.name}
								/>
							</OverlayTrigger>
						) : null
					)}
				</div>
			</td>
		</tr>
	);
};

export default TalentBook;
