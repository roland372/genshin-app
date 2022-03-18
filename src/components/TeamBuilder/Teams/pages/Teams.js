import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../Layout/Container';
import CardComponent from '../../../Layout/CardComponent';
import axios from 'axios';

const Teams = () => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		loadTeams();
	}, []);

	const loadTeams = async () => {
		const result = await axios.get('http://localhost:3003/team-builder/teams');
		setTeams(result.data.reverse());
	};

	const deleteTeam = async id => {
		await axios.delete(`http://localhost:3003/team-builder/teams/${id}`);
		loadTeams();
	};
	return (
		<Container>
			<CardComponent title='Team Builder'>
				<Link className='btn btn-outline-light' to='/team-builder/teams/add/'>
					Add Team
				</Link>
				<div className='mx-2'>
					<table className='table border shadow text-white'>
						<thead className='thead-dark'>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Name</th>
								<th scope='col'>Teams</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{teams.map((team, index) => (
								<tr key={index}>
									<th scope='row'>{index + 1}</th>
									<td>{team.name}</td>
									<td>{team.teamMembers}</td>
									<td>
										<Link
											className='btn btn-primary mr-2'
											to={`/team-builder/teams/${team.id}`}
										>
											View
										</Link>
										<Link
											className='btn btn-outline-primary mr-2'
											to={`/team-builder/teams/edit/${team.id}`}
										>
											Edit
										</Link>
										<button
											className='btn btn-danger'
											onClick={() => deleteTeam(team.id)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Teams;
