import React from 'react';

const TalentMaterial = props => {
	return (
		<tr className='text-color'>
			<th scope='row'>{props.level}</th>
			<td className='text-start'>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='d-flex align-items-center mx-2'>
						<img src={props.talentBookImage} width='64px' alt='' />
						<span>{props.talentBookName}</span>
					</div>
					<span className='p-2 mx-2'>{props.talentBookAmount}</span>
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
						<img src={props.crownImage} width='64px' alt='' />
						<span>{props.crownName}</span>
					</div>
					<span className='p-2 mx-2'>{props.crownAmount}</span>
				</div>
			</td>
			<td className='text-start'>
				<div className='d-flex align-items-center ms-2'>
					<img src={props.moraImage} width='64px' alt='' />
					<span className='p-2 mx-2'>{props.moraAmount}</span>
				</div>
			</td>
		</tr>
	);
};

export default TalentMaterial;
