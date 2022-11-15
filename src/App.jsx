import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
}

export default App;
