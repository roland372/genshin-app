import React, { useState, useEffect } from 'react';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';
import BlogList from './BlogList';
import useFetch from './useFetch';
// import characterData from '../../assets/data/Characters/characters.json';
// import weaponData from '../../assets/data/database/Weapons/weapons.json';

// import Select from 'react-select';

const FarmingPlanner = () => {
	// const { characters } = characterData;
	// const { weapons } = weaponData;
	// const characterOptions = [];
	// // const weaponOptions = [];

	// characters.map(character => {
	// 	return characterOptions.push({
	// 		value: character.name,
	// 		label: (
	// 			<section
	// 				className='d-flex justify-content-between'
	// 				onClick={e => {
	// 					console.log(character.name);
	// 				}}
	// 			>
	// 				<div className='mx-3'>
	// 					<img src={character.image} width='40px' alt='' />
	// 					{character.name}
	// 				</div>
	// 				<div className='mx-3'>
	// 					<img src={character.elementImage} width='40px' alt='' />
	// 					<img src={character.weaponImage} width='40px' alt='' />
	// 				</div>
	// 			</section>
	// 		),
	// 	});
	// });

	// // characterOptions.map(o => {
	// // 	return console.log(o);
	// // });

	// return (
	// 	<Container>
	// 		<CardComponent title='Farming Planner'>
	// 			<div className='mx-3 table-responsive'>
	// 				<table
	// 					className='table table-sm table-dark table-striped align-middle text-center table-bordered'
	// 					style={{ minWidth: '700px' }}
	// 				>
	// 					<thead>
	// 						<tr>
	// 							<th scope='col'>Name</th>
	// 							<th scope='col'>Ascension</th>
	// 							<th scope='col'>Talent</th>
	// 							<th scope='col'>Weapon</th>
	// 							<th scope='col'></th>
	// 						</tr>
	// 					</thead>
	// 					<tbody>
	// 						<tr>
	// 							<th scope='row' className='text-center'>
	// 								<div className='d-flex align-items-center justify-content-around ms-3'>
	// 									<div className='form-check form-switch'>
	// 										<input
	// 											className='form-check-input'
	// 											type='checkbox'
	// 											id='flexSwitchCheckChecked'
	// 										/>
	// 									</div>
	// 									<div>
	// 										<img src={characters[0].image} width='40px' alt='' />
	// 										<span>{characters[0].name}</span>
	// 									</div>
	// 									<div>
	// 										<img
	// 											src={characters[0].elementImage}
	// 											width='30px'
	// 											alt=''
	// 										/>
	// 										<img
	// 											src={characters[0].weaponImage}
	// 											width='30px'
	// 											alt=''
	// 										/>
	// 									</div>
	// 									<span className='rounded p-2 ms-2'></span>
	// 								</div>
	// 							</th>
	// 							<td>
	// 								<div className='form-check form-switch d-flex justify-content-center'>
	// 									<input
	// 										className='form-check-input'
	// 										type='checkbox'
	// 										id='flexSwitchCheckChecked'
	// 									/>
	// 								</div>
	// 							</td>
	// 							<td>
	// 								<div className='form-check form-switch d-flex justify-content-center'>
	// 									<input
	// 										className='form-check-input'
	// 										type='checkbox'
	// 										id='flexSwitchCheckChecked'
	// 									/>
	// 								</div>
	// 							</td>
	// 							<td>
	// 								<select>
	// 									{weapons.map((weapon, index) => {
	// 										// console.log(weapon);
	// 										return (
	// 											<option key={index} value={weapon.name}>
	// 												{weapon.name}
	// 											</option>
	// 										);
	// 									})}
	// 								</select>
	// 							</td>
	// 							<td>
	// 								<button className='btn btn-sm btn-danger'>X</button>
	// 							</td>
	// 						</tr>
	// 					</tbody>
	// 				</table>
	// 			</div>
	// 			<section className='mx-3' style={{ width: '400px' }}>
	// 				<Select
	// 					className='text-black'
	// 					options={characterOptions}
	// 					placeholder='Select a character...'
	// 				/>
	// 			</section>

	// 			<section>
	// 				<h4>Farming section</h4>
	// 				<div>
	// 					<h5>Monday</h5>
	// 					<div>
	// 						<h5>Character</h5>
	// 						<section>
	// 							<h6>Domain of Mastery</h6>
	// 							<h6>Forsaken Rift</h6>
	// 						</section>
	// 						<section>
	// 							<div>
	// 								<img src='' alt='talentBook' srcSet='' />
	// 							</div>
	// 							<h6>Freedom</h6>
	// 						</section>
	// 					</div>
	// 					<h5>Weapon</h5>
	// 				</div>
	// 				<div>Tuesday</div>
	// 			</section>
	// 		</CardComponent>
	// 	</Container>
	// );

	// const [blogs, setBlogs] = useState([
	// 	{ title: 'title1', body: 'body1', author: 'author1', id: 1 },
	// 	{ title: 'title2', body: 'body2', author: 'author2', id: 2 },
	// 	{ title: 'title3', body: 'body3', author: 'author1', id: 3 },
	// ]);

	// const [name, setName] = useState('roland');

	// const handleDelete = id => {
	// 	const newBlogs = blogs.filter(blog => blog.id !== id);
	// 	setBlogs(newBlogs);
	// };

	// function that runs every time there's rerender
	// if we don't want to trigger it every single rerender we can pass dependency array as second argument - what should trigger this hook
	// useEffect(() => {
	// 	console.log('use effect');
	// 	console.log(name);
	// }, [name]);

	const {
		data: blogs,
		isLoading,
		error,
	} = useFetch('http://localhost:8000/blogs');

	return (
		<Container>
			<CardComponent title='Farming planner'>
				<div>
					{error && <div>{error}</div>}
					{isLoading && <div>loading...</div>}
					{blogs && (
						<BlogList
							blogs={blogs}
							title='all blogs'
							// handleDelete={handleDelete}
						/>
					)}
					{/* <button onClick={() => setName('new Name')}>change name</button> */}
					{/* <p>{name}</p> */}
					{/* <BlogList
						blogs={blogs.filter(blog => blog.author === 'author1')}
						title='hello'
						handleDelete={handleDelete}
					/> */}
				</div>
			</CardComponent>
		</Container>
	);
};

export default FarmingPlanner;
