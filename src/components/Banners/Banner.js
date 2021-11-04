import React from 'react';

const Banner = props => {
	return (
		<section className='border border-primary rounded m-2 p-2'>
			<h5 className='mx-1'>{props.duration}</h5>
			<div className='d-md-flex'>
				<section className='p-1'>
					<img src={props.characterBannerImage} alt='' className='img-fluid' />
					<h5 className='pt-1'>
						<a
							href={props.characterBannerLink}
							target='_blank'
							rel='noreferrer'
							className='link-info text-decoration-none'
						>
							{props.characterBannerName}
						</a>
					</h5>
				</section>
				<section className='p-1'>
					<img src={props.weaponBannerImage} alt='' className='img-fluid' />
					<h5 className='pt-1'>
						<a
							href={props.weaponBannerLink}
							target='_blank'
							rel='noreferrer'
							className='link-info text-decoration-none'
						>
							{props.weaponBannerName}
						</a>
					</h5>
				</section>
			</div>
		</section>
	);
};

export default Banner;
