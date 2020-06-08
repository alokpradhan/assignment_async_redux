import { connect } from "react-redux";
import BookList from "../components/BookList";

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const BookListContainer = connect(mapStateToProps)(BookList);

export default BookListContainer;
