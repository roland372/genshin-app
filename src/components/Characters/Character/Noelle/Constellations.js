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
				description="While Sweeping Time and Breastplate are both in effect, the chance of Breastplate's healing effects activating is increased to 100%."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						Decreases the Stamina Consumption of Noelle's Charged Attacks by 20%
						and increases her Charged Attack DMG by 15%.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Breastplate by 3.</div>
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
						When Breastplate's duration expires or it is destroyed by DMG, it
						will deal 400% ATK of
						<b className='text-geo'> Geo DMG </b>
						to surrounding opponents.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Sweeping Time by 3.</div>
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
							Sweeping Time increases Noelle's ATK by an additional 50% of her
							DEF.
						</div>
						<div>
							Additionally, every opponent defeated during the skill's duration
							adds 1s to the duration, up to 10s.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
