import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import levelOptions from './levelOptions';
import talentOptions from './talentOptions';
import { characterLevelUp } from './Materials';
import { talentLevelUp } from './Materials';

// console.log(characterLevelUp[13].materials[0]);
// console.log(talentLevelUp[9].materials[0].mora);

const CharacterCard = props => {
	const { charactersData, characters } = props;

	// NA - normal attack
	// ES - elemental skill
	// EB - elemental burst
	const [levelLow, setLevelLow] = useState(1);
	const [levelHigh, setLevelHigh] = useState(1);
	const [NALow, setNALow] = useState(1);
	const [NAHigh, setNAHigh] = useState(1);
	const [ESLow, setESLow] = useState(1);
	const [ESHigh, setESHigh] = useState(1);
	const [EBLow, setEBLow] = useState(1);
	const [EBHigh, setEBHigh] = useState(1);
	const [characterSelect, setCharacterSelect] = useState('');
	// console.log('Level: ', levelLow, levelHigh);
	// console.log('NA: ', NALow, NAHigh);
	// console.log('ES: ', ESLow, ESHigh);
	// console.log('EB: ', EBLow, EBHigh);

	const [mora, setMora] = useState(0);
	const [expBooks, setExpBooks] = useState(0);
	const [localSpeciality, setLocalSpeciality] = useState(0);
	const [commonMaterial1, setCommonMaterial1] = useState(0);
	const [commonMaterial2, setCommonMaterial2] = useState(0);
	const [commonMaterial3, setCommonMaterial3] = useState(0);
	const [sliver, setSliver] = useState(0);
	const [fragments, setFragments] = useState(0);
	const [chunks, setChunks] = useState(0);
	const [gemstones, setGemstones] = useState(0);
	const [bossAscensionMaterial, setBossAscensionMaterial] = useState(0);
	console.log(characterLevelUp[10].materials);
	console.log(characterLevelUp[10].materials[2].localSpeciality);

	useEffect(() => {
		switch (levelHigh) {
			case 1:
				setMora(
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
				setCommonMaterial1(
					characterLevelUp[levelHigh - 1].materials[3].commonMaterial1 -
						characterLevelUp[levelLow - 1].materials[3].commonMaterial1
				);
				setCommonMaterial2(
					characterLevelUp[levelHigh - 1].materials[4].commonMaterial2 -
						characterLevelUp[levelLow - 1].materials[4].commonMaterial2
				);
				setCommonMaterial3(
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
				break;
			case 2:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 3:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 4:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 5:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 6:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 7:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 8:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 9:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 10:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 11:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 12:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 13:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			case 14:
				setMora(
					characterLevelUp[levelHigh - 1].materials[0].mora -
						characterLevelUp[levelLow - 1].materials[0].mora
				);
				break;
			default:
				break;
		}
	}, [levelHigh, levelLow]);

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
		<section className='d-lg-flex align-items-center justify-content-between'>
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
								<div className='text-center'>{c.name}</div>
								<img src={c.image} alt='' className='img-fluid' width='200px' />
								<img className='p-1' src={c.rarityImage} alt='' width='100px' />
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
								setLevelHigh(80);
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
							<div>{mora}</div>
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
							<div>{commonMaterial1}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[2].commonMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{commonMaterial2}</div>
						</div>
						<div>
							<img
								src={c.data.characterAscension[4].commonMaterial.image}
								width='50px'
								alt=''
							/>
							<div>{commonMaterial3}</div>
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
							<div>200</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[1].talentBookImage}
								width='50px'
								alt=''
							/>
							<div>200</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[5].talentBookImage}
								width='50px'
								alt=''
							/>
							<div>200</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[8].bossMaterialImage}
								width='50px'
								alt=''
							/>
							<div>200</div>
						</div>
						<div>
							<img
								src={c.data.talentMaterials[8].crownImage}
								width='50px'
								alt=''
							/>
							<div>200</div>
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
