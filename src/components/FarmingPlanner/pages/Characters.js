import React, { useEffect, useState } from 'react';

//? <----- Router ----->
import { Link } from 'react-router-dom';

//? <----- User Auth ----->
import { useUserAuth } from '../../../context/UserAuthContext';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Loader from '../../Layout/Loader';
import { Modal } from 'react-bootstrap';
import ScrollToTopRouter from '../../Layout/ScrollToTopRouter';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Characters = props => {
	const { CharacterDataService } = props;
	const { user } = useUserAuth();

	//* <----- CharacterId state ----->
	const [characterId, setCharacterId] = useState('');

	//* <----- Modal state ----->
	const [show, setShow] = useState(false);

	//* <----- Modal functions ----->
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const characterDeletedNotification = () =>
		toast.success('Character Deleted', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const {
		filterCharacters,
		charactersDatabase,
		loading,
		getCharactersDatabase,
	} = props;

	useEffect(() => {
		user && getCharactersDatabase(user?.uid);
		// eslint-disable-next-line
	}, [user]);

	//* filter array based on character names
	let namesArray = [];

	//* only call the function when characters were fetched
	charactersDatabase && charactersDatabase.map(c => namesArray.push(c.name));

	const deleteCharacter = async id => {
		await CharacterDataService.deleteCharacter(id);
		characterDeletedNotification();
		getCharactersDatabase(user?.uid);
	};

	//* merge arrays, one filtered by names that has select values, and second containing images and other properties
	const mergedCharacters = filterCharacters(namesArray).map(item => {
		const obj = charactersDatabase.find(o => o.name === item.name);
		return { ...item, ...obj };
	});

	// console.log(mergedCharacters);

	//* <----- Sort characters - display newest first ----->
	const sortedCharacters =
		user && mergedCharacters.sort((a, b) => b.lastModified - a.lastModified);

	return (
		<Container>
			<CardComponent title='Farming Planner'>
				<ScrollToTopRouter />
				<Modal show={show} onHide={handleClose}>
					<Modal.Header
						closeButton
						closeVariant='white'
						className='bg-primary-light text-color'
					>
						<Modal.Title>Deleting Character</Modal.Title>
					</Modal.Header>
					<Modal.Body className='bg-primary-dark text-color'>
						Are you sure you want to delete selected character?
					</Modal.Body>
					<Modal.Footer className='bg-primary-dark text-color'>
						<button className='btn btn-warning' onClick={handleClose}>
							Cancel
						</button>
						<button
							className='btn btn-danger'
							onClick={() => {
								deleteCharacter(characterId);
								handleClose();
							}}
						>
							Delete
						</button>
					</Modal.Footer>
				</Modal>
				<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1 '>
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
				{loading ? (
					<Loader />
				) : (
					<section className='d-flex flex-wrap justify-content-center align-items-center mx-2 bg-primary-dark rounded'>
						{user &&
							sortedCharacters
								.filter(owner => owner.owner === user.uid)
								.map(character => {
									const { name, image, rarity, elementImage, element } =
										character;

									let rarityColor = '';
									rarity === 5
										? (rarityColor = 'rarity5bg')
										: (rarityColor = 'rarity4bg');
									return (
										<section
											key={name}
											className='p-2 col-lg-4 col-md-6 col-sm-12'
										>
											<div className='mx-2 py-1 text-color'>
												<h4 className='text-center'>{name}</h4>
												<hr className='mx-xl-5 mx-lg-1 mx-md-3 mx-sm-5' />
											</div>
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
													<div className='pt-2'>
														<img
															src={image}
															alt={name}
															className={`img-fluid img-thumbnail ${rarityColor}`}
														/>
													</div>
												</OverlayTrigger>
											</section>
											<div className='d-flex justify-content-center align-items-center ms-2 mt-2 p-1'>
												<Link
													className='btn btn-outline-primary me-2'
													to={`/farming-planner/characters/${character.id}`}
												>
													View
												</Link>
												<Link
													className='btn btn-outline-warning me-2'
													to={`/farming-planner/characters/edit/${character.id}`}
												>
													Edit
												</Link>
												<button
													className='btn btn-outline-danger'
													// onClick={() => deleteCharacter(character.id)}
													onClick={() => {
														handleShow();
														setCharacterId(character.id);
													}}
												>
													Delete
												</button>
											</div>
										</section>
									);
								})}
					</section>
				)}
			</CardComponent>
		</Container>
	);
};

export default Characters;
