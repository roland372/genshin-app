import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = props => {
	return (
		<section className='text-light'>
			<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1'>
				<Link className='btn btn-primary' to='/team-builder/'>
					Back to Team Builder
				</Link>
			</div>
			<div className='mx-2 pb-1'>
				<hr />
				<h4 className='text-start'>{props.heading}</h4>
			</div>
			{props.children}
		</section>
	);
};

export default BackButton;
