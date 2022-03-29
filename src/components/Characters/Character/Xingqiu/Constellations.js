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
				description='Increases the maximum number of Rain Swords by 1.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						<div>Extends the duration of Guhua Sword: Raincutter by 3s.</div>
						<div>
							Decreases the
							<b className='text-hydro'> Hydro RES </b>
							of opponents hit by sword rain attacks by 15% for 4s.
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
						<div>Increases the Level of Guhua Sword: Raincutter by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='Throughout the duration of Guhua Sword: Raincutter, the DMG dealt by Guhua Sword: Fatal Rainscreen is increased by 50%.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>
							Increases the Level of Guhua Sword: Fatal Rainscreen by 3.
						</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="Activating 2 of Guhua Sword: Raincutter's sword rain attacks greatly enhances the third sword rain attack. On hit, the third sword rain attack also regenerates 3 Energy for Xingqiu."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
