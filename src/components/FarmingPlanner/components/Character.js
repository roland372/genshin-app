import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Character = props => {
	useDocumentTitle('View Character');

	const { characterSelect, charactersData } = props;

	return (
		<section className='d-flex flex-wrap justify-content-center align-items-center mx-2 mb-2'>
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
