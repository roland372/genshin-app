import React from 'react';
import Container from '../Layout/Container';
import GeneralInfo from './GeneralInfo';
import CurrentBanners from '../Banners/CurrentBanners';
import CurrentEvents from '../Events/CurrentEvents';
import Domains from './Domains';
import Links from './Links';

const Homepage = props => {
	return (
		<Container>
			<GeneralInfo />
			<CurrentBanners bannersData={props.bannersData} />
			<CurrentEvents eventsData={props.eventsData} />
			<Domains />
			<Links />
		</Container>
	);
};

export default Homepage;
