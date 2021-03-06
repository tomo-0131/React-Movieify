import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth()
export const db = firebase.firestore()

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider)
  .then((res) => {
    console.log(res)

  }).catch((err) => {
    console.error(err)
  })
}

export const logOut = () => {
  firebase.auth().signOut()
  .then((res) => {
    console.log("ログアウト完了")
    document.location.reload();
  }).catch((error) => {
    console.error(error.message)
  })
}
