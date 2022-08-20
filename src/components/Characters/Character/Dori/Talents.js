import React from 'react';
import CardComponent from '../../../Layout/CardComponent';

import AttributeScaling from '../../Talents/AttributeScaling';
import NormalAttack from '../../../../components/Characters/Talents/NormalAttack';
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
				normalAttack='Perform up to 5 consecutive shots with a bow.'
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG.
						<br />
						While aiming, flames will accumulate on the arrowhead. A fully
						charged flaming arrow will deal
						<b className='text-pyro'> Pyro DMG</b>.
					</div>
				}
				plungingAttack='Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<b>Barron Bunny</b>
						<ul>
							<li>Continuously taunts the enemy, drawing their fire.</li>
							<li>Baron Bunny's HP scales with Amber's Max HP.</li>
							<li>
								When destroyed or when its timer expires, Baron Bunny explodes,
								dealing
								<b className='text-pyro'> AoE Pyro DMG</b>.
							</li>
						</ul>
						<b>Hold</b>
						<div>Adjusts the throwing direction of Baron Bunny.</div>
						<div>The longer the button is held, the further the throw.</div>
					</div>
				}
			>
				<AttributeScaling data={elementalSkill} />
			</ElementalSkill>
			<ElementalBurst
				name={props.data.skillTalents[2].name}
				image={props.elementalBurstImage}
				description={
					<p>
						Fires of a shower of arrows, dealing continuous
						<b className='text-pyro'> AoE Pyro DMG</b>.
					</p>
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
						Increases the CRIT Rate of Fiery Rain by 10% and widens its AoE by
						30%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Aimed Shot hits on weak spots increase Base ATK by 15% for 10s.
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
							Decreases all party members' gliding Stamina Consumption by 20%.
						</div>
						<div>
							The greatest effect out of all Talents of the same type prevails.
						</div>
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
