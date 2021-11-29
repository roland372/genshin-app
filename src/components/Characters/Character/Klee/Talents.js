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
						Throws things that go boom when they hit things! Perform up to 3
						explosive attacks, dealing
						<b className='text-pyro'> AoE Pyro DMG</b>.
					</div>
				}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina and deals
						<b className='text-pyro'> AoE Pyro DMG </b>
						to opponents after a short casting time.
					</div>
				}
				plungingAttack={
					<div>
						Gathering the power of Pyro, Klee plunges towards the ground from
						mid-air, damaging all opponents in her path. Deals
						<b className='text-pyro'> AoE Pyro DMG </b>
						upon impact with the ground.
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
						<div>Jumpy Dumpty is tons of boom-bang-fun!</div>
						<div>
							When thrown, Jumpy Dumpty bounces thrice, igniting and dealing
							<b className='text-pyro'> AoE Pyro DMG </b>
							with every bounce.
						</div>
						<br />
						<div>On the third bounce, the bomb splits into many mines.</div>
						<div>
							The mines will explode upon contact with opponents, or after a
							short period of time, dealing
							<b className='text-pyro'> AoE Pyro DMG</b>.
						</div>
						<br />
						<div>Starts with 2 charges.</div>
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
						Klee's Blazing Delight! For the duration of this ability,
						continuously summons Sparks 'n' Splash to attack nearby opponents,
						dealing
						<b className='text-pyro'> AoE Pyro DMG</b>.
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
						When Jumpy Dumpty and Normal Attacks deal DMG, Klee has a 50% chance
						to obtain an Explosive Spark. This Explosive Spark is consumed by
						the next Charged Attack, which costs no Stamina and deals 50%
						increased DMG.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Klee's Charged Attack results in a CRIT, all party members gain
						2 Elemental Energy.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Displays the location of nearby resources unique to Mondstadt on the
						mini-map.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
