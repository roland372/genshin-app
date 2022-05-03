import { db } from '../../../utils/firebaseConfig';

import {
	collection,
	getDocs,
	getDoc,
	updateDoc,
	doc,
} from 'firebase/firestore';

const userCollectionRef = collection(db, 'users');

class UserDataService {
	updateUser = (id, updatedUser) => {
		// check if exists in database(collection)
		const userDoc = doc(db, 'users', id);
		return updateDoc(userDoc, updatedUser);
	};

	getAllUsers = () => {
		return getDocs(userCollectionRef);
	};

	getUser = id => {
		const userDoc = doc(db, 'users', id);
		return getDoc(userDoc);
	};
}

export default new UserDataService();
