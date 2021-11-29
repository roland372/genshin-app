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
				normalAttack='Performs up to 6 consecutive spear strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to perform an upward thrust.
					</div>
				}
				plungingAttack={
					<div>
						<div>
							Plunges from mid-air to strike the ground below, damaging
							opponents along the path and dealing AoE DMG upon impact.
						</div>
						<div>Xiao does not take DMG from performing Plunging Attacks.</div>
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
							Xiao lunges forward, dealing
							<b className='text-anemo'> Anemo DMG </b>
							to opponents in his path.
						</div>
						<div>Can be used in mid-air.</div>
						<div>Starts with 2 charges.</div>
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
							Xiao dons the Yaksha Mask that set gods and demons trembling
							millennia ago.
						</div>
						<br />
						<b>Yaksha's Mask</b>
						<ul>
							<li>Greatly increases Xiao's jumping ability.</li>
							<li>Increases his attack AoE and attack DMG.</li>
							<li>
								Converts attack DMG into
								<b className='text-anemo'> Anemo DMG</b>, which cannot be
								overridden by any other elemental infusion.
							</li>
						</ul>
						<div>In this state, Xiao will continuously lose HP.</div>
						<div>The effects of this skill end when Xiao leaves the field.</div>
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
						While under the effects of Bane of All Evil, all DMG dealt by Xiao
						increases by 5%. DMG increases by a further 5% for every 3s the
						ability persists. The maximum DMG Bonus is 25%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Using Lemniscatic Wind Cycling increases the DMG of subsequent uses
						of Lemniscatic Wind Cycling by 15%. This effect lasts for 7s, and
						has a maximum of 3 stacks. Gaining a new stack refreshes the
						effect's duration.
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
