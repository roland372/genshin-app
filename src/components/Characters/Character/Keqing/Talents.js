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
						Consumes a certain amount of Stamina to unleash 2 rapid sword
						strikes.
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
						<div>
							Hurls a Lightning Stiletto that annihilates her opponents like the
							swift thunder.
						</div>
						<div>
							When the Stiletto hits its target, it deals
							<b className='text-electro'> Electro DMG </b>
							to opponents in a small AoE, and places a Stiletto Mark on the
							spot hit.
						</div>
						<br />
						<b>Hold</b>
						<div>
							Hold to adjust the direction in which the Stiletto shall be
							thrown.
						</div>
						<div>
							Stilettos thrown by the Hold attack mode can be suspended in
							mid-air, allowing Keqing to jump to them when using Stellar
							Restoration a second time.
						</div>
						<br />
						<b>Lightning Stiletto</b>
						<div>
							If Keqing uses Stellar Restoration again or uses a Charged Attack
							while its duration lasts, it will clear the Stiletto Mark and
							produce different effects:
						</div>
						<ul>
							<li>
								If she uses Stellar Restoration again, she will blink to the
								location of the Mark and unleash one slashing attack that deals
								<b className='text-electro'> AoE Electro DMG</b>. When blinking
								to a Stiletto that was thrown from a Holding attack, Keqing can
								leap across obstructing terrain.
							</li>
							<li>
								If Keqing uses a Charged Attack, she will ignite a series of
								thundering cuts at the Mark's location, dealing
								<b className='text-electro'> AoE Electro DMG</b>.
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
						<div>
							Keqing unleashes the power of lightning, dealing
							<b className='text-electro'> Electro DMG </b>
							in an AOE.
						</div>
						<div>
							She then blends into the shadow of her blade, striking a series of
							thunderclap-blows to nearby opponents simultaneously that deal
							multiple instances of
							<b className='text-electro'> Electro DMG</b>.
						</div>
						<div>
							The final attack deals massive
							<b className='text-electro'> AoE Electro DMG</b>.
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
						After recasting Stellar Restoration while a Lightning Stiletto is
						present, Keqing's weapon gains an
						<b className='text-electro'> Electro Infusion </b>
						for 5s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When casting Starward Sword, Keqing's CRIT Rate is increased by 15%,
						and her Energy Recharge is increased by 15%. This effect lasts for
						8s.
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
