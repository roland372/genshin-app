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
											The Aurous Blaze created by Ryuukin Saxifrage lasts for an
											extra 4s.
										</div>
										<div>
											Additionally, when an opponent affected by Aurous Blaze is
											defeated within its duration, Yoimiya's ATK is increased
											by 20% for 20s.
										</div>
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
											When Yoimiya's Pyro DMG scores a CRIT Hit, Yoimiya will
											gain a 25% Pyro DMG Bonus for 6s.
										</div>
										<div>
											This effect can be triggered even when Yoimiya is not the
											active character.
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
										<div>Increase the Level of Niwabi Fire-Dance by 3.</div>
										<div>Maximum upgrade level is 15.</div>
									</div>
								}
							/>
							<Constellation
								level='4'
								image={props.constellation4Image}
								name={props.data.constellations[3].name}
								description="When Yoimiya's own Aurous Blaze triggers an explosion, Niwabi Fire-Dance's CD is decreased by 1.2."
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description={
									<div>
										<div>Increases the Level of Ryuukin Saxifrage by 3.</div>
										<div>Maximum upgrade level is 15.</div>
									</div>
								}
							/>
							<Constellation
								level='6'
								image={props.constellation6Image}
								name={props.data.constellations[5].name}
								description="During Niwabi Fire-Dance, Yoimiya's Normal Attacks have a 50% chance of firing an extra Kindling Arrow that deals 60% of its original DMG. This DMG is considered Normal Attack DMG."
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
