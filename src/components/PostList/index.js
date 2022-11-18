import React, { useState } from "react";
import { PostItem } from "../PostItem";

export function PostList({ list }) {
  return (
    <div className="PostList">
      <h3>List</h3>
      {list.length ? (
        list.map((item) => {
          return (
            <PostItem key={item.id} author={item.author} value={item.text} />
          );
        })
      ) : (
        <div>Пусто</div>
      )}
    </div>
  );
}
