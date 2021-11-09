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
				normalAttack='Performs up to 4 consecutive strikes.'
				chargedAttack={
					<div>
						Drains Stamina over time to perform continuous spinning attacks
						against all nearby opponents.
						<br />
						At the end of the sequence, perform a more powerful slash.
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
							Xinyan brandishes her instrument, dealing Pyro DMG on nearby
							opponents, forming a shield made out of her audience's passion.
						</div>
						<div>
							The shield's DMG Absorption scales based on Xinyan's DEF and on
							the number of opponents hit.
						</div>
						<ul>
							<li>Hitting 0 – 1 opponents grants Shield Level 1: Ad Lib.</li>
							<li>Hitting 2 opponents grants Shield Level 2: Lead-In.</li>
							<li>
								Hitting 3 or more opponents grants Shield Level 3: Rave, which
								will also deal intermittent Pyro DMG to nearby opponents.
							</li>
						</ul>
						<div>The shield has the following special properties:</div>
						<ul>
							<li>When unleashed, it infuses Xinyan with Pyro.</li>
							<li>
								It has 250% DMG Absorption effectiveness against Pyro DMG.
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
						Strumming rapidly, Xinyan launches nearby opponents and deals
						Physical DMG to them, hyping up the crowd. The sheer intensity of
						the atmosphere will cause explosions that deal Pyro DMG to nearby
						opponents.
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
							Decreases the number of opponents Sweeping Fervor must hit to
							trigger each level of shielding.
						</div>
						<ul>
							<li>
								Shield Level 2: Lead-In requirement reduced to 1 opponent hit.
							</li>
							<li>
								Shield Level 3: Rave requirement reduced to 2 opponents hit or
								more.
							</li>
						</ul>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Characters shielded by Sweeping Fervor deal 15% increased Physical
						DMG.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When a Perfect Cooking is achieved on a DEF-boosting dish, Xinyan
						has a 12% chance to obtain double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
