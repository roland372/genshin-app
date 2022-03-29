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
				description="While in a Paramita Papilio state activated by Guide to Afterlife, Hu Tao's Charge Attacks do not consume Stamina."
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						<div>
							Increases the Blood Blossom DMG by an amount equal to 10% of Hu
							Tao's Max HP at the time the effect is applied.
						</div>
						<div>
							Additionally, Spirit Soother will also apply the Blood Blossom
							effect.
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
						<div>Increases the Level of Guide to Afterlife by 3.</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='4'
				image={props.constellation4Image}
				name={props.data.constellations[3].name}
				description='Upon defeating an enemy affected by a Blood Blossom that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s.'
			/>
			<Constellation
				level='5'
				image={props.constellation5Image}
				name={props.data.constellations[4].name}
				description={
					<div>
						<div>Increases the Level of Spirit Soother by 3.</div>
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
							Triggers when Hu Tao's HP drops below 25%, or when she suffers a
							lethal strike:
						</div>
						<div>
							Hu Tao will not fall as a result of the DMG sustained.
							Additionally, for the next 10s, all of her Elemental and Physical
							RES is increased by 200%, her CRIT Rate is increased by 100%, and
							her resistance to interruption is greatly increased.
						</div>
						<div>
							This effect triggers automatically when Hu Tao has 1 HP left.
						</div>
						<div>Can only occur once every 60s.</div>
					</div>
				}
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
