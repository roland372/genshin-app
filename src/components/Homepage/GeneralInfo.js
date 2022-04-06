import React from 'react';
import CardComponent from '../Layout/CardComponent';

const GeneralInfo = () => {
	return (
		<CardComponent title='Welcome to Genshn-App'>
			<p className='mx-3'>
				Genshin-App is a fanmade website for Genshin Impact game. It has
				database where you can have easy and quick access to most useful
				information like current and past events or banners, see what's
				available in domains, quickly calculate materials needed for leveling up
				or even build your own teams.
			</p>
		</CardComponent>
	);
};

export default GeneralInfo;
