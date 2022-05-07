import React from 'react';

const CharacterInfo = props => {
	return (
		<div className='table-responsive mx-2 rounded'>
			<table
				className='table table-sm bg-primary-dark text-color align-middle table-borderless'
				style={{ minWidth: '600px' }}
			>
				<tbody className='dark-blue text-light'>
					<tr>
						<td rowSpan='15'>
							<img src={props.avatar} width='200px' className='me-2' alt='' />
						</td>
					</tr>
					<tr>
						<td>Title</td>
						<td>{props.title}</td>
					</tr>
					<tr>
						<td>Rarity</td>
						<td>
							<img src={props.rarity} alt='' />
						</td>
					</tr>
					<tr>
						<td>Element</td>
						<td>
							<img src={props.element} width='50px' alt='' />
						</td>
					</tr>
					<tr>
						<td>Weapon</td>
						<td>
							<img src={props.weapon} width='50px' alt='' />
						</td>
					</tr>
					<tr>
						<td>Sex</td>
						<td>{props.sex}</td>
					</tr>
					<tr>
						<td>Birthday</td>
						<td>{props.birthday}</td>
					</tr>
					<tr>
						<td>Constellation</td>
						<td>{props.constellation}</td>
					</tr>
					<tr>
						<td>Nation</td>
						<td>{props.nation}</td>
					</tr>
					<tr>
						<td>Affiliation</td>
						<td>{props.affiliation}</td>
					</tr>
					<tr>
						<td>Special Dish</td>
						<td>{props.specialDish}</td>
					</tr>
					<tr>
						<td>In-game descrption</td>
						<td>{props.description}</td>
					</tr>
					<tr>
						<td>Talent Book</td>
						<td>
							<img src={props.talentBook} width='64px' alt='' />
						</td>
					</tr>
					<tr>
						<td>Ascension Materials</td>
						<td>
							<img src={props.ascensionMaterial1} width='64px' alt='' />
							<img src={props.ascensionMaterial2} width='64px' alt='' />
							<img src={props.ascensionMaterial3} width='64px' alt='' />
							<img src={props.ascensionMaterial4} width='64px' alt='' />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CharacterInfo;
