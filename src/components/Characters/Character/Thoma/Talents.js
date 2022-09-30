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
				normalAttack={<div>Performs up to four consecutive spear strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, dealing
						damage to opponents along the way.
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
						Thoma vaults forward with his polearm and delivers a flame-filled
						flying kick that deals  <b className='text-pyro'> AoE Pyro DMG</b>, while also summoning a
						defensive Blazing Barrier.
						<br />
						At the moment of casting, Thoma's Elemental Skill applies <b className='text-pyro'> Pyro</b> to
						himself.
						<br />
						The DMG Absorption of the Blazing Barrier scales off Thoma's Max HP.
						<br />
						The Blazing Barrier has the following traits:
						<ul>
							<li>Absorbs <b className='text-pyro'> Pyro DMG</b>  250% more effectively.</li>
							<li>
								When a new Blazing Barrier is obtained, the remaining DMG
								Absorption of an existing Blazing Barrier will stack and its
								duration will be refreshed.
							</li>
						</ul>
						The maximum DMG Absoprtion of the Blazing Barrier will not exceed a
						certain percentage of Thoma's Max HP.
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
						Thoma spins his polearm, slicing at his foes with roaring flames
						that deal  <b className='text-pyro'> AoE Pyro DMG</b>  and weave themselves into a Scorching
						Ooyoroi.
						<br />
						<br />
						<b>Scorching Ooyoroi</b>
						<br />
						While Scorching Ooyoroi is in effect, the active character's Normal
						Attacks will trigger Fiery Collapse, dealing  <b className='text-pyro'> AoE Pyro DMG</b>  and
						summoning a Blazing Barrier.
						<br />
						Fiery Collapse can be triggered once every 1s.
						<br />
						<br />
						Except for the amount of DMG they can absorb, the Blazing Barriers
						created in this way are identical to those created by Thoma's
						Elemental Skill, Blazing Blessing:
						<ul>
							<li>Absorbs <b className='text-pyro'> Pyro DMG</b>  250% more effectively.</li>
							<li>
								When a new Blazing Barrier is obtained, the remaining DMG
								Absorption of an existing Blazing Barrier will stack and its
								duration will be refreshed.
							</li>
						</ul>
						The maximum DMG Absorption of the Blazing Barrier will not exceed a
						certain percentage of Thoma's Max HP.
						<br />
						<br />
						If Thoma falls, the effects of Scorching Ooyoroi will be cleared.
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
						When your current active character obtains or refreshes a Blazing
						Barrier, this character's Shield Strength will increase by 5% for
						6s.
						<br />
						This effect can be triggered once every 0.3 seconds. Max 5 stacks.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						DMG dealt by Crimson Ooyoroi's Fiery Collapse is increased by 2.2%
						of Thoma's Max HP.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When you fish successfully in Inazuma, Thoma's help grants a 20%
						chance of scoring a double catch.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
