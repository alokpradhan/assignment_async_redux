import React from "react";
import "./App.css";
import SearchContainer from "../containers/SearchContainer";
import BookListContainer from "../containers/BookListContainer";

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <BookListContainer />
    </div>
  );
}

export default App;
