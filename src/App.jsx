import React, { useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MyInput } from "./components/MyInput";
import icon from "./assets/icons/favicon.jpg";

function App() {
  const [list, setList] = useState([
    { id: 1, author: "Alex", text: "Title1" },
    { id: 2, author: "Vasil", text: "Title2" },
    { id: 3, author: "Masha", text: "Title3" },
  ]);

  const addNewPost = (post) => {
    setList([...list, post]);
  };

  return (
    <div className="App">
      <PostForm addNewPost={addNewPost} />
      <PostList list={list} />
    </div>
  );
}

export default App;
