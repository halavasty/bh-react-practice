import React from "react";
import { Counter } from "./components/Counter";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search value={100} />
    </div>
  );
}

export default App;
