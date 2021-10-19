import React from 'react';

const SingleCharacter = props => {
	return (
		<tr>
			<td>
				<img src={props.icon} width='80px' alt='' />
			</td>
			<td>{props.name}</td>
			<td>
				<img src={props.rarity} alt='' />
			</td>
			<td>
				<img src={props.element} width='32px' alt='' />
			</td>
			<td>
				<img src={props.weapon} width='32px' alt='' />
			</td>
			<td>{props.sex}</td>
			<td>{props.nation}</td>
			<td>{props.HP}</td>
			<td>{props.ATK}</td>
			<td>{props.DEF}</td>
			<td>{props.ascensionBonus}</td>
		</tr>
	);
};

export default SingleCharacter;
