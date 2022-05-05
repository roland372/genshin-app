import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TeamDataService from '../services/team.services';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import BackButton from './BackButton';
import Characters from './Characters';
import CharactersHeading from './CharactersHeading';

import useDocumentTitle from '../../../hooks/useDocumentTitle';
import ScrollToTopRouter from '../../Layout/ScrollToTopRouter';

const Team = props => {
	useDocumentTitle('View Team');

	const { filterCharacters } = props;
	const [team, setTeam] = useState({
		name: '',
		teamMembers: [],
		description: '',
		lastModified: '',
	});

	const { name, teamMembers, description, lastModified } = team;
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
				<ScrollToTopRouter />
				<BackButton />
				<CharactersHeading heading={`Team: ${name}`} />
				<h5 className='text-start mx-2'>
					Last Modified:{' '}
					{new Date(lastModified).toLocaleDateString('en-GB', {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</h5>
				<Characters filterCharacters={filterCharacters} array={teamMembers} />
				{description.length !== 0 && (
					<section>
						<div className='mt-2'>
							<CharactersHeading heading='Description:' />
						</div>
						<div className='rounded mx-2'>
							<h5 className='text-start text-break'>{description}</h5>
						</div>
					</section>
				)}
			</CardComponent>
		</Container>
	);
};

export default Team;
