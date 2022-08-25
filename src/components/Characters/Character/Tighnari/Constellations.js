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
				description="Tighnari's Charged Attack CRIT Rate is increased by 15%."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When there are opponents within the Vijnana-Khanda Field created by
						Vijnana-Phala Mine, Tighnari gains 20% Dendro DMG Bonus.
						<br />
						The effect will last up to 6s if the field's duration ends or if it
						no longer has opponents within it.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Fashioner's Tanglevine Shaft by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description="When Fashioner's Tanglevine Shaft is unleashed, all nearby party members gain 60 Elemental Mastery for 8s. If the Fashioner's Tanglevine Shaft triggers a Burning, Bloom, Quicken, or Spread reaction, their Elemental Mastery will be further increased by 60. This latter case will also refresh the buff state's duration."
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Vijnana-Phala Mine by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="Wreath Arrow's charging time is decreased by 0.9s, and will produce 1 additional Clusterbloom Arrow upon hit. This arrow deals 150% of Tighnari's ATK as DMG."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
