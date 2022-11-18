import React, { useState } from "react";
import "./index.scss";

export function PostItem({ value, author }) {
  return (
    <div className="PostItem">
      <h3>author: {author} </h3>
      <h3>{value}</h3>
    </div>
  );
}
