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
						<div>
							Rosaria swiftly shifts her position to appear behind her opponent,
							then stabs and slashes them with her polearm, dealing Cryo DMG.
						</div>
						<div>
							This ability cannot be used to travel behind opponents of a larger
							build.
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
							Rosaria's unique take on this prayer ritual: First, she swings her
							weapon to slash surrounding opponents; then, she summons a frigid
							Ice Lance that strikes the ground. Both actions deal Cryo DMG.
						</div>
						<div>
							While active, the Ice Lance periodically releases a blast of cold
							air, dealing Cryo DMG to surrounding opponents.
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
						When Rosaria strikes an opponent from behind using Ravaging
						Confession, Rosaria's CRIT Rate increases by 12% for 5s.
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
							Casting Rites of Termination increases CRIT Rate of all nearby
							party members (except Rosaria herself) by 15% of Rosaria's CRIT
							Rate for 10s.
						</div>
						<div>CRIT Rate Bonus gained this way cannot exceed 15%.</div>
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
							At night (18:00 – 6:00), increases the Movement SPD of your own
							party members by 10%.
						</div>
						<div>
							Does not take effect in Domains, Trounce Domains, or Spiral Abyss.
							Not stackable with Passive Talents that provide the same effects.
						</div>
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
