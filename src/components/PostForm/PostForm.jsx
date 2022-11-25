import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { MyButton } from "../MyButton";
import { MyInput } from "../MyInput";
import "./PostForm.scss";

import { auth, firestore } from "../../firebase";

export function PostForm({ addNewPost }) {
  const postCollection = collection(firestore, "post");
  const [user] = useAuthState(auth);
  const [post, setPost] = useState({ title: "", text: "" });
  const handlerTitle = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handlerText = (e) => {
    setPost({ ...post, text: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    addDoc(postCollection, {
      ...post,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createAt: serverTimestamp(),
    });
    // addNewPost({ ...post, id: Date.now() });
    setPost({ title: "", text: "" });
  };

  return (
    <form className="PostForm">
      <h2>Post form</h2>
      <MyInput onChange={handlerTitle} value={post.title} title="Title" />
      <MyInput onChange={handlerText} value={post.text} title="Text" />
      <MyButton onClick={submitForm} disabled={false}>
        Create
      </MyButton>
    </form>
  );
}
