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
				normalAttack={<div>Performs up to 4 consecutive strikes.</div>}
				chargedAttack={
					<div>
						Drains Stamina over time to perform continuous spinning attacks
						against all nearby opponents.
						<br />
						At the end of the sequence, perform a more powerful slash.
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
						<div>The special technique of the Yoohoo Ninja Arts!</div>
						<div>
							Sayu curls up into a rolling Fuufuu Windwheel and smashes into
							opponents at high speed, dealing
							<b className='text-anemo'> Anemo DMG</b>. When the duration ends,
							she unleashes a Fuufuu Whirlwind Kick, dealing
							<b className='text-anemo'> AoE Anemo DMG</b>.
						</div>
						<br />
						<b>Press</b>
						<div>
							Enters the Fuufuu Windwheel state, rolling forward a short
							distance before using the Fuufuu Whirlwind Kick.
						</div>
						<br />
						<b>Hold</b>
						<div>
							Rolls about continuously in the Fuufuu Windwheel state, increasing
							Sayu's resistance to interruption while within that state.
						</div>
						<div>
							During this time, Sayu can control the direction of her roll, and
							can use the skill again to end her Windwheel state early and
							unleash a stronger version of the Fuufuu Whirlwind Kick.
						</div>
						<div>
							The Hold version of this skill can trigger Elemental Absorption.
						</div>
						<br />
						<div>
							This skill has a maximum duration of 10s and enters CD once its
							effects end.
						</div>
						<div>
							The longer Sayu remains in her Windwheel state, the longer the CD.
						</div>
						<br />
						<b>Elemental Absorption</b>
						<div>
							If Sayu comes into contact with
							<b className='text-hydro'> Hydro</b>/
							<b className='text-pyro'>Pyro</b>/
							<b className='text-cryo'>Cryo</b>/
							<b className='text-electro'>Electro </b> while in her Windwheel
							state, she will deal additional elemental DMG of that type.
						</div>
						<div>
							Elemental Absorption may only occur once per use of this skill.
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
							The other super special technique of the Yoohoo Ninja Arts! It
							summons a pair of helping hands for Sayu.
						</div>
						<div>
							Deals
							<b className='text-anemo'> Anemo DMG </b>
							to nearby opponents and heals all nearby party members. The amount
							of HP restored is based on Sayu's ATK. This skill then summons a
							Muji-Muji Daruma.
						</div>
						<br />
						<b>Muji-Muji Daruma</b>
						<div>
							At specific intervals, the Daruma will take one of several actions
							based on the situation around it:
						</div>
						<ul>
							<li>
								If the HP of nearby characters is above 70%, it will attack a
								nearby opponent, dealing
								<b className='text-anemo'> Anemo DMG</b>.
							</li>
							<li>
								If there are active characters with 70% or less HP nearby, it
								will heal the active character with the lowest percentage HP
								left. If there are no opponents nearby, it will heal active
								characters nearby even if they have 70% HP or more.
							</li>
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
				description={
					<div>
						<div>
							When Sayu triggers a Swirl reaction while active, she heals all
							your characters and nearby allies for 300 HP. She will also heal
							an additional 1.2 HP for every point of Elemental Mastery she has.
						</div>
						<div>This effect can be triggered once every 2s.</div>
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						<div>
							The Muji-Muji Daruma created by Yoohoo Art: Mujina Flurry gains
							the following effects:
						</div>
						<ul>
							<li>
								When healing a character, it will also heal characters near that
								healed character for 20% the amount of HP.
							</li>
							<li>Increases the AoE of its attack against opponents.</li>
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
							When Sayu is in the party, your characters will not startle
							Crystalflies and certain other animals when getting near them.
						</div>
						<div>
							Check the "Other" sub-category of the "Living Beings / Wildlife"
							section in the Archive for creatures this skill works on.
						</div>
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
