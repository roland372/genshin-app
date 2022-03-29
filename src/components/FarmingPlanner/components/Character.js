import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Character = props => {
	useDocumentTitle('View Character');

	const { characterSelect, charactersData } = props;

	return (
		<section className='d-flex flex-wrap justify-content-center align-items-center mx-2'>
			{charactersData.map(c =>
				c.name === characterSelect ? (
					<section key={c.name}>
						<OverlayTrigger
							placement='top'
							overlay={
								<Tooltip>
									<div>
										<img
											width='20px'
											src={c.elementImage}
											alt={c.element}
											className='me-2'
										/>
										{c.name}
									</div>
								</Tooltip>
							}
						>
							<div>
								<img
									src={c.image}
									alt={c.name}
									className={`img-fluid img-thumbnail ${
										c.rarity === 5 ? 'rarity5bg' : 'rarity4bg'
									}`}
								/>
							</div>
						</OverlayTrigger>
					</section>
				) : (
					<div key={c.name}></div>
				)
			)}
		</section>
	);
};

export default Character;

// import React from 'react';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// const Character = props => {
// 	const { characters, characterSelect } = props;
// 	return (
// 		<section>
// 			{characters.map(c =>
// 				c.name === characterSelect ? (
// 					<section key={c.name}>
// 						<OverlayTrigger
// 							placement='top'
// 							overlay={
// 								<Tooltip>
// 									<div>
// 										<img
// 											width='20px'
// 											src={c.elementImage}
// 											alt={c.element}
// 											className='me-2'
// 										/>
// 										{c.name}
// 									</div>
// 								</Tooltip>
// 							}
// 						>
// 							<div>
// 								<img
// 									src={c.image}
// 									alt={c.name}
// 									className={`img-fluid img-thumbnail ${
// 										c.rarity === 5 ? 'rarity5bg' : 'rarity4bg'
// 									}`}
// 								/>
// 							</div>
// 						</OverlayTrigger>
// 					</section>
// 				) : (
// 					<div key={c.name}></div>
// 				)
// 			)}
// 		</section>
// 	);
// };

// export default Character;

// // {
// // 	/* <section>
// // 					<div className='text-light'>
// // 						{characters.map(c =>
// // 							c.name === characterSelect ? (
// // 								<div
// // 									className='d-flex flex-column border align-items-center justify-content-center'
// // 									key={c.name}
// // 								>
// // 									<div className='d-flex align-items-center'>
// // 										<div className='text-center'>{c.name}</div>
// // 										<img className='p-1' src={c.rarityImage} alt='' />
// // 									</div>
// // 									<img
// // 										src={c.image}
// // 										alt=''
// // 										className='img-fluid'
// // 										width='300px'
// // 									/>
// // 								</div>
// // 							) : (
// // 								<div key={c.name}></div>
// // 							)
// // 						)}
// // 					</div>
// // 				</section> */
// // }
