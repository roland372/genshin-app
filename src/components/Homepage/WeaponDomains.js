import React from 'react';
import CardComponent from '../Layout/CardComponent';
import WeaponMaterialsMonday from '../Database/Materials/Weapon Ascension Materials/WeaponMaterialsMonday';
import WeaponMaterialsTuesday from '../Database/Materials/Weapon Ascension Materials/WeaponMaterialsTuesday';
import WeaponMaterialsWednesday from '../Database/Materials/Weapon Ascension Materials/WeaponMaterialsWednesday';
import WeaponMaterialsSunday from '../Database/Materials/Weapon Ascension Materials/WeaponMaterialsSunday';
import weaponsData from '../../assets/data/Weapons/weapons.json';

const WeaponDomains = () => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const date = new Date();
	const day = days[date.getDay()];

	if (day === 'Monday' || day === 'Thursday') {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<WeaponMaterialsMonday weaponsData={weaponsData} />
			</CardComponent>
		);
	} else if (day === 'Tuesday' || day === 'Friday') {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<WeaponMaterialsTuesday weaponsData={weaponsData} />
			</CardComponent>
		);
	} else if (day === 'Wednesday' || day === 'Saturday') {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<WeaponMaterialsWednesday weaponsData={weaponsData} />
			</CardComponent>
		);
	} else {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<WeaponMaterialsSunday weaponsData={weaponsData} />
			</CardComponent>
		);
	}
};

export default WeaponDomains;
