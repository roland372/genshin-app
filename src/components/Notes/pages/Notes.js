import { useEffect, useState } from 'react';

// <----- Styles ----->
import '../styles/Styles.css';

// <----- Components ----->
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

import useDocumentTitle from '../../../hooks/useDocumentTitle';

import NotesDataService from '../services/notes.services';

import { useUserAuth } from '../../../context/UserAuthContext';

const Notes = () => {
	useDocumentTitle('Notes');

	const { user } = useUserAuth();

	const [notesDatabase, setNotesDatabase] = useState([]);

	//* when the note is clicked we want to set it as active, so we can edit it
	const [activeNote, setActiveNote] = useState(false);

	useEffect(() => {
		getNotesDatabase();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getNotesDatabase = async () => {
		const data = await NotesDataService.getAllNotes();
		setNotesDatabase(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
	};

	//* create an object and add parameters
	const newNote = {
		id: Date.now(),
		title: '',
		body: '',
		owner: user.uid,
		lastModified: Date.now(),
	};

	//* add a new note
	const onAddNote = async e => {
		e.preventDefault();

		//* add a new note to existing notes (put it in the beginning)
		setNotesDatabase([newNote, ...notesDatabase]);
		// setActiveNote(newNote.id);

		try {
			await NotesDataService.addNote(newNote);
			console.log('note added to database');
			await getNotesDatabase();
		} catch (err) {
			console.log(err);
		}

		// setActiveNote(notesDatabase.filter(({ id }) => id !== activeNote));
	};

	//* to delete a note filter existing notes and delete the one that matches the id we clicked
	const onDeleteNote = async noteId => {
		await NotesDataService.deleteNote(noteId);
		setNotesDatabase(notesDatabase.filter(({ id }) => id !== noteId));
	};

	//* when we click update note
	const onUpdateNote = async updatedNote => {
		NotesDataService.updateNote(activeNote, updatedNote);
		// console.log(updatedNote.id);
		const updatedNotesArr = notesDatabase.map(note => {
			if (note.id === updatedNote.id) {
				return updatedNote;
			}
			return note;
		});

		setNotesDatabase(updatedNotesArr);
	};

	//* find note to edit by getting it's id when we clcick the note
	const getActiveNote = () => {
		return notesDatabase.find(({ id }) => id === activeNote);
	};

	return (
		<div className='notes'>
			<Sidebar
				notes={notesDatabase.filter(owner => owner.owner === user.uid)}
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
