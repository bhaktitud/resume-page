import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFQQThwhqFTNafWWa10xSItZPgtD9j7ec",
    authDomain: "resume-page-90e17.firebaseapp.com",
    projectId: "resume-page-90e17",
    storageBucket: "resume-page-90e17.appspot.com",
    messagingSenderId: "975232342158",
    appId: "1:975232342158:web:7aadb6d4a101d40f6011df"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { db };