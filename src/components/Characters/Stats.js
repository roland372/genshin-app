import React from 'react';

//? <----- Components ----->
import CardComponent from '../Layout/CardComponent';

const CharacterStats = props => {
	return (
		<CardComponent title='Stats'>
			<div className='table-responsive mx-2 rounded'>
				<table
					className='table table-sm bg-secondary-medium text-color table-striped align-middle table-borderless'
					style={{ minWidth: '700px' }}
				>
					<thead className='bg-primary-dark'>
						<tr className='text-color'>
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
								<tr key={index} className='text-color'>
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
