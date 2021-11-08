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
				normalAttack={
					<div>
						<div>Shoots gems that deal Geo DMG.</div>
						<div>Upon hit, this grants Ningguang 1 Star Jade.</div>
					</div>
				}
				chargedAttack={
					<div>
						<div>
							Consumes a certain amount of stamina to fire off a giant gem that
							deals Geo DMG.
						</div>
						<div>
							If Ningguang has any Star Jades, unleashing a Charged Attack will
							cause the Star Jades to be fired at the enemy as well, dealing
							additional DMG.
						</div>
					</div>
				}
				plungingAttack='Gathering the might of Geo, Ningguang plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Geo DMG upon impact with the ground.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Ningguang creates a Jade Screen out of gold, obsidian and her
							great opulence, dealing AoE Geo DMG.
						</div>
						<br />
						<b>Jade Screen</b>
						<ul>
							<li>Blocks opponents' projectiles.</li>
							<li>Endurance scales based on Ningguang's Max HP.</li>
						</ul>
						<div>
							Jade Screen is considered a Geo Construct and can be used to block
							certain attacks, but cannot be climbed. Only one Jade Screen may
							exist at any one time.
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
							Gathering a great number of gems, Ningguang scatters them all at
							once, sending homing projectiles at her opponents that deal
							massive Geo DMG.
						</div>
						<div>
							If Starshatter is cast when a Jade Screen is nearby, the Jade
							Screen will fire additional gem projectiles at the same time.
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
						When Ningguang is in possession of Star Jades, her Charged Attack
						does not consume Stamina.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						A character that passes through the Jade Screen will gain a 12% Geo
						DMG Bonus for 10s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Displays the location of nearby ore veins used in forging on the
						mini-map.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
