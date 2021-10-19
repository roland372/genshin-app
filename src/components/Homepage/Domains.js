import React from 'react';
import CardComponent from '../Layout/CardComponent';
import CharacterAmber from '../../assets/Character_Amber_Thumb.png';
import TalentFreedom from '../../assets/Item_Teachings_of_Freedom.png';

const Domains = () => {
	return (
		<CardComponent title='Today in domains'>
			<div className=''>
				<div>
					<img width='96px' src={TalentFreedom} alt='' />
					<img
						className='rounded-circle'
						width='80px'
						src={CharacterAmber}
						alt=''
					/>
					<img
						className='rounded-circle'
						width='80px'
						src={CharacterAmber}
						alt=''
					/>
					<img
						className='rounded-circle'
						width='80px'
						src={CharacterAmber}
						alt=''
					/>
					<img
						className='rounded-circle'
						width='80px'
						src={CharacterAmber}
						alt=''
					/>
				</div>
				<div>
					<img width='96px' src={TalentFreedom} alt='' />
					<img
						className='rounded-circle'
						width='80px'
						src={CharacterAmber}
						alt=''
					/>
				</div>
				<div>
					<img width='96px' src={TalentFreedom} alt='' />
					<img
						className='rounded-circle'
						width='80px'
						src={CharacterAmber}
						alt=''
					/>
				</div>
				<div>
					<img width='96px' src={TalentFreedom} alt='' />
					<img
						className='rounded-circle'
						width='80px'
						src={CharacterAmber}
						alt=''
					/>
				</div>
			</div>
		</CardComponent>
	);
};

export default Domains;
