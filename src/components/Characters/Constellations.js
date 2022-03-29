import React from 'react';
import CardComponent from '../Layout/CardComponent';

const Constellations = props => {
	return (
		<CardComponent title='Constellations'>
			<div className='mx-3 table-responsive'>
				<section>
					<table className='table table-dark table-sm align-middle'>
						<thead>
							<tr>
								<th scope='col'>Level</th>
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
