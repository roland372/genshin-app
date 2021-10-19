import React from 'react';
import Container from '../../../Layout/Container';
import CardComponent from '../../../Layout/CardComponent';

// <----- character components ----->
import CharacterInfo from '../../CharacterInfo';
import Stats from '../../../Characters/Stats';
import Talents from './Talents';
import TalentMaterials from '../../TalentMaterials';
import Constellations from './Constellations';
import Ascensions from './Ascensions';

// <----- character images ----->
import CharacterImage from '../../../../assets/Character_Amber_Avatar.png';
import Rarity from '../../../../assets/Icon_5_Stars.png';
import Element from '../../../../assets/Element_Anemo.png';
import WeaponIcon from '../../../../assets/Weapon-class-sword-icon.png';
import TalentBook from '../../../../assets/Item_Teachings_of_Freedom.png';

// <----- character data ----->
import data from '../../../../assets/data/Characters/Amber.json';

const Amber = () => {
	const {
		name,
		title,
		sex,
		birthday,
		constellation,
		nation,
		affiliation,
		specialDish,
		description,
	} = data;
	return (
		<Container>
			<CardComponent title={name}>
				<CharacterInfo
					image={CharacterImage}
					title={title}
					rarity={Rarity}
					element={Element}
					weapon={WeaponIcon}
					sex={sex}
					birthday={birthday}
					constellation={constellation}
					nation={nation}
					affiliation={affiliation}
					specialDish={specialDish}
					description={description}
					talentBook={TalentBook}
					ascensionMaterial1={WeaponIcon}
					ascensionMaterial2={WeaponIcon}
					ascensionMaterial3={WeaponIcon}
					ascensionMaterial4={WeaponIcon}
				/>
			</CardComponent>
			<Stats data={data} />
			<Talents
				normalAttackImage={TalentBook}
				elementalSkillImage={TalentBook}
				elementalBurstImage={TalentBook}
				passiveTalent1Image={TalentBook}
				passiveTalent2Image={TalentBook}
				passiveTalent3Image={TalentBook}
			/>
			<TalentMaterials
				talentBookImageBronze={TalentBook}
				talentBookImageSilver={TalentBook}
				talentBookImageGold={TalentBook}
				commonMaterialImageTier1={TalentBook}
				commonMaterialImageTier2={TalentBook}
				commonMaterialImageTier3={TalentBook}
				bossMaterialImage={TalentBook}
				crownImage={TalentBook}
				moraImage={TalentBook}
			/>
			<Constellations
				constellation1Image={TalentBook}
				constellation2Image={TalentBook}
				constellation3Image={TalentBook}
				constellation4Image={TalentBook}
				constellation5Image={TalentBook}
				constellation6Image={TalentBook}
			/>
			<Ascensions
				data={data}
				ascensionMaterial1Image={TalentBook}
				ascensionMaterial2Image={TalentBook}
				ascensionMaterial3Image={TalentBook}
				ascensionMaterial4Image={TalentBook}
				bossMaterialImage={TalentBook}
				localSpecialityImage={TalentBook}
				commonMaterial1Image={TalentBook}
				commonMaterial2Image={TalentBook}
				commonMaterial3Image={TalentBook}
			/>
		</Container>
	);
};

export default Amber;
