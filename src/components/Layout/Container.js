import React from 'react';

const Container = props => {
	return (
		<main className='dark-blue text-light text-center pt-1 pb-1 d-flex flex-column min-vh-100'>
			<div className='container'>{props.children}</div>
		</main>
	);
};

export default Container;
