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
										When characters (other than Gorou) within the AoE of Gorou's
										General's War Banner or General's Glory deal
										<b className='text-geo'> Geo DMG </b>
										to opponents, the CD of Gorou's Inuzaka All-Round Defense is
										decreased by 2s. This effect can occur once every 10s.
									</div>
								}
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>
										While General's Glory is in effect, its duration is extended
										by 1s when a nearby active character obtains an Elemental
										Shard from a Crystallize reaction. This effect can occur
										once every 0.1s. Max extension is 3s.
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
											Increases the Level of Inuzaka All-Round Defense by 3.
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
										When General's Glory is in the "Impregnable" or "Crunch"
										states, it will also heal active characters within its AoE
										by 50% of Gorou's own DEF every 1.5s.
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
											Increases the Level of Juuga: Forward Unto Victory by 3.
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
										For 12s after using Inuzaka All-Round Defense or Juuga:
										Forward Unto Victory, increases the CRIT DMG of all nearby
										party members'
										<b className='text-geo'> Geo DMG </b>
										based on the buff level of the skill's field at the time of
										use:
										<ul>
											<li>"Standing Firm": +10%</li>
											<li>"Impregnable": +20%</li>
											<li>"Crunch": +40%</li>
										</ul>
										This effect cannot stack and will take reference from the
										last instance of the effect that is triggered.
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
