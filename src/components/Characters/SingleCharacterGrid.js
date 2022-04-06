import React from 'react';

import { Link } from 'react-router-dom';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const SingleCharacterGrid = props => {
	let rarityColor = '';
	props.rarity === 5
		? (rarityColor = 'rarity5bg')
		: (rarityColor = 'rarity4bg');

	return (
		<div className='col-xl-1 col-md-2 col-3 mt-3'>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<img
							src={props.elementImage}
							width='20px'
							alt=''
							className='me-1'
						/>
						<img src={props.weaponImage} width='20px' alt='' className='me-1' />
						{props.name}
					</Tooltip>
				}
			>
				<div>
					<Link
						className='link-info text-decoration-none'
						to={`characters/${props.url}`}
					>
						<img
							src={props.icon}
							width='100px'
							alt=''
							className={`img-fluid img-thumbnail ${rarityColor}`}
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
		</div>
	);
};

export default SingleCharacterGrid;
