import React, { useState } from 'react';

//? <----- Components ----->
import Loader from '../../Layout/Loader';
import { Modal } from 'react-bootstrap';

const Sidebar = ({
	notes,
	onAddNote,
	onDeleteNote,
	activeNote,
	setActiveNote,
	loading,
}) => {
	//* sort the notes descending based on when they were last modified
	const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

	//* <----- NoteId state ----->
	const [noteId, setNoteId] = useState('');

	//* <----- Modal state ----->
	const [show, setShow] = useState(false);

	//* <----- Modal functions ----->
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='app-sidebar'>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header
					closeButton
					closeVariant='white'
					className='bg-primary-light text-color'
				>
					<Modal.Title>Deleting Team</Modal.Title>
				</Modal.Header>
				<Modal.Body className='bg-primary-dark text-color'>
					Are you sure you want to delete selected note?
				</Modal.Body>
				<Modal.Footer className='bg-primary-dark text-color'>
					<button className='btn btn-warning' onClick={handleClose}>
						Cancel
					</button>
					<button
						className='btn btn-danger'
						onClick={() => {
							onDeleteNote(noteId);
							handleClose();
						}}
					>
						Delete
					</button>
				</Modal.Footer>
			</Modal>
			<div className='app-sidebar-header'>
				<h1>Your Notes</h1>
				{/* create a new note */}
				<button className='btn btn-primary mt-2' onClick={onAddNote}>
					Add
				</button>
			</div>
			<div className='app-sidebar-notes'>
				{loading ? (
					<Loader />
				) : (
					<div>
						{/* loop over notes and render them in sidebar*/}
						{sortedNotes.map(({ id, title, body, lastModified }, i) => (
							<div
								className={`app-sidebar-note ${
									id === activeNote && 'active bg-primary-light'
								}`}
								onClick={() => setActiveNote(id)}
								key={id}
							>
								<div className='sidebar-note-title'>
									<strong>
										{title && title.length >= 30
											? title.substr(0, 30) + '...'
											: title}
									</strong>
									{/* delete note by referencing it's id */}
									<button
										className='btn btn-danger text-color'
										// onClick={() => onDeleteNote(id)}
										onClick={() => {
											handleShow();
											setNoteId(id);
										}}
									>
										Delete
									</button>
								</div>
								{/* only render body if there's anything there, also limit characters to 100 */}
								<p className='text-start'>
									{body && body.length >= 100
										? body.substr(0, 100) + '...'
										: body}
								</p>
								<small className='note-meta'>
									Last Modified {/* format the date */}
									{new Date(lastModified).toLocaleDateString('en-GB', {
										hour: '2-digit',
										minute: '2-digit',
									})}
								</small>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
