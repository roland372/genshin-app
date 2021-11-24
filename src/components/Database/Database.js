import React from 'react';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import Weapons from './Weapons/Weapons';
import TalentBooks from './Materials/Talent Books/TalentBooks';
import charactersData from '../../assets/data/Characters/characters.json';

const database = () => {
	return (
		<Container>
			<Weapons />
			<TalentBooks charactersData={charactersData} />
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
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
								</td>
								<td>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
								</td>
							</tr>
							<tr>
								<td>
									<h6>
										Monday <br /> Wednesday
									</h6>
								</td>
								<td>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
								</td>
								<td>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
								</td>
							</tr>
							<tr>
								<td>
									<h6>
										Monday <br /> Wednesday
									</h6>
								</td>
								<td>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
								</td>
								<td>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
									<img
										src={
											'/images/Characters/mondstadt/Amber/images/Character_Amber_Thumb.png'
										}
										width='80px'
										alt=''
									/>
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
