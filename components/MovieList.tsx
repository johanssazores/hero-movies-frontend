"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchMovies } from "@/redux/actions/movieActions";
import { useRouter } from "next/navigation";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";

const MovieList: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) {
    router.push("/");
  }

  const dispatch = useDispatch();
  const { movies, currentPage } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="mt-10">
      <Grid>
        {movies.map((movie: any) => (
          <Card key={movie.id}>
            <h2 className="font-semibold">{movie.title}</h2>
          </Card>
        ))}
      </Grid>
      <Pagination />
    </div>
  );
};

export default MovieList;
