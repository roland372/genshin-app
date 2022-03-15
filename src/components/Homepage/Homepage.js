import React from 'react';
import Container from '../Layout/Container';
import GeneralInfo from './GeneralInfo';
import CurrentBanners from '../Banners/CurrentBanners';
import CurrentEvents from '../Events/CurrentEvents';
import CharacterDomains from './CharacterDomains';
import WeaponDomains from './WeaponDomains';
import Links from './Links';

const Homepage = props => {
	return (
		<Container>
			<GeneralInfo />
			<CurrentBanners bannersData={props.bannersData} />
			<CurrentEvents eventsData={props.eventsData} />
			<CharacterDomains />
			<WeaponDomains />
			<Links />
		</Container>
	);
};

export default Homepage;
