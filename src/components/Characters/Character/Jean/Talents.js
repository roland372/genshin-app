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
				normalAttack='Performs up to 5 consecutive strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of stamina to launch an opponent using the
						power of wind. Launched opponents will slowly fall to the ground.
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
						<div>
							Focusing the might of the formless wind around her blade, Jean
							releases a miniature storm, launching opponents in the direction
							she aims at, dealing massive Anemo DMG.
						</div>
						<br />
						<b>Hold</b>
						<div>
							At the cost of continued stamina consumption, Jean can command the
							whirlwind to pull surrounding opponents and objects towards her
							front.
						</div>
						<div>Direction can be adjusted.</div>
						<div>Character is immobile during skill duration.</div>
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
							Calling upon the wind's protection, Jean creates a swirling
							Dandelion Field, launching surrounding opponents and causing Anemo
							DMG.
						</div>
						<div>
							At the same time, she instantly regenerates a large amount of HP
							for all party members. The amount of HP restored scales off Jean's
							ATK.
						</div>
						<br />
						<b>Dandelion Field</b>
						<ul>
							<li>
								Continuously regenerates HP of characters within the AoE and
								continuously imbues them with Anemo.
							</li>
							<li>
								Deals Anemo DMG to opponents entering or exiting the Dandelion
								Field.
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
						Hits by Jean's Normal Attacks have a 50% chance to regenerate HP
						equal to 15% of Jean's ATK for all party members.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>Using Dandelion Breeze will regenerate 20% of its Energy.</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When a Perfect Cooking is achieved on a dish with restorative
						effects, Jean has a 12% chance to obtain double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
