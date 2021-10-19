import React from 'react';

const Talent = props => {
	return (
		<section className='border border-primary rounded p-2 mx-2'>
			<div className='d-flex'>
				<img
					src={props.image}
					className='me-3 img-fluid align-self-center'
					width='50px'
					alt=''
				/>
				<h3 className='my-3'>Normal Attack: {props.name}</h3>
			</div>
			<div className='text-start mx-1 my-1'>
				<b>Normal Attack</b>
				<p>{props.normalAttack}</p>
				<b>Charged Attack</b>
				<p>{props.chargedAttack}</p>
				<b>Plunging Attack</b>
				<p>{props.plungingAttack}</p>
			</div>
			{props.children}
		</section>
	);
};

export default Talent;
