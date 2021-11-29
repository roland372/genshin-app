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
				normalAttack='Performs up to five consecutive spear strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, dealing
						damage to opponents along the way.
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
						Summons Guoba the Panda. Guoba continuously breathes fire at
						opponents, dealing
						<b className='text-pyro'> AoE Pyro DMG</b>.
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
						Displaying her mastery over both fire and polearms, Xiangling sends
						a Pyronado whirling around her. The Pyronado will move with your
						character for the ability's duration, dealing
						<b className='text-pyro'> Pyro DMG </b>
						to all opponents in its path.
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
				description={<div>Increases the flame range of Guoba by 20%.</div>}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Guoba Attack's effects end, Guoba leaves a chili pepper on the
						spot where it disappeared. Picking up a chili pepper increases ATK
						by 10% for 10s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When a Perfect Cooking is achieved on an ATK-boosting dish,
						Xiangling has a 12% chance to receive double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
