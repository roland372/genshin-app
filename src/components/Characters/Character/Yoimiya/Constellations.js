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
						<div>
							The Aurous Blaze created by Ryuukin Saxifrage lasts for an extra
							4s.
						</div>
						<div>
							Additionally, when an opponent affected by Aurous Blaze is
							defeated within its duration, Yoimiya's ATK is increased by 20%
							for 20s.
						</div>
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						<div>
							When Yoimiya's
							<b className='text-pyro'> Pyro DMG </b>
							scores a CRIT Hit, Yoimiya will gain a 25%
							<b className='text-pyro'> Pyro DMG Bonus </b>
							for 6s.
						</div>
						<div>
							This effect can be triggered even when Yoimiya is not the active
							character.
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
						<div>Increase the Level of Niwabi Fire-Dance by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description="When Yoimiya's own Aurous Blaze triggers an explosion, Niwabi Fire-Dance's CD is decreased by 1.2."
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Ryuukin Saxifrage by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="During Niwabi Fire-Dance, Yoimiya's Normal Attacks have a 50% chance of firing an extra Kindling Arrow that deals 60% of its original DMG. This DMG is considered Normal Attack DMG."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
