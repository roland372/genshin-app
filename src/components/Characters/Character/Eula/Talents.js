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
				normalAttack={<div>Perform up to 5 consecutive strikes.</div>}
				chargedAttack={
					<div>
						Drains Stamina over time to perform continuous slashes. At the end
						of the sequence, perform a more powerful slash.
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
						<div>Sharp frost, swift blade.</div>
						<br />
						<b>Press</b>
						<div>
							Slashes swiftly, dealing
							<b className='text-cryo'> Cryo DMG</b>.
						</div>
						<div>
							When it hits an opponent, Eula gains a stack of Grimheart that
							stacks up to 2 times. These stacks can only be gained once every
							0.3s.
						</div>
						<br />
						<b>Grimheart</b>
						<div>Increases Eula's resistance to interruption and DEF.</div>
						<br />
						<b>Hold</b>
						<div>
							Wielding her sword, Eula consumes all the stacks of Grimheart and
							lashes forward, dealing
							<b className='text-cryo'> AoE Cryo DMG </b>
							to opponents in front of her.
						</div>
						<div>
							If Grimheart stacks are consumed, surrounding opponents will have
							their
							<b> Physical RES </b>
							and
							<b className='text-cryo'> Cryo RES </b>
							decreased.
						</div>
						<div>
							Each consumed stack of Grimheart will be converted into an
							Icewhirl Brand that deals
							<b className='text-cryo'> Cryo DMG </b>
							to nearby opponents.
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
							Brandishes her greatsword, dealing
							<b className='text-cryo'> Cryo DMG </b>
							to nearby opponents and creating a Lightfall Sword that follows
							her around for a duration of up to 7s.
						</div>
						<div>
							While present, the Lightfall Sword increases Eula's resistance to
							interruption. When Eula's own Normal Attack, Elemental Skill, and
							Elemental Burst deal DMG to opponents, they will charge the
							Lightfall Sword, which can gain an energy stack once every 0.1s.
						</div>
						<div>
							Once its duration ends, the Lightfall Sword will descend and
							explode violently, dealing
							<b> Physical DMG </b>
							to nearby opponents.
						</div>
						<div>
							This DMG scales on the number of energy stacks the Lightfall Sword
							has accumulated.
						</div>
						<div>
							If Eula leaves the field, the Lightfall Sword will immediately
							explode.
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
				description={
					<div>
						If 2 stacks of Grimheart are consumed upon unleashing the Holding
						Mode of Icetide Vortex, a Shattered Lightfall Sword will be created
						that will explode immediately, dealing 50% of the basic Physical DMG
						dealt by a Lightfall Sword created by Glacial Illumination.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[1].name}
				image={props.passiveTalent2Image}
				unlocked='Unlocked at Ascension 4'
				description={
					<div>
						When Glacial Illumination is cast, the CD of Icetide Vortex is reset
						and Eula gains 1 stack of Grimheart.
					</div>
				}
			/>
			<PassiveTalent
				name={props.data.passiveTalents[2].name}
				image={props.passiveTalent3Image}
				unlocked='Unlocked Automatically'
				description={
					<div>
						When Eula crafts Character Talent Materials, she has a 10% chance to
						receive double the product.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
