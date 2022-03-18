import React from 'react';
import Select from 'react-select';

const Form = props => {
	return (
		<form onSubmit={e => props.onSubmit(e)} className='text-dark'>
			<div className='form-group mx-2'>
				<input
					type='text'
					className='form-control form-control-lg'
					placeholder='Enter Team Name'
					name='name'
					value={props.name}
					onChange={e => props.onInputChange(e)}
				/>
			</div>
			<Select
				className='text-start mx-2 mb-3'
				isMulti
				placeholder='Select up to 4 team members'
				options={props.characterNames}
				onChange={props.selectValues}
				isOptionDisabled={() => props.select.length === 4}
			/>
			{props.children}
		</form>
	);
};

export default Form;
