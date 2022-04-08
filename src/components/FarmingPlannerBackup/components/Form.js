import React from 'react';
import Select from 'react-select';

import Talents from './Talents';
import Templates from './Templates';

const Form = props => {
	const {
		levelOptions,
		charactersData,
		talentOptions,
		characterSelect,
		levelLow,
		setLevelLow,
		levelHigh,
		setLevelHigh,
		NAHigh,
		NALow,
		setNALow,
		setNAHigh,
		ESHigh,
		ESLow,
		setESLow,
		setESHigh,
		EBHigh,
		EBLow,
		setEBLow,
		setEBHigh,
		onSubmit,
		characterNames,
		setCharacterSelect,
		// onInputChange,
		formErrors,
		children,
	} = props;

	// console.log(characterSelect);

	return (
		<section>
			<form onSubmit={e => onSubmit(e)} className='text-dark'>
				<Select
					className='text-start mb-2'
					placeholder="Select a character to view it's materials"
					options={characterNames}
					// onChange={e => setCharacterSelect(e.value)}
					// onChange={e => onInputChange(e.value)}
					onChange={e => {
						setCharacterSelect(e.value);
						// onInputChange(e.value);
					}}
				/>
				<small className='text-danger d-flex m-2'>{formErrors.select}</small>
				<Talents
					levelOptions={levelOptions}
					charactersData={charactersData}
					talentOptions={talentOptions}
					characterSelect={characterSelect}
					levelLow={levelLow}
					setLevelLow={setLevelLow}
					levelHigh={levelHigh}
					setLevelHigh={setLevelHigh}
					NAHigh={NAHigh}
					NALow={NALow}
					setNALow={setNALow}
					setNAHigh={setNAHigh}
					ESHigh={ESHigh}
					ESLow={ESLow}
					setESLow={setESLow}
					setESHigh={setESHigh}
					EBHigh={EBHigh}
					EBLow={EBLow}
					setEBLow={setEBLow}
					setEBHigh={setEBHigh}
					// onChange={e => onInputChange(e)}
				/>
				{children}
			</form>
			<Templates
				characterSelect={characterSelect}
				setLevelLow={setLevelLow}
				setLevelHigh={setLevelHigh}
				setNALow={setNALow}
				setNAHigh={setNAHigh}
				setESLow={setESLow}
				setESHigh={setESHigh}
				setEBLow={setEBLow}
				setEBHigh={setEBHigh}
			/>
		</section>
	);
};

export default Form;
