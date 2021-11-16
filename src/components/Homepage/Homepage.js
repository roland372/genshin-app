import React from 'react';
import Container from '../Layout/Container';
import GeneralInfo from './GeneralInfo';
import Banners from './Banners';
import Events from './Events';
import Domains from './Domains';
import Links from './Links';

const Homepage = props => {
	return (
		<Container>
			<GeneralInfo />
			<Banners bannersData={props.bannersData} />
			<Events />
			<Domains />
			<Links />
		</Container>
	);
};

export default Homepage;
