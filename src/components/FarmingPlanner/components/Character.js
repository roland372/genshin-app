import React from 'react';

//? <----- Router ----->
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Character = props => {
	const { characterSelect, charactersData } = props;

	return (
		<section className='d-flex flex-wrap justify-content-center align-items-center mb-2 bg-primary-dark p-3 rounded'>
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
