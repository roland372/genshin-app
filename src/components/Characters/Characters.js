import React, { useState } from 'react';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import SingleCharacter from './SingleCharacter';

import data from '../../assets/data/Characters/characters.json';

const { characters } = data;

const allElements = [
	'all',
	...new Set(characters.map(elements => elements.element)),
];

const Characters = () => {
	const [menuItems, setMenuItems] = useState(characters);
	const [elements, setElements] = useState(allElements);

	// console.log(allElements);

	const filterElements = element => {
		if (element === 'all') {
			setMenuItems(characters);
			return;
		}
		const newData = characters.filter(
			character => character.element === element
		);
		// console.log(newData);
		setMenuItems(newData);
	};

	return (
		<Container>
			<CardComponent title='Playable Characters'>
				<section>
					{elements.map((element, index) => {
						return (
							<button
								type='button'
								className='btn btn-light'
								key={index}
								onClick={() => filterElements(element)}
							>
								{element}
							</button>
						);
					})} 
				</section>
				<div className='table-responsive mx-3'>
					<table
						className='table table-striped table-dark align-middle'
						style={{ minWidth: '700px' }}
					>
						<thead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Icon</th>
								<th scope='col'>Name</th>
								<th scope='col'>Rarity</th>
								<th scope='col'>Element</th>
								<th scope='col'>Weapon</th>
								<th scope='col'>Sex</th>
								<th scope='col'>Nation</th>
								<th scope='col'>HP</th>
								<th scope='col'>ATK</th>
								<th scope='col'>DEF</th>
								<th scope='col'>Ascension</th>
							</tr>
						</thead>
						<tbody>
							{menuItems.map((character, index) => {
								return (
									<SingleCharacter
										key={index}
										index={index + 1}
										icon={character.image}
										name={character.name}
										url={character.url}
										rarity={character.rarityImage}
										element={character.elementImage}
										weapon={character.weaponImage}
										sex={character.sex}
										nation={character.nation}
										HP={character.HP}
										ATK={character.ATK}
										DEF={character.DEF}
										ascension={character.ascension}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Characters;
