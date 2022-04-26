import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Characters from '../components/Characters';
import Form from '../components/Form';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import CharactersHeading from '../components/CharactersHeading';
import validation from '../components/FormValidation';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const AddTeamToLocalStorage = props => {
	useDocumentTitle('Add Team');

	const teamAddedNotification = () =>
		toast.success('Team Added to Local Storage', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const { characterNames, filterCharacters } = props;
	let history = useHistory();

	let [select, setSelect] = useState([]);

	let [team, setTeam] = useState({
		id: new Date().getTime().toString(),
		name: '',
		teamMembers: [],
		description: '',
	});

	const getLocalStorage = () => {
		// get list from local storage
		let teams = localStorage.getItem('teams');
		// if list exists - is in local storage
		if (teams) {
			return JSON.parse(localStorage.getItem('teams'));
		}
		// if list doesn't exists
		else {
			return [];
		}
	};

	let [teams] = useState(getLocalStorage);

	const { name, description } = team;

	const [formErrors, setFormErrors] = useState({});

	const onInputChange = e => {
		setTeam({ ...team, [e.target.name]: e.target.value });
	};

	const selectValues = e => {
		setSelect(Array.isArray(e) ? e.map(name => name.label) : []);
		team.teamMembers = [...select];
		team.teamMembers.length += 1;
	};

	const onSubmit = async e => {
		e.preventDefault();
		team.teamMembers = [...select];

		setFormErrors(validation(name, select));
		
		if (name.length !== 0 && select.length >= 4) {
			teams = [...teams, team];

			localStorage.setItem('teams', JSON.stringify(teams));

			console.log('team added to localstorage');
			teamAddedNotification();
			history.push('/team-builder/');
		}
	};

	return (
		<Container>
			<CardComponent title='Add Team'>
				<BackButton>
					<Form
						onSubmit={onSubmit}
						name={name}
						description={description}
						onInputChange={onInputChange}
						characterNames={characterNames}
						selectValues={selectValues}
						select={team.teamMembers}
						formErrors={formErrors}
					>
						{select.length !== 0 && (
							<CharactersHeading heading='Team Members:' />
						)}
						<Characters filterCharacters={filterCharacters} array={select} />
						<SubmitButton text='Add Team' color='primary' />
					</Form>
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default AddTeamToLocalStorage;
