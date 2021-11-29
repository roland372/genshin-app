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
						<div>
							Shoots fireballs that deal up to three counts of
							<b className='text-pyro'> Pyro DMG</b>.
						</div>
						<div>
							When Yanfei's Normal Attacks hit enemies, they will grant her a
							single Scarlet Seal. Yanfei may possess a maximum of 3 Scarlet
							Seals, and each time this effect is triggered, the duration of
							currently possessed Scarlet Seals will refresh.
						</div>
						<div>
							Each Scarlet Seal will decrease Yanfei's Stamina consumption and
							will disappear when she leaves the field.
						</div>
					</div>
				}
				chargedAttack={
					<div>
						Consumes Stamina and all Scarlet Seals before dealing
						<b className='text-pyro'> AoE Pyro DMG </b>
						to the opponents after a short casting time.
						<br />
						This Charged Attack's AoE and DMG will increase according to the
						amount of Scarlet Seals consumed.
					</div>
				}
				plungingAttack={
					<div>
						Gathering the power of Pyro, Yanfei plunges towards the ground from
						mid-air, damaging all opponents in her path. Deals
						<b className='text-pyro'> AoE Pyro DMG </b>
						upon impact with the ground.
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
							Summons blistering flames that deal
							<b className='text-pyro'> AoE Pyro DMG</b>.
						</div>
						<div>
							Opponents hit by the flames will grant Yanfei the maximum number
							of Scarlet Seals.
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
							Triggers a spray of intense flames that rush at nearby opponents,
							dealing
							<b className='text-pyro'> AoE Pyro DMG</b>, granting Yanfei the
							maximum number of Scarlet Seals, and applying Brilliance to her.
						</div>
						<br />
						<b>Brilliance</b>
						<div>Has the following effects:</div>
						<ul>
							<li>Grants Yanfei a Scarlet Seal at fixed intervals.</li>
							<li>Increases the DMG dealt by her Charged Attacks.</li>
						</ul>
						<div>
							The effects of Brilliance will end if Yanfei leaves the field or
							falls in battle.
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
						When Yanfei consumes Scarlet Seals by using a Charged Attack, each
						Scarlet Seal will increase Yanfei's
						<b className='text-pyro'> Pyro DMG Bonus </b>
						by 5%. This effect lasts for 6s. When a Charged Attack is used again
						during the effect's duration, it will dispel the previous effect.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Yanfei's Charged Attack deals a CRIT Hit to opponents, she will
						deal an additional instance of
						<b className='text-pyro'> AoE Pyro DMG </b>
						equal to 80% of her ATK. This DMG counts as Charged Attack DMG.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Displays the location of nearby resources unique to Liyue on the
						mini-map.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
