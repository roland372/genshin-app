import React, { Fragment } from 'react';

const Banner = props => {
	return (
		<Fragment>
			<div className='d-md-flex'>
				<section className='p-2'>
					<img src={props.characterBannerImg} alt='' className='img-fluid' />
				</section>
				<section className='p-2'>
					<img src={props.weaponBannerImg} alt='' className='img-fluid' />
				</section>
			</div>
			<h5>{props.bannerDuration}</h5>
		</Fragment>
	);
};

export default Banner;
