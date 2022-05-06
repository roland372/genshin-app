import React from 'react';
import Table from './Components/Table';
import TalentBook from './TalentBook';

const TalentBooksWednesday = props => {
	return (
		<section>
			<Table days='Domain'>
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
			</Table>
		</section>
	);
};

export default TalentBooksWednesday;
