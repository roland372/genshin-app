import React from 'react';
import CardComponent from '../../../Layout/CardComponent';
import TalentBook from './TalentBook';

const TalentBooks = props => {
	return (
		<CardComponent title='Character Talents Materials'>
			<section>
				<h4 className='text-center my-2 mx-3 p-2 border-bottom'>Mondstadt</h4>
				<div className='table-responsive mx-3'>
					<table
						className='table table-hover table-striped table-dark align-middle'
						style={{ minWidth: '600px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Materials</th>
								<th scope='col'>Days</th>
								<th scope='col'>Characters</th>
							</tr>
						</thead>
						<tbody>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Freedom'
								days='Monday, Thursday'
							/>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Resistance'
								days='Tuesday, Friday'
							/>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Ballad'
								days='Wednesday, Saturday'
							/>
						</tbody>
					</table>
				</div>
			</section>
			<section>
				<h4 className='text-center my-2 mx-3 p-2 border-bottom'>Liyue</h4>
				<div className='table-responsive mx-3'>
					<table
						className='table table-hover table-striped table-dark align-middle'
						style={{ minWidth: '600px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Materials</th>
								<th scope='col'>Days</th>
								<th scope='col'>Characters</th>
							</tr>
						</thead>
						<tbody>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Prosperity'
								days='Monday, Thursday'
							/>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Diligence'
								days='Tuesday, Friday'
							/>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Gold'
								days='Wednesday, Saturday'
							/>
						</tbody>
					</table>
				</div>
			</section>
			<section>
				<h4 className='text-center my-2 mx-3 p-2 border-bottom'>Inazuma</h4>
				<div className='table-responsive mx-3'>
					<table
						className='table table-hover table-striped table-dark align-middle'
						style={{ minWidth: '600px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Materials</th>
								<th scope='col'>Days</th>
								<th scope='col'>Characters</th>
							</tr>
						</thead>
						<tbody>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Transience'
								days='Monday, Thursday'
							/>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Elegance'
								days='Tuesday, Friday'
							/>
							<TalentBook
								charactersData={props.charactersData}
								talentBook='Light'
								days='Wednesday, Saturday'
							/>
						</tbody>
					</table>
				</div>
			</section>
		</CardComponent>
	);
};

export default TalentBooks;
