import React from 'react';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const WishesCounter = () => {
	useDocumentTitle('WishesCounter');

	return (
		<Container>
			<CardComponent title='Wishes Counter'></CardComponent>
		</Container>
	);
};

export default WishesCounter;
