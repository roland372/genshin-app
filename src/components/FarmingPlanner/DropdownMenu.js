import React, { useState } from 'react';
import data from '../../assets/data/Characters/characters.json';

const DropdownMenu = ({ selected, setSelected }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<section className='border' style={{ maxWidth: '400px' }}>
			<div
				className='btn btn-primary w-100'
				onClick={e => setIsActive(!isActive)}
			>
				{selected}
			</div>
			{isActive && (
				<div
					style={{
						maxHeight: '400px',
						overflow: 'hidden',
						overflowY: 'scroll',
					}}
				>
					{data.characters.map(character => {
						return (
							<div
								className='d-flex justify-content-between align-content-center'
								onClick={e => {
									setSelected(character.name);
									setIsActive(false);
									console.log(character.name);
								}}
								key={character.name}
							>
								<div className='mx-2'>
									<img
										src={character.image}
										width='40px'
										alt={character.name}
									/>
									{character.name}
								</div>
								<div className='mx-2'>
									<img
										src={character.elementImage}
										width='40px'
										alt={character.element}
									/>
									<img
										src={character.weaponImage}
										width='40px'
										alt={character.weapon}
									/>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default DropdownMenu;
