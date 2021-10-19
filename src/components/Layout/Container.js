import React from 'react';

const Container = props => {
	return (
		<main className='bg-secondary text-light text-center pt-1 pb-1'>
			<div className='container'>{props.children}</div>
		</main>
	);
};

export default Container;
