import React, { useState, useEffect } from 'react';

//? <----- Router ----->
import { Link } from 'react-router-dom';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Characters from '../components/Characters';
import CharactersHeading from '../components/CharactersHeading';
import { toast } from 'react-toastify';

const TeamsLocalStorage = props => {
	const { useDocumentTitle } = props;

	useDocumentTitle('Team Builder');

	const teamDeletedNotification = () =>
		toast.success('Team Deleted from Local Storage', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const { filterCharacters } = props;

	const getLocalStorage = () => {
		//* get list from local storage
		let teams = localStorage.getItem('teams');
		//* if list exists - is in local storage
		if (teams) {
			return JSON.parse(localStorage.getItem('teams'));
		}
		//* if list doesn't exists
		else {
			return [];
		}
	};

	let [teams, setTeams] = useState(getLocalStorage);

	const deleteTeam = id => {
		setTeams(teams.filter(team => team.id !== id));
		teamDeletedNotification();
	};

	useEffect(() => {
		localStorage.setItem('teams', JSON.stringify(teams));
	}, [teams]);

	return (
		<Container>
			<CardComponent title='Team Builder'>
				{/* <pre>{JSON.stringify(teamsDatabase, undefined, 2)}</pre> */}
				<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1'>
					<Link className='btn btn-primary' to='/team-builder/teams/add/'>
						Add Team
					</Link>
				</div>
				<div className='mx-2'>
					<hr />
				</div>
				<section className='d-flex flex-wrap mx-2'>
					{teams.map((team, index) => (
						<section
							key={index}
							className='border border-light rounded shadow-lg p-2 col-lg-4 col-md-6 col-sm-12'
						>
							<CharactersHeading heading={team.name} />
							<Characters
								filterCharacters={filterCharacters}
								array={team.teamMembers}
								heading='Team Members:'
							/>
							<div className='d-flex justify-content-start align-items-center ms-2 mt-2'>
								<Link
									className='btn btn-outline-primary mr-2'
									to={`/team-builder/teams/${team.id}`}
								>
									View
								</Link>
								<Link
									className='btn btn-outline-warning mr-2'
									to={`/team-builder/teams/edit/${team.id}`}
								>
									Edit
								</Link>
								<button
									className='btn btn-outline-danger'
									onClick={() => deleteTeam(team.id)}
								>
									Delete
								</button>
							</div>
						</section>
					))}
				</section>
			</CardComponent>
		</Container>
	);
};

export default TeamsLocalStorage;
