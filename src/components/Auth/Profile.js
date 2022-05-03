import React, { useState, useEffect } from 'react';

//? <----- Router ----->
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

//? <----- User Auth ----->
import { useUserAuth } from '../../context/UserAuthContext';

//? <----- Components ----->
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import { Modal } from 'react-bootstrap';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

//? <----- Firebase ----->
import { updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../utils/firebaseConfig';
import UserDataService from './services/user.services';
import TeamDataService from '../TeamBuilder/services/team.services';
import CharacterDataService from '../FarmingPlanner/services/character.services';
import NotesDataService from '../Notes/services/notes.services';

//? <----- Document title hook ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Profile = () => {
	useDocumentTitle('Profile');

	const { logOut, user } = useUserAuth();
	const history = useHistory();

	//* <----- Toast Notifications ----->
	const profileUpdatedNotification = () =>
		toast.success('Profile Updated', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const fileUploadNotification = () =>
		toast.success('Avatar Uploaded', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const loggedOutNotification = () =>
		toast.success('Logged Out', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const [loading, setLoading] = useState(false);

	//* <----- Database State ----->
	const [teamsDatabase, setTeamsDatabase] = useState([]);
	const [charactersDatabase, setCharactersDatabase] = useState([]);
	const [notesDatabase, setNotesDatabase] = useState([]);

	//* <----- User State ----->
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [photo, setPhoto] = useState(null);
	const [photoURL, setPhotoURL] = useState(
		'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
	);

	//* <----- Modal State ----->
	const [showModal, setShowModal] = useState(false);

	//* <----- Modal functions ----->
	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);

	const [usersDatabase, setUsersDatabase] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);

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
		fileUploadNotification();
	};

	//* <----- Fetch data from database ----->
	useEffect(() => {
		user && getTeamsDatabase();
		user && getCharactersDatabase();
		user && getNotesDatabase();
		user && getUsersDatabase();
		// user && getCurrentUser();
		// if (user && user.photoURL) {
		// 	setPhotoURL(user.photoURL);
		// }
		// or
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
		}
	}, [user]);

	//* <----- Get currently logged in user ----->
	const getUsersDatabase = async () => {
		const data = await UserDataService.getAllUsers();
		setUsersDatabase(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
	};

	useEffect(() => {
		const getCurrentUser = () => {
			const currentUser = usersDatabase.filter(u => u.uid === user.uid);
			setName(currentUser[0]?.name);
			setDescription(currentUser[0]?.description);
			// return currentUser[0];
			setCurrentUser(currentUser);
		};

		getCurrentUser();
	}, [usersDatabase, user.uid]);

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

	const handleLogout = async () => {
		try {
			await logOut();
			loggedOutNotification();
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

	const handleProfileUpdate = async e => {
		e.preventDefault();

		currentUser[0].name = name;
		currentUser[0].description = description;
		try {
			await UserDataService.updateUser(currentUser[0].id, currentUser?.[0]);
			profileUpdatedNotification();
			setShowModal(false);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<CardComponent title='Profile'>
				<ToastContainer
					position='top-center'
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover={false}
					transition={Flip}
					theme='dark'
				/>
				<Modal show={showModal} onHide={handleCloseModal}>
					<Modal.Header closeButton className='bg-dark text-light'>
						<Modal.Title>Edit Profile</Modal.Title>
					</Modal.Header>
					<Modal.Body className='bg-dark text-light'>
						<form onSubmit={e => handleProfileUpdate(e)}>
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
								<div>Uploaded file</div>
								<img src={photoURL} alt='avatar' width='100px' />
							</div>
							<br />
							<div>
								<div>Description</div>
								<textarea
									style={{ maxHeight: '150px' }}
									type='text'
									className='form-control'
									maxLength='150'
									value={description}
									// value={getCurrentUser()?.description}
									onChange={e => setDescription(e.target.value)}
								/>
								<div className='d-flex justify-content-end pt-3'>
									<button className='btn btn-warning'>Save changes</button>
								</div>
							</div>
						</form>
						<hr />
						<button className='btn btn-danger'>Delete Account</button>
						{/* alert with confirmation this will delete all your data from database without option to retrieve it, type delete to delete your profile */}
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
											{/* <Suspense fallback={<p>Loading</p>}>
												{getCurrentUser()?.description}
											</Suspense> */}
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
															Team Builder
														</Link>
													</h6>
													<p className='text-muted'>
														{
															teamsDatabase.filter(
																owner => owner.owner === user.uid
															).length
														}
														{''} Teams
													</p>
												</div>
												<div className='col-6 mb-3'>
													<h6>
														{' '}
														<Link to='/farming-planner/' className='text-light'>
															Farming Planner
														</Link>
													</h6>
													<p className='text-muted text-light'>
														{
															charactersDatabase.filter(
																owner => owner.owner === user.uid
															).length
														}
														{''} Characters
													</p>
												</div>
												<div className='col-6 mb-3'>
													<h6>
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
														{''} Notes
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
