import React from 'react';

const Talent = props => {
	return (
		<section className='my-3 py-2 px-4 mx-2 bg-primary-dark border-0 rounded'>
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
				<br />
				{props.normalAttack}
				<br />
				<b>Charged Attack</b>
				<br />
				{props.chargedAttack}
				<b>Plunging Attack</b>
				<br />
				{props.plungingAttack}
			</div>
			{props.children}
		</section>
	);
};

export default Talent;
