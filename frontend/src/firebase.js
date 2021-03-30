import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBU2ibQkNBibzmPk4K-DDW-oi7NcWVsOs0',
	authDomain: 'facebook-mern-clone-69ba6.firebaseapp.com',
	projectId: 'facebook-mern-clone-69ba6',
	storageBucket: 'facebook-mern-clone-69ba6.appspot.com',
	messagingSenderId: '300572057192',
	appId: '1:300572057192:web:174e1e86860a112098e5dd',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
