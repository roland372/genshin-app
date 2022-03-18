import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import CardComponent from '../../Layout/CardComponent';
import Container from '../../Layout/Container';

import Characters from './Characters';

const Team = props => {
	const { filterCharacters } = props;
	const [team, setTeam] = useState({
		name: '',
		teamMembers: [],
	});

	const { name, teamMembers } = team;
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
				{/* <section>
					<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1'>
						<Link className='btn btn-primary' to='/team-builder/'>
							Back to Team Builder
						</Link>
					</div>
					<div className='mx-2 pb-1'>
						<hr />
						<h4 className='text-start'>Team members: </h4>
					</div>
					<section className='d-flex flex-row justify-content-between align-items-center'>
						{filterCharacters(teamMembers).map(character => {
							const { name, image, rarity, elementImage, element } = character;

							let rarityColor = '';
							rarity === 5
								? (rarityColor = 'rarity5bg')
								: (rarityColor = 'rarity4bg');

							return (
								<div key={name} className='mx-2'>
									<OverlayTrigger
										placement='bottom'
										overlay={
											<Tooltip>
												<div>
													<img
														width='20px'
														src={elementImage}
														alt={element}
														className='me-2'
													/>
													{name}
												</div>
											</Tooltip>
										}
									>
										<div>
											<img
												src={image}
												alt={name}
												className={`img-fluid img-thumbnail ${rarityColor}`}
											/>
										</div>
									</OverlayTrigger>
								</div>
							);
						})}
					</section>
				</section> */}
				<Characters filterCharacters={filterCharacters} array={teamMembers} />
			</CardComponent>
		</Container>
	);
};

export default Team;
