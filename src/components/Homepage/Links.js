import React from 'react';
import CardComponent from '../Layout/CardComponent';

import { FaBook } from 'react-icons/fa';
import { RiRoadMapFill } from 'react-icons/ri';
import { MdWeb } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

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
								className='link-info text-decoration-none'
							>
								<span className='px-1'>{icon}</span>
								{text}
							</a>
						</div>
					);
				})}
				{/* <div>
					<a
						href='https://webstatic-sea.mihoyo.com/app/ys-map-sea/'
						target='_blank'
						rel='noreferrer'
						className='link-info text-decoration-none'
					>
						<RiRoadMapFill size={25} />
						<span className='lead px-1'>Official Map</span>
					</a>
				</div>
				<div>
					<a
						href='https://genshin.mihoyo.com/en/'
						target='_blank'
						rel='noreferrer'
						className='link-info text-decoration-none'
					>
						<MdWeb size={25} />
						<span className='lead px-1'>Official website</span>
					</a>
				</div>
				<div>
					<a
						href='https://www.hoyolab.com/home'
						target='_blank'
						rel='noreferrer'
						className='link-info text-decoration-none'
					>
						<CgWebsite size={25} />
						<span className='lead px-1'>HoYoLAB</span>
					</a>
				</div>
				<div>
					<a
						href='https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki'
						target='_blank'
						rel='noreferrer'
						className='link-info text-decoration-none'
					>
						<FaBook size={25} />
						<span className='lead px-1'>Wikipedia</span>
					</a>
				</div> */}
			</section>
		</CardComponent>
	);
};

export default Links;
