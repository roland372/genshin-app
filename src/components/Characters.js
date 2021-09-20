import React from 'react';
import CharacterAmber from '../assets/Character_Amber_Thumb.png';
import AnemoElement from '../assets/Element_Anemo.png';
import Rarity from '../assets/Icon_5_Stars.png';
import SwordIcon from '../assets/Weapon-class-sword-icon.png';

const Characters = () => {
	let arr = [];
	for (let i = 0; i < 30; i++) {
		arr.push(
			<img
				src={CharacterAmber}
				width='90px'
				className='img-fluid p-2'
				alt=''
				srcset=''
				key={i}
			/>
		);
	}
	return (
		// <section className='bg-secondary text-light p-3 border border-2 border-primary'>
		// 	<div className='container border border-2 border-primary'>
		// 		<div className='d-xl-flex align-items-center justify-content-between'>
		// 			<div className='text-start'>
		// 				<h3>Characters List</h3>
		// 			</div>
		// 			<div className=''>
		// 				<input
		// 					type='text'
		// 					className='form-control'
		// 					placeholder='Search for a character...'
		// 				/>
		// 			</div>
		// 		</div>
		// 		<div className='pt-5 pb-5 d-flex justify-content-start flex-wrap border border-2 border-primary'>
		// 			{arr}
		// 		</div>
		// 	</div>
		// </section>

		<main className='bg-secondary text-light pt-1 pb-1 text-center'>
			<div className='container'>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Playable Characters
					</h3>
					<div className='table-responsive mx-3'>
						<table
							className='table table-hover table-striped table-dark align-middle'
							style={{ minWidth: '700px' }}
						>
							<thead>
								<tr>
									<th scope='col'>Icon</th>
									<th scope='col'>Name</th>
									<th scope='col'>Rarity</th>
									<th scope='col'>Element</th>
									<th scope='col'>Weapon</th>
									<th scope='col'>Sex</th>
									<th scope='col'>Nation</th>
									<th scope='col'>HP</th>
									<th scope='col'>ATK</th>
									<th scope='col'>DEF</th>
									<th scope='col'>Ascension</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img src={CharacterAmber} width='80px' alt='' />
									</td>
									<td>Amber</td>
									<td>
										<img src={Rarity} alt='' />
									</td>
									<td>
										<img src={AnemoElement} width='32px' alt='' />
									</td>
									<td>
										<img src={SwordIcon} width='32px' alt='' />
									</td>
									<td>Female</td>
									<td>Monstadt</td>
									<td>111</td>
									<td>222</td>
									<td>333</td>
									<td>ATK%</td>
								</tr>
								<tr>
									<td>
										<img src={CharacterAmber} width='80px' alt='' />
									</td>
									<td>Amber</td>
									<td>
										<img src={Rarity} alt='' />
									</td>
									<td>
										<img src={AnemoElement} width='32px' alt='' />
									</td>
									<td>
										<img src={SwordIcon} width='32px' alt='' />
									</td>
									<td>Female</td>
									<td>Monstadt</td>
									<td>111</td>
									<td>222</td>
									<td>333</td>
									<td>ATK%</td>
								</tr>
								<tr>
									<td>
										<img src={CharacterAmber} width='80px' alt='' />
									</td>
									<td>Amber</td>
									<td>
										<img src={Rarity} alt='' />
									</td>
									<td>
										<img src={AnemoElement} width='32px' alt='' />
									</td>
									<td>
										<img src={SwordIcon} width='32px' alt='' />
									</td>
									<td>Female</td>
									<td>Monstadt</td>
									<td>111</td>
									<td>222</td>
									<td>333</td>
									<td>ATK%</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Characters;
