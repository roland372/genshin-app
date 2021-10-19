import React from 'react';
import CardComponent from '../../../Layout/CardComponent';
import Ascension from '../../Ascension';

const Ascensions = props => {
	return (
		<CardComponent title='Ascensions'>
			<div className='mx-3 table-responsive'>
				<section>
					<table
						className='table table-dark table-sm align-middle text-center table-bordered'
						style={{ minWidth: '900px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Ascension Phase</th>
								<th scope='col'>Level</th>
								<th scope='col'>Ascension Material</th>
								<th>Boss Material</th>
								<th scope='col'>Local Specialties</th>
								<th scope='col'>Common Materials</th>
								<th scope='col'>Mora Cost</th>
							</tr>
						</thead>
						<tbody>
							<Ascension
								ascensionPhase='0 → 1'
								level='20'
								ascensionMaterialImage={props.ascensionMaterial1Image}
								ascensionMaterialName={
									props.data.characterAscension[0].ascensionMaterial.name
								}
								ascensionMaterialAmount='1'
								bossMaterialImage={''}
								bossMaterialName={''}
								bossMaterialAmount=''
								localSpecialityImage={props.localSpecialityImage}
								localSpecialityName={
									props.data.characterAscension[0].localSpeciality.name
								}
								localSpecialityAmount='3'
								commonMaterialImage={props.commonMaterial1Image}
								commonMaterialName={
									props.data.characterAscension[0].commonMaterial.name
								}
								commonMaterialAmount='3'
								moraCost='20,000'
							/>
							<Ascension
								ascensionPhase='1 → 2'
								level='40'
								ascensionMaterialImage={props.ascensionMaterial2Image}
								ascensionMaterialName={
									props.data.characterAscension[1].ascensionMaterial.name
								}
								ascensionMaterialAmount='3'
								bossMaterialImage={props.bossMaterialImage}
								bossMaterialName={
									props.data.characterAscension[1].bossMaterial.name
								}
								bossMaterialAmount='2'
								localSpecialityImage={props.localSpecialityImage}
								localSpecialityName={
									props.data.characterAscension[1].localSpeciality.name
								}
								localSpecialityAmount='10'
								commonMaterialImage={props.commonMaterial1Image}
								commonMaterialName={
									props.data.characterAscension[1].commonMaterial.name
								}
								commonMaterialAmount='15'
								moraCost='40,000'
							/>
							<Ascension
								ascensionPhase='2 → 3'
								level='50'
								ascensionMaterialImage={props.ascensionMaterial2Image}
								ascensionMaterialName={
									props.data.characterAscension[2].ascensionMaterial.name
								}
								ascensionMaterialAmount='6'
								bossMaterialImage={props.bossMaterialImage}
								bossMaterialName={
									props.data.characterAscension[2].bossMaterial.name
								}
								bossMaterialAmount='4'
								localSpecialityImage={props.localSpecialityImage}
								localSpecialityName={
									props.data.characterAscension[2].localSpeciality.name
								}
								localSpecialityAmount='20'
								commonMaterialImage={props.commonMaterial2Image}
								commonMaterialName={
									props.data.characterAscension[2].commonMaterial.name
								}
								commonMaterialAmount='12'
								moraCost='60,000'
							/>
							<Ascension
								ascensionPhase='3 → 4'
								level='60'
								ascensionMaterialImage={props.ascensionMaterial3Image}
								ascensionMaterialName={
									props.data.characterAscension[3].ascensionMaterial.name
								}
								ascensionMaterialAmount='3'
								bossMaterialImage={props.bossMaterialImage}
								bossMaterialName={
									props.data.characterAscension[3].bossMaterial.name
								}
								bossMaterialAmount='8'
								localSpecialityImage={props.localSpecialityImage}
								localSpecialityName={
									props.data.characterAscension[3].localSpeciality.name
								}
								localSpecialityAmount='30'
								commonMaterialImage={props.commonMaterial2Image}
								commonMaterialName={
									props.data.characterAscension[3].commonMaterial.name
								}
								commonMaterialAmount='18'
								moraCost='80,000'
							/>
							<Ascension
								ascensionPhase='4 → 5'
								level='70'
								ascensionMaterialImage={props.ascensionMaterial3Image}
								ascensionMaterialName={
									props.data.characterAscension[4].ascensionMaterial.name
								}
								ascensionMaterialAmount='6'
								bossMaterialImage={props.bossMaterialImage}
								bossMaterialName={
									props.data.characterAscension[4].bossMaterial.name
								}
								bossMaterialAmount='12'
								localSpecialityImage={props.localSpecialityImage}
								localSpecialityName={
									props.data.characterAscension[4].localSpeciality.name
								}
								localSpecialityAmount='45'
								commonMaterialImage={props.commonMaterial3Image}
								commonMaterialName={
									props.data.characterAscension[4].commonMaterial.name
								}
								commonMaterialAmount='12'
								moraCost='100,000'
							/>
							<Ascension
								ascensionPhase='5 → 6'
								level='80'
								ascensionMaterialImage={props.ascensionMaterial4Image}
								ascensionMaterialName={
									props.data.characterAscension[5].ascensionMaterial.name
								}
								ascensionMaterialAmount='6'
								bossMaterialImage={props.bossMaterialImage}
								bossMaterialName={
									props.data.characterAscension[5].bossMaterial.name
								}
								bossMaterialAmount='20'
								localSpecialityImage={props.localSpecialityImage}
								localSpecialityName={
									props.data.characterAscension[5].localSpeciality.name
								}
								localSpecialityAmount='60'
								commonMaterialImage={props.commonMaterial3Image}
								commonMaterialName={
									props.data.characterAscension[5].commonMaterial.name
								}
								commonMaterialAmount='24'
								moraCost='120,000'
							/>
						</tbody>
					</table>
				</section>
			</div>
		</CardComponent>
	);
};

export default Ascensions;
