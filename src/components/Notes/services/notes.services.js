import { db } from '../../../utils/firebaseConfig';

import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
	query,
	where,
} from 'firebase/firestore';

const notesCollectionRef = collection(db, 'notes');

class NotesDataService {
	addNote = newNote => {
		return addDoc(notesCollectionRef, newNote);
	};

	updateNote = (id, updatedNote) => {
		// check if exists in database(collection)
		const noteDoc = doc(db, 'notes', id);
		return updateDoc(noteDoc, updatedNote);
	};

	deleteNote = id => {
		// check if exists in database(collection)
		const noteDoc = doc(db, 'notes', id);
		return deleteDoc(noteDoc);
	};

	// getAllNotes = () => {
	// 	return getDocs(notesCollectionRef);
	// };

	getAllNotes = userId => {
		const q = query(notesCollectionRef, where('owner', '==', userId));
		return getDocs(q);
	};

	getNote = id => {
		const noteDoc = doc(db, 'notes', id);
		return getDoc(noteDoc);
	};
}

export default new NotesDataService();
