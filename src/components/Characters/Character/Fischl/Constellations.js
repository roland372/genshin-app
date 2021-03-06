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
				description="Even when Oz is not present in combat, he can still watch over Fischl through his raven eyes. When Fischl performs a Normal Attack against an opponent, Oz fires a joint attack, dealing DMG equal to 22% of Fischl's ATK."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When Nightrider is used, it deals an additional 200% ATK as DMG, and
						its AoE is increased by 50%.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Nightrider by 3.</div>
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
							When Midnight Phantasmagoria is used, it deals 222% of ATK as
							<b className='text-electro'> Electro DMG </b>
							to surrounding opponents.
						</div>
						<div>
							When the skill duration ends, Fischl regenerates 20% of her HP.
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
						<div>Increases the Level of Midnight Phantasmagoria by 3.</div>
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
						Extends the duration of Oz's presence on the field by 2s.
						Additionally, Oz performs joint attacks with your active character
						when present, dealing 30% of Fischl's ATK as
						<b className='text-electro'> Electro DMG</b>.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
