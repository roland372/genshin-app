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
				normalAttack='Perform up to 5 rapid strikes.'
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to dash forward and perform an
						iai.
					</div>
				}
				plungingAttack='Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Kamisato Ayato shifts positions and enters the Takimeguri Kanka
							state. After this shift, he will leave a watery illusion at his
							original location. After it is formed, the watery illusion will
							explode if opponents are nearby or after its duration ends,
							dealing
							<b className='text-hydro'> AoE Hydro DMG</b>.
						</div>
						<br />
						<b>Takimeguri Kanka</b>
						<div>
							In this state, Kamisato Ayato uses his Shunsuiken to engage in
							blindingly fast attacks, causing DMG from his Normal Attacks to be
							converted into <b className='text-hydro'> AoE Hydro DMG</b>. This
							cannot be overridden.
						</div>
						<br />
						It also has the following properties:
						<ul>
							<li>
								After a Shunsuiken attack hits an opponent, it will grant Ayato
								the Namisen effect, increasing the DMG dealt by Shunsuiken based
								on Ayato's current Max HP. The initial maximum number of Namisen
								stacks is 4, and 1 stack can be gained through Shunsuiken every
								0.1s. This effect will be dispelled when Takimeguri Kanka ends.
							</li>
							<li>Kamisato Ayato's resistance to interruption is increased.</li>
							<li>Unable to use Charged or Plunging Attacks.</li>
						</ul>
						<div>
							Takimeguri Kanka will be cleared when Ayato leaves the field.
							Using Kamisato Art: Kyouka again while in the Takimeguri Kanka
							state will reset and replace the pre-existing state.
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
						Unveils a garden of purity that silences the cacophony within. While
						this space exists, Bloomwater Blades will constantly rain down and
						attack opponents within its AoE, dealing
						<b className='text-hydro'> Hydro DMG</b> and increasing the Normal
						Attack DMG of characters within.
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
						<div>Kamisato Art: Kyouka has the following properties:</div>
						<ul>
							<li>
								After it is used, Kamisato Ayato will gain 2 Namisen stacks.
							</li>
							<li>
								When the water illusion explodes, Ayato will gain a Namisen
								effect equal to the maximum number of stacks possible.
							</li>
						</ul>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						If Kamisato Ayato is not on the field and his Energy is less than
						40, he will regenerate 2 Energy for himself every second.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Ayato cooks a dish perfectly, he has a 18% chance to receive an
						additional "Suspicious" dish of the same type.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
