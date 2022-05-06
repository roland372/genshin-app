import { useEffect, useState } from 'react';
import Container from '../../../components/Layout/Container';
import CardComponent from '../../../components/Layout/CardComponent';

//? <----- Styles ----->
import '../styles/Styles.css';

//? <----- Components ----->
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const NotesLocalStorage = () => {
	//* store notes in array and pass them into Sidebar as props
	const [notes, setNotes] = useState(
		localStorage.notes ? JSON.parse(localStorage.notes) : []
	);
	// console.log(notes);

	//* when the note is clicked set it as active, so it can be edited
	const [activeNote, setActiveNote] = useState(false);

	//* add notes to local storage on every note update
	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	const onAddNote = () => {
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

	//* when click update note
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
		<Container>
			<CardComponent title='Notes'>
				<div className='notes mx-2'>
					<Sidebar
						notes={notes}
						onAddNote={onAddNote}
						onDeleteNote={onDeleteNote}
						activeNote={activeNote}
						setActiveNote={setActiveNote}
					/>
					<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
				</div>
			</CardComponent>
		</Container>
	);
};

export default NotesLocalStorage;
