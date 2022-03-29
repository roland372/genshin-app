import React, { useState } from 'react';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import SingleCharacter from './SingleCharacter';

import data from '../../assets/data/Characters/characters.json';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const { characters } = data;

// elements filtering
const allElements = [
	'all',
	...new Set(characters.map(elements => elements.element)),
];

// wepons filtering
const allWeapons = [
	'all',
	...new Set(characters.map(weapons => weapons.weapon)),
];

const Characters = () => {
	useDocumentTitle('Characters');

	// display menu items
	const [menuItems, setMenuItems] = useState(characters);

	// elements filtering
	const [elements, setElements] = useState(allElements);

	// weapons filtering
	const [weapons, setWeapons] = useState(allWeapons);

	// search
	const [searchTerm, setSearchTerm] = useState('');

	// console.log(allElements);

	const filterElements = element => {
		if (element === 'all') {
			setMenuItems(characters);
			setElements(elements);
			return;
		}
		const newData = characters.filter(
			character => character.element === element
		);
		// console.log(newData);
		setMenuItems(newData);
	};

	const filterWeapons = weapon => {
		if (weapon === 'all') {
			setMenuItems(characters);
			setWeapons(weapons);
			return;
		}
		const newData = characters.filter(character => character.weapon === weapon);
		// console.log(newData);
		setMenuItems(newData);
	};

	return (
		<Container>
			<CardComponent title='Playable Characters'>
				<div className='d-xl-flex justify-content-lg-between align-middle'>
					{/* elements filtering */}
					<section className='ps-2'>
						{elements.map((element, index) => {
							return (
								<button
									type='button'
									className='btn btn-sm btn-dark p-1'
									key={index + element}
									onClick={() => filterElements(element)}
								>
									<OverlayTrigger
										placement='top'
										overlay={<Tooltip>{element}</Tooltip>}
									>
										<img
											src={`images/Elements/Element_${element}.png`}
											alt={element}
											className='img-fluid'
											width='30px'
										/>
									</OverlayTrigger>

									{/* {element} */}
								</button>
							);
						})}
					</section>
					{/* weapon filtering */}
					<section className=''>
						{weapons.map((weapon, index) => {
							return (
								<button
									type='button'
									className='btn btn-sm btn-dark p-1'
									key={weapon}
									onClick={() => filterWeapons(weapon)}
								>
									<OverlayTrigger
										placement='top'
										overlay={<Tooltip>{weapon}</Tooltip>}
									>
										<img
											src={`images/Weapon icons/Weapon-class-${weapon}-icon.png`}
											alt={weapon}
											className='img-fluid'
											width='30px'
										/>
									</OverlayTrigger>

									{/* {weapon} */}
								</button>
							);
						})}
					</section>
					{/* searching input */}
					<section className='mx-2'>
						<form>
							<div className='text-start'>
								{/* <label htmlFor='searchForCharacter'>Search for character</label> */}
							</div>
							<input
								type='text'
								className='form-control'
								placeholder='Search for a character'
								onChange={event => {
									setSearchTerm(event.target.value);
									// console.log(event.target.value);
								}}
							/>
						</form>
					</section>
				</div>
				<div className='table-responsive mx-3'>
					<table
						className='table table-striped table-sm table-hover table-dark align-middle'
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
							{menuItems
								.filter(value => {
									if (searchTerm === '') {
										return value;
									} else if (
										value.name
											.toLowerCase()
											.includes(searchTerm.toLocaleLowerCase())
									) {
										return value;
									}
									return 0;
								})
								.map((character, index) => {
									return (
										<SingleCharacter
											key={index}
											index={index + 1}
											icon={character.image}
											name={character.name}
											url={character.url}
											rarityImage={character.rarityImage}
											rarity={character.rarity}
											elementImage={character.elementImage}
											elementName={character.element}
											weaponImage={character.weaponImage}
											weaponName={character.weapon}
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
