import React from 'react';
import Container from '../Layout/Container';
import GeneralInfo from './GeneralInfo';
import Banners from './Banners';
import Events from './Events';
import Domains from './Domains';
import Links from './Links';

const Homepage = () => {
	return (
		<Container>
			<GeneralInfo />
			<Banners />
			<Events />
			<Domains />
			<Links />
		</Container>
	);
};

export default Homepage;
