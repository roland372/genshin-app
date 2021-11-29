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
						Performs up to 4 attacks using Wind Spirits, dealing
						<b className='text-anemo'> Anemo DMG</b>.
					</div>
				}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina and deals AoE
						<b className='text-anemo'> Anemo DMG </b>
						after a short casting time.
					</div>
				}
				plungingAttack={
					<div>
						Calling upon the power of her Wind Spirits, Sucrose plunges towards
						the ground from mid-air, damaging all opponents in her path. Deals
						<b className='text-anemo'> AoE Anemo DMG </b>
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
						Creates a small Wind Spirit that pulls opponents and objects towards
						its location, launches opponents within its AoE, and deals
						<b className='text-anemo'> Anemo DMG</b>.
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
							Sucrose hurls an unstable concoction that creates a Large Wind
							Spirit.
						</div>
						<div>
							While it persists, the Large Wind Spirit will continuously pull in
							surrounding opponents and objects, launch nearby opponents, and
							deal
							<b className='text-anemo'> Anemo DMG</b>.
						</div>
						<br />
						<b>Elemental Absorption</b>
						<div>
							If the Wind Spirit comes into contact with
							<b className='text-hydro'> Hydro</b>/
							<b className='text-pyro'>Pyro</b>/
							<b className='text-cryo'>Cryo</b>/
							<b className='text-electro'>Electro </b>
							energy, it will deal additional elemental DMG of that type.
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
						When Sucrose triggers a Swirl effect, all characters in the party
						with the matching element (excluding Sucrose) have their Elemental
						Mastery increased by 50 for 8s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Astable Anemohypostasis Creation - 6308 or Forbidden Creation -
						Isomer 75 / Type II hits an opponent, increases all party members'
						(excluding Sucrose) Elemental Mastery based on 20% of Sucrose's
						Elemental Mastery for 8s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Sucrose crafts Character and Weapon Enhancement Materials, she
						has a 10% chance to obtain double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
