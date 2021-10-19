import React from 'react';
import ArtifactImage from '../../../assets/Item_Adventurers_Flower.png';
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Artifact from './Artifact';

const Artifacts = () => {
	return (
		<Container>
			<CardComponent title='Artifacts'>
				<div className='table-responsive mx-3'>
					<table
						className='table table-hover table-dark align-middle'
						style={{ minWidth: '650px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Name</th>
								<th scope='col'>Rarity</th>
								<th scope='col'>Pieces</th>
								<th scope='col'>Bonuses</th>
							</tr>
						</thead>
						<tbody>
							<Artifact
								name='Adventurer'
								image={ArtifactImage}
								bonus1='Electro DMG Bonus +15%'
								bonus2='Increases damage caused by Overloaded,
								Electro-Charged and Superconduct by 40%. Triggering such
								effects decreases Elemental Skill CD by 1s. Can only occur
								once every 0.8s.'
							/>
							<Artifact
								name='Adventurer'
								image={ArtifactImage}
								bonus1='Electro DMG Bonus +15%'
								bonus2='Increases damage caused by Overloaded,
								Electro-Charged and Superconduct by 40%. Triggering such
								effects decreases Elemental Skill CD by 1s. Can only occur
								once every 0.8s.'
							/>
							<Artifact
								name='Adventurer'
								image={ArtifactImage}
								bonus1='Electro DMG Bonus +15%'
								bonus2='Increases damage caused by Overloaded,
								Electro-Charged and Superconduct by 40%. Triggering such
								effects decreases Elemental Skill CD by 1s. Can only occur
								once every 0.8s.'
							/>
						</tbody>
					</table>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Artifacts;
