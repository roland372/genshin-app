import React from 'react';
import CardComponent from '../Layout/CardComponent';

const Constellations = props => {
	return (
		<CardComponent title='Constellations'>
			<div className='table-responsive mx-2 rounded'>
				<section>
					<table
						id='table-striped'
						className='table table-sm dark-blue-medium text-light table-striped align-middle table-borderless'
					>
						<thead className='dark-blue text-center'>
							<tr>
								<th className='px-3' scope='col'>
									Level
								</th>
								<th scope='col'>Icon</th>
								<th scope='col'>Name</th>
								<th scope='col'>Effect</th>
							</tr>
						</thead>
						<tbody>{props.children}</tbody>
					</table>
				</section>
			</div>
		</CardComponent>
	);
};

export default Constellations;
