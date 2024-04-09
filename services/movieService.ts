const fetchMovies = async (
  page: number
): Promise<{ movies: any[]; totalPages: number }> => {
  try {
    const token = localStorage.getItem("heroMoviesToken");
    const response = await fetch(
      `/api/movies/?paged=${page}&posts_per_page=10&token=${token}`
    );

    const data = await response.json();
    return {
      movies: data.movies,
      totalPages: data.total_pages,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { movies: [], totalPages: 1 };
  }
};

const fetchMovie = async (movieId: string): Promise<any> => {
  try {
    const token = localStorage.getItem("heroMoviesToken");
    const response = await fetch(`/api/movie/${movieId}?token=${token}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single movie:", error);
    return null;
  }
};

export { fetchMovies, fetchMovie };
