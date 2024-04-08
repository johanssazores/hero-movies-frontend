import { Dispatch } from "redux";
import { fetchMovies as fetchMoviesApi } from "@/services/movieService";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const SET_PAGE = "SET_PAGE";

export const fetchMovies: any =
  (page: number) => async (dispatch: Dispatch) => {
    const movies = await fetchMoviesApi(page);
    dispatch({ type: FETCH_MOVIES, payload: movies });
  };

export const setPage = (page: number) => {
  return { type: SET_PAGE, payload: page };
};
