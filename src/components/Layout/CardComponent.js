import React from 'react';

const CardComponent = props => {
	return (
		<section className='dark-blue-shadow rounded-3 my-3 p-3'>
			<h3 className='medium-blue rounded-2 p-2 mx-2 text-center'>
				{props.title}
			</h3>
			{props.children}
		</section>
	);
};

export default CardComponent;
