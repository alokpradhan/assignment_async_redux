import { connect } from "react-redux";
import Search from "../components/Search";
import { getBooks } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const [input] = e.target.children;
      dispatch(getBooks(input.value));
    }
  };
};

const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchContainer;
