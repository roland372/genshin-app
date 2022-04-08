import React from 'react';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const EditCharacter = props => {
	useDocumentTitle('Edit Character');

	return (
		<Container>
			<CardComponent title='Edit Character'></CardComponent>
		</Container>
	);
};

export default EditCharacter;
