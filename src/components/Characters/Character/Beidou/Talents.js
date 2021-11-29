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
				normalAttack='Perform up to 5 successive strikes.'
				chargedAttack='Drains Stamina over time to perform continuous slashes. At end of the sequence, perform a more powerful slash.'
				plungingAttack='Plunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<b>Press</b>
						<div>
							Accumulating the power of lightning, Beidou swings her blade
							forward fiercely, dealing
							<b className='text-electro'> Electro DMG</b>.
						</div>
						<b>Hold</b>
						<div>
							Lifts her weapon up as a shield. Max DMG absorbed scales off
							Beidou's Max HP.
						</div>
						<div>
							Attacks using the energy stored within the greatsword upon release
							or once this ability's duration expires, dealing
							<b className='text-electro'> Electro DMG</b>. DMG dealt scales
							with the number of times Beidou is attacked in the skill's
							duration. The greatest DMG Bonus will be attained once this effect
							is triggered twice.
						</div>
						<br />
						<div>The shield possesses the following properties:</div>
						<ul>
							<li>
								Has 250%
								<b className='text-electro'> Electro DMG </b>
								Absorption Efficiency.
							</li>
							<li>
								Applies the
								<b className='text-electro'> Electro Element </b>
								to Beidou upon activation.
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
							Recalling her slaying of the great beast Haishan, Beidou calls
							upon that monstrous strength and the lightning to create a
							Thunderbeast's Targe around herself, dealing
							<b className='text-electro'> Electro DMG </b>
							to nearby opponents.
						</div>
						<br />
						<b>Thunderbeast's Targe:</b>
						<ul>
							<li>
								When Normal and Charged Attacks hit, they create a lightning
								discharge that can jump between opponents, dealing Electro DMG.
							</li>
							<li>
								Increases the character's resistance to interruption, and
								decreases DMG taken.
							</li>
							<li>Triggers a maximum of 1 lightning discharge per second.</li>
						</ul>
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
				description='Counterattacking with Tidecaller at the precise moment when the character is hit grants the maximum DMG Bonus.'
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						<div>
							Gain the following effects for 10s after unleashing Tidecaller
							with its maximum DMG Bonus:
						</div>
						<ul>
							<li>
								DMG dealt by Normal and Charged Attacks is increased by 15%. ATK
								SPD of Normal and Charged Attacks is increased by 15%.
							</li>
							<li>Greatly reduced delay before unleashing Charged Attacks.</li>
						</ul>
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
							Decreases swimming Stamina consumption of your characters in the
							party by 20%.
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
