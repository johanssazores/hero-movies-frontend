import React from "react";

import type { Metadata } from "next";
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
    return "Movie Not Found";
  }

  const getMovie = async (movieId: any) => {
    const request = await fetch(
      `${process.env.WP_URL}/wp-json/herothemes/v1/movies/${movieId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        cache: "no-store",
      }
    );
    const response = await request.json();
    return response;
  };

  const movie = await getMovie(params.slug);
  console.log(movie);

  return <div className="mt-10 px-6">{JSON.stringify(movie)}</div>;
};

export default MoviePage;
