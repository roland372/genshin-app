import React from 'react';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Calculator = () => {
	useDocumentTitle('Calculator');

	return (
		<Container>
			<CardComponent title='Calculator'></CardComponent>
		</Container>
	);
};

export default Calculator;
