import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import GeneralInfo from './GeneralInfo';
import CurrentBanners from '../Banners/CurrentBanners';
import CurrentEvents from '../Events/CurrentEvents';
import CharacterDomains from './CharacterDomains';
import WeaponDomains from './WeaponDomains';
import Links from './Links';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Homepage = props => {
	useDocumentTitle('Home');

	return (
		<Container>
			<GeneralInfo />
			<CharacterDomains />
			<WeaponDomains />
			<CurrentBanners bannersData={props.bannersData} />
			<CurrentEvents eventsData={props.eventsData} />
			<Links />
		</Container>
	);
};

export default Homepage;
