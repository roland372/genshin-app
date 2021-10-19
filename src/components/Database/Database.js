import React from 'react';
import TalentImage from '../../assets/Item_Teachings_of_Freedom.png';
import CharacterAmber from '../../assets/Character_Amber_Thumb.png';
import WeaponSkywardHarp from '../../assets/Weapon_Skyward_Harp_2nd.png';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

const database = () => {
	return (
		<Container>
			<CardComponent title='Character Talents Materials'>
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
			</CardComponent>
			<CardComponent title='Weapon Ascension Materials'>
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
			</CardComponent>
		</Container>
	);
};

export default database;
