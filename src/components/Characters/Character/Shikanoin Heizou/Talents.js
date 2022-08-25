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
				normalAttack={
					<div>
						Performs up to 5 fisticuffs empowered by a mighty wind, dealing
						<b className='text-anemo'> Anemo DMG</b>.
					</div>
				}
				chargedAttack={
					<div>
						Consumes a set amount of Stamina to perform a sweeping kick, dealing
						<b className='text-anemo'> Anemo DMG</b>.
					</div>
				}
				plungingAttack={
					<div>
						Calling upon the surging wind, Heizou plunges towards the ground
						from mid-air, damaging all opponents in his path. Deals{' '}
						<b className='text-anemo'> AoE Anemo DMG</b> upon impact with the
						ground.
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
						<b>Press</b>
						<br />
						Wields the swift winds to launch a Heartstopper Strike that deals
						<b className='text-anemo'> Anemo DMG</b>.
						<br />
						<br />
						<b>Hold</b>
						<br />
						Charges energy to unleash an even stronger blow. He will obtain the
						Declension effect while charging, which will increase the power of
						the Heartstopper Strike. When the skill button is released or the
						skill duration ends, he will strike forward, dealing{' '}
						<b className='text-anemo'> Anemo DMG</b>.
						<br />
						<br />
						<b>Declension</b>
						<br />
						Increases the power of the next Heartstopper Strike. Max 4 stacks.
						When you possess 4 Declension stacks, the Conviction effect will be
						produced, which will cause the next Heartstopper Strike to be even
						stronger and have a larger AoE.
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
						Leaps into the air and uses the Fudou Style Vacuum Slugger and kicks
						his opponent. The Vacuum Slugger will explode upon hit and create an
						Arresting Windtunnel that pulls in nearby objects and opponents,
						dealing{' '}
						<b className='text-anemo'>
							{' '}
							Aoe <b className='text-anemo'> Anemo DMG</b>
						</b>
						.
						<br />
						<br />
						When Fudou Style Vacuum Slugger hits enemies affected by{' '}
						<b className='text-hydro'> Hydro</b>,{' '}
						<b className='text-pyro'> Pyro</b>,{' '}
						<b className='text-cryo'> Cryo</b> or{' '}
						<b className='text-electro'> Electro</b>, it afflicts them with
						Windmuster Iris. Moments later, Windmuster Iris explodes and
						dissipates, dealing AoE DMG of the corresponding elemental type.
						<br />
						<br />
						Fudou Style Vacuum Slugger can afflict a maximum of four enemies
						with the Windmuster Iris. A single enemy cannot be afflicted by
						Irises of different elemental types at the same time.
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
						When Shikanoin Heizou activates a Swirl reaction while on the field,
						he will gain 1 Declension stack for Heartstopper Strike. This effect
						can be triggered every 0.1s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						After Shikanoin Heizou‘s Heartstopper Strike hits an opponent,
						increases all party members' (excluding Shikanoin Heizou) Elemental
						Mastery by 80 for 10s.
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
							Decreases sprinting Stamina consumption for your own party members
							by 20%.
						</div>
						<div>
							Not stackable with Passive Talents that provide the exact same
							effects.
						</div>
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
