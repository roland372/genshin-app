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
				description="Gyoei Narukami Kariyama Rite's AoE is increased by 50%."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>Grass Ring of Sanctification's duration is increased by 3s.</div>
				}
			/>
			<Constellation
				level='3'
				image={props.constellation3Image}
				name={props.data.constellations[2].name}
				description={
					<div>
						<div>Increases the Level of Sanctifying Ring by 3.</div>
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
						When the Normal, Charged, or Plunging Attacks of the character
						affected by Shinobu's Grass Ring of Sanctification hit opponents, a
						Thundergrass Mark will land on the opponent's position and deal
						<b className='text-electro'> AoE Electro DMG </b>
						based on 9.7% of Shinobu's Max HP.
						<br />
						This effect can occur once every 5s.
					</div>
				}
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Gyoei Narukami Kariyama Rite by 3.</div>
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
						When Kuki Shinobu takes lethal DMG, this instance of DMG will not
						take her down. This effect will automatically trigger when her HP
						reaches 1 and will trigger once every 60s.
						<br />
						When Shinobu's HP drops below 25%, she will gain 150 Elemental
						Mastery for 15s. This effect will trigger once every 60s.
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
