import { React, Fragment, useState } from 'react';
import Footer from './Footer';
// import Navbar from './NavigationBar';again
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	// let [windowWitdh, setWindowWidth] = useState('');
	// windowWitdh = window.innerWidth;
	// console.log(windowWitdh);
	return (
		<Fragment>
			<Sidebar />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
