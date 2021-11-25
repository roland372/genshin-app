import React from 'react';
import Container from '../Layout/Container';
import GeneralInfo from './GeneralInfo';
import Events from './Events';
import Domains from './Domains';
import Links from './Links';
import CurrentBanners from '../Banners/CurrentBanners';

const Homepage = props => {
	return (
		<Container>
			<GeneralInfo />
			<CurrentBanners bannersData={props.bannersData} />
			<Events eventsData={props.eventsData} />
			<Domains />
			<Links />
		</Container>
	);
};

export default Homepage;
