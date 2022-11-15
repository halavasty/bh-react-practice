import React, { useState } from "react";
import { PostItem } from "../PostItem";

export function PostList({ list }) {
  return (
    <div className="PostList">
      <h3>List</h3>
      {list.length ? (
        list.map((item, index) => {
          return (
            <PostItem key={item.id} autour={item.autour} value={item.value} />
          );
        })
      ) : (
        <div>Пусто</div>
      )}
    </div>
  );
}
