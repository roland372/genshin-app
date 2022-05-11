import React, { useState } from 'react';

//? <----- Router ----->
import { useHistory } from 'react-router-dom';

//? <----- User Auth ----->
import { useUserAuth } from '../../context/UserAuthContext';

//? <----- Components ----->
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';

//? <----- Firebase ----->
import UserDataService from './services/user.services';
import TeamDataService from '../TeamBuilder/services/team.services';
import CharacterDataService from '../FarmingPlanner/services/character.services';
import NotesDataService from '../Notes/services/notes.services';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const DeleteAccount = props => {
	useDocumentTitle('Delete Account');

	const { notesDatabase, teamsDatabase, charactersDatabase, usersDatabase } =
		props;

	const { logIn, googleSignIn, user } = useUserAuth();
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	//* <----- Toast Notifications ----->
	const accountDeletedNotification = () =>
		toast.success(`Account Deleted`, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	//* <----- Login handlers ----->
	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			await handleDeleteAccount();
			history.push('/login');
		} catch (err) {
			setError(err.message);
		}
	};

	const handleGoogleSignIn = async e => {
		e.preventDefault();
		try {
			await googleSignIn();
			await handleDeleteAccount();
			history.push('/login');
		} catch (error) {
			console.log(error.message);
		}
	};

	//* <----- Get current user data ----->
	const characters = charactersDatabase.filter(
		owner => owner.owner === user.uid
	);
	const teams = teamsDatabase.filter(owner => owner.owner === user.uid);
	const notes = notesDatabase.filter(owner => owner.owner === user?.uid);
	const users = usersDatabase.filter(u => u.uid === user.uid);

	//* <----- Delete account handler ----->
	const handleDeleteAccount = async e => {
		e.preventDefault();
		await logIn(email, password);

		for (let character of characters) {
			await CharacterDataService.deleteCharacter(character.id);
		}

		for (let team of teams) {
			await TeamDataService.deleteTeam(team.id);
		}

		for (let note of notes) {
			// console.log(note.id);
			await NotesDataService.deleteNote(note.id);
		}

		await UserDataService.deleteUser(users[0].id);

		user
			.delete()
			.then(() => {
				console.log('deleted');
			})
			.catch(err => {
				console.log(err);
			});

		accountDeletedNotification();
	};

	return (
		<Container>
			<CardComponent title='Login'>
				<h2 className='text-danger text-start mx-2'>
					This will permanently delete your account with all your data without
					option to retrieve it.
					<br />
					If you wish to continue please Sign In with your email and password or
					with Google Account
				</h2>
				<div className='d-flex mx-2 my-1'>
					<button
						className='btn btn-warning'
						onClick={() => history.push('/login')}
					>
						Cancel
					</button>
				</div>
				<div className='p-2'>
					{error && <div className='alert alert-danger'>{error}</div>}
					<form onSubmit={handleSubmit}>
						<div className='mb-3 form-group'>
							<input
								className='form-control'
								type='email'
								placeholder='Email address'
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className='mb-3'>
							<input
								className='form-control'
								type='password'
								placeholder='Password'
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className='d-grid gap-2'>
							<button
								className='btn btn-danger'
								type='Submit'
								onClick={handleDeleteAccount}
							>
								Delete Account
							</button>
						</div>
					</form>
					<hr />
					<div className='d-flex justify-content-center '>
						<GoogleButton
							className='g-btn rounded'
							type='dark'
							onClick={handleGoogleSignIn}
						/>
					</div>
				</div>
			</CardComponent>
		</Container>
	);
};

export default DeleteAccount;
