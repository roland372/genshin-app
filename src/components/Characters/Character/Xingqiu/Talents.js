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
							Xingqiu performs twin strikes with his sword, dealing Hydro DMG.
							At the same time, this ability creates the maximum number of Rain
							Swords, which will orbit your active character.
						</div>
						<div>The Rain Swords have the following properties:</div>
						<ul>
							<li>
								When a character takes DMG, the Rain Sword will shatter,
								reducing the amount of DMG taken.
							</li>
							<li>Increases the character's resistance to interruption.</li>
						</ul>
						<div>
							20% of Xingqiu's Hydro DMG Bonus will be converted to additional
							DMG Reduction for the Rain Swords.
						</div>
						<br />
						<div>
							The maximum amount of additional DMG Reduction that can be gained
							this way is 24%.
						</div>
						<div>The initial maximum number of Rain Swords is 3.</div>
						<div>
							Using this ability applies the Wet status onto the character.
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
							Initiate Rainbow Bladework and fight using an illusory sword rain,
							while creating the maximum number of Rain Swords.
						</div>
						<br />
						<b>Rainbow Bladework</b>
						<ul>
							<li>
								Your active character's Normal Attacks will trigger consecutive
								sword rain attacks, dealing Hydro DMG.
							</li>
							<li>
								Rain Swords will remain at the maximum number throughout the
								ability's duration.
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
						When a Rain Sword is shattered or when its duration expires, it
						regenerates the current character's HP based on 6% of Xingqiu's Max
						HP.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={<div>Xingqiu gains a 20% Hydro DMG Bonus.</div>}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Xingqiu crafts Character Talent Materials, he has a 25% chance
						to refund a portion of the crafting materials used.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
