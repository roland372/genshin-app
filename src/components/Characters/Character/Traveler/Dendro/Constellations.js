import React from 'react';
import ConstellationsWrapper from '../../../Constellations';
import Constellation from '../../../Constellation';

const Constellations = props => {
	return (
		<ConstellationsWrapper>
			<Constellation
				level='1'
				image={props.constellation1Image}
				name={props.data.constellations[0].name}
				description='Palm Vortex pulls in opponents and objects within a 5m radius.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={<div>Increases Energy Recharge by 16%.</div>}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Gust Surge by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='Reduces DMG taken while casting Palm Vortex by 10%.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Palm Vortex by 3.</div>
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
							Targets who take DMG from Gust Surge have their Anemo RES
							decreased by 20%.
						</div>
						<div>
							If an Elemental Absorption occurred, then their
							<b className='text-anemo'> Anemo RES </b>
							towards the corresponding Element is also decreased by 20%.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
