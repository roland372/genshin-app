import React, { Fragment } from 'react';
import CardComponent from '../../../Layout/CardComponent';

import AttributeScaling from '../../Talents/AttributeScaling';
import NormalAttack from '../../../../components/Characters/Talents/NormalAttack';
import ElementalSkill from '../../Talents/ElementalSkill';
import ElementalBurst from '../../Talents/ElementalBurst';
import PassiveTalent from '../../Talents/PassiveTalent';
import data from '../../../../assets/data/Characters/Amber.json';

const Talents = props => {
	let normalAttack = data.skillTalents[0].attributeScaling;
	let elementalSkill = data.skillTalents[1].attributeScaling;
	let elementalBurst = data.skillTalents[2].attributeScaling;
	return (
		<CardComponent title='Talents'>
			<NormalAttack
				name={data.skillTalents[0].name}
				image={props.normalAttackImage}
				normalAttack='Perform up to 5 consecutive shots with a bow.'
				chargedAttack={
					<Fragment>
						Perform a more precise Aimed Shot with increased DMG.
						<br />
						While aiming, flames will accumulate on the arrowhead. A fully
						charged flaming arrow will deal Pyro DMG.
					</Fragment>
				}
				plungingAttack='Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<Fragment>
						<b>Barron Bunny</b>
						<ul>
							<li>Continuously taunts the enemy, drawing their fire.</li>
							<li>Baron Bunny's HP scales with Amber's Max HP.</li>
							<li>
								When destroyed or when its timer expires, Baron Bunny explodes,
								dealing AoE Pyro DMG.
							</li>
						</ul>
						<b>Hold</b>
						<div>Adjusts the throwing direction of Baron Bunny.</div>
						<div>The longer the button is held, the further the throw.</div>
					</Fragment>
				}
			>
				<AttributeScaling data={elementalSkill} />
			</ElementalSkill>
			<ElementalBurst
				name={data.skillTalents[2].name}
				image={props.elementalBurstImage}
				description={
					<p>Fires of a shower of arrows, dealing continuous AoE Pyro DMG.</p>
				}
			>
				<AttributeScaling data={elementalBurst} />
			</ElementalBurst>
			<h3 className='text-start ms-3'>Passive Talents</h3>
			<PassiveTalent
				name='Every Arrow Finds Its Target'
				image={props.passiveTalent1Image}
				unlocked='Unlocked at Ascension 1'
				description={
					<Fragment>
						Increases the CRIT Rate of Fiery Rain by 10% and widens its AoE by
						30%.
					</Fragment>
				}
			/>
			<PassiveTalent
				name='Precise Shot'
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<Fragment>
						Aimed Shot hits on weak spots increase Base ATK by 15% for 10s.
					</Fragment>
				}
			/>
			<PassiveTalent
				name='Gliding Champion'
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<Fragment>
						<div>
							Decreases all party members' gliding Stamina Consumption by 20%.
						</div>
						<div>
							The greatest effect out of all Talents of the same type prevails.
						</div>
					</Fragment>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
