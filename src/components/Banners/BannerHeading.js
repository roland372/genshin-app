import React from 'react';

const BannerHeading = props => {
	return (
		<div className='table-responsive mx-2 rounded'>
			<table
				id='table-striped'
				className='table table-sm bg-secondary-medium text-color table-striped align-middle table-borderless'
				style={{ minWidth: '400px' }}
			>
				<thead className='bg-primary-dark'>
					<tr>
						<th scope='col'>Image</th>
						<th scope='col'>Name</th>
						<th scope='col'>Start</th>
						<th scope='col'>End</th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</table>
		</div>
	);
};

export default BannerHeading;
