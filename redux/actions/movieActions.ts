import { Dispatch } from "redux";
import {
  fetchMovies as fetchMoviesApi,
  fetchMovie as fetchMovieApi,
} from "@/services/movieService";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const SET_PAGE = "SET_PAGE";

export const fetchMovies: any =
  (page: number, token: any) => async (dispatch: Dispatch) => {
    const movies = await fetchMoviesApi(page, token);
    dispatch({ type: FETCH_MOVIES, payload: movies });
  };

export const fetchMovie: any =
  (movieId: string, token: any) => async (dispatch: Dispatch) => {
    const movie = await fetchMovieApi(movieId, token);
    dispatch({ type: FETCH_MOVIE, payload: { movie } });
  };

export const setPage = (page: number) => {
  return { type: SET_PAGE, payload: page };
};
