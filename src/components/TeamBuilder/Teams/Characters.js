import React from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Characters = props => {
	return (
		<section className='text-light'>
			<div className='d-flex align-items-center justify-content-lg-start ms-2 pt-1 pb-2'>
				<Link className='btn btn-primary' to='/team-builder/'>
					Back to Team Builder
				</Link>
			</div>
			{props.children}
			<div className='mx-2 pb-1'>
				<hr />
				<h4 className='text-start'>Team members: </h4>
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
		</section>
	);
};

export default Characters;
