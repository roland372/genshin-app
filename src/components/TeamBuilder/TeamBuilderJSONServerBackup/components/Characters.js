import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Characters = props => {
	// console.log(props.array);
	// console.log(props.filterCharacters(props.array));

	return (
		<div>
			<section className='d-flex flex-row justify-content-between align-items-center'>
				{props.filterCharacters(props.array).map(character => {
					const { name, image, rarity, elementImage, element } = character;

					// console.log('correct order:', props.array);
					// console.log("'wrong order:',", character.name);

					// const arr = [(props.array[0] = character)];
					// console.log(arr);

					let rarityColor = '';
					rarity === 5
						? (rarityColor = 'rarity5bg')
						: (rarityColor = 'rarity4bg');
					return (
						<div key={name} className='mx-2'>
							<OverlayTrigger
								placement='top'
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

export default Characters;