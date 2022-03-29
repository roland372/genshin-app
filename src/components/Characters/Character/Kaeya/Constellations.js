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
				description={
					<div>
						The CRIT Rate of Kaeya's Normal and Charge Attacks against opponents
						affected by
						<b className='text-cryo'> Cryo </b>
						is increased by 15%.
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Every time Glacial Waltz defeats an opponent during its duration,
						its duration is increased by 2.5s, up to a maximum of 15s.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Frostgnaw by 3.</div>
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
						<div>Triggers automatically when Kaeya's HP falls below 20%:</div>
						<div>
							Creates a shield that absorbs damage equal to 30% of Kaeya's Max
							HP. Lasts for 20s.
						</div>
						<div>
							This shield absorbs
							<b className='text-cryo'> Cryo DMG </b>
							with 250% efficiency.
						</div>
						<div>Can only occur once every 60s.</div>
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Glacial Waltz by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description='Glacial Waltz will generate 1 additional icicle, and will regenerate 15 Energy when cast.'
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
