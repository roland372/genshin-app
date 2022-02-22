import React, { useState } from 'react';
import albedo from '../../assets/data/Characters/Albedo.json';
import character from '../../assets/data/Characters/Albedo.json';
// console.log(character);

// console.log(albedo);

const CharacterCard = props => {
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
	console.log('Level: ', levelLow, levelHigh);
	console.log('NA: ', NALow, NAHigh);
	console.log('ES: ', ESLow, ESHigh);
	console.log('EB: ', EBLow, EBHigh);

	const { charactersData } = props;
	const { characters } = charactersData;

	return (
		<section className='d-lg-flex align-items-center justify-content-between'>
			{/* character section */}
			<section>
				<div className='d-inline-block'>
					<div className='d-flex flex-column border align-items-center justify-content-center'>
						<div className='text-center'>{albedo.name}</div>
						<img
							src={characters[0].image}
							alt={characters[0].image}
							className='img-fluid'
							width='200px'
						/>
						<img
							className='p-1'
							src={albedo.rarityImage}
							alt=''
							width='100px'
						/>
					</div>
				</div>
			</section>
			{/* talents section */}
			<section className='d-flex flex-column'>
				<section className='border d-inline-block'>
					<div className='d-flex align-items-center justify-content-center p-3'>
						<div className='me-2'>Select level</div>
						<select
							className='btn btn-sm btn-light text-start mx-2'
							onChange={e => {
								const value = e.target.value;
								setLevelLow(value);
							}}
						>
							<option defaultChecked>1</option>
							<option value='20'>20</option>
							<option value='21'>20★</option>
							<option value='40'>40</option>
							<option value='41'>40★</option>
							<option value='50'>50</option>
							<option value='51'>50★</option>
							<option value='60'>60</option>
							<option value='61'>60★</option>
							<option value='70'>70</option>
							<option value='71'>70★</option>
							<option value='80'>80</option>
							<option value='81'>80★</option>
							<option value='90'>90</option>
						</select>
						<div className='mx-1'>-</div>
						<select
							className='btn btn-sm btn-light text-start mx-2'
							onChange={e => {
								const value = e.target.value;
								setLevelHigh(value);
							}}
						>
							<option defaultChecked>1</option>
							<option value='20'>20</option>
							<option value='21'>20★</option>
							<option value='40'>40</option>
							<option value='41'>40★</option>
							<option value='50'>50</option>
							<option value='51'>50★</option>
							<option value='60'>60</option>
							<option value='61'>60★</option>
							<option value='70'>70</option>
							<option value='71'>70★</option>
							<option value='80'>80</option>
							<option value='81'>80★</option>
							<option value='90'>90</option>
						</select>
					</div>
				</section>
				<div className='d-flex align-items-center justify-content-between border p-3'>
					<div className='d-flex align-items-center'>
						<img
							src={albedo.skillTalents[0].image}
							alt=''
							className='img-fluid me-2'
							width='40px'
						/>
						<div className='text-start'>
							<div>{albedo.skillTalents[0].name}</div>
							<div>Lv. 1</div>
						</div>
					</div>
					<div className='d-flex'>
						<select
							className='btn btn-sm btn-light text-start'
							onChange={e => {
								const value = e.target.value;
								setNALow(value);
							}}
						>
							<option defaultChecked='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
						<div className='mx-1'>-</div>
						<select
							className='btn btn-sm btn-light text-start'
							onChange={e => {
								const value = e.target.value;
								setNAHigh(value);
							}}
						>
							<option defaultChecked='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
					</div>
				</div>
				<div className='d-flex align-items-center justify-content-between border p-3'>
					<div className='d-flex align-items-center'>
						<img
							src={albedo.skillTalents[1].image}
							alt=''
							className='img-fluid me-2'
							width='40px'
						/>
						<div className='text-start'>
							<div>{albedo.skillTalents[1].name}</div>
							<div>Lv. 1</div>
						</div>
					</div>
					<div className='d-flex'>
						<select
							className='btn btn-sm btn-light text-start'
							onChange={e => {
								const value = e.target.value;
								setESLow(value);
							}}
						>
							<option defaultChecked='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
						<div className='mx-1'>-</div>
						<select
							className='btn btn-sm btn-light text-start'
							onChange={e => {
								const value = e.target.value;
								setESHigh(value);
							}}
						>
							<option defaultChecked='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
					</div>
				</div>
				<div className='d-flex align-items-center justify-content-between border p-3'>
					<div className='d-flex align-items-center me-3'>
						<img
							src={albedo.skillTalents[2].image}
							alt=''
							className='img-fluid me-2'
							width='40px'
						/>
						<div className='text-start'>
							<div>{albedo.skillTalents[2].name}</div>
							<div>Lv. 1</div>
						</div>
					</div>
					<div className='d-flex'>
						<select
							className='btn btn-sm btn-light text-start'
							onChange={e => {
								const value = e.target.value;
								setEBLow(value);
							}}
						>
							<option defaultChecked='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
						<div className='mx-1'>-</div>
						<select
							className='btn btn-sm btn-light text-start'
							onChange={e => {
								const value = e.target.value;
								setEBHigh(value);
							}}
						>
							<option defaultChecked='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
					</div>
				</div>
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
			{/* <section className='border d-flex flex-wrap'>
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
						src={albedo.characterAscension[0].localSpeciality.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[0].commonMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[2].commonMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[4].commonMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[4].bossMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[0].ascensionMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[1].ascensionMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[3].ascensionMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.characterAscension[5].ascensionMaterial.image}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.talentMaterials[0].talentBookImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.talentMaterials[1].talentBookImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.talentMaterials[5].talentBookImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img
						src={albedo.talentMaterials[8].bossMaterialImage}
						width='50px'
						alt=''
					/>
					<div>200</div>
				</div>
				<div>
					<img src={albedo.talentMaterials[8].crownImage} width='50px' alt='' />
					<div>200</div>
				</div>
			</section> */}
		</section>
	);
};

export default CharacterCard;
