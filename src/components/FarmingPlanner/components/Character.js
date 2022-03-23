import React from 'react';

const Character = props => {
	const { characters, characterSelect } = props;
	return (
		<section>
			<div className='text-light'>
				{characters.characters.map(c =>
					c.name === characterSelect ? (
						<div
							className='d-flex flex-column border align-items-center justify-content-center'
							key={c.name}
						>
							<div className='d-flex align-items-center'>
								<div className='text-center'>{c.name}</div>
								<img className='p-1' src={c.rarityImage} alt='' />
							</div>
							<img src={c.image} alt='' className='img-fluid' width='300px' />
						</div>
					) : (
						<div key={c.name}></div>
					)
				)}
			</div>
		</section>
	);
};

export default Character;
