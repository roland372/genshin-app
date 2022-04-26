import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import BackButton from './BackButton';
import Characters from './Characters';
import CharactersHeading from './CharactersHeading';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const TeamLocalStorage = props => {
	useDocumentTitle('View Team');

	const { filterCharacters } = props;

	const { id } = useParams();

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

	let [teams, setTeams] = useState(getLocalStorage);

	useEffect(() => {
		const getTeamLocalStorage = id => {
			setTeams(teams.filter(team => team.id === id));
		};

		getTeamLocalStorage(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const { name, teamMembers, description } = teams[0];

	return (
		<Container>
			<CardComponent title={`Team ${name}`}>
				<BackButton>
					<CharactersHeading heading={`Team: ${name}`} />
					<Characters filterCharacters={filterCharacters} array={teamMembers} />
					{description.length !== 0 && (
						<section>
							<div className='mt-2'>
								<CharactersHeading heading='Description:' />
							</div>
							<div className='rounded mx-2'>
								<h4 className='text-start'>{description}</h4>
							</div>
						</section>
					)}
				</BackButton>
			</CardComponent>
		</Container>
	);
};

export default TeamLocalStorage;
