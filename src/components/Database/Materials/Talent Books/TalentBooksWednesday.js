import React from 'react';

//? <----- Components ----->
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
				<TalentBook
					charactersData={props.charactersData}
					talentBook='Praxis'
					days='Steeple of Ignorance'
				/>
			</Table>
		</section>
	);
};

export default TalentBooksWednesday;
