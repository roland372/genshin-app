import React from 'react';

const ElementalBurst = props => {
	return (
		<section className='my-3 py-2 px-4 mx-2 bg-primary-dark border-0 rounded'>
			<div className='d-flex'>
				<img
					src={props.image}
					className='me-3 img-fluid align-self-center'
					width='50px'
					alt=''
				/>
				<h3 className='my-3'>Elemental Burst: {props.name}</h3>
			</div>
			<div className='text-start'>{props.description}</div>
			{props.children}
		</section>
	);
};

export default ElementalBurst;
