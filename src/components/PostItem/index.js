import React, { useState } from "react";
import "./index.scss";

export function PostItem({ value, autour }) {
  return (
    <div className="PostItem">
      <h3>autour: {autour} </h3>
      <h3>{value}</h3>
    </div>
  );
}
