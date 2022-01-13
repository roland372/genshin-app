import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const List = ({ items, removeItem, editItem }) => {
	return (
		<div className='m-2'>
			{items.map(item => {
				const { id, title } = item;
				return (
					<section
						key={id}
						className='d-flex justify-content-between border rounded'
					>
						<p className='ps-2 my-2'>{title}</p>
						<div className='btn-container'>
							<OverlayTrigger placement='top' overlay={<Tooltip>Edit</Tooltip>}>
								<button
									data-placement='top'
									type='button'
									className='btn btn-success mx-1'
									onClick={() => editItem(id)}
								>
									<FaEdit />
								</button>
							</OverlayTrigger>
							<OverlayTrigger
								placement='top'
								overlay={<Tooltip>Delete</Tooltip>}
							>
								<button
									type='button'
									className='btn btn-danger'
									onClick={() => removeItem(id)}
								>
									<FaTrash />
								</button>
							</OverlayTrigger>
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default List;
