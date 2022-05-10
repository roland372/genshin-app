import React from 'react';

const PassiveTalent = props => {
	return (
		<section className='my-3 py-2 px-4 mx-2 bg-primary-dark border-0 rounded'>
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
			<div className='text-start my-lg-0 my-2'>
				<b>{props.unlocked}</b>
				<br />
				{props.description}
			</div>
		</section>
	);
};

export default PassiveTalent;
