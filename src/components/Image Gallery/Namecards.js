import React from 'react';

const Namecards = ({ characters, handleClick }) => {
	return (
		<section>
			<h2 className='border-bottom mx-2'>Character Namecards</h2>
			<div className='mx-2'>
				<div className='row'>
					{characters.map((c, index) => (
						<div key={c.data.name} className='col-lg-3 col-md-4 col-4'>
							<img
								className='w-100 shadow-1-strong rounded mb-4'
								src={c.data.namecard}
								alt={c.data.name}
								onClick={() => handleClick(c, index)}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Namecards;
