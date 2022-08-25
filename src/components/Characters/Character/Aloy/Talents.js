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
				normalAttack={<div>Perform up to 4 consecutive shots with a bow.</div>}
				chargedAttack={
					<div>
						<div>Perform a more precise Aimed Shot with increased DMG.</div>
						<div>
							While aiming, biting frost will accumulate on the arrowhead. A
							fully charged frost arrow will deal
							<b className='text-cryo'> Cryo DMG</b>.
						</div>
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
							Aloy throws a Freeze Bomb in the targeted direction and triggers
							an explosion, dealing
							<b className='text-cryo'> Cryo DMG</b>. After it explodes, the
							Freeze Bomb will split up into many Chillwater Bomblets that
							explode on contact with opponents or after a short delay, dealing
							<b className='text-cryo'> Cryo DMG</b>.
						</div>
						<div>
							When a Freeze Bomb or Chillwater Bomblet hits an opponent, the
							opponent's ATK is decreased and Aloy receives 1 Coil stack.
						</div>
						<div>Aloy can gain up to 1 Coil stack every 0.1s.</div>
						<br />
						<b>Coil</b>
						<ul>
							<li>Each stack increases Aloy's Normal Attack DMG.</li>
							<li>
								When Aloy has 4 Coil stacks, all stacks of Coil are cleared. She
								then enters the Rushing Ice state, which further increases the
								DMG dealt by her Normal Attacks and converts her Normal Attack
								DMG to
								<b className='text-cryo'> Cryo DMG</b>.
							</li>
						</ul>
						<div>
							While in the Rushing Ice state, Aloy cannot obtain new Coil
							stacks.
						</div>
						<div>
							Coil effects will be cleared 30s after Aloy leaves the field.
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
						Aloy throws a Power Cell filled with Cryo in the targeted direction,
						then detonates it with an arrow, dealing
						<b className='text-cryo'> AoE Cryo DMG</b>.
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
				description="When Aloy receives the Coil effect from Frozen Wilds, her ATK is increased by 16%, while nearby party members' ATK is increased by 8%. This effect lasts 10s.
				"
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Aloy is in the Rushing Ice state conferred by Frozen Wilds, her
						<b className='text-cryo'> Cryo DMG Bonus </b>
						increases by 3.5% every 1s. A maximum
						<b className='text-cryo'> Cryo DMG Bonus </b>
						increase of 35% can be gained in this way.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description='When Aloy is in the party, animals who produce Fowl, Raw Meat, or Chilled Meat will not be startled when party members approach them.
				'
			/>
		</CardComponent>
	);
};

export default Talents;
