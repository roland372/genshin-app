import React, { useState, useEffect } from 'react';

//? <----- Router ----->
import { Link, useHistory } from 'react-router-dom';

//? <----- User Auth ----->
import { useUserAuth } from '../../context/UserAuthContext';

//? <----- Components ----->
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Login = () => {
	useDocumentTitle('Log In');

	const { logIn, googleSignIn, user } = useUserAuth();

	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const loggedInNotification = () =>
		toast.success(`Logged In`, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			history.push('/profile');
		} catch (err) {
			setError(err.message);
		}

		loggedInNotification();
	};

	const handleGoogleSignIn = async e => {
		e.preventDefault();
		try {
			await googleSignIn();
			history.push('/profile');
		} catch (error) {
			console.log(error.message);
		}

		loggedInNotification();
	};

	//* if user is already logged in
	useEffect(() => {
		if (user) history.push('/profile');
	});

	return (
		<Container>
			<CardComponent title='Login'>
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
							<button className='btn btn-primary' type='Submit'>
								Log In
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
				<div className='p-2 text-center'>
					Don't have an account?{' '}
					<Link className='text-decoration-none text-info' to='/signup'>
						Sign up
					</Link>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Login;
