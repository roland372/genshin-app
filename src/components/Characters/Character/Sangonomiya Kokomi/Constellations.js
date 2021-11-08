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
											While donning the Ceremonial Garment created by Nereid's
											Ascension, the final Normal Attack in Sangonomiya Kokomi's
											combo will unleash a swimming fish to deal 30% of her Max
											HP as Hydro DMG.
										</div>
										<div>This DMG is not considered Normal Attack DMG.</div>
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
											Sangonomiya Kokomi gains the following Healing Bonuses
											with regard to characters with 50% or less HP via the
											following methods:
										</div>
										<ul>
											<li>
												Kurage's Oath Bake-Kurage: 4.5% of Kokomi's Max HP.
											</li>
											<li>
												Nereid's Ascension Normal and Charged Attacks: 0.6% of
												Kokomi's Max HP.
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
										<div>Increases the Level of Nereid's Ascension by 3.</div>
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
											While donning the Ceremonial Garment created by Nereid's
											Ascension, Sangonomiya Kokomi's Normal Attack SPD is
											increased by 10%, and Normal Attacks that hit opponents
											will restore 0.8 Energy for her.
										</div>
										<div>This effect can occur once every 0.2s.</div>
									</div>
								}
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description={
									<div>
										<div>Increases the Level of Kurage's Oath by 3.</div>
										<div>Maximum upgrade level is 15.</div>
									</div>
								}
							/>
							<Constellation
								level='6'
								image={props.constellation6Image}
								name={props.data.constellations[5].name}
								description="While donning the Ceremonial Garment created by Nereid's Ascension, Sangonomiya Kokomi gains a 40% Hydro DMG Bonus for 4s after her Normal and Charged Attacks heal a character with 80% or more HP."
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
