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
				normalAttack={<div>Performs up to four consecutive spear strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, dealing
						damage to enemies along the way.
					</div>
				}
				plungingAttack={
					<div>
						Plunges from mid-air to strike the ground below, damaging opponents
						along the path and dealing AoE DMG upon impact.
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
						<b>Tap</b>
						<br />
						Rushes forward with her shield, dealing <b className='text-hydro'> Hydro DMG</b>  to opponents in
						front of her.
						<br />
						<br />
						<b>Hold</b>
						<br />
						Raises her shield to block incoming attacks from nearby opponents,
						forming a barrier that absorbs DMG based on her Max HP and absorbs
						<b className='text-hydro'> Hydro DMG</b>  250% more effectively. This barrier lasts until the
						Elemental Skill is unleashed.
						<br />
						After holding for a certain period of time, Candace will finish
						charging, and when the skill button is released, the skill duration
						expires, or when the barrier is broken, she will perform a leaping
						strike that deals <b className='text-hydro'> Hydro DMG</b>  to opponents in front of her.
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
						Raising her weapon high, Candace calls upon a divine blessing that
						deals  <b className='text-hydro'>AoE Hydro DMG</b>  based on her Max HP and continuously confers the
						Prayer of the Crimson Crown on your active character.
						<br />
						<br />
						<b>Prayer of the Crimson Crown</b>
						<br />
						This effect has the following properties:
						<ul>
							<li>
								Characters deal increased Elemental DMG with their Normal
								Attacks.
							</li>
							<li>
								Whenever a character takes the field, they will unleash a
								rippling wave of water that deals <b className='text-hydro'> Hydro DMG</b>  to nearby opponents.
								There is a limited number of waves that can be triggered in the
								duration of this skill.
							</li>
							<li>
								Sword, Claymore, and Polearm-wielding characters under this
								effect will obtain a <b className='text-hydro'> Hydro Infusion</b>.
							</li>
						</ul>
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
						If Candace is hit by an attack in the Hold duration of Sacred Rite:
						Heron's Sanctum, that skill will finish charging instantly.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Characters affected by the Prayer of the Crimson Crown caused by
						Sacred Rite: Wagtail's Tide will deal 0.5% increased DMG to
						opponents for every 1,000 points of Candace's Max HP when they deal
						Elemental DMG with their Normal Attacks.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						<div>
							Decreases climbing Stamina consumption for your own party members
							by 20%.
						</div>
						<div>
							Not stackable with Passive Talents that provide the exact same
							effects.
						</div>
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
