import React from 'react';

const AttributeScaling = props => {
	return (
		<section className='mx-2 my-2'>
			<h4>Attribute Scaling</h4>
			<div className='table-responsive'>
				<table className='table table-dark table-sm align-middle'>
					<thead>
						<tr>
							<th scope='col'>Level</th>
							<th scope='col'>1</th>
							<th scope='col'>2</th>
							<th scope='col'>3</th>
							<th scope='col'>4</th>
							<th scope='col'>5</th>
							<th scope='col'>6</th>
							<th scope='col'>7</th>
							<th scope='col'>8</th>
							<th scope='col'>9</th>
							<th scope='col'>10</th>
							<th scope='col'>11</th>
							<th scope='col'>12</th>
							<th scope='col'>13</th>
						</tr>
					</thead>
					<tbody>
						{props.data.map(skill => {
							return (
								<tr>
									<th style={{ minWidth: '100px' }}>{skill.LVL}</th>
									<td>{skill['1']}</td>
									<td>{skill['2']}</td>
									<td>{skill['3']}</td>
									<td>{skill['4']}</td>
									<td>{skill['5']}</td>
									<td>{skill['6']}</td>
									<td>{skill['7']}</td>
									<td>{skill['8']}</td>
									<td>{skill['9']}</td>
									<td>{skill['10']}</td>
									<td>{skill['11']}</td>
									<td>{skill['12']}</td>
									<td>{skill['13']}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default AttributeScaling;
