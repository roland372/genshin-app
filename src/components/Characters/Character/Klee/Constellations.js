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
				description="Attacks and Skills have a certain chance to summon sparks that bombard opponents, dealing DMG equal to 120% of Sparks 'n' Splash's DMG."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Being hit by Jumpy Dumpty's mines decreases opponents' DEF by 23%
						for 10s.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Jumpy Dumpty by 3.</div>
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
						If Klee leaves the field during the duration of Sparks 'n' Splash,
						her departure triggers an explosion that deals 555% of her ATK as
						<b className='text-pyro'> AoE Pyro DMG</b>.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Sparks 'n' Splash by 3.</div>
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
							While under the effects of Sparks 'n' Splash, Klee will regenerate
							3 Energy for all members of the party (excluding Klee) every 3s.
						</div>
						<div>
							When Sparks 'n' Splash is used, all party members will gain a 10%
							<b className='text-pyro'> Pyro DMG Bonus </b>
							for 25s.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
