import React, { useState } from 'react';

import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';

import Artifact from './Artifact';

import data from '../../../assets/data/Artifacts/artifacts.json';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Artifacts = () => {
	useDocumentTitle('Artifacts');

	// search
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<Container>
			<CardComponent title='Artifacts'>
				<section className='mx-2'>
					<input
						type='text'
						className='form-control'
						placeholder='Search for artifact'
						onChange={event => {
							setSearchTerm(event.target.value);
							// console.log(event.target.value);
						}}
					/>
				</section>
				<div className='table-responsive mx-2'>
					<table
						className='table table-sm table-striped table-hover table-dark align-middle'
						style={{ minWidth: '400px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Name</th>
								<th scope='col'>Rarity</th>
								<th scope='col'>Pieces</th>
								<th scope='col'>Bonuses</th>
							</tr>
						</thead>
						<tbody>
							{data.artifacts
								.filter(value => {
									if (value.name === '') {
										return value;
									} else if (
										value.name
											.toLocaleLowerCase()
											.includes(searchTerm.toLocaleLowerCase())
									) {
										return value;
									}
									return 0;
								})
								.map((artifact, index) => {
									return (
										<Artifact
											key={index}
											name={artifact.name}
											rarity={artifact.max_rarity}
											image={artifact.image}
											bonus1={artifact['2-piece_bonus']}
											bonus2={artifact['4-piece_bonus']}
										/>
									);
								})}
							{/* {data.artifacts} */}
						</tbody>
					</table>
				</div>
			</CardComponent>
		</Container>
	);
};

export default Artifacts;
