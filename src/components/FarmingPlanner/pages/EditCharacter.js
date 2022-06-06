import React, { useState, useEffect } from 'react';

//? <----- Router ----->
import { useHistory } from 'react-router-dom';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import EditForm from '../components/EditForm';
import BackButton from '../components/BackButton';
import ScrollToTopRouter from '../../Layout/ScrollToTopRouter';
import { toast } from 'react-toastify';

//? <----- Utils ----->
import levelOptions from '../utils/levelOptions';
import talentOptions from '../utils/talentOptions';
import { useParams } from 'react-router-dom';

const AddCharacter = props => {
	const { useDocumentTitle, CharacterDataService } = props;

	useDocumentTitle('Edit Character');

	const history = useHistory();

	const characterAddedNotification = () =>
		toast.success('Character Updated', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	let {
		//* <----- authenicated user uid ----->
		owner,
		//* <----- characters data ----->
		charactersData,
		characters,
		//* <----- character state ----->
		// character,
		// setCharacter,
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
		// characterSelect,
		// setCharacterSelect,
		//* <----- character level up state ----->
		moraCharacter,
		setMoraCharacter,
		setMoraTalent,
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

	const { id } = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		const getCharacterDatabase = async id => {
			const data = await CharacterDataService.getCharacter(id);
			setCharacter(data.data());
			// console.log(data.data().name);
		};
		getCharacterDatabase(id);
	}, [id, CharacterDataService]);
	console.log(character);

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
		switch (character.NAHigh || character.ESHigh || character.EBHigh) {
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

	//* update character with selected values
	useEffect(() => {
		setCharacter({
			// ...character,
			name: character.name,
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
		// characterSelect,
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

	//* <----- prevent negative select values ----->
	// if (levelLow > levelHigh) {
	// 	levelHigh = levelLow;
	// 	setLevelHigh(levelHigh);
	// }

	// if (NALow > NAHigh) {
	// 	NAHigh = NALow;
	// 	setNAHigh(NAHigh);
	// }

	// if (ESLow > ESHigh) {
	// 	ESHigh = ESLow;
	// 	setESHigh(ESHigh);
	// }

	// if (EBLow > EBHigh) {
	// 	EBHigh = EBLow;
	// 	setEBHigh(EBHigh);
	// }

	const onSubmit = async e => {
		e.preventDefault();

		console.log(character);
		console.log('submitted');

		try {
			await CharacterDataService.updateCharacter(id, character);
			// console.log('character added to database');
			characterAddedNotification();
			history.push('/farming-planner/');
		} catch (err) {
			console.log(err);
		}
	};

	//* clean inputs when component unmounts
	// useEffect(() => {
	// 	setCharacterSelect('');
	// 	setLevelLow(1);
	// 	setLevelHigh(1);
	// 	setNALow(1);
	// 	setNAHigh(1);
	// 	setESLow(1);
	// 	setESHigh(1);
	// 	setEBLow(1);
	// 	setEBHigh(1);
	// }, [
	// 	setCharacterSelect,
	// 	setLevelLow,
	// 	setLevelHigh,
	// 	setNALow,
	// 	setNAHigh,
	// 	setESLow,
	// 	setESHigh,
	// 	setEBLow,
	// 	setEBHigh,
	// ]);

	// console.log(NAHigh);
	// console.log(character.NAHigh);
	// console.log('eblow', character.EBLow);
	// console.log('ebhigh', character.EBHigh);

	return (
		<Container>
			<CardComponent title='Edit Character'>
				<ScrollToTopRouter />
				<BackButton />
				<section className='mx-2'>
					<EditForm
						characters={characters}
						levelOptions={levelOptions}
						charactersData={charactersData}
						talentOptions={talentOptions}
						characterSelect={character.name}
						levelLow={character.levelLow}
						setLevelLow={setLevelLow}
						levelHigh={character.levelHigh}
						setLevelHigh={setLevelHigh}
						NALow={character.NALow}
						setNALow={setNALow}
						NAHigh={character.NAHigh}
						setNAHigh={setNAHigh}
						ESLow={character.ESLow}
						setESLow={setESLow}
						ESHigh={character.ESHigh}
						setESHigh={setESHigh}
						EBLow={character.EBLow}
						setEBLow={setEBLow}
						EBHigh={character.EBHigh}
						setEBHigh={setEBHigh}
						moraCharacter={character.moraCharacter}
						setMoraCharacter={setMoraCharacter}
						moraTalent={character.moraTalent}
						setMoraTalent={setMoraTalent}
						expBooks={character.expBooks}
						localSpeciality={character.localSpeciality}
						characterCommonMaterial1={character.characterCommonMaterial1}
						talentCommonMaterial1={character.talentCommonMaterial1}
						characterCommonMaterial2={character.characterCommonMaterial2}
						talentCommonMaterial2={character.talentCommonMaterial2}
						characterCommonMaterial3={character.characterCommonMaterial3}
						talentCommonMaterial3={character.talentCommonMaterial3}
						bossAscensionMaterial={character.bossAscensionMaterial}
						sliver={character.sliver}
						fragments={character.fragments}
						chunks={character.chunks}
						gemstones={character.gemstones}
						bronzeTalentBooks={character.bronzeTalentBooks}
						silverTalentBooks={character.silverTalentBooks}
						goldTalentBooks={character.goldTalentBooks}
						bossMaterial={character.bossMaterial}
						crown={character.crown}
						onSubmit={onSubmit}
						formErrors
						// submit button
						color={'warning'}
						text={'Edit Character'}
					/>
				</section>
			</CardComponent>
		</Container>
	);
};

export default AddCharacter;
