import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

//? <----- Custom Hooks ----->
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
