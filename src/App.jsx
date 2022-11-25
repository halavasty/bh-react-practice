import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelector } from "./components/MySelector";

import { auth, login, logout } from "./firebase";

function App() {
  const [user, isLoginUser] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    return fetch("https://jsonplaceholder.typicode.com/posts/?userId=1");
  };
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setIsLoading(false);
      if (!response.ok) {
        throw new Error(`status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setList(data);
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

  return !isLoginUser ? (
    <div className="App">
      {user ? (
        <button onClick={logout}>Выйти</button>
      ) : (
        <button onClick={login}>авторизоваться</button>
      )}

      <MySelector
        onChange={handleSelector}
        options={[
          { title: "Второй", value: "second" },
          { title: "Третий", value: "third" },
        ]}
      />
      <PostForm addNewPost={addNewPost} />
      {isLoading ? (
        <div>идёт загрузка</div>
      ) : list.length ? (
        <PostList deleteById={deleteById} list={list} />
      ) : (
        <div>Ничего нету</div>
      )}
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default App;
