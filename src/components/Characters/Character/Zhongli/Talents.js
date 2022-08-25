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
				normalAttack={<div>Performs up to 6 consecutive spear strikes.</div>}
				chargedAttack={
					<div>
						Consumes a certain amount of Stamina to lunge forward, causing stone
						spears to fall along his path.
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
							Every mountain, rock and inch of land is filled with the power of
							Geo, but those who can wield such powers freely are few and far
							between.
						</div>
						<br />
						<b>Press</b>
						<div>Commands the power of earth to create a Stone Stele.</div>
						<br />
						<b>Hold</b>
						<div>
							Causes nearby Geo energy to explode, causing the following
							effects:
						</div>
						<ul>
							<li>
								If their maximum number hasn't been reached, creates a Stone
								Stele.
							</li>
							<li>
								Creates a shield of jade. The shield's DMG Absorption scales
								based on Zhongli's Max HP.
							</li>
							<li>
								<b className='text-geo'>Deals AoE Geo DMG</b>.
							</li>
							<li>
								If there are nearby targets with the
								<b className='text-geo'> Geo element</b>, it will drain a large
								amount of
								<b className='text-geo'> Geo element </b>
								from a maximum of 2 such targets. This effect does not cause
								DMG.
							</li>
						</ul>
						<b>Stone Stele</b>
						<div>
							When created, deals
							<b className='text-geo'> AoE Geo DMG</b>.
						</div>
						<div>
							Additionally, it will intermittently resonate with other nearby
							<b className='text-geo'> Geo constructs</b>, dealing
							<b className='text-geo'> Geo DMG </b>
							to surrounding opponents.
						</div>
						<div>
							The Stone Stele is considered a
							<b className='text-geo'> Geo construct </b>
							that can both be climbed and used to block attacks.
						</div>
						<div>
							Only one Stele created by Zhongli himself may initially exist at
							any one time.
						</div>
						<br />
						<b>Jade Shield</b>
						<div>
							Possesses 150% DMG Absorption against all Elemental and Physical
							DMG.
						</div>
						<div>
							Characters protected by the Jade Shield will decrease the
							Elemental RES and Physical RES of opponents in a small AoE by 20%.
							This effect cannot be stacked.
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
							Brings a falling meteor down to earth, dealing massive
							<b className='text-geo'> Geo DMG </b>
							to opponents caught in its AoE and applying the
							<b className='text-geo'> Petrification </b>
							status to them.
						</div>
						<br />
						<b>Petrification</b>
						<div>
							Opponents affected by the
							<b className='text-geo'> Petrification </b>
							status cannot move.
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
						<div>When the Jade Shield takes DMG, it will Fortify:</div>
						<li>Fortified characters have 5% increased Shield Strength.</li>
						<div>
							Can stack up to 5 times, and lasts until the Jade Shield
							disappears.
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
						<div>Zhongli deals bonus DMG based on his Max HP:</div>
						<ul>
							<li>
								Normal Attack, Charged Attack, and Plunging Attack DMG is
								increased by 1.39% of Max HP.
							</li>
							<li>
								Dominus Lapidis Stone Stele, resonance, and hold DMG is
								increased by 1.9% of Max HP.
							</li>
							<li>
								Planet Befall deals additional DMG equal to 33% of Zhongli's Max
								HP.
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
						Refunds 15% of the ores used when crafting Polearm-type weapons.
					</div>
				}
			/>
		</CardComponent>
	);
};

export default Talents;
