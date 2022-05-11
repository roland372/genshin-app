import React, { useState, useEffect } from 'react';

//? <----- Router ----->
import { Link, useHistory } from 'react-router-dom';

//? <----- User Auth ----->
import { useUserAuth } from '../../context/UserAuthContext';

//? <----- Components ----->
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import { toast } from 'react-toastify';

//? <----- Custom Hooks ----->
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Signup = () => {
	useDocumentTitle('Sign Up');

	const { signUp, user } = useUserAuth();

	const history = useHistory();

	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [password, setPassword] = useState('');

	//* <----- Toast Notification ----->
	const signedUpNotification = () =>
		toast.success(`Signed up as ${email}`, {
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
			await signUp(email, password);
			// history.push('/');
		} catch (err) {
			setError(err.message);
		}
		signedUpNotification();
	};

	//* if user is already logged in
	useEffect(() => {
		if (user) history.push('/profile');
	});

	return (
		<Container>
			<CardComponent title='Signup'>
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
								Sign up
							</button>
						</div>
					</form>
				</div>
				<div className='p-2 text-center'>
					Already have an account?{' '}
					<Link className='text-decoration-none text-info' to='/login'>
						Log In
					</Link>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Signup;
