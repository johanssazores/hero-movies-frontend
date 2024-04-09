import { useState, useEffect } from "react";

export const useLikedMovies = () => {
  const [likedMovies, setLikedMovies] = useState([]) as any;

  useEffect(() => {
    const storedLikedMovies =
      JSON.parse(localStorage.getItem("likedMovies") as any) || [];
    setLikedMovies(storedLikedMovies);
  }, []);

  const toggleLike = (movieId: any, userId: any) => {
    let updatedLikedMovies = [] as any;
    const likedMovieIndex = likedMovies.findIndex(
      (likedMovie: any) => likedMovie.movieId === movieId
    );

    if (likedMovieIndex !== -1) {
      updatedLikedMovies = likedMovies.filter(
        (likedMovie: any) => likedMovie.movieId !== movieId
      );
    } else {
      updatedLikedMovies = [
        ...likedMovies,
        { movieId: movieId, userId: userId },
      ];
    }
    setLikedMovies(updatedLikedMovies);
    localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
  };

  return { likedMovies, toggleLike };
};
