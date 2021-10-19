import React from 'react';

const PassiveTalent = props => {
	return (
		<section className='my-3 border border-primary rounded p-2 mx-2'>
			<div>
				<div className='d-flex'>
					<img
						src={props.image}
						className='me-3 img-fluid align-self-center'
						width='50px'
						alt=''
					/>
					<h3 className='my-3'>{props.name}</h3>
				</div>
			</div>
			<div className='text-start'>
				<b>{props.unlocked}</b>
				<p>{props.description}</p>
			</div>
		</section>
	);
};

export default PassiveTalent;
