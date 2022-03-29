import React from 'react';

import Container from '../Layout/Container';

import CurrentBanners from './CurrentBanners';
import PastBanners from './PastBanners';

import bannersData from '../../assets/data/Banners/banners.json';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Banners = () => {
	useDocumentTitle('Banners');
	
	return (
		<Container>
			<CurrentBanners bannersData={bannersData} />
			<PastBanners bannersData={bannersData} />
		</Container>
	);
};

export default Banners;
