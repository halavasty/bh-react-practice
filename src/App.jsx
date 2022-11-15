import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  function myFunc(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <h2>Какой-то input: {search}</h2>
      <input onChange={myFunc} type="text" />
    </div>
  );
}

export default App;
