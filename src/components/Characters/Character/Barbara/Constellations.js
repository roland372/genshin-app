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
				description='Barbara regenerates 1 Energy every 10s.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						<div>Decreases the CD of Let the Show Begin♪ by 15%.</div>
						<div>
							During the ability's duration, your active character gains a 15%
							<b className='text-hydro'> Hydro DMG Bonus</b>.
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
						<div>Increases the Level of Shining Miracle♪ by 3.</div>
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
							Every opponent Barbara hits with her Charged Attack regenerates 1
							Energy for her.
						</div>
						<div>
							A maximum of 5 energy can be regenerated in this manner with any
							one Charged Attack.
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
						<div>Increases the Level of Let the Show Begin♪ by 3.</div>
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
							When Barbara is in the party but not on the field, and one of your
							own party members falls:
						</div>
						<ul>
							<li>Automatically revives the fallen character.</li>
							<li>Fully restores the revived character's HP to 100%.</li>
						</ul>
						<div>This effect can only occur once every 15 mins.</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
