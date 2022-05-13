import React from 'react';

const ElementalSkill = props => {
	return (
		<section className='my-3 py-2 px-4 mx-2'>
			<div className='d-flex'>
				<img
					src={props.image}
					className='me-3 img-fluid align-self-center'
					width='50px'
					alt=''
				/>
				<h3 className='my-3'>Elemental Skill: {props.name}</h3>
			</div>
			<div className='text-start'>{props.description}</div>
			{props.children}
		</section>
	);
};

export default ElementalSkill;
