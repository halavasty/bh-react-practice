import React, { useEffect } from "react";
import { PostItem } from "../PostItem";

export function PostList({ list, deleteById }) {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("прошла секунда");
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const empty = <div>Пусто</div>;
  const listPost = list.map((item) => {
    return (
      <PostItem
        deleteById={() => deleteById(item.id)}
        key={item.id}
        title={item.title}
        body={item.body}
      />
    );
  });

  return (
    <div className="PostList">
      <h3>List</h3>
      {list.length ? listPost : empty}
    </div>
  );
}
