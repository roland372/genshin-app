import React from 'react';
import CardComponent from '../../../../Layout/CardComponent';

import AttributeScaling from '../../../Talents/AttributeScaling';
import NormalAttack from '../../../Talents/NormalAttack';
import ElementalSkill from '../../../Talents/ElementalSkill';
import ElementalBurst from '../../../Talents/ElementalBurst';
import PassiveTalent from '../../../Talents/PassiveTalent';

const Talents = props => {
	let normalAttack = props.data.skillTalents[0].attributeScaling;
	let elementalSkill = props.data.skillTalents[1].attributeScaling;
	let elementalBurst = props.data.skillTalents[2].attributeScaling;
	return (
		<CardComponent title='Talents'>
			<NormalAttack
				name={props.data.skillTalents[0].name}
				image={props.normalAttackImage}
				normalAttack={<div>Performs up to 5 rapid strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to unleash 2 rapid sword
						strikes.
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
						<div>
							You disgorge a meteorite from the depths of the earth, dealing
							<b className='text-geo'> AoE Geo DMG</b>.
						</div>
						<div>
							The meteorite is considered a
							<b className='text-geo'> Geo Construct</b>, and can be climbed or
							used to block attacks.
						</div>
						<br />
						<b>Hold</b>
						<div>This skill's positioning may be adjusted.</div>
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
							Energizing the Geo deep underground, you set off expanding
							shockwaves.
						</div>
						<div>
							Launches surrounding opponents back and deals
							<b className='text-geo'> AoE Geo DMG</b>.
						</div>
						<div>A stone wall is erected at the edges of the shockwave.</div>
						<div>
							The stone wall is considered a
							<b className='text-geo'> Geo Construct</b>, and may be used to
							block attacks.
						</div>
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
				description={<div>Reduces Starfell Sword's CD by 2s.</div>}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						The final hit of a Normal Attack combo triggers a collapse, dealing
						60% of ATK as
						<b className='text-geo'> AoE Geo DMG</b>.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
