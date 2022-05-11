import { db } from '../../../utils/firebaseConfig';

import {
	collection,
	getDocs,
	getDoc,
	updateDoc,
	doc,
	deleteDoc,
	addDoc,
} from 'firebase/firestore';

//* create reference to users collection
const userCollectionRef = collection(db, 'users');

class UserDataService {
	addUser = newUser => {
		return addDoc(userCollectionRef, newUser);
	};

	updateUser = (id, updatedUser) => {
		//* check if user exists in database(collection)
		const userDoc = doc(db, 'users', id);
		return updateDoc(userDoc, updatedUser);
	};

	deleteUser = id => {
		//* check if user exists in database(collection)
		const userDoc = doc(db, 'users', id);
		return deleteDoc(userDoc);
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
