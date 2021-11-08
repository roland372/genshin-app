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
				normalAttack='Performs up to 3 consecutive attacks that take the form of swimming fish, dealing Hydro DMG.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to deal AoE Hydro DMG after a
						short casting time.
					</div>
				}
				plungingAttack='Gathering the might of Hydro, Kokomi plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Hydro DMG upon impact with the ground.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Summons a "Bake-Kurage" created from water that can heal her
							allies.
						</div>
						<div>
							Using this skill will apply the Wet status to Sangonomiya Kokomi.
						</div>
						<br />
						<b>Bake-Kurage</b>
						<div>
							Deals Hydro DMG to surrounding opponents and heal nearby active
							characters at fixed intervals. This healing is based on Kokomi's
							Max HP.
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
							Summons the might of Watatsumi, dealing Hydro DMG to surrounding
							opponents, before robing Kokomi in a Ceremonial Garment made from
							the flowing waters of Sangonomiya.
						</div>
						<br />
						<b>Ceremonial Garment</b>
						<ul>
							<li>
								Sangonomiya Kokomi's Normal Attack, Charged Attack and
								Bake-Kurage DMG are increased based on her Max HP.
							</li>
							<li>
								When her Normal and Charged Attacks hit opponents, Kokomi will
								restore HP for all nearby party members, and the amount restored
								is based on her Max HP.
							</li>
							<li>
								Increases Sangonomiya Kokomi's resistance to interruption and
								allows her to walk on the water's surface.
							</li>
						</ul>
						<div>
							These effects will be cleared once Sangonomiya Kokomi leaves the
							field.
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
						If Sangonomiya Kokomi's own Bake-Kurage are on the field when she
						uses Nereid's Ascension, the Bake-Kurage's duration will be
						refreshed.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						While donning the Ceremonial Garment created by Nereid's Ascension,
						the Normal and Charged Attack DMG Bonus Sangonomiya Kokomi gains
						based on her Max HP will receive a further increase based on 15% of
						her Healing Bonus.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Sangonomiya Kokomi has a 25% Healing Bonus, but a 100% decrease in
						CRIT Rate.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[3].name}
				image={props.passiveTalent4Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						<div>
							Decreases swimming Stamina consumption for your own party members
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
