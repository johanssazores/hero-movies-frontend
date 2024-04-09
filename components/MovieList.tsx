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
import { useSession } from "next-auth/react";
const MovieList: React.FC = () => {
  const { data: session } = useSession() as any;
  const [likedMovies, setLikedMovies] = useState([]) as any;
  const dispatch = useDispatch();
  const { movies, currentPage } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies(currentPage, session?.user?.token));
  }, [dispatch, currentPage, session?.user?.token]);

  useEffect(() => {
    const storedLikedMovies =
      JSON.parse(localStorage.getItem("likedMovies") as any) || [];
    setLikedMovies(storedLikedMovies);
  }, []);

  const toggleLike = (movieId: any) => {
    let updatedLikedMovies = [] as any;
    if (likedMovies.includes(movieId)) {
      updatedLikedMovies = likedMovies.filter((id: any) => id !== movieId);
    } else {
      updatedLikedMovies = [...likedMovies, movieId];
    }
    setLikedMovies(updatedLikedMovies);
    localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
  };

  return (
    <div className="mt-10 px-6">
      {movies?.length ? (
        <>
          <Grid>
            {movies.map((movie: any) => (
              <Card key={movie.id}>
                <div className="flex flex-col justify-between h-full">
                  <Link
                    href={`/movies/${movie.id}/?ref=${
                      localStorage.getItem("heroMoviesToken") || ""
                    }`}
                  >
                    <div className="mt-2">
                      <h2
                        className="font-semibold"
                        dangerouslySetInnerHTML={{ __html: movie.title }}
                      ></h2>
                      <p
                        className="font-light"
                        dangerouslySetInnerHTML={{ __html: movie.description }}
                      ></p>
                    </div>
                  </Link>
                  <div className="mt-2">
                    <button
                      onClick={() => toggleLike(movie.id)}
                      className="text-indigo-600 text-2xl"
                    >
                      {likedMovies.includes(movie.id) ? (
                        <IoMdHeart />
                      ) : (
                        <IoIosHeartEmpty />
                      )}
                    </button>
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
