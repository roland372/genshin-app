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
				normalAttack={<div>Performs up to four consecutive spear strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, dealing
						damage to enemies along the way.
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
						Performs a swift thrust, dealing <b className='text-electro'> Electro DMG</b>  to opponents along the
						path.
						<br />
						When Cyno is under the Pathsworn Pathclearer state triggered by the
						Elemental Burst "Sacred Rite: Wolf's Swiftness," he will instead
						unleash a Mortuary Rite that deals thunderous  <b className='text-electro'> AoE Electro DMG</b>  and
						extends the duration of Pathsworn Pathclearer.
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
						Calls upon a divine spirit to indwell him, morphing into the
						Pactsworn Pathclearer.
						<br />
						<br />
						<b>Pactsworn Pathclearer</b>
						<br />
						Cyno's Normal, Charged, and Plunging Attacks will be converted to
						<b className='text-electro'> Electro DMG</b>  that cannot be overridden. Cyno's Elemental Mastery and
						resistance to interruption will increase, and he gains immunity to
						<b className='text-electro'> Electro-Charged DMG</b>. This effect will be canceled when Cyno leaves
						the field and lasts a maximum of 18s.
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
						When Cyno is in the Pactsworn Pathclearer state activated by Sacred
						Rite: Wolf's Swiftness, Cyno will enter the Endseer stance at
						intervals. If he activates Secret Rite: Chasmic Soulfarer while
						affected by this stance, he will activate the Judication effect,
						increasing the DMG of this Secret Rite: Chasmic Soulfarer by 35%,
						and firing off 3 Duststalker Bolts that deal 100% of Cyno's ATK as
						<b className='text-electro'> Electro</b> DMG.
						<br />
						<br />
						Duststalker Bolt DMG is considered Elemental Skill DMG.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Cyno's DMG values will be increased based on his Elemental Mastery
						as follows:
						<ul>
							<li>
								Pactsworn Pathclearer's Normal Attack DMG is increased by 125%
								of his Elemental Mastery.
							</li>
							<li>
								Duststalker Bolt DMG from his Passive Talent Featherfall
								Judgment is increased by 250% of his Elemental Mastery.
							</li>
						</ul>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Gains 25% more rewards when dispatched on a Sumeru Expedition for 20
						hours.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
