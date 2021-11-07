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
				normalAttack='Performs up to six consecutive spear strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, dealing
						damage to enemies along the way.
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
						<div>
							Only an unwavering flame can cleanse the impurities of this world.
						</div>
						<div>
							Hu Tao consumes a set portion of her HP to knock the surrounding
							enemies back and enter the Paramita Papilio state.
						</div>
						<br />
						<b>Paramita Papilio</b>
						<ul>
							<li>
								Increases Hu Tao's ATK based on her Max HP at the time of
								entering this state. ATK Bonus gained this way cannot exceed
								400% of Hu Tao's Base ATK.
							</li>
							<li>
								Converts attack DMG to Pyro DMG, which cannot be overridden by
								any other elemental infusion.
							</li>
							<li>
								Charged Attacks apply the Blood Blossom effect to the enemies
								hit.
							</li>
							<li>Increases Hu Tao's resistance to interruption.</li>
						</ul>
						<b>Blood Blossom</b>
						<div>
							Enemies affected by Blood Blossom will take Pyro DMG every 4s.
							This DMG is considered Elemental Skill DMG.
						</div>
						<div>
							Each enemy can be affected by only one Blood Blossom effect at a
							time, and its duration may only be refreshed by Hu Tao herself.
						</div>
						<br />
						<b>Paramita Papilio</b> ends when its duration is over, or when Hu
						Tao has left the battlefield or fallen.
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
							Hu Tao commands a blazing spirit to deal Pyro DMG in a large AoE.
						</div>
						<div>
							Upon striking the enemy, regenerates a percentage of Hu Tao's Max
							HP. This effect can be triggered up to 5 times based on the number
							of enemies hit.
						</div>
						<div>
							If Hu Tao's HP is below or equal to 50% when the enemy is hit,
							both the DMG and HP Regeneration are increased.
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
						When a Paramita Papilio state activated by Guide to Afterlife ends,
						all allies in the party (excluding Hu Tao herself) will have their
						CRIT Rate increased by 12% for 8s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is
						increased by 33%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Hu Tao cooks a dish perfectly, she has a 18% chance to receive
						an additional "Suspicious" dish of the same type.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
