import React, { useState } from "react";

export function PostItem({ value, autour }) {
  return (
    <div className="Search">
      <h3>autour: {autour} </h3>
      <h3>{value}</h3>
    </div>
  );
}
