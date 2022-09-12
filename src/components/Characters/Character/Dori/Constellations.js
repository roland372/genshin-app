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
						The number of After-Sales Service Rounds created by Troubleshooter
						Shots is increased by 1.
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When you are in combat and the Jinni heals the character it is
						connected to, it will fire a Jinni Toop from that character's
						position that deals 50% of Dori's ATK DMG.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Alcazarzaray's Exactitude by 3.</div>
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
						The character connected to the Jinni will obtain the following buffs
						based on their current HP and Energy:
						<li>
							When their HP is lower than 50%, they gain 50% Incoming Healing
							Bonus.
						</li>
						<li>
							When their Energy is less than 50%, they gain 30% Energy Recharge.
						</li>
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
							Increases the Level of Spirit-Warding Lamp: Troubleshooter Cannon
							by 3.
						</div>
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
						Dori gains the following effects for 3s after using Spirit-Warding
						Lamp: Troubleshooter Cannon:
						<li>
							<b className='text-electro'> Electro Infusion.</b>
						</li>
						<li>
							When Normal Attacks hit opponents, all nearby party members will
							heal HP equivalent to 4% of Dori's Max HP. This type of healing
							can occur once every 0.1s.
						</li>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
