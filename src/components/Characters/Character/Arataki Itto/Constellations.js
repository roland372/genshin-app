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
						After using{' '}
						<b className='text-geo'>Royal Descent: Behold, Itto the Evil!</b>,
						Arataki Itto gains 2 stacks of Superlative Superstrength. After 1s,
						Itto will gain 1 stack of Superlative Superstrength every 0.5s for
						1.5s.
					</div>
				}
			/>
			<Constellation
				level='2'
				image={props.constellation2Image}
				name={props.data.constellations[1].name}
				description={
					<div>
						After using{' '}
						<b className='text-geo'>Royal Descent: Behold, Itto the Evil!</b>
						, each party member whose Element is Geo will decrease that skill's
						CD by 1.5s and restore 6 Energy to Arataki Itto.
						<br />
						CD can be decreased by up to 4.5s in this manner. Max 18 Energy can
						be restored in this manner.
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
							Increases the Level of{' '}
							<b className='text-geo'>Masatsu Zetsugi: Akaushi Burst!</b> by 3.
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
						When the Raging Oni King state caused by{' '}
						<b className='text-geo'>Royal Descent: Behold, Itto the Evil!</b>{' '}
						ends, all nearby party members gain 20% DEF and 20% ATK for 10s.
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
							Increases the Level of{' '}
							<b className='text-geo'>Royal Descent: Behold, Itto the Evil!</b>{' '}
							by 3.
						</div>
						<div>Maximum upgrade level is 15.</div>
					</div>
				}
			/>
			<Constellation
				level='6'
				image={props.constellation6Image}
				name={props.data.constellations[5].name}
				description="Arataki Itto's Charged Attacks deal +70% Crit DMG. Additionally, when he uses Arataki Kesagiri, he has a 50% chance to not consume stacks of Superlative Superstrength."
			/>
		</ConstellationsWrapper>
	);
};

export default Constellations;
