import React, { useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import CharacterDataService from '../services/character.services';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import levelOptions from '../utils/levelOptions';
import talentOptions from '../utils/talentOptions';

import EditForm from '../components/EditForm';
import BackButton from '../components/BackButton';

import useDocumentTitle from '../../../hooks/useDocumentTitle';
import ScrollToTopRouter from '../../Layout/ScrollToTopRouter';

const EditCharacter = props => {
	useDocumentTitle('Edit Character');

	const characterEditedNotification = () =>
		toast.success('Character Edited', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	let history = useHistory();

	let {
		//* <----- authenicated user uid ----->
		owner,
		//* <----- characters data ----->
		charactersData,
		characters,
		//* <----- character state ----->
		character,
		setCharacter,
		// //* <----- select state ----->
		levelLow,
		setLevelLow,
		setLevelHigh,
		NALow,
		setNALow,
		setNAHigh,
		ESLow,
		setESLow,
		setESHigh,
		EBLow,
		setEBLow,
		setEBHigh,
		// //* <----- character level up state ----->
		setMoraCharacter,
		//* functions to set character and talent values
		setCharacterLevelUp,
		setTalentLevelUp,
	} = props;

	let {
		name,
		levelHigh,
		NAHigh,
		ESHigh,
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
	} = character;

	let previousCharacter = useRef({});

	const { id } = useParams();

	// useEffect(() => {
	// 	const loadCharacter = async id => {
	// 		const res = await axios.get(`http://localhost:3003/characters/${id}`);
	// 		// console.log(res.data);
	// 		setCharacter(res.data);
	// 		previousCharacter.current = { ...res.data };
	// 	};

	// 	loadCharacter(id);
	// }, [id, setCharacter, name]);

	// const getCharactersDatabase = async () => {
	// 	const data = await CharacterDataService.getAllCharacters();
	// 	// console.log(data.docs);
	// 	setCharacter(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
	// };

	useEffect(() => {
		const getCharacterDatabase = async id => {
			const data = await CharacterDataService.getCharacter(id);
			setCharacter(data.data());
			// previousTeam.current = [...data.data().teamMembers];
		};
		getCharacterDatabase(id);
		// getCharactersDatabase();
	}, [id, name, setCharacter]);

	// console.log(previousCharacter.current);

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
			...previousCharacter,
			name: name,
			owner: owner,
			lastModified: Date.now(),
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

		await CharacterDataService.updateCharacter(id, character);

		// await axios.put(
		// 	`http://localhost:3003/farming-planner/characters/${id}`,
		// 	character
		// );

		characterEditedNotification();
		history.push('/farming-planner/');
	};

	//* cleanup values when component unmounts
	useEffect(() => {
		setLevelLow(1);
		setLevelHigh(1);
		setNALow(1);
		setNAHigh(1);
		setESLow(1);
		setESHigh(1);
		setEBLow(1);
		setEBHigh(1);
	}, [
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
			<CardComponent title='Edit Character'>
				<ScrollToTopRouter />
				<BackButton>
					<section className='mx-2'>
						<EditForm
							characters={characters}
							levelOptions={levelOptions}
							charactersData={charactersData}
							talentOptions={talentOptions}
							characterSelect={name}
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
							formErrors
							// submit button
							color={'warning'}
							text={'Edit Character'}
						/>
					</section>
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default EditCharacter;
