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
				normalAttack={<div>Perform up to 5 rapid strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to unleash a flurry of sword
						ki.
					</div>
				}
				plungingAttack={
					<div>
						Plunges from mid-air to strike the ground below, damaging enemies
						along the path and dealing AoE DMG upon impact.
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
						Summons blooming ice to launch nearby opponents, dealing
						<b className='text-cryo'> AoE Cryo DMG</b>.
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
							Summons forth a snowstorm with flawless poise, unleashing a
							Frostflake Seki no To that moves forward continuously.
						</div>
						<br />
						<b>Frostflake Seki no To</b>
						<ul>
							<li>
								A storm of whirling icy winds that slashes repeatedly at every
								enemy it touches, dealing
								<b className='text-cryo'> Cryo DMG</b>.
							</li>
							<li>
								The snowstorm explodes after its duration ends, dealing
								<b className='text-cryo'> AoE Cryo DMG</b>.
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
				unlocked='Alternate Sprint'
				description={
					<div>
						<div>
							Ayaka consumes Stamina and cloaks herself in a frozen fog that
							moves with her.
						</div>
						<br />
						<div>In Senho form, she moves swiftly upon water.</div>
						<div>When she reappears, the following effects occur:</div>
						<ul>
							<li>
								Ayaka unleashes frigid energy to apply
								<b className='text-cryo'> Cryo </b>
								on nearby opponents.
							</li>
							<li>
								Coldness condenses around Ayaka's blade, infusing her attacks
								with
								<b className='text-cryo'> Cryo </b>
								for a brief period.
							</li>
						</ul>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 1'
				description={
					<div>
						After using Kamisato Art: Hyouka, Kamisato Ayaka's Normal and
						Charged attacks deal 30% increased DMG for 6s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						<div>
							When the
							<b className='text-cryo'> Cryo </b>
							application at the end of Kamisato Art: Senho hits an opponent,
							Kamisato Ayaka gains the following effects:
						</div>
						<ul>
							<li>Restores 10 Stamina</li>
							<li>
								Gains 18%
								<b className='text-cryo'> Cryo DMG Bonus </b>
								for 10s.
							</li>
						</ul>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[3].name}
				image={props.passiveTalent4Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Ayaka crafts Weapon Ascension Materials, she has a 10% chance
						to receive double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
