import React from 'react';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

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
