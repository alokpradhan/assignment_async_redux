import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Book = ({ book }) => {
  console.log(book);
  const title = book.best_book.title;
  const author = book.best_book.author.name;
  const rating = book.average_rating;
  const imageUrl = book.best_book.image_url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="col-3 offset-2"
      style={{ marginTop: "24px", marginBottom: "24px" }}
    >
      <h3>{title}</h3>
      <h5>By: {author}</h5>
      <p>Rating: {rating}</p>
      <img src={imageUrl} className="img img-thumbnail" alt="book-cover" />

      <br />

      <Button type="button" variant="primary" onClick={handleShow}>
        See details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>By: {author}</h5>
          <p>Published: {book.original_publication_year}</p>
          <p>Rating: {rating}</p>
          <img src={imageUrl} className="img img-thumbnail" alt="book-cover" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Book;
