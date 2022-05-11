import React from 'react';

//? <----- Components ----->
import Container from '../Layout/Container';
import CurrentBanners from './CurrentBanners';
import PastBanners from './PastBanners';

//? <----- Data ----->
import bannersData from '../../assets/data/Banners/banners.json';

//? <----- Custom Hooks ----->
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
