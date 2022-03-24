import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import BackButton from './BackButton';
import Character from './Character';
import Materials from './Materials';

const CharacterInfo = props => {
	const { filterCharacters, charactersData, materialsData } = props;
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

	const {
		name,
		// levelHigh,
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

	useEffect(() => {
		const loadCharacter = async () => {
			const res = await axios.get(`http://localhost:3003/characters/${id}`);
			// console.log(res.data);
			setCharacter(res.data);
		};

		loadCharacter();
	}, [id]);

	return (
		<Container>
			<CardComponent title={name}>
				<BackButton>
					<Character charactersData={charactersData} characterSelect={name} />
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
					<section className='d-flex flex-column text-light'>
						{/* <----- normal attack -----> */}
						{materialsData.map(c =>
							name === c.data.name ? (
								<div
									className='d-flex align-items-center justify-content-between border p-3'
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
									className='d-flex align-items-center justify-content-between border p-3'
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
									className='d-flex align-items-center justify-content-between border p-3'
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
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default CharacterInfo;
