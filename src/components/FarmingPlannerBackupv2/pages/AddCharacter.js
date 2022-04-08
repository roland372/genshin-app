import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import levelOptions from '../utils/levelOptions';
import talentOptions from '../utils/talentOptions';
import { characterLevelUp } from '../utils/materials';
import { talentLevelUp } from '../utils/materials';

import Form from '../components/Form';

import BackButton from '../components/BackButton';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const AddCharacter = props => {
	useDocumentTitle('Add Character');

	let { charactersData, characters, characterNames } = props;

	let history = useHistory();

	// NA - normal attack
	// ES - elemental skill
	// EB - elemental burst
	let [levelLow, setLevelLow] = useState(1);
	let [levelHigh, setLevelHigh] = useState(1);
	let [NALow, setNALow] = useState(1);
	let [NAHigh, setNAHigh] = useState(1);
	let [ESLow, setESLow] = useState(1);
	let [ESHigh, setESHigh] = useState(1);
	let [EBLow, setEBLow] = useState(1);
	let [EBHigh, setEBHigh] = useState(1);
	let [characterSelect, setCharacterSelect] = useState('');
	// console.log('Level: ', levelLow, levelHigh);
	// console.log('NA: ', NALow, NAHigh);
	// console.log('ES: ', ESLow, ESHigh);
	// console.log('EB: ', EBLow, EBHigh);

	let [character, setCharacter] = useState({
		name: '',
		levelLow: 1,
		levelHigh: 1,
		NALow: 1,
		NAHigh: 1,
		ESLow: 1,
		ESHigh: 1,
		EBLow: 1,
		EBHigh: 1,
	});

	// <----- character level up state ----->
	const [moraCharacter, setMoraCharacter] = useState(0);
	const [expBooks, setExpBooks] = useState(0);
	const [localSpeciality, setLocalSpeciality] = useState(0);
	const [characterCommonMaterial1, setCharacterCommonMaterial1] = useState(0);
	const [characterCommonMaterial2, setCharacterCommonMaterial2] = useState(0);
	const [characterCommonMaterial3, setCharacterCommonMaterial3] = useState(0);
	const [sliver, setSliver] = useState(0);
	const [fragments, setFragments] = useState(0);
	const [chunks, setChunks] = useState(0);
	const [gemstones, setGemstones] = useState(0);
	const [bossAscensionMaterial, setBossAscensionMaterial] = useState(0);

	// <----- talent level up state ----->
	const [moraTalent, setMoraTalent] = useState(0);
	const [bronzeTalentBooks, setBronzeTalentBooks] = useState(0);
	const [silverTalentBooks, setSilverTalentBooks] = useState(0);
	const [goldTalentBooks, setGoldTalentBooks] = useState(0);
	const [talentCommonMaterial1, setTalentCommonMaterial1] = useState(0);
	const [talentCommonMaterial2, setTalentCommonMaterial2] = useState(0);
	const [talentCommonMaterial3, setTalentCommonMaterial3] = useState(0);
	const [bossMaterial, setBossMaterial] = useState(0);
	const [crown, setCrown] = useState(0);

	const setCharacterLevelUp = () => {
		setMoraCharacter(
			characterLevelUp[levelHigh - 1].materials[0].mora -
				characterLevelUp[levelLow - 1].materials[0].mora
		);
		setExpBooks(
			characterLevelUp[levelHigh - 1].materials[1].expBooks -
				characterLevelUp[levelLow - 1].materials[1].expBooks
		);
		setLocalSpeciality(
			characterLevelUp[levelHigh - 1].materials[2].localSpeciality -
				characterLevelUp[levelLow - 1].materials[2].localSpeciality
		);
		setCharacterCommonMaterial1(
			characterLevelUp[levelHigh - 1].materials[3].commonMaterial1 -
				characterLevelUp[levelLow - 1].materials[3].commonMaterial1
		);
		setCharacterCommonMaterial2(
			characterLevelUp[levelHigh - 1].materials[4].commonMaterial2 -
				characterLevelUp[levelLow - 1].materials[4].commonMaterial2
		);
		setCharacterCommonMaterial3(
			characterLevelUp[levelHigh - 1].materials[5].commonMaterial3 -
				characterLevelUp[levelLow - 1].materials[5].commonMaterial3
		);
		setSliver(
			characterLevelUp[levelHigh - 1].materials[6].sliver -
				characterLevelUp[levelLow - 1].materials[6].sliver
		);
		setFragments(
			characterLevelUp[levelHigh - 1].materials[7].fragments -
				characterLevelUp[levelLow - 1].materials[7].fragments
		);
		setChunks(
			characterLevelUp[levelHigh - 1].materials[8].chunks -
				characterLevelUp[levelLow - 1].materials[8].chunks
		);
		setGemstones(
			characterLevelUp[levelHigh - 1].materials[9].gemstones -
				characterLevelUp[levelLow - 1].materials[9].gemstones
		);
		setBossAscensionMaterial(
			characterLevelUp[levelHigh - 1].materials[10].bossAscensionMaterial -
				characterLevelUp[levelLow - 1].materials[10].bossAscensionMaterial
		);
	};

	const setTalentLevelUp = () => {
		setMoraTalent(
			talentLevelUp[NAHigh - 1].materials.mora -
				talentLevelUp[NALow - 1].materials.mora +
				(talentLevelUp[ESHigh - 1].materials.mora -
					talentLevelUp[ESLow - 1].materials.mora) +
				(talentLevelUp[EBHigh - 1].materials.mora -
					talentLevelUp[EBLow - 1].materials.mora)
		);
		setBronzeTalentBooks(
			talentLevelUp[NAHigh - 1].materials.bronzeTalentBooks -
				talentLevelUp[NALow - 1].materials.bronzeTalentBooks +
				(talentLevelUp[ESHigh - 1].materials.bronzeTalentBooks -
					talentLevelUp[ESLow - 1].materials.bronzeTalentBooks) +
				(talentLevelUp[EBHigh - 1].materials.bronzeTalentBooks -
					talentLevelUp[EBLow - 1].materials.bronzeTalentBooks)
		);
		setSilverTalentBooks(
			talentLevelUp[NAHigh - 1].materials.silverTalentBooks -
				talentLevelUp[NALow - 1].materials.silverTalentBooks +
				(talentLevelUp[ESHigh - 1].materials.silverTalentBooks -
					talentLevelUp[ESLow - 1].materials.silverTalentBooks) +
				(talentLevelUp[EBHigh - 1].materials.silverTalentBooks -
					talentLevelUp[EBLow - 1].materials.silverTalentBooks)
		);
		setGoldTalentBooks(
			talentLevelUp[NAHigh - 1].materials.goldTalentBooks -
				talentLevelUp[NALow - 1].materials.goldTalentBooks +
				(talentLevelUp[ESHigh - 1].materials.goldTalentBooks -
					talentLevelUp[ESLow - 1].materials.goldTalentBooks) +
				(talentLevelUp[EBHigh - 1].materials.goldTalentBooks -
					talentLevelUp[EBLow - 1].materials.goldTalentBooks)
		);
		setTalentCommonMaterial1(
			talentLevelUp[NAHigh - 1].materials.commonMaterial1 -
				talentLevelUp[NALow - 1].materials.commonMaterial1 +
				(talentLevelUp[ESHigh - 1].materials.commonMaterial1 -
					talentLevelUp[ESLow - 1].materials.commonMaterial1) +
				(talentLevelUp[EBHigh - 1].materials.commonMaterial1 -
					talentLevelUp[EBLow - 1].materials.commonMaterial1)
		);
		setTalentCommonMaterial2(
			talentLevelUp[NAHigh - 1].materials.commonMaterial2 -
				talentLevelUp[NALow - 1].materials.commonMaterial2 +
				(talentLevelUp[ESHigh - 1].materials.commonMaterial2 -
					talentLevelUp[ESLow - 1].materials.commonMaterial2) +
				(talentLevelUp[EBHigh - 1].materials.commonMaterial2 -
					talentLevelUp[EBLow - 1].materials.commonMaterial2)
		);
		setTalentCommonMaterial3(
			talentLevelUp[NAHigh - 1].materials.commonMaterial3 -
				talentLevelUp[NALow - 1].materials.commonMaterial3 +
				(talentLevelUp[ESHigh - 1].materials.commonMaterial3 -
					talentLevelUp[ESLow - 1].materials.commonMaterial3) +
				(talentLevelUp[EBHigh - 1].materials.commonMaterial3 -
					talentLevelUp[EBLow - 1].materials.commonMaterial3)
		);
		setBossMaterial(
			talentLevelUp[NAHigh - 1].materials.bossMaterial -
				talentLevelUp[NALow - 1].materials.bossMaterial +
				(talentLevelUp[ESHigh - 1].materials.bossMaterial -
					talentLevelUp[ESLow - 1].materials.bossMaterial) +
				(talentLevelUp[EBHigh - 1].materials.bossMaterial -
					talentLevelUp[EBLow - 1].materials.bossMaterial)
		);
		setCrown(
			talentLevelUp[NAHigh - 1].materials.crown -
				talentLevelUp[NALow - 1].materials.crown +
				(talentLevelUp[ESHigh - 1].materials.crown -
					talentLevelUp[ESLow - 1].materials.crown) +
				(talentLevelUp[EBHigh - 1].materials.crown -
					talentLevelUp[EBLow - 1].materials.crown)
		);
	};

	//? <----- character level up switch ----->
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

	//? <----- talent level up switch ----->
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

	// <----- prevent negative select values ----->
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

	// const onInputChange = e => {
	// 	setCharacter({
	// 		...character,
	// 		name: e,
	// 		levelLow: levelLow,
	// 		levelHigh: levelHigh,
	// 		NALow: NALow,
	// 		NAHigh: NAHigh,
	// 		ESLow: ESLow,
	// 		ESHigh: ESHigh,
	// 		EBLow: EBLow,
	// 		EBHigh: EBHigh,
	// 	});
	// 	console.log(character);
	// };

	const onSubmit = async e => {
		e.preventDefault();

		// setCharacter({
		// 	...character,
		// 	name: characterSelect,
		// 	levelLow: levelLow,
		// 	levelHigh: levelHigh,
		// 	NALow: NALow,
		// 	NAHigh: NAHigh,
		// 	ESLow: ESLow,
		// 	ESHigh: ESHigh,
		// 	EBLow: EBLow,
		// 	EBHigh: EBHigh,
		// });

		console.log(character);
		console.log('submitted');

		await axios.post(
			'http://localhost:3003/farming-planner/characters',
			character
		);
		history.push('/farming-planner/');

		// setFormErrors(validation(name, select));
		// if (name.length !== 0 && select.length >= 4) {
		// 	await axios.post('http://localhost:3003/team-builder/teams', team);
		// 	history.push('/team-builder/');
		// }
	};

	console.log(character);

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
