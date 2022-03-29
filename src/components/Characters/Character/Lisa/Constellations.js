import React from 'react';
import ConstellationsWrapper from '../../Constellations';
import Constellation from '../../Constellation';

const Constellations = props => {
	return (
		<ConstellationsWrapper>
			<Constellation
				level='1'
				image={props.constellation1Image}
				name={props.data.constellations[0].name}
				description={
					<div>
						<div>
							Lisa regenerates 2 Energy for every opponent hit while holding
							Violet Arc.
						</div>
						<div>
							A maximum of 10 Energy can be regenerated in this manner at any
							one time.
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
						<div>Holding Violet Arc has the following effects:</div>
						<ul>
							<li>Increases DEF by 25%.</li>
							<li>Increases Lisa's resistance to interruption.</li>
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
						<div>Increases the Level of Lightning Rose by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='Increases the number of lightning bolts released by Lightning Rose by 1-3.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Violet Arc by 3.</div>
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
							When Lisa takes the field, she applies 3 stacks of Violet Arc's
							Conductive status onto nearby opponents.
						</div>
						<div>This effect can only occur once every 5s.</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
