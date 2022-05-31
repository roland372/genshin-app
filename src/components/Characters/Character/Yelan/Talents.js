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
				normalAttack='Perform up to 4 consecutive shots with a bow.'
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG. While aiming,
						flowing water will accumulate on the arrowhead. A fully charged
						torrential arrow will deal <b className='text-hydro'> Hydro DMG</b>.
						<br />
						<b>Breakthrough</b>
						<div>
							Yelan will enter a "Breakthrough" state after spending 5s out of
							combat, which will cause her next Charged Aimed Shot to have 80%
							decreased charge time, and once charged, she can fire a
							"Breakthrough Barb" that will deal <b className='text-hydro'> Aoe <b className='text-hydro'> Hydro DMG</b></b> based on Yelan's
							Max HP.
						</div>
					</div>
				}
				plungingAttack='Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.'
			>
				<AttributeScaling data={normalAttack} />
			</NormalAttack>
			<ElementalSkill
				name={props.data.skillTalents[1].name}
				image={props.elementalSkillImage}
				description={
					<div>
						<div>
							Fires off a Lifeline that allows her to move rapidly, entangling
							and marking opponents along its path.
						</div>
						<div>
							When this rapid movement ends, the Lifeline will explode, dealing
							<b className='text-hydro'> Hydro DMG</b> to the marked opponents based on Yelan's Max HP.
						</div>
						<br />
						<b>Press</b>
						<div>Moves a certain distance forward swiftly.</div>
						<br />
						<b>Hold</b>
						<div>
							Engages in continuous, swift movement, during which Yelan's
							resistance to interruption is increased.
						</div>
						<div>
							During this time, Yelan can control this rapid movement and end it
							by using this Skill again. Additionally, each opponent marked by
							the "Lifeline" when it explodes grants Yelan a 34% chance to reset
							her "Breakthrough" state.
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
							Deals <b className='text-hydro'> Aoe <b className='text-hydro'> Hydro DMG</b></b> and creates an "Exquisite Throw," which aids
							her in battle.
						</div>
						<br />
						<b>Exquisite Throw</b>
						<div>
							This follows the character around and will initiate a coordinated
							attack under the following circumstances, dealing <b className='text-hydro'> Hydro DMG</b> based
							on Yelan's Max HP:
						</div>
						<ul>
							<li>
								This can occur once every second when your active character uses
								a Normal Attack.
							</li>
							<li>
								Will occur each time Yelan's Lifeline explodes and hits
								opponents.
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
						When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is
						increased by 6%/12%/18%/30%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						So long as an Exquisite Throw is in play, your own active character
						deals 1% more DMG. This increases by a further 3.5% DMG every
						second. The maximum increase to DMG dealt is 50%. The pre-existing
						effect will be dispelled if Depth-Clarion Dice is recast during its
						duration.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Gains 25% more rewards when dispatched on a Liyue Expedition for 20
						hours.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;


