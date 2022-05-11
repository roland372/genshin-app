import React from 'react';

//? <----- Components ----->
import CardComponent from '../Layout/CardComponent';

const GeneralInfo = () => {
	return (
		<CardComponent title='Welcome to Genshin-App'>
			<p className='mx-3'>
				Welcome to Genshin-App, a fanmade Genshin Impact database with
				additional tools like team builder, farming planner, notes and much
				more.
			</p>
		</CardComponent>
	);
};

export default GeneralInfo;
