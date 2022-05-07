import React from 'react';
import CardComponent from '../Layout/CardComponent';

import { usefulLinks } from '../Layout/Links';

const Links = () => {
	return (
		<CardComponent title='Useful Links'>
			<section>
				{usefulLinks.map(link => {
					const { id, url, text, icon } = link;
					return (
						<div key={id}>
							<a
								href={url}
								target='_blank'
								rel='noreferrer'
								className='link-color'
							>
								<span className='px-1'>{icon}</span>
								{text}
							</a>
						</div>
					);
				})}
			</section>
		</CardComponent>
	);
};

export default Links;
