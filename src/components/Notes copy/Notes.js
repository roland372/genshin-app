import { useEffect, useState } from 'react';

// <----- Styles ----->
import './Styles.css';

// <----- Components ----->
import Main from './Main';
import Sidebar from './Sidebar';

const Notes = () => {
	//* store notes in array and pass them into Sidebar as props
	const [notes, setNotes] = useState(
		localStorage.notes ? JSON.parse(localStorage.notes) : []
	);
	// console.log(notes);

	//* when the note is clicked we want to set it as active, so we can edit it
	const [activeNote, setActiveNote] = useState(false);
	// console.log(activeNote);

	//* add notes to local storage on every update
	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	//* add a new note
	const onAddNote = () => {
		//* create an object and add parameters
		const newNote = {
			id: Date.now(),
			title: '',
			body: '',
			lastModified: Date.now(),
		};

		//* add a new note to existing notes (put it in the beginning)
		setNotes([newNote, ...notes]);
		setActiveNote(newNote.id);
	};

	//* to delete a note filter existing notes and delete the one that matches the id we clicked
	const onDeleteNote = noteId => {
		setNotes(notes.filter(({ id }) => id !== noteId));
	};

	//* when we click update note
	const onUpdateNote = updatedNote => {
		const updatedNotesArr = notes.map(note => {
			if (note.id === updatedNote.id) {
				return updatedNote;
			}
			return note;
		});

		setNotes(updatedNotesArr);
	};

	//* find note to edit by getting it's id when we clcick the note
	const getActiveNote = () => {
		return notes.find(({ id }) => id === activeNote);
	};

	return (
		<div className='d-flex'>
			<Sidebar
				notes={notes}
				onAddNote={onAddNote}
				onDeleteNote={onDeleteNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>
			<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
		</div>
	);
};

export default Notes;
