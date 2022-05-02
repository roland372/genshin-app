import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

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

	const { logOut, user } = useUserAuth();
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

	return (
		<Container>
			<CardComponent title='Profile'>
				<div className='text-center d-flex flex-column align-items-center justify-content-center'>
					<div>
						<input type='file' onChange={handleFileChange} />
						<button disabled={loading || !photo} onClick={handleFileUpload}>
							upload
						</button>
						<img src={photoURL} alt='avatar' width='50px' />
					</div>
					{/* <img src={user.photoURL} alt='' /> */}
					{/* <pre> {JSON.stringify(user, null, 2)}</pre> */}
					<h5>Welcome {user && user.email}</h5>
					{/* {user && (
						<img
							className='img img-fluid'
							src={user.photoURL}
							alt={user.email}
						/>
					)} */}
				</div>
				<div>
					Your teams in{' '}
					<Link to='/team-builder/' className='link-info'>
						Team Builder
					</Link>{' '}
					: {teamsDatabase.filter(owner => owner.owner === user.uid).length}
				</div>
				<div>
					Your{' '}
					<Link to='/farming-planner/' className='link-info'>
						characters
					</Link>{' '}
					in Farming Planner :{' '}
					{charactersDatabase.filter(owner => owner.owner === user.uid).length}
				</div>
				<div>
					Your{' '}
					<Link to='/notes/' className='link-info'>
						Notes
					</Link>{' '}
					: {notesDatabase.filter(owner => owner.owner === user.uid).length}
				</div>
				<div className='d-grid gap-2 mt-3'>
					<button className='btn btn-primary' onClick={handleLogout}>
						Log out
					</button>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Profile;
