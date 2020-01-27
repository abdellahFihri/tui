import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config()

const  config= {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,//api key is hidden
    authDomain: "tui-assessment-app.firebaseapp.com",
    databaseURL: "https://tui-assessment-app.firebaseio.com",
    projectId: "tui-assessment-app",
    storageBucket: "tui-assessment-app.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,//hidden
    appId: `1:${process.env.REACT_APP_ID}:web:${process.env.REACT_APP_WEB}`,//hidden
    measurementId: process.env.REACT_APP_MESUREMENT_ID
  };

  export const createUserProfileDocument=async(userAuth)=>{
if(!userAuth) return;
const userRef=firestore.doc(`users/${userAuth.uid}`)
const snapShot= await userRef.get()
console.log(snapShot)
if(!snapShot.exists){
    const {displayName,email}=userAuth
    const createdAt=new Date();
    try{
await userRef.set({
    displayName,
    email,
    createdAt
})
    }catch(error){
console.log('error creating user',error.message)
    }
}
return userRef;
  }
  
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore= firebase.firestore();


  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;