import React from 'react';
import CardComponent from '../Layout/CardComponent';
import TalentMaterial from './TalentMaterial';

const TalentMaterials = props => {
	return (
		<CardComponent title='Talent Leveling Materials'>
			<div className='table-responsive mx-2 rounded'>
				<section className='rounded'>
					<table
						className='table table-sm bg-secondary-medium text-color table-striped align-middle table-borderless'
						style={{ minWidth: '700px' }}
					>
						<thead className='bg-primary-dark'>
							<tr className='align-middle text-color'>
								<th style={{ minWidth: '70px' }} scope='col'>
									Level
								</th>
								<th scope='col'>Talent Books</th>
								<th scope='col'>Common Material</th>
								<th scope='col'>Boss Materials</th>
								<th scope='col'>Crowns</th>
								<th scope='col'>Mora Cost</th>
							</tr>
						</thead>
						<tbody>
							{props.data.talentMaterials.map((material, index) => {
								const {
									level,
									talentBookImage,
									talentBookAmount,
									commonMaterialImage,
									commonMaterialAmount,
									bossMaterialImage,
									bossMaterialAmount,
									crownImage,
									crownAmount,
									moraImage,
									moraAmount,
								} = material;
								return (
									<TalentMaterial
										level={level}
										key={index}
										talentBookImage={talentBookImage}
										talentBookName={material.talentBookImage
											.slice(57, -4)
											.replaceAll('_', ' ')}
										talentBookAmount={talentBookAmount}
										commonMaterialImage={commonMaterialImage}
										commonMaterialName={material.commonMaterialImage
											.slice(49, -4)
											.replaceAll('_', ' ')}
										commonMaterialAmount={commonMaterialAmount}
										bossMaterialImage={bossMaterialImage}
										bossMaterialName={material.bossMaterialImage
											.slice(61, -4)
											.replaceAll('_', ' ')}
										bossMaterialAmount={bossMaterialAmount}
										crownImage={crownImage}
										crownName={material.crownImage
											.slice(58, -4)
											.replaceAll('_', ' ')}
										crownAmount={crownAmount}
										moraImage={moraImage}
										moraAmount={moraAmount}
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

export default TalentMaterials;
