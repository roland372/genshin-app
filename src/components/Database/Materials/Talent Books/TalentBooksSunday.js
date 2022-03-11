import React from 'react';
import TalentBook from './TalentBook';

const TalentBooksSunday = props => {
	return (
		<section>
			<div className='table-responsive mx-3'>
				<table
					className='table table-sm table-hover table-striped table-dark align-middle'
					style={{ minWidth: '400px' }}
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
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Resistance'
							days='Forsaken Rift'
						/>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Diligence'
							days='Taishan Mansion'
						/>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Elegance'
							days='Violet Court'
						/>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Ballad'
							days='Forsaken Rift'
						/>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Gold'
							days='Taishan Mansion'
						/>
						<TalentBook
							charactersData={props.charactersData}
							talentBook='Light'
							days='Violet Court'
						/>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default TalentBooksSunday;
