import React from 'react';
import CardComponent from '../../../Layout/CardComponent';

import AttributeScaling from '../../Talents/AttributeScaling';
import NormalAttack from '../../../../components/Characters/Talents/NormalAttack';
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
				normalAttack={
					<div>
						Summons forth kitsune spirits, initiating a maximum of 3 attacks
						that deal
						<b className='text-electro'> Electro DMG</b>.
					</div>
				}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to deal{' '}
						<b className='text-electro'> Electro DMG </b> after a short casting
						time.
					</div>
				}
				plungingAttack={
					<div>
						Gathering the might of Electro, Yae Miko plunges towards the ground
						from mid-air, damaging all opponents in her path. Deals{' '}
						<b className='text-electro'> AoE Electro DMG </b> upon impact with
						the ground.
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
						To Yae, such dull tasks as can be accomplished by driving spirits
						out need not be done personally.
						<br />
						Moves swiftly, leaving a Sesshou Sakura behind.
						<br />
						<br />
						<b>Sesshou Sakura</b>
						<br />
						Has the following properties:
						<ul>
							<li>
								Periodically strikes one nearby opponent with lightning, dealing
								<b className='text-electro'> Electro DMG </b>
							</li>
							<li>
								When there are other Sesshou Sakura nearby, their level will
								increase, boosting the DMG dealt by these lightning strikes.
							</li>
						</ul>
						This skill has three charges.
						<br />A maximum of 3 Sesshou Sakura can exist simultaneously. The
						initial level of each Sesshou Sakura is 1, and the initial highest
						level each sakura can reach is 3. If a new Sesshou Sakura is created
						too close to an existing one, the existing one will be destroyed.
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
						Legends of "kitsunetsuki," or the manifestations of a kitsune's
						might, are common in Inazuma's folktales. One that particularly
						captures the imagination is that of the Sky Kitsune, said to cause
						lightning to fall down upon the foes of the Grand Narukami Shrine.
						Summons a lightning strike, dealing
						<b className='text-electro'> AoE Electro DMG</b>
						.
						<br />
						When she uses this skill, Yae Miko will unseal nearby Sesshou
						Sakura, destroying their outer forms and transforming them into
						Tenko Thunderbolts that descend from the skies, dealing{' '}
						<b className='text-electro'> AoE Electro DMG</b>. Each Sesshou
						Sakura destroyed in this way will create one Tenko Thunderbolt.
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
						When casting Great Secret Art: Tenko Kenshin, each Sesshou Sakura
						destroyed resets the cooldown for 1 charge of Yakan Evocation:
						Sesshou Sakura.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Every point of Elemental Mastery Yae Miko possesses will increase
						Sesshou Sakura DMG by 0.15%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Has a 25% chance to get 1 regional Character Talent Material (base
						material excluded) when crafting. The rarity is that of the base
						material.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
