import { useState } from "react";
import { MyButton } from "../MyButton";
import { MyInput } from "../MyInput";
import "./PostForm.scss";

export function PostForm({ addNewPost }) {
  const [post, setPost] = useState({ author: "", text: "" });
  const handlerAuthor = (e) => {
    setPost({ ...post, author: e.target.value });
  };
  const handlerText = (e) => {
    setPost({ ...post, text: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    addNewPost({ ...post, id: Date.now() });
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
