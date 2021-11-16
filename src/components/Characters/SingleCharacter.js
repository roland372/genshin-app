import React from 'react';
import { Link } from 'react-router-dom';

const SingleCharacter = props => {
	// const { url } = useRouteMatch;
	// console.log('url', url);

	return (
		<tr>
			<td>{props.index}</td>
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
				<img src={props.rarity} width='60px' alt='' />
			</td>
			<td>
				<img src={props.element} width='50px' alt='' />
			</td>
			<td>
				<img src={props.weapon} width='50px' alt='' />
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
