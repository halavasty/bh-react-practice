import React, { useState } from "react";
import "./index.scss";

export function PostItem({ body, title, deleteById }) {
  return (
    <div className="PostItem">
      <div className="PostItem-Content">
        <h3>{title} </h3>
        <p>{body}</p>
      </div>
      <button className="PostItem-Controller" onClick={deleteById}>
        Удалить
      </button>
    </div>
  );
}
