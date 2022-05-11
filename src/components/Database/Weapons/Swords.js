import React from 'react';

//? <----- Components ----->
import Weapon from './Weapon';

const Swords = props => {
	const { weapons } = props;

	return (
		<div>
			<h4 className=''>Swords</h4>
			{weapons.weapons[0].swords.map(weapon => {
				const {
					name,
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
		</div>
	);
};

export default Swords;
