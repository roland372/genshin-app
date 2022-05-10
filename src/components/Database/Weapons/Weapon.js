import React from 'react';

const Weapon = props => {
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
	} = props;

	let rarityColor = '';
	if (rarity === 5) {
		rarityColor = 'rarity5bg';
	} else if (rarity === 4) {
		rarityColor = 'rarity4bg';
	} else if (rarity === 3) {
		rarityColor = 'rarity3bg';
	}

	let statType = '';
	if (secondStatType === 'Elemental Mastery') {
		statType = '';
	} else {
		statType = '%';
	}

	return (
		<section className='p-2 new-line' key={name}>
			<div className='bg-gradient rounded'>
				<h3 className={`${rarityColor} rounded p-1`}>{name}</h3>
				<section className='d-flex p-3'>
					<div>
						<img
							src={image}
							width='90px'
							alt=''
							className={`${rarityColor} rounded img-fluid`}
						/>
					</div>
					<div className='mx-4 text-start'>
						<p>
							<b>Base ATK</b> {baseAtk} - {maxAtk}
						</p>
						<p>
							<b>{secondStatType}</b>
							<span className='p-1'>
								{secondStatMin}
								{statType}
							</span>{' '}
							- {secondStatMax}
							{statType}
						</p>
					</div>
				</section>
				<div className='border-bottom mx-3 mb-2'></div>
				<div className='bold'>
					<p className='text-start mx-3'>{description}</p>
				</div>
			</div>
		</section>
	);
};

export default Weapon;
