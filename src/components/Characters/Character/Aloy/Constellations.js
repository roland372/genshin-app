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
				description="The time has not yet come for this person's corner of the night sky to light up.
								"
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description="The time has not yet come for this person's corner of the night sky to light up."
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description="The time has not yet come for this person's corner of the night sky to light up."
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description="The time has not yet come for this person's corner of the night sky to light up."
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description="The time has not yet come for this person's corner of the night sky to light up."
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="The time has not yet come for this person's corner of the night sky to light up."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
