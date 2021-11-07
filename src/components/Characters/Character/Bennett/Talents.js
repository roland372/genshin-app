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
				normalAttack='Performs up to 5 rapid strikes.'
				chargedAttack='Consumes a certain amount of Stamina to unleash 2 rapid sword swings.'
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
							Bennett puts all his fire and passion for adventuring into his
							sword.
						</div>
						<div>Results may vary based on how fired up he is...</div>
						<br />
						<b>Press</b>
						<div>A single, swift flame strike that deals Pyro DMG.</div>
						<br />
						<b>Hold (Short)</b>
						<div>
							Charges up, resulting in different effects when unleashed based on
							the Charge Level.
						</div>
						<ul>
							<li>
								Level 1: Strikes twice, dealing Pyro DMG and launching
								opponents.
							</li>
							<li>
								Level 2: Unleashes 3 consecutive attacks that deal impressive
								Pyro DMG, but the last attack triggers an explosion that
								launches both Bennett and the enemy.
							</li>
						</ul>
						<div>Bennett takes no damage from being launched.</div>
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
							Bennett performs a jumping attack that deals Pyro DMG, creating an
							Inspiration Field.
						</div>
						<br />
						<b>Inspiration Field</b>
						<ul>
							<li>
								If the health of a character within the AoE is equal to or falls
								below 70%, their health will continuously regenerate. The amount
								of HP restored scales off Bennett's Max HP.
							</li>
							<li>
								If the health of a character within the AoE is higher than 70%,
								they gain an ATK Bonus that scales based on Bennett's Base ATK.
							</li>
							<li>Imbues characters within the AoE with Pyro.</li>
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
				description={<div>Decreases Passion Overload's CD by 20%.</div>}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When inside Fantastic Voyage's circle, Passion Overload's CD is
						decreased by 50% and Bennett cannot be launched by this skill's
						explosion.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When dispatched on an expedition in Mondstadt, time consumed is
						reduced by 25%.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
