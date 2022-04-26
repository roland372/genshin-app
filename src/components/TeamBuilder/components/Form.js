import React from 'react';
import Select from 'react-select';

const Form = props => {
	return (
		<form onSubmit={e => props.onSubmit(e)} className='text-dark'>
			<div className='form-group mx-2 mb-2'>
				<input
					type='text'
					className='form-control'
					placeholder='Enter Team Name'
					name='name'
					maxLength='20'
					value={props.name || ''}
					onChange={e => props.onInputChange(e)}
				/>
			</div>
			<small className='text-danger d-flex m-2'>{props.formErrors.name}</small>
			<Select
				className='text-start mx-2 mb-2'
				isMulti
				placeholder='Select up to 4 team members'
				options={props.characterNames}
				onChange={props.selectValues}
				isOptionDisabled={() => props.select.length === 4}
			/>
			<small className='text-danger d-flex m-2'>
				{props.formErrors.select}
			</small>
			<div className='mx-2 mb-2'>
				<textarea
					rows='4'
					className='form-control'
					placeholder='Enter Team Description'
					name='description'
					maxLength='250'
					value={props.description}
					onChange={e => props.onInputChange(e)}
				/>
			</div>
			{props.children}
		</form>
	);
};

export default Form;
