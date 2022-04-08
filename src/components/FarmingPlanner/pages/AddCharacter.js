import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import CharacterDataService from '../services/character.services';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import levelOptions from '../utils/levelOptions';
import talentOptions from '../utils/talentOptions';

import Form from '../components/Form';
import BackButton from '../components/BackButton';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const AddCharacter = props => {
	useDocumentTitle('Add Character');
	let history = useHistory();

	let {
		//* <----- characters data ----->
		charactersData,
		characters,
		characterNames,
		//* <----- character state ----->
		character,
		setCharacter,
		//* <----- select state ----->
		levelLow,
		setLevelLow,
		levelHigh,
		setLevelHigh,
		NALow,
		setNALow,
		NAHigh,
		setNAHigh,
		ESLow,
		setESLow,
		ESHigh,
		setESHigh,
		EBLow,
		setEBLow,
		EBHigh,
		setEBHigh,
		characterSelect,
		setCharacterSelect,
		//* <----- character level up state ----->
		moraCharacter,
		setMoraCharacter,
		expBooks,
		localSpeciality,
		characterCommonMaterial1,
		characterCommonMaterial2,
		characterCommonMaterial3,
		sliver,
		fragments,
		chunks,
		gemstones,
		bossAscensionMaterial,
		moraTalent,
		bronzeTalentBooks,
		silverTalentBooks,
		goldTalentBooks,
		talentCommonMaterial1,
		talentCommonMaterial2,
		talentCommonMaterial3,
		bossMaterial,
		crown,
		//* functions to set character and talent values
		setCharacterLevelUp,
		setTalentLevelUp,
	} = props;

	//* <----- character level up switch ----->
	useEffect(() => {
		switch (levelHigh) {
			case 1:
				setCharacterLevelUp();
				break;
			case 2:
				setCharacterLevelUp();
				break;
			case 3:
				setCharacterLevelUp();
				break;
			case 4:
				setCharacterLevelUp();
				break;
			case 5:
				setCharacterLevelUp();
				break;
			case 6:
				setCharacterLevelUp();
				break;
			case 7:
				setCharacterLevelUp();
				break;
			case 8:
				setCharacterLevelUp();
				break;
			case 9:
				setCharacterLevelUp();
				break;
			case 10:
				setCharacterLevelUp();
				break;
			case 11:
				setCharacterLevelUp();
				break;
			case 12:
				setCharacterLevelUp();
				break;
			case 13:
				setCharacterLevelUp();
				break;
			case 14:
				setCharacterLevelUp();
				break;
			default:
				break;
		}
	});

	//* <----- talent level up switch ----->
	useEffect(() => {
		switch (NAHigh || ESHigh || EBHigh) {
			case 1:
				setTalentLevelUp();
				break;
			case 2:
				setTalentLevelUp();
				break;
			case 3:
				setTalentLevelUp();
				break;
			case 4:
				setTalentLevelUp();
				break;
			case 5:
				setTalentLevelUp();
				break;
			case 6:
				setTalentLevelUp();
				break;
			case 7:
				setTalentLevelUp();
				break;
			case 8:
				setTalentLevelUp();
				break;
			case 9:
				setTalentLevelUp();
				break;
			case 10:
				setTalentLevelUp();
				break;
			default:
				break;
		}
	});

	//* <----- prevent negative select values ----->
	if (levelLow > levelHigh) {
		levelHigh = levelLow;
		setLevelHigh(levelHigh);
	}

	if (NALow > NAHigh) {
		NAHigh = NALow;
		setNAHigh(NAHigh);
	}

	if (ESLow > ESHigh) {
		ESHigh = ESLow;
		setESHigh(ESHigh);
	}

	if (EBLow > EBHigh) {
		EBHigh = EBLow;
		setEBHigh(EBHigh);
	}

	//* update character with selected values
	useEffect(() => {
		setCharacter({
			...character,
			name: characterSelect,
			levelLow: levelLow,
			levelHigh: levelHigh,
			NALow: NALow,
			NAHigh: NAHigh,
			ESLow: ESLow,
			ESHigh: ESHigh,
			EBLow: EBLow,
			EBHigh: EBHigh,
			moraCharacter: moraCharacter,
			moraTalent: moraTalent,
			expBooks: expBooks,
			localSpeciality: localSpeciality,
			characterCommonMaterial1: characterCommonMaterial1,
			talentCommonMaterial1: talentCommonMaterial1,
			characterCommonMaterial2: characterCommonMaterial2,
			talentCommonMaterial2: talentCommonMaterial2,
			characterCommonMaterial3: characterCommonMaterial3,
			talentCommonMaterial3: talentCommonMaterial3,
			bossAscensionMaterial: bossAscensionMaterial,
			sliver: sliver,
			fragments: fragments,
			chunks: chunks,
			gemstones: gemstones,
			bronzeTalentBooks: bronzeTalentBooks,
			silverTalentBooks: silverTalentBooks,
			goldTalentBooks: goldTalentBooks,
			bossMaterial: bossMaterial,
			crown: crown,
		});
		// there's no need to for dependency character, it will cause rerendering loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		characterSelect,
		levelLow,
		levelHigh,
		NALow,
		NAHigh,
		ESLow,
		ESHigh,
		EBLow,
		EBHigh,
		moraCharacter,
		moraTalent,
		expBooks,
		localSpeciality,
		characterCommonMaterial1,
		talentCommonMaterial1,
		characterCommonMaterial2,
		talentCommonMaterial2,
		characterCommonMaterial3,
		talentCommonMaterial3,
		bossAscensionMaterial,
		sliver,
		fragments,
		chunks,
		gemstones,
		bronzeTalentBooks,
		silverTalentBooks,
		goldTalentBooks,
		bossMaterial,
		crown,
	]);

	const onSubmit = async e => {
		e.preventDefault();

		console.log(character);
		console.log('submitted');

		try {
			await CharacterDataService.addCharacter(character);
			console.log('character added to database');
			history.push('/farming-planner/');
		} catch (err) {
			console.log(err);
		}

		// await axios.post(
		// 	'http://localhost:3003/farming-planner/characters',
		// 	character
		// );

		// setFormErrors(validation(name, select));
		// if (name.length !== 0 && select.length >= 4) {
		// 	await axios.post('http://localhost:3003/team-builder/teams', team);
		// 	history.push('/team-builder/');
		// }
	};

	// cleanup values when component unmounts
	useEffect(() => {
		setCharacterSelect('');
		setLevelLow(1);
		setLevelHigh(1);
		setNALow(1);
		setNAHigh(1);
		setESLow(1);
		setESHigh(1);
		setEBLow(1);
		setEBHigh(1);
	}, [
		setCharacterSelect,
		setLevelLow,
		setLevelHigh,
		setNALow,
		setNAHigh,
		setESLow,
		setESHigh,
		setEBLow,
		setEBHigh,
	]);

	return (
		<Container>
			<CardComponent title='Add Character'>
				<BackButton>
					<section className='mx-2'>
						<Form
							characters={characters}
							levelOptions={levelOptions}
							charactersData={charactersData}
							talentOptions={talentOptions}
							characterSelect={characterSelect}
							levelLow={levelLow}
							setLevelLow={setLevelLow}
							levelHigh={levelHigh}
							setLevelHigh={setLevelHigh}
							NAHigh={NAHigh}
							NALow={NALow}
							setNALow={setNALow}
							setNAHigh={setNAHigh}
							ESHigh={ESHigh}
							ESLow={ESLow}
							setESLow={setESLow}
							setESHigh={setESHigh}
							EBHigh={EBHigh}
							EBLow={EBLow}
							setEBLow={setEBLow}
							setEBHigh={setEBHigh}
							moraCharacter={moraCharacter}
							setMoraCharacter={setMoraCharacter}
							moraTalent={moraTalent}
							expBooks={expBooks}
							localSpeciality={localSpeciality}
							characterCommonMaterial1={characterCommonMaterial1}
							talentCommonMaterial1={talentCommonMaterial1}
							characterCommonMaterial2={characterCommonMaterial2}
							talentCommonMaterial2={talentCommonMaterial2}
							characterCommonMaterial3={characterCommonMaterial3}
							talentCommonMaterial3={talentCommonMaterial3}
							bossAscensionMaterial={bossAscensionMaterial}
							sliver={sliver}
							fragments={fragments}
							chunks={chunks}
							gemstones={gemstones}
							bronzeTalentBooks={bronzeTalentBooks}
							silverTalentBooks={silverTalentBooks}
							goldTalentBooks={goldTalentBooks}
							bossMaterial={bossMaterial}
							crown={crown}
							onSubmit={onSubmit}
							characterNames={characterNames}
							selectValues={characterSelect}
							setCharacterSelect={setCharacterSelect}
							// onInputChange={onInputChange}
							formErrors
							// submit button
							color={'primary'}
							text={'Add Character'}
						/>
					</section>
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default AddCharacter;
