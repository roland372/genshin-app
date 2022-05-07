import React from 'react';
import CardComponent from '../Layout/CardComponent';
import Ascension from './Ascension';

const Ascensions = props => {
	return (
		<CardComponent title='Ascensions'>
			<div className='table-responsive mx-2 rounded'>
				<section>
					<table
						// id='table-striped'
						className='table table-sm bg-secondary-medium text-color table-striped align-middle table-borderless'
						style={{ minWidth: '900px' }}
					>
						<thead className='bg-primary-dark'>
							<tr className='align-middle text-color'>
								<th className='px-3' scope='col'>
									Ascension Phase
								</th>
								<th scope='col'>Level</th>
								<th scope='col'>Ascension Material</th>
								<th scope='col'>Boss Material</th>
								<th scope='col'>Local Specialties</th>
								<th scope='col'>Common Materials</th>
								<th scope='col'>Mora Cost</th>
							</tr>
						</thead>
						<tbody>
							{props.data.characterAscension.map((ascension, index) => {
								const {
									ascensionPhase,
									level,
									ascensionMaterial,
									bossMaterial,
									localSpeciality,
									commonMaterial,
									moraCost,
								} = ascension;

								return (
									<Ascension
										ascensionPhase={ascensionPhase}
										key={index}
										level={level}
										ascensionMaterialImage={ascensionMaterial.image}
										ascensionMaterialName={ascensionMaterial.name}
										ascensionMaterialAmount={ascensionMaterial.amount}
										bossMaterialImage={bossMaterial.image}
										bossMaterialName={bossMaterial.name}
										bossMaterialAmount={bossMaterial.amount}
										localSpecialityImage={localSpeciality.image}
										localSpecialityName={localSpeciality.name}
										localSpecialityAmount={localSpeciality.amount}
										commonMaterialImage={commonMaterial.image}
										commonMaterialName={commonMaterial.name}
										commonMaterialAmount={commonMaterial.amount}
										moraCost={moraCost}
									/>
								);
							})}
						</tbody>
					</table>
				</section>
			</div>
		</CardComponent>
	);
};

export default Ascensions;
