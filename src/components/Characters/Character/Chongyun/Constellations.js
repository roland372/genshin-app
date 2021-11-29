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
										The last attack of Chongyun's Normal Attack combo releases 3
										ice blades. Each blade deals 50% of Chongyun's ATK as
										<b className='text-cryo'> Cryo DMG </b>
										to all opponents in its path.
									</div>
								}
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>
										Elemental Skills and Elemental Bursts cast within the Frost
										Field created by Spirit Blade: Chonghua's Layered Frost have
										their CD time decreased by 15%.
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
											Increases the Level of Spirit Blade: Cloud-Parting Star by
											3.
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
											Chongyun regenerates 1 Energy every time he hits an
											opponent affected by
											<b className='text-cryo'> Cryo</b>.
										</div>
										<div>This effect can only occur once every 2s.</div>
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
											Increases the Level of Spirit Blade: Chonghua's Layered
											Frost by 3.
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
											Spirit Blade: Cloud-Parting Star deals 15% more DMG to
											opponents with a lower percentage of their Max HP
											remaining than Chongyun.
										</div>
										<div>
											This skill will also summon 1 additional spirit blade.
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
