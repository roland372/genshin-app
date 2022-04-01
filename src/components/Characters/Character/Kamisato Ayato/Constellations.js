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
						Shunsuiken DMG is increased by 40% against opponents with 50% HP or
						less.
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Namisen's maximum stack count is increased to 5. When Kamisato Ayato
						has at least 3 Namisen stacks, his Max HP is increased by 50%.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Kamisato Art: Kyouka by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='After using Kamisato Art: Suiyuu, all nearby party members will have 15% increased Normal Attack SPD for 15s.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Kamisato Art: Suiyuu by 3.</div>
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
							After using Kamisato Art: Kyouka, Ayato's next Shunsuiken attack
							will create 2 extra Shunsuiken strikes when they hit opponents,
							each one dealing 450% of Ayato's ATK as DMG.
						</div>
						<div>
							Both these Shunsuiken attacks will not be affected by Namisen.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
