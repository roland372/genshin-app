import React from 'react';

const Table = props => {
	return (
		<section>
			<div className='table-responsive mx-2 rounded'>
				<table
					id='table-striped'
					className='table table-sm bg-secondary-medium text-color table-striped align-middle table-borderless'
					style={{ minWidth: '400px' }}
				>
					<thead className='bg-primary-dark'>
						<tr>
							<th className='ps-4' scope='col'>
								Materials
							</th>
							<th scope='col'>Boss Name</th>
							<th scope='col'>Characters</th>
						</tr>
					</thead>
					<tbody>{props.children}</tbody>
				</table>
			</div>
		</section>
	);
};

export default Table;
