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
				normalAttack='Performs up to 4 consecutive strikes.'
				chargedAttack={
					<div>
						Drains Stamina over time to perform continuous spinning attacks
						against all nearby opponents. At the end of the sequence, performs a
						more powerful slash.
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
							Summons protective stone armor, dealing Geo DMG to surrounding
							opponents and creating a shield. The shield's DMG Absorption
							scales based on Noelle's DEF.
						</div>
						<div>The shield has the following properties:</div>
						<ul>
							<li>
								When Noelle's Normal and Charged Attacks hit a target, they have
								a certain chance to regenerate HP for all characters.
							</li>
							<li>
								Possesses 150% DMG Absorption efficiency against all Elemental
								and Physical DMG.
							</li>
						</ul>
						<div>
							The amount of HP healed when regeneration is triggered scales
							based on Noelle's DEF.
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
							Gathering the strength of stone around her weapon, Noelle strikes
							the opponents surrounding her within a large AoE, dealing Geo DMG.
						</div>
						<div>Afterwards, Noelle gains the following effects:</div>
						<ul>
							<li>Larger attack AoE.</li>
							<li>
								Converts attack DMG to Geo DMG that cannot be overridden by any
								other elemental infusion.
							</li>
							<li>Increased ATK that scales based on her DEF.</li>
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
						<div>
							When Noelle is in the party but not on the field, this ability
							triggers automatically when your active character's HP falls below
							30%:
						</div>
						<div>
							Creates a shield for your active character that lasts for 20s and
							absorbs DMG equal to 400% of Noelle's DEF.
						</div>
						<div>
							The shield has a 150% DMG Absorption effectiveness against all
							Elemental and Physical DMG.
						</div>
						<div>This effect can only occur once every 60s.</div>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						<div>
							Every 4 Normal or Charged Attack hits will decrease the CD of
							Breastplate by 1s.
						</div>
						<div>
							Hitting multiple opponents with a single attack is only counted as
							1 hit.
						</div>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle
						has a 12% chance to obtain double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
