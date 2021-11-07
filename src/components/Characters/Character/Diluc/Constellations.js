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
								description='Diluc deals 15% more DMG to opponents whose HP is above 50%.'
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description={
									<div>
										<div>
											When Diluc takes DMG, his ATK increases by 10% and his ATK
											SPD increases by 5%. Lasts for 10s.
										</div>
										<div>
											This effect can stack up to 3 times and can only occur
											once every 1.5s.
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
										<div>Increases the Level of Searing Onslaught by 3.</div>
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
											Casting Searing Onslaught in rhythm greatly increases
											damage dealt.
										</div>
										<div>
											2s after casting Searing Onslaught, casting the next
											Searing Onslaught in the combo deals 40% additional DMG.
											This effect lasts for 2s.
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
										<div>Increases the Level of Dawn by 3.</div>
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
											After casting Searing Onslaught, the next 2 Normal Attacks
											within the next 6s will have their DMG and ATK SPD
											increased by 30%.
										</div>
										<div>
											Additionally, Searing Onslaught will not interrupt the
											Normal Attack combo.
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
