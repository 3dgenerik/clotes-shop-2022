// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD-plkXZU0Ch7XNLgqVjyabLH5TZExGnnU",
    authDomain: "cloth-shop-2022.firebaseapp.com",
    projectId: "cloth-shop-2022",
    storageBucket: "cloth-shop-2022.appspot.com",
    messagingSenderId: "906282599365",
    appId: "1:906282599365:web:40e3f0820c14dd5f0241ac",
    measurementId: "G-57LPMRGSK6"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {name, email} = userAuth;
      const createdAt = new Date();
      console.log(name);
      try{
        await userRef.set({
          name,
          email,
          createdAt,
          ...additionalData
        })
      }catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
