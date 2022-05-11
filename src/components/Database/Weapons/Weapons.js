import React, { useState } from 'react';

//? <----- Icons ----->
import { AiOutlineStar } from 'react-icons/ai';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Weapon from './Weapon';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

//? <----- Data ----->
import data from '../../../assets/data/Weapons/weapons.json';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Weapons = () => {
	useDocumentTitle('Weapons');

	const { weapons } = data;

	const weaponTypes = [...new Set(weapons.map(weapon => weapon.type))];
	weaponTypes.sort().unshift('All');

	const allRarities = [...new Set(weapons.map(weapon => weapon.rarity))];
	allRarities.sort();
	allRarities.reverse();

	const [menuItems, setMenuItems] = useState(weapons);
	const [weaponType, setWeaponType] = useState(weaponTypes);
	const [rarityType] = useState(allRarities);

	const [searchTerm, setSearchTerm] = useState('');

	const filterWeaponTypes = type => {
		if (type === 'All') {
			setMenuItems(weapons);
			setWeaponType(weaponTypes);
			return;
		}
		const newData = weapons.filter(weapon => weapon.type === type);
		// console.log(newData);
		setMenuItems(newData);
	};

	const filterRarities = rarity => {
		if (rarity === 'All') {
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
				<div className='d-xl-flex justify-content-lg-between align-middle mx-2'>
					{/* //* <----- Weapon filtering -----> */}
					<section className=''>
						{weaponType.map((type, index) => {
							return (
								<button
									type='button'
									className='btn btn-sm m-1 p-1'
									key={index}
									onClick={() => filterWeaponTypes(type)}
								>
									<OverlayTrigger
										placement='top'
										overlay={
											<Tooltip>
												<div className='text-capitalize'>{type}</div>
											</Tooltip>
										}
									>
										<img
											src={`images/Weapon icons/Weapon-class-${type}-icon.png`}
											alt={type}
											className='img-fluid'
											width='30px'
										/>
									</OverlayTrigger>
								</button>
							);
						})}
					</section>
					<section>
						{rarityType.map((type, index) => {
							let rarityColor = '';
							if (type === 5) {
								rarityColor = 'rarity5bg';
							} else if (type === 4) {
								rarityColor = 'rarity4bg';
							} else if (type === 3) {
								rarityColor = 'rarity3bg';
							}
							return (
								<button
									type='button'
									className='btn btn-sm m-1 p-1'
									key={index}
									onClick={() => filterRarities(type)}
								>
									<OverlayTrigger
										placement='top'
										overlay={<Tooltip>{type}</Tooltip>}
									>
										<div className={rarityColor}>
											<AiOutlineStar className={rarityColor} size={30} />
										</div>
									</OverlayTrigger>
								</button>
							);
						})}
					</section>
					<section>
						<input
							type='text'
							className='form-control dark-blue'
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
