import React from "react";
import Button from "react-bootstrap/Button";

const Search = ({ onSubmit }) => {
  return (
    <div style={{ margin: "48px" }}>
      <h2 style={{ marginBottom: "24px" }}>Search for books</h2>
      <form className="search row" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          className="col-4 offset-4"
          style={{ marginRight: "16px" }}
        />
        <Button type="submit" className="btn btn-success btn-sm col-1">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
