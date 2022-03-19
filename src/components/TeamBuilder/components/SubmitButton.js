import React from 'react';

const SubmitButton = props => {
	return (
		<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1 mt-2'>
			<button className={`btn btn-${props.color}`}>{props.text}</button>
		</div>
	);
};

export default SubmitButton;
