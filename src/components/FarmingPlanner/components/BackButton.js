import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = props => {
	return (
		<section className='text-light'>
			<div className='d-flex align-items-center justify-content-between ms-2 pt-1'>
				<Link className='btn btn-primary' to='/farming-planner/'>
					Back to Farming Planner
				</Link>
			</div>
			<div className='mx-2'>
				<hr />
			</div>
			{/* {props.children} */}
		</section>
	);
};

export default BackButton;
