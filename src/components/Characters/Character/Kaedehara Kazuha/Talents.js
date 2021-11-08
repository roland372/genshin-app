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
				normalAttack='Perform up to 5 rapid strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to unleash 2 rapid sword
						strikes.
					</div>
				}
				plungingAttack={
					<div>
						<div>
							Plunges from mid-air to strike the ground below, damaging
							opponents along the path and dealing AoE DMG upon impact. If this
							Plunging Attack is triggered by Chihayaburu, it will be converted
							to Plunging Attack: Midare Ranzan.
						</div>
						<br />
						<b>Plunging Attack: Midare Ranzan</b>
						<div>
							When a Plunging Attack is performed using the effects of the
							Elemental Skill Chihayaburu, Plunging Attack DMG is converted to
							Anemo DMG and will create a small wind tunnel via a secret blade
							technique that pulls in nearby objects and opponents.
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
							Unleashes a secret technique as fierce as the rushing wind that
							pulls objects and opponents towards Kazuha's current position
							before launching opponents within the AoE, dealing Anemo DMG and
							lifting Kazuha into the air on a rushing gust of wind.
						</div>
						<div>
							Within 10s of remaining airborne after casting Chihayaburu, Kazuha
							can unleash a powerful Plunging Attack known as Midare Ranzan.
						</div>
						<br />
						<b>Press</b>
						<div>Can be used in mid-air.</div>
						<br />
						<b>Hold</b>
						<div>
							Charges up before unleashing greater Anemo DMG over a larger AoE
							than Press Mode.
						</div>
						<br />
						<b>Plunging Attack: Midare Ranzan</b>
						<div>
							When a Plunging Attack is performed using the effects of the
							Elemental Skill Chihayaburu, Plunging Attack DMG is converted to
							Anemo DMG. On landing, Kazuha creates a small wind tunnel via a
							secret blade technique that pulls in nearby objects and opponents.
						</div>
						<div>Midare Ranzan's DMG is considered Plunging Attack DMG.</div>
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
							The signature technique of Kazuha's self-styled bladework — a
							single slash that strikes with the force of the first winds of
							autumn, dealing AoE Anemo DMG.
						</div>
						<div>
							The blade's passage will leave behind a field named "Autumn
							Whirlwind" that periodically deals AoE Anemo DMG to opponents
							within its range.
						</div>
						<br />
						<b>Elemental Absorption</b>
						<div>
							If Autumn Whirlwind comes into contact with
							Hydro/Pyro/Cryo/Electro, it will deal additional elemental DMG of
							that type.
						</div>
						<div>Elemental Absorption may only occur once per use.</div>
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
						<div>
							If Chihayaburu comes into contact with Hydro/Pyro/Cryo/Electro
							when cast, Chihayaburu will absorb that element and if Plunging
							Attack: Midare Ranzan is used before the effect expires, it will
							deal an additional 200% ATK of the absorbed elemental type as DMG.
							This will be considered Plunging Attack DMG.
						</div>
						<div>
							Elemental Absorption may only occur once per use of Chihayaburu.
						</div>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Upon triggering a Swirl reaction, Kaedehara Kazuha will grant all
						party members a 0.04% Elemental DMG Bonus to the element absorbed by
						Swirl for every point of Elemental Mastery he has for 8s. Bonuses
						for different elements obtained through this method can co-exist.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						<div>
							Decreases sprinting Stamina consumption for your own party members
							by 20%.
						</div>
						<div>
							Not stackable with Passive Talents that provide the exact same
							effects.
						</div>
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
