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
					className='table table-sm bg-secondary-medium text-color table-striped align-middle table-borderless'
					style={{ minWidth: '460px' }}
				>
					<thead className='bg-primary-dark'>
						<tr>
							<th className='ps-4' scope='col'>
								Materials
							</th>
							<th scope='col'>{props.days}</th>
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
