import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import BackButton from './BackButton';
import Characters from './Characters';
import CharactersHeading from './CharactersHeading';

const Team = props => {
	const { filterCharacters } = props;
	const [team, setTeam] = useState({
		name: '',
		teamMembers: [],
		description: '',
	});

	const { name, teamMembers, description } = team;
	const { id } = useParams();

	useEffect(() => {
		const loadTeam = async () => {
			const res = await axios.get(`http://localhost:3003/teams/${id}`);
			// console.log(res);
			setTeam(res.data);
		};

		loadTeam();
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
