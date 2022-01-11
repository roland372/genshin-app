import React from 'react';

import Weapon from './Weapon';

const Claymores = props => {
	const { weapons } = props;

	return (
		<div>
			<h4 className=''>Claymores</h4>
			{weapons.weapons[0].claymores.map(weapon => {
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

export default Claymores;
