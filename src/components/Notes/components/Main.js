import React, { useState } from 'react';

//? <----- Styles ----->
import { Modal } from 'react-bootstrap';

//? <----- Components ----->
import MarkdownGuide from './MarkdownGuide';
import { toast } from 'react-toastify';

//? <----- Markdown ----->
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

//? <----- Icons ----->
import { BiInfoCircle } from 'react-icons/bi';

const Main = ({ activeNote, onUpdateNote, NotesDataService }) => {
	//* <----- info modal state ----->
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const noteUpdatedNotification = () =>
		toast.success('Note Updated', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: '',
		});

	//* <----- Editing ----->
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

	const onSubmit = async () => {
		await NotesDataService.updateNote(activeNote.id, activeNote);
		noteUpdatedNotification();
	};

	// setInterval(() => {
	// 	NotesDataService.updateNote(activeNote.id, activeNote);
	// 	noteUpdatedNotification();
	// }, 3000);

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
				<div className='info d-flex justify-content-between'>
					<button className='btn btn-success mb-2' onClick={() => onSubmit()}>
						Save
					</button>
					<button className='info-button' onClick={handleShow}>
						<BiInfoCircle />
					</button>
				</div>
				<input
					className='bg-primary-medium'
					type='text'
					id='title'
					placeholder='Enter a title...'
					value={activeNote.title}
					maxLength='50'
					onChange={e => onEditField('title', e.target.value)}
					autoFocus
				/>
				<textarea
					className='textarea bg-primary-medium'
					resize='none'
					id='body'
					placeholder='Write your note here...'
					value={activeNote.body}
					maxLength='750'
					onChange={e => onEditField('body', e.target.value)}
				/>
			</section>
			{/* <----- Note preview -----> */}
			<div className='bg-primary-light rounded p-2'>
				<h4 className='pt-1'>Markdown Preview</h4>
			</div>
			<section className='app-main-note-preview bg-secondary-medium rounded'>
				<h1 className='preview-title text-start mb-2'>{activeNote.title}</h1>
				<ReactMarkdown
					children={activeNote.body}
					remarkPlugins={[remarkGfm]}
					className='markdown-preview text-start'
					components={{
						img: ({ node, ...props }) => (
							<img style={{ maxWidth: '100%' }} {...props} alt='alt' />
						),
					}}
				/>
			</section>
		</div>
	);
};

export default Main;
