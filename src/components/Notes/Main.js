import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BiInfoCircle } from 'react-icons/bi';
import { Modal } from 'react-bootstrap';
import MarkdownGuide from './MarkdownGuide';

const Main = ({ activeNote, onUpdateNote }) => {
	//* <----- Info Modal ----->
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const onEditField = (field, value) => {
		//* we want to update every field of our note, except the id
		onUpdateNote({
			...activeNote,
			[field]: value,
			lastModified: Date.now(),
		});
	};

	//* if no note is selected
	if (!activeNote) return <div className='no-active-note'>No Active Note</div>;

	return (
		<div className='app-main'>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton className='bg-dark text-light'>
					<Modal.Title>Markdown guide</Modal.Title>
				</Modal.Header>
				<Modal.Body className='bg-dark text-light'>
					<MarkdownGuide />
				</Modal.Body>
			</Modal>
			{/* <----- Note inputs -----> */}
			<section className='app-main-note-edit'>
				<div className='info'>
					<button className='info-button' onClick={handleShow}>
						<BiInfoCircle />
					</button>
				</div>
				<input
					type='text'
					id='title'
					placeholder='Enter a title...'
					value={activeNote.title}
					maxLength='50'
					onChange={e => onEditField('title', e.target.value)}
					autoFocus
				/>
				<textarea
					className='textarea'
					resize='none'
					id='body'
					placeholder='Write your note here...'
					value={activeNote.body}
					maxLength='750'
					onChange={e => onEditField('body', e.target.value)}
				/>
			</section>
			{/* <----- Note preview -----> */}
			<section className='app-main-note-preview'>
				<h1 className='preview-title'>{activeNote.title}</h1>
				<ReactMarkdown
					children={activeNote.body}
					className='markdown-preview'
					components={{
						img: ({ node, ...props }) => (
							<img style={{ maxWidth: '100%' }} {...props} alt='alt' />
						),
					}}
				/>

				{/* <ReactMarkdown className='markdown-preview'>
					{activeNote.body}
				</ReactMarkdown> */}
			</section>
		</div>
	);
};

export default Main;
