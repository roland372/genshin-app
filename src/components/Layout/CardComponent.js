import React from 'react';

const CardComponent = props => {
	return (
		<section className='rounded-3 my-3 bg-dark p-3'>
			<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
				{props.title}
			</h3>
			{props.children}
		</section>
	);
};

export default CardComponent;
