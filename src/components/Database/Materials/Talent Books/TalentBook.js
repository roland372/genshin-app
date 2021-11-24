import React from 'react';

const TalentBook = props => {
	return (
		<tr>
			<td>
				<img
					src={`/images/Materials/Character Materials/Talents/${props.talentBook}/Item_Teachings_of_${props.talentBook}.png`}
					width='80px'
					alt={props.talentBook}
					title={props.talentBook}
				/>
			</td>
			<td>
				<h6>{props.days}</h6>
			</td>
			<td>
				<div>
					{props.charactersData.characters.map(character =>
						character.talentBook === props.talentBook ? (
							<img
								key={character.name}
								src={character.image}
								width='80px'
								alt={character.name}
								title={character.name}
							/>
						) : null
					)}
				</div>
			</td>
		</tr>
	);
};

export default TalentBook;
