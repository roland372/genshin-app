import React, { useState } from 'react';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import data from '../../assets/data/Characters/characters.json';
// import DropdownMenu from './DropdownMenu';

import Select from 'react-select';

// farming planner where you can select a character from a list
// list will be fetched from assets
// list will contain character name, image, element, and their weapon
// allow user to delete an item from their list
// after selecting a character it'll be added into table
// the table will have radio button for a character, ascension and talent,
// it'll allow you to pick if you want to farm specific item, as default it'll be turned on
// also table will contain weapon selection list where you can pick to farm weapon a for character, also with radio button
// after selecting character, there'll be section below, where you can see specific materials that are needed for character, also when you switch radio button, they'll appear or disappear
// below in that section also include radio button, where you can see either see full week schedule or only today
// also in the section show resin cost, and at the bottom or top I can include total resin cost

const FarmingPlanner = () => {
	const { characters } = data;
	const options = [];

	characters.map(character => {
		return options.push({
			value: character.name,
			label: (
				<section
					className='d-flex justify-content-between'
					onClick={e => {
						console.log(character.name);
					}}
				>
					<div className='mx-3'>
						<img src={character.image} width='40px' alt='' />
						{character.name}
					</div>
					<div className='mx-3'>
						<img src={character.elementImage} width='40px' alt='' />
						<img src={character.weaponImage} width='40px' alt='' />
					</div>
				</section>
			),
		});
	});

	options.map(o => {
		return console.log(o);
	});

	return (
		<Container>
			<CardComponent title='Farming Planner'>
				<div className='mx-3 table-responsive'>
					<section>
						<table
							className='table table-sm table-dark table-striped align-middle text-center table-bordered'
							style={{ minWidth: '700px' }}
						>
							<thead>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Ascension</th>
									<th scope='col'>Talent</th>
									<th scope='col'>Weapon</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope='row' className='text-center'>
										<div className='d-flex align-items-center justify-content-around ms-3'>
											<div class='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													id='flexSwitchCheckChecked'
												/>
											</div>
											<div>
												<img src={characters[0].image} width='40px' alt='' />
												<span>{characters[0].name}</span>
											</div>
											<div>
												<img
													src={characters[0].elementImage}
													width='30px'
													alt=''
												/>
												<img
													src={characters[0].weaponImage}
													width='30px'
													alt=''
												/>
											</div>
											<span className='rounded p-2 ms-2'></span>
										</div>
									</th>
									<td>
										<div class='form-check form-switch d-flex justify-content-center'>
											<input
												className='form-check-input'
												type='checkbox'
												id='flexSwitchCheckChecked'
											/>
										</div>
									</td>
									<td>
										<div class='form-check form-switch d-flex justify-content-center'>
											<input
												className='form-check-input'
												type='checkbox'
												id='flexSwitchCheckChecked'
											/>
										</div>
									</td>
									<td>
										<select>
											<option value='grapefruit'>Grapefruit</option>
											<option value='lime'>Lime</option>
											<option selected value='coconut'>
												Coconut
											</option>
											<option value='mango'>Mango</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						{/* <section className=''>
							<DropdownMenu selected={selected} setSelected={setSelected} />
						</section> */}
					</section>
				</div>
				<section style={{ width: '400px' }}>
					<Select className='text-black' options={options} />
				</section>
			</CardComponent>
		</Container>
	);
};

export default FarmingPlanner;
