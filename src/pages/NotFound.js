import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/Layout/Container';
import CardComponent from '../components/Layout/CardComponent';

import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFound = () => {
	useDocumentTitle('404 Not Found');

	return (
		<Container>
			<CardComponent title='404 Not Found'>
				<div className='vh-100 d-flex align-items-center justify-content-center'>
					<div>
						<h1>Oops!</h1>
						<br />
						<h3>The page you are looking for was not found.</h3>
						<hr />
						<Link to='/' className='btn btn-primary'>
							Return Home
						</Link>
					</div>
				</div>
			</CardComponent>
		</Container>
	);
};

export default NotFound;
