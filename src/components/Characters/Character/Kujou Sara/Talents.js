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
				normalAttack={<div>Perform up to 5 consecutive shots with a bow.</div>}
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG. While aiming,
						crackling lightning will accumulate on the arrowhead. An arrow fully
						charged with the storm's might will deal
						<b className='text-electro'> Electro DMG</b>
						.
						<br />
						When in the Crowfeather Cover state, a fully-charged arrow will
						leave a Crowfeather behind after it hits.
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
							Retreats rapidly with the speed of a tengu, summoning the
							protection of the Crowfeather. Gains Crowfeather Cover for 18s,
							and when Kujou Sara fires a fully-charged Aimed Shot, Crowfeather
							Cover will be consumed, and will leave a Crowfeather at the target
							location.
						</div>
						<div>
							Crowfeathers will trigger Tengu Juurai: Ambush after a short time,
							dealing
							<b className='text-electro'> Electro DMG </b>
							and granting the active character within its AoE an ATK Bonus
							based on Kujou Sara's Base ATK.
						</div>
						<br />
						<div>
							The ATK Bonuses from different Tengu Juurai will not stack, and
							their effects and duration will be determined by the last Tengu
							Juurai to take effect.
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
							Casts down Tengu Juurai: Titanbreaker, dealing
							<b className='text-electro'> AoE Electro DMG</b>. Afterwards,
							Tengu Juurai: Titanbreaker spreads out into 4 consecutive bouts of
							Tengu Juurai: Stormcluster, dealing
							<b className='text-electro'> AoE Electro DMG</b>.
						</div>
						<div>
							Tengu Juurai: Titanbreaker and Tengu Juurai: Stormcluster can
							provide the active character within their AoE with the same ATK
							Bonus as given by the Elemental Skill, Tengu Stormcall.
						</div>
						<br />
						<div>
							The ATK Bonus provided by various kinds of Tengu Juurai will not
							stack, and their effects and duration will be determined by the
							last Tengu Juurai to take effect.
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
						While in the Crowfeather Cover state provided by Tengu Stormcall,
						Aimed Shot charge times are decreased by 60%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Tengu Juurai: Ambush hits opponents, Kujou Sara will restore
						1.2 Energy to all party members for every 100% Energy Recharge she
						has. This effect can be triggered once every 3s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When dispatched on an expedition in Inazuma, time consumed is
						reduced by 25%.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
