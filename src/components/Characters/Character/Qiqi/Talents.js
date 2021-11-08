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
				normalAttack='Perform up to 5 rapid strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount Stamina to unleash 2 rapid sword strikes.
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
							Using the Icevein Talisman, Qiqi brings forth the Herald of Frost,
							dealing Cryo DMG to surrounding opponents.
						</div>
						<br />
						<b>Herald of Frost</b>
						<ul>
							<li>
								On hit, Qiqi's Normal and Charged Attacks regenerate HP for your
								own party members and nearby teammates. Healing scales based on
								Qiqi's ATK.
							</li>
							<li>Periodically regenerates your active character's HP.</li>
							<li>
								Follows the character around, dealing Cryo DMG to opponents in
								their path.
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
							Qiqi releases the adeptus power sealed within her body, marking
							nearby opponents with a Fortune-Preserving Talisman that deals
							Cryo DMG.
						</div>
						<br />
						<b>Fortune-Preserving Talisman</b>
						<div>
							When opponents affected by this Talisman take DMG, the character
							that dealt this DMG regenerates HP.
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
						When a character under the effects of Adeptus Art: Herald of Frost
						triggers an Elemental Reaction, their Incoming Healing Bonus is
						increased by 20% for 8s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Qiqi hits opponents with her Normal and Charged Attacks, she
						has a 50% chance to apply a Fortune-Preserving Talisman to them for
						6s. This effect can only occur once every 30s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Displays the location of nearby resources unique to Liyue on the
						mini-map.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
