import React from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelector } from "./components/MySelector";
import { auth, login, logout, fireStore } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

function App() {
  const [posts, loadingPosts] = useCollectionData(
    collection(fireStore, "post")
  );
  const [user, loading] = useAuthState(auth);
  const handleSelector = (e) => {
    console.log(e.target.value);
  };

  return loading ? (
    <div>идёт загрузка</div>
  ) : (
    <div className="App">
      {user ? (
        <button onClick={logout}>выйти</button>
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
      <PostForm />
      {loadingPosts ? <div>loading..</div> : <PostList list={posts} />}
    </div>
  );
}

export default App;
