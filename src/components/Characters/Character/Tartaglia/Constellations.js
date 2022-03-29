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
				description='Decreases the CD of Foul Legacy: Raging Tide by 20%'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When opponents affected by Riptide are defeated, Tartaglia
						regenerates 4 Elemental Energy.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Foul Legacy: Raging Tide by 3.</div>
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
							If Tartaglia is in Foul Legacy: Raging Tide's Melee Stance,
							triggers Riptide Slash against opponents on the field affected by
							Riptide every 4s, otherwise, triggers Riptide Flash.
						</div>
						<div>
							Riptide Slashes and Riptide Flashes triggered by this
							Constellation effect are not subject to the time intervals that
							would typically apply to these two Riptide effects, nor do they
							have any effect on those time intervals.
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
						<div>Increases the Level of Havoc: Obliteration by 3.</div>
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
							When Havoc: Obliteration is cast in Melee Stance, the CD of Foul
							Legacy: Raging Tide is reset.
						</div>
						<div>
							This effect will only take place once Tartaglia returns to his
							Ranged Stance.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
