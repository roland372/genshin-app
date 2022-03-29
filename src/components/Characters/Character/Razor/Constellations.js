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
				description="Picking up an Elemental Orb or Particle increases Razor's DMG by 10% for 8s."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Increases CRIT Rate against opponents with less than 30% HP by 10%.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Lightning Fang by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='When casting Claw and Thunder (Press), opponents hit will have their DEF decreased by 15% for 7s.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Claw and Thunder by 3.</div>
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
							Every 10s, Razor's sword charges up, causing the next Normal
							Attack to release lightning that deals 100% of Razor's ATK as
							<b className='text-electro'> Electro DMG</b>.
						</div>
						<div>
							When Razor is not using Lightning Fang, a lightning strike on an
							opponent will grant Razor an Electro Sigil for Claw and Thunder.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
