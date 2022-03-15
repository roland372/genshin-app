import React from 'react';
import CardComponent from '../Layout/CardComponent';
import TalentBooksMonday from '../Database/Materials/Talent Books/TalentBooksMonday';
import TalentBooksTuesday from '../Database/Materials/Talent Books/TalentBooksTuesday';
import TalentBooksWednesday from '../Database/Materials/Talent Books/TalentBooksWednesday';
import TalentBooksSunday from '../Database/Materials/Talent Books/TalentBooksSunday';
import charactersData from '../../assets/data/Characters/characters.json';

const CharacterDomains = () => {
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
	// console.log(day);

	if (day === 'Monday' || day === 'Thursday') {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<TalentBooksMonday charactersData={charactersData} />
			</CardComponent>
		);
	} else if (day === 'Tuesday' || day === 'Friday') {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<TalentBooksTuesday charactersData={charactersData} />
			</CardComponent>
		);
	} else if (day === 'Wednesday' || day === 'Saturday') {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<TalentBooksWednesday charactersData={charactersData} />
			</CardComponent>
		);
	} else {
		return (
			<CardComponent title={`Today in domains - ${day}`}>
				<TalentBooksSunday charactersData={charactersData} />
			</CardComponent>
		);
	}
};

export default CharacterDomains;
