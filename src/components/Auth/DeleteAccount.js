import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import { toast } from 'react-toastify';

import { useUserAuth } from '../../context/UserAuthContext';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const DeleteAccount = () => {
	useDocumentTitle('Delete Account');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { logIn, googleSignIn, user } = useUserAuth();
	const history = useHistory();

	const loggedInNotification = () =>
		toast.success(`Account Deleted`, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	// console.log(email);
	// console.log(user);

	// console.log(user);

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			// await handleDeleteAccount();

			history.push('/login');
		} catch (err) {
			setError(err.message);
		}
		loggedInNotification();
	};

	const handleGoogleSignIn = async e => {
		e.preventDefault();
		try {
			await googleSignIn();
			// history.push('/login');
		} catch (error) {
			console.log(error.message);
		}

		loggedInNotification();
	};

	// if user logged in
	useEffect(() => {
		if (user) {
			handleDeleteAccount();
			history.push('/');
		}
	});

	const handleDeleteAccount = async () => {
		user
			.delete()
			.then(() => {
				console.log('deleted');
			})
			.catch(err => {
				console.log(err);
			});
	};

	// useEffect(() => {
	// 	const handleDeleteAccount = async () => {
	// 		user
	// 			.delete()
	// 			.then(() => {
	// 				console.log('deleted');
	// 			})
	// 			.catch(err => {
	// 				console.log(err);
	// 			});
	// 	};
	// 	if (user) {
	// 		handleDeleteAccount();
	// 		history.push('/');
	// 	}
	// }, [user, history]);

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
							<button className='btn btn-danger' type='Submit'>
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
