import React from 'react';
import albedo from '../../assets/data/Characters/Albedo.json';

const CharacterCard = props => {
	const { charactersData } = props;
	const { characters } = charactersData;
	console.log(albedo.skillTalents[0].name);

	return (
		<section className='d-lg-flex align-items-center justify-content-between'>
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
			<section className='d-flex flex-column'>
				<section className='border d-inline-block'>
					<div className='d-flex align-items-center justify-content-center p-3'>
						<div className='me-2'>Select level</div>
						<select className='btn btn-sm btn-light text-start mx-2'>
							<option defaultChecked>1</option>
							<option value='20'>20</option>
							<option value='20★'>20★</option>
							<option value='40'>40</option>
							<option value='40★'>40★</option>
							<option value='50'>50</option>
							<option value='50★'>50★</option>
							<option value='60'>60</option>
							<option value='60★'>60★</option>
							<option value='70'>70</option>
							<option value='70★'>70★</option>
							<option value='80'>80</option>
							<option value='80★'>80★</option>
							<option value='90'>90</option>
						</select>
						<div className='mx-1'>-</div>
						<select className='btn btn-sm btn-light text-start mx-2'>
							<option defaultChecked>1</option>
							<option value='20'>20</option>
							<option value='20★'>20★</option>
							<option value='40'>40</option>
							<option value='40★'>40★</option>
							<option value='50'>50</option>
							<option value='50★'>50★</option>
							<option value='60'>60</option>
							<option value='60★'>60★</option>
							<option value='70'>70</option>
							<option value='70★'>70★</option>
							<option value='80'>80</option>
							<option value='80★'>80★</option>
							<option value='90'>90</option>
						</select>
					</div>
				</section>
				<div className='d-inline-block'>
					<div className='d-flex align-items-center justify-content-between border p-3'>
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
						<select className='btn btn-sm btn-light text-start'>
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
						<select className='btn btn-sm btn-light text-start'>
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
				<div className='d-inline-block'>
					<div className='d-flex align-items-center justify-content-between border p-3'>
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
						<select className='btn btn-sm btn-light text-start'>
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
						<select className='btn btn-sm btn-light text-start'>
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
				<div className='d-inline-block'>
					<div className='d-flex align-items-center justify-content-between border p-3'>
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
						<select className='btn btn-sm btn-light text-start'>
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
						<select className='btn btn-sm btn-light text-start'>
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
					<button className='btn btn-sm btn-light'>Max</button>
					<button className='btn btn-sm btn-light'>Reset</button>
					<button className='btn btn-sm btn-light'>80-8-8-8</button>
				</div>
			</section>
		</section>
	);
};

export default CharacterCard;
