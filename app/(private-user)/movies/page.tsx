import React from "react";
import MovieList from "@/components/MovieList";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hero Movies - Movies",
  description: "Hero Movies  - Movies",
};

const MoviesPage = () => {
  return <MovieList />;
};

export default MoviesPage;
