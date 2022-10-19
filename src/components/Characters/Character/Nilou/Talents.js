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
				normalAttack={<div>Performs up to 3 consecutive sword strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to perform a twirling slash.
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
						Nilou will enter the Pirouette state, dealing Hydro DMG to nearby
						opponents based on her Max HP. While she is in the Pirouette state,
						Nilou's Normal Attacks and Elemental Attacks will cause her to enter
						the Sword Dance and Whirling Steps stances respectively, causing DMG
						she deals to be converted to Hydro DMG that cannot be overridden and
						that is considered Elemental Skill DMG. In these stances, Nilou's
						third dance step will end Pirouette, and has the following effects:
						<ul>
							<li>
								Sword Dance: unleashes a Luminous Illusion that deals Hydro DMG
								to opponents it touches and grants Nilou the Lunar Prayer
								effect. This effect converts Nilou's Normal Attacks into Sword
								Dance techniques, and her final hit will unleash a Luminous
								Illusion.
							</li>
							<li>
								Whirling Steps: Nilou unleashes a Whirling Water Wheel that
								deals AoE Hydro DMG and creates a Tranquility Aura that follows
								your active character around and applies Wet to opponents within
								its AoE.
							</li>
						</ul>
						<div>
							Nilou is unable to perform Charged Attacks when under the effect
							of Pirouette or Lunar Prayer. These effects will be removed once
							she leaves the field.
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
						Begins the dance of faraway dreams and springs that hear, causing a
						Lotus of Distant Waters to bloom, dealing AoE Hydro DMG based on
						Nilou's Max HP and applying the Lingering Aeon effect to all
						opponents hit. After an interval, opponents affected by Lingering
						Aeon will take Hydro DMG.
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
						When all characters in the party are all Dendro or Hydro, and there
						are at least one Dendro character and one Hydro character:
						<br />
						The completion of the third dance step of Nilou's Dance of
						Haftkarsvar will grant all nearby characters the Golden Chalice's
						Bounty for 30s.
						<br />
						Characters under the effect of Golden Chalice's Bounty will increase
						the Elemental Mastery of all nearby characters by 100 for 10s
						whenever they are hit by Dendro attacks. Also, triggering the Bloom
						reaction will create Bountiful Cores instead of Dendro Cores.
						<br />
						Such Cores will burst very quickly after being created, and they
						have larger AoEs.
						<br />
						Bountiful Cores cannot trigger Hyperbloom or Burgeon, and they share
						an upper numerical limit with Dendro Cores. Bountiful Core DMG is
						considered DMG dealt by Dendro Cores produced by Bloom.
						<br />
						Should the party not meet the conditions for this Passive Talent,
						any existing Golden Chalice's Bounty effects will be canceled.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Every 1,000 points of Nilou's Max HP above 30,000 will cause the DMG
						dealt by Bountiful Cores created by characters affected by Golden
						Chalice's Bounty to increase by 9%.
						<br />
						The maximum increase in Bountiful Core DMG that can be achieved this
						way is 400%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Perfect Cooking is achieved on Food with Adventure-related
						effects, there is a 12% chance to obtain double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
