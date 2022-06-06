import React from 'react';

//? <----- Components ----->
import Character from './Character';
import Materials from './Materials';
import SubmitButton from './SubmitButton';
import Talents from './Talents';
import Templates from './Templates';

const EditForm = props => {
	const {
		levelOptions,
		charactersData,
		characters,
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
		moraCharacter,
		moraTalent,
		expBooks,
		localSpeciality,
		characterCommonMaterial1,
		talentCommonMaterial1,
		characterCommonMaterial2,
		talentCommonMaterial2,
		characterCommonMaterial3,
		talentCommonMaterial3,
		bossAscensionMaterial,
		sliver,
		fragments,
		chunks,
		gemstones,
		bronzeTalentBooks,
		silverTalentBooks,
		goldTalentBooks,
		bossMaterial,
		crown,
		onSubmit,
		formErrors,
	} = props;

	return (
		<section>
			<form onSubmit={e => onSubmit(e)} className='text-dark'>
				<Character
					charactersData={characters}
					characterSelect={characterSelect}
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
				<Materials
					charactersData={charactersData}
					characterSelect={characterSelect}
					moraCharacter={moraCharacter}
					moraTalent={moraTalent}
					expBooks={expBooks}
					localSpeciality={localSpeciality}
					characterCommonMaterial1={characterCommonMaterial1}
					talentCommonMaterial1={talentCommonMaterial1}
					characterCommonMaterial2={characterCommonMaterial2}
					talentCommonMaterial2={talentCommonMaterial2}
					characterCommonMaterial3={characterCommonMaterial3}
					talentCommonMaterial3={talentCommonMaterial3}
					bossAscensionMaterial={bossAscensionMaterial}
					sliver={sliver}
					fragments={fragments}
					chunks={chunks}
					gemstones={gemstones}
					bronzeTalentBooks={bronzeTalentBooks}
					silverTalentBooks={silverTalentBooks}
					goldTalentBooks={goldTalentBooks}
					bossMaterial={bossMaterial}
					crown={crown}
				/>
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

				{/* submit button */}
				{characterSelect !== '' ? (
					<SubmitButton color={props.color} text={props.text} />
				) : null}
			</form>
		</section>
	);
};

export default EditForm;
