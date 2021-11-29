import React from 'react';
import CardComponent from '../../../Layout/CardComponent';
import Constellation from '../../Constellation';

const Constellations = props => {
	return (
		<CardComponent title='Constellations'>
			<div className='mx-3 table-responsive'>
				<section>
					<table className='table table-dark table-sm align-middle'>
						<thead>
							<tr>
								<th scope='col'>Level</th>
								<th scope='col'>Icon</th>
								<th scope='col'>Name</th>
								<th scope='col'>Effect</th>
							</tr>
						</thead>
						<tbody>
							<Constellation
								level='1'
								image={props.constellation1Image}
								name={props.data.constellations[0].name}
								description={
									<div>
										Recasting Stellar Restoration while a Lightning Stiletto is
										present causes Keqing to deal 50% of her ATK as
										<b className='text-electro'> AoE Electro DMG </b>
										at the start point and terminus of her Blink.
									</div>
								}
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>
										<div>
											When Keqing's Normal and Charged Attacks hit opponents
											affected by
											<b className='text-electro'> Electro</b>, they have a 50%
											chance of producing an Elemental Particle.
										</div>
										<div>This effect can only occur once every 5s.</div>
									</div>
								}
							/>
							<Constellation
								level='3'
								image={props.constellation3Image}
								name={props.data.constellations[2].name}
								description={
									<div>
										<div>Increases the Level of Starward Sword by 3.</div>
										<div>Maximum upgrade level is 15.</div>
									</div>
								}
							/>
							<Constellation
								level='4'
								image={props.constellation4Image}
								name={props.data.constellations[3].name}
								description={
									<div>
										For 10s after Keqing triggers an
										<b className='text-electro'>
											{' '}
											Electro-related Elemental Reaction
										</b>
										, her ATK is increased by 25%.
									</div>
								}
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description={
									<div>
										<div>Increases the Level of Stellar Restoration by 3.</div>
										<div>Maximum upgrade level is 15.</div>
									</div>
								}
							/>
							<Constellation
								level='6'
								image={props.constellation6Image}
								name={props.data.constellations[5].name}
								description={
									<div>
										<div>
											When initiating a Normal Attack, a Charged Attack,
											Elemental Skill or Elemental Burst, Keqing gains a 6%
											<b className='text-electro'> Electro DMG Bonus </b>
											for 8s.
										</div>
										<div>
											Effects triggered by Normal Attacks, Charged Attacks,
											Elemental Skills and Elemental Bursts are considered
											independent entities.
										</div>
									</div>
								}
							/>
							{props.children}
						</tbody>
					</table>
				</section>
			</div>
		</CardComponent>
	);
};

export default Constellations;
