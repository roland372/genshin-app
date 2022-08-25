import React from 'react';
import CardComponent from '../../../../Layout/CardComponent';

import AttributeScaling from '../../../Talents/AttributeScaling';
import NormalAttack from '../../../Talents/NormalAttack';
import ElementalSkill from '../../../Talents/ElementalSkill';
import ElementalBurst from '../../../Talents/ElementalBurst';
import PassiveTalent from '../../../Talents/PassiveTalent';

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
							Grasping the wind's might, you form a vortex of vacuum in your
							palm, causing continuous
							<b className='text-anemo'> Anemo DMG </b>
							to opponents in front of you.
						</div>
						<div>
							The vacuum vortex explodes when the skill duration ends, causing a
							greater amount of
							<b className='text-anemo'> Anemo DMG </b>
							over a larger area.
						</div>
						<br />
						<b>Hold</b>
						<div>DMG and AoE will gradually increase.</div>
						<br />
						<b>Elemental Absorption</b>
						<div>
							If the vortex comes into contact with
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
				<AttributeScaling data={elementalSkill} />
			</ElementalSkill>
			<ElementalBurst
				name={props.data.skillTalents[2].name}
				image={props.elementalBurstImage}
				description={
					<div>
						<div>
							Guiding the path of the wind currents, you summon a forward-moving
							tornado that pulls objects and opponents towards itself, dealing
							continuous
							<b className='text-anemo'> Anemo DMG</b>.
						</div>
						<br />
						<b>Elemental Absorption</b>
						<div>
							If the tornado comes into contact with
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
						The last hit of a Normal Attack combo unleashes a wind blade,
						dealing 60% of ATK as
						<b className='text-anemo'> Anemo DMG </b>
						to all opponents in its path.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Palm Vortex kills regenerate 2% HP for 5s. This effect can only
						occur once every 5s.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
