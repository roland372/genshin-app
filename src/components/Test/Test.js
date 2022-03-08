import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import characters from '../../constants/characters';

const Test = () => {
	const filteredCharacters = characters.filter(
		c =>
			c.data.name !== 'Traveler Anemo' &&
			c.data.name !== 'Traveler Geo' &&
			c.data.name !== 'Traveler Electro'
	);
	const [width, setWidth] = useState(0);

	// useRef to get width of carousel
	const carousel = useRef();

	// runs when component gets mounted to screen
	useEffect(() => {
		// console.log(carousel);

		// full width
		// console.log(carousel.current.scrollWidth);

		// width of content that's currently on screen
		// console.log(carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<div>
			<motion.div
				ref={carousel}
				className='carousel'
				whileTap={{ cursor: 'grabbing' }}
			>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className='inner-carousel'
				>
					{filteredCharacters.map(characters => {
						return (
							<motion.div className='item' key={characters.data.name}>
								<img src={characters.data.avatar} alt={characters.data.name} />
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Test;
