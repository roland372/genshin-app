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
				normalAttack={<div>Perform up to 4 consecutive shots with a bow.</div>}
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG.
						<br />
						While aiming, the power of Dendro will accumulate on the arrowhead
						before the arrow is fired. Has different effects based on how long
						the energy has been charged:
						<ul>
							<li>
								Charge Level 1: Tighnari fires a Dendro-infused arrow that deals
								Dendro DMG.
							</li>
							<li>
								Charge Level 2: Tighnari fires a Wreath Arrow that deals Dendro
								DMG. Upon hit, the Wreath Arrow will create 4 Clusterbloom
								Arrows that will track nearby opponents automatically and deal
								Dendro DMG.
							</li>
						</ul>
					</div>
				}
				plungingAttack={
					<div>
						Fires off a shower of arrows in mid-air before falling and striking
						the ground, dealing AoE DMG on impact.
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
						Tighnari throws a Vijnana Stormheart ahead of him that deals AoE
						Dendro DMG and creates a Vijnana-Khanda Field, which summons strange
						illusions to taunt enemies and draw their fire.
						<br />
						<br />
						Additionally, Tighnari gains the Vijnana Suffusion effect, which
						will decrease the Wreath Arrow's charging time by 2.4s. This effect
						will dissipate once the skill duration ends or after Tighnari has
						fired 3 Wreath Arrows.
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
						Combines the power of all seeds to fire 6 Tanglevine Shafts that can
						track opponents and deal Dendro DMG.
						<br />
						<br />
						After they hit, the Tanglevine Shafts will create a secondary wave
						of Tanglevine Shafts that can also track opponents and deal Dendro
						DMG on hit.
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
						After Tighnari fires a Wreath Arrow, his Elemental Mastery is
						increased by 50 for 4s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						For every point of Elemental Mastery Tighnari possesses, his Charged
						Attack and Fashioner's Tanglevine Shaft DMG are increased by 0.06%.
						<br />
						The maximum DMG Bonus obtainable this way is 60%.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						Displays the location of nearby resources unique to Sumeru on the
						mini-map.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
