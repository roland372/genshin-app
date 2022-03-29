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
				description='Party members within the radius of Wake of Earth have their CRIT Rate increased by 10% and have increased resistance against interruption.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When the meteorite created by Starfell Sword is destroyed, it will
						also explode, dealing additional
						<b className='text-geo'> AoE Geo DMG </b>
						equal to the amount of damage dealt by Starfell Sword.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Wake of Earth by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description={
					<div>
						<div>
							The shockwave triggered by Wake of Earth regenerates 5 Energy for
							every opponent hit.
						</div>
						<div>
							A maximum of 25 Energy can be regenerated in this manner at any
							one time.
						</div>
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Starfell Sword by 3.</div>
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
						<div>The barrier created by Wake of Earth lasts 5s longer.</div>
						<div>The meteorite created by Starfell Sword lasts 10s longer.</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
