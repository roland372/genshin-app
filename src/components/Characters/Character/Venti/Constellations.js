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
								description="Fires 2 additional arrows per Aimed Shot, each dealing 33% of the original arrow's DMG."
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>
										<div>
											Skyward Sonnet decreases opponents'
											<b className='text-anemo'> Anemo RES </b>
											and
											<b> Physical RES </b>
											by 12% for 10s.
										</div>
										<div>
											Opponents launched by Skyward Sonnet suffer an additional
											12%
											<b className='text-anemo'> Anemo RES </b>
											and
											<b> Physical RES </b>
											decrease while airborne.
										</div>
									</div>
								}
							/>
							<Constellation
								level='3'
								image={props.constellation3Image}
								name={props.data.constellations[2].name}
								description={
									<div>
										<div>Increases the Level of Wind's Grand Ode by 3.</div>
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
										When Venti picks up an Elemental Orb or Particle, he
										receives a 25%
										<b className='text-anemo'> Anemo DMG Bonus </b>
										for 10s.
									</div>
								}
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description={
									<div>
										<div>Increases the Level of Skyward Sonnet by 3.</div>
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
											Targets who take DMG from Wind's Grand Ode have their
											Anemo RES decreased by 20%.
										</div>
										<div>
											If an Elemental Absorption occurred, then their
											<b className='text-anemo'> Anemo RES </b>
											towards the corresponding Element is also decreased by
											20%.
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
