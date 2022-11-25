import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MyButton } from "../MyButton";
import { MyInput } from "../MyInput";
import { auth, fireStore } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./PostForm.scss";

export function PostForm() {
  const [user] = useAuthState(auth);
  const [post, setPost] = useState({ author: "", text: "" });
  const postCollection = collection(fireStore, "post");
  const handlerAuthor = (e) => {
    setPost({ ...post, author: e.target.value });
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
    setPost({ author: "", text: "" });
  };

  return (
    <form className="PostForm">
      <h2>Post form</h2>
      <MyInput onChange={handlerAuthor} value={post.author} title="Author" />
      <MyInput onChange={handlerText} value={post.text} title="Text" />
      <MyButton onClick={submitForm} disabled={false}>
        Create
      </MyButton>
    </form>
  );
}
