import React, { useState } from "react";
import { PostItem } from "../PostItem";

export function PostList({ list, deleteItem }) {
  console.log("list", list);
  const empty = <div>Пусто</div>;
  const listPost = list.map((item) => {
    return (
      <PostItem
        deleteItem={() => deleteItem(item.id)}
        key={item.id}
        author={item.author}
        text={item.text}
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
