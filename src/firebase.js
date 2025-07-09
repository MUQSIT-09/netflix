import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,
     EmailAuthProvider, 
     getAuth, 
     signInWithEmailAndPassword,
     signOut} from "firebase/auth";
import {addDoc, 
    collection, 
    getFirestore} from "firebase/firestore";
import { Await } from "react-router-dom";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBbWKK-5wBs3DVrnne7jvZEq3PbbZnIib0",
  authDomain: "netflix-b9cf5.firebaseapp.com",
  projectId: "netflix-b9cf5",
  storageBucket: "netflix-b9cf5.firebasestorage.app",
  messagingSenderId: "1096409891544",
  appId: "1:1096409891544:web:27982254b737395f2a4dad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.displayName,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    signOut(auth);
}

export {auth,db,login,signup,logout}