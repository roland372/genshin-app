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
						Dance of Haftkarsvar will be enhanced as follows:
						<ul>
							<li>Luminous Illusion DMG is increased by 65%.</li>
							<li>The Tranquility Aura's duration is extended by 6s.</li>
						</ul>
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
							After characters affected by the Golden Chalice's Bounty deal
							Hydro DMG to an opponent, that opponent's Hydro RES will be
							decreased by 35% for 10s. After a triggered Bloom reaction deals
							DMG to opponents, their Dendro RES will be decreased by 35% for
							10s.
						</div>
						<div>
							You need to have unlocked the "Court of Dancing Petals" Talent.
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
						<div>
							Increases the Level of Dance of Abzendegi: Distant Dreams,
							Listening Spring by 3.
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
						After the third dance step of Dance of Haftkarsvar's Pirouette hits
						opponents, Nilou will gain 15 Elemental Energy, and DMG from her
						Dance of Abzendegi: Distant Dreams, Listening Spring will be
						increased by 50% for 8s.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Dance of Haftkarsvar by 3.</div>
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
						For every 1,000 points of Max HP, Nilou's CRIT Rate and CRIT DMG
						will increase by 0.6% and 1.2% respectively.
						<br />
						The maximum increase in CRIT Rate and CRIT DMG via this method is
						30% and 60% respectively.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
