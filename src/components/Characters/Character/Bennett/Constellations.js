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
				description="Fantastic Voyage's ATK increase no longer has an HP restriction, and gains an additional 20% of Bennett's Base ATK."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description="When Bennett's HP falls below 70%, his Energy Recharge is increased by 30%."
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Passion Overload by 3.</div>
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
							Using a Normal Attack when executing the second attack of Passion
							Overload's Charge Level 1 allows an additional attack to be
							performed.
						</div>
						<div>
							This additional attack does 135% of the second attack's DMG.
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
						<div>Increases the Level of Fantastic Voyage by 3.</div>
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
						Sword, Claymore, or Polearm-wielding characters inside Fantastic
						Voyage's radius gain a 15%
						<b className='text-pyro'> Pyro DMG Bonus </b>
						and their weapons are infused with
						<b className='text-pyro'> Pyro</b>.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
