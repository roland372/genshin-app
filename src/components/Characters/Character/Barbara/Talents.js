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
				chargedAttack='Consumes a certain amount of Stamina to deal AoE Hydro DMG after a short casting time.'
				plungingAttack='Gathering the might of Hydro, Barbara plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Hydro DMG upon impact with the ground.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Summons water droplets resembling musical notes that form a Melody
							Loop, dealing Hydro DMG to surrounding opponents and applying the
							Wet status to them.
						</div>
						<br />
						<b>Melody Loop</b>
						<ul>
							<li>
								On hit, Barbara's Normal Attacks heal your own party members and
								nearby teammates for a certain amount of HP, which scales with
								Barbara's Max HP.
							</li>
							<li>
								On hit, Barbara's Charged Attack generates 4 times the amount of
								healing.
							</li>
							<li>Periodically regenerates your own active character's HP.</li>
							<li>
								Applies the Wet status to the character and to opponents who
								come in contact with them.
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
				description="Heals nearby allied characters and your characters in the party for a large amount of HP that scales with Barbara's Max HP."
			>
				<AttributeScaling data={elementalBurst} />
			</ElementalBurst>
			<h3 className='text-start ms-3'>Passive Talents</h3>
			<PassiveTalent
				name={props.data.passiveTalents[0].name}
				image={props.passiveTalent1Image}
				unlocked='Unlocked at Ascension 1'
				description="The Stamina Consumption of characters within Let the Show Begin's Melody Loop is reduced by 12%.
				"
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description="When your active character gains an Elemental Orb/Particle, the duration of Let the Show Begin's Melody Loop is extended by 1s. The maximum extension is 5s.
				"
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description='When a Perfect Cooking is achieved on a dish with restorative effects, Barbara has a 12% chance to obtain double the product.
				'
			/>
		</CardComponent>
	);
};

export default Talents;
