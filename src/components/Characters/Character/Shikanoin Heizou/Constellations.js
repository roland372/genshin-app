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
				description='For 5s after Shikanoin Heizou takes the field, his Normal Attack SPD is increased by 15%. He also gains 1 Declension stack for Heartstopper Strike. This effect can be triggered once every 10s.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						The pull effect of the Arresting Windtunnel created by Windmuster
						Kick is enhanced, and its duration is increased to 1s.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Heartstopper Strike by 3.</div>
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
						The first Windmuster Iris explosion in each Windmuster Kick will
						regenerate 9 Elemental Energy for Shikanoin Heizou. Every subsequent
						explosion in that Windmuster Kick will each regenerate an additional
						1.5 Energy for Heizou.
						<br />
						One Windmuster Kick can regenerate a total of 13.5 Energy for Heizou
						in this manner.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Windmuster Kick by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="Each Declension stack will increase the CRIT Rate of the Heartstopper Strike unleashed by 4%. When Heizou possesses Conviction, this Heartstopper Strike's CRIT DMG is increased by 32%."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
