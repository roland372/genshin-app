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
						Drains Stamina over time to perform continuous spinning attacks
						against all nearby opponents. At the end of the sequence, perform a
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
							Hunts his prey using the techniques taught to him by his master
							and his lupical.
						</div>
						<br />
						<b>Press</b>
						<div>
							Swings the Thunder Wolf Claw, dealing Electro DMG to opponents in
							front of Razor.
						</div>
						<div>
							Upon striking an opponent, Razor will gain an Electro Sigil, which
							increases his Energy Recharge rate.
						</div>
						<div>
							Razor can have up to 3 Electro Sigils simultaneously, and gaining
							a new Electro Sigil refreshes their duration.
						</div>
						<br />
						<b>Hold</b>
						<div>
							Gathers Electro energy to unleash a lightning storm over a small
							AoE, causing massive Electro DMG, and clears all of Razor's
							Electro Sigils.
						</div>
						<div>
							Each Electro Sigil cleared in this manner will be converted into
							Energy for Razor.
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
							Summons the Wolf Within, which deals Electro DMG to all nearby
							opponents. This clears all of Razor's Electro Sigils, which will
							be converted into Elemental Energy for him.
						</div>
						<div>
							The Wolf Within will fight alongside Razor for the skill's
							duration.
						</div>
						<br />
						<b>The Wolf Within</b>
						<ul>
							<li>
								Strikes alongside Razor's normal attacks, dealing Electro DMG.
							</li>
							<li>Raises Razor's ATK SPD and Electro RES.</li>
							<li>
								Causes Razor to be immune to DMG inflicted by the
								Electro-Charged status.
							</li>
							<li>Disables Razor's Charged Attacks.</li>
							<li>Increases Razor's resistance to interruption.</li>
						</ul>
						<div>These effects end when Razor leaves the battlefield.</div>
						<div>
							When Razor leaves the field, a maximum of 10 Energy will be
							returned to him based off the duration remaining on this skill.
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
						Decreases Claw and Thunder's CD by 18%. Using Lightning Fang resets
						the CD of Claw and Thunder.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Razor's Energy is below 50%, increases Energy Recharge by 30%.
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
							Decreases sprinting Stamina consumption of your characters in the
							party by 20%.
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
