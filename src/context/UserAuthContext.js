import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	getAuth,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	getAdditionalUserInfo,
} from 'firebase/auth';

import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from '../utils/firebaseConfig';

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const checkLoggedInUser = () => {
		const auth = getAuth();
		onAuthStateChanged(auth, user => {
			if (user) {
				console.log('user logged in');
				return true;
			} else {
				console.log('no user');
				return false;
			}
		});
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const signUp = async (email, password) => {
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			const user = res.user;
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				// eslint-disable-next-line no-restricted-globals
				name: user.email.split('@')[0],
				authProvider: 'local',
				email: user.email,
				color: '#0d6efd',
				description: '',
			});
		} catch (err) {
			console.error(err);
		}

		// return createUserWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = async () => {
		const googleAuthProvider = new GoogleAuthProvider();

		const result = await signInWithPopup(auth, googleAuthProvider);
		const { isNewUser, profile } = getAdditionalUserInfo(result);

		if (isNewUser) {
			addDoc(collection(db, 'users'), {
				uid: auth.currentUser.uid,
				// eslint-disable-next-line no-restricted-globals
				name: profile.name,
				authProvider: result.providerId,
				email: profile.email,
				color: '#0d6efd',
				description: '',
			});
		}
	};

	// const googleSignIn = () => {
	// 	const googleAuthProvider = new GoogleAuthProvider();
	// 	return signInWithPopup(auth, googleAuthProvider);
	// };

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentuser => {
			// console.log('Auth', currentuser);
			setUser(currentuser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<userAuthContext.Provider
			value={{ user, logIn, signUp, logOut, googleSignIn, checkLoggedInUser }}
		>
			{children}
		</userAuthContext.Provider>
	);
};

export function useUserAuth() {
	return useContext(userAuthContext);
}
