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
						<div>Decreases Chihayaburu's CD by 10%.</div>
						<div>Using Kazuha Slash resets the CD of Chihayaburu.</div>
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
							The Autumn Whirlwind field created by Kazuha Slash has the
							following effects:
						</div>
						<ul>
							<li>
								Increases Kaedehara Kazuha's own Elemental Mastery by 200.
							</li>
							<li>
								Increases the Elemental Mastery of characters within the field
								by 200.
							</li>
						</ul>
						<div>
							The Elemental Mastery-increasing effects of this Constellation do
							not stack.
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
						<div>Increases the Level of Chihayaburu by 3.</div>
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
							When Kaedehara Kazuha's Energy is lower than 45, he obtains the
							following effects:
						</div>
						<ul>
							<li>
								Pressing or Holding Chihayaburu regenerates 3 or 4 Energy for
								Kaedehara Kazuha, respectively.
							</li>
							<li>
								When gliding, Kaedehara Kazuha regenerates 2 Energy per second.
							</li>
						</ul>
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Kazuha Slash by 3.</div>
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
						After using Chihayaburu or Kazuha Slash, Kaedehara Kazuha gains an
						<b className='text-anemo'> Anemo Infusion </b>
						for 5s. Additionally, each point of Elemental Mastery will increase
						the DMG dealt by Kaedehara Kazuha's Normal, Charged, and Plunging
						Attack by 0.2%.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
