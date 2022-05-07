import React from 'react';

const Ascension = props => {
	return (
		<tr className='text-color'>
			<th className='px-3' scope='row'>
				{props.ascensionPhase}
			</th>
			<td>{props.level}</td>
			<td className='text-start'>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='d-flex align-items-center mx-2'>
						<img src={props.ascensionMaterialImage} width='64px' alt='' />
						<span>{props.ascensionMaterialName}</span>
					</div>
					<span className='p-2 mx-2'>{props.ascensionMaterialAmount}</span>
				</div>
			</td>
			<td className='text-start'>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='d-flex align-items-center ms-2'>
						<img src={props.bossMaterialImage} width='64px' alt='' />
						<span>{props.bossMaterialName}</span>
					</div>
					<span className='p-2 mx-2'>{props.bossMaterialAmount}</span>
				</div>
			</td>
			<td className='text-start'>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='d-flex align-items-center ms-2'>
						<img src={props.localSpecialityImage} width='64px' alt='' />
						<span>{props.localSpecialityName}</span>
					</div>
					<span className='p-2 mx-2'>{props.localSpecialityAmount}</span>
				</div>
			</td>
			<td className='text-start'>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='d-flex align-items-center ms-2'>
						<img src={props.commonMaterialImage} width='64px' alt='' />
						<span>{props.commonMaterialName}</span>
					</div>
					<span className='p-2 mx-2'>{props.commonMaterialAmount}</span>
				</div>
			</td>
			<td className='text-start'>
				<div className='d-flex align-items-center ms-2'>
					<img src='images/Materials/Item_Mora.png' width='64px' alt='' />
					<span className='p-2 mx-2'>{props.moraCost}</span>
				</div>
			</td>
		</tr>
	);
};

export default Ascension;
