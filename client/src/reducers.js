import * as Actions from "./actions";

const initialState = {
  books: [],
  isFetching: false,
  error: null
};

const bookSearch = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.payload
      };
    case Actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default bookSearch;
