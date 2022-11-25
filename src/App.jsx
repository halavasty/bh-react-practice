import React, { useState, useEffect } from "react";
import axios from "axios";

import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelector } from "./components/MySelector";

function App() {
  const [list, setList] = useState([
    { id: 1, title: "Alex", body: "Title1" },
    { id: 2, title: "Vasil", body: "Title2" },
    { id: 3, title: "Masha", body: "Title3" },
  ]);

  const deleteById = (id) => {
    console.log(id);
    const newList = list.filter(function (item) {
      return item.id !== id;
    });
    setList(newList);
  };

  const getUsers = function () {
    return fetch("https://jsonplaceholder.typicode.com/posts/?userId=1");
  };
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      if (!response.ok) {
        throw new Error(`status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      // setList(data);
    } catch (error) {
      console.log("Opps!", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
      {list.length ? (
        <PostList deleteById={deleteById} list={list} />
      ) : (
        <div>Ничего нету</div>
      )}
    </div>
  );
}

export default App;
