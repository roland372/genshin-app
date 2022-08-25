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
				normalAttack={<div>Perform up to 6 consecutive shots with a bow.</div>}
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG. While aiming,
						favorable winds will accumulate on the arrowhead. A fully charged
						wind arrow will deal
						<b className='text-anemo'> Anemo DMG</b>.
					</div>
				}
				plungingAttack={
					<div>
						Fires off a shower of arrows in mid-air before falling and striking
						the ground, dealing AoE DMG upon impact.
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
							O wind upon which all hymns and songs fly, bear these
							earth-walkers up into the sky!
						</div>
						<br />
						<b>Press</b>
						<div>
							Summons a Wind Domain at the opponent's location, dealing
							<b className='text-anemo'> AoE Anemo DMG </b>
							and launching opponents into the air.
						</div>
						<br />
						<b>Hold</b>
						<div>
							Summons an even larger Wind Domain with Venti as the epicenter,
							dealing
							<b className='text-anemo'> AoE Anemo DMG </b>
							and launching affected opponents into the air.
						</div>
						<div>
							After unleashing the Hold version of this ability, Venti rides the
							wind into the air.
						</div>
						<br />
						<div>
							Opponents hit by Skyward Sonnet will fall to the ground slowly.
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
							Fires off an arrow made of countless coalesced winds, creating a
							huge Stormeye that sucks in opponents and deals continuous
							<b className='text-anemo'> Anemo DMG</b>.
						</div>
						<br />
						<b>Elemental Absorption</b>
						<div>
							If the Stormeye comes into contact with
							<b className='text-hydro'> Hydro</b>/
							<b className='text-pyro'>Pyro</b>/
							<b className='text-cryo'>Cryo</b>/
							<b className='text-electro'>Electro</b>, it will deal additional
							elemental DMG of that type.
						</div>
						<div>Elemental Absorption may only occur once per use.</div>
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
						Holding Skyward Sonnet creates an upcurrent that lasts for 20s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Regenerates 15 Energy for Venti after the effects of Wind's Grand
						Ode end. If an Elemental Absorption occurred, this also restores 15
						Energy to all characters of that corresponding element.
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
							Decreases gliding Stamina consumption for your own party members
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
