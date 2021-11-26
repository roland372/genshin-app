import React from 'react';

const EventHeading = props => {
	return (
		<div className='table-responsive mx-3'>
			<table
				className='table table-dark table-striped table-sm align-middle'
				style={{ minWidth: '700px' }}
			>
				<thead>
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

export default EventHeading;
