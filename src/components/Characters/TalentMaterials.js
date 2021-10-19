import React from 'react';
import CardComponent from '../Layout/CardComponent';
import TalentMaterial from './TalentMaterial';

const TalentMaterials = props => {
	const {
		talentBookImageBronze,
		talentBookImageSilver,
		talentBookImageGold,
		commonMaterialImageTier1,
		commonMaterialImageTier2,
		commonMaterialImageTier3,
		bossMaterialImage,
		crownImage,
		moraImage,
	} = props;
	return (
		<CardComponent title='Talent Leveling Materials'>
			<div className='mx-3 table-responsive'>
				<section>
					<table
						className='table table-sm table-dark table-striped align-middle'
						style={{ minWidth: '700px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Level</th>
								<th scope='col'>Materials</th>
								<th scope='col'>Mora Cost</th>
							</tr>
						</thead>
						<tbody className=''>
							<TalentMaterial
								level='1 → 2'
								talentBookImage={talentBookImageBronze}
								talentBookAmount='3'
								commonMaterialImage={commonMaterialImageTier1}
								commonMaterialAmount='6'
								moraImage={moraImage}
								moraAmount='12,500'
							/>
							<TalentMaterial
								level='2 → 3'
								talentBookImage={talentBookImageSilver}
								talentBookAmount='2'
								commonMaterialImage={commonMaterialImageTier2}
								commonMaterialAmount='3'
								moraImage={moraImage}
								moraAmount='17,500'
							/>
							<TalentMaterial
								level='3 → 4'
								talentBookImage={talentBookImageSilver}
								talentBookAmount='4'
								commonMaterialImage={commonMaterialImageTier2}
								commonMaterialAmount='4'
								moraImage={moraImage}
								moraAmount='25,000'
							/>
							<TalentMaterial
								level='4 → 5'
								talentBookImage={talentBookImageSilver}
								talentBookAmount='6'
								commonMaterialImage={commonMaterialImageTier2}
								commonMaterialAmount='6'
								moraImage={moraImage}
								moraAmount='30,000'
							/>
							<TalentMaterial
								level='5 → 6'
								talentBookImage={talentBookImageSilver}
								talentBookAmount='9'
								commonMaterialImage={commonMaterialImageTier2}
								commonMaterialAmount='9'
								moraImage={moraImage}
								moraAmount='37,500'
							/>
							<TalentMaterial
								level='6 → 7'
								talentBookImage={talentBookImageGold}
								talentBookAmount='4'
								commonMaterialImage={commonMaterialImageTier3}
								commonMaterialAmount='4'
								bossMaterialImage={bossMaterialImage}
								bossMaterialAmount='1'
								moraImage={moraImage}
								moraAmount='120,000'
							/>
							<TalentMaterial
								level='7 → 8'
								talentBookImage={talentBookImageGold}
								talentBookAmount='6'
								commonMaterialImage={commonMaterialImageTier3}
								commonMaterialAmount='6'
								bossMaterialImage={bossMaterialImage}
								bossMaterialAmount='1'
								moraImage={moraImage}
								moraAmount='260,000'
							/>
							<TalentMaterial
								level='8 → 9'
								talentBookImage={talentBookImageGold}
								talentBookAmount='12'
								commonMaterialImage={commonMaterialImageTier3}
								commonMaterialAmount='9'
								bossMaterialImage={bossMaterialImage}
								bossMaterialAmount='2'
								moraImage={moraImage}
								moraAmount='450,000'
							/>
							<TalentMaterial
								level='9 → 10'
								talentBookImage={talentBookImageGold}
								talentBookAmount='16'
								commonMaterialImage={commonMaterialImageTier3}
								commonMaterialAmount='12'
								bossMaterialImage={bossMaterialImage}
								bossMaterialAmount='2'
								crownImage={crownImage}
								crownAmount='1'
								moraImage={moraImage}
								moraAmount='700,000'
							/>
						</tbody>
					</table>
				</section>
			</div>
		</CardComponent>
	);
};

export default TalentMaterials;
