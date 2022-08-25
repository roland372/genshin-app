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
				normalAttack={<div>Performs up to five consecutive spear strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, dealing
						damage to opponents along the way.
					</div>
				}
				plungingAttack={
					<div>
						Plunges from mid-air to strike the ground below, damaging opponents
						along the path and dealing AoE DMG upon impact.
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
						<p>
							Ms. Yun may just be acting out fights on stage, but her skills
							with the spear are real enough to defend against her foes.
						</p>
						<b>Press</b>
						<p>
							Flourishes her polearm in a cloud-grasping stance, dealing
							<b className='text-geo'> Geo DMG</b>.
						</p>
						<b>Hold</b>
						<br />
						Takes up the Opening Flourish stance and charges up, forming a
						shield. DMG Absorption is based on Yun Jin's Max HP and has 150%
						effectiveness against all Elemental DMG and Physical DMG. The shield
						lasts until she finishes unleashing her Elemental Skill.
						<br />
						When the skill is released, when its duration ends, or when the
						shield breaks, Yun Jin will unleash the charged energy as an attack,
						dealing <b className='text-geo'> Geo DMG</b>.
						<br />
						Based on the time spent charging, it will either unleash an attack
						at Charge Level 1 or Level 2.
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
						<p>
							Deals <b className='text-geo'> AoE Geo DMG </b> and grants all
							nearby party members a Flying Cloud Flag Formation.
						</p>
						<b>Flying Cloud Flag Formation</b>
						<br />
						When Normal Attack DMG is dealt to opponents, Bonus DMG will be
						dealt based on Yun Jin's current DEF.
						<br />
						The effects of this skill will be cleared after a set duration or
						after being triggered a specific number of times.
						<br />
						When one Normal Attack hits multiple opponents, the effect is
						triggered multiple times according to the number of opponents hit.
						The number of times that the effect is triggered is counted
						independently for each member of the party with Flying Cloud Flag
						Formation.
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
						Using Opening Flourish at the precise moment when Yun Jin is
						attacked will unleash its Level 2 Charged (Hold) form.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						The Normal Attack DMG Bonus granted by Flying Cloud Flag Formation
						is further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF when the
						party contains characters of 1/2/3/4 Elemental Types, respectively.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Perfect Cooking is achieved on Food with Adventure-related
						effects, there is a 12% chance to obtain double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
