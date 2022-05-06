import React from 'react';
import CardComponent from '../../../Layout/CardComponent';
import TalentBook from './TalentBook';
import Table from './Components/Table';

const TalentBooks = props => {
	return (
		<CardComponent title='Character Talents Materials'>
			<Table nation='Mondstadt' days='Days'>
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
			</Table>
			<Table nation='Liyue' days='Days'>
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
			</Table>
			<Table nation='Inazuma' days='Days'>
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
			</Table>
		</CardComponent>
	);
};

export default TalentBooks;
