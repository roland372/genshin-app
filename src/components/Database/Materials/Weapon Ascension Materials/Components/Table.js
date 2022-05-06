import React from 'react';

const Table = props => {
	return (
		<section>
			{props.nation ? (
				<h4 className='text-center my-2 mx-2 p-2 border-bottom '>
					{props.nation}
				</h4>
			) : null}
			<div className='table-responsive mx-2 rounded'>
				<table
					id='table-striped'
					className='table table-sm dark-blue-medium text-light table-striped align-middle table-borderless'
					style={{ minWidth: '400px' }}
				>
					<thead className='dark-blue'>
						<tr>
							<th className='ps-4' scope='col'>
								Materials
							</th>
							<th scope='col'>{props.days}</th>
							<th scope='col'>Weapons</th>
						</tr>
					</thead>
					<tbody>{props.children}</tbody>
				</table>
			</div>
		</section>
	);
};

export default Table;
