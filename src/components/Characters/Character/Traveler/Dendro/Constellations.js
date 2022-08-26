import React from 'react';
import ConstellationsWrapper from '../../../Constellations';
import Constellation from '../../../Constellation';

const Constellations = props => {
	return (
		<ConstellationsWrapper>
			<Constellation
				level='1'
				image={props.constellation1Image}
				name={props.data.constellations[0].name}
				description='After Razorgrass Blade hits an opponent, it will regenerate 3.5 Energy for the Traveler.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={<div>Lea Lotus Lamp's duration is increased by 3s.</div>}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Razorgrass Blade by 3.</div>
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
						After the Lea Lotus Lamp triggers a Lotuslight Transfiguration, it
						will obtain 5 stacks of the Overflowing Lotuslight effect from the
						Passive Talent "Verdant Overgrowth."
						<br />
						You must have unlocked this Passive Talent first.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Surgent Manifestation by 3.</div>
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
						The <b className='text-dendro'> Dendro DMG Bonus</b> of the
						character under the effect of Overflowing Lotuslight as created by
						the Lea Lotus Lamp is increased by 12%. If the Lamp has experienced
						a Lotuslight Transfiguration previously, the character will also
						gain 12% DMG Bonus for the corresponding element.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
