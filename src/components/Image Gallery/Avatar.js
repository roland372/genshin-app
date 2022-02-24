import React from 'react';

const Avatar = ({ characters, handleClick }) => {
	return (
		<section>
			<h2 className='border-bottom mx-2'>Avatars</h2>
			<div className='mx-2'>
				<div className='row'>
					{characters.map((c, index) => (
						<div key={c.data.name} className='col-lg-2 col-sm-2 col-3 mb-2'>
							<img
								className='w-100 shadow-1-strong rounded mb-2'
								src={c.data.avatar}
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

export default Avatar;
