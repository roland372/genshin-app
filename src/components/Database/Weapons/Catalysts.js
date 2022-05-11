import React from 'react';

//? <----- Components ----->
import Weapon from './Weapon';

const Catalysts = props => {
	const { weapons } = props;

	return (
		<div>
			<h4 className=''>Catalysts</h4>
			{weapons.weapons[0].catalysts.map(weapon => {
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

export default Catalysts;
