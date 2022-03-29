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
				description='Each time Great Secret Art: Tenko Kenshin activates a Tenko Thunderbolt, Yae Miko will restore 8 Elemental Energy for herself.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Sesshou Sakura start at Level 2 when created, their max level is
						increased to 4, and their attack range is increased by 60%.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>
							Increases the Level of Yakan Evocation: Sesshou Sakura by 3.
						</div>
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
						When Sesshou Sakura lightning hits opponents, the
						<b className='text-electro'> Electro DMG Bonus </b>
						of all nearby party members is increased by 20% for 5s.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>
							Increases the Level of Great Secret Art: Tenko Kenshin by 3.
						</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="The Sesshou Sakura's attacks will ignore 60% of the opponent's DEF."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
