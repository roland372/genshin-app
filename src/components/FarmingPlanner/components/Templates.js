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
		<section className='text-light'>
			{characterSelect && (
				<div className='border rounded'>
					<h5 className='my-2'>Templates</h5>
					<div className='mb-2'>
						<button
							className='btn btn btn-primary'
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
							className='btn btn-warning'
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
							className='btn btn-danger'
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
