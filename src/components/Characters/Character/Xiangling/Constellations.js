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
						Opponents hit by Guoba's attacks have their
						<b className='text-pyro'> Pyro RES </b>
						reduced by 15% for 6s.
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						The last attack in a Normal Attack sequence applies the Implode
						status onto the opponent for 2s. An explosion will occur once this
						duration ends, dealing 75% of Xiangling's ATK as
						<b className='text-pyro'> AoE Pyro DMG</b>.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Pyronado by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description="Pyronado's duration is increased by 40%."
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Guoba Attack by 3.</div>
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
						For the duration of Pyronado, all party members receive a 15%
						<b className='text-pyro'> Pyro DMG Bonus</b>.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
