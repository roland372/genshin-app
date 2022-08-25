import React from 'react';

//? <----- Components ----->
import Table from './Components/Table';
import TalentBook from './TalentBook';

const TalentBooksTuesday = props => {
	return (
		<section>
			<Table days='Domain'>
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
					talentBook='Ingenuity'
					days='Steeple of Ignorance'
				/>
			</Table>
		</section>
	);
};

export default TalentBooksTuesday;
