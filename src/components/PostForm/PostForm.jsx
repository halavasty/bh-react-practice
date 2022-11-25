import { useState } from "react";
import { MyButton } from "../MyButton";
import { MyInput } from "../MyInput";
import "./PostForm.scss";

export function PostForm({ addNewPost }) {
  const [post, setPost] = useState({ title: "", body: "" });
  const handlerTitle = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handlerText = (e) => {
    setPost({ ...post, body: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    addNewPost({ ...post, id: Date.now() });
    setPost({ title: "", body: "" });
  };

  return (
    <form className="PostForm">
      <h2>Post form</h2>
      <MyInput onChange={handlerTitle} value={post.title} title="Title" />
      <MyInput onChange={handlerText} value={post.body} title="Text" />
      <MyButton onClick={submitForm} disabled={false}>
        Create
      </MyButton>
    </form>
  );
}
