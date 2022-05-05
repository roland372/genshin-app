import React, { useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';

import CharacterDataService from '../services/character.services';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import BackButton from './BackButton';
import Character from './Character';
import Materials from './Materials';

import ScrollToTopRouter from '../../Layout/ScrollToTopRouter';

const CharacterInfo = props => {
	const { charactersData, materialsData, character, setCharacter } = props;
	// let [character, setCharacter] = useState({
	// 	name: '',
	// 	levelLow: 1,
	// 	levelHigh: 1,
	// 	NALow: 1,
	// 	NAHigh: 1,
	// 	ESLow: 1,
	// 	ESHigh: 1,
	// 	EBLow: 1,
	// 	EBHigh: 1,
	// 	moraCharacter: 1,
	// 	moraTalent: 1,
	// 	expBooks: 1,
	// 	localSpeciality: 1,
	// 	characterCommonMaterial1: 1,
	// 	talentCommonMaterial1: 1,
	// 	characterCommonMaterial2: 1,
	// 	talentCommonMaterial2: 1,
	// 	characterCommonMaterial3: 1,
	// 	talentCommonMaterial3: 1,
	// 	bossAscensionMaterial: 1,
	// 	sliver: 1,
	// 	fragments: 1,
	// 	chunks: 1,
	// 	gemstones: 1,
	// 	bronzeTalentBooks: 1,
	// 	silverTalentBooks: 1,
	// 	goldTalentBooks: 1,
	// 	bossMaterial: 1,
	// 	crown: 1,
	// });

	let {
		name,
		// lastModified,
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
	const { id } = useParams();

	//* <----- Assign level options ----->
	switch (levelHigh) {
		case 1:
			levelHigh = '1';
			break;
		case 2:
			levelHigh = '20';
			break;
		case 3:
			levelHigh = '20★';
			break;
		case 4:
			levelHigh = '40';
			break;
		case 5:
			levelHigh = '40★';
			break;
		case 6:
			levelHigh = '50';
			break;
		case 7:
			levelHigh = '50★';
			break;
		case 8:
			levelHigh = '60';
			break;
		case 9:
			levelHigh = '60★';
			break;
		case 10:
			levelHigh = '70';
			break;
		case 11:
			levelHigh = '70★';
			break;
		case 12:
			levelHigh = '80';
			break;
		case 13:
			levelHigh = '80★';
			break;
		case 14:
			levelHigh = '90';
			break;

		default:
			break;
	}

	// console.log(levelHigh);
	// levelHigh = 90;

	// useEffect(() => {
	// 	const loadCharacter = async () => {
	// 		const res = await axios.get(`http://localhost:3003/characters/${id}`);
	// 		// console.log(res.data);
	// 		setCharacter(res.data);
	// 	};

	// 	loadCharacter();

	useEffect(() => {
		const getCharacterDatabase = async id => {
			const data = await CharacterDataService.getCharacter(id);
			setCharacter(data.data());
			// console.log(data.data());
		};

		getCharacterDatabase(id);
	}, [id, setCharacter]);

	return (
		<Container>
			<CardComponent title={name}>
				<ScrollToTopRouter />
				<BackButton>
					{/* <h5 className='text-start mx-2'>
						Last Modified:{' '}
						{new Date(lastModified).toLocaleDateString('en-GB', {
							hour: '2-digit',
							minute: '2-digit',
						})}
					</h5> */}
					<Character charactersData={charactersData} characterSelect={name} />
					<section className='border rounded p-3'>
						<h5 className='me-2'>Level {levelHigh}</h5>
					</section>
					<Materials
						charactersData={materialsData}
						characterSelect={name}
						moraCharacter={moraCharacter}
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
					/>

					{/* <----- Talents -----> */}
					<section className='border rounded'>
						<section className='d-flex flex-column text-light'>
							{/* <----- normal attack -----> */}
							{materialsData.map(c =>
								name === c.data.name ? (
									<div
										className='d-flex align-items-center justify-content-between border rounded p-2 mx-2 mt-2'
										key={c.data.name}
									>
										<div className='d-flex align-items-center'>
											<img
												src={c.data.skillTalents[0].image}
												alt=''
												className='img-fluid me-2'
												width='40px'
											/>
											<div className='text-start'>
												<div>{c.data.skillTalents[0].name}</div>
												<div>Lv. {NAHigh}</div>
											</div>
										</div>
									</div>
								) : (
									<div key={c.data.name}></div>
								)
							)}

							{/* <----- elemental skill -----> */}
							{materialsData.map(c =>
								name === c.data.name ? (
									<div
										className='d-flex align-items-center justify-content-between border rounded p-2 m-2'
										key={c.data.name}
									>
										<div className='d-flex align-items-center'>
											<img
												src={c.data.skillTalents[1].image}
												alt=''
												className='img-fluid me-2'
												width='40px'
											/>
											<div className='text-start'>
												<div>{c.data.skillTalents[1].name}</div>
												<div>Lv. {ESHigh}</div>
											</div>
										</div>
									</div>
								) : (
									<div key={c.data.name}></div>
								)
							)}

							{/* <----- elemental burst -----> */}
							{materialsData.map(c =>
								name === c.data.name ? (
									<div
										className='d-flex align-items-center justify-content-between border rounded p-2 mx-2 mb-2'
										key={c.data.name}
									>
										<div className='d-flex align-items-center me-3'>
											<img
												src={c.data.skillTalents[2].image}
												alt=''
												className='img-fluid me-2'
												width='40px'
											/>
											<div className='text-start'>
												<div>{c.data.skillTalents[2].name}</div>
												<div>Lv. {EBHigh}</div>
											</div>
										</div>
									</div>
								) : (
									<div key={c.data.name}></div>
								)
							)}
						</section>
					</section>
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default CharacterInfo;
