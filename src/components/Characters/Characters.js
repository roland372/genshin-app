import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
} from 'react-router-dom';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import SingleCharacter from './SingleCharacter';
import Amber from './Character/Amber/Amber';
import Beidou from './Character/Beidou/Beidou';

import data from '../../assets/data/Characters/characters.json';

const Characters = props => {
	// const { url } = useRouteMatch;
	// console.log('url', url);
	return (
		<Container>
			<CardComponent title='Playable Characters'>
				<div className='table-responsive mx-3'>
					<table
						className='table table-striped table-dark align-middle'
						style={{ minWidth: '700px' }}
					>
						<thead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Icon</th>
								<th scope='col'>Name</th>
								<th scope='col'>Rarity</th>
								<th scope='col'>Element</th>
								<th scope='col'>Weapon</th>
								<th scope='col'>Sex</th>
								<th scope='col'>Nation</th>
								<th scope='col'>HP</th>
								<th scope='col'>ATK</th>
								<th scope='col'>DEF</th>
								<th scope='col'>Ascension</th>
							</tr>
						</thead>
						<tbody>
							{data.characters.map((character, index) => {
								return (
									<SingleCharacter
										index={index + 1}
										icon={character.image}
										name={character.name}
										url={character.url}
										rarity={character.rarityImage}
										element={character.elementImage}
										weapon={character.weaponImage}
										sex={character.sex}
										nation={character.nation}
										HP={character.HP}
										ATK={character.ATK}
										DEF={character.DEF}
										ascension={character.ascension}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Characters;
