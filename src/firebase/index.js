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
  apiKey: "AIzaSyDAcR2tgUmqKFTaHqBlaU4R-39NBHCO8CY",
  authDomain: "bh-posts.firebaseapp.com",
  projectId: "bh-posts",
  storageBucket: "bh-posts.appspot.com",
  messagingSenderId: "641863986482",
  appId: "1:641863986482:web:32a38db8b751dcd91cbb2b",
  measurementId: "G-Y6KF52RZ8V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const login = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;

    const q = query(
      collection(fireStore, "users"),
      where("uid", "==", user.uid)
    );
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(fireStore, "users"), {
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
