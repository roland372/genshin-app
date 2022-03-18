import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Characters2 from './Characters2';
import Form from './Form';
import BackButton from './BackButton';
import SubmitButton from './pages/SubmitButton';

const EditTeam = props => {
	const { filterCharacters } = props;
	let history = useHistory();

	const { characterNames } = props;
	const { id } = useParams();

	let [select, setSelect] = useState([]);
	const [team, setTeam] = useState({
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

	// console.log(previousTeam.current);

	const onSubmit = async e => {
		team.teamMembers = [...select];
		e.preventDefault();
		await axios.put(`http://localhost:3003/team-builder/teams/${id}`, team);
		history.push('/team-builder/');
	};

	return (
		<Container>
			<CardComponent title='Edit Team'>
				{/* <Characters filterCharacters={filterCharacters} array={select}>
					<Form
						onSubmit={onSubmit}
						name={name}
						onInputChange={onInputChange}
						characterNames={characterNames}
						selectValues={selectValues}
						select={select}
					>
						<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1 mt-2'>
							<button className='btn btn-warning'>Update Team</button>
						</div>
					</Form>
				</Characters> */}
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
							heading='New Team Members'
						/>
						<Characters2
							filterCharacters={filterCharacters}
							array={previousTeam.current}
							heading='Previous Team Members'
						/>
						<SubmitButton text='Update Team' color='warning' />
					</Form>
				</BackButton>
				{/* <div className='mx-2'>
					<Link className='btn btn-primary' to='/team-builder/'>
						Back to Team Builder
					</Link>
					<hr />
					<form onSubmit={e => onSubmit(e)} className='text-dark'>
						<div className='form-group'>
							<input
								type='text'
								className='form-control form-control-lg'
								placeholder='Enter Team Name'
								name='name'
								value={team.name}
								onChange={e => onInputChange(e)}
							/>
						</div>
						<Select
							className='text-start'
							isMulti
							placeholder='Select up to 4 team members'
							options={characterNames}
							onChange={selectValues}
							isOptionDisabled={() => select.length === 4}
						/>
						<p className='text-light'>Previous team: {previousTeam.current}</p>{' '}
						<section className='d-flex flex-row justify-content-center align-items-center text-light'>
							{filterCharacters(previousTeam.current).map(character => {
								const { name, image } = character;
								return (
									<div key={name}>
										<img width='64px' src={image} alt={name} />
										<div>{name}</div>
									</div>
								);
							})}
						</section>
						<p className='text-light'>New team: {select}</p>
						<section className='d-flex flex-row justify-content-center align-items-center text-light'>
							{filterCharacters(select).map(character => {
								const { name, image } = character;
								return (
									<div key={name}>
										<img width='64px' src={image} alt={name} />
										<div>{name}</div>
									</div>
								);
							})}
						</section>
						<button className='btn btn-warning btn-block'>Update Team</button>
					</form>
				</div> */}
			</CardComponent>
		</Container>
	);
};

export default EditTeam;
