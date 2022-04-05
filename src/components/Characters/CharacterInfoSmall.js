import React from 'react';

const CharacterInfo = props => {
	return (
		<div className=' mx-2 text-start'>
			<img className='img img-fluid rounded' src={props.card} alt='' />
			<ul className=' rounded list-unstyled p-2 bg-dark text-light'>
				<li className='my-2 p-1'>
					<b className='me-2'>Title:</b> {props.title}
				</li>
				<li className='my-2 p-1'>
					<b>Rarity:</b>
					<img className='ms-2' src={props.rarity} alt='' />
				</li>
				<li className='my-2 p-1'>
					<b>Element:</b>
					<img width='40px' className='ms-2' src={props.element} alt='' />
				</li>
				<li className='my-2 p-1'>
					<b>Weapon:</b>
					<img width='40px' className='ms-2' src={props.weapon} alt='' />
				</li>
				<li className='my-2 p-1'>
					<b className='me-2'>Sex:</b> {props.sex}
				</li>
				<li className='my-2 p-1'>
					<b className='me-2'>Birthday:</b> {props.birthday}
				</li>
				<li className='my-2 p-1'>
					<b className='me-2'>Constellation:</b> {props.constellation}
				</li>
				<li className='my-2 p-1'>
					<b className='me-2'>Nation:</b> {props.nation}
				</li>
				<li className='my-2 p-1'>
					<b className='me-2'>Affiliation:</b> {props.affiliation}
				</li>
				<li className='my-2 p-1'>
					<b className='me-2'>Special Dish:</b> {props.specialDish}
				</li>
				<li className='my-2 p-1'>
					<b className='me-2'>In-game descrption:</b> {props.description}
				</li>
				<li className='my-2 p-1'>
					<b>Talent Book:</b>
					<img width='50px' className='ms-2' src={props.talentBook} alt='' />
				</li>
				<li className='my-2 p-1'>
					<b>Ascension Materials:</b>
					<img
						width='50px'
						className='ms-2'
						src={props.ascensionMaterial1}
						alt=''
					/>
					<img
						width='50px'
						className='ms-2'
						src={props.ascensionMaterial2}
						alt=''
					/>
					<img
						width='50px'
						className='ms-2'
						src={props.ascensionMaterial3}
						alt=''
					/>
					<img
						width='50px'
						className='ms-2'
						src={props.ascensionMaterial4}
						alt=''
					/>
				</li>
			</ul>
		</div>
	);
};

export default CharacterInfo;
