import React from 'react';
import Container from '../../../Layout/Container';
import CardComponent from '../../../Layout/CardComponent';

// <----- character components ----->
import CharacterInfo from '../../CharacterInfo';
import Stats from '../../Stats';
import Talents from './Talents';
import TalentMaterials from '../../TalentMaterials';
import Constellations from './Constellations';
import Ascensions from '../../Ascensions';

// <----- character data ----->
import data from '../../../../assets/data/Characters/Arataki Itto.json';

const AratakiItto = () => {
	const {
		name,
		avatar,
		title,
		rarityImage,
		elementImage,
		weaponImage,
		sex,
		birthday,
		constellation,
		nation,
		affiliation,
		specialDish,
		description,
		talentBookImage,
		ascensionMaterial1,
		ascensionMaterial2,
		ascensionMaterial3,
		ascensionMaterial4,
		skillTalents,
		passiveTalents,
		constellations,
	} = data;
	return (
		<Container>
			<CardComponent title={name}>
				<CharacterInfo
					avatar={avatar}
					title={title}
					rarity={rarityImage}
					element={elementImage}
					weapon={weaponImage}
					sex={sex}
					birthday={birthday}
					constellation={constellation}
					nation={nation}
					affiliation={affiliation}
					specialDish={specialDish}
					description={description}
					talentBook={talentBookImage}
					ascensionMaterial1={ascensionMaterial1}
					ascensionMaterial2={ascensionMaterial2}
					ascensionMaterial3={ascensionMaterial3}
					ascensionMaterial4={ascensionMaterial4}
				/>
			</CardComponent>
			<Stats data={data} ascensionStat={data.ascensionStat} />
			<Talents
				data={data}
				normalAttackImage={skillTalents[0].image}
				elementalSkillImage={skillTalents[1].image}
				elementalBurstImage={skillTalents[2].image}
				passiveTalent1Image={passiveTalents[0].image}
				passiveTalent2Image={passiveTalents[1].image}
				passiveTalent3Image={passiveTalents[2].image}
			/>
			<TalentMaterials data={data} />
			<Constellations
				data={data}
				constellation1Image={constellations[0].image}
				constellation2Image={constellations[1].image}
				constellation3Image={constellations[2].image}
				constellation4Image={constellations[3].image}
				constellation5Image={constellations[4].image}
				constellation6Image={constellations[5].image}
			/>
			<Ascensions data={data} />
		</Container>
	);
};

export default AratakiItto;
