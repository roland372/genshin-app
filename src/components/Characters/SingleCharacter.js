import React from 'react';

import { Link } from 'react-router-dom';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const SingleCharacter = props => {
	return (
		<tr className='text-light'>
			<td className='px-2'>{props.index}</td>
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
			<td>{props.ascension}</td>
		</tr>
	);
};

export default SingleCharacter;
