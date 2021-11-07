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
											Taking DMG from a Charge Level 2 Frostflake Arrow or
											Frostflake Arrow Bloom decreases opponents' Cryo RES by
											15% for 6s.
										</div>
										<div>
											A hit regenerates 2 Energy for Ganyu. This effect can only
											occur once per Charge Level 2 Frostflake Arrow, regardless
											if Frostflake Arrow itself or its Bloom hit the target.
										</div>
									</div>
								}
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>Trail of the Qilin gains 1 additional charge.</div>
								}
							/>
							<Constellation
								level='3'
								image={props.constellation3Image}
								name={props.data.constellations[2].name}
								description={
									<div>
										<div>Increases the Level of Celestial Shower by 3.</div>
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
											Opponents standing within the AoE of Celestial Shower take
											increased DMG. This effect strengthens over time.
										</div>
										<div>
											Increased DMG taken begins at 5% and increases by 5% every
											3s, up to a maximum of 25%.
										</div>
										<div>
											The effect lingers for 3s after the opponent leaves the
											AoE.
										</div>
									</div>
								}
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description={
									<div>
										<div>Increases the Level of Trail of the Qilin by 3.</div>
										<div>Maximum upgrade level is 15.</div>
									</div>
								}
							/>
							<Constellation
								level='6'
								image={props.constellation6Image}
								name={props.data.constellations[5].name}
								description='Using Trail of the Qilin causes the next Frostflake Arrow shot within 30s to not require charging.'
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
