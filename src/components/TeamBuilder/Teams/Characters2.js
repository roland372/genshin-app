import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Characters2 = props => {
	return (
		<div>
			<div className='mx-2 pb-1 text-light'>
				<hr />
				<h4 className='text-start'>{props.heading}</h4>
			</div>
			<section className='d-flex flex-row justify-content-between align-items-center'>
				{props.filterCharacters(props.array).map(character => {
					const { name, image, rarity, elementImage, element } = character;

					let rarityColor = '';
					rarity === 5
						? (rarityColor = 'rarity5bg')
						: (rarityColor = 'rarity4bg');
					return (
						<div key={name} className='mx-2'>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip>
										<div>
											<img
												width='20px'
												src={elementImage}
												alt={element}
												className='me-2'
											/>
											{name}
										</div>
									</Tooltip>
								}
							>
								<div>
									<img
										src={image}
										alt={name}
										className={`img-fluid img-thumbnail ${rarityColor}`}
									/>
								</div>
							</OverlayTrigger>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Characters2;
