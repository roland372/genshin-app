import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Changelog = () => {
	useDocumentTitle('Changelog');

	return (
		<Container>
			<CardComponent title='Changelog'></CardComponent>
		</Container>
	);
};

export default Changelog;
