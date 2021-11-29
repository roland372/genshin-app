import React from 'react';
import CardComponent from '../../../Layout/CardComponent';

import AttributeScaling from '../../Talents/AttributeScaling';
import NormalAttack from '../../Talents/NormalAttack';
import ElementalSkill from '../../Talents/ElementalSkill';
import ElementalBurst from '../../Talents/ElementalBurst';
import PassiveTalent from '../../Talents/PassiveTalent';

const Talents = props => {
	let normalAttack = props.data.skillTalents[0].attributeScaling;
	let elementalSkill = props.data.skillTalents[1].attributeScaling;
	let elementalBurst = props.data.skillTalents[2].attributeScaling;
	return (
		<CardComponent title='Talents'>
			<NormalAttack
				name={props.data.skillTalents[0].name}
				image={props.normalAttackImage}
				normalAttack='Perform up to 4 consecutive strikes.'
				chargedAttack={
					<div>
						Drains Stamina over time to perform continuous slashes. At the end
						of the sequence, perform a more powerful slash.
					</div>
				}
				plungingAttack='Plunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Performs a forward slash that deals
							<b className='text-pyro'> Pyro DMG</b>.
						</div>
						<br />
						<div>
							This skill can be used 3 times consecutively. Enters CD if not
							cast again within a short period (5s).
						</div>
					</div>
				}
			>
				<AttributeScaling data={elementalSkill} />
			</ElementalSkill>
			<ElementalBurst
				name={props.data.skillTalents[2].name}
				image={props.elementalBurstImage}
				description={
					<div>
						<div>
							Releases intense flames to knock nearby opponents back, dealing
							<b className='text-pyro'> Pyro DMG</b>. The flames then converge
							into the weapon, summoning a Phoenix that flies forward and deals
							massive
							<b className='text-pyro'> Pyro DMG </b>
							to all opponents in its path. The Phoenix explodes upon reaching
							its destination, causing a large amount of
							<b className='text-pyro'> AoE Pyro DMG</b>.
						</div>
						<div>
							The searing flames that run down his blade cause it to be infused
							with
							<b className='text-pyro'> Pyro</b>.
						</div>
					</div>
				}
			>
				<AttributeScaling data={elementalBurst} />
			</ElementalBurst>
			<h3 className='text-start ms-3'>Passive Talents</h3>
			<PassiveTalent
				name={props.data.passiveTalents[0].name}
				image={props.passiveTalent1Image}
				unlocked='Unlocked at Ascension 1'
				description={
					<div>
						Diluc's Charged Attack Stamina Cost is decreased by 50%, and its
						duration is increased by 3s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						The
						<b className='text-pyro'> Pyro Infusion </b>
						provided by Dawn lasts for 4s longer. Additionally. Diluc gains 20%
						<b className='text-pyro'> Pyro DMG Bonus </b>
						during the duration of this effect.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Refunds 15% of the ores used when crafting Claymore-type weapons.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
