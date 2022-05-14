import React from 'react';

const Templates = props => {
	const {
		characterSelect,
		setLevelLow,
		setLevelHigh,
		setNALow,
		setNAHigh,
		setESLow,
		setESHigh,
		setEBLow,
		setEBHigh,
	} = props;
	return (
		<section className='text-color bg-primary-dark rounded'>
			{characterSelect && (
				<div className=''>
					<section className='rounded-top p-2 bg-primary-light my-2'>
						<h5 className=''>Templates</h5>
					</section>
					<div></div>
					<div className='mb-2 pt-2 pb-3'>
						<button
							className='btn btn-primary me-2'
							onClick={e => {
								e.preventDefault();
								setLevelLow(1);
								setLevelHigh(14);
								setNALow(1);
								setNAHigh(10);
								setESLow(1);
								setESHigh(10);
								setEBLow(1);
								setEBHigh(10);
							}}
						>
							Max
						</button>
						<button
							className='btn btn-warning me-2'
							onClick={e => {
								e.preventDefault();
								setLevelLow(1);
								setLevelHigh(12);
								setNALow(1);
								setNAHigh(8);
								setESLow(1);
								setESHigh(8);
								setEBLow(1);
								setEBHigh(8);
							}}
						>
							80-8-8-8
						</button>
						<button
							className='btn btn-danger me-2'
							onClick={e => {
								e.preventDefault();
								setLevelLow(1);
								setLevelHigh(1);
								setNALow(1);
								setNAHigh(1);
								setESLow(1);
								setESHigh(1);
								setEBLow(1);
								setEBHigh(1);
							}}
						>
							Reset
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Templates;
