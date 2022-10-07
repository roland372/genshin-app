import React from 'react';

const Footer = () => {
	return (
		<div className='d-flex flex-column'>
			<footer
				className='footer mt-auto py-3 bg-secondary-medium'
				style={{
					borderTop: '3px solid var(--bg-secondary-light)',
				}}
			>
				<div className='container'>
					<div className='text-color mx-2'>
						Genshin-App is not affiliated with HoYoverse. Genshin Impact and
						HoYoverse are trademarks or registered trademarks of HoYoverse.
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
