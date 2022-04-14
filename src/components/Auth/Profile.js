import React from 'react';

import { useHistory } from 'react-router';
import { useUserAuth } from '../../context/UserAuthContext';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

const Profile = () => {
	const { logOut, user } = useUserAuth();
	const history = useHistory();

	const handleLogout = async () => {
		try {
			await logOut();
			history.push('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Container>
			<CardComponent title='Profile'>
				<div className='text-center d-flex flex-column align-items-center justify-content-center'>
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
				<div>Your Teams:</div>
				<div>Your Characters:</div>
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
