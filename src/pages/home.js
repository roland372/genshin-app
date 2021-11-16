import React from 'react';
import Homepage from '../components/Homepage/Homepage';
import bannersData from '../assets/data/Banners/banners.json';
import eventsData from '../assets/data/Events/events.json';

const home = () => {
	return <Homepage bannersData={bannersData} eventsData={eventsData} />;
};

export default home;

// homepage to display most useful information, like when does certain event or upcoming banner ends, and when next one starts, what day it is today, and what materials you can farm today and for what characters, useful links to external websites like hoyolab or map
