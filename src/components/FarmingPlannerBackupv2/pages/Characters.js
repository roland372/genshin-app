import React, { useState, useEffect } from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import axios from 'axios';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Characters = props => {
	useDocumentTitle('Farming Planner');

	const { filterCharacters } = props;

	let [characters, setCharacters] = useState(null);

	useEffect(() => {
		loadCharacters();
	}, []);

	const loadCharacters = async () => {
		const result = await axios.get(
			'http://localhost:3003/farming-planner/characters'
		);

		setCharacters(result.data.reverse());
	};

	// filter array based on character names
	let namesArray = [];

	// only call the function when characters were fetched
	characters && characters.map(c => namesArray.push(c.name));

	const deleteCharacter = async id => {
		await axios.delete(
			`http://localhost:3003/farming-planner/characters/${id}`
		);
		loadCharacters();
	};

	// characters && console.log(filterCharacters(namesArray));
	// characters && console.log(characters);

	// merge arrays, one filtered by names that has select values, and second containing images and other properties
	const mergedCharacters = filterCharacters(namesArray).map(item => {
		const obj = characters.find(o => o.name === item.name);
		return { ...item, ...obj };
	});

	return (
		<Container>
			<CardComponent title='Farming Planner'>
				<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1'>
					<Link
						className='btn btn-primary'
						to='/farming-planner/characters/add/'
					>
						Add Character
					</Link>
				</div>
				<div className='mx-2'>
					<hr />
				</div>
				<section className='d-flex flex-wrap justify-content-center align-items-center mx-2'>
					{characters &&
						mergedCharacters.map(character => {
							const { name, image, rarity, elementImage, element } = character;

							let rarityColor = '';
							rarity === 5
								? (rarityColor = 'rarity5bg')
								: (rarityColor = 'rarity4bg');
							return (
								<section
									key={name}
									className='border border-light rounded shadow-lg p-2 col-lg-4 col-md-6 col-sm-12'
								>
									<section>
										<OverlayTrigger
											placement='top'
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
									</section>
									<div className='d-flex justify-content-center align-items-center ms-2 mt-2'>
										<Link
											className='btn btn-outline-primary mr-2'
											to={`/farming-planner/characters/${character.id}`}
										>
											View
										</Link>
										<Link
											className='btn btn-outline-warning mr-2'
											to={`/farming-planner/characters/edit/${character.id}`}
										>
											Edit
										</Link>
										<button
											className='btn btn-outline-danger'
											onClick={() => deleteCharacter(character.id)}
										>
											Delete
										</button>
									</div>
								</section>
							);
						})}
				</section>
			</CardComponent>
		</Container>
	);
};

export default Characters;
