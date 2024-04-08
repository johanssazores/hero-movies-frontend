import { FETCH_MOVIES, SET_PAGE } from "@/redux/actions/movieActions";

const initialState = {
  movies: [],
  currentPage: 1,
  totalPages: 1,
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
