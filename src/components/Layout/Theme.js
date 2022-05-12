import { useState, useEffect } from 'react';

const Theme = () => {
	const blueTheme = {
		primaryDark: '#12232e',
		primaryMedium: '#203647',
		primaryLight: '#023e8a',
		secondaryMedium: '#284155',
		secondaryLight: '#4da8da',
		textColor: '#ffffff',
		linkColor: '#0dcaf0',
	};

	const [theme, setTheme] = useState(() => {
		const localTheme = JSON.parse(localStorage.getItem('themes'));
		return localTheme || blueTheme;
	});

	const setColor = theme => {
		document.documentElement.style.setProperty(
			'--bg-primary-dark',
			theme.primaryDark
		);
		document.documentElement.style.setProperty(
			'--bg-primary-medium',
			theme.primaryMedium
		);
		document.documentElement.style.setProperty(
			'--bg-primary-light',
			theme.primaryLight
		);
		document.documentElement.style.setProperty(
			'--bg-secondary-medium',
			theme.secondaryMedium
		);
		document.documentElement.style.setProperty(
			'--bg-secondary-light',
			theme.secondaryLight
		);
		document.documentElement.style.setProperty('--text-color', theme.textColor);
		document.documentElement.style.setProperty('--link-color', theme.linkColor);
		setTheme(theme);
	};

	useEffect(() => {
		localStorage.setItem('themes', JSON.stringify(theme));
		setColor(theme);
	}, [theme]);

	return null;
};

export default Theme;
