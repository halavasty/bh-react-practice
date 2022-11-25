import React, { useState } from "react";
import { PostItem } from "../PostItem";

export function PostList({ list, deleteItem }) {
  const empty = <div>Пусто</div>;
  const listPost = list.map((item) => {
    return (
      <PostItem
        deleteItem={() => deleteItem(item.id)}
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
