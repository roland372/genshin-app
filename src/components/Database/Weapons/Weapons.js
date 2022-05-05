import React, { useState } from 'react';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Weapon from './Weapon';
import data from '../../../assets/data/Weapons/weapons.json';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const { weapons } = data;

const Weapons = () => {
	useDocumentTitle('Weapons');

	const weaponTypes = [...new Set(weapons.map(weapon => weapon.type))];
	weaponTypes.sort().unshift('all');

	const allRarities = [...new Set(weapons.map(weapon => weapon.rarity))];
	allRarities.sort();
	allRarities.reverse();

	const [menuItems, setMenuItems] = useState(weapons);
	const [weaponType, setWeaponType] = useState(weaponTypes);
	const [rarityType] = useState(allRarities);

	// search
	const [searchTerm, setSearchTerm] = useState('');

	const filterWeaponTypes = type => {
		if (type === 'all') {
			setMenuItems(weapons);
			setWeaponType(weaponTypes);
			return;
		}
		const newData = weapons.filter(weapon => weapon.type === type);
		// console.log(newData);
		setMenuItems(newData);
	};

	const filterRarities = rarity => {
		if (rarity === 'all') {
			setMenuItems(weapons);
			setWeaponType(weaponTypes);
			return;
		}
		const newData = weapons.filter(weapon => weapon.rarity === rarity);
		// console.log(newData);
		setMenuItems(newData);
	};

	return (
		<Container>
			<CardComponent title='Weapons'>
				<div className='d-md-flex justify-content-between align-middle mx-2'>
					<section className=''>
						{weaponType.map((type, index) => {
							return (
								<button
									type='button'
									className='btn btn-sm btn-dark m-1 p-1'
									key={index}
									onClick={() => filterWeaponTypes(type)}
								>
									{/* {type} */}
									<img
										src={`images/Weapon icons/Weapon-class-${type}-icon.png`}
										alt={type}
										title={type}
										className='img-fluid'
										width='30px'
									/>
								</button>
							);
						})}
						{rarityType.map((type, index) => {
							return (
								<button
									type='button'
									className='btn btn-sm btn-dark m-1 p-1'
									key={index}
									onClick={() => filterRarities(type)}
								>
									{/* {type} */}
									<img
										src={`images/Weapon icons/Weapon-class-${type}-icon.png`}
										alt={type}
										title={type}
										className='img-fluid'
										width='30px'
									/>
								</button>
							);
						})}
					</section>
					<section>
						<input
							type='text'
							className='form-control'
							placeholder='Search for a weapon'
							onChange={event => {
								setSearchTerm(event.target.value);
								// console.log(event.target.value);
							}}
						/>
					</section>
				</div>
				{menuItems
					.filter(value => {
						if (value.name === '') {
							return value;
						} else if (
							value.name
								.toLocaleLowerCase()
								.includes(searchTerm.toLocaleLowerCase())
						) {
							return value;
						}
						return 0;
					})
					.map(weapon => {
						const {
							name,
							type,
							image,
							baseAtk,
							maxAtk,
							secondStatType,
							secondStatMin,
							secondStatMax,
							description,
							rarity,
						} = weapon;

						return (
							<Weapon
								key={name}
								weapon={weapon}
								type={type}
								name={name}
								image={image}
								baseAtk={baseAtk}
								maxAtk={maxAtk}
								secondStatType={secondStatType}
								secondStatMin={secondStatMin}
								secondStatMax={secondStatMax}
								description={description}
								rarity={rarity}
							/>
						);
					})}
			</CardComponent>
		</Container>
	);
};

export default Weapons;
