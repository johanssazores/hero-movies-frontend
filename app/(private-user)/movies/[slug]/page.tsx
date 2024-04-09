import React from "react";
import type { Metadata } from "next";
import MovieList from "@/components/MovieList";
import Movie from "@/components/Movie";
export const metadata: Metadata = {
  title: "Hero Movies - Movie",
  description: "Hero Movies  - Movie",
};
export interface MovieSingleProps {
  params: {
    slug?: string;
  };
}
const MoviePage = async ({ params }: MovieSingleProps) => {
  if (!params.slug) {
    return <MovieList />;
  }

  return (
    <div className="mt-10 px-6">
      <Movie id={params.slug} />
    </div>
  );
};

export default MoviePage;
