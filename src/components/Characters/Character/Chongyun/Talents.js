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
				normalAttack='Perform up to 4 consecutive strikes.'
				chargedAttack={
					<div>
						Drains Stamina over time to perform continuous swirling attacks
						against all nearby opponents. At the end of the sequence, perform a
						more powerful slash.
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
							Chongyun strikes the ground with his greatsword, causing a
							<b className='text-cryo'> Cryo </b>
							explosion in a circular AoE in front of him that deals
							<b className='text-cryo'> Cryo DMG</b>.
						</div>
						<div>
							After a short delay, the cold air created by the
							<b className='text-cryo'> Cryo </b>
							explosion will coalesce into a Chonghua Frost Field, within which
							all Sword, Claymore and Polearm-wielding characters' weapons will
							be infused with
							<b className='text-cryo'> Cryo</b>.
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
							Performing the secret hand seals, Chongyun summons 3 giant spirit
							blades in mid-air that fall to the earth one by one after a short
							delay, exploding as they hit the ground.
						</div>
						<div>
							When the spirit blades explode, they will deal
							<b className='text-cryo'> AoE Cryo DMG </b>
							and launch opponents.
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
						Sword, Claymore, or Polearm-wielding characters within the field
						created by Spirit Blade: Chonghua's Layered Frost have their Normal
						ATK SPD increased by 8%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						<div>
							When the field created by Spirit Blade: Chonghua's Layered Frost
							disappears, another spirit blade will be summoned to strike nearby
							opponents, dealing 100% of Chonghua's Layered Frost's Skill DMG as
							<b className='text-cryo'> AoE Cryo DMG</b>.
						</div>
						<div>
							Opponents hit by this blade will have their
							<b className='text-cryo'> Cryo RES </b>
							decreased by 10% for 8s.
						</div>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When dispatched on an expedition in Liyue, time consumed is reduced
						by 25%.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
