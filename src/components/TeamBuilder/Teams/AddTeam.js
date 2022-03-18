import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Characters2 from './Characters2';
import Form from './Form';
import BackButton from './BackButton';
import SubmitButton from './pages/SubmitButton';

const AddTeam = props => {
	const { characterNames, filterCharacters } = props;
	let history = useHistory();

	let [select, setSelect] = useState([]);
	let [team, setTeam] = useState({
		name: '',
		teamMembers: [],
	});

	const { name } = team;

	const onInputChange = e => {
		setTeam({ ...team, [e.target.name]: e.target.value });
	};

	const selectValues = e => {
		setSelect(Array.isArray(e) ? e.map(name => name.label) : []);
		team.teamMembers = [...select];
	};

	// console.log('selected values: ', select);
	// console.log('values in object :', team.teamMembers);

	const onSubmit = async e => {
		team.teamMembers = [...select];
		e.preventDefault();
		await axios.post('http://localhost:3003/team-builder/teams', team);
		history.push('/team-builder/');
	};
	return (
		<Container>
			<CardComponent title='Add Team'>
				<BackButton>
					<Form
						onSubmit={onSubmit}
						name={name}
						onInputChange={onInputChange}
						characterNames={characterNames}
						selectValues={selectValues}
						select={select}
					>
						<Characters2
							filterCharacters={filterCharacters}
							array={select}
							heading='Team Members:'
						></Characters2>
						<SubmitButton text='Add Team' color='primary' />
					</Form>
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default AddTeam;
