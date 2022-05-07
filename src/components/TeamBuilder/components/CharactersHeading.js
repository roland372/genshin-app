import React from 'react';

const CharactersHeading = props => {
	return (
		<div className='mx-2 pb-1 text-color'>
			<h4 className='text-start'>{props.heading}</h4>
		</div>
	);
};

export default CharactersHeading;
