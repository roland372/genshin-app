import React from 'react';

//? <----- Router ----->
import { Link } from 'react-router-dom';

//? <----- Components ----->
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion/dist/framer-motion';

const SingleCharacter = props => {
	//* Animation variables
	const initial = { x: -10 };
	const initialReverse = { x: 10 };
	const animate = { x: 0 };
	const delay = 0.1;
	const type = 'spring';
	const bounce = 0.5;

	return (
		<tr className='text-color'>
			<td className='px-2'>
				<motion.div
					initial={initial}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					{props.index}
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initial}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					<img src={props.icon} width='80px' alt='' />
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initial}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					<Link className='link-color' to={`characters/${props.url}`}>
						{props.name}
					</Link>
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initial}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					<img src={props.rarityImage} alt='' />
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initial}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					<OverlayTrigger
						placement='top'
						overlay={<Tooltip>{props.elementName}</Tooltip>}
					>
						<img src={props.elementImage} width='40px' alt='' />
					</OverlayTrigger>
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initial}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					<OverlayTrigger
						placement='top'
						overlay={<Tooltip>{props.weaponName}</Tooltip>}
					>
						<img src={props.weaponImage} width='40px' alt='' />
					</OverlayTrigger>
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initialReverse}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					{props.sex}
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initialReverse}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					{props.nation}
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initialReverse}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					{props.HP}
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initialReverse}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					{props.ATK}
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initialReverse}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					{props.DEF}
				</motion.div>
			</td>
			<td>
				<motion.div
					initial={initialReverse}
					animate={animate}
					transition={{ delay: delay, type: type, bounce: bounce }}
				>
					{props.ascension}
				</motion.div>
			</td>
		</tr>
	);
};

export default SingleCharacter;
