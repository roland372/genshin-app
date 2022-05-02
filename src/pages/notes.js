import React from 'react';
import NotesDatabase from '../components/Notes/pages/Notes';
import NotesLocalStorage from '../components/Notes/pages/NotesLocalStorage';

import { useUserAuth } from '../context/UserAuthContext';

const Notes = () => {
	const { user } = useUserAuth();

	if (user) {
		return <NotesDatabase />;
	} else {
		return <NotesLocalStorage />;
	}
};

export default Notes;
