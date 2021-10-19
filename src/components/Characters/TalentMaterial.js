import React from 'react';

const TalentMaterial = props => {
	return (
		<tr>
			<th>{props.level}</th>
			<td className='d-flex justify-content-center'>
				<div>
					<img src={props.talentBookImage} width='50px' alt='' />
					<span className='mx-2'>{props.talentBookAmount}</span>
				</div>
				<div>
					<img src={props.commonMaterialImage} width='50px' alt='' />
					<span className='mx-2'>{props.commonMaterialAmount}</span>
				</div>
				<div>
					<img src={props.bossMaterialImage} width='50px' alt='' />
					<span className='mx-2'>{props.bossMaterialAmount}</span>
				</div>
				<div>
					<img src={props.crownImage} width='50px' alt='' />
					<span className='mx-2'>{props.crownAmount}</span>
				</div>
			</td>
			<td>
				<img src={props.moraImage} width='50px' alt='' />
				<span className='ms-2'>{props.moraAmount}</span>
			</td>
		</tr>
	);
};

export default TalentMaterial;
