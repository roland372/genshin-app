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
						With a flourish of your blade, you unleash a spray of razor-sharp
						leaves that go before you and deal <b className='text-dendro'> Dendro</b> DMG.
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
						Calling upon the might of the flora all around you, you create a Lea
						Lotus Lamp. This Lamp will deal continuous <b className='text-dendro'> Dendro</b> DMG to opponents
						within its AoE.
						<br />
						<br />
						<b>Lotuslight Transfiguration</b>
						<br />
						The Lea Lotus Lamp will undergo the following changes after it comes
						into contact with <b className='text-hydro'> Hydro</b>/<b className='text-electro'> Electro</b>/<b className='text-pyro'> Pyro</b>:
						<li>
							<b className='text-hydro'> Hydro</b>: the Lamp's AoE and the AoE of its attacks are increased.
						</li>
						<li><b className='text-electro'> Electro</b>: the Lamp's ATK SPD is increased.</li>
						<li>
							<b className='text-pyro'> Pyro</b>: the Lamp will explode after a short delay and then
							disappear, dealing  <b className='text-dendro'> AoE Dendro DMG</b>.
						</li>
						<br />
						The Lea Lotus Lamp can only undergo one Lotuslight Transfiguration
						in its duration.
						<br />
						<br />
						Only one Lamp created by the Traveler can exist at any one time.
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
						Lea Lotus Lamp will obtain one level of Overflowing Lotuslight every
						second it is on the field, increasing the Elemental Mastery of
						active character(s) within its AoE by 6. Overflowing Lotuslight has
						a maximum of 10 stacks.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						Every point of Elemental Mastery the Traveler possesses increases
						the DMG dealt by Razorgrass Blade by 0.15% and the DMG dealt by
						Surgent Manifestation by 0.1%.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;



