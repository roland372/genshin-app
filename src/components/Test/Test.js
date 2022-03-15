import React from 'react';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import weapons from '../../assets/data/Weapons/weapons.json';

const Test = () => {
	console.log(weapons);
	return (
		<Container>
			<CardComponent title='test'>
				
			</CardComponent>
		</Container>
	);
};

export default Test;
