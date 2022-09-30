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
						When a character protected by Thoma's own Blazing Barrier (Thoma
						excluded) is attacked, Thoma's own Blazing Blessing CD is decreased
						by 3s, while his own Crimson Ooyoroi's CD is decreased by 3s.
						<br />
						This effect can be triggered once every 20s.
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={<div>Crimson Ooyoroi's duration is increased by 3s.</div>}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						Increases the Level of Blazing Blessing by 3.
						<br />
						Maximum upgrade level is 15.
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description={
					<div>
						After using Crimson Ooyoroi, 15 Energy will be restored to Thoma.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						Increases the Level of Crimson Ooyoroi by 3.
						<br />
						Maximum upgrade level is 15.
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description={
					<div>
						When a Blazing Barrier is obtained or refreshed, the DMG dealt by
						all party members' Normal, Charged, and Plunging Attacks is
						increased by 15% for 6s.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
