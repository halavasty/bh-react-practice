import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmm_dQmBa_hWuJi12Jlo40XGV_Ju2Eb9s",
  authDomain: "bh-blog-c1a5d.firebaseapp.com",
  projectId: "bh-blog-c1a5d",
  storageBucket: "bh-blog-c1a5d.appspot.com",
  messagingSenderId: "755063065980",
  appId: "1:755063065980:web:599e87500d40a1842ca8f9",
  measurementId: "G-Y7P8ST8ENT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const login = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log("user", user);

    const q = query(
      collection(firestore, "users"),
      where("uid", "==", user.uid)
    );
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  auth.signOut();
};
