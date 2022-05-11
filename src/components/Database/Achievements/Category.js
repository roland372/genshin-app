import React from 'react';

//? <----- Components ----->
import { Accordion } from 'react-bootstrap';

const Category = props => {
	return (
		<Accordion>
			<Accordion.Item eventKey={props.eventKey}>
				<Accordion.Header>
					<div className='text-dark'>
						<h4>{props.categoryName}</h4>
						<h6>{props.progress}</h6>
					</div>
				</Accordion.Header>
				<Accordion.Body className='bg-dark'>{props.children}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Category;
