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
								description="The time has not yet come for this person's corner of the night sky to light up.
								"
							/>
							<Constellation
								level='2'
								image={props.constellation2Image}
								name={props.data.constellations[1].name}
								description="The time has not yet come for this person's corner of the night sky to light up."
							/>
							<Constellation
								level='3'
								image={props.constellation3Image}
								name={props.data.constellations[2].name}
								description="The time has not yet come for this person's corner of the night sky to light up."
							/>
							<Constellation
								level='4'
								image={props.constellation4Image}
								name={props.data.constellations[3].name}
								description="The time has not yet come for this person's corner of the night sky to light up."
							/>
							<Constellation
								level='5'
								image={props.constellation5Image}
								name={props.data.constellations[4].name}
								description="The time has not yet come for this person's corner of the night sky to light up."
							/>
							<Constellation
								level='6'
								image={props.constellation6Image}
								name={props.data.constellations[5].name}
								description="The time has not yet come for this person's corner of the night sky to light up."
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
