import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Characters from '../components/Characters';
import Form from '../components/Form';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import CharactersHeading from '../components/CharactersHeading';
import validation from '../components/FormValidation';

const AddTeam = props => {
	const { characterNames, filterCharacters } = props;
	let history = useHistory();

	let [select, setSelect] = useState([]);
	let [team, setTeam] = useState({
		name: '',
		teamMembers: [],
		description: '',
	});

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
			await axios.post('http://localhost:3003/team-builder/teams', team);
			history.push('/team-builder/');
		}
	};

	console.log(team.teamMembers.length);

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
