import React, { useState } from "react";

export function Counter(props) {
  console.log(props);
  const [count, setCount] = useState(props.value);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h3>title - {props.children}</h3>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
}
