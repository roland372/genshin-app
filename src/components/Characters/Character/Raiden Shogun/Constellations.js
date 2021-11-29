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
										Chakra Desiderata will gather Resolve even faster. When
										<b className='text-electro'> Electro </b>
										characters use their Elemental Bursts, the Resolve gained is
										increased by 80%. When characters of other Elemental Types
										use their Elemental Bursts, the Resolve gained is increased
										by 20%.
									</div>
								}
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>
										While using Musou no Hitotachi and in the Musou Isshin state
										applied by
										<b className='text-geo'> Secret Art: Musou Shinsetsu</b>,
										the Raiden Shogun's attacks ignore 60% of opponents's DEF.
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
											Increases the Level of Secret Art: Musou Shinsetsu by 3.
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
										When the
										<b className='text-geo'> Musou Isshin </b>
										state applied by Secret Art: Musou Shinsetsu expires, all
										nearby party members (excluding the Raiden Shogun) gain 30%
										bonus ATK for 10s.
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
											Increases the Level of Transcendence: Baleful Omen by 3.
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
											While in the Musou Isshin state applied by Secret Art:
											Musou Shinsetsu, attacks by the Raiden Shogun that are
											considered part of her Elemental Burst will decrease all
											nearby party members' (but not including the Raiden Shogun
											herself) Elemental Burst CD by 1s when they hit opponents.
										</div>
										<div>
											This effect can trigger once every 1s, and can trigger a
											total of 5 times during the state's duration.
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
