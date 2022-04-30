import React from 'react';
import ReactMarkdown from 'react-markdown';

const Main = ({ activeNote, onUpdateNote }) => {
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
			{/* <----- Note inputs -----> */}
			<section className='app-main-note-edit'>
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
				<ReactMarkdown className='markdown-preview'>
					{activeNote.body}
				</ReactMarkdown>
			</section>
		</div>
	);
};

export default Main;
