import React, { useEffect, useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelector } from "./components/MySelector";
import { getPosts } from "./services/posts";

function App() {
  const [list, setList] = useState([]);
  const deleteItem = (id) => {
    console.log(id);
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    async function fetchUser() {
      const posts = await getPosts(1);

      setList(posts);
    }
    fetchUser();
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
      <PostList deleteItem={deleteItem} list={list} />
    </div>
  );
}

export default App;
