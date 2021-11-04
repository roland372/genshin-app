import React from 'react';

const TalentMaterial = props => {
	return (
		<tr>
			<th scope='row'>{props.level}</th>
			<td>
				<div>
					<img src={props.talentBookImage} width='50px' alt='' />
					<span className='mx-2'>{props.talentBookAmount}</span>
				</div>
			</td>
			<td>
				<div>
					<img src={props.commonMaterialImage} width='50px' alt='' />
					<span className='mx-2'>{props.commonMaterialAmount}</span>
				</div>
			</td>
			<td>
				<div>
					<img src={props.bossMaterialImage} width='50px' alt='' />
					<span className='mx-2'>{props.bossMaterialAmount}</span>
				</div>
			</td>
			<td>
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
