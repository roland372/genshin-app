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
				normalAttack={<div>Perform up to 5 consecutive shots with a bow.</div>}
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG. While aiming,
						biting frost will accumulate on the arrowhead. A fully charged frost
						arrow will deal
						<b className='text-cryo'> Cryo Damage</b>.
					</div>
				}
				plungingAttack={
					<div>
						Fires off a shower of arrows in mid-air before falling and striking
						the ground, dealing AoE DMG on impact.
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
							Fires an Icy Paw that deals
							<b className='text-cryo'> Cryo DMG </b>
							to opponents and forms a shield on hit.
						</div>
						<div>
							The shield's DMG Absorption scales based on Diona's Max HP, and
							its duration scales off the number of Icy Paws that hit their
							target.
						</div>
						<br />
						<b>Press</b>
						<div>Rapidly fires off 2 Icy Paws.</div>
						<br />
						<b>Hold</b>
						<div>Dashes back quickly before firing 5 Icy Paws.</div>
						<div>
							The shield created by a Hold attack will gain a 75% DMG Absorption
							Bonus.
						</div>
						<br />
						<div>
							The shield has a 250%
							<b className='text-cryo'> Cryo DMG </b>
							Absorption Bonus, and will cause your active character to become
							affected by
							<b className='text-cryo'> Cryo </b>
							at the point of formation for a short duration.
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
							Tosses out a special cold brew that deals
							<b className='text-cryo'> AoE Cryo DMG </b>
							and creates a Drunken Mist in an AoE.
						</div>
						<br />
						<b>Drunken Mist</b>
						<ul>
							<li>
								Deals continuous
								<b className='text-cryo'> Cryo DMG </b>
								to opponents within the AoE.
							</li>
							<li>
								Continuously regenerates the HP of characters within the the
								AoE.
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
						Characters shielded by Icy Paws have their Movement SPD increased by
						10% and their Stamina Consumption decreased by 10%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Opponents who enter the AoE of Signature Mix have 10% decreased ATK
						for 15s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When a Perfect Cooking is achieved on a dish with restorative
						effects, Diona has a 12% chance to obtain double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
