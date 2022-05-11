import React from 'react';

//? <----- Components ----->
import Table from './Components/Table';
import TalentBook from './TalentBook';

const TalentBooksMonday = props => {
	return (
		<section>
			<Table days='Domain'>
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
			</Table>
		</section>
	);
};

export default TalentBooksMonday;
