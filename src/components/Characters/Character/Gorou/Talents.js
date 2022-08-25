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
				normalAttack={<div>Perform up to 4 consecutive shots with a bow.</div>}
				chargedAttack={
					<div>
						Perform a more precise Aimed Shot with increased DMG.
						<br />
						While aiming, stone crystals will accumulate on the arrowhead. A
						fully charged crystalline arrow will deal
						<b className='text-geo'> Geo DMG</b>.
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
						Deals
						<b className='text-geo'> AoE Geo DMG </b>
						and sets up a General's War Banner.
						<br />
						<br />
						<b>General's War Banner</b>
						<br />
						Provides up to 3 buffs to active characters within the skill's AoE
						based on the number of <b className='text-geo'> Geo </b> characters
						in the party at the time of casting:
						<ul>
							<li>1 Geo character: Adds "Standing Firm" - DEF Bonus.</li>
							<li>
								2 Geo characters: Adds "Impregnable" - Increased resistance to
								interruption.
							</li>
							<li>
								3 Geo characters: Adds "Crunch" -{' '}
								<b className='text-geo'> Geo DMG Bonus</b>.
							</li>
						</ul>
						<b>Hold</b>
						<br />
						Adjust the location of the skill.
					</div>
				}
			>
				<AttributeScaling data={elementalSkill} />
			</ElementalSkill>
			<ElementalBurst
				name={props.data.skillTalents[2].name}
				image={props.elementalBurstImage}
				description={
					<p>
						Displaying his valor as a general, Gorou deals
						<b className='text-geo'> AoE Geo DMG</b> and creates a field known
						as General's Glory to embolden his comrades.
						<br />
						<b>General's Glory</b>
						<p>This field has the following properties:</p>
						<ul>
							<li>
								Like the General's War Banner created by Inuzaka All-Round
								Defense, provides buffs to active characters within the skill's
								AoE based on the number of <b className='text-geo'> Geo </b>{' '}
								characters in the party. Also moves together with your active
								character.
							</li>
							<li>
								Generates 1 Crystal Collapse every 1.5s that deals{' '}
								<b className='text-geo'> AoE Geo DMG </b>
								to 1 opponent within the skill's AoE.
							</li>
							<li>
								Pulls 1 elemental shard in the skill's AoE to your active
								character's position every 1.5s (elemental shards are created by
								Crystallize reactions).
							</li>
						</ul>
						If a General's War banner created by Gorou currently exists on the
						field when his ability is used, it will be destroyed. In addition,
						for the duration of General's Glory, Gorou's Elemental Skill
						"Inazuka All-Round Defense" will not create the General's War
						Banner.
						<br />
						If Gorou falls, the effects of General's Glory will be cleared.
					</p>
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
						After using Juuga: Forward Unto Victory, all nearby party members'
						DEF is increased by 25% for 12s.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Gorou receives the following DMG Bonuses to his attacks based on his
						DEF:
						<ul>
							<li>
								Inuzaka All-Round Defense: Skill DMG increased by 156% of DEF
							</li>
							<li>
								Juuga: Forward Unto Victory: Skill DMG and Crystal Collapse DMG
								increased by 15.6% of DEF
							</li>
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
						Displays the location of nearby resources unique to Inazuma on the
						mini-map.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
