import React from 'react';
import CardComponent from '../Layout/CardComponent';

const CharacterStats = props => {
	return (
		<CardComponent title='Stats'>
			<div className='table-responsive mx-2 rounded'>
				<table
					id='table-striped'
					className='table table-sm dark-blue-medium text-light table-striped align-middle table-borderless'
					style={{ minWidth: '700px' }}
				>
					<thead className='dark-blue'>
						<tr className='text-light'>
							<th scope='col'>Ascension</th>
							<th scope='col'>Level</th>
							<th scope='col'>Base HP</th>
							<th scope='col'>Base ATK</th>
							<th scope='col'>Base DEF</th>
							<th scope='col'>CRIT Rate</th>
							<th scope='col'>CRIT DMG</th>
							<th scope='col'>{props.ascensionStat}</th>
						</tr>
					</thead>
					<tbody>
						{props.data.stats.map((stat, index) => {
							return (
								<tr key={index} className='text-light'>
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
