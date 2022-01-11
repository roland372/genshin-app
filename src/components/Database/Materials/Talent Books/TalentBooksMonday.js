import React from 'react';
import TalentBook from './TalentBook';

const TalentBooksMonday = props => {
	return (
		<section>
			<div className='table-responsive mx-3'>
				<table
					className='table table-hover table-striped table-dark align-middle'
					style={{ minWidth: '600px' }}
				>
					<thead>
						<tr>
							<th scope='col'>Materials</th>
							<th scope='col'>Domain</th>
							<th scope='col'>Characters</th>
						</tr>
					</thead>
					<tbody>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Freedom'
							days='Forsaken Rift'
						/>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Prosperity'
							days='Taishan Mansion'
						/>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Transience'
							days='Violet Court'
						/>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default TalentBooksMonday;