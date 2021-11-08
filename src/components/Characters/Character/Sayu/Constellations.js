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
								description='The Muji-Muji Daruma created by Yoohoo Art: Mujina Flurry will ignore HP limits and can simultaneously attack nearby opponents and heal characters.'
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>
										<div>
											Yoohoo Art: Fuuin Dash gains the following effects:
										</div>
										<ul>
											<li>
												DMG of Fuufuu Whirlwind Kick in Tapping (mobile)/Press
												(PC & PlayStation) Mode increased by 3.3%.
											</li>
											<li>
												Every 0.5s in the Fuufuu Windwheel state will increase
												the DMG of this Fuufuu Whirlwind Kick by 3.3%. The
												maximum DMG increase possible through this method is
												66%.
											</li>
										</ul>
									</div>
								}
							/>
							<Constellation
								level='3'
								image={props.constellation3Image}
								name={props.data.constellations[2].name}
								description={
									<div>
										<div>
											Increases the Level of Yoohoo Art: Mujina Flurry by 3.
										</div>
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
										<div>
											Sayu recovers 1.2 Energy when she triggers a Swirl
											reaction.
										</div>
										<div>This effect occurs once every 2s.</div>
									</div>
								}
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description={
									<div>
										<div>
											Increases the Level of Yoohoo Art: Fuuin Dash by 3.
										</div>
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
											The Muji-Muji Daruma created by Sayu's Yoohoo Art: Mujina
											Flurry will now also benefit from her Elemental Mastery.
											Each point of Sayu's Elemental Mastery will produce the
											following effects:
										</div>
										<ul>
											<li>
												Increases the damage dealt by the Muji-Muji Daruma's
												attacks by 0.2% ATK. A maximum of 400% ATK can be gained
												via this method.
											</li>
											<li>
												Increases the HP restored by the Muji-Muji Daruma by 3.
												A maximum of 6,000 additional HP can be restored in this
												manner.
											</li>
										</ul>
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
