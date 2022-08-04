import React from 'react';

import { motion } from 'framer-motion/dist/framer-motion';

const Artifact = ({ name, rarity, image, bonus1, bonus2 }) => {
	//* Animation variables
	const initial = { x: 20 };
	const initialReverse = { x: -20 };
	const animate = { x: 0 };

	let rarityColor = '';
	if (rarity === '5★') {
		rarityColor = 'rarity5bg';
	} else if (rarity === '4★') {
		rarityColor = 'rarity4bg';
	} else if (rarity === '3★') {
		rarityColor = 'rarity3bg';
	}

	return (
		<tr className='new-line align-middle text-color'>
			<th scope='row'>
				<motion.div initial={initialReverse} animate={animate}>
					{name}
				</motion.div>
			</th>
			<td>
				<motion.div initial={initialReverse} animate={animate}>
					{rarity}
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initialReverse}
					animate={animate}
					whileHover={{ scale: 1.1 }}
				>
					<img
						className={`${rarityColor} rounded img-fluid`}
						src={image}
						width='50px'
						alt=''
					/>
				</motion.div>
			</td>
			<td className='text-start'>
				<motion.div initial={initial} animate={animate}>
					<b>2 Piece: </b>
					{bonus1}
				</motion.div>
				<motion.div initial={initial} animate={animate}>
					<b>4 Piece: </b>
					{bonus2}
				</motion.div>
			</td>
		</tr>
	);
};

export default Artifact;
