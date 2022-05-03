import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

import { Modal } from 'react-bootstrap';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { updateProfile } from 'firebase/auth';

import { storage } from '../../utils/firebaseConfig';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import TeamDataService from '../TeamBuilder/services/team.services';
import CharacterDataService from '../FarmingPlanner/services/character.services';
import NotesDataService from '../Notes/services/notes.services';

const Profile = () => {
	useDocumentTitle('Profile');

	const [teamsDatabase, setTeamsDatabase] = useState([]);
	const [charactersDatabase, setCharactersDatabase] = useState([]);
	const [notesDatabase, setNotesDatabase] = useState([]);
	const [photoURL, setPhotoURL] = useState(
		'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
	);
	const [photo, setPhoto] = useState(null);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const { logOut, user } = useUserAuth();

	//* <----- info modal state ----->
	const [showModal, setShowModal] = useState(false);
	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);

	const history = useHistory();

	//* <----- Upload image ----->
	const upload = async (file, currentUser, setLoading) => {
		const imageRef = ref(storage, currentUser.uid + '.png');
		setLoading(true);
		await uploadBytes(imageRef, file).then(() => {
			getDownloadURL(imageRef)
				.then(url => {
					setPhotoURL(url);
				})
				.catch(err => {
					console.log(err);
				});
			setPhotoURL(null);
		});
		const photoURL = await getDownloadURL(imageRef);
		updateProfile(user, { photoURL: photoURL });
		setLoading(false);
		alert('uploaded file');
	};

	useEffect(() => {
		user && getTeamsDatabase();
		user && getCharactersDatabase();
		user && getNotesDatabase();
		// if (user && user.photoURL) {
		// 	setPhotoURL(user.photoURL);
		// }
		// or
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
		}
	}, [user]);

	const getTeamsDatabase = async () => {
		const data = await TeamDataService.getAllTeams();
		setTeamsDatabase(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
	};

	const getCharactersDatabase = async () => {
		const data = await CharacterDataService.getAllCharacters();
		setCharactersDatabase(
			data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
		);
	};

	const getNotesDatabase = async () => {
		const data = await NotesDataService.getAllNotes();
		setNotesDatabase(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
	};

	// console.log(user.photoURL);

	const handleLogout = async () => {
		try {
			await logOut();
			history.push('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleFileChange = e => {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
		}
	};

	const handleFileUpload = () => {
		upload(photo, user, setLoading);
	};

	console.log(user);

	return (
		<Container>
			<CardComponent title='Profile'>
				<Modal show={showModal} onHide={handleCloseModal}>
					<Modal.Header closeButton className='bg-dark text-light'>
						<Modal.Title>Edit Profile</Modal.Title>
					</Modal.Header>
					<Modal.Body className='bg-dark text-light'>
						<div>
							<div>Name</div>
							<input
								type='text'
								className='form-control'
								maxLength='20'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<br />
						<div>
							<div>Edit Avatar</div>
							<div className='d-flex justify-content-between'>
								<input
									type='file'
									className='form-control-file'
									onChange={handleFileChange}
								/>
								<button
									disabled={loading || !photo}
									className='btn btn-primary'
									onClick={handleFileUpload}
								>
									upload
								</button>
							</div>
							{/* <img src={photoURL} alt='avatar' width='50px' /> */}
						</div>
						<br />
						<div>
							<div>Description</div>
							<textarea
								type='text'
								className='form-control'
								maxLength='100'
								value={description}
								onChange={e => setDescription(e.target.value)}
							/>
						</div>
						<hr />
						<button className='btn btn-danger'>Delete Profile</button>
					</Modal.Body>
				</Modal>
				<h5 className='py-2'>Welcome {user && user.email}</h5>
				<section className='py-2 mx-2'>
					<div className='d-flex justify-content-center align-items-center'>
						<div className='col col-lg-6 mb-4 mb-lg-0'>
							<div className='bg-dark mb-3 rounded border'>
								<div className='row g-0'>
									<div
										className='col-md-4 bg-primary text-center text-light'
										style={{
											borderTopLeftRadius: '0.3rem',
											borderBottomLeftRadius: '0.3rem',
										}}
									>
										<img
											src={photoURL}
											alt='Avatar'
											className='img-fluid my-5 rounded-circle'
											style={{ width: '80px' }}
										/>
										<div className='px-3 text-break'>
											{name ? <h5>{name}</h5> : null}
											{description ? <p>{description}</p> : null}
										</div>
									</div>
									<div className='col-md-8'>
										<div className='p-4'>
											<h6>Information</h6>
											<hr className='mt-0 mb-4' />
											<div className='row pt-1'>
												<div className='col-12 mb-3'>
													<h6>Email</h6>
													<p className='text-muted'>{user.email}</p>
												</div>
											</div>
											<h6>Database</h6>
											<hr className='mt-0 mb-4' />
											<div className='row pt-1'>
												<div className='col-6 mb-3'>
													<h6>
														<Link to='/team-builder/' className='text-light'>
															Teams
														</Link>
													</h6>
													<p className='text-muted'>
														{
															teamsDatabase.filter(
																owner => owner.owner === user.uid
															).length
														}
													</p>
												</div>
												<div className='col-6 mb-3'>
													<h6>
														{' '}
														<Link to='/farming-planner/' className='text-light'>
															Characters
														</Link>
													</h6>
													<p className='text-muted text-light'>
														{
															charactersDatabase.filter(
																owner => owner.owner === user.uid
															).length
														}
													</p>
												</div>
												<div className='col-6 mb-3'>
													<h6>
														{' '}
														<Link to='/notes/' className='text-light'>
															Notes
														</Link>
													</h6>
													<p className='text-muted text-light'>
														{
															notesDatabase.filter(
																owner => owner.owner === user.uid
															).length
														}
													</p>
												</div>
											</div>
											<h6>Settings</h6>
											<hr className='mt-0 mb-4' />
											<div className='row pt-1'>
												<div className='col-6 mb-3'>
													<button
														className='btn btn-sm btn-warning'
														onClick={handleShowModal}
													>
														Edit Profile
													</button>
												</div>
												<div className='col-6 mb-3'>
													<button
														className='btn btn-sm btn-primary'
														onClick={handleLogout}
													>
														Log Out
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className='text-center d-flex flex-column align-items-center justify-content-center'>
					{/* <pre> {JSON.stringify(user, null, 2)}</pre> */}
				</div>
			</CardComponent>
		</Container>
	);
};

export default Profile;
