import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import TeamDataService from '../services/team.services';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Characters from '../components/Characters';
import Form from '../components/Form';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import CharactersHeading from '../components/CharactersHeading';
import validation from '../components/FormValidation';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

import { useUserAuth } from '../../../context/UserAuthContext';

const AddTeam = props => {
	useDocumentTitle('Add Team');

	const { user } = useUserAuth();

	const teamAddedNotification = () =>
		toast.success('Team Added', {
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
		name: '',
		teamMembers: [],
		description: '',
		owner: user.uid,
		lastModified: Date.now(),
	});

	// console.log(
	// 	new Date(team.lastModified).toLocaleDateString('en-GB', {
	// 		hour: '2-digit',
	// 		minute: '2-digit',
	// 	})
	// );

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

	// console.log('selected values: ', select);
	// console.log('values in object :', team.teamMembers);

	const onSubmit = async e => {
		e.preventDefault();
		team.teamMembers = [...select];

		setFormErrors(validation(name, select));
		if (name.length !== 0 && select.length >= 4) {
			// await axios.post('http://localhost:3003/team-builder/teams', team);

			try {
				await TeamDataService.addTeam(team);
				console.log('team added to database');
				teamAddedNotification();
				history.push('/team-builder/');
			} catch (err) {
				console.log(err);
			}
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

export default AddTeam;
