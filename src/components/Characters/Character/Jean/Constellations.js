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
				description='Increases the pulling speed of Gale Blade after holding for more than 1s, and increases the DMG dealt by 40%.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When Jean picks up an Elemental Orb/Particle, all party members have
						their Movement SPD and ATK SPD increased by 15% for 15s.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Dandelion Breeze by 3.</div>
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
						Within the Field created by Dandelion Breeze, all opponents have
						their
						<b className='text-anemo'> Anemo RES </b>
						decreased by 40%.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Gale Blade by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description='Incoming DMG is decreased by 35% within the Field created by Dandelion Breeze. Upon leaving the Dandelion Field, this effect lasts for 3 attacks or 10s.'
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
