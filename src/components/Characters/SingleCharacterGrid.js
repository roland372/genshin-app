import React from 'react';

//? <----- Router ----->
import { Link } from 'react-router-dom';

//? <----- Components ----->
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion/dist/framer-motion';

const SingleCharacterGrid = props => {
	//* Animation variables
	const initial = { y: -10 };
	// const initialReverse = { y: 10 };
	const animate = { y: 0 };
	const delay = 0.1;
	const type = 'spring';
	const bounce = 0.5;
	const whileHover = { scale: 1.1 };

	let rarityColor = '';
	props.rarity === 5
		? (rarityColor = 'rarity5bg')
		: (rarityColor = 'rarity4bg');

	return (
		<motion.div
			className='col-xl-2 col-lg-2 col-md-3 col-4 mt-3'
			initial={initial}
			animate={animate}
			transition={{ delay: delay, type: type, bounce: bounce }}
			whileHover={whileHover}
			data-testid='character-container'
		>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						{/* <img
							src={props.elementImage}
							width='20px'
							alt=''
							className='me-1'
						/> */}
						{/* <img src={props.weaponImage} width='20px' alt='' className='me-1' /> */}
						{props.name}
					</Tooltip>
				}
			>
				<div className='position-relative'>
					<Link className='link-color' to={`characters/${props.url}`}>
						<img
							src={props.icon}
							// width='100px'
							alt={props.name}
							className={`img-fluid rounded ${rarityColor}`}
						/>
						<img
							src={props.elementImage}
							width='30px'
							alt={props.name}
							className='position-absolute top-0 start-0'
						/>
						<img
							src={props.weaponImage}
							width='30px'
							alt=''
							className='position-absolute top-0 end-0'
						/>
					</Link>
				</div>
			</OverlayTrigger>

			{/* <td>{props.index}</td>
			<td>
				<img src={props.icon} width='80px' alt='' />
			</td>
			<td>
				<Link
					className='link-info text-decoration-none'
					to={`characters/${props.url}`}
				>
					{props.name}
				</Link>
			</td>
			<td>
				<img src={props.rarityImage} alt='' />
			</td>
			<td>
				<OverlayTrigger
					placement='top'
					overlay={<Tooltip>{props.elementName}</Tooltip>}
				>
					<img src={props.elementImage} width='40px' alt='' />
				</OverlayTrigger>
			</td>
			<td>
				<OverlayTrigger
					placement='top'
					overlay={<Tooltip>{props.weaponName}</Tooltip>}
				>
					<img src={props.weaponImage} width='40px' alt='' />
				</OverlayTrigger>
			</td>
			<td>{props.sex}</td>
			<td>{props.nation}</td>
			<td>{props.HP}</td>
			<td>{props.ATK}</td>
			<td>{props.DEF}</td>
			<td>{props.ascension}</td> */}
		</motion.div>
	);
};

export default SingleCharacterGrid;
