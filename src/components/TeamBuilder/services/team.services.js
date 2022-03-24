import { db } from '../../../utils/firebaseConfig';

import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
} from 'firebase/firestore';

const teamCollectionRef = collection(db, 'teams');

class TeamDataService {
	addTeam = newTeam => {
		return addDoc(teamCollectionRef, newTeam);
	};

	updateTeam = (id, updatedTeam) => {
		// check if exists in database(collection)
		const teamDoc = doc(db, 'teams', id);
		return updateDoc(teamDoc, updatedTeam);
	};

	deleteTeam = id => {
		// check if exists in database(collection)
		const teamDoc = doc(db, 'teams', id);
		return deleteDoc(teamDoc);
	};

	getAllTeams = () => {
		return getDocs(teamCollectionRef);
	};

	getTeam = id => {
		const teamDoc = doc(db, 'teams', id);
		return getDoc(teamDoc);
	};
}

export default new TeamDataService();
