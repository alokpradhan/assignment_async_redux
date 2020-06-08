// Search for books
export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const getBooksRequest = () => {
  return {
    type: GET_BOOKS_REQUEST
  };
};

export const getBooksSuccess = payload => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload
  };
};

export const getBooksFailure = error => {
  return {
    type: GET_BOOKS_FAILURE,
    error
  };
};

export const getBooks = term => {
  return dispatch => {
    dispatch(getBooksRequest());

    fetch(`api/v1/book_search?term=${term}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.state} ${response.statusText}`);
        }

        return response.json();
      })
      .then(books => {
        dispatch(
          getBooksSuccess(
            books["GoodreadsResponse"]["search"]["results"]["work"]
          )
        );
      })
      .catch(error => {
        dispatch(getBooksFailure(error));
      });
  };
};

// View book details
