import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const singinwithgoogle = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handlesingout = () => {
            signOut(auth)
            .then(() => {
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    } ,[])

    return {
        user,
        singinwithgoogle,
        handlesingout
    }
}

export default useFirebase;