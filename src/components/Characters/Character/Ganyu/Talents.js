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
				normalAttack={<div>Perform up to 6 consecutive shots with a bow.</div>}
				chargedAttack={
					<div>
						<div>Perform a more precise Aimed Shot with increased DMG.</div>
						<div>
							While aiming, an icy aura will accumulate on the arrowhead before
							the arrow is fired. Has different effects based on how long the
							energy has been charged:
						</div>
						<ul>
							<li>
								Charge Level 1: Fires off an icy arrow that deals
								<b className='text-cryo'> Cryo DMG</b>.
							</li>
							<li>
								Charge Level 2: Fires off a Frostflake Arrow that deals
								<b className='text-cryo'> Cryo DMG</b>. The Frostflake Arrow
								blooms after hitting its target, dealing
								<b className='text-cryo'> AoE Cryo DMG</b>.
							</li>
						</ul>
					</div>
				}
				plungingAttack={
					<div>
						Fires off a shower of arrows in mid-air before falling and striking
						the ground, dealing AoE DMG upon impact.
					</div>
				}
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning
							all impurity and dealing
							<b className='text-cryo'> AoE Cryo DMG</b>.
						</div>
						<br />
						<b>Ice Lotus</b>
						<ul>
							<li>
								Continuously taunts surrounding opponents, attracting them to
								attack it.
							</li>
							<li>Endurance scales based on Ganyu's Max HP.</li>
							<li>
								Blooms profusely when destroyed or once its duration ends,
								dealing
								<b className='text-cryo'> AoE Cryo DMG</b>.
							</li>
						</ul>
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
							Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl
							that exorcises evil.
						</div>
						<div>
							During its ability duration, the Sacred Cryo Pearl will
							continuously rain down shards of ice, striking opponents within an
							AoE and dealing
							<b className='text-cryo'> Cryo DMG</b>.
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
						After firing a Frostflake Arrow, the CRIT Rate of subsequent
						Frostflake Arrows and their resulting bloom effects is increased by
						20% for 5s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Celestial Shower grants a 20%
						<b className='text-cryo'> Cryo DMG Bonus </b>
						to active members in the AoE.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Refunds 15% of the ores used when crafting Bow-type weapons.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
