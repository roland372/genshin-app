import React from 'react';
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import useFetch from '../../../hooks/useFetch';
import ReactMarkdown from 'react-markdown';

const Weapons = () => {
	const { loading, error, data } = useFetch('http://localhost:1337/weapons');

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<Container>
			<CardComponent title='Weapons'>
				<div className='table-responsive mx-3'>
					<table
						className='table table-dark table-striped align-middle'
						style={{ minWidth: '700px' }}
					>
						<thead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Icon</th>
								<th scope='col'>Name</th>
								<th scope='col'>Rarity</th>
								<th scope='col' style={{ minWidth: '150px' }}>
									Base ATK (Lvl. 90)
								</th>
								<th scope='col' style={{ minWidth: '150px' }}>
									2nd Stat (Lvl. 90)
								</th>
								<th scope='col'>Passive</th>
							</tr>
						</thead>
						<tbody>
							{data.map(weapon => {
								const {
									id,
									name,
									image,
									rarity,
									atk,
									secondaryStat,
									description,
								} = weapon;
								return (
									<tr key={id}>
										<td>{id}</td>
										<td>
											<img
												src={`http://localhost:1337${image.url}`}
												width='80px'
												alt=''
											/>
										</td>
										<td>{name}</td>
										<td>{rarity} ★</td>
										<td>{atk}</td>
										<td>{secondaryStat}</td>
										<td>
											<ReactMarkdown>{description}</ReactMarkdown>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Weapons;
