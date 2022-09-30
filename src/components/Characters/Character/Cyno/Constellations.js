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
						After using Sacred Rite: Wolf's Swiftness, Cyno's Normal Attack SPD
						will be increased by 20% for 10s. If the Judication effect of his
						Passive Talent Featherfall Judgment is triggered during Secret Rite:
						Chasmic Soulfarer, the duration of this increase will be refreshed.
						<br />
						You need to unlock the Passive Talent "Featherfall Judgement."
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						When Cyno's Normal Attacks hit opponents, his <b className='text-electro'> Electro DMG Bonus</b>   will
						increase by 10% for 4s. This effect can be triggered once every
						0.1s. Max 5 stacks.
					</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>
							Increases the Level of Sacred Rite: Wolf's Swiftness by 3.
						</div>
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
						When Cyno is in the Pactsworn Pathclearer state triggered by Sacred
						Rite: Wolf's Swiftness, after he triggers <b className='text-electro'> Electro-Charged</b>,
						Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or an
						<b className='text-electro'> Electro</b> Swirl reaction, he will restore 3 Elemental Energy for all
						nearby party members (except himself.)
						<br />
						This effect can occur 5 times within one use of Sacred Rite: Wolf’s
						Swiftness.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>
							Increases the Level of Secret Rite: Chasmic Soulfarer by 3.
						</div>
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
						After using Sacred Rite: Wolf's Swiftness or triggering the
						Judication effect of the Passive Talent "Featherfall Judgment," Cyno
						will gain 4 stacks of the "Day of the Jackal" effect. When he hits
						opponents with Normal Attacks, he will consume 1 stack of "Day of
						the Jackal" to fire off one Duststalker Bolt.
						<br />
						"Day of the Jackal" lasts for 8s. Max 8 stacks. It will be canceled
						once Pactsworn Pathclearer ends.
						<br />A maximum of 1 Duststalker Bolt can be unleashed this way
						every 0.4s.
						<br />
						You must first unlock the Passive Talent "Featherfall Judgment."
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
