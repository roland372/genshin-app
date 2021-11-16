import { React, Fragment } from 'react';
import Footer from './Footer';
// import Navbar from './NavigationBar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<Fragment>
			{/* <Navbar /> */}
			<Sidebar />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
