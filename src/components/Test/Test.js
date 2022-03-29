import React from 'react';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Test = () => {
	useDocumentTitle('Test');

	return (
		<Container>
			<CardComponent title='test'></CardComponent>
		</Container>
	);
};

export default Test;
