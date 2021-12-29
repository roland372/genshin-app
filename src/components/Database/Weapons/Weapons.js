import React from 'react';
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import useFetch from '../../../hooks/useFetch';
import ReactMarkdown from 'react-markdown';
import weapons from '../../../assets/data/Weapons/weapons.json';

const Weapons = () => {
	// const { loading, error, data } = useFetch('http://localhost:1337/weapons');

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error...</p>;

	// console.log(weapons.weapons[0].swords[0].stats);

	// console.log(
	// 	weapons.weapons[0].swords[0].weaponAscension[0].ascensionMaterial1.name
	// );

	return (
		<Container>
			<CardComponent title='Weapons'>
				<section className='d-flex'>
				
					<div className=' mx-2'>
						<table
							className='table table-sm table-dark table-striped align-middle text-center table-bordered'
							style={{ minWidth: '200px' }}
						>
							<thead>
								<tr>
									<th scope='col'>lvl</th>
									<th scope='col'>base atk</th>
									<th scope='col'>crit dmg</th>
								</tr>
							</thead>
							<tbody>
								{weapons.weapons[0].swords[0].stats.map(stats => {
									return (
										<tr>
											<td>{stats.LVL}</td>
											<td>{stats['Base ATK']}</td>
											<td>{stats['Ascension Stat']}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					
					<div className='table-responsive mx-2 align-self-end'>
						<table
							className='table table-sm table-dark table-striped align-middle text-center table-bordered'
							style={{ minWidth: '1000px', maxWidth: '1200px' }}
						>
							<thead>
								<tr className='align-middle'>
									<th scope='col'>Ascension Material</th>
									<th scope='col'>Common Material</th>
									<th scope='col'>Common Material 2</th>
									<th scope='col'>Mora Cost</th>
								</tr>
							</thead>
							<tbody>
								{weapons.weapons[0].swords[0].weaponAscension.map(ascension => {
									return (
										<tr>
											<td>
												<div className='d-flex align-items-center ms-3'>
													<img
														src={ascension.ascensionMaterial1.image}
														width='64px'
														alt=''
													/>
													<span>{ascension.ascensionMaterial1.name}</span>
													<span className='px-1 py-2 ms-2'>
														{ascension.ascensionMaterial1.amount}
													</span>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center ms-3'>
													<img
														src={ascension.ascensionMaterial2.image}
														width='64px'
														alt=''
													/>
													<span>{ascension.ascensionMaterial2.name}</span>
													<span className='px-1 py-2 ms-2'>
														{ascension.ascensionMaterial2.amount}
													</span>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center ms-3'>
													<img
														src={ascension.ascensionMaterial3.image}
														width='64px'
														alt=''
													/>
													<span>{ascension.ascensionMaterial3.name}</span>
													<span className='px-1 py-2 ms-2'>
														{ascension.ascensionMaterial3.amount}
													</span>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center ms-3'>
													<span className='px-1 py-2 ms-2'>
														{ascension.moraCost}
													</span>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</section>

				{/* <div className='table-responsive mx-3'>
					<table
						className='table table-striped table-dark align-middle'
						style={{ minWidth: '700px' }}
					>
						<thead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Icon</th>
								<th scope='col'>Name</th>
								<th scope='col'>Rarity</th>
								<th scope='col'>Element</th>
								<th scope='col'>Weapon</th>
								<th scope='col'>Sex</th>
								<th scope='col'>Nation</th>
								<th scope='col'>HP</th>
								<th scope='col'>ATK</th>
								<th scope='col'>DEF</th>
								<th scope='col'>Ascension</th>
							</tr>
						</thead>
						<tbody>
							{weapons.weapons[0].bows.map((sword, index) => {
								return (
									<tr>
										<td>{index + 1}</td>
										<td>
											<img src={sword.image} width='80px' alt='' />
										</td>
										<td>
											<img src={sword.ascensionMaterial1} width='80px' alt='' />
										</td>
										<td>
											<img src={sword.ascensionMaterial2} width='80px' alt='' />
										</td>
										<td>
											<img src={sword.ascensionMaterial3} width='80px' alt='' />
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div> */}

				{/* <div className='table-responsive mx-3'>
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
				</div> */}
			</CardComponent>
		</Container>
	);
};

export default Weapons;
