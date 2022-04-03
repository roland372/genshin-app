import React from 'react';

// <----- character components ----->
import Character from '../../Character';
import Talents from './Talents';
import Constellations from './Constellations';

// <----- character data ----->
import data from '../../../../assets/data/Characters/Lisa.json';

const Lisa = () => {
	const { skillTalents, passiveTalents, constellations } = data;

	return (
		<Character data={data}>
			<Talents
				data={data}
				normalAttackImage={skillTalents[0].image}
				elementalSkillImage={skillTalents[1].image}
				elementalBurstImage={skillTalents[2].image}
				passiveTalent1Image={passiveTalents[0].image}
				passiveTalent2Image={passiveTalents[1].image}
				passiveTalent3Image={passiveTalents[2].image}
			/>
			<Constellations
				data={data}
				constellation1Image={constellations[0].image}
				constellation2Image={constellations[1].image}
				constellation3Image={constellations[2].image}
				constellation4Image={constellations[3].image}
				constellation5Image={constellations[4].image}
				constellation6Image={constellations[5].image}
			/>
		</Character>
	);
};

export default Lisa;
