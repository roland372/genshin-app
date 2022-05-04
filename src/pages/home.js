import React from 'react';
import Homepage from '../components/Homepage/Homepage';
import bannersData from '../assets/data/Banners/banners.json';
import eventsData from '../assets/data/Events/events.json';

const home = () => {
	return <Homepage bannersData={bannersData} eventsData={eventsData} />;
};

export default home;