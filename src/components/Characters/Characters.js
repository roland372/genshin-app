import React, { useState } from 'react';

import { IoGrid } from 'react-icons/io5';
import { FaThList, FaSort } from 'react-icons/fa';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import SingleCharacter from './SingleCharacter';
import SingleCharacterGrid from './SingleCharacterGrid';

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

	// display as list or grid state
	const [charactersDisplay, setCharactersDisplay] = useState(false);

	// display menu items state
	const [menuItems, setMenuItems] = useState(characters);

	// elements filtering state
	const [elements, setElements] = useState(allElements);

	// weapons filtering state
	const [weapons, setWeapons] = useState(allWeapons);

	// search state
	const [searchTerm, setSearchTerm] = useState('');

	// sorting state
	const [order, setOrder] = useState('DSC');

	const sorting = column => {
		if (order === 'ASC') {
			const sorted = [...menuItems].sort((a, b) =>
				a[column] > b[column] ? 1 : -1
			);
			console.log(typeof column);
			setMenuItems(sorted);
			setOrder('DSC');
		}
		if (order === 'DSC') {
			const sorted = [...menuItems].sort((a, b) =>
				a[column] < b[column] ? 1 : -1
			);
			setMenuItems(sorted);
			setOrder('ASC');
		}
	};

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
					<section className='ps-2'>
						<button
							className='btn btn-warning'
							onClick={() => setCharactersDisplay(!charactersDisplay)}
						>
							{charactersDisplay ? <IoGrid /> : <FaThList />}
						</button>
					</section>
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

				{charactersDisplay ? (
					// Display characters as list
					<div className='table-responsive mx-3'>
						<table
							className='table table-striped table-sm table-hover table-dark align-middle'
							style={{ minWidth: '700px' }}
						>
							<thead>
								<tr>
									<th scope='col'>#</th>
									<th scope='col'>Icon</th>
									<th scope='col'>
										Name
										<FaSort onClick={() => sorting('name')} />
									</th>
									<th scope='col'>
										Rarity
										<FaSort onClick={() => sorting('rarity')} />
									</th>
									<th scope='col' style={{ minWidth: '90px' }}>
										Element
										<FaSort onClick={() => sorting('element')} />
									</th>
									<th scope='col' style={{ minWidth: '90px' }}>
										Weapon
										<FaSort onClick={() => sorting('weapon')} />
									</th>
									<th scope='col'>
										Sex
										<FaSort onClick={() => sorting('sex')} />
									</th>
									<th scope='col'>
										Nation
										<FaSort onClick={() => sorting('nation')} />
									</th>
									<th scope='col'>
										HP
										<FaSort onClick={() => sorting('HP')} />
									</th>
									<th scope='col' style={{ minWidth: '60px' }}>
										ATK
										<FaSort onClick={() => sorting('ATK')} />
									</th>
									<th scope='col' style={{ minWidth: '60px' }}>
										DEF
										<FaSort onClick={() => sorting('DEF')} />
									</th>
									<th scope='col' style={{ minWidth: '100px' }}>
										Ascension
										<FaSort onClick={() => sorting('ascension')} />
									</th>
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
				) : (
					// <----- Display characters as grid ----->
					<div
						className='d-flex align-items-around 
					flex-wrap mt-2 ms-2'
					>
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
									<SingleCharacterGrid
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
					</div>
				)}
			</CardComponent>
		</Container>
	);
};

export default Characters;
