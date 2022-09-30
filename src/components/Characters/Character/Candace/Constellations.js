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
						The duration of Prayer of the Crimson Crown effect triggered by
						Sacred Rite: Wagtail's Tide is increased by 3s.
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When Sacred Rite: Heron's Sanctum hits opponents, Candace's Max HP
						will be increased by 20% for 15s.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Sacred Rite: Wagtail's Tide by 3.</div>
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
						Shortens the Hold CD of Sacred Rite: Heron's Sanctum to be the same
						as that of the Tapping CD.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Sacred Rite: Heron's Sanctum by 3.</div>
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
						When characters (excluding Candace herself) affected by the Prayer
						of the Crimson Crown caused by Sacred Rite: Wagtail's Tide deal
						Elemental DMG to opponents using Normal Attacks, an attack wave will
						be unleashed that deals <b className='text-hydro'> AOE Hydro DMG</b> equal to 15% of Candace's Max
						HP.
						<br />
						This effect can trigger once every 2.3s and is considered Elemental
						Burst DMG.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
