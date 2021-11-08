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
				normalAttack='Perform up to 4 water splash attacks that deal Hydro DMG.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to deal AoE Hydro DMG after a
						short casting time.
					</div>
				}
				plungingAttack='Gathering the might of Hydro, Mona plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Hydro DMG upon impact with the ground.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Creates an illusory Phantom of Fate from coalesced waterspouts.
						</div>
						<div>
							The <b>Phantom</b> has the following special properties:
						</div>
						<ul>
							<li>
								Continuously taunts nearby opponents, attracting their fire.
							</li>
							<li>Continuously deals Hydro DMG to nearby opponents.</li>
							<li>
								When its duration expires, the Phantom explodes, dealing AoE
								Hydro DMG.
							</li>
						</ul>
						<b>Hold</b>
						<div>
							Utilizes water currents to move backwards swiftly before conjuring
							a Phantom.
						</div>
						<br />
						<div>
							Only one Phantom created by Mirror Reflection of Doom can exist at
							any time.
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
							Mona summons the sparkling waves and creates a reflection of the
							starry sky, applying the Illusory Bubble status to opponents in a
							large AoE.
						</div>
						<br />
						<b>Illusory Bubble</b>
						<div>
							Traps opponents inside a pocket of destiny and also makes them
							Wet.
						</div>
						<div>Renders weaker opponents immobile.</div>
						<div>
							When an opponent affected by Illusory Bubble sustains DMG, it has
							the following effects:
						</div>
						<ul>
							<li>
								Applies an Omen to the opponent, which gives a DMG Bonus, also
								increasing the DMG of the attack that causes it.
							</li>
							<li>
								Removes the Illusory Bubble, dealing Hydro DMG in the process.
							</li>
						</ul>
						<b>Omen</b>
						<div>During its duration, increases DMG taken by opponents.</div>
					</div>
				}
			>
				<AttributeScaling data={elementalBurst} />
			</ElementalBurst>
			<h3 className='text-start ms-3'>Passive Talents</h3>
			<PassiveTalent
				name={props.data.passiveTalents[0].name}
				image={props.passiveTalent1Image}
				unlocked='Alternate Sprint'
				description={
					<div>
						<div>
							Mona cloaks herself within the water's flow, consuming stamina to
							move rapidly.
						</div>
						<br />
						<div>
							When under the effect of Illusory Torrent, Mona can move at high
							speed on water.
						</div>
						<div>
							Applies the Wet status to nearby opponents when she reappears.
						</div>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 1'
				description={
					<div>
						<div>
							After she has used <b>Illusory Torrent</b> for 2s, if there are
							any opponents nearby, Mona will automatically create a Phantom.
						</div>
						<div>
							A Phantom created in this manner lasts for 2s, and its explosion
							DMG is equal to 50% of
							<b> Mirror Reflection of Doom</b>.
						</div>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Increases Mona's Hydro DMG Bonus by a degree equivalent to 20% of
						her Energy Recharge rate.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[3].name}
				image={props.passiveTalent4Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Mona crafts Weapon Ascension Materials, she has a 25% chance to
						refund one count of one material out of all the crafting materials
						used.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
