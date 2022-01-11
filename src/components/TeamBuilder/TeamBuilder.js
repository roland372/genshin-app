import React, { useState } from 'react';
import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

const TeamBuilder = () => {
	const [counter, setCounter] = useState(0);
	return (
		<Container>
			<CardComponent title='Team Builder'>
				{/* <div>
					<p>counter: {counter}</p>
					<button
						className='btn btn-light'
						onClick={() => setCounter(counter + 1)}
					>
						increase
					</button>
					<button
						className='btn btn-light'
						onClick={() => setCounter(counter - 1)}
					>
						decrease
					</button>
					<button className='btn btn-light' onClick={() => setCounter(0)}>
						reset counter
					</button>
				</div> */}
				


			</CardComponent>
		</Container>
	);
};

export default TeamBuilder;
