import firebase from 'firebase'

const firebaseConfig = {
    apiKey           : "AIzaSyDczIHDRUrFPuwT9k6dWW4lBQB6fm9Zjkg",
    authDomain       : "clone-d402c.firebaseapp.com",
    projectId        : "clone-d402c",
    storageBucket    : "clone-d402c.appspot.com",
    messagingSenderId: "164943487878",
    appId            : "1:164943487878:web:187952b02cd3ea94f6c207",
    measurementId    : "G-QL25YW5CSP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export {db, auth, storage}

export default db
