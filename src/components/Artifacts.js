import React from 'react';
import ArtifactImage from '../assets/Item_Adventurers_Flower.png';

const Artifacts = () => {
	return (
		<main className='bg-secondary text-light pt-1 pb-1 '>
			<div className='container '>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3 '>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Artifacts
					</h3>
					<div className='table-responsive mx-3'>
						<table className='table table-dark' style={{ minWidth: '650px' }}>
							<thead>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Rarity</th>
									<th scope='col'>Pieces</th>
									<th scope='col'>Bonuses</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope='row'>Adventurer</th>
									<td>4-5★</td>
									<td>
										<img
											className='img-thumbnail border-0 bg-secondary'
											src={ArtifactImage}
											width='64px'
											alt=''
										/>
									</td>
									<td>
										<div>
											<b>2 Piece:</b> Electro DMG Bonus +15%
										</div>
										<div>
											<b>4 Piece:</b> Increases damage caused by Overloaded,
											Electro-Charged and Superconduct by 40%. Triggering such
											effects decreases Elemental Skill CD by 1s. Can only occur
											once every 0.8s.
										</div>
									</td>
								</tr>
								<tr>
									<th scope='row'>Adventurer</th>
									<td>4-5★</td>
									<td>
										<img src={ArtifactImage} width='64px' alt='' />
									</td>
									<td>
										<div>
											<b>2 Piece:</b> Electro DMG Bonus +15%
										</div>
										<div>
											<b>4 Piece:</b> Increases damage caused by Overloaded,
											Electro-Charged and Superconduct by 40%. Triggering such
											effects decreases Elemental Skill CD by 1s. Can only occur
											once every 0.8s.
										</div>
									</td>
								</tr>
								<tr>
									<th scope='row'>Adventurer</th>
									<td>4-5★</td>
									<td>
										<img src={ArtifactImage} width='64px' alt='' />
									</td>
									<td>
										<div>
											<b>2 Piece:</b> Electro DMG Bonus +15%
										</div>
										<div>
											<b>4 Piece:</b> Increases damage caused by Overloaded,
											Electro-Charged and Superconduct by 40%. Triggering such
											effects decreases Elemental Skill CD by 1s. Can only occur
											once every 0.8s.
										</div>
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

export default Artifacts;
