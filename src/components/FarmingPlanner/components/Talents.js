import React from 'react';

const Talents = props => {
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
		// onInputChange,
	} = props;

	// console.log(characterSelect);

	return (
		<section className='d-flex flex-column text-light my-2'>
			{characterSelect && (
				<section className='d-inline-block mb-2'>
					<div className='border rounded'>
						<h5 className='mt-2'>Character Level</h5>
						<div className='d-flex align-items-center justify-content-center my-2'>
							<div className='me-2'>Select level</div>
							<select
								className='btn btn-sm btn-light text-start mx-2'
								value={levelLow}
								onChange={e => {
									const value = parseInt(e.target.value);
									setLevelLow(value);
									console.log(value);
								}}
							>
								{levelOptions.map(o => (
									<option key={o.value} value={o.value}>
										{o.name}
									</option>
								))}
							</select>
							<div className='mx-1'>-</div>
							<select
								className='btn btn-sm btn-light text-start mx-2'
								value={levelHigh}
								onChange={e => {
									const value = parseInt(e.target.value);
									setLevelHigh(value);
									console.log(value);
								}}
							>
								{levelOptions.map(o => (
									<option key={o.value} value={o.value}>
										{o.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</section>
			)}
			{characterSelect && (
				//* <----- Talents ----->
				<div className='border rounded'>
					<h5 className='my-2'>Talents</h5>

					{/* <----- normal attack -----> */}
					{charactersData.map(c =>
						characterSelect === c.data.name ? (
							<div
								className='d-flex align-items-center justify-content-between border rounded p-3 m-2'
								key={c.data.name}
							>
								<div className='d-flex align-items-center'>
									<img
										src={c.data.skillTalents[0].image}
										alt=''
										className='img-fluid me-2'
										width='40px'
									/>
									<div className='text-start'>
										<div>{c.data.skillTalents[0].name}</div>
										<div>Lv. {NAHigh}</div>
									</div>
								</div>
								<div className='d-flex'>
									<select
										className='btn btn-sm btn-light text-start'
										value={NALow}
										onChange={e => {
											const value = parseInt(e.target.value);
											setNALow(value);
										}}
									>
										{talentOptions.map(o => (
											<option key={o.value} value={o.value}>
												{o.name}
											</option>
										))}
									</select>
									<div className='mx-1'>-</div>
									<select
										className='btn btn-sm btn-light text-start'
										value={NAHigh}
										onChange={e => {
											const value = parseInt(e.target.value);
											setNAHigh(value);
										}}
									>
										{talentOptions.map(o => (
											<option key={o.value} value={o.value}>
												{o.name}
											</option>
										))}
									</select>
								</div>
							</div>
						) : (
							<div key={c.data.name}></div>
						)
					)}

					{/* <----- elemental skill -----> */}
					{charactersData.map(c =>
						characterSelect === c.data.name ? (
							<div
								className='d-flex align-items-center justify-content-between border rounded p-3 m-2'
								key={c.data.name}
							>
								<div className='d-flex align-items-center'>
									<img
										src={c.data.skillTalents[1].image}
										alt=''
										className='img-fluid me-2'
										width='40px'
									/>
									<div className='text-start'>
										<div>{c.data.skillTalents[1].name}</div>
										<div>Lv. {ESHigh}</div>
									</div>
								</div>
								<div className='d-flex'>
									<select
										className='btn btn-sm btn-light text-start'
										value={ESLow}
										onChange={e => {
											const value = parseInt(e.target.value);
											setESLow(value);
										}}
									>
										{talentOptions.map(o => (
											<option key={o.value} value={o.value}>
												{o.name}
											</option>
										))}
									</select>
									<div className='mx-1'>-</div>
									<select
										className='btn btn-sm btn-light text-start'
										value={ESHigh}
										onChange={e => {
											const value = parseInt(e.target.value);
											setESHigh(value);
										}}
									>
										{talentOptions.map(o => (
											<option key={o.value} value={o.value}>
												{o.name}
											</option>
										))}
									</select>
								</div>
							</div>
						) : (
							<div key={c.data.name}></div>
						)
					)}

					{/* <----- elemental burst -----> */}
					{charactersData.map(c =>
						c.data.name === characterSelect ? (
							<div
								className='d-flex align-items-center justify-content-between border rounded p-3 m-2'
								key={c.data.name}
							>
								<div className='d-flex align-items-center me-3'>
									<img
										src={c.data.skillTalents[2].image}
										alt=''
										className='img-fluid me-2'
										width='40px'
									/>
									<div className='text-start'>
										<div>{c.data.skillTalents[2].name}</div>
										<div>Lv. {EBHigh}</div>
									</div>
								</div>
								<div className='d-flex'>
									<select
										className='btn btn-sm btn-light text-start'
										value={EBLow}
										onChange={e => {
											const value = parseInt(e.target.value);
											setEBLow(value);
										}}
									>
										{talentOptions.map(o => (
											<option key={o.value} value={o.value}>
												{o.name}
											</option>
										))}
									</select>
									<div className='mx-1'>-</div>
									<select
										className='btn btn-sm btn-light text-start'
										value={EBHigh}
										onChange={e => {
											const value = parseInt(e.target.value);
											setEBHigh(value);
										}}
									>
										{talentOptions.map(o => (
											<option key={o.value} value={o.value}>
												{o.name}
											</option>
										))}
									</select>
								</div>
							</div>
						) : (
							<div key={c.data.name}></div>
						)
					)}
				</div>
			)}
		</section>
	);
};

export default Talents;
