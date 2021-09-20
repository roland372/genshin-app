import React from 'react';
import TalentImage from '../assets/Item_Teachings_of_Freedom.png';
import CharacterAmber from '../assets/Character_Amber_Thumb.png';
import WeaponSkywardHarp from '../assets/Weapon_Skyward_Harp_2nd.png';

const database = () => {
	return (
		<main className='bg-secondary text-light pt-1 pb-1 text-center'>
			<div className='container'>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Character Talents Materials
					</h3>
					<div className='table-responsive mx-3'>
						<table
							className='table table-hover table-striped table-dark align-middle'
							style={{ minWidth: '500px' }}
						>
							<thead>
								<tr>
									<th scope='col'>Days</th>
									<th scope='col'>Materials</th>
									<th scope='col'>Characters</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<h6>
											Monday <br /> Wednesday
										</h6>
									</td>
									<td>
										<img src={TalentImage} width='80px' alt='' />
									</td>
									<td>
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
										<img src={CharacterAmber} width='80px' alt='' />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Weapon Ascension Materials
					</h3>
					<div className='table-responsive mx-3'>
						<table
							className='table table-hover table-striped table-dark align-middle'
							style={{ minWidth: '500px' }}
						>
							<thead>
								<tr>
									<th scope='col'>Days</th>
									<th scope='col'>Materials</th>
									<th scope='col'>Characters</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<h6>
											Monday <br /> Wednesday
										</h6>
									</td>
									<td>
										<img src={TalentImage} width='80px' alt='' />
									</td>
									<td>
										<img src={WeaponSkywardHarp} width='80px' alt='' />
										<img src={WeaponSkywardHarp} width='80px' alt='' />
									</td>
								</tr>
								<tr>
									<td>
										<h6>
											Monday <br /> Wednesday
										</h6>
									</td>
									<td>
										<img src={TalentImage} width='80px' alt='' />
									</td>
									<td>
										<img src={WeaponSkywardHarp} width='80px' alt='' />
										<img src={WeaponSkywardHarp} width='80px' alt='' />
									</td>
								</tr>
								<tr>
									<td>
										<h6>
											Monday <br /> Wednesday
										</h6>
									</td>
									<td>
										<img src={TalentImage} width='80px' alt='' />
									</td>
									<td>
										<img src={WeaponSkywardHarp} width='80px' alt='' />
										<img src={WeaponSkywardHarp} width='80px' alt='' />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</main>
	);
};

export default database;
