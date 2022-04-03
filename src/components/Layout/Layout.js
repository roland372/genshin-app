import { React, Fragment } from 'react';
import Footer from './Footer';
// import Navbar from './NavigationBar';
import Sidebar from './Sidebar';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<ScrollToTop />
			<Sidebar />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
