import React, { useState } from "react";
import { Counter } from "../Counter";

export function Search({ value }) {
  const [search, setSearch] = useState("");
  function myFunc(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="Search">
      <h2>Какой-то input: {search}</h2>
      <input onChange={myFunc} type="text" />
      <Counter value={42}>Alex</Counter>
    </div>
  );
}
