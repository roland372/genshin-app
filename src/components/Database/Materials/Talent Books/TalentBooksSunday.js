import React from 'react';

//? <----- Components ----->
import Table from './Components/Table';
import TalentBook from './TalentBook';

const TalentBooksSunday = props => {
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
				<TalentBook
					charactersData={props.charactersData}
					talentBook='Admonition'
					days='Steeple of Ignorance'
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
					talentBook='Ingenuity'
					days='Steeple of Ignorance'
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
				<TalentBook
					charactersData={props.charactersData}
					talentBook='Praxis'
					days='Steeple of Ignorance'
				/>
			</Table>
		</section>
	);
};

export default TalentBooksSunday;
