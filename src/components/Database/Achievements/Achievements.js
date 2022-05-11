import React from 'react';

//? <----- Components ----->
import Container from '../../Layout/Container';
import CardComponent from '../../Layout/CardComponent';
import Category from './Category';
import Achievement from './Achievement';

const Achievements = () => {
	return (
		<Container>
			<div className='text-start'>
				<CardComponent title='Achievements'>
					<section className='p-2 text-light'>
						<Category
							eventKey='0'
							categoryName='Wonders of the World'
							progress='0/230 (0%)'
						>
							<Achievement
								name='Tales of Monstrous Madness'
								description='Collect the entire "Toki Alley Tales" series.'
							/>
						</Category>
					</section>
				</CardComponent>
			</div>
		</Container>
	);
};

export default Achievements;
