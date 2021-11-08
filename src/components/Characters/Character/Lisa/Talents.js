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
				normalAttack='Performs up to 4 lightning attacks that deal Electro DMG.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to deal Electro DMG after a
						short casting time.
					</div>
				}
				plungingAttack='Gathering the might of Electro, Lisa plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Electro DMG upon impact with the ground.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Channels the power of lightning to sweep bothersome matters away.
						</div>
						<br />
						<b>Press</b>
						<div>Releases a homing Lightning Orb.</div>
						<div>
							On hit, it deals Electro DMG, and applies a stack of the
							Conductive status (max 3 stacks) to opponents in a small AoE.
						</div>
						<br />
						<b>Hold</b>
						<div>
							After an extended casting time, calls down lightning from the
							heavens, dealing massive Electro DMG to all nearby opponents.
						</div>
						<div>
							Deals great amounts of extra damage to opponents based on the
							number of Conductive stacks applied to them, and clears their
							Conductive status.
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
							Summons a Lightning Rose that unleashes powerful lightning bolts,
							launching surrounding opponents and dealing Electro DMG.
						</div>
						<div>
							The Lightning Rose will continuously emit lightning to knock back
							opponents and deal Electro DMG throughout the ability's duration.
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
						Hits by Charged Attacks apply Violet Arc's Conductive status to
						opponents.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Opponents hit by Lightning Rose have their DEF decreased by 15% for
						10s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Lisa crafts a potion, she has a 20% chance to refund one count
						of one material out of all the crafting materials used.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
