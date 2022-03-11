import React from 'react';

const Card = ({ characters, handleClick }) => {
	return (
		<section>
			<h2 className='border-bottom mx-2'>Cards</h2>
			<div className='mx-2'>
				<div className='row'>
					{characters.map((c, index) => (
						<div key={c.data.name} className='col-lg-2 col-sm-3 col-4 mb-2'>
							<img
								className='w-100 shadow-1-strong rounded mb-2'
								src={c.data.card}
								alt={c.data.name}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Card;
