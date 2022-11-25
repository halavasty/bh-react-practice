import React, { useEffect } from "react";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { PostItem } from "../PostItem";
import { firestore } from "../../firebase";

export function PostList({ deleteById }) {
  const [posts, loadingPosts] = useCollectionData(
    collection(firestore, "post")
  );

  const empty = <div>Пусто</div>;
  const listPost = posts
    ? posts.map((item) => {
        return (
          <PostItem
            deleteById={() => deleteById(item.id)}
            key={item.createAt}
            title={item.title}
            body={item.body}
          />
        );
      })
    : null;

  return loadingPosts ? (
    <div>Загружается..</div>
  ) : (
    <div className="PostList">
      <h3>List</h3>
      {posts.length ? listPost : empty}
    </div>
  );
}
