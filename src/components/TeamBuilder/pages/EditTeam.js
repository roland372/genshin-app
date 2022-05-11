import React, { useState, useEffect, useRef } from 'react';

//? <----- Router ----->
import { useHistory, useParams } from 'react-router-dom';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Characters from '../components/Characters';
import Form from '../components/Form';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import CharactersHeading from '../components/CharactersHeading';
import validation from '../components/FormValidation';
import ScrollToTopRouter from '../../Layout/ScrollToTopRouter';
import { toast } from 'react-toastify';

const EditTeam = props => {
	const { user, TeamDataService, useDocumentTitle } = props;

	useDocumentTitle('Edit Team');

	const teamEditedNotification = () =>
		toast.success('Team Edited', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const { filterCharacters, characterNames } = props;
	let history = useHistory();
	const { id } = useParams();

	//* for some reason, when I don't fetch all teams, previous teams won't display
	const [, setTeamsDatabase] = useState([]);

	let [select, setSelect] = useState([]);
	const [team, setTeam] = useState({
		name: '',
		teamMembers: [],
		description: '',
		owner: user.uid,
		lastModified: '',
	});

	const { name, description } = team;

	const [formErrors, setFormErrors] = useState({});

	const onInputChange = e => {
		setTeam({ ...team, [e.target.name]: e.target.value });
		// console.log(e.target.value);
	};

	const selectValues = e => {
		setSelect(Array.isArray(e) ? e.map(name => name.label) : []);
		team.teamMembers = [...select];
	};

	let previousTeam = useRef([]);

	useEffect(() => {
		getTeamDatabase(id);
		getTeamsDatabase();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const getTeamsDatabase = async () => {
		if (user) {
			const data = await TeamDataService.getAllTeams();
			// console.log(data.docs);
			setTeamsDatabase(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		} else {
		}
	};

	const getTeamDatabase = async id => {
		const data = await TeamDataService.getTeam(id);
		setTeam(data.data());
		previousTeam.current = [...data.data().teamMembers];
	};

	// console.log('previous team: ', previousTeam.current);
	// console.log('new team: ', select);

	const onSubmit = async e => {
		e.preventDefault();

		team.lastModified = Date.now();

		select.length === 0
			? (team.teamMembers = [...team.teamMembers])
			: (team.teamMembers = [...select]);

		setFormErrors(validation(name, team.teamMembers));

		if (name.length !== 0 && team.teamMembers.length >= 4) {
			await TeamDataService.updateTeam(id, team);
			teamEditedNotification();
			history.push('/team-builder/');
		} else if (name.length !== 0 && select.length === 0) {
			team.teamMembers = [...previousTeam.current];
			await TeamDataService.updateTeam(id, team);
			teamEditedNotification();
			history.push('/team-builder/');
		}
	};

	// console.log(team);

	return (
		<Container>
			<CardComponent title='Edit Team'>
				<ScrollToTopRouter />
				<BackButton />
				<Form
					onSubmit={onSubmit}
					name={name}
					description={description}
					onInputChange={onInputChange}
					characterNames={characterNames}
					selectValues={selectValues}
					select={select}
					formErrors={formErrors}
				>
					{select.length !== 0 && (
						<CharactersHeading heading='New Team Members:' />
					)}
					<Characters filterCharacters={filterCharacters} array={select} />
					<CharactersHeading heading='Previous Team Members' />
					<Characters
						filterCharacters={filterCharacters}
						array={previousTeam.current}
					/>
					<SubmitButton text='Update Team' color='warning' />
				</Form>
			</CardComponent>
		</Container>
	);
};

export default EditTeam;
