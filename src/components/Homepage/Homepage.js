import React from 'react';

import Container from '../Layout/Container';

import GeneralInfo from './GeneralInfo';
import CurrentBanners from '../Banners/CurrentBanners';
import CurrentEvents from '../Events/CurrentEvents';
import CharacterDomains from './CharacterDomains';
import WeaponDomains from './WeaponDomains';
import Links from './Links';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Homepage = props => {
	useDocumentTitle('Home');

	// const color = getComputedStyle(document.documentElement).getPropertyValue(
	// 	'--test'
	// );

	// console.log(color);

	// const setColor = newColor => {
	// 	document.documentElement.style.setProperty('--test', newColor);
	// };

	return (
		<Container>
			{/* <button onClick={() => setColor('#12232e')}>1</button>
			<button onClick={() => setColor('#203647')}>2</button>
			<button onClick={() => setColor('#284155')}>3</button>
			<button onClick={() => setColor('#023e8a')}>4</button>
			<button onClick={() => setColor('#4da8da')}>5</button> */}
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
