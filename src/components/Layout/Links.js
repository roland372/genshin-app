import React from 'react';

//? <----- Icons ----->
import { FaBook } from 'react-icons/fa';
import { RiRoadMapFill } from 'react-icons/ri';
import { MdWeb } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { BsTwitter } from 'react-icons/bs';

export const navLinks = [
	{
		id: 1,
		url: '/',
		text: 'GenshinApp',
	},
	{
		id: 2,
		url: '/characters',
		text: 'characters',
	},
	{
		id: 3,
		url: '/weapons',
		text: 'weapons',
	},
	{
		id: 4,
		url: '/banners',
		text: 'banners',
	},
	{
		id: 5,
		url: '/events',
		text: 'events',
	},
	{
		id: 6,
		url: '/artifacts',
		text: 'artifacts',
	},
	{
		id: 7,
		url: '/materials',
		text: 'Materials',
	},
	{
		id: 8,
		url: '/farming-planner',
		text: 'farming planner',
	},
	{
		id: 9,
		url: '/team-builder',
		text: 'team builder',
	},
	{
		id: 10,
		url: '/image-gallery',
		text: 'image gallery',
	},
	{
		id: 11,
		url: '/todoList',
		text: 'Todo List',
	},
	{
		id: 12,
		url: '/notes',
		text: 'Notes',
	},
	{
		id: 13,
		url: '/charts',
		text: 'Charts',
	},
	{
		id: 14,
		url: '/about',
		text: 'About',
	},
	{
		id: 15,
		url: '/profile',
		text: 'Profile',
	},
	// {
	// 	id: 100,
	// 	url: '/test',
	// 	text: 'Test',
	// },
	// {
	// 	id: 11,
	// 	url: '/changelog',
	// 	text: 'changelog',
	// },
	// {
	// 	id: 12,
	// 	url: '/achievements',
	// 	text: 'achievements',
	// },
];

export const usefulLinks = [
	{
		id: 1,
		url: 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/',
		text: 'Official Map',
		icon: <RiRoadMapFill size={25} />,
	},
	{
		id: 2,
		url: 'https://genshin.mihoyo.com/en/',
		text: 'Official Website',
		icon: <MdWeb size={25} />,
	},
	{
		id: 3,
		url: 'https://www.hoyolab.com/home',
		text: 'HoYoLAB',
		icon: <CgWebsite size={25} />,
	},
	{
		id: 4,
		url: 'https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki',
		text: 'Wikipedia',
		icon: <FaBook size={25} />,
	},
	{
		id: 5,
		url: 'https://twitter.com/GenshinImpact',
		text: 'Official Twitter',
		icon: <BsTwitter size={25} />,
	},
];
