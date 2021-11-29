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
				normalAttack='Performs up to 5 consecutive shots with a bow.'
				chargedAttack={
					<div>
						<div>Perform a more precise Aimed Shot with increased DMG.</div>
						<div>
							While aiming, flames will accumulate on the arrowhead before being
							fired off as an attack. Has different effects based on how long
							the energy has been charged:
						</div>
						<ul>
							<li>
								Charge Level 1: Fires off a flaming arrow that deals
								<b className='text-pyro'> Pyro DMG</b>.
							</li>
							<li>
								Charge Level 2: Generates a maximum of 3 Kindling Arrows based
								on time spent charging, releasing them as part of this Aimed
								Shot. Kindling Arrows will home in on nearby opponents, dealing
								<b className='text-pyro'> Pyro DMG </b>
								on hit.
							</li>
						</ul>
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
							Yoimiya waves a sparkler and causes a ring of saltpeter to
							surround her.
						</div>
						<br />
						<b>Niwabi Enshou</b>
						<div>
							During this time, arrows fired by Yoimiya's Normal Attack will be
							Blazing Arrows, and their DMG will be increased and converted to
							<b className='text-pyro'> Pyro DMG</b>.
						</div>
						<div>
							During this time, Normal Attack: Firework Flare-Up will not
							generate Kindling Arrows at Charge Level 2.
						</div>
						<br />
						<div>
							This effect will deactivate when Yoimiya leaves the field.
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
							Yoimiya leaps into the air along with her original creation, the
							"Ryuukin Saxifrage," and fires forth blazing rockets bursting with
							surprises that deal
							<b className='text-pyro'> AoE Pyro DMG </b>
							and mark one of the hit opponents with Aurous Blaze.
						</div>
						<br />
						<b>Aurous Blaze</b>
						<div>
							All Normal/Charged/Plunging Attacks, Elemental Skills, and
							Elemental Bursts by any party member other than Yoimiya that hit
							an opponent marked by Aurous Blaze will trigger an explosion,
							dealing
							<b className='text-pyro'> AoE Pyro DMG</b>.
						</div>
						<div>
							When an opponent affected by Aurous Blaze is defeated before its
							duration expires, the effect will pass on to another nearby
							opponent, who will inherit the remaining duration.
						</div>
						<br />
						<div>
							One Aurous Blaze explosion can be triggered every 2s. When Yoimiya
							is down, Aurous Blaze effects created through her skills will be
							deactivated.
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
						During Niwabi Fire-Dance, shots from Yoimiya's Normal Attack will
						increase her
						<b className='text-pyro'> Pyro DMG Bonus </b>
						by 2% on hit. This effect lasts for 3s and can have a maximum of 10
						stacks.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Using Ryuukin Saxifrage causes nearby party members (not including
						Yoimiya) to gain a 10% ATK increase for 15s. Additionally, a further
						ATK Bonus will be added on based on the number of "Tricks of the
						Trouble-Maker" stacks Yoimiya possesses when using Ryuukin
						Saxifrage. Each stack increases this ATK Bonus by 1%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Yoimiya crafts Decoration, Ornament, and Landscape-type
						Furnishings, she has a 100% chance to refund a portion of the
						materials used.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
