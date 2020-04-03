import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyAsYb0CPfw0FkHIt_M96P3SVmPPg5Ytij0",
    authDomain: "react-eccomerce-db.firebaseapp.com",
    databaseURL: "https://react-eccomerce-db.firebaseio.com",
    projectId: "react-eccomerce-db",
    storageBucket: "react-eccomerce-db.appspot.com",
    messagingSenderId: "1093029880563",
    appId: "1:1093029880563:web:002e6647cc7b213fc64d86",
    measurementId: "G-BSQJY5GL6G"
  };

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
if(!userAuth) return;
const userRef=firestore.doc(`users/${userAuth.uid}`)
const snapShot=await userRef.get();

    if(!snapShot.exist){
      const {displayName, email}=userAuth;
      const createdAt=new Date();
      try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
      }
      catch(error){
        console.log("eror creating user", error.message);

      }
    }
    return userRef;
  }
  firebase.initializeApp(config)
  export const auth=firebase.auth(); 
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;