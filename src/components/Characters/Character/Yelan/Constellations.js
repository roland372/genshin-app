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
				description='Lingering Lifeline gains 1 additional charge.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When Exquisite Throw conducts a coordinated attack, it will fire an
						additional water arrow that will deal 14% of Yelan's Max HP as <b className='text-hydro'> Hydro DMG</b>.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>ncreases the Level of Depth-Clarion Dice by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description="Increases all party members' Max HP by 10% for 25s for every opponent marked by Lifeline when the Lifeline explodes. A maximum increase of 40% Max HP can be attained in this manner."
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Lingering Lifeline by 3.</div>
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
							After using Depth-Clarion Dice, Yelan will enter the Mastermind
							state.
						</div>
						<div>
							In this state, all of Yelan's Normal Attacks will be special
							Breakthrough Barbs. These Breakthrough Barbs will have similar
							abilities to normal ones and the DMG dealt will be considered
							Charged Attack DMG, dealing 156% of a normal Breakthrough Barb's
							DMG.
						</div>
						<br />
						<div>
							The Mastermine state lasts 20s and will be cleared after Yelan
							fires 5 arrows.
						</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;



