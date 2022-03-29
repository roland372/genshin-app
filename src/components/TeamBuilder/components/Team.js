import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TeamDataService from '../services/team.services';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import BackButton from './BackButton';
import Characters from './Characters';
import CharactersHeading from './CharactersHeading';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Team = props => {
	useDocumentTitle('View Team');

	const { filterCharacters } = props;
	const [team, setTeam] = useState({
		name: '',
		teamMembers: [],
		description: '',
	});

	const { name, teamMembers, description } = team;
	const { id } = useParams();

	useEffect(() => {
		const getTeamDatabase = async id => {
			const data = await TeamDataService.getTeam(id);
			setTeam(data.data());
			// console.log(data.data());
		};

		getTeamDatabase(id);
	}, [id]);

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

export default Team;
