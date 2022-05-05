import React from 'react';

const Ascension = props => {
	return (
		<tr>
			<th scope='row'>{props.ascensionPhase}</th>
			<td>{props.level}</td>
			<td className='text-start'>
				<div className='d-flex align-items-center mx-2'>
					<img src={props.ascensionMaterialImage} width='64px' alt='' />
					<span>{props.ascensionMaterialName}</span>
					<span className='rounded px-1 py-2 mx-2'>
						{props.ascensionMaterialAmount}
					</span>
				</div>
			</td>
			<td>
				<div className='d-flex align-items-center mx-2'>
					<img src={props.bossMaterialImage} width='64px' alt='' />
					<span>{props.bossMaterialName}</span>
					<span className='rounded p-2 mx-2'>{props.bossMaterialAmount}</span>
				</div>
			</td>
			<td>
				<div className='d-flex align-items-center mx-2'>
					<img src={props.localSpecialityImage} width='64px' alt='' />
					<span>{props.localSpecialityName}</span>
					<span className='rounded p-2 mx-2'>
						{props.localSpecialityAmount}
					</span>
				</div>
			</td>
			<td>
				<div className='d-flex align-items-center mx-2'>
					<img src={props.commonMaterialImage} width='64px' alt='' />
					<span>{props.commonMaterialName}</span>
					<span className='rounded p-2 mx-2'>{props.commonMaterialAmount}</span>
				</div>
			</td>
			<td>
				<div className='d-flex align-items-center mx-2'>
					<img src='images/Materials/Item_Mora.png' width='64px' alt='' />
					<span className='rounded p-2 mx-2'>{props.moraCost}</span>
				</div>
			</td>
		</tr>
	);
};

export default Ascension;
