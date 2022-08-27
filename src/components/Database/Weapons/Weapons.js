import React, { useState } from 'react';

//? <----- Icons ----->
import { AiOutlineStar } from 'react-icons/ai';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Weapon from './Weapon';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion/dist/framer-motion';

//? <----- Data ----->
import data from '../../../assets/data/Weapons/weapons.json';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Weapons = () => {
	useDocumentTitle('Weapons');

	//* Animation variables
	const initial = { x: -10 };
	const initialReverse = { x: 10 };
	const animate = { x: 0 };
	const delay = 0.1;
	const type = 'spring';
	const bounce = 0.5;
	const whileHover = { scale: 1.1 };

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
					<motion.div
						className=''
						initial={initial}
						animate={animate}
						transition={{ delay: delay, type: type, bounce: bounce }}
					>
						{weaponType.map((type, index) => {
							return (
								<button
									type='button'
									className='btn btn-sm m-1 p-1 shadow-none'
									key={index}
									onClick={() => filterWeaponTypes(type)}
								>
									<motion.div whileHover={whileHover}>
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
									</motion.div>
								</button>
							);
						})}
					</motion.div>
					<motion.div
						initial={{ y: -10 }}
						animate={{ y: 0 }}
						transition={{ delay: delay, type: type, bounce: bounce }}
					>
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
									className='btn btn-sm m-1 p-1 shadow-none'
									key={index}
									onClick={() => filterRarities(type)}
								>
									<motion.div whileHover={whileHover}>
										<OverlayTrigger
											placement='top'
											overlay={<Tooltip>{type}</Tooltip>}
										>
											<div className={rarityColor}>
												<AiOutlineStar className={rarityColor} size={30} />
											</div>
										</OverlayTrigger>
									</motion.div>
								</button>
							);
						})}
					</motion.div>
					<motion.div
						initial={initialReverse}
						animate={animate}
						transition={{ delay: delay, type: type, bounce: bounce }}
					>
						<input
							type='text'
							className='form-control dark-blue'
							placeholder='Search for a weapon'
							onChange={event => {
								setSearchTerm(event.target.value);
								// console.log(event.target.value);
							}}
						/>
					</motion.div>
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
