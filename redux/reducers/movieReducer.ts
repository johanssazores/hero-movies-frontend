import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  SET_PAGE,
} from "@/redux/actions/movieActions";

const initialState = {
  movies: [],
  movie: {},
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
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
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
