"use client";
import React, { useEffect } from "react";
import Button from "@/components/Button";
import { RootState } from "@/redux/store";
import { fetchMovie } from "@/redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useLikedMovies } from "@/services/likeMoviesServices";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
const Movie = ({ id }: any) => {
  const { data: session } = useSession() as any;
  const { likedMovies, toggleLike } = useLikedMovies();
  const dispatch = useDispatch();
  const { movie } = useSelector((state: RootState) => state.movies);

  const userId = `${session?.user?.user_id}`;

  useEffect(() => {
    dispatch(fetchMovie(id, session?.user?.token));
  }, [dispatch, id, session?.user?.token]);

  return (
    <div>
      <div className="w-full shadow-lg rounded-lg border p-4 mb-6">
        <h2
          className="font-semibold"
          dangerouslySetInnerHTML={{ __html: movie?.title }}
        ></h2>
        <p className="font-light">{movie?.year}</p>
        <p
          className="font-light"
          dangerouslySetInnerHTML={{ __html: movie?.description }}
        ></p>
        <div className="mt-2 flex items-center justify-between">
          <button
            onClick={() => toggleLike(movie.id, userId)}
            className="text-indigo-600 text-2xl"
          >
            {likedMovies.some(
              (likedMovie: any) =>
                likedMovie.movieId === movie.id && likedMovie.userId === userId
            ) ? (
              <IoMdHeart />
            ) : (
              <IoIosHeartEmpty />
            )}
          </button>
        </div>
      </div>
      <Button anchor={true} href="/movies">
        Back
      </Button>
    </div>
  );
};

export default Movie;
