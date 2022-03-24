import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Characters from '../components/Characters';
import Form from '../components/Form';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import CharactersHeading from '../components/CharactersHeading';
import validation from '../components/FormValidation';

const EditTeam = props => {
	const { filterCharacters, characterNames } = props;
	let history = useHistory();

	const { id } = useParams();

	let [select, setSelect] = useState([]);
	const [team, setTeam] = useState({
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
	};

	let previousTeam = useRef([]);

	useEffect(() => {
		const loadTeam = async () => {
			const result = await axios.get(
				`http://localhost:3003/team-builder/teams/${id}`
			);
			previousTeam.current = [...result.data.teamMembers];
			setTeam(result.data);
			// console.log(result.data.teamMembers);
		};

		loadTeam();
	}, [id]);

	// console.log('previous team: ', previousTeam.current);
	// console.log('new team: ', select);

	const onSubmit = async e => {
		e.preventDefault();
		select.length === 0
			? (team.teamMembers = [...team.teamMembers])
			: (team.teamMembers = [...select]);

		setFormErrors(validation(name, team.teamMembers));
		// if (name.length !== 0 && select.length >= 4) {
		// 	await axios.put(`http://localhost:3003/team-builder/teams/${id}`, team);
		// 	history.push('/team-builder/');
		// }

		if (name.length !== 0 && team.teamMembers.length >= 4) {
			await axios.put(`http://localhost:3003/team-builder/teams/${id}`, team);
			history.push('/team-builder/');
		} else if (name.length !== 0 && select.length === 0) {
			team.teamMembers = [...previousTeam.current];
			await axios.put(`http://localhost:3003/team-builder/teams/${id}`, team);
			history.push('/team-builder/');
		}
	};
	// console.log('team members: ', team.teamMembers, team.teamMembers.length);
	// console.log('select: ', team.teamMembers, select.length);

	// console.log('previous team: ', previousTeam.current);

	return (
		<Container>
			<CardComponent title='Edit Team'>
				<BackButton>
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
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default EditTeam;