import React from 'react';
import CardComponent from '../Layout/CardComponent';
import data from '../../assets/data/Characters/Amber.json';

const CharacterStats = props => {
	let ascensionStat = data.ascensionStat;
	return (
		<CardComponent title='Stats'>
			<div className='table-responsive mx-2'>
				<table
					className='table table-sm table-dark table-striped align-middle text-center'
					style={{ minWidth: '700px' }}
				>
					<thead>
						<tr>
							<th scope='col'>Ascension</th>
							<th scope='col'>Level</th>
							<th scope='col'>Base HP</th>
							<th scope='col'>Base ATK</th>
							<th scope='col'>Base DEF</th>
							<th scope='col'>CRIT Rate</th>
							<th scope='col'>CRIT DMG</th>
							<th scope='col'>{ascensionStat}</th>
						</tr>
					</thead>
					<tbody>
						{props.data.stats.map(stat => {
							return (
								<tr>
									<th>{stat.ASC}</th>
									<td>{stat.LVL}</td>
									<td>{stat.HP}</td>
									<td>{stat.ATK}</td>
									<td>{stat.DEF}</td>
									<td>{stat['CRIT Rate']}</td>
									<td>{stat['CRIT DMG']}</td>
									<td>{stat.ascensionStat}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</CardComponent>
	);
};

export default CharacterStats;
