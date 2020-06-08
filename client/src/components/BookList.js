import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  const list = books.map(book => {
    return <Book book={book} key={book.id} />;
  });

  return <div className="book-list row">{list}</div>;
};

export default BookList;
