import React from 'react';

const Event = props => {
	return (
		<div className='table-responsive mx-3'>
			<table
				className='table table-dark table-striped'
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

export default Event;
