import React, { useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelector } from "./components/MySelector";

function App() {
  const [list, setList] = useState([
    { id: 1, author: "Alex", text: "Title1" },
    { id: 2, author: "Vasil", text: "Title2" },
    { id: 3, author: "Masha", text: "Title3" },
  ]);

  const addNewPost = (post) => {
    setList([...list, post]);
  };

  const handleSelector = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <MySelector
        onChange={handleSelector}
        options={[
          { title: "Второй", value: "second" },
          { title: "Третий", value: "third" },
        ]}
      />
      <PostForm addNewPost={addNewPost} />
      <PostList list={list} />
    </div>
  );
}

export default App;
