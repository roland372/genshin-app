import React from 'react';
import CardComponent from '../../../../Layout/CardComponent';

import AttributeScaling from '../../../Talents/AttributeScaling';
import NormalAttack from '../../../Talents/NormalAttack';
import ElementalSkill from '../../../Talents/ElementalSkill';
import ElementalBurst from '../../../Talents/ElementalBurst';
import PassiveTalent from '../../../Talents/PassiveTalent';

const Talents = props => {
	let normalAttack = props.data.skillTalents[0].attributeScaling;
	let elementalSkill = props.data.skillTalents[1].attributeScaling;
	let elementalBurst = props.data.skillTalents[2].attributeScaling;
	return (
		<CardComponent title='Talents'>
			<NormalAttack
				name={props.data.skillTalents[0].name}
				image={props.normalAttackImage}
				normalAttack='Performs up to 5 rapid strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to unleash 2 rapid sword
						strikes.
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
							Unleashes three swift thunder shadows that deal
							<b className='text-electro'> Electro DMG </b>
							to opponents and leave an Abundance Amulet behind after hitting an
							opponent.
						</div>
						<div>
							2 Abundance Amulets can be created initially. Using this skill
							will reset any Abundance Amulets that were generated.
						</div>
						<br />
						<b>Abundance Amulets</b>
						<div>
							When a character is near an Abundance Amulet, they will absorb it
							and obtain the following effects:
						</div>
						<ul>
							<li>Restores Elemental Energy</li>
							<li>
								Increases Energy Recharge during the Abundance Amulet's
								duration.
							</li>
						</ul>
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
							You call upon the protection of lightning, knocking nearby
							opponents back and dealing
							<b className='text-electro'> Electro DMG </b>
							to them.
						</div>
						<br />
						<b>Lightning Shroud</b>
						<div>
							When your active character's Normal or Charged Attacks hit
							opponents, they will call Falling Thunder forth, dealing
							<b className='text-electro'> Electro DMG</b>.
						</div>
						<div>
							When Falling Thunder hits opponents, it will regenerate Energy for
							that character.
						</div>
						<div>
							One instance of Falling Thunder can be generated every 0.5s.
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
						When another nearby character in the party obtains an Abundance
						Amulet created by Lightning Blade, Lightning Blade's CD is decreased
						by 1.5s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Increases the Energy Recharge effect granted by Lightning Blade's
						Abundance Amulet by 10% of the Traveler's Energy Recharge.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
