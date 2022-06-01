import React, { useState } from 'react';

//? <----- Icons ----->
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<button
			style={{
				position: 'fixed',
				left: 100000,
				width: 0,
				height: 0,
			}}
		>
			<FaArrowCircleUp
				onClick={scrollToTop}
				style={{
					position: 'fixed',
					// width: '10%',
					left: '90%',
					bottom: '40px',
					height: '40px',
					fontSize: '3rem',
					zIndex: '10000',
					cursor: 'pointer',
					color: 'white',
					display: visible ? 'inline' : 'none',
				}}
			/>
		</button>
	);
};

export default ScrollToTop;
