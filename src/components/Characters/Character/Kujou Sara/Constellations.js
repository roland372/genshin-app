import React from 'react';
import ConstellationsWrapper from '../../Constellations';
import Constellation from '../../Constellation';

const Constellations = props => {
	return (
		<ConstellationsWrapper title='Constellations'>
			<Constellation
				level='1'
				image={props.constellation1Image}
				name={props.data.constellations[0].name}
				description={
					<div>
						<div>
							When Tengu Juurai grant characters ATK Bonuses or hits opponents,
							the CD of Tengu Stormcall is decreased by 1s.
						</div>
						<div>This effect can be triggered once every 3s.</div>
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Unleashing Tengu Stormcall will leave a weaker Crowfeather at Kujou
						Sara's original position that will deal 30% of its original DMG.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Subjugation: Koukou Sendou by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='The number of Tengu Juurai: Stormcluster released by Subjugation: Koukou Sendou is increased to 6.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Tengu Stormcall by 3.</div>
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
						The
						<b className='text-electro'> Electro DMG </b>
						of characters who have had their ATK increased by Tengu Juurai has
						its Crit DMG increased by 60%.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
