import React from 'react';

//? <----- Styles ----->
import '../styles/StylesMarkdown.css';

//? <----- Components ----->
import { toast } from 'react-toastify';

//? <----- Markdown ----->
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

//? <----- Icons ----->

const Main = ({ activeNote, onUpdateNote, NotesDataService }) => {
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

	const onSubmit = async () => {
		await NotesDataService.updateNote(activeNote.id, activeNote);
		noteUpdatedNotification();
	};

	const mdParser = new MarkdownIt(/* Markdown-it options */);

	function handleEditorChange({ html, text }) {
		// console.log('handleEditorChange', html, text);
		// console.log(text);
		return text;
	}

	//* if no note is selected
	if (!activeNote) return <div className='no-active-note'>No Active Note</div>;

	return (
		<div className='app-main'>
			<section className='app-main-note-edit'>
				<div className='d-flex'>
					<button className='btn btn-success mb-2' onClick={() => onSubmit()}>
						Save{' '}
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
				<div className='d-flex flex-column'>
					<div className='bg-primary-light rounded p-2'>
						<h4 className='pt-2'>Markdown Preview</h4>
					</div>
					<MdEditor
						className='text-start'
						value={activeNote.body}
						style={{
							height: '80vh',
							lineHeight: '10px',
							// marginTop: '60px'
						}}
						renderHTML={text => mdParser.render(text)}
						onChange={e => onEditField('body', handleEditorChange(e))}
						canView={{
							menu: true,
							md: true,
							html: true,
							fullScreen: true,
							hideMenu: true,
						}}
					/>
				</div>
			</section>
		</div>
	);
};

export default Main;

// <----- old markdown ----->
// {/* <div className='app-main'>

// 	{/* <----- Note inputs -----> */}
// 	<section className='app-main-note-edit'>
// 		<div className='info d-flex justify-content-between'>
// 			<button className='btn btn-success mb-2' onClick={() => onSubmit()}>
// 				Save
// 			</button>
// 			<button className='info-button' onClick={handleShow}>
// 				<BiInfoCircle />
// 			</button>
// 		</div>
// 		<input
// 			className='bg-primary-medium'
// 			type='text'
// 			id='title'
// 			placeholder='Enter a title...'
// 			value={activeNote.title}
// 			maxLength='50'
// 			onChange={e => onEditField('title', e.target.value)}
// 			// onBlur={() => onSubmit()}
// 			autoFocus
// 		/>
// 		<textarea
// 			className='textarea bg-primary-medium'
// 			resize='none'
// 			id='body'
// 			placeholder='Write your note here...'
// 			value={activeNote.body}
// 			maxLength='750'
// 			onChange={e => onEditField('body', e.target.value)}
// 			// onBlur={() => onSubmit()}
// 		/>
// 	</section>
// 	{/* <----- Note preview -----> */}
// 	<div className='bg-primary-light rounded p-2'>
// 		<h4 className='pt-1'>Markdown Preview</h4>
// 	</div>
// 	<section className='app-main-note-preview bg-secondary-medium rounded'>
// 		<h1 className='preview-title text-start mb-2'>{activeNote.title}</h1>
// 		<ReactMarkdown
// 			children={activeNote.body}
// 			remarkPlugins={[remarkGfm]}
// 			className='markdown-preview text-start'
// 			components={{
// 				img: ({ node, ...props }) => (
// 					<img style={{ maxWidth: '100%' }} {...props} alt='alt' />
// 				),
// 			}}
// 		/>
// 	</section>
// </div>; */}
