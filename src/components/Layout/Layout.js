import { React, Fragment, useState, useEffect } from 'react';

//? <----- Components ----->
import ScrollToTop from './ScrollToTop';
import Navbar from './NavigationBar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import useDimensions from 'react-cool-dimensions';

//? <----- Auth ----->
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Layout = ({ children }) => {
	const { observe, width } = useDimensions({});

	const auth = getAuth();
	const [userData, setUserData] = useState();

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				const currentUser = user;
				setUserData(currentUser);
			}
		});
	}, [auth]);

	return (
		<Fragment>
			<ScrollToTop />
			<section className='sticky-top' ref={observe}>
				{width < 1400 ? (
					<Sidebar userData={userData} />
				) : (
					<Navbar userData={userData} />
				)}
			</section>
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
