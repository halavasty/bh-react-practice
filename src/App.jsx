import React from "react";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/MyButton";
import { MyInput } from "./components/MyInput";
import icon from "./assets/icons/favicon.jpg";

function App() {
  const list = [
    { id: 1, autour: "Alex", value: "Title1" },
    { id: 2, autour: "Vasil", value: "Title2" },
    { id: 3, autour: "Masha", value: "Title3" },
  ];

  const handleClick = () => {
    console.log("выведем в консоль");
  };

  return (
    <div className="App">
      <MyInput />

      <PostList list={list} />
    </div>
  );
}

export default App;
