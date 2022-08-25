import React from 'react';
import ConstellationsWrapper from '../../Constellations';
import Constellation from '../../Constellation';

const Constellations = props => {
	return (
		<ConstellationsWrapper>
			<Constellation
				level='1'
				image={props.constellation1Image}
				name={props.data.constellations[0].name}
				description="When in the party and not on the field, Collei's Energy Recharge is increased by 20%."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						<div>The Passive Talent Floral Sidewinder is changed to this:</div>
						<div>
							The Floral Ring will grant the character the Sprout effect from
							Floral Sidewinder upon return, dealing 40% of Collei's ATK as
							Dendro DMG to nearby opponents for 3s.
						</div>
						<div>
							From the moment of using Floral Brush to the moment when this
							instance of Sprout effect ends, if any of your party members
							triggers Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom,
							or Burgeon reactions, the Sprout effect will be extended by 3s.
						</div>
						<div>
							The Sprout effect can only be extended this way once. If another
							Sprout effect is triggered during its initial duration, the
							initial effect will be removed.
						</div>
						<div>
							Requires you to have unlocked the Floral Sidewinder Passive
							Talent.
						</div>
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Floral Brush by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description="Using Trump-Card Kitty will increase all nearby characters' Elemental Mastery by 60 for 12s (not including Collei herself)."
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Trump-Card Kitty by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description={
					<div>
						<div>
							When the Floral Ring hits, it will create a miniature
							Cuilein-Anbar that will deal 200% of Collei's ATK as Dendro DMG.
						</div>
						<div>
							Each Floral Brush can only create one such miniature
							Cuilein-Anbar.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
