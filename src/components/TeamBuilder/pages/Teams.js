import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import TeamDataService from '../services/team.services';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Characters from '../components/Characters';
import CharactersHeading from '../components/CharactersHeading';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

import { useUserAuth } from '../../../context/UserAuthContext';
import Loader from '../../Layout/Loader';

const Teams = props => {
	useDocumentTitle('Team Builder');

	const { user } = useUserAuth();

	//* <----- Loading state ----->
	const [loading, setLoading] = useState(<Loader />);

	const teamDeletedNotification = () =>
		toast.success('Team Deleted', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const { filterCharacters } = props;

	const [teamsDatabase, setTeamsDatabase] = useState([]);

	useEffect(() => {
		user && getTeamsDatabase();
	}, [user]);

	const getTeamsDatabase = async () => {
		setLoading(true);
		const data = await TeamDataService.getAllTeams();
		setTeamsDatabase(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		setLoading(false);
	};

	const deleteTeam = async id => {
		await TeamDataService.deleteTeam(id);
		teamDeletedNotification();
		getTeamsDatabase();
	};

	// console.log(teamsLocalStorage);
	// console.log(teamsDatabase);

	// console.log(teamsLocalStorage);

	//* <----- Sort teams - display newest first ----->
	const sortedTeams =
		user && teamsDatabase.sort((a, b) => b.lastModified - a.lastModified);

	return (
		<Container>
			<CardComponent title='Team Builder'>
				<section className=''>
					{/* <pre>{JSON.stringify(teamsDatabase, undefined, 2)}</pre> */}
					<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1'>
						<Link className='btn btn-primary' to='/team-builder/teams/add/'>
							Add Team
						</Link>
					</div>
					<div className='mx-2'>
						<hr />
					</div>

					{loading ? (
						<Loader />
					) : (
						<section className='d-flex flex-wrap mx-2'>
							{user &&
								sortedTeams
									.filter(owner => owner.owner === user.uid)
									.map((team, index) => (
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
					)}
				</section>
			</CardComponent>
		</Container>
	);
};

export default Teams;
