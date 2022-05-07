import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import useDimensions from 'react-cool-dimensions';

// <----- character components ----->
import CharacterInfo from './CharacterInfo';
import CharacterInfoSmall from './CharacterInfoSmall';
import Stats from './Stats';
import TalentMaterials from './TalentMaterials';
import Ascensions from './Ascensions';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Character = props => {
	const infoSection = useRef(null);
	const statsSection = useRef(null);
	const talentsSection = useRef(null);
	const talentMaterialsSection = useRef(null);
	const constellationsSection = useRef(null);
	const ascensionsSection = useRef(null);

	const gotoInfoSection = () =>
		window.scrollTo({
			top: infoSection.current.offsetTop - 150,
			behavior: 'smooth',
		});

	const gotoTalentsSection = () =>
		window.scrollTo({
			top: talentsSection.current.offsetTop - 50,
			behavior: 'smooth',
		});

	const gotoStatsSection = () =>
		window.scrollTo({
			top: statsSection.current.offsetTop - 50,
			behavior: 'smooth',
		});

	const gotoTalentMaterialsSection = () =>
		window.scrollTo({
			top: talentMaterialsSection.current.offsetTop - 50,
			behavior: 'smooth',
		});

	const gotoConstellationsSection = () =>
		window.scrollTo({
			top: constellationsSection.current.offsetTop - 50,
			behavior: 'smooth',
		});

	const gotoAscensionsSection = () =>
		window.scrollTo({
			top: ascensionsSection.current.offsetTop - 50,
			behavior: 'smooth',
		});

	const {
		name,
		avatar,
		card,
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
	} = props.data;

	useDocumentTitle(name);

	const { observe, width } = useDimensions({});

	return (
		<Container>
			<CardComponent title={name}>
				{/* <----- Back button -----> */}
				<section className='text-color'>
					<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1'>
						<Link className='btn btn-primary' to='/characters'>
							Back to Characters
						</Link>
					</div>
					<div className='mx-2'>
						<hr />
					</div>
				</section>
				{/* <----- Character info -----> */}
				<div ref={observe}>
					<div ref={infoSection}>
						{width < 671 ? (
							<CharacterInfoSmall
								card={card}
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
						) : (
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
						)}
					</div>
				</div>
			</CardComponent>

			{/* <----- Table of contents -----> */}
			<CardComponent title='Table of contents'>
				<div className='mx-1'>
					<button className='btn btn-warning m-1' onClick={gotoInfoSection}>
						Info
					</button>
					<button className='btn btn-warning m-1' onClick={gotoStatsSection}>
						Stats
					</button>
					<button className='btn btn-warning m-1' onClick={gotoTalentsSection}>
						Talents
					</button>
					<button
						className='btn btn-warning m-1'
						onClick={gotoTalentMaterialsSection}
					>
						Talent Materials
					</button>
					<button
						className='btn btn-warning m-1'
						onClick={gotoConstellationsSection}
					>
						Constellations
					</button>
					<button
						className='btn btn-warning m-1'
						onClick={gotoAscensionsSection}
					>
						Ascensions
					</button>
				</div>
			</CardComponent>

			{/* <----- Stats -----> */}
			<div ref={statsSection}>
				<Stats data={props.data} ascensionStat={props.data.ascensionStat} />
			</div>

			{/* <----- Talents -----> */}
			<div ref={talentsSection}>{props.children[0]}</div>

			{/* <----- Talent materials -----> */}
			<div ref={talentMaterialsSection}>
				<TalentMaterials data={props.data} />
			</div>

			{/* <----- Constellations -----> */}
			<div ref={constellationsSection}>{props.children[1]}</div>

			{/* <----- Ascensions -----> */}

			<div ref={ascensionsSection}>
				<Ascensions data={props.data} />
			</div>
		</Container>
	);
};

export default Character;
