import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Characters from './Characters';
import AddCharacter from './AddCharacter';
// import EditCharacter from './EditCharacter';
import CharacterInfo from '../components/CharacterInfo';

// import levelOptions from '../utils/levelOptions';
// import talentOptions from '../utils/talentOptions';
import { characterLevelUp } from '../utils/materials';
import { talentLevelUp } from '../utils/materials';

import CharactersDataService from '../services/character.services';

import characters from '../../../assets/data/Characters/characters.json';
import charactersData from '../../../constants/characters';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

import { useUserAuth } from '../../../context/UserAuthContext';

const FarmingPlanner = () => {
	useDocumentTitle('Farming Planner');

	const { user } = useUserAuth();

	const [loading, setLoading] = useState('');

	//* <----- fetch characters from database ----->
	const [charactersDatabase, setCharactersDatabase] = useState([]);
	useEffect(() => {
		user && getCharactersDatabase();
	}, [user]);

	const getCharactersDatabase = async () => {
		setLoading(true);
		const data = await CharactersDataService.getAllCharacters();
		setCharactersDatabase(
			data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
		);
		setLoading(false);
	};

	//* <----- select state ----->
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

	//* initial character state
	let [character, setCharacter] = useState({
		name: '',
		owner: user.uid,
		lastModified: '',
		levelLow: 1,
		levelHigh: 1,
		NALow: 1,
		NAHigh: 1,
		ESLow: 1,
		ESHigh: 1,
		EBLow: 1,
		EBHigh: 1,
		moraCharacter: 1,
		moraTalent: 1,
		expBooks: 1,
		localSpeciality: 1,
		characterCommonMaterial1: 1,
		talentCommonMaterial1: 1,
		characterCommonMaterial2: 1,
		talentCommonMaterial2: 1,
		characterCommonMaterial3: 1,
		talentCommonMaterial3: 1,
		bossAscensionMaterial: 1,
		sliver: 1,
		fragments: 1,
		chunks: 1,
		gemstones: 1,
		bronzeTalentBooks: 1,
		silverTalentBooks: 1,
		goldTalentBooks: 1,
		bossMaterial: 1,
		crown: 1,
	});

	//* <----- character level up state ----->
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

	//* <----- talent level up state ----->
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

	//* filter characters so only characters that were added by user are displayed
	const filterCharacters = charactersArray => {
		const filteredCharacters = characters.characters.filter(character =>
			charactersArray.includes(character.name)
		);

		// sort characters so it matches order in which they are selected
		filteredCharacters.sort((a, b) => {
			return charactersArray.indexOf(a.name) - charactersArray.indexOf(b.name);
		});

		return filteredCharacters;
	};

	//* store characters names in array and use them in select
	const characterNames = [];
	characters.characters.map(c => {
		return characterNames.push({ value: c.name, label: c.name });
	});

	console.log(characterNames);

	// console.log(user.uid);
	// console.log(charactersDatabase);

	const userCharacters = charactersDatabase.filter(c => c.owner === user.uid);

	console.log(userCharacters);

	//* filter characters that are already in database, remove them from select
	const filterByReference = (arr1, arr2) => {
		let res = [];
		res = arr1.filter(el => {
			return !arr2.find(element => {
				return element.name === el.value;
			});
		});
		return res;
	};

	// console.log(filterByReference(characterNames, userCharacters));

	return (
		<Router>
			<Switch>
				<Route exact path='/farming-planner'>
					<Characters
						filterCharacters={filterCharacters}
						characters={characters.characters}
						charactersData={charactersData}
						getCharactersDatabase={getCharactersDatabase}
						loading={loading}
						setLoading={setLoading}
						charactersDatabase={userCharacters}
					/>
				</Route>
				<Route exact path='/farming-planner/characters/add'>
					<AddCharacter
						filterCharacters={filterCharacters}
						//* <----- authenicated user uid ----->
						owner={user.uid}
						//* <----- characters data ----->
						characters={characters.characters}
						charactersData={charactersData}
						characterNames={filterByReference(characterNames, userCharacters)}
						//* <----- character state ----->
						character={character}
						setCharacter={setCharacter}
						//* <----- select state ----->
						levelLow={levelLow}
						setLevelLow={setLevelLow}
						levelHigh={levelHigh}
						setLevelHigh={setLevelHigh}
						NALow={NALow}
						setNALow={setNALow}
						NAHigh={NAHigh}
						setNAHigh={setNAHigh}
						ESLow={ESLow}
						setESLow={setESLow}
						ESHigh={ESHigh}
						setESHigh={setESHigh}
						EBLow={EBLow}
						setEBLow={setEBLow}
						EBHigh={EBHigh}
						setEBHigh={setEBHigh}
						characterSelect={characterSelect}
						setCharacterSelect={setCharacterSelect}
						//* <----- character level up state ----->
						moraCharacter={moraCharacter}
						setMoraCharacter={setMoraCharacter}
						expBooks={expBooks}
						setExpBooks={setExpBooks}
						localSpeciality={localSpeciality}
						setLocalSpeciality={setLocalSpeciality}
						characterCommonMaterial1={characterCommonMaterial1}
						setCharacterCommonMaterial1={setCharacterCommonMaterial1}
						characterCommonMaterial2={characterCommonMaterial2}
						setCharacterCommonMaterial2={setCharacterCommonMaterial2}
						characterCommonMaterial3={characterCommonMaterial3}
						setCharacterCommonMaterial3={setCharacterCommonMaterial3}
						sliver={sliver}
						setSliver={setSliver}
						fragments={fragments}
						setFragments={setFragments}
						chunks={chunks}
						setChunks={setChunks}
						gemstones={gemstones}
						setGemstones={setGemstones}
						bossAscensionMaterial={bossAscensionMaterial}
						setBossAscensionMaterial={setBossAscensionMaterial}
						//* <----- talent level up state ----->
						moraTalent={moraTalent}
						setMoraTalent={setMoraTalent}
						bronzeTalentBooks={bronzeTalentBooks}
						setBronzeTalentBooks={setBronzeTalentBooks}
						silverTalentBooks={silverTalentBooks}
						setSilverTalentBooks={setSilverTalentBooks}
						goldTalentBooks={goldTalentBooks}
						setGoldTalentBooks={setGoldTalentBooks}
						talentCommonMaterial1={talentCommonMaterial1}
						setTalentCommonMaterial1={setTalentCommonMaterial1}
						talentCommonMaterial2={talentCommonMaterial2}
						setTalentCommonMaterial2={setTalentCommonMaterial2}
						talentCommonMaterial3={talentCommonMaterial3}
						setTalentCommonMaterial3={setTalentCommonMaterial3}
						bossMaterial={bossMaterial}
						setBossMaterial={setBossMaterial}
						crown={crown}
						setCrown={setCrown}
						//* functions to set character and talent values
						setCharacterLevelUp={setCharacterLevelUp}
						setTalentLevelUp={setTalentLevelUp}
					/>
				</Route>
				{/* <Route exact path='/farming-planner/characters/edit/:id'>
					<EditCharacter
						filterCharacters={filterCharacters}
						//* <----- authenicated user uid ----->
						owner={user.uid}
						//* <----- characters data ----->
						characters={characters.characters}
						charactersData={charactersData}
						characterNames={characterNames}
						//* <----- character state ----->
						character={character}
						setCharacter={setCharacter}
						//* <----- select state ----->
						levelLow={levelLow}
						setLevelLow={setLevelLow}
						levelHigh={levelHigh}
						setLevelHigh={setLevelHigh}
						NALow={NALow}
						setNALow={setNALow}
						NAHigh={NAHigh}
						setNAHigh={setNAHigh}
						ESLow={ESLow}
						setESLow={setESLow}
						ESHigh={ESHigh}
						setESHigh={setESHigh}
						EBLow={EBLow}
						setEBLow={setEBLow}
						EBHigh={EBHigh}
						setEBHigh={setEBHigh}
						characterSelect={characterSelect}
						setCharacterSelect={setCharacterSelect}
						//* <----- character level up state ----->
						moraCharacter={moraCharacter}
						setMoraCharacter={setMoraCharacter}
						expBooks={expBooks}
						setExpBooks={setExpBooks}
						localSpeciality={localSpeciality}
						setLocalSpeciality={setLocalSpeciality}
						characterCommonMaterial1={characterCommonMaterial1}
						setCharacterCommonMaterial1={setCharacterCommonMaterial1}
						characterCommonMaterial2={characterCommonMaterial2}
						setCharacterCommonMaterial2={setCharacterCommonMaterial2}
						characterCommonMaterial3={characterCommonMaterial3}
						setCharacterCommonMaterial3={setCharacterCommonMaterial3}
						sliver={sliver}
						setSliver={setSliver}
						fragments={fragments}
						setFragments={setFragments}
						chunks={chunks}
						setChunks={setChunks}
						gemstones={gemstones}
						setGemstones={setGemstones}
						bossAscensionMaterial={bossAscensionMaterial}
						setBossAscensionMaterial={setBossAscensionMaterial}
						//* <----- talent level up state ----->
						moraTalent={moraTalent}
						setMoraTalent={setMoraTalent}
						bronzeTalentBooks={bronzeTalentBooks}
						setBronzeTalentBooks={setBronzeTalentBooks}
						silverTalentBooks={silverTalentBooks}
						setSilverTalentBooks={setSilverTalentBooks}
						goldTalentBooks={goldTalentBooks}
						setGoldTalentBooks={setGoldTalentBooks}
						talentCommonMaterial1={talentCommonMaterial1}
						setTalentCommonMaterial1={setTalentCommonMaterial1}
						talentCommonMaterial2={talentCommonMaterial2}
						setTalentCommonMaterial2={setTalentCommonMaterial2}
						talentCommonMaterial3={talentCommonMaterial3}
						setTalentCommonMaterial3={setTalentCommonMaterial3}
						bossMaterial={bossMaterial}
						setBossMaterial={setBossMaterial}
						crown={crown}
						setCrown={setCrown}
						//* functions to set character and talent values
						setCharacterLevelUp={setCharacterLevelUp}
						setTalentLevelUp={setTalentLevelUp}
					/>
				</Route> */}
				<Route exact path='/farming-planner/characters/:id'>
					<CharacterInfo
						characters={characters.characters}
						//* <----- character state ----->
						character={character}
						setCharacter={setCharacter}
						filterCharacters={filterCharacters}
						charactersData={characters.characters}
						materialsData={charactersData}
					/>
				</Route>
			</Switch>
		</Router>
	);
};

export default FarmingPlanner;
