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

const characterCollectionRef = collection(db, 'characters');

class CharacterDataService {
	addCharacter = newCharacter => {
		return addDoc(characterCollectionRef, newCharacter);
	};

	updateCharacter = (id, updatedCharacter) => {
		//* check if character exists in database(collection)
		const characterDoc = doc(db, 'characters', id);
		return updateDoc(characterDoc, updatedCharacter);
	};

	deleteCharacter = id => {
		//* check if character exists in database(collection)
		const characterDoc = doc(db, 'characters', id);
		return deleteDoc(characterDoc);
	};

	getAllCharacters = () => {
		return getDocs(characterCollectionRef);
	};

	getCharacter = id => {
		const characterDoc = doc(db, 'characters', id);
		return getDoc(characterDoc);
	};
}

export default new CharacterDataService();
