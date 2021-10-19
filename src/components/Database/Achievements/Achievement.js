import React, { Fragment } from 'react';

const Achievement = props => {
	return (
		<Fragment>
			<section className='d-flex align-items-center justify-content-between pb-1'>
				<div className='me-1'>
					<h5>{props.name}</h5>
					<h6>{props.description}</h6>
				</div>
				<div className='form-check'>
					<input
						class='form-check-input p-3'
						type='checkbox'
						value=''
						id='flexCheckDefault'
					/>
				</div>
			</section>
		</Fragment>
	);
};

export default Achievement;
