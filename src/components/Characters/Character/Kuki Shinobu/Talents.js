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
				normalAttack='Perform up to 5 consecutive shots with a bow.'
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
						Creates a Grass Ring of Sanctification at the cost of part of her
						HP, dealing <b className='text-electro'>Electro DMG</b> to nearby
						opponents.
						<br />
						<br />
						<b>Grass Ring of Sanctification</b>
						<div>
							Follows your current active character around. Deals{' '}
							<b className='text-electro'>Electro DMG</b> to nearby opponents
							every 1.5s and restores HP for the active character(s) within the
							ring's AoE based on Kuki Shinobu's Max HP.
							<br />
							<br />
							<div>
								The HP consumption from using this skill can only bring her to
								20% HP.
							</div>
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
					<p>
						Stabs an evil-excoriating blade into the ground, creating a field
						that cleanses the area of all that is foul, dealing continuous
						Electro DMG to opponents within its AoE based on Shinobu's Max HP.
						<br />
						<br />
						If Shinobu's HP is less than or equal to 50% when this skill is
						used, the field will last longer.
					</p>
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
						When Shinobu's HP is not higher than 50%, her Healing Bonus is
						increased by 15%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Sanctifying Ring's abilities will be boosted based on Shinobu's
						Elemental Mastery:
						<br />
						<br />
						<ul>
							<li>
								Healing amount will be increased by 75% of Elemental Mastery.
							</li>
							<li>DMG dealt is increased by 25% of Elemental Mastery.</li>
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
						Gains 25% more rewards when dispatched on an Inazuma Expedition for
						20 hours.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
