import React from 'react';
import Container from '../Layout/Container';
import bannersData from '../../assets/data/Banners/banners.json';
import CurrentBanners from './CurrentBanners';
import PastBanners from './PastBanners';

const Banners = () => {
	return (
		<Container>
			<CurrentBanners bannersData={bannersData} />
			<PastBanners bannersData={bannersData} />
		</Container>
	);
};

export default Banners;
