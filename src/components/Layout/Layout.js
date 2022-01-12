import { React, Fragment } from 'react';
import Footer from './Footer';
// import Navbar from './NavigationBar';again
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Sidebar />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
