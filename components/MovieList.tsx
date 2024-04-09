"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchMovies } from "@/redux/actions/movieActions";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import { useSession } from "next-auth/react";
import { useLikedMovies } from "@/services/likeMoviesServices";
const MovieList: React.FC = () => {
  const { data: session } = useSession() as any;
  const { likedMovies, toggleLike } = useLikedMovies();
  const dispatch = useDispatch();
  const { movies, currentPage } = useSelector(
    (state: RootState) => state.movies
  );

  const userId = `${session?.user?.user_id}`;

  useEffect(() => {
    dispatch(fetchMovies(currentPage, session?.user?.token));
  }, [dispatch, currentPage, session?.user?.token]);

  return (
    <div className="mt-6 px-6">
      {movies?.length ? (
        <>
          <Grid>
            {movies.map((movie: any) => (
              <Card key={movie.id}>
                <div className="flex flex-col justify-between h-full">
                  <div className="mt-2">
                    <h2
                      className="font-semibold"
                      dangerouslySetInnerHTML={{ __html: movie.title }}
                    ></h2>
                    <p className="font-light">{movie.year}</p>
                    <p
                      className="font-light"
                      dangerouslySetInnerHTML={{ __html: movie.description }}
                    ></p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <button
                      onClick={() => toggleLike(movie.id, userId)}
                      className="text-indigo-600 text-2xl"
                    >
                      {likedMovies.some(
                        (likedMovie: any) =>
                          likedMovie.movieId === movie.id &&
                          likedMovie.userId === userId
                      ) ? (
                        <IoMdHeart />
                      ) : (
                        <IoIosHeartEmpty />
                      )}
                    </button>
                    <Link
                      className="text-indigo-600 flex justify-between items-center ml-2"
                      href={`/movies/${movie.id}/`}
                    >
                      View More <GrFormView className="text-2xl " />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
          <Pagination />
        </>
      ) : null}
    </div>
  );
};

export default MovieList;
