import React, { useState } from 'react';
import Select from 'react-select';

import levelOptions from './levelOptions';
import talentOptions from './talentOptions';

const CharacterCard = props => {
	const { charactersData, characters } = props;

	// NA - normal attack
	// ES - elemental skill
	// EB - elemental burst
	const [levelLow, setLevelLow] = useState('1');
	const [levelHigh, setLevelHigh] = useState('1');
	const [NALow, setNALow] = useState('1');
	const [NAHigh, setNAHigh] = useState('1');
	const [ESLow, setESLow] = useState('1');
	const [ESHigh, setESHigh] = useState('1');
	const [EBLow, setEBLow] = useState('1');
	const [EBHigh, setEBHigh] = useState('1');
	const [characterSelect, setCharacterSelect] = useState('');
	// console.log('Level: ', levelLow, levelHigh);
	// console.log('NA: ', NALow, NAHigh);
	// console.log('ES: ', ESLow, ESHigh);
	// console.log('EB: ', EBLow, EBHigh);

	// select array
	const characterNames = [];
	characters.characters.map(c => {
		return characterNames.push({ value: c.name, label: c.name });
	});

	// console.log(characters.characters[0]);
	// console.log(characterSelect);
	// console.log(charactersData[0].data.skillTalents[0].image);

	return (
		<section className='d-lg-flex align-items-center justify-content-between'>
			<Select
				className='text-dark'
				options={characterNames}
				onChange={e => {
					setCharacterSelect(e.value);
				}}
			/>
			{/* character section */}
			<section>
				<div className='d-inline-block'>
					{characters.characters.map(c =>
						c.name === characterSelect ? (
							<div className='d-flex flex-column border align-items-center justify-content-center'>
								<div className='text-center'>{c.name}</div>
								<img src={c.image} alt='' className='img-fluid' width='200px' />
								<img className='p-1' src={c.rarityImage} alt='' width='100px' />
							</div>
						) : (
							<div></div>
						)
					)}
				</div>
			</section>
			{/* <----- talents section -----> */}
			<section className='d-flex flex-column'>
				<section className='border d-inline-block'>
					<div className='d-flex align-items-center justify-content-center p-3'>
						<div className='me-2'>Select level</div>
						<select
							className='btn btn-sm btn-light text-start mx-2'
							value={levelLow}
							onChange={e => {
								const value = e.target.value;
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
								const value = e.target.value;
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
				{/* <----- normal attack -----> */}
				{charactersData.map(c =>
					characterSelect === c.data.name ? (
						<div className='d-flex align-items-center justify-content-between border p-3'>
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
										const value = e.target.value;
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
										const value = e.target.value;
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
						<div></div>
					)
				)}

				{/* <----- elemental skill -----> */}
				{charactersData.map(c =>
					characterSelect === c.data.name ? (
						<div className='d-flex align-items-center justify-content-between border p-3'>
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
										const value = e.target.value;
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
										const value = e.target.value;
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
						<div></div>
					)
				)}

				{/* <----- elemental burst -----> */}
				{charactersData.map(c =>
					c.data.name === characterSelect ? (
						<div className='d-flex align-items-center justify-content-between border p-3'>
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
										const value = e.target.value;
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
										const value = e.target.value;
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
						<div></div>
					)
				)}
				<div className='border'>
					<div>Templates</div>
					<button
						className='btn btn-sm btn-light'
						onClick={() => {
							setLevelHigh('90');
							setNAHigh('10');
							setESHigh('10');
							setEBHigh('10');
						}}
					>
						Max
					</button>
					<button
						className='btn btn-sm btn-light'
						onClick={() => {
							setLevelLow('1');
							setLevelHigh('1');
							setNALow('1');
							setNAHigh('1');
							setESLow('1');
							setESHigh('1');
							setEBLow('1');
							setEBHigh('1');
						}}
					>
						Reset
					</button>
					<button
						className='btn btn-sm btn-light'
						onClick={() => {
							setLevelHigh('80');
							setNAHigh('8');
							setESHigh('8');
							setEBHigh('8');
						}}
					>
						80-8-8-8
					</button>
				</div>
			</section>
			{/* materials section */}
			{charactersData.map(c => {
				if (characterSelect === c.data.name) {
					console.log(c.data.characterAscension[0]);
				}
			})}
			<section className='border d-flex flex-wrap'>
				<div>
					<img src='/images/Materials/Item_Mora.png' width='50px' alt='' />
					<div>200</div>
				</div>
				<div>
					<img
						src="/images/Materials/Character Materials/EXP/Item_Hero's_Wit.png"
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[0].localSpeciality.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[0].commonMaterial.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[2].commonMaterial.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[4].commonMaterial.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[4].bossMaterial.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[0].ascensionMaterial
								.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[1].ascensionMaterial
								.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[3].ascensionMaterial
								.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={
							charactersData[0].data.characterAscension[5].ascensionMaterial
								.image
						}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={charactersData[0].data.talentMaterials[0].talentBookImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={charactersData[0].data.talentMaterials[1].talentBookImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={charactersData[0].data.talentMaterials[5].talentBookImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={charactersData[0].data.talentMaterials[8].bossMaterialImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={charactersData[0].data.talentMaterials[8].crownImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
			</section>
		</section>
	);
};

export default CharacterCard;
