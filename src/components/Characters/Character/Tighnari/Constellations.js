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
				description="Fires 2 arrows per Aimed Shot. The second arrow deals 20% of
            the first arrow's DMG."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						<div>
							Baron Bunny, new and improved! Hitting Baron Bunny's foot with a
							fully-charged Aimed Shot manually detonates it.
						</div>
						<div>
							Explosion via manual detonation deals 200% additional DMG.
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
						<div>Increases the Level of Fiery Rain by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description="Decreases Explosive Puppet's CD by 20%. Adds 1 additional charge."
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Explosive Puppet by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="Fiery Rain increases all party members' Movement SPD by 15% and ATK by 15% for 10s."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
