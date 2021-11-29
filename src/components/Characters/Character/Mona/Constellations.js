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
										<div>
											When any of your own party members hits an opponent
											affected by an Omen, the effects of
											<b className='text-hydro'>
												{' '}
												Hydro-related Elemental Reactions{' '}
											</b>
											are enhanced for 8s:
										</div>
										<ul>
											<li>Electro-Charged DMG increases by 15%.</li>
											<li>Vaporize DMG increases by 15%.</li>
											<li>Hydro Swirl DMG increases by 15%.</li>
											<li>Frozen duration is extended by 15%.</li>
										</ul>
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
											When a Normal Attack hits, there is a 20% chance that it
											will be automatically followed by a Charged Attack.
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
										<div>Increases the Level of Stellaris Phantasm by 3.</div>
										<div>Maximum upgrade level is 15.</div>
									</div>
								}
							/>
							<Constellation
								level='4'
								image={props.constellation4Image}
								name={props.data.constellations[3].name}
								description='When any party member attacks an opponent affected by an Omen, their CRIT Rate is increased by 15%.'
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description={
									<div>
										<div>
											Increases the Level of Mirror Reflection of Doom by 3.
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
											Upon entering Illusory Torrent, Mona gains a 60% increase
											to the DMG of her next Charged Attack per second of
											movement.
										</div>
										<div>
											A maximum DMG Bonus of 180% can be achieved in this
											manner. The effect lasts for no more than 8s.
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
