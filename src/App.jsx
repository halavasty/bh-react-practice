import React from "react";
import { PostList } from "./components/PostList";

function App() {
  const list = [
    { id: 1, autour: "Alex", value: "Title1" },
    { id: 2, autour: "Vasil", value: "Title2" },
    { id: 3, autour: "Masha", value: "Title3" },
  ];

  return (
    <div className="App">
      <PostList list={list} />
    </div>
  );
}

export default App;
