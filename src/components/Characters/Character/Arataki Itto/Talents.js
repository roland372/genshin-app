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
				normalAttack={
					<div>
						Perform up to 4 consecutive strikes.
						<br />
						When the 2nd and 4th strikes hit opponents, Itto will gain 1 or 2
						stacks of Superlative Superstrength, respectively. Max 5 stacks.
						<br />
						Triggering this effect will refresh the current duration of any
						existing stacks.
						<br />
						<br />
						Additionally, Itto's Normal Attack combo does not immediately reset
						after sprinting or using his Elemental Skill, "Masatsu Zetsugi:
						Akaushi Burst!"
					</div>
				}
				chargedAttack={
					<div>
						When holding to perform a Charged Attack, Itto unleashes a series of
						Arataki Kesagiri slashes without consuming Stamina. Instead, each
						Arataki Kesagiri slash consumes 1 stack of Superlative
						Superstrength. When the final stack is consumed, Itto delivers a
						powerful final slash.
						<br />
						If no stacks of Superlative Superstrength are available, Itto will
						perform a single Saichimonji Slash.
					</div>
				}
				plungingAttack={
					<div>
						Plunges from mid-air to strike the ground, damaging opponents along
						the path and dealing AoE DMG upon impact.
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
						Hurls Ushi, the young akaushi bull and auxiliary member of the
						Arataki Gang, dealing <b className='text-geo'>Geo DMG</b> to
						opponents on hit.
						<br />
						When Ushi hits opponents, Arataki Itto gains 1 stack of Superlative
						Superstrength.
						<br />
						<br />
						Ushi will remain on the field and provide support in the following
						ways:
						<ul>
							<li>Taunts surrounding opponents and draws their attacks.</li>
							<li>
								Inherits HP based on a percentage of Arataki Itto's Max HP.
							</li>
							<li>
								When Ushi takes DMG, Arataki Itto gains 1 stack of Superlative
								Superstrength. Only 1 stack can be gained in this way every 2s.
							</li>
							<li>
								Ushi will flee when its HP reaches 0 or its duration ends. It
								will grant Arataki Itto 1 stack of Superlative Superstrength
								when it leaves.
							</li>
						</ul>
						<b>Hold</b>
						<br />
						Adjust throwing angle.
						<br />
						<br />
						Ushi is considered a <b className='text-geo'>Geo Construct</b>.
						Arataki Itto can only deploy 1 Ushi on the field at any one time.
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
						Time to show 'em the might of the Arataki Gang! For a time, Itto
						lets out his inner Raging Oni King, wielding his Oni King's Kanabou
						in battle.
						<br />
						This state has the following special properties:
						<ul>
							<li>
								Converts Itto's Normal, Charged, and Plunging Attacks to{' '}
								<b className='text-geo'>Geo DMG</b>. This cannot be overridden.
							</li>
							<li>
								Increases Itto's Normal Attack SPD. Also increases his ATK based
								on his DEF.
							</li>
							<li>
								On hit, the 1st and 3rd strikes of his attack combo will each
								grant Arataki Itto 1 stack of Superlative Superstrength.
							</li>
							<li>Decreases Itto's Elemental and Physical RES by 20%.</li>
						</ul>
						The Raging Oni King state will be cleared when Itto leaves the
						field.
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
						When Arataki Itto uses consecutive Arataki Kesagiri, he obtains the
						following effects:
						<ul>
							<li>
								Each slash increases the ATK SPD of the next slash by 10%. Max
								ATK SPD increase is 30%.
							</li>
							<li>Increases his resistance to interruption.</li>
						</ul>
						These effects will be cleared once he stops performing consecutive
						slashes.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Arataki Kesagiri DMG is increased by 35% of Arataki Itto's DEF.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When a party member uses attacks to obtain wood from a tree, they
						have a 25% chance to obtain an additional log of wood.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
