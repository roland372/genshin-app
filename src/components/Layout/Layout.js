import { React, Fragment } from 'react';

import ScrollToTop from './ScrollToTop';
import Navbar from './NavigationBar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import useDimensions from 'react-cool-dimensions';

const Layout = ({ children }) => {
	const { observe, width } = useDimensions({});

	return (
		<Fragment>
			<ScrollToTop />
			<section className='sticky-top' ref={observe}>
				{width < 1400 ? <Sidebar /> : <Navbar />}
			</section>
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
