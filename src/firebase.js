// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5c2eSUAAOX10uKr8-pY0Rguqt4uiZoCQ",
  authDomain: "netflix-clone-d93aa.firebaseapp.com",
  projectId: "netflix-clone-d93aa",
  storageBucket: "netflix-clone-d93aa.firebasestorage.app",
  messagingSenderId: "466625756036",
  appId: "1:466625756036:web:7c18592e6d91c1a8d5fbd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
try {
   const res = await createUserWithEmailAndPassword (auth,email,password)
   const user = res.user;
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
   })
} catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));
}
}
const login = async(email,password)=>{
try {
    await signInWithEmailAndPassword(auth,email,password)
} catch (error) {
    console.log(error)
 toast.error(error.code.split('/')[1].split('-').join(" "));
}
}
const logout = ()=>{
  signOut(auth)
}
export{auth,db,signup,login,logout}