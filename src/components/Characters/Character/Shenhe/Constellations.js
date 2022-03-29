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
				description='Spring Spirit Summoning can be used 1 more time.'
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						<div>Divine Maiden's Deliverance lasts for 6 seconds longer.</div>
						<div>
							Active characters within the skill's field deals 15% increased{' '}
							<b className='text-cryo'>Cryo</b> CRIT DMG.
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
						<div>Increases Level of Spring Spirit Summoning by 3.</div>
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
						When characters under the effect of Icy Quill applied by Shenhe
						triggers its DMG Bonus effects, Shenhe will gain a Skyfrost Mantra
						stack:
						<ul>
							<li>
								When Shenhe uses Spring Spirit Summoning, she will consume all
								stacks of Skyfrost Mantra, increasing the DMG of that Spring
								Spirit Summoning by 5% for each stack consumed.
							</li>
							<li>Max 50 stacks. Stacks last for 60s.</li>
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
						<div>Increases the Level of Divine Maiden's Deliverance by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="When characters trigger Icy Quill's effects using Normal and Charged Attack DMG, it does not count toward the Trigger Quota."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
