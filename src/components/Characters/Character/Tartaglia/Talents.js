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
				normalAttack='Perform up to 6 consecutive shots with a bow.'
				chargedAttack={
					<div>
						<div>Perform a more precise Aimed Shot with increased DMG.</div>
						<div>
							While aiming, the power of Hydro will accumulate on the arrowhead.
							A arrow fully charged with the torrent will deal
							<b className='text-hydro'> Hydro DMG </b>
							and apply the Riptide status.
						</div>
						<br />
						<b>Riptide</b>
						<div>
							Opponents affected by Riptide will suffer from
							<b className='text-hydro'> AoE Hydro DMG </b>
							effects when attacked by Tartaglia in various ways. DMG dealt in
							this way is considered Normal Attack DMG.
						</div>
						<ul>
							<li>
								Riptide Flash: A fully-charged Aimed Shot that hits an opponent
								affected by Riptide deals consecutive bouts of AoE DMG. Can
								occur once every 0.7s.
							</li>
							<li>
								Riptide Burst: Defeating an opponent affected by Riptide creates
								a Hydro burst that inflicts the Riptide status on nearby
								opponents hit.
							</li>
						</ul>
					</div>
				}
				plungingAttack={
					<div>
						<div>
							Fires off a shower of arrows in mid-air before falling and
							striking the ground, dealing AoE DMG upon impact.
						</div>
						<div>
							When Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, he
							cannot perform a plunging attack.
						</div>
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
							Unleashes a set of weaponry made of pure water, dealing
							<b className='text-hydro'> Hydro DMG </b>
							to surrounding opponents and entering Melee Stance.
						</div>
						<div>
							In this Stance, Tartaglia's Normal and Charged Attacks are
							converted to
							<b className='text-hydro'> Hydro DMG </b>
							that cannot be overridden by any other elemental infusion and
							change as follows:
						</div>
						<br />
						<b>Normal Attack</b>
						<div>
							Perform up to 6 consecutive
							<b className='text-hydro'> Hydro </b>
							strikes.
						</div>
						<br />
						<b>Charged Attack</b>
						<div>
							Consumes a certain amount of Stamina to unleash a cross slash,
							dealing
							<b className='text-hydro'> Hydro DMG</b>.
						</div>
						<br />
						<b>Riptide Slash</b>
						<div>
							Hitting an opponent affected by Riptide with a melee attack
							unleashes a Riptide Slash that deals
							<b className='text-hydro'> AoE Hydro DMG</b>. DMG dealt in this
							way is considered Elemental Skill DMG, and can only occur once
							every 1.5s.
						</div>
						<br />
						<div>
							After 30s, or when the ability is unleashed again, this skill will
							end. Tartaglia will return to his Ranged Stance and this ability
							will enter CD.
						</div>
						<div>
							The longer Tartaglia stays in his Melee Stance, the longer the CD.
						</div>
						<div>
							If the return to a ranged stance occurs automatically after 30s,
							the CD is even longer.
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
							Performs different attacks based on what stance Tartaglia is in
							when casting.
						</div>
						<br />
						<b>Ranged Stance: Flash of Havoc</b>
						<div>
							Swiftly fires a Hydro-imbued magic arrow, dealing
							<b className='text-hydro'> AoE Hydro DMG </b>
							and applying the Riptide status.
						</div>
						<div>Returns a portion of its Energy Cost after use.</div>
						<br />
						<b>Melee Stance: Light of Obliteration</b>
						<div>
							Performs a slash with a large AoE, dealing massive
							<b className='text-hydro'> Hydro DMG </b>
							to all surrounding opponents, which triggers Riptide Blast.
						</div>
						<br />
						<b>Riptide Blast</b>
						<div>
							When the obliterating waters hit an opponent affected by Riptide,
							it clears their Riptide status and triggers a Hydro Explosion that
							deals
							<b className='text-hydro'> AoE Hydro DMG</b>.
						</div>
						<div>DMG dealt in this way is considered Elemental Burst DMG.</div>
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
				description={<div>Extends Riptide duration by 8s.</div>}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Tartaglia is in Foul Legacy: Raging Tide's Melee stance, on
						dealing a CRIT hit, Normal and Charged Attacks apply the Riptide
						status effects to opponents.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>Increases your own party members' Normal Attack Level by 1.</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
