import React, { useState, useEffect } from 'react';

//? <----- Router ----->
import { Link } from 'react-router-dom';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Characters from '../components/Characters';
import CharactersHeading from '../components/CharactersHeading';
import Loader from '../../Layout/Loader';
import { Modal } from 'react-bootstrap';
import ScrollToTopRouter from '../../Layout/ScrollToTopRouter';
import { toast } from 'react-toastify';

const Teams = props => {
	const { user, TeamDataService, useDocumentTitle } = props;
	useDocumentTitle('Team Builder');

	//* <----- Loading state ----->
	const [loading, setLoading] = useState(<Loader />);

	//* <----- TeamId state ----->
	const [teamId, setTeamId] = useState('');

	//* <----- Modal state ----->
	const [show, setShow] = useState(false);

	//* <----- Modal functions ----->
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				<ScrollToTopRouter />
				<Modal show={show} onHide={handleClose}>
					<Modal.Header
						closeButton
						closeVariant='white'
						className='bg-primary-light text-color'
					>
						<Modal.Title>Deleting Team</Modal.Title>
					</Modal.Header>
					<Modal.Body className='bg-primary-dark text-color'>
						Are you sure you want to delete selected team?
					</Modal.Body>
					<Modal.Footer className='bg-primary-dark text-color'>
						<button className='btn btn-warning' onClick={handleClose}>
							Cancel
						</button>
						<button
							className='btn btn-danger'
							onClick={() => {
								deleteTeam(teamId);
								handleClose();
							}}
						>
							Delete
						</button>
					</Modal.Footer>
				</Modal>
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
						<section className='d-flex flex-wrap mx-2 bg-primary-dark rounded'>
							{user &&
								sortedTeams
									.filter(owner => owner.owner === user.uid)
									.map((team, index) => (
										<section
											key={index}
											className='p-3 col-lg-4 col-md-6 col-sm-12'
										>
											<CharactersHeading heading={team.name} />
											<Characters
												filterCharacters={filterCharacters}
												array={team.teamMembers}
												heading='Team Members:'
											/>
											<div className='d-flex justify-content-start align-items-center ms-2 mt-2 pt-1'>
												<Link
													className='btn btn-outline-primary me-2'
													to={`/team-builder/teams/${team.id}`}
												>
													View
												</Link>
												<Link
													className='btn btn-outline-warning me-2'
													to={`/team-builder/teams/edit/${team.id}`}
												>
													Edit
												</Link>
												<button
													className='btn btn-outline-danger'
													// onClick={() => deleteTeam(team.id)}
													// onClick={() => console.log(team.id)}
													onClick={() => {
														handleShow();
														setTeamId(team.id);
													}}
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
