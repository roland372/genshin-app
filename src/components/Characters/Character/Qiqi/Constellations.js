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
				description='When the Herald of Frost hits an opponent marked by a Fortune-Preserving Talisman, Qiqi regenerates 2 Energy.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Qiqi's Normal and Charge Attack DMG against opponents affected by
						<b className='text-cryo'> Cryo </b>
						is increased by 15%.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>
							Increases the Level of Adeptus Art: Preserver of Fortune by 3.
						</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='Targets marked by the Fortune-Preserving Talisman have their ATK decreased by 20%.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Adeptus Art: Herald of Frost by 3.</div>
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
							Using Adeptus Art: Preserver of Fortune revives all fallen party
							members nearby and regenerates 50% of their HP.
						</div>
						<div>This effect can only occur once every 15 mins.</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
