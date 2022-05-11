import React, { useState, useEffect, useRef } from 'react';

//? <----- Components ----->
import { motion } from 'framer-motion/dist/framer-motion';

const Avatar = ({ characters, handleClick }) => {
	const [width, setWidth] = useState(0);
	//* useRef to get width of carousel
	const carousel = useRef();
	//* runs when component gets mounted to screen
	useEffect(() => {
		// console.log(carousel);

		//* full width
		// console.log(carousel.current.scrollWidth);
		//* width of content that's currently on screen
		// console.log(carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<section>
			<h2 className='border-bottom mx-2'>Avatars</h2>
			<div className='mx-2'>
				<div className='row'>
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
							{characters.map(characters => {
								return (
									<motion.div
										className='item col-lg-2 col-md-3 col-5'
										key={characters.data.name}
									>
										<img
											src={characters.data.avatar}
											alt={characters.data.name}
										/>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Avatar;
