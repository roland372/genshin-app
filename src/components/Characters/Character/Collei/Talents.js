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
						Performs a more precise Aimed Shot with increased DMG.
						<br />
						While aiming, Dendro energy will accumulate on the arrowhead. A
						fully charged arrow will deal{' '}
						<b className='text-dendro'> Dendro DMG</b>.
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
							Throws out a Floral Ring that deals 1 instance of{' '}
							<b className='text-dendro'> Dendro DMG</b> to targets it comes
							into contact with.
						</div>
						<div>
							The Floral Ring will return after a set time, dealing{' '}
							<b className='text-dendro'> Dendro DMG </b>
							once again.
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
					<p>
						<div>Trusty Cuilein-Anbar comes to save the day!</div>
						<div>
							Throws the doll named Cuilein-Anbar, causing an explosion that
							deals{' '}
							<b className='text-dendro'>
								{' '}
								AoE <b className='text-dendro'> Dendro DMG</b>
							</b>
							, creating a Cuilein-Anbar Zone. Cuilein-Anbar will bounce around
							within this zone, dealing{' '}
							<b className='text-dendro'>
								{' '}
								AoE <b className='text-dendro'> Dendro DMG</b>
							</b>
							.
						</div>
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
						<div>
							If one of your party members has triggered Burning, Quicken,
							Aggravate, Spread, Bloom, Hyperbloom, or Burgeon reactions before
							the Floral Ring returns, it will grant the character the Sprout
							effect upon return, which will continuously deal{' '}
							<b className='text-dendro'> Dendro DMG </b>
							equivalent to 40% of Collei's ATK to nearby opponents for 3s.
						</div>
						<div>
							If another Sprout effect is triggered during its initial duration,
							the initial effect will be removed. DMG dealt by Sprout is
							considered Elemental Skill DMG.
						</div>
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
							When a character within the Cuilein-Anbar Zone triggers Burning,
							Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon
							reactions, the Zone's duration will be increased by 1s.
						</div>
						<div>A single Trump-Card Kitty can be extended by up to 3s.</div>
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
							Decreases gliding Stamina consumption for your own party members
							by 20%.
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
