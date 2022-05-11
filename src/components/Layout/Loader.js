import React from 'react';

//? <----- Components ----->
import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';

const Loader = () => {
	const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
		max-width: 100%;
	`;

	return (
		<div className='mx-2'>
			<BarLoader
				color={'#0d6efd'}
				loading={true}
				css={override}
				size={200}
				height={10}
				width={2000}
			/>
		</div>
	);
};

export default Loader;
