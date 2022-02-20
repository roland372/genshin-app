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
				normalAttack='Performs up to five consecutive spear strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, dealing
						damage to opponents along the way.
					</div>
				}
				plungingAttack='Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						The frosted dew, silvery and dense, shall exorcise all demons.
						<br />
						<p>
							Grants all nearby party members the Icy Quill effect and deals
							<b className='text-cryo'> Cryo DMG </b>
							in different ways based on whether it is pressed or held.
						</p>
						<b>Press</b>
						<p>
							Rushes forward together with a Talisman Spirit, dealing{' '}
							<b className='text-cryo'> Cryo DMG </b>
							to opponents along the path.
						</p>
						<b>Hold</b>
						<p>
							{' '}
							Commands the Talisman Spirit to deal{' '}
							<b className='text-cryo'> AoE Cryo DMG</b>.
						</p>
						<b>Icy Quill</b>
						<p>
							When Normal, Charged, and Plunging Attacks, Elemental Skills, and
							Elemental Bursts deal <b className='text-cryo'> Cryo DMG </b> to
							opponents, the DMG dealt is increased based on Shenhe's current
							ATK.
						</p>
						The Icy Quill's effects will be cleared once its duration ends or
						after being triggered a certain number of times.
						<br />
						When held rather than pressed, the Icy Quill's effect lasts longer
						and can be triggered more times.
						<br />
						When one <b className='text-cryo'> Cryo DMG </b> instance strikes
						multiple opponents, the effect is triggered multiple times based on
						the number of opponents hit. The number of times the effect is
						triggered is calculated independently for each party member with the
						Icy Quill.
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
						<p>
							Unleashes the power of the Talisman Spirit, allowing it to roam
							free in this plane, dealing{' '}
							<b className='text-cryo'> AoE Cryo DMG</b>.
						</p>
						<p>
							The Talisman Spirit then creates a field that decreases the
							<b className='text-cryo'> Cryo RES </b> and <b>Physical RES</b> of
							opponents within it. It also deals periodic{' '}
							<b className='text-cryo'> Cryo DMG </b> to opponents within the
							field.
						</p>
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
						An active character within the field created by Divine Maiden's
						Deliverance gains 15% <b className='text-cryo'> Cryo DMG Bonus</b>.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						After Shenhe uses Spring Spirit Summoning, she will grant all nearby
						party members the following effects:
						<ul>
							<li>
								Press: Elemental Skill and Elemental Burst DMG increased by 15%
								for 10s.
							</li>
							<li>
								Hold: Normal, Charged, and Plunging Attack DMG increased by 15%
								for 15s.
							</li>
						</ul>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Gains 25% more rewards when dispatched on a Liyue Expedition for 20
						hours.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
