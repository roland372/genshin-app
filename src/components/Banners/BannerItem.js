import React from 'react';

import { motion } from 'framer-motion/dist/framer-motion';

const BannerItem = props => {
	//* Animation variables
	const initial = { x: 20 };
	const initialReverse = { x: -20 };
	const animate = { x: 0 };

	return (
		<tr className='text-color'>
			<td
				style={{
					width: '400px',
				}}
			>
				<motion.div initial={initialReverse} animate={animate}>
					<img src={props.image} className='img-fluid' alt='' />
				</motion.div>
			</td>
			<td>
				<motion.div initial={initial} animate={animate}>
					<h6>
						<a
							href={props.link}
							target='_blank'
							rel='noreferrer'
							className='link-color'
						>
							{props.name}
						</a>
					</h6>
				</motion.div>
			</td>
			<td>
				<motion.div initial={initial} animate={animate}>
					<h6>{props.startDate}</h6>
				</motion.div>
			</td>
			<td>
				<motion.div initial={initial} animate={animate}>
					<h6>{props.endDate}</h6>
				</motion.div>
			</td>
		</tr>
	);
};

export default BannerItem;
