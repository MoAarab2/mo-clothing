import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyD2zDV7P1EmFuy4IUZB83V2ILg6YMyjtkw",
	authDomain: "mo-clothing.firebaseapp.com",
	projectId: "mo-clothing",
	storageBucket: "mo-clothing.appspot.com",
	messagingSenderId: "749479681582",
	appId: "1:749479681582:web:13ed32b4018447664d49bf",
	measurementId: "G-F5566HXP44"
};

export const creatUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapshot = await userRef.get()

if (!snapshot.exist) {
	const { displayName, email } = userAuth;
	const createdAt = new Date();

	try {
		await userRef.set({
			displayName,
			email,
			createdAt,
			...additionalData
		})
	} catch (error) {
console.log('error creating user', error.message)
	}
} 
return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;