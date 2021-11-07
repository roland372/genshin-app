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
				normalAttack='Perform up to 5 consecutive shots with a bow.'
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG. While aiming,
						the dark lightning spirits of Immernachtreich shall heed the call of
						their Prinzessin and indwell the enchanted arrowhead. When fully
						indwelt, the Rachsüchtig Blitz shall deal immense Electro DMG.
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
						<div>
							Summons Oz. The night raven forged of darkness and lightning
							descends upon the land, dealing Electro DMG in a small AoE.
						</div>
						<div>
							For the ability's duration, Oz will continuously attack nearby
							opponents with Freikugel.
						</div>
						<br />
						<div>Hold to adjust the location Oz will be summoned to.</div>
						<div>
							Press again any time during the ability's duration to once again
							summon him to Fischl's side.
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
							Summons Oz to spread his twin wings of twilight and defend Fischl.
						</div>
						<div>
							Has the following properties during the ability's duration:
						</div>
						<ul>
							<li>
								Fischl takes on Oz's form, greatly increasing her Movement
								Speed.
							</li>
							<li>
								Strikes nearby opponents with lightning, dealing Electro DMG to
								opponents she comes in contact with. Each opponent can only be
								struck once.
							</li>
							<li>
								Once this ability's effects end, Oz will remain on the
								battlefield and attack his Prinzessin's foes. If Oz is already
								on the field, then this will reset the duration of his presence.
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
						When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down
						Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of
						the arrow's DMG.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						If your active character triggers an Electro-related Elemental
						Reaction when Oz is on the field, the opponent shall be stricken
						with Thundering Retribution, dealing Electro DMG equal to 80% of
						Fischl's ATK.
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
