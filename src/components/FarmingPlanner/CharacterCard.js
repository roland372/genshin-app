import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import levelOptions from './levelOptions';
import talentOptions from './talentOptions';
import { characterLevelUp } from './Materials';
import { talentLevelUp } from './Materials';

const CharacterCard = props => {
	const { charactersData, characters } = props;

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
	const [characterSelect, setCharacterSelect] = useState('');
	// console.log('Level: ', levelLow, levelHigh);
	// console.log('NA: ', NALow, NAHigh);
	// console.log('ES: ', ESLow, ESHigh);
	// console.log('EB: ', EBLow, EBHigh);

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

	// select array
	const characterNames = [];
	characters.characters.map(c => {
		return characterNames.push({ value: c.name, label: c.name });
	});
	// console.log(
	// 	charactersData[0].data.characterAscension[0].localSpeciality.image
	// );

	// console.log(characters.characters[0]);
	// console.log(characterSelect);
	// console.log(charactersData[0].data.skillTalents[0].image);

	return (
		<section className='d-lg-flex align-items-center justify-content-between mx-2'>
			<Select
				className='text-dark'
				options={characterNames}
				onChange={e => setCharacterSelect(e.value)}
			/>
			{/* character section */}
			<section>
				<div className='d-inline-block'>
					{characters.characters.map(c =>
						c.name === characterSelect ? (
							<div
								className='d-flex flex-column border align-items-center justify-content-center'
								key={c.name}
							>
								<div className='d-flex align-items-center'>
									<div className='text-center'>{c.name}</div>
									<img className='p-1' src={c.rarityImage} alt='' />
								</div>
								<img src={c.image} alt='' className='img-fluid' width='300px' />
							</div>
						) : (
							<div key={c.name}></div>
						)
					)}
				</div>
			</section>
			{/* <----- talents section -----> */}
			<section className='d-flex flex-column'>
				{characterSelect && (
					<section className='border d-inline-block'>
						<div className='d-flex align-items-center justify-content-center p-3'>
							<div className='me-2'>Select level</div>
							<select
								className='btn btn-sm btn-light text-start mx-2'
								value={levelLow}
								onChange={e => {
									const value = parseInt(e.target.value);
									setLevelLow(value);
								}}
							>
								{levelOptions.map(o => (
									<option key={o.value} value={o.value}>
										{o.name}
									</option>
								))}
							</select>
							<div className='mx-1'>-</div>
							<select
								className='btn btn-sm btn-light text-start mx-2'
								value={levelHigh}
								onChange={e => {
									const value = parseInt(e.target.value);
									setLevelHigh(value);
								}}
							>
								{levelOptions.map(o => (
									<option key={o.value} value={o.value}>
										{o.name}
									</option>
								))}
							</select>
						</div>
					</section>
				)}
				{/* <----- normal attack -----> */}
				{charactersData.map(c =>
					characterSelect === c.data.name ? (
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
							<div className='d-flex'>
								<select
									className='btn btn-sm btn-light text-start'
									value={NALow}
									onChange={e => {
										const value = parseInt(e.target.value);
										setNALow(value);
									}}
								>
									{talentOptions.map(o => (
										<option key={o.value} value={o.value}>
											{o.name}
										</option>
									))}
								</select>
								<div className='mx-1'>-</div>
								<select
									className='btn btn-sm btn-light text-start'
									value={NAHigh}
									onChange={e => {
										const value = parseInt(e.target.value);
										setNAHigh(value);
									}}
								>
									{talentOptions.map(o => (
										<option key={o.value} value={o.value}>
											{o.name}
										</option>
									))}
								</select>
							</div>
						</div>
					) : (
						<div key={c.data.name}></div>
					)
				)}

				{/* <----- elemental skill -----> */}
				{charactersData.map(c =>
					characterSelect === c.data.name ? (
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
							<div className='d-flex'>
								<select
									className='btn btn-sm btn-light text-start'
									value={ESLow}
									onChange={e => {
										const value = parseInt(e.target.value);
										setESLow(value);
									}}
								>
									{talentOptions.map(o => (
										<option key={o.value} value={o.value}>
											{o.name}
										</option>
									))}
								</select>
								<div className='mx-1'>-</div>
								<select
									className='btn btn-sm btn-light text-start'
									value={ESHigh}
									onChange={e => {
										const value = parseInt(e.target.value);
										setESHigh(value);
									}}
								>
									{talentOptions.map(o => (
										<option key={o.value} value={o.value}>
											{o.name}
										</option>
									))}
								</select>
							</div>
						</div>
					) : (
						<div key={c.data.name}></div>
					)
				)}

				{/* <----- elemental burst -----> */}
				{charactersData.map(c =>
					c.data.name === characterSelect ? (
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
							<div className='d-flex'>
								<select
									className='btn btn-sm btn-light text-start'
									value={EBLow}
									onChange={e => {
										const value = parseInt(e.target.value);
										setEBLow(value);
									}}
								>
									{talentOptions.map(o => (
										<option key={o.value} value={o.value}>
											{o.name}
										</option>
									))}
								</select>
								<div className='mx-1'>-</div>
								<select
									className='btn btn-sm btn-light text-start'
									value={EBHigh}
									onChange={e => {
										const value = parseInt(e.target.value);
										setEBHigh(value);
									}}
								>
									{talentOptions.map(o => (
										<option key={o.value} value={o.value}>
											{o.name}
										</option>
									))}
								</select>
							</div>
						</div>
					) : (
						<div key={c.data.name}></div>
					)
				)}
				{characterSelect && (
					<div className='border'>
						<div>Templates</div>
						<button
							className='btn btn-sm btn-light'
							onClick={() => {
								setLevelLow(1);
								setLevelHigh(14);
								setNALow(1);
								setNAHigh(10);
								setESLow(1);
								setESHigh(10);
								setEBLow(1);
								setEBHigh(10);
							}}
						>
							Max
						</button>
						<button
							className='btn btn-sm btn-light'
							onClick={() => {
								setLevelLow(1);
								setLevelHigh(1);
								setNALow(1);
								setNAHigh(1);
								setESLow(1);
								setESHigh(1);
								setEBLow(1);
								setEBHigh(1);
							}}
						>
							Reset
						</button>
						<button
							className='btn btn-sm btn-light'
							onClick={() => {
								setLevelLow(1);
								setLevelHigh(12);
								setNALow(1);
								setNAHigh(8);
								setESLow(1);
								setESHigh(8);
								setEBLow(1);
								setEBHigh(8);
							}}
						>
							80-8-8-8
						</button>
					</div>
				)}
			</section>
			{/* materials section */}
			{charactersData.map(c =>
				characterSelect === c.data.name ? (
					<section className='border d-flex flex-wrap' key={c.data.name}>
						<div>
							<img src='/images/Materials/Item_Mora.png' width='50px' alt='' />
							<div>{moraCharacter + moraTalent}</div>
						</div>
						<div>
							<img
								src="/images/Materials/Character Materials/EXP/Item_Hero's_Wit.png"
								width='50px'
								alt=''
							/>
							<div>{expBooks}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[0].localSpeciality.image}
								width='50px'
								alt=''
							/>
							<div>{localSpeciality}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[0].commonMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{characterCommonMaterial1 + talentCommonMaterial1}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[2].commonMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{characterCommonMaterial2 + talentCommonMaterial2}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[4].commonMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{characterCommonMaterial3 + talentCommonMaterial3}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[4].bossMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{bossAscensionMaterial}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[0].ascensionMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{sliver}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[1].ascensionMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{fragments}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[3].ascensionMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{chunks}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[5].ascensionMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{gemstones}</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[0].talentBookImage}
								width='50px'
								alt=''
							/>
							<div>{bronzeTalentBooks}</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[1].talentBookImage}
								width='50px'
								alt=''
							/>
							<div>{silverTalentBooks}</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[5].talentBookImage}
								width='50px'
								alt=''
							/>
							<div>{goldTalentBooks}</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[8].bossMaterialImage}
								width='50px'
								alt=''
							/>
							<div>{bossMaterial}</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[8].crownImage}
								width='50px'
								alt=''
							/>
							<div>{crown}</div>
						</div>
					</section>
				) : (
					<div key={c.data.name}></div>
				)
			)}
		</section>
	);
};

export default CharacterCard;
