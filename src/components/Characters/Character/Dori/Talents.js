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
				normalAttack={<div>Perform up to 3 consecutive strikes.</div>}
				chargedAttack={
					<div>
						Drains Stamina over time to perform continuous spinning attacks
						against all nearby opponents. At the end of the sequence, performs a
						more powerful slash.
					</div>
				}
				plungingAttack={
					<div>
						Plunges from mid-air to strike the ground below, damaging opponents
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
						Directs a Spirit-Warding Lamp to fire off Troubleshooter Shots at
						opponents, dealing <b className='text-electro'> Electro DMG.</b>
						<br />
						When Troubleshooter Shots hit opponents, they will create 2
						After-Sales Service Rounds that will automatically track opponents
						and deal <b className='text-electro'> Electro DMG.</b>
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
						Summons forth the Jinni within the lamp to give the client various
						kinds of aid.
						<br />
						<br />
						<b>Jinni</b>
						<br />
						Connects to a nearby character. The connected character will:
						<li>Continuously restore HP based on Dori's Max HP.</li>
						<li>Continuously regenerate Energy.</li>
						<li>
							Be affected by <b className='text-electro'> Electro</b>.
						</li>
						<br />
						When the connector between the Jinni and the character touches
						opponents, it will deal one instance of{' '}
						<b className='text-electro'> Electro DMG</b> to them every 0.4s.
						<br />
						Only one Jinni can exist at one time.
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
						After a character connected to the Jinni triggers an
						Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate,
						Hyperbloom, or an Electro Swirl or Crystallize reaction, the CD of
						Spirit-Warding Lamp: Troubleshooter Cannon is decreased by 1s.
						<br />
						This effect can be triggered once every 3s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When the Troubleshooter Shots or After-Sales Service Rounds from
						Spirit-Warding Lamp: Troubleshooter Cannon hit opponents, Dori will
						restore 5 Elemental Energy for every 100% Energy Recharge possessed.
						<br />
						Per Spirit-Warding Lamp: Troubleshooter Cannon, only one instance of
						Energy restoration can be triggered and a maximum of 15 Energy can
						be restored this way.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Dori crafts Character and Weapon Enhancement Materials, she has
						a chance to refund a portion of the crafting materials used.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
