import React from 'react';
import CardComponent from '../Layout/CardComponent';
import TalentMaterial from './TalentMaterial';

const TalentMaterials = props => {
	return (
		<CardComponent title='Talent Leveling Materials'>
			<div className='mx-2 table-responsive'>
				<section>
					<table
						className='table table-sm table-dark table-striped table-hover align-middle text-center table-bordered'
						style={{ minWidth: '700px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Level</th>
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
										talentBookAmount={talentBookAmount}
										commonMaterialImage={commonMaterialImage}
										commonMaterialAmount={commonMaterialAmount}
										bossMaterialImage={bossMaterialImage}
										bossMaterialAmount={bossMaterialAmount}
										crownImage={crownImage}
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
